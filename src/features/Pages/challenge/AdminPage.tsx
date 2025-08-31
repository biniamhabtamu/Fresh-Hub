import React, { useEffect, useState } from "react";
import { collection, addDoc, updateDoc, deleteDoc, doc, getDocs, Timestamp } from "firebase/firestore";
import { db } from "../../../firebase/config"; // Make sure this path is correct

// This component assumes you have Firebase SDK and Tailwind CSS set up in your project.

const AdminPage: React.FC = () => {
  const [challenges, setChallenges] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<"create" | "manage" | "questions">("create");
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: "", type: "" });

  // Challenge form state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  // Question form state
  const [selectedChallenge, setSelectedChallenge] = useState<any>(null);
  const [questionText, setQuestionText] = useState("");
  const [options, setOptions] = useState<string[]>(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState<number>(0);
  const [explanation, setExplanation] = useState("");
  const [points, setPoints] = useState(10);

  // Show notification
  const showNotification = (message: string, type: string = "success") => {
    setNotification({ show: true, message, type });
    setTimeout(() => setNotification({ show: false, message: "", type: "" }), 3000);
  };

  // Load challenges from Firestore
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const snap = await getDocs(collection(db, "challenges"));
        const challengesData = snap.docs.map((d) => ({
          id: d.id,
          ...d.data(),
          // Convert Firestore Timestamp to Date objects
          startTime: d.data().startTime?.toDate ? d.data().startTime.toDate() : d.data().startTime,
          endTime: d.data().endTime?.toDate ? d.data().endTime.toDate() : d.data().endTime
        }));
        setChallenges(challengesData);
      } catch (error) {
        console.error("Error fetching challenges:", error);
        showNotification("Failed to load challenges", "error");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const validateChallenge = () => {
    if (!title.trim()) return "Challenge title is required";
    if (!startTime) return "Start time is required";
    if (endTime && new Date(startTime) >= new Date(endTime)) {
      return "End time must be after start time";
    }
    return null;
  };

  const validateQuestion = () => {
    if (!questionText.trim()) return "Question text is required";
    if (options.some(opt => !opt.trim())) return "All options must be filled";
    if (correctAnswer < 0 || correctAnswer > 3) return "Correct answer must be between 0 and 3";
    if (!explanation.trim()) return "Explanation is required";
    if (points <= 0) return "Points must be greater than 0";
    return null;
  };

  const createChallenge = async () => {
    const error = validateChallenge();
    if (error) {
      showNotification(error, "error");
      return;
    }

    setLoading(true);
    try {
      const challengeData: any = {
        title: title.trim(),
        description: description.trim(),
        startTime: Timestamp.fromDate(new Date(startTime)),
        status: "scheduled",
        questions: [],
      };

      // Add endTime if provided
      if (endTime) {
        challengeData.endTime = Timestamp.fromDate(new Date(endTime));
      }

      await addDoc(collection(db, "challenges"), challengeData);

      // Refresh challenges list
      const snap = await getDocs(collection(db, "challenges"));
      setChallenges(snap.docs.map((d) => ({ id: d.id, ...d.data() })));

      showNotification("Challenge created successfully");
      setTitle("");
      setDescription("");
      setStartTime("");
      setEndTime("");
    } catch (error) {
      console.error("Error creating challenge:", error);
      showNotification("Failed to create challenge", "error");
    } finally {
      setLoading(false);
    }
  };

  const addQuestion = async () => {
    const error = validateQuestion();
    if (error) {
      showNotification(error, "error");
      return;
    }

    if (!selectedChallenge) {
      showNotification("Select a challenge first", "error");
      return;
    }

    setLoading(true);
    try {
      const updatedQuestions = [
        ...(selectedChallenge.questions || []),
        {
          questionText: questionText.trim(),
          options: options.map(opt => opt.trim()),
          correctAnswer,
          explanation: explanation.trim(),
          points
        },
      ];

      await updateDoc(doc(db, "challenges", selectedChallenge.id), {
        questions: updatedQuestions
      });

      // Update selected challenge in state
      setSelectedChallenge({
        ...selectedChallenge,
        questions: updatedQuestions
      });

      // Update challenges list
      setChallenges(challenges.map(c =>
        c.id === selectedChallenge.id
          ? { ...c, questions: updatedQuestions }
          : c
      ));

      showNotification("Question added successfully");
      // Reset form but keep selected challenge
      setQuestionText("");
      setOptions(["", "", "", ""]);
      setCorrectAnswer(0);
      setExplanation("");
      setPoints(10);
    } catch (error) {
      console.error("Error adding question:", error);
      showNotification("Failed to add question", "error");
    } finally {
      setLoading(false);
    }
  };

  const deleteChallenge = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this challenge? This action cannot be undone.")) {
      return;
    }

    try {
      await deleteDoc(doc(db, "challenges", id));
      setChallenges(challenges.filter((c) => c.id !== id));
      if (selectedChallenge?.id === id) {
        setSelectedChallenge(null);
        setActiveTab("manage");
      }
      showNotification("Challenge deleted successfully");
    } catch (error) {
      console.error("Error deleting challenge:", error);
      showNotification("Failed to delete challenge", "error");
    }
  };

  const formatDate = (date: any) => {
    if (!date) return "Not set";

    let dateObj;
    if (date instanceof Date) {
      dateObj = date;
    } else if (date.seconds) {
      dateObj = new Date(date.seconds * 1000);
    } else {
      dateObj = new Date(date);
    }

    return dateObj.toLocaleString();
  };

  const getChallengeStatus = (challenge: any) => {
    const now = new Date();
    const start = challenge.startTime?.seconds ? new Date(challenge.startTime.seconds * 1000) : new Date(challenge.startTime);
    const end = challenge.endTime?.seconds ? new Date(challenge.endTime.seconds * 1000) : new Date(challenge.endTime);

    if (now < start) return { status: "Scheduled", color: "bg-blue-500" };
    if (!end || now < end) return { status: "Active", color: "bg-green-500" };
    return { status: "Completed", color: "bg-gray-500" };
  };

  return (
    <div className="p-4 md:p-6 max-w-5xl mx-auto space-y-6 min-h-screen bg-gray-50">
      {/* Notification */}
      {notification.show && (
        <div className={`fixed top-4 right-4 z-50 px-4 py-2 rounded-md shadow-lg text-white font-semibold ${
          notification.type === "error" ? "bg-red-500" : "bg-green-500"
        }`}>
          {notification.message}
        </div>
      )}

      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl flex items-center space-x-3">
            <div className="w-5 h-5 border-t-2 border-blue-500 rounded-full animate-spin"></div>
            <span>Processing...</span>
          </div>
        </div>
      )}

      <h1 className="text-3xl md:text-4xl font-bold text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 py-4">
        Admin Dashboard - Weekly Challenges
      </h1>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {[
          { id: "create", label: "Create Challenge" },
          { id: "manage", label: "Manage Challenges" },
          { id: "questions", label: "Add Questions" }
        ].map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 rounded-full font-semibold transition-all ${
              activeTab === tab.id
                ? "bg-blue-500 text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setActiveTab(tab.id as any)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Create Challenge */}
      {activeTab === "create" && (
        <div className="p-6 border rounded-xl shadow-md space-y-4 bg-white">
          <h2 className="text-2xl font-semibold text-gray-800">Create New Challenge</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Challenge Title *</label>
              <input
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter challenge title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter challenge description"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Start Time *</label>
                <input
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  type="datetime-local"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">End Time</label>
                <input
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  type="datetime-local"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                />
              </div>
            </div>
            <button
              className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 font-semibold text-white w-full transition-colors"
              onClick={createChallenge}
              disabled={loading}
            >
              Create Challenge
            </button>
          </div>
        </div>
      )}

      {/* Manage Challenges */}
      {activeTab === "manage" && (
        <div className="space-y-4">
          {challenges.length === 0 ? (
            <div className="text-center py-8 bg-white rounded-lg shadow">
              <p className="text-gray-500">No challenges found. Create your first challenge!</p>
            </div>
          ) : (
            challenges.map((c) => {
              const statusInfo = getChallengeStatus(c);
              return (
                <div
                  key={c.id}
                  className="p-4 border rounded-lg shadow flex flex-col md:flex-row justify-between items-start md:items-center bg-white"
                >
                  <div className="flex-1 mb-3 md:mb-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-bold text-lg text-gray-800">{c.title}</h3>
                      <span className={`px-2 py-1 text-xs rounded-full text-white ${statusInfo.color}`}>
                        {statusInfo.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{c.description}</p>
                    <div className="text-xs text-gray-500 space-y-1">
                      <p>Starts: {formatDate(c.startTime)}</p>
                      {c.endTime && <p>Ends: {formatDate(c.endTime)}</p>}
                      <p>Questions: {c.questions?.length || 0}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 self-end md:self-auto">
                    <button
                      className="px-3 py-2 bg-blue-500 rounded hover:bg-blue-600 text-white text-sm"
                      onClick={() => {
                        setSelectedChallenge(c);
                        setActiveTab("questions");
                      }}
                    >
                      Manage Questions
                    </button>
                    <button
                      className="px-3 py-2 bg-red-500 rounded hover:bg-red-600 text-white text-sm"
                      onClick={() => deleteChallenge(c.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      )}

      {/* Add Questions */}
      {activeTab === "questions" && (
        <div className="space-y-6">
          {!selectedChallenge ? (
            <div className="p-6 border rounded-xl shadow-md bg-white">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Select a Challenge</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {challenges.map((c) => (
                  <div
                    key={c.id}
                    className="p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => setSelectedChallenge(c)}
                  >
                    <h3 className="font-semibold text-gray-800">{c.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Questions: {c.questions?.length || 0}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="p-6 border rounded-xl shadow-md space-y-6 bg-white">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-gray-800">
                  Add Questions for: {selectedChallenge.title}
                </h2>
                <button
                  className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300"
                  onClick={() => setSelectedChallenge(null)}
                >
                  Change Challenge
                </button>
              </div>

              <div className="space-y-4">
                {/* Subject Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject Title</label>
                  <input
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-100"
                    value="Live Challenge"
                    disabled
                  />
                </div>
                {/* Question Amount (Points) */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Question Amount (Points) *</label>
                  <input
                    type="number"
                    min="1"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Points for this question"
                    value={points}
                    onChange={(e) => setPoints(Number(e.target.value))}
                  />
                </div>
                {/* Question */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Question *</label>
                  <input
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter the question"
                    value={questionText}
                    onChange={(e) => setQuestionText(e.target.value)}
                  />
                </div>
                {/* Multiple Choose */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Multiple Choose *</label>
                  <div className="space-y-2">
                    {options.map((opt, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-sm">
                          {i + 1}
                        </span>
                        <input
                          className="flex-1 p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder={`Option ${i + 1}`}
                          value={opt}
                          onChange={(e) => {
                            const newOpts = [...options];
                            newOpts[i] = e.target.value;
                            setOptions(newOpts);
                          }}
                        />
                        <button
                          className={`w-6 h-6 rounded-full border-2 transition-colors duration-200 ease-in-out ${
                            correctAnswer === i
                              ? "bg-blue-500 border-blue-500"
                              : "border-gray-300 hover:border-blue-300"
                          }`}
                          onClick={() => setCorrectAnswer(i)}
                          title="Set as correct answer"
                        >
                          {correctAnswer === i && (
                            <svg className="w-4 h-4 mx-auto text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Correct Answer (Display Only) */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Correct Answer</label>
                  <div className="p-3 border rounded-lg bg-gray-100 text-gray-600">
                    Option {correctAnswer + 1}
                  </div>
                </div>

                {/* Explanation */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Explanation *</label>
                  <textarea
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Explain why this is the correct answer"
                    rows={3}
                    value={explanation}
                    onChange={(e) => setExplanation(e.target.value)}
                  />
                </div>

                {/* Post the Question button */}
                <button
                  className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 font-semibold text-white w-full transition-colors transform hover:scale-105"
                  onClick={addQuestion}
                  disabled={loading}
                >
                  Post the Question
                </button>
              </div>

              {/* List of Questions */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Existing Questions ({selectedChallenge.questions?.length || 0})
                </h3>

                {(!selectedChallenge.questions || selectedChallenge.questions.length === 0) ? (
                  <p className="text-gray-500 text-center py-4">No questions added yet</p>
                ) : (
                  <div className="space-y-4">
                    {selectedChallenge.questions.map((q: any, idx: number) => (
                      <div key={idx} className="p-4 border rounded-lg bg-gray-50">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-semibold text-gray-800">
                              Q{idx + 1}: {q.questionText}
                            </p>
                            <p className="text-sm text-gray-600 mt-1">
                              Points: {q.points || 10} | Correct: Option {q.correctAnswer + 1}
                            </p>
                          </div>
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                            #{idx + 1}
                          </span>
                        </div>

                        <ul className="mt-3 space-y-1">
                          {q.options.map((opt: string, i: number) => (
                            <li
                              key={i}
                              className={`text-sm pl-3 py-1 rounded ${
                                i === q.correctAnswer
                                  ? "bg-green-100 text-green-800 font-medium"
                                  : "text-gray-700"
                              }`}
                            >
                              {i + 1}. {opt}
                              {i === q.correctAnswer && (
                                <span className="ml-2">✅</span>
                              )}
                            </li>
                          ))}
                        </ul>

                        {q.explanation && (
                          <div className="mt-2 p-2 bg-blue-50 rounded">
                            <p className="text-xs font-medium text-blue-800">Explanation:</p>
                            <p className="text-xs text-blue-700">{q.explanation}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminPage;