import React, { useState } from 'react';
import { noteCollections } from '../../data/NoteCollections';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronUp, BookOpen } from 'lucide-react';

const HandoutPage = () => {
  const [expandedSubject, setExpandedSubject] = useState<string | null>(null);
  const navigate = useNavigate();

  const toggleSubject = (subjectId: string) => {
    setExpandedSubject(expandedSubject === subjectId ? null : subjectId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
            Study Handouts
          </h1>
          <p className="text-lg text-gray-600">
            Access comprehensive notes for all your subjects
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {noteCollections.map((subject) => (
            <div 
              key={subject.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <div 
                className="p-6 cursor-pointer flex justify-between items-center"
                onClick={() => toggleSubject(subject.id)}
              >
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">{subject.icon}</span>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {subject.name}
                  </h2>
                </div>
                {expandedSubject === subject.id ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </div>

              {expandedSubject === subject.id && (
                <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                  <ul className="space-y-2">
                    {subject.chapters.map((chapter) => (
                      <li key={chapter.id}>
                        <button
                          onClick={() => navigate(`/notes/${subject.id}/${chapter.id}`)}
                          className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-center space-x-3">
                            <BookOpen className="h-4 w-4 text-purple-600" />
                            <span className="text-gray-700">{chapter.title}</span>
                          </div>
                          <span className="text-xs text-gray-500">View</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HandoutPage;