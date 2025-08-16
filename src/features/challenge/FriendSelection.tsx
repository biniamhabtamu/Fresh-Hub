// src/features/challenge/FriendSelection.tsx
import { useState, useEffect } from 'react';
import { getFriendsList } from '../../firebase/challenge';

interface FriendSelectionProps {
  onFriendSelect: (friend: any) => void;
  onBack: () => void;
}

export default function FriendSelection({ onFriendSelect, onBack }: FriendSelectionProps) {
  const [friends, setFriends] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const friendsList = await getFriendsList();
        setFriends(friendsList);
      } catch (error) {
        console.error('Error fetching friends:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFriends();
  }, []);

  const filteredFriends = friends.filter(friend =>
    friend.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={onBack}
          className="mb-6 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Subject Selection
        </button>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Select a Friend to Challenge</h2>
            
            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search friends..."
                  className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute left-3 top-3.5 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {loading ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              </div>
            ) : filteredFriends.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                {searchTerm ? 'No friends match your search' : 'You have no friends to challenge yet'}
              </div>
            ) : (
              <div className="space-y-3">
                <div 
                  className="p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 cursor-pointer transition-colors"
                  onClick={() => onFriendSelect({ id: 'random', name: 'Random Opponent' })}
                >
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                      <svg className="h-5 w-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Random Opponent</h3>
                      <p className="text-sm text-gray-500">Challenge a random user</p>
                    </div>
                  </div>
                </div>

                {filteredFriends.map(friend => (
                  <div 
                    key={friend.id}
                    className="p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 cursor-pointer transition-colors"
                    onClick={() => onFriendSelect(friend)}
                  >
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3 overflow-hidden">
                        {friend.photoURL ? (
                          <img src={friend.photoURL} alt={friend.name} className="h-full w-full object-cover" />
                        ) : (
                          <span className="text-blue-600 font-medium">
                            {friend.name.charAt(0).toUpperCase()}
                          </span>
                        )}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{friend.name}</h3>
                        <p className="text-sm text-gray-500">
                          Wins: {friend.wins || 0} • Losses: {friend.losses || 0}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}