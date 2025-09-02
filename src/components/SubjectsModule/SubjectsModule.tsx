import React, { useState, useEffect } from 'react';

// Define types
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
}

interface SubjectCardProps {
  subject: Subject;
  onDownload: (subject: Subject) => void;
  onOpen: (subject: Subject) => void;
}

interface PDFViewerProps {
  subject: Subject;
  onClose: () => void;
}

// Utility function to convert Google Drive view links to download links
const convertToDownloadLink = (viewLink: string): string => {
  if (viewLink.includes('/file/d/')) {
    const fileId = viewLink.split('/file/d/')[1].split('/')[0];
    return `https://drive.google.com/uc?export=download&id=${fileId}`;
  } else if (viewLink.includes('id=')) {
    const fileId = viewLink.split('id=')[1].split('&')[0];
    return `https://drive.google.com/uc?export=download&id=${fileId}`;
  }
  return viewLink;
};

// Mock file sizes for each subject (in MB)
const getFileSize = (subjectId: string): number => {
  const sizes: Record<string, number> = {
    '1': 2.5, '2': 3.1, '3': 4.2, '4': 2.8, '5': 3.5,
    '6': 2.1, '7': 5.3, '8': 3.7, '9': 4.1, '10': 6.2,
    '11': 4.8, '12': 3.9, '13': 2.7, '14': 4.5, '15': 3.2,
    '16': 5.7, '17': 7.2, '18': 6.5, '19': 2.9
  };
  return sizes[subjectId] || 3.0;
};

// Format file size for display
const formatFileSize = (sizeInMB: number): string => {
  return `${sizeInMB.toFixed(1)} MB`;
};

// Format download date
const formatDownloadDate = (dateString?: string): string => {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  return `Downloaded: ${date.toLocaleDateString()}`;
};

// Subject Card Component
const SubjectCard: React.FC<SubjectCardProps> = ({
  subject,
  onDownload,
  onOpen
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col">
      <div className="flex flex-col items-center p-4 flex-grow">
        <div className="text-4xl mb-3">{subject.icon}</div>
        <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">{subject.name}</h3>
        {subject.fileSize && (
          <p className="text-sm text-gray-500 mb-1">{formatFileSize(subject.fileSize)}</p>
        )}
        {subject.downloaded && subject.downloadDate && (
          <p className="text-xs text-gray-400">{formatDownloadDate(subject.downloadDate)}</p>
        )}
      </div>
      
      <div className="p-3 bg-gray-50 border-t border-gray-100">
        {!subject.downloaded ? (
          <div>
            {subject.progress !== undefined && subject.progress > 0 ? (
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
            ) : null}
            
            <button 
              className="w-full py-2 bg-green-500 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-green-600 transition-colors disabled:bg-green-300"
              onClick={() => onDownload(subject)}
              disabled={subject.progress !== undefined && subject.progress > 0}
            >
              {subject.progress !== undefined && subject.progress > 0 ? (
                <>
                  <span>Downloading</span>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download
                </>
              )}
            </button>
          </div>
        ) : (
          <button 
            className="w-full py-2 bg-blue-500 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors"
            onClick={() => onOpen(subject)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Open PDF
          </button>
        )}
      </div>
    </div>
  );
};

// PDF Viewer Component
const PDFViewer: React.FC<PDFViewerProps> = ({ subject, onClose }) => {
  const [zoomLevel, setZoomLevel] = useState(100);
  const [showMenu, setShowMenu] = useState(false);

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 25, 200));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 25, 50));
  };

  const toggleMenu = () => {
    setShowMenu(prev => !prev);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-4xl h-full max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">{subject.name}</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* PDF Content */}
        <div className="flex-1 overflow-auto p-4 flex justify-center">
          {subject.localUrl ? (
            <iframe 
              src={subject.localUrl} 
              className="w-full h-full border-none"
              title={`PDF Viewer for ${subject.name}`}
            />
          ) : (
            <div className="bg-gray-100 w-full h-full flex items-center justify-center">
              <div className="text-center p-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-red-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-lg font-medium text-gray-700">PDF Content for {subject.name}</p>
                <p className="text-gray-500 mt-2">Zoom: {zoomLevel}%</p>
              </div>
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="p-3 border-t border-gray-200 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <button 
              onClick={handleZoomOut}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              disabled={zoomLevel <= 50}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
              </svg>
            </button>
            
            <span className="text-sm font-medium text-gray-700">{zoomLevel}%</span>
            
            <button 
              onClick={handleZoomIn}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              disabled={zoomLevel >= 200}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m0 0v6m0-6h6m-6 0H7" />
              </svg>
            </button>
          </div>

          <div className="relative">
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>

            {showMenu && (
              <div className="absolute right-0 bottom-full mb-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                  Bookmark
                </button>
                <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2z" />
                  </svg>
                  Print
                </button>
                <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  Share
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Component
const SubjectsModule: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [isPDFViewerOpen, setIsPDFViewerOpen] = useState(false);
  const [subjects, setSubjects] = useState<Subject[]>([]);

  // Load saved data from localStorage on component mount
  useEffect(() => {
    const savedSubjects = localStorage.getItem('freshHubSubjects');
    
    if (savedSubjects) {
      // Use saved data if available
      setSubjects(JSON.parse(savedSubjects));
    } else {
      // Initialize with default data if no saved data
      const initialSubjects: Subject[] = [
        { id: '1', name: 'Logic', icon: '🧠', pdfUrl: 'https://drive.google.com/file/d/1EZnjATwiEUvszFr0LA6U9bOJw8CH4yx5/view?usp=drivesdk', downloaded: false, fileSize: getFileSize('1') },
        { id: '2', name: 'Psychology', icon: '📊', pdfUrl: 'https://drive.google.com/uc?export=download&id=PSYCHOLOGY_PDF_ID', downloaded: false, fileSize: getFileSize('2') },
        { id: '3', name: 'Geography', icon: '🌎', pdfUrl: 'https://drive.google.com/uc?export=download&id=GEOGRAPHY_PDF_ID', downloaded: false, fileSize: getFileSize('3') },
        { id: '4', name: 'Economics', icon: '💹', pdfUrl: 'https://drive.google.com/uc?export=download&id=ECONOMICS_PDF_ID', downloaded: false, fileSize: getFileSize('4') },
        { id: '5', name: 'Anthropology', icon: '👥', pdfUrl: 'https://drive.google.com/uc?export=download&id=ANTHROPOLOGY_PDF_ID', downloaded: false, fileSize: getFileSize('5') },
        { id: '6', name: 'Civic', icon: '🏛️', pdfUrl: 'https://drive.google.com/uc?export=download&id=CIVIC_PDF_ID', downloaded: false, fileSize: getFileSize('6') },
        { id: '7', name: 'History', icon: '📜', pdfUrl: 'https://drive.google.com/uc?export=download&id=HISTORY_PDF_ID', downloaded: false, fileSize: getFileSize('7') },
        { id: '8', name: 'English Skill 1', icon: '🔤', pdfUrl: 'https://drive.google.com/uc?export=download&id=ENGLISH1_PDF_ID', downloaded: false, fileSize: getFileSize('8') },
        { id: '9', name: 'English Skill 2', icon: '📝', pdfUrl: 'https://drive.google.com/uc?export=download&id=ENGLISH2_PDF_ID', downloaded: false, fileSize: getFileSize('9') },
        { id: '10', name: 'Math', icon: '➕', pdfUrl: 'https://drive.google.com/uc?export=download&id=MATH_PDF_ID', downloaded: false, fileSize: getFileSize('10') },
        { id: '11', name: 'C++', icon: '💻', pdfUrl: 'https://drive.google.com/uc?export=download&id=CPP_PDF_ID', downloaded: false, fileSize: getFileSize('11') },
        { id: '12', name: 'Emerging Technology', icon: '🚀', pdfUrl: 'https://drive.google.com/uc?export=download&id=TECH_PDF_ID', downloaded: false, fileSize: getFileSize('12') },
        { id: '13', name: 'Entrepreneurship', icon: '💡', pdfUrl: 'https://drive.google.com/uc?export=download&id=ENTREPRENEUR_PDF_ID', downloaded: false, fileSize: getFileSize('13') },
        { id: '14', name: 'Global Trade', icon: '🌐', pdfUrl: 'https://drive.google.com/uc?export=download&id=TRADE_PDF_ID', downloaded: false, fileSize: getFileSize('14') },
        { id: '15', name: 'Inclusive', icon: '🤝', pdfUrl: 'https://drive.google.com/uc?export=download&id=INCLUSIVE_PDF_ID', downloaded: false, fileSize: getFileSize('15') },
        { id: '16', name: 'Applied Math', icon: '📐', pdfUrl: 'https://drive.google.com/uc?export=download&id=APPLIED_MATH_PDF_ID', downloaded: false, fileSize: getFileSize('16') },
        { id: '17', name: 'Organic Chemistry', icon: '🧪', pdfUrl: 'https://drive.google.com/uc?export=download&id=CHEMISTRY_PDF_ID', downloaded: false, fileSize: getFileSize('17') },
        { id: '18', name: 'Biology', icon: '🧬', pdfUrl: 'https://drive.google.com/uc?export=download&id=BIOLOGY_PDF_ID', downloaded: false, fileSize: getFileSize('18') },
        { id: '19', name: 'Civic', icon: '🏛️', pdfUrl: 'https://drive.google.com/uc?export=download&id=CIVIC2_PDF_ID', downloaded: false, fileSize: getFileSize('19') },
      ];

      setSubjects(initialSubjects);
    }
  }, []);

  // Save to localStorage whenever subjects change
  useEffect(() => {
    if (subjects.length > 0) {
      localStorage.setItem('freshHubSubjects', JSON.stringify(subjects));
    }
  }, [subjects]);

  const handleDownload = async (subject: Subject) => {
    // Update subject with progress
    setSubjects(prev => prev.map(s => 
      s.id === subject.id 
        ? { ...s, progress: 0 } 
        : s
    ));
    
    try {
      // Convert Google Drive view link to download link
      const downloadUrl = convertToDownloadLink(subject.pdfUrl);
      
      // Simulate download with progress based on file size
      // Larger files will take longer to "download"
      const totalSteps = Math.max(10, Math.floor(subject.fileSize || 3));
      const stepSize = 100 / totalSteps;
      
      for (let step = 1; step <= totalSteps; step++) {
        const progress = Math.min(100, Math.floor(step * stepSize));
        
        await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
        
        setSubjects(prev => prev.map(s => 
          s.id === subject.id 
            ? { ...s, progress } 
            : s
        ));
      }
      
      // After download completes
      setSubjects(prev => prev.map(s => 
        s.id === subject.id 
          ? { 
              ...s, 
              downloaded: true, 
              progress: undefined, 
              localUrl: downloadUrl,
              downloadDate: new Date().toISOString()
            } 
          : s
      ));
    } catch (error) {
      console.error('Download failed:', error);
      // Reset progress on error
      setSubjects(prev => prev.map(s => 
        s.id === subject.id 
          ? { ...s, progress: undefined } 
          : s
      ));
      alert('Download failed. Please try again.');
    }
  };

  const handleOpenPDF = (subject: Subject) => {
    setSelectedSubject(subject);
    setIsPDFViewerOpen(true);
  };

  const handleClosePDF = () => {
    setIsPDFViewerOpen(false);
    setSelectedSubject(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-800 text-white p-4">
      <div className="max-w-6xl mx-auto">
        <header className="text-center py-8">
          <h1 className="text-3xl font-bold mb-2">Fresh-Hub Subjects</h1>
          <p className="text-blue-100">Explore and download study materials</p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {subjects.map(subject => (
            <SubjectCard
              key={subject.id}
              subject={subject}
              onDownload={handleDownload}
              onOpen={handleOpenPDF}
            />
          ))}
        </div>

        {isPDFViewerOpen && selectedSubject && (
          <PDFViewer
            subject={selectedSubject}
            onClose={handleClosePDF}
          />
        )}
      </div>
    </div>
  );
};

export default SubjectsModule;