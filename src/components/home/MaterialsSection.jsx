import React, { useState, forwardRef, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  BookOpen,
  FileText,
  Clock,
  Download,
  CheckCircle,
  Star,
  ArrowRight,
  Target,
  Brain,
  TrendingUp,
  Award,
  Code,
  Database,
  Users,
  Building2,
} from "lucide-react";

const MaterialsSection = forwardRef((props, ref) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  // Handle mouse movement for the glowing effect
  const handleMouseMove = (e) => {
    if (sectionRef.current) {
      const bounds = sectionRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - bounds.left,
        y: e.clientY - bounds.top,
      });
    }
  };

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          controls.start("visible");
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
  }, [ref, controls]);

  // Auto-rotate through categories
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % resourceCategories.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Resource categories for placement preparation
  const resourceCategories = [
    {
      title: "Data Structures & Algorithms",
      icon: Brain,
      description: "Core DSA concepts for technical interviews",
      color: "from-orange-500 to-red-400",
      subjects: ["Arrays", "Trees", "Graphs", "Dynamic Programming"],
      stats: { problems: "1000+", solutions: "500+", difficulty: "Easy-Hard" }
    },
    {
      title: "System Design",
      icon: Database,
      description: "Scalable system architecture and design patterns",
      color: "from-amber-500 to-orange-400",
      subjects: ["Microservices", "Load Balancing", "Databases", "Caching"],
      stats: { topics: "50+", case_studies: "25+", difficulty: "Medium-Hard" }
    },
    {
      title: "Programming Languages",
      icon: Code,
      description: "Popular programming languages for interviews",
      color: "from-red-500 to-pink-400",
      subjects: ["Java", "Python", "C++", "JavaScript"],
      stats: { concepts: "200+", exercises: "300+", difficulty: "Basic-Advanced" }
    },
    {
      title: "Aptitude & Reasoning",
      icon: Target,
      description: "Quantitative aptitude and logical reasoning",
      color: "from-orange-600 to-yellow-500",
      subjects: ["Quantitative Aptitude", "Logical Reasoning", "Verbal Ability", "Puzzles"],
      stats: { questions: "2000+", topics: "80+", difficulty: "Easy-Hard" }
    },
  ];

  // Real placement preparation resources
  const placementResources = [
    {
      title: "LeetCode Premium Subscription",
      type: "Coding Practice Platform",
      subjects: 35,
      items: 2500,
      rating: 4.8,
      downloads: "5M+",
      premium: true,
      lastUpdated: "Daily",
      link: "https://leetcode.com/",
      description: "Industry standard coding interview preparation platform"
    },
    {
      title: "GeeksforGeeks Interview Preparation",
      type: "Complete Study Material",
      subjects: 50,
      items: 5000,
      rating: 4.7,
      downloads: "10M+",
      premium: false,
      lastUpdated: "Weekly",
      link: "https://www.geeksforgeeks.org/",
      description: "Comprehensive CS fundamentals and interview prep"
    },
    {
      title: "Cracking the Coding Interview",
      type: "Book & Practice Problems",
      subjects: 15,
      items: 189,
      rating: 4.9,
      downloads: "2M+",
      premium: true,
      lastUpdated: "2023",
      link: "https://www.crackingthecodinginterview.com/",
      description: "Classic interview preparation book by Gayle McDowell"
    },
    {
      title: "System Design Interview Guide",
      type: "Design Patterns & Architecture",
      subjects: 12,
      items: 100,
      rating: 4.6,
      downloads: "500K+",
      premium: true,
      lastUpdated: "Monthly",
      link: "https://github.com/donnemartin/system-design-primer",
      description: "Learn system design concepts for senior roles"
    },
    {
      title: "IndiaBix Aptitude Tests",
      type: "Quantitative & Logical Reasoning",
      subjects: 25,
      items: 3000,
      rating: 4.5,
      downloads: "8M+",
      premium: false,
      lastUpdated: "Weekly",
      link: "https://www.indiabix.com/",
      description: "Extensive aptitude practice for placement tests"
    },
    {
      title: "Naukri Campus Placement Guide",
      type: "Company-wise Preparation",
      subjects: 40,
      items: 1500,
      rating: 4.4,
      downloads: "3M+",
      premium: false,
      lastUpdated: "Monthly",
      link: "https://www.naukri.com/campus",
      description: "Company-specific interview experiences and tips"
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
      id="materials"
      className="relative min-h-screen py-12 sm:py-16 md:py-20 bg-slate-50 dark:bg-[#0C0C20] overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="w-full h-full bg-[linear-gradient(transparent_9px,#EA580C_1px),linear-gradient(90deg,transparent_9px,#EA580C_1px)] bg-[length:50px_50px] sm:bg-[length:75px_75px] md:bg-[length:100px_100px]"></div>
        </div>
        <div className="absolute top-[10%] sm:top-[20%] left-[5%] sm:left-[10%] w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] rounded-full bg-gradient-to-br from-[#EA580C]/10 to-transparent blur-[40px] sm:blur-[60px] md:blur-[80px]"></div>
        <div className="absolute bottom-[5%] sm:bottom-[10%] right-[5%] sm:right-[15%] w-[250px] sm:w-[400px] md:w-[500px] h-[250px] sm:h-[400px] md:h-[500px] rounded-full bg-gradient-to-br from-[#F97316]/10 to-transparent blur-[60px] sm:blur-[80px] md:blur-[100px]"></div>
      </div>

      {/* Dynamic cursor light effect - disabled on mobile for performance */}
      <div
        className="absolute inset-0 -z-5 overflow-hidden hidden sm:block"
        style={{
          background: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, rgba(234,88,12,0.07), transparent 80%)`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-12 sm:mb-16 text-center"
        >
          <span className="inline-flex items-center rounded-full px-3 sm:px-4 py-1.5 text-xs sm:text-sm bg-white/10 dark:bg-slate-800/20 backdrop-blur-sm border border-white/10 dark:border-slate-700/20 mb-4 sm:mb-6">
            <span className="inline-block w-2 h-2 rounded-full bg-[#EA580C] mr-2 animate-pulse"></span>
            <span className="bg-gradient-to-r from-slate-700 dark:from-slate-100 to-slate-500 dark:to-slate-300 bg-clip-text text-transparent font-medium">
              Comprehensive Placement Resources
            </span>
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 relative">
            <span className="bg-gradient-to-r from-slate-900 dark:from-white to-slate-600 dark:to-slate-300 bg-clip-text text-transparent relative z-10">
              Study 
            </span>
            <span className="text-[#EA580C] dark:text-[#F97316]"> Materials</span>
            <motion.span
              className="absolute -z-10 inset-0 text-[#EA580C]/5 dark:text-[#F97316]/10 blur-lg"
              animate={{ opacity: [0.5, 0.2, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Study Materials
            </motion.span>
          </h2>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Curated collection of industry-standard resources to ace your technical interviews and secure your dream job.
          </motion.p>
        </motion.div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16">
          {/* Left Side: Categories */}
          <motion.div
            className="w-full lg:w-2/5"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
              <div className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 dark:border-slate-700/20 shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 flex items-center">
                  <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#EA580C] mr-2" />
                  Preparation Areas
                </h3>
                
                <div className="space-y-3 sm:space-y-4">
                  {resourceCategories.map((category, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className={`flex items-center p-3 sm:p-4 rounded-lg sm:rounded-xl cursor-pointer transition-all ${
                        activeCategory === idx
                          ? "bg-[#EA580C]/10 border-[#EA580C]"
                          : "bg-slate-50 dark:bg-slate-700/30 border-transparent hover:bg-slate-100 dark:hover:bg-slate-700/40"
                      } border`}
                      onClick={() => setActiveCategory(idx)}
                    >
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#EA580C]/10 flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0`}>
                        <category.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#EA580C]" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base truncate">
                          {category.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2 sm:line-clamp-none">
                          {category.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Resources */}
          <motion.div
            className="w-full lg:w-3/5"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <div className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 dark:border-slate-700/20 shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-2 sm:gap-0">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center">
                    <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-[#EA580C] mr-2" />
                    <span className="truncate">{resourceCategories[activeCategory].title}</span>
                  </h3>
                  <div className="flex items-center text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    Updated: Jan 2025
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {placementResources.slice(0, 4).map((resource, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="bg-slate-50 dark:bg-slate-700/30 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-slate-200 dark:border-slate-600/30 hover:border-[#EA580C] transition-all"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-slate-900 dark:text-white mb-1 text-sm sm:text-base">
                            {resource.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-2">
                            {resource.description}
                          </p>
                          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm">
                            <span className="text-slate-600 dark:text-slate-400">
                              {resource.subjects} Topics
                            </span>
                            <span className="text-slate-600 dark:text-slate-400 hidden sm:inline">
                              {resource.items} Resources
                            </span>
                            <div className="flex items-center text-[#EA580C]">
                              <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current mr-1" />
                              {resource.rating}
                            </div>
                            {resource.premium && (
                              <span className="bg-[#EA580C] text-white px-2 py-0.5 rounded-full text-xs font-medium">
                                Premium
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2 sm:gap-0">
                          <div className="flex items-center text-xs sm:text-sm text-slate-600 dark:text-slate-400 sm:mb-2">
                            <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                            {resource.downloads}
                          </div>
                          <a 
                            href={resource.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#EA580C] text-white rounded-md sm:rounded-lg hover:bg-[#F97316] transition-colors flex items-center text-xs sm:text-sm font-medium"
                          >
                            Access
                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* View All Resources Button */}
                <div className="mt-6 text-center">
                  <button className="px-6 py-3 bg-gradient-to-r from-[#EA580C] to-[#F97316] text-white rounded-lg hover:from-[#DC2626] hover:to-[#EA580C] transition-all font-medium flex items-center mx-auto">
                    View All Resources
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default MaterialsSection;