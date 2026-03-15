import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [events, setEvents] = useState({ upcoming: [], past: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/events');
        setEvents(res.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching events:', error);
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const EventCard = ({ event }) => (
    <div className="bg-white border rounded-lg shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
      <div>
        <span className="inline-block bg-gfg-green/10 text-gfg-green text-xs font-bold px-2 py-1 rounded uppercase mb-4 tracking-wide">
          {event.category}
        </span>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{new Date(event.date).toLocaleDateString('en-IN', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        })}</p>
        <p className="text-gray-700 line-clamp-3 mb-6">{event.desc}</p>
      </div>
      <a 
        href={event.link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="w-full text-center bg-gfg-green text-white font-bold py-2 rounded hover:bg-green-700 transition duration-300"
      >
        Learn More
      </a>
    </div>
  );

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Events</h2>
        
        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="bg-gray-200 p-1 rounded-lg flex space-x-1">
            <button 
              className={`px-6 py-2 rounded-md font-semibold transition duration-300 ${activeTab === 'upcoming' ? 'bg-white text-gfg-green shadow-sm' : 'text-gray-600 hover:bg-gray-300'}`}
              onClick={() => setActiveTab('upcoming')}
            >
              Upcoming
            </button>
            <button 
              className={`px-6 py-2 rounded-md font-semibold transition duration-300 ${activeTab === 'past' ? 'bg-white text-gfg-green shadow-sm' : 'text-gray-600 hover:bg-gray-300'}`}
              onClick={() => setActiveTab('past')}
            >
              Past
            </button>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gfg-green"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events[activeTab].length > 0 ? (
              events[activeTab].map(event => (
                <EventCard key={event._id} event={event} />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500 py-10">No {activeTab} events found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
