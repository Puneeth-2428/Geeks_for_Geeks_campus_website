import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ExternalLink, BookOpen, Code, Lightbulb } from 'lucide-react';

const Resources = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/resources');
        setResources(res.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching resources:', error);
        setLoading(false);
      }
    };
    fetchResources();
  }, []);

  const getIcon = (category) => {
    switch (category.toLowerCase()) {
      case 'dsa': return <Code className="text-blue-500" />;
      case 'development': return <BookOpen className="text-green-500" />;
      case 'interview prep': return <Lightbulb className="text-yellow-500" />;
      default: return <BookOpen className="text-gray-500" />;
    }
  };

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Learning Resources</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Handpicked materials to help you excel in your coding journey and career.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gfg-green"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <div key={resource._id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    {getIcon(resource.category)}
                  </div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    {resource.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {resource.description}
                </p>
                <a 
                  href={resource.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gfg-green font-semibold hover:underline"
                >
                  View Resource <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Resources;
