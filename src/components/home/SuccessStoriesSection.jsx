import React, { forwardRef, useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  BookOpen,
  Clock,
  Target,
  Users,
  CheckCircle,
  ArrowRight,
  Play,
  Calendar,
  Building2,
  DollarSign,
  Briefcase,
} from "lucide-react";

const SuccessStoriesSection = forwardRef((props, ref) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeStory, setActiveStory] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Handle mouse movement
  const handleMouseMove = (e) => {
    if (sectionRef.current) {
      const bounds = sectionRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - bounds.left,
        y: e.clientY - bounds.top,
      });
    }
  };

  // Intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  // Auto-rotate stories
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStory((prev) => (prev + 1) % successStories.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  // Real placement success stories
  const successStories = [
    {
      id: 1,
      name: "Arjun Patel",
      achievement: "SDE-2 at Google",
      company: "Google",
      salary: "₹45 LPA",
      photo: "https://randomuser.me/api/portraits/men/45.jpg",
      background: "Tier-2 College, Computer Science",
      previousRole: "SDE-1 at Startup (₹8 LPA)",
      quote: "From 8 LPA to 45 LPA in 3 years! The structured preparation and community support made all the difference.",
      detailedStory: "Started with a modest package at a startup. Through consistent LeetCode practice, system design study, and mock interviews, cracked Google L4 interview.",
      preparationTime: "18 months preparation",
      interviewRounds: "6 rounds (2 phone + 4 onsite)",
      keySkills: ["Data Structures", "System Design", "Java", "Distributed Systems"],
      tips: [
        "Solved 400+ LeetCode problems",
        "Focused heavily on system design",
        "Practiced behavioral questions",
        "Mock interviews with peers"
      ]
    },
    {
      id: 2,
      name: "Priya Sharma",
      achievement: "SDE-1 at Microsoft",
      company: "Microsoft",
      salary: "₹28 LPA",
      photo: "https://randomuser.me/api/portraits/women/32.jpg",
      background: "Tier-3 College, Information Technology",
      previousRole: "Fresher",
      quote: "Never thought someone from my college could get into Microsoft. Persistence and the right guidance made it possible!",
      detailedStory: "Fresh graduate from tier-3 college who cracked Microsoft through campus placement. Focused on fundamentals and consistent practice.",
      preparationTime: "12 months preparation",
      interviewRounds: "4 rounds (1 online + 3 technical)",
      keySkills: ["C++", "Data Structures", "Algorithms", "Problem Solving"],
      tips: [
        "Started with basics and built strong foundation",
        "Solved problems daily for consistency",
        "Participated in coding competitions",
        "Used GeeksforGeeks extensively"
      ]
    },
    {
      id: 3,
      name: "Rahul Kumar",
      achievement: "Senior SDE at Amazon",
      company: "Amazon",
      salary: "₹52 LPA",
      photo: "https://randomuser.me/api/portraits/men/68.jpg",
      background: "IIT Graduate, Electrical Engineering",
      previousRole: "SDE-2 at Flipkart (₹32 LPA)",
      quote: "Amazon's leadership principles and system design focus really resonated with me. The interview process was challenging but fair.",
      detailedStory: "Transitioned from electrical engineering to software. Strong problem-solving background helped in tackling complex system design questions.",
      preparationTime: "8 months preparation",
      interviewRounds: "5 rounds (1 phone + 4 onsite)",
      keySkills: ["System Design", "Leadership", "Java", "AWS"],
      tips: [
        "Studied Amazon's leadership principles thoroughly",
        "Practiced system design extensively",
        "Prepared STAR format behavioral answers",
        "Understood AWS services deeply"
      ]
    },
    {
      id: 4,
      name: "Sneha Agarwal",
      achievement: "Product Engineer at Stripe",
      company: "Stripe",
      salary: "₹65 LPA",
      photo: "https://randomuser.me/api/portraits/women/55.jpg",
      background: "IIIT Graduate, Computer Science",
      previousRole: "SDE-1 at Razorpay (₹18 LPA)",
      quote: "Stripe's engineering culture and focus on developer experience aligned perfectly with my interests. The international exposure is amazing!",
      detailedStory: "Specialized in fintech and payment systems. Strong understanding of distributed systems and financial regulations helped crack Stripe interviews.",
      preparationTime: "15 months preparation",
      interviewRounds: "6 rounds (2 phone + 4 onsite)",
      keySkills: ["Distributed Systems", "Python", "Fintech", "API Design"],
      tips: [
        "Deep-dived into payment systems",
        "Understood international compliance",
        "Built side projects in fintech",
        "Practiced API design questions"
      ]
    },
  ];

  // Placement statistics
  const placementStats = [
    { value: "2500+", label: "Successful Placements", icon: Award },
    { value: "₹35L", label: "Average Package", icon: DollarSign },
    { value: "94%", label: "Interview Success Rate", icon: Target },
    { value: "4.8/5", label: "Preparation Rating", icon: Star },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const nextStory = () => {
    setActiveStory((prev) => (prev + 1) % successStories.length);
  };

  const prevStory = () => {
    setActiveStory((prev) => (prev - 1 + successStories.length) % successStories.length);
  };

  const currentStory = successStories[activeStory];

  return (
    <section
      ref={(node) => {
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
        sectionRef.current = node;
      }}
      id="success"
      className="relative min-h-screen py-20 bg-white dark:bg-[#0A0A0A] overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[600px] h-[400px] bg-gradient-to-b from-[#EA580C]/5 to-transparent rounded-full filter blur-[80px]"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[500px] bg-gradient-to-tr from-[#F97316]/5 to-transparent rounded-full filter blur-[60px]"></div>
      </div>

      {/* Dynamic cursor light effect */}
      <div
        className="absolute inset-0 -z-5 overflow-hidden"
        style={{
          background: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, rgba(234,88,12,0.07), transparent 80%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            <span className="bg-gradient-to-r from-[#EA580C] to-[#F97316] bg-clip-text text-transparent">
              Success Stories
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Real stories from students who landed their dream jobs at top tech companies
          </motion.p>
        </div>

        {/* Featured Success Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 dark:border-slate-700/50 shadow-xl">
            <div className="flex flex-col lg:flex-row">
              {/* Story Content */}
              <div className="lg:w-2/3 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <img
                      src={currentStory.photo}
                      alt={currentStory.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {currentStory.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {currentStory.background}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-[#EA580C] dark:text-[#F97316]">
                      {currentStory.salary}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {currentStory.achievement}
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <Quote className="w-8 h-8 text-[#EA580C] mb-4" />
                  <p className="text-lg text-gray-800 dark:text-gray-200 italic mb-4">
                    "{currentStory.quote}"
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {currentStory.detailedStory}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Interview Process
                    </h4>
                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-[#EA580C]" />
                        {currentStory.preparationTime}
                      </div>
                      <div className="flex items-center">
                        <Target className="w-4 h-4 mr-2 text-[#EA580C]" />
                        {currentStory.interviewRounds}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Key Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {currentStory.keySkills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-[#EA580C]/10 dark:bg-[#EA580C]/20 text-[#EA580C] dark:text-[#F97316] text-xs rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Tips Sidebar */}
              <div className="lg:w-1/3 bg-gradient-to-br from-[#EA580C]/5 to-[#F97316]/5 p-8">
                <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Star className="w-5 h-5 mr-2 text-[#EA580C]" />
                  Success Tips
                </h4>
                <div className="space-y-3">
                  {currentStory.tips.map((tip, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#EA580C] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center mt-6 space-x-4">
            <button
              onClick={prevStory}
              className="p-2 rounded-full bg-white/80 dark:bg-slate-800/50 hover:bg-[#EA580C]/10 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-[#EA580C]" />
            </button>
            
            <div className="flex space-x-2">
              {successStories.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStory(idx)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    idx === activeStory ? "bg-[#EA580C]" : "bg-gray-300 dark:bg-gray-600"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextStory}
              className="p-2 rounded-full bg-white/80 dark:bg-slate-800/50 hover:bg-[#EA580C]/10 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-[#EA580C]" />
            </button>
          </div>
        </motion.div>

        {/* Success Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Track Record
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Numbers that speak for our commitment to student success
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {placementStats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#EA580C] to-[#F97316] flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#EA580C] to-[#F97316] bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Success Stories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {successStories.map((story, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200 dark:border-slate-700 hover:border-[#EA580C] transition-all group"
            >
              <div className="relative h-48">
                <img
                  src={story.photo}
                  alt={story.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-1 bg-[#EA580C] text-white text-xs font-medium rounded-full">
                    {story.company}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {story.name}
                  </h3>
                  <p className="text-sm text-white/80">{story.achievement}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-[#EA580C] dark:text-[#F97316]">
                    {story.salary}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {story.preparationTime}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {story.detailedStory}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    From: {story.previousRole}
                  </span>
                  <button className="text-[#EA580C] hover:text-[#F97316] transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

export default SuccessStoriesSection;