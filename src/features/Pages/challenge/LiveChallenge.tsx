import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { collection, onSnapshot, doc, setDoc, getDoc, updateDoc, serverTimestamp, Timestamp, deleteDoc, query, orderBy, limit } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { useAuth } from "../../../contexts/AuthContext";

const CHALLENGE_DOC_ID = "liveChallenge"; // Changed to 'liveChallenge'

// -------------------- UI Atoms --------------------
const Button = ({ children, onClick, className = "", type = "button", disabled }) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`px-5 py-2 rounded-full text-white font-semibold shadow-md transition-all active:scale-95 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
  >
    {children}
  </button>
);

const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl p-5 md:p-6 bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-md text-white shadow-lg border border-slate-700/30 ${className}`}>
    {children}
  </div>
);

const Clock = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const ArrowLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const Dot = ({ className = "" }) => <span className={`inline-block w-1.5 h-1.5 rounded-full ${className}`} />;

// -------------------- Skeletons --------------------
const Skeleton = ({ className = "" }) => <div className={`animate-pulse bg-slate-700/60 rounded ${className}`} />;

const SkeletonCountdown = () => (
  <Card>
    <div className="flex items-center justify-center gap-2 mb-4">
      <Skeleton className="w-6 h-6 rounded-full" />
      <Skeleton className="h-5 w-1/2" />
    </div>
    <div className="grid grid-cols-4 gap-2 text-center mb-5">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/30">
          <Skeleton className="h-7 w-9 mx-auto mb-1" />
          <Skeleton className="h-3 w-2/3 mx-auto" />
        </div>
      ))}
    </div>
    <Skeleton className="h-11 w-full" />
  </Card>
);

const SkeletonInfoCard = () => (
  <Card className="flex flex-col items-center text-center">
    <Skeleton className="w-12 h-12 rounded-full mb-3" />
    <Skeleton className="h-5 w-2/3 mb-1" />
    <Skeleton className="h-4 w-full" />
  </Card>
);

// -------------------- Helpers --------------------
function formatDHMS(ms) {
  const total = Math.max(0, Math.floor(ms / 1000));
  const days = Math.floor(total / 86400);
  const hours = Math.floor((total % 86400) / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;
  return { days, hours, minutes, seconds };
}

function dhmsList(obj) {
  return [
    { label: "days", value: obj.days },
    { label: "hours", value: obj.hours },
    { label: "minutes", value: obj.minutes },
    { label: "seconds", value: obj.seconds },
  ];
}

function useServerTimeOffset() {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const run = async () => {
      try {
        const ref = doc(db, "__time__", "now");
        await setDoc(ref, { ts: serverTimestamp() }, { merge: true });
        const snap = await getDoc(ref);
        const serverTs = snap?.get("ts");
        if (serverTs instanceof Timestamp) {
          const serverMs = serverTs.toMillis();
          setOffset(serverMs - Date.now());
        }
      } catch (e) {
        // best effort only
      }
    };
    run();
  }, []);
  return offset;
}

function useSessionId() {
  const ref = useRef(null);
  if (!ref.current) {
    const key = "challenge_session_id";
    const existing = localStorage.getItem(key);
    if (existing) ref.current = existing;
    else {
      const id = Math.random().toString(36).slice(2) + Date.now().toString(36);
      localStorage.setItem(key, id);
      ref.current = id;
    }
  }
  return ref.current;
}

// -------------------- Question Card --------------------
function QuestionCard({ q, index, total, onAnswer }) {
  const [picked, setPicked] = useState(null);
  return (
    <Card>
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs px-2 py-1 rounded-full bg-slate-700/60">Question {index + 1}/{total}</span>
        <span className="text-xs text-slate-300">{q?.topic || ""}</span>
      </div>
      <h3 className="text-lg font-semibold mb-4 leading-snug">{q.questionText}</h3>
      <div className="space-y-2">
        {q.options?.map((opt, i) => (
          <button
            key={i}
            onClick={() => setPicked(i)}
            className={`w-full text-left p-3 rounded-xl border transition ${picked === i ? "border-blue-400 bg-blue-500/10" : "border-slate-700/40 bg-slate-800/40"}`}
          >
            <div className="flex items-center gap-2">
              <Dot className={picked === i ? "bg-blue-400" : "bg-slate-500"} />
              <span className="text-sm md:text-base">{opt}</span>
            </div>
          </button>
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        <Button className="bg-slate-700/70 w-full" onClick={() => setPicked(null)}>Clear</Button>
        <Button className="bg-gradient-to-r from-blue-500 to-purple-600 w-full" onClick={() => onAnswer(picked)} disabled={picked === null}>
          Confirm
        </Button>
      </div>
    </Card>
  );
}

// -------------------- Leaderboard --------------------
function Leaderboard({ challengeId }) {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const qRef = query(
      collection(db, "liveChallenges", challengeId, "submissions"),
      orderBy("score", "desc"),
      orderBy("timeMs", "asc"),
      limit(100)
    );
    const unsub = onSnapshot(qRef, (qs) => {
      const arr = [];
      qs.forEach((d) => arr.push(d.data()));
      setRows(arr);
    });
    return () => unsub();
  }, [challengeId]);

  if (!rows.length) {
    return (
      <Card>
        <h3 className="font-semibold mb-2">Leaderboard</h3>
        <p className="text-slate-300 text-sm">No results yet. Please check back soon.</p>
      </Card>
    );
  }

  return (
    <Card>
      <h3 className="font-semibold mb-3">Leaderboard</h3>
      <div className="overflow-x-auto -mx-3 md:mx-0">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-slate-300">
              <th className="text-left p-3">Rank</th>
              <th className="text-left p-3">User</th>
              <th className="text-left p-3">Score</th>
              <th className="text-left p-3">Time</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={(r.uid || r.name || "") + i} className="border-t border-slate-700/40">
                <td className="p-3">#{i + 1}</td>
                <td className="p-3 truncate max-w-[160px]">{r.displayName || r.name || r.uid?.slice(0, 6) || "User"}</td>
                <td className="p-3">{r.score}</td>
                <td className="p-3">{formatMs(r.timeMs)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

function formatMs(ms) {
  if (!ms && ms !== 0) return "";
  const s = Math.floor(ms / 1000);
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}m ${sec}s`;
}

// -------------------- Main Page --------------------
export default function LiveChallengePage() {
  const navigate = useNavigate();
  const { currentUser } = useAuth?.() || { currentUser: null };
  const sessionId = useSessionId();
  const timeOffset = useServerTimeOffset();

  const [loading, setLoading] = useState(true);
  const [challenge, setChallenge] = useState(null);
  const [now, setNow] = useState(Date.now());
  const [presenceCount, setPresenceCount] = useState(0);
  const [phase, setPhase] = useState("scheduled");

  useEffect(() => {
    const ref = doc(db, "liveChallenges", CHALLENGE_DOC_ID);
    const unsub = onSnapshot(ref, (snap) => {
      const data = snap.data();
      setChallenge(data || null);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    if (!challenge) return;
    const presRef = collection(db, "liveChallenges", CHALLENGE_DOC_ID, "presence");
    const unsub = onSnapshot(presRef, (qs) => setPresenceCount(qs.size));
    return () => unsub();
  }, [challenge]);

  useEffect(() => {
    const id = (currentUser?.uid || sessionId);
    const ref = doc(db, "liveChallenges", CHALLENGE_DOC_ID, "presence", id);
    const add = async () => {
      try {
        await setDoc(ref, { uid: currentUser?.uid || null, sessionId, at: serverTimestamp() }, { merge: true });
      } catch {}
    };
    const remove = async () => {
      try { await deleteDoc(ref); } catch {}
    };
    add();
    window.addEventListener("beforeunload", remove);
    return () => {
      window.removeEventListener("beforeunload", remove);
      remove();
    };
  }, [currentUser, sessionId]);

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now() + timeOffset), 1000);
    return () => clearInterval(t);
  }, [timeOffset]);

  const timeline = useMemo(() => {
    const startMs = challenge?.startTime instanceof Timestamp ? challenge.startTime.toMillis() : null;
    const endMs = challenge?.endTime instanceof Timestamp ? challenge.endTime.toMillis() : (startMs && challenge?.durationMinutes ? startMs + challenge.durationMinutes * 60_000 : null);
    return { startMs, endMs };
  }, [challenge]);

  useEffect(() => {
    if (!challenge) return;
    const s = timeline.startMs;
    const e = timeline.endMs;
    let p = challenge.status || "scheduled";
    if (s && now < s) p = "scheduled";
    else if (s && e && now >= s && now < e) p = "live";
    else if ((e && now >= e) || (!s && challenge.status === "ended")) p = "ended";
    setPhase(p);
  }, [challenge, now, timeline]);

  const { label, countdown } = useMemo(() => {
    const s = timeline.startMs;
    const e = timeline.endMs;
    if (phase === "scheduled" && s) return { label: "Next Challenge Starts In", countdown: s - now };
    if (phase === "live" && e) return { label: "Time Remaining", countdown: e - now };
    return { label: "", countdown: 0 };
  }, [phase, timeline, now]);

  const questions = Array.isArray(challenge?.questions) ? challenge.questions : [];
  const [qIndex, setQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const total = questions.length;

  useEffect(() => {
    setQIndex(0);
    setScore(0);
    setStarted(false);
    setFinished(false);
  }, [challenge?.startTime?.seconds, challenge?.endTime?.seconds]);

  const handleAnswer = async (pickedIndex) => {
    const q = questions[qIndex];
    const correct = pickedIndex === q?.correctAnswer;
    if (correct) setScore((s) => s + q.points);

    if (qIndex + 1 < total) {
      setQIndex((i) => i + 1);
    } else {
      setFinished(true);
      try {
        const id = (currentUser?.uid || sessionId);
        const ref = doc(db, "liveChallenges", CHALLENGE_DOC_ID, "submissions", id);
        const timeSpent = Math.max(0, (Date.now() + timeOffset) - (timeline.startMs || Date.now()));
        await setDoc(ref, {
          uid: currentUser?.uid || null,
          displayName: currentUser?.displayName || "Guest",
          score,
          timeMs: timeSpent,
          at: serverTimestamp(),
        }, { merge: true });
      } catch {}
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  return (
    <div className="min-h-screen text-white p-4 md:p-6 relative overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900" />
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-40">
          {[...Array(14)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-pulse"
              style={{
                width: Math.random() * 260 + 60,
                height: Math.random() * 260 + 60,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, ${i % 3 === 0 ? "rgba(99,102,241,0.35)" : i % 3 === 1 ? "rgba(139,92,246,0.35)" : "rgba(59,130,246,0.35)"})`,
                animationDuration: `${14 + Math.random() * 10}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between mb-4 md:mb-6">
        <Button onClick={() => navigate(-1)} className="bg-slate-800/70 backdrop-blur-md flex items-center gap-2 border border-slate-700/30">
          <ArrowLeft /> Back
        </Button>
        <div className="flex items-center gap-2 text-xs md:text-sm bg-emerald-500/20 border border-emerald-400/40 px-3 py-1.5 rounded-full">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{presenceCount} live now</span>
        </div>
      </div>

      <div className="text-center mb-4 md:mb-6">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Live Challenge Arena</h1>
        <p className="text-slate-200/90 mt-1 md:mt-2 text-sm md:text-base">Compete in real‑time events worldwide</p>
      </div>

      <motion.div variants={containerVariants} initial="hidden" animate="show" className="w-full mx-auto max-w-xl">
        <AnimatePresence mode="wait">
          {loading || !challenge ? (
            <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <SkeletonCountdown />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                <SkeletonInfoCard />
                <SkeletonInfoCard />
              </div>
            </motion.div>
          ) : (
            <motion.div key="loaded" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {(phase === "scheduled" || phase === "live") && (
                <Card className="mb-4">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Clock />
                    <h2 className="text-base md:text-lg font-semibold">{label}</h2>
                  </div>
                  {(() => {
                    const parts = formatDHMS(countdown);
                    return (
                      <div className="grid grid-cols-4 gap-2 text-center mb-4">
                        {dhmsList(parts).map(({ label, value }) => (
                          <div key={label} className="bg-slate-800/50 p-3 rounded-xl backdrop-blur-md border border-slate-700/30">
                            <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{String(value).padStart(2, "0")}</div>
                            <div className="text-[10px] md:text-xs text-slate-300 mt-1 uppercase">{label}</div>
                          </div>
                        ))}
                      </div>
                    );
                  })()}
                  {phase === "scheduled" && (
                    <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 w-full py-3">
                      Register Now
                    </Button>
                  )}
                  {phase === "live" && !started && (
                    <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 w-full py-3" onClick={() => setStarted(true)}>
                      Start Challenge
                    </Button>
                  )}
                </Card>
              )}
              <Card>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold">{challenge.title || "Weekly Challenge"}</h3>
                  <p className="text-slate-300 text-sm">{challenge.description || ""}</p>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-slate-300 mt-3">
                  {challenge.subjectName && <span>📚 {challenge.subjectName}</span>}
                  {challenge.startTime && (
                    <span>📅 {challenge.startTime.toDate().toLocaleString()}</span>
                  )}
                  {challenge.durationMinutes && <span>⏱ {challenge.durationMinutes} mins</span>}
                  <span>👥 {presenceCount} live</span>
                </div>
              </Card>
              {phase === "live" && started && !finished && (
                <div className="mt-4">
                  {total > 0 ? (
                    <QuestionCard q={questions[qIndex]} index={qIndex} total={total} onAnswer={handleAnswer} />
                  ) : (
                    <Card>
                      <h3 className="font-semibold mb-2">Waiting for Questions…</h3>
                      <p className="text-slate-300 text-sm">Admin has started the challenge, but no questions were added yet.</p>
                    </Card>
                  )}
                </div>
              )}
              {((phase === "ended" && (challenge.showLeaderboard ?? true)) || finished) && (
                <div className="mt-4">
                  <Leaderboard challengeId={CHALLENGE_DOC_ID} />
                </div>
              )}
              {phase === "scheduled" && (challenge.showLeaderboard === false) && (
                <p className="text-center text-slate-300 text-xs mt-3">Results hidden until the next event starts.</p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      {(phase === "live") && (
        <div className="fixed bottom-4 right-4 bg-red-500/90 backdrop-blur-md text-white px-4 py-2 rounded-full flex items-center gap-2 animate-pulse shadow-lg">
          <span className="w-2 h-2 bg-white rounded-full" />
          <span className="text-sm font-semibold">LIVE NOW</span>
        </div>
      )}
    </div>
  );
}