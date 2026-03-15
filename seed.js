const mongoose = require('mongoose');
const Event = require('./models/Event');
const Team = require('./models/Team');
const Resource = require('./models/Resource');
const FAQ = require('./models/FAQ');
const Contest = require('./models/Contest');
require('dotenv').config();

// 1. FULL EVENTS LIST (7 Events)
const events = [
  {
    title: 'Code-A-Thon 2026',
    date: new Date('2026-03-24'), 
    desc: 'The ultimate coding showdown at RIT Chennai. Showcase your DSA skills and win exciting prizes!',
    link: 'https://www.geeksforgeeks.org/events',
    category: 'Competition',
  },
  {
    title: 'MERN Stack Bootcamp',
    date: new Date('2026-04-05'),
    desc: 'A 3-day intensive bootcamp covering MongoDB, Express, React, and Node.js. Build a real-world project from scratch.',
    link: 'https://www.geeksforgeeks.org/events',
    category: 'Workshop',
  },
  {
    title: 'AI & Machine Learning Seminar',
    date: new Date('2026-04-12'),
    desc: 'Explore the future of AI with industry experts. Understanding neural networks and practical applications.',
    link: 'https://www.geeksforgeeks.org/events',
    category: 'Seminar',
  },
  {
    title: 'GitHub Universe: RIT Edition',
    date: new Date('2026-04-20'),
    desc: 'Master Git and GitHub. Learn about branching, merging, pull requests, and open-source contributions.',
    link: 'https://www.geeksforgeeks.org/events',
    category: 'Workshop',
  },
  {
    title: 'Placement Preparation Webinar',
    date: new Date('2026-02-15'), 
    desc: 'A comprehensive guide on how to crack technical interviews at MAANG companies.',
    link: 'https://www.geeksforgeeks.org/events',
    category: 'Webinar',
  },
  {
    title: 'Intro to Competitive Programming',
    date: new Date('2026-01-10'), 
    desc: 'Our first event of the year! A beginner-friendly introduction to CP and GFG Practice portal.',
    link: 'https://www.geeksforgeeks.org/events',
    category: 'Seminar',
  },
  {
    title: 'Hack-RIT 2025',
    date: new Date('2025-12-20'), 
    desc: 'The biggest hackathon of the winter semester. 24 hours of innovation and building.',
    link: 'https://www.geeksforgeeks.org/events',
    category: 'Hackathon',
  }
];

// 2. OFFICIAL GFG CONTESTS (4 Contests)
const contests = [
  {
    title: 'Problem of the Day',
    date: new Date(), 
    link: 'https://practice.geeksforgeeks.org/problem-of-the-day',
    platform: 'GeeksforGeeks',
    status: 'Ongoing',
    description: 'Solve one problem every day to maintain your streak and earn Geekbits. Essential for consistent DSA practice.',
  },
  {
    title: 'GfG Weekly Coding Contest',
    date: new Date('2026-03-22T19:00:00'), 
    link: 'https://practice.geeksforgeeks.org/events/rec/gfg-weekly-coding-contest',
    platform: 'GeeksforGeeks',
    status: 'Upcoming',
    description: 'Held every Sunday (7:00 PM - 8:30 PM). Rated contests designed to simulate technical interviews at top firms.',
  },
  {
    title: 'Job-A-Thon Hiring Challenge',
    date: new Date('2026-03-25T20:00:00'), 
    link: 'https://practice.geeksforgeeks.org/events/rec/job-a-thon',
    platform: 'GeeksforGeeks',
    status: 'Upcoming',
    description: 'A monthly hiring challenge for freshers to get noticed by various tech firms. Includes 3 DSA problems.',
  },
  {
    title: 'GfG Interview Series',
    date: new Date('2026-03-28T18:00:00'), 
    link: 'https://practice.geeksforgeeks.org/events/rec/interview-series',
    platform: 'GeeksforGeeks',
    status: 'Upcoming',
    description: 'Weekly contests focused on specific company patterns (e.g., Amazon-specific or Microsoft-specific rounds).',
  },
];

// 3. FULL TEAM LIST
const team = [
  { name: 'Arun Kumar', role: 'Chairperson', linkedIn: 'https://in.linkedin.com/school/rit-chennai/', github: 'https://in.linkedin.com/school/rit-chennai/', image: '' },
  { name: 'Sonia V', role: 'Vice Chairperson', linkedIn: 'https://in.linkedin.com/school/rit-chennai/', github: 'https://in.linkedin.com/school/rit-chennai/', image: '' },
  { name: 'Rahul R', role: 'Technical Lead', linkedIn: 'https://in.linkedin.com/school/rit-chennai/', github: 'https://in.linkedin.com/school/rit-chennai/', image: '' },
  { name: 'Priya S', role: 'PR & Outreach Lead', linkedIn: 'https://in.linkedin.com/school/rit-chennai/', github: 'https://in.linkedin.com/school/rit-chennai/', image: '' },
  { name: 'Karthik M', role: 'Event Coordinator', linkedIn: 'https://in.linkedin.com/school/rit-chennai/', github: 'https://in.linkedin.com/school/rit-chennai/', image: '' },
  { name: 'Deepa T', role: 'Design Lead', linkedIn: 'https://in.linkedin.com/school/rit-chennai/', github: 'https://in.linkedin.com/school/rit-chennai/', image: '' },
];

// 4. FULL RESOURCES LIST (8 Resources)
const resources = [
  {
    title: 'Complete DSA Roadmap',
    category: 'DSA',
    link: 'https://www.geeksforgeeks.org/complete-guide-to-dsa-for-beginners/',
    description: 'A structural path to master Data Structures and Algorithms from scratch.',
  },
  {
    title: 'Top 50 Array Problems',
    category: 'DSA',
    link: 'https://www.geeksforgeeks.org/top-50-array-coding-problems-for-interviews/',
    description: 'Master the most frequently asked array questions in technical interviews.',
  },
  {
    title: 'System Design Primer',
    category: 'Interview Prep',
    link: 'https://www.geeksforgeeks.org/system-design-tutorial/',
    description: 'Learn how to design scalable systems and handle large-scale architecture.',
  },
  {
    title: 'SQL Interview Questions',
    category: 'Interview Prep',
    link: 'https://www.geeksforgeeks.org/sql-interview-questions/',
    description: 'Comprehensive list of SQL queries and conceptual questions for freshers.',
  },
  {
    title: 'React.js Mastery Guide',
    category: 'Development',
    link: 'https://www.geeksforgeeks.org/react-tutorial/',
    description: 'Learn hooks, state management, and building performant web apps.',
  },
  {
    title: 'Node.js & Express Backend',
    category: 'Development',
    link: 'https://www.geeksforgeeks.org/nodejs-tutorial/',
    description: 'Deep dive into server-side programming and building RESTful APIs.',
  },
  {
    title: 'Python for Data Science',
    category: 'Development',
    link: 'https://www.geeksforgeeks.org/python-programming-language/',
    description: 'Master Python libraries like Pandas, NumPy and Matplotlib.',
  },
  {
    title: 'Java Exception Handling',
    category: 'DSA',
    link: 'https://www.geeksforgeeks.org/exceptions-in-java/',
    description: 'Crucial concepts for robust Java development and OOPS interviews.',
  }
];

const faqs = [
  { question: 'What is GFG Campus Chapter?', answer: 'It is a student-led community focused on technical growth and coding culture supported by GeeksforGeeks.' },
  { question: 'How can I join the RIT Chennai Chapter?', answer: 'Join by participating in our events and following our social media for recruitment updates.' },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB for complete restoration');

    await Event.deleteMany({});
    await Team.deleteMany({});
    await Resource.deleteMany({});
    await FAQ.deleteMany({});
    await Contest.deleteMany({});

    await Event.insertMany(events);
    await Team.insertMany(team);
    await Resource.insertMany(resources);
    await FAQ.insertMany(faqs);
    await Contest.insertMany(contests);

    console.log('Database RESTORED with ALL EXPANDED data successfully');
    process.exit();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDB();
