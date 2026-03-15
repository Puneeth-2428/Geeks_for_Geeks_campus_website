import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Linkedin, Github } from 'lucide-react';

const Team = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/team');
        setTeam(res.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching team:', error);
        setLoading(false);
      }
    };
    fetchTeam();
  }, []);

  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The dedicated students behind the GFG Campus Chapter, working together to bring you the best learning experiences.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gfg-green"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member._id} className="bg-gray-50 border rounded-xl p-8 text-center transition duration-300 hover:shadow-lg hover:-translate-y-2 group">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white border-4 border-gray-100 shadow-sm flex items-center justify-center">
                   {/* Blank white circle */}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-gfg-green transition duration-300">{member.name}</h3>
                <p className="text-gfg-green font-semibold mb-6 uppercase tracking-wider text-xs">{member.role}</p>
                
                <div className="flex justify-center space-x-4">
                  <a href="https://in.linkedin.com/school/rit-chennai/" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full shadow-sm text-gray-600 hover:text-blue-600 transition duration-300">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://in.linkedin.com/school/rit-chennai/" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full shadow-sm text-gray-600 hover:text-gray-900 transition duration-300">
                    <Github size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Team;
