import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Counter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [target, duration]);

  return <span>{count}</span>;
};

const FAQSection = () => {
  const [faqs, setFaqs] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/faqs');
        setFaqs(res.data);
      } catch (error) {
        console.error('Error fetching faqs:', error);
      }
    };
    fetchFaqs();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={faq._id} className="border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <button 
                className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                {openIndex === index ? <ChevronUp className="text-gfg-green" /> : <ChevronDown className="text-gray-400" />}
              </button>
              {openIndex === index && (
                <div className="p-6 pt-0 text-gray-600 border-t border-gray-50 bg-gray-50/30">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gfg-green py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row items-center justify-between text-white">
            <div className="lg:w-3/5 mb-10 lg:mb-0">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                Welcome to <br />
                <span className="text-yellow-200 drop-shadow-md">GFG Campus Chapter</span> <br />
                <span className="text-yellow-200 drop-shadow-md">of Rajalakshmi Institute of Technology</span>
              </h1>
              <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto lg:mx-0">
                A hub for enthusiasts who love competitive programming, technical workshops, and staying updated with the tech world.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Link to="/events" className="bg-white text-gfg-green px-8 py-3 rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition transform duration-300">
                  Explore Events
                </Link>
                <Link to="/team" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-gfg-green transition transform duration-300">
                  Meet the Team
                </Link>
              </div>
            </div>
            <div className="lg:w-2/5 flex justify-center">
               <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-md border border-white/20 shadow-2xl">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="p-5 bg-white/5 rounded-2xl text-center">
                        <p className="text-4xl font-bold"><Counter target={10} />+</p>
                        <p className="text-xs uppercase tracking-widest mt-2 opacity-80">Events</p>
                    </div>
                    <div className="p-5 bg-white/5 rounded-2xl text-center">
                        <p className="text-4xl font-bold"><Counter target={500} />+</p>
                        <p className="text-xs uppercase tracking-widest mt-2 opacity-80">Members</p>
                    </div>
                    <div className="p-5 bg-white/5 rounded-2xl text-center">
                        <p className="text-4xl font-bold"><Counter target={20} />+</p>
                        <p className="text-xs uppercase tracking-widest mt-2 opacity-80">Workshops</p>
                    </div>
                    <div className="p-5 bg-white/5 rounded-2xl text-center">
                        <p className="text-4xl font-bold"><Counter target={5} />+</p>
                        <p className="text-xs uppercase tracking-widest mt-2 opacity-80">Projects</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
               <h2 className="text-4xl font-bold text-gray-800 mb-6">Learn. Build. Achieve.</h2>
               <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Our mission is to bridge the gap between theoretical knowledge and practical skills. We provide students with resources and a platform to excel in problem-solving and technical innovation.
               </p>
               <div className="space-y-4">
                  {['Competitive Programming', 'Hands-on Workshops', 'Technical Mentorship'].map((item) => (
                    <div key={item} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-gfg-green rounded-full flex items-center justify-center text-white text-[10px]">✓</div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
               </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
               <div className="h-40 bg-gfg-green/10 rounded-2xl border-2 border-dashed border-gfg-green/30 flex items-center justify-center text-gfg-green font-bold italic">Innovative</div>
               <div className="h-40 bg-gfg-green rounded-2xl flex items-center justify-center text-white font-bold italic shadow-lg shadow-gfg-green/30">Community</div>
               <div className="h-40 bg-gray-800 rounded-2xl flex items-center justify-center text-white font-bold italic">Collaborative</div>
               <div className="h-40 bg-gfg-green/10 rounded-2xl border-2 border-dashed border-gfg-green/30 flex items-center justify-center text-gfg-green font-bold italic">Practical</div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
    </div>
  );
};

export default Home;
