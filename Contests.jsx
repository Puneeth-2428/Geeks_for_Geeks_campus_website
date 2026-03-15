import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Calendar, Trophy, ExternalLink, Clock } from 'lucide-react';

const Contests = () => {
  const [contests, setContests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContests = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/contests');
        setContests(res.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching contests:', error);
        setLoading(false);
      }
    };
    fetchContests();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Upcoming': return 'bg-blue-100 text-blue-700';
      case 'Ongoing': return 'bg-green-100 text-green-700 animate-pulse';
      case 'Past': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">GFG Contests</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Test your mettle against the best! Join upcoming contests and track your progress in competitive programming.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gfg-green"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contests.length > 0 ? (
              contests.map((contest) => (
                <div key={contest._id} className="group bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-gfg-green/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4">
                    <span className={`text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full ${getStatusColor(contest.status)}`}>
                      {contest.status}
                    </span>
                  </div>
                  
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-gfg-green mb-4 group-hover:scale-110 transition-transform">
                      <Trophy size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{contest.title}</h3>
                    <p className="text-gray-500 text-sm mb-4 flex items-center">
                      <Clock size={14} className="mr-1" />
                      {new Date(contest.date).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {contest.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{contest.platform}</span>
                    <a 
                      href={contest.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gfg-green font-bold text-sm hover:underline"
                    >
                      Join Now <ExternalLink size={14} className="ml-1" />
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500 py-10">No contests found at the moment.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Contests;
