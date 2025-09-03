import React, { useState, useEffect } from "react";

// Types
interface Subject {
  id: string;
  name: string;
  icon: string;
  pdfUrl: string;
  downloaded: boolean;
  fileSize?: number;
  progress?: number;
  localUrl?: string;
  downloadDate?: string;
  filePath?: string;
}

interface SubjectCardProps {
  subject: Subject;
  onDownload: (subject: Subject) => void;
  onOpen: (subject: Subject) => void;
  onDelete: (subject: Subject) => void;
}

interface PDFViewerProps {
  subject: Subject;
  onClose: () => void;
}

// Convert Google Drive view link to direct download
const convertToDownloadLink = (viewLink: string) => {
  if (viewLink.includes("/file/d/")) {
    const fileId = viewLink.split("/file/d/")[1].split("/")[0];
    return `https://drive.google.com/uc?export=download&id=${fileId}`;
  } else if (viewLink.includes("id=")) {
    const fileId = viewLink.split("id=")[1].split("&")[0];
    return `https://drive.google.com/uc?export=download&id=${fileId}`;
  }
  return viewLink;
};

// Format file size
const formatFileSize = (sizeInMB: number) => `${sizeInMB.toFixed(1)} MB`;

// Subject Card
const SubjectCard: React.FC<SubjectCardProps> = ({
  subject,
  onDownload,
  onOpen,
  onDelete,
}) => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
      <div className="flex flex-col items-center p-4 flex-grow">
        <div className="text-4xl mb-2">{subject.icon}</div>
        <h3 className="text-lg font-semibold text-center text-gray-800 mb-1">
          {subject.name}
        </h3>
        {subject.fileSize && (
          <p className="text-sm text-gray-500 mb-1">
            {formatFileSize(subject.fileSize)}
          </p>
        )}
        {subject.downloaded && subject.downloadDate && (
          <p className="text-xs text-gray-400">
            Downloaded: {new Date(subject.downloadDate).toLocaleDateString()}
          </p>
        )}
      </div>

      <div className="p-3 bg-gray-50 border-t border-gray-100">
        {!subject.downloaded ? (
          <div>
            {subject.progress !== undefined && subject.progress > 0 && (
              <div className="mb-2">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                    style={{ width: `${subject.progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Downloading...</span>
                  <span>{subject.progress}%</span>
                </div>
              </div>
            )}
            <button
              className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              onClick={() => onDownload(subject)}
              disabled={subject.progress !== undefined && subject.progress > 0}
            >
              {subject.progress !== undefined && subject.progress > 0
                ? `Downloading ${subject.progress}%`
                : "Download"}
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <button
              className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              onClick={() => onOpen(subject)}
            >
              Open PDF
            </button>

            <div className="relative">
              <button
                className="w-full py-1 text-xs text-gray-500 hover:text-gray-700"
                onClick={() => setShowOptions(!showOptions)}
              >
                Options ▼
              </button>
              {showOptions && (
                <div className="absolute bottom-full left-0 right-0 mb-1 bg-white rounded-md shadow-lg border border-gray-200 z-10">
                  <button
                    className="w-full px-3 py-2 text-sm text-red-500 hover:bg-gray-100 text-left"
                    onClick={() => {
                      onDelete(subject);
                      setShowOptions(false);
                    }}
                  >
                    Delete Download
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// PDF Viewer
const PDFViewer: React.FC<PDFViewerProps> = ({ subject, onClose }) => {
  const [pdfUrl, setPdfUrl] = useState(subject.localUrl || subject.pdfUrl);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-4xl h-full max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">{subject.name}</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            ✕
          </button>
        </div>
        <div className="flex-1 overflow-auto p-4 flex justify-center">
          {pdfUrl ? (
            <iframe
              src={pdfUrl}
              className="w-full h-full border-none"
              title={`PDF Viewer for ${subject.name}`}
            />
          ) : (
            <p>Loading PDF...</p>
          )}
        </div>
      </div>
    </div>
  );
};

// Main Component
const SubjectsModule: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(
    null
  );
  const [isPDFViewerOpen, setIsPDFViewerOpen] = useState(false);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [isOnline, setIsOnline] = useState(true);

  // Check network
  useEffect(() => {
    const updateOnlineStatus = () => setIsOnline(navigator.onLine);
    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);
    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, []);

  // Load subjects
  useEffect(() => {
    const savedSubjects = localStorage.getItem("freshHubSubjects");
    if (savedSubjects) {
      setSubjects(JSON.parse(savedSubjects));
    } else {
      // Initialize subjects with your fixed Logic link
      const initialSubjects: Subject[] = [
        {
          id: "1",
          name: "Logic",
          icon: "🧠",
          pdfUrl:
            'https://www.dropbox.com/scl/fi/ffs3o6z12gxc5zkwxzzvk/Lij-sami-question-2012-1.pdf?rlkey=uuufo7m6stofkybvjy0f7ik7g&st=iydo4g9o?dl=1',
          downloaded: false,
          fileSize: 2.5,
        },
        {
          id: "2",
          name: "Psychology",
          icon: "📊",
          pdfUrl: "https://drive.google.com/uc?export=download&id=PSYCHOLOGY_PDF_ID",
          downloaded: false,
          fileSize: 3.1,
        },
        // Add more subjects as needed
      ];
      setSubjects(initialSubjects);
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (subjects.length > 0) {
      localStorage.setItem("freshHubSubjects", JSON.stringify(subjects));
    }
  }, [subjects]);

  // Download handler
  const handleDownload = async (subject: Subject) => {
    if (!isOnline) {
      alert("You are offline. Connect to the internet.");
      return;
    }

    setSubjects((prev) =>
      prev.map((s) => (s.id === subject.id ? { ...s, progress: 0 } : s))
    );

    try {
      const downloadUrl = convertToDownloadLink(subject.pdfUrl);

      // Simple fetch for web
      const response = await fetch(downloadUrl);
      if (!response.ok) throw new Error("Failed to fetch file");

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      setSubjects((prev) =>
        prev.map((s) =>
          s.id === subject.id
            ? { ...s, downloaded: true, localUrl: url, progress: undefined, downloadDate: new Date().toISOString() }
            : s
        )
      );
    } catch (error) {
      console.error("Download failed:", error);
      setSubjects((prev) =>
        prev.map((s) => (s.id === subject.id ? { ...s, progress: undefined } : s))
      );
      alert("Download failed. Check your internet or link.");
    }
  };

  const handleOpen = (subject: Subject) => {
    setSelectedSubject(subject);
    setIsPDFViewerOpen(true);
  };

  const handleDelete = (subject: Subject) => {
    if (window.confirm("Delete downloaded PDF?")) {
      setSubjects((prev) =>
        prev.map((s) =>
          s.id === subject.id ? { ...s, downloaded: false, localUrl: undefined } : s
        )
      );
    }
  };

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {subjects.map((subject) => (
        <SubjectCard
          key={subject.id}
          subject={subject}
          onDownload={handleDownload}
          onOpen={handleOpen}
          onDelete={handleDelete}
        />
      ))}

      {isPDFViewerOpen && selectedSubject && (
        <PDFViewer
          subject={selectedSubject}
          onClose={() => setIsPDFViewerOpen(false)}
        />
      )}
    </div>
  );
};

export default SubjectsModule;
