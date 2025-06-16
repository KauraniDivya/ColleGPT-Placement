import React, { forwardRef, useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Target,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  BarChart3,
  BookOpen,
  Award,
  ArrowRight,
  Users,
  Briefcase,
  Brain,
  Code,
  Building2,
  DollarSign,
} from "lucide-react";

const PlannerSection = forwardRef((props, ref) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState("calendar");
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

  // Planner tabs for placement preparation
  const plannerTabs = [
    { id: "calendar", name: "Schedule", fullName: "Prep Schedule", icon: Calendar },
    { id: "progress", name: "Skills", fullName: "Skills Tracker", icon: TrendingUp },
    { id: "goals", name: "Goals", fullName: "Career Goals", icon: Target },
    { id: "analytics", name: "Analytics", fullName: "Performance", icon: BarChart3 },
  ];

  // Placement preparation schedule
  const prepSchedule = [
    {
      time: "Week 1-4: Foundation",
      shortTime: "W1-4",
      activity: "DSA Fundamentals",
      task: "Arrays, Strings, Linked Lists, Basic Recursion",
      status: "completed",
      priority: "high"
    },
    {
      time: "Week 5-8: Intermediate",
      shortTime: "W5-8",
      activity: "Advanced DSA",
      task: "Trees, Graphs, Dynamic Programming, Advanced Algorithms",
      status: "in-progress",
      priority: "high"
    },
    {
      time: "Week 9-10: System Design",
      shortTime: "W9-10",
      activity: "System Design Basics",
      task: "Scalability, Databases, Load Balancing, Microservices",
      status: "upcoming",
      priority: "high"
    },
    {
      time: "Week 11-12: Mock Interviews",
      shortTime: "W11-12",
      activity: "Interview Practice",
      task: "Coding interviews, Behavioral rounds, System design practice",
      status: "upcoming",
      priority: "medium"
    },
  ];

  // Skills progress for placement preparation
  const skillProgress = [
    { skill: "Data Structures & Algorithms", shortSkill: "DSA", completed: 75, total: 100, color: "bg-orange-500" },
    { skill: "System Design", shortSkill: "System Design", completed: 45, total: 100, color: "bg-red-500" },
    { skill: "Programming Languages", shortSkill: "Programming", completed: 88, total: 100, color: "bg-amber-500" },
    { skill: "Database Management", shortSkill: "Database", completed: 62, total: 100, color: "bg-orange-600" },
    { skill: "Software Engineering", shortSkill: "SWE", completed: 71, total: 100, color: "bg-red-400" },
    { skill: "Communication Skills", shortSkill: "Communication", completed: 58, total: 100, color: "bg-yellow-500" },
  ];

  // Weekly preparation hours
  const weeklyStats = [
    { day: "Mon", shortDay: "M", hours: 4, target: 6 },
    { day: "Tue", shortDay: "T", hours: 5, target: 6 },
    { day: "Wed", shortDay: "W", hours: 6, target: 6 },
    { day: "Thu", shortDay: "T", hours: 7, target: 6 },
    { day: "Fri", shortDay: "F", hours: 8, target: 6 },
    { day: "Sat", shortDay: "S", hours: 10, target: 8 },
    { day: "Sun", shortDay: "S", hours: 6, target: 4 },
  ];

  // Career goals for placement
  const careerGoals = [
    {
      title: "Get SDE-1 Role at FAANG",
      shortTitle: "FAANG SDE-1",
      deadline: "August 2025",
      shortDeadline: "Aug 2025",
      progress: 68,
      priority: "high",
      status: "on-track"
    },
    {
      title: "Complete 300 LeetCode Problems",
      shortTitle: "300 LC Problems",
      deadline: "June 2025",
      shortDeadline: "Jun 2025",
      progress: 187,
      total: 300,
      priority: "high",
      status: "on-track"
    },
    {
      title: "System Design Mastery",
      shortTitle: "System Design",
      deadline: "July 2025",
      shortDeadline: "Jul 2025",
      progress: 3,
      total: 10,
      priority: "medium",
      status: "behind"
    },
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

  // Render tab content
  const renderTabContent = () => {
    switch (activeTab) {
      case "calendar":
        return (
          <div className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {/* Preparation Schedule */}
              <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-slate-700 hover:border-[#EA580C] transition-all">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#EA580C] flex-shrink-0" />
                  <span className="truncate">Preparation Timeline</span>
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {prepSchedule.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2 sm:space-x-3">
                      <div className="flex-shrink-0 mt-0.5">
                        {item.status === "completed" ? (
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#EA580C]" />
                        ) : item.status === "in-progress" ? (
                          <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#F97316]" />
                        ) : (
                          <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-2">
                          <div className="min-w-0 flex-1">
                            <p className="font-medium text-gray-900 dark:text-white text-sm sm:text-base truncate">
                              {item.activity}
                            </p>
                            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                              {item.task}
                            </p>
                          </div>
                          <span className="text-xs text-gray-500 dark:text-gray-400 flex-shrink-0 self-start">
                            <span className="hidden sm:inline">{item.time}</span>
                            <span className="sm:hidden">{item.shortTime}</span>
                          </span>
                        </div>
                        <div className="flex items-center mt-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${item.priority === "high" ? "bg-[#EA580C]/10 text-[#EA580C]" :
                              item.priority === "medium" ? "bg-[#F97316]/10 text-[#F97316]" :
                                "bg-[#EA580C]/20 text-[#EA580C]"
                            }`}>
                            {item.priority}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interview Calendar */}
              <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-slate-700 hover:border-[#EA580C] transition-all">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#EA580C] flex-shrink-0" />
                  January 2025
                </h3>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-1 text-center">
                  {["S", "M", "T", "W", "T", "F", "S"].map((day, idx) => (
                    <div key={idx} className="text-xs font-medium text-gray-500 dark:text-gray-400 py-1 sm:py-2">
                      {day}
                    </div>
                  ))}

                  {Array.from({ length: 35 }, (_, i) => {
                    const day = i + 1;
                    const isCurrentMonth = day > 0 && day <= 31;
                    const isToday = day === 17;
                    const hasInterview = [12, 18, 25, 29].includes(day);

                    return (
                      <div
                        key={i}
                        className={`text-xs rounded-md sm:rounded-lg aspect-square flex items-center justify-center cursor-pointer transition-colors ${isCurrentMonth
                            ? isToday
                              ? "bg-[#EA580C] text-white font-bold"
                              : hasInterview
                                ? "bg-[#EA580C]/10 text-[#EA580C] font-medium"
                                : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                            : "text-gray-300 dark:text-gray-600"
                          }`}
                      >
                        {day > 0 && day <= 31 ? day : ""}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );

      case "progress":
        return (
          <div className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {/* Skills Progress */}
              <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-slate-700 hover:border-[#EA580C] transition-all">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#EA580C] flex-shrink-0" />
                  Skills Progress
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {skillProgress.map((item, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white truncate mr-2">
                          <span className="hidden sm:inline">{item.skill}</span>
                          <span className="sm:hidden">{item.shortSkill}</span>
                        </span>
                        <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 flex-shrink-0">
                          {item.completed}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 sm:h-2">
                        <div
                          className="bg-[#EA580C] h-1.5 sm:h-2 rounded-full transition-all duration-500"
                          style={{ width: `${item.completed}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weekly Study Hours */}
              <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-slate-700 hover:border-[#EA580C] transition-all">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                  <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#EA580C] flex-shrink-0" />
                  <span className="hidden sm:inline">Weekly Study Hours</span>
                  <span className="sm:hidden">Study Hours</span>
                </h3>
                <div className="flex items-end justify-between h-20 sm:h-32">
                  {weeklyStats.map((stat, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className="relative w-4 sm:w-6 h-12 sm:h-24 bg-gray-100 dark:bg-gray-700 rounded-full mb-1 sm:mb-2">
                        <div
                          className="absolute bottom-0 left-0 right-0 bg-[#EA580C] rounded-full transition-all duration-500"
                          style={{ height: `${Math.min((stat.hours / stat.target) * 100, 100)}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                        <span className="hidden sm:inline">{stat.day}</span>
                        <span className="sm:hidden">{stat.shortDay}</span>
                      </span>
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                        {stat.hours}h
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case "goals":
        return (
          <div className="space-y-4 sm:space-y-6">
            {careerGoals.map((goal, idx) => (
              <div key={idx} className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-slate-700 hover:border-[#EA580C] transition-all">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 sm:mb-4 gap-2 sm:gap-4">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      <span className="hidden sm:inline">{goal.title}</span>
                      <span className="sm:hidden">{goal.shortTitle || goal.title}</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      Target: <span className="hidden sm:inline">{goal.deadline}</span>
                      <span className="sm:hidden">{goal.shortDeadline}</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${goal.priority === "high" ? "bg-[#EA580C]/10 text-[#EA580C]" :
                        "bg-[#F97316]/10 text-[#F97316]"
                      }`}>
                      {goal.priority}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs text-white font-medium ${goal.status === "on-track" ? "bg-[#EA580C]" : "bg-[#F97316]"
                      }`}>
                      {goal.status}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Progress</span>
                    <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                      {goal.total ? `${goal.progress}/${goal.total}` : `${goal.progress}%`}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 sm:h-2">
                    <div
                      className={`h-1.5 sm:h-2 rounded-full transition-all duration-500 ${goal.status === "on-track" ? "bg-[#EA580C]" : "bg-[#F97316]"
                        }`}
                      style={{ width: `${(goal.progress / (goal.total || 100)) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}

            {/* Add New Goal Form */}
            <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-slate-700 hover:border-[#EA580C] transition-all">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                <Target className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#EA580C] flex-shrink-0" />
                <span className="hidden sm:inline">Set New Career Goal</span>
                <span className="sm:hidden">New Goal</span>
              </h3>
              <form className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Goal Title
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 sm:px-4 py-2 rounded-md sm:rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#EA580C] focus:border-transparent text-sm sm:text-base"
                    placeholder="e.g., Get SDE role at Google"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Target Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-3 sm:px-4 py-2 rounded-md sm:rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#EA580C] focus:border-transparent text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Priority
                    </label>
                    <select className="w-full px-3 sm:px-4 py-2 rounded-md sm:rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#EA580C] focus:border-transparent text-sm sm:text-base">
                      <option value="high">High Priority</option>
                      <option value="medium">Medium Priority</option>
                      <option value="low">Low Priority</option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full px-3 sm:px-4 py-2 bg-[#EA580C] text-white rounded-md sm:rounded-lg hover:bg-[#F97316] transition-colors flex items-center justify-center text-sm sm:text-base font-medium"
                >
                  <Target className="w-4 h-4 mr-2" />
                  Add Goal
                </button>
              </form>
            </div>
          </div>
        );

      case "analytics":
        return (
          <div className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
              {/* Performance Analytics Cards */}
              {[
                {
                  title: "Problems Solved",
                  shortTitle: "Problems",
                  value: "187/300",
                  shortValue: "187/300",
                  icon: Code,
                  color: "text-orange-600",
                  trend: "62% completion",
                  shortTrend: "62%"
                },
                {
                  title: "Interview Success",
                  shortTitle: "Interviews",
                  value: "3/5",
                  icon: CheckCircle,
                  color: "text-green-600",
                  trend: "60% success rate",
                  shortTrend: "60%"
                },
                {
                  title: "Job Applications",
                  shortTitle: "Applications",
                  value: "45",
                  icon: Briefcase,
                  color: "text-blue-600",
                  trend: "12 responses",
                  shortTrend: "12 responses"
                },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-slate-700 hover:border-[#EA580C] transition-all text-center">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center mx-auto mb-3 sm:mb-4 ${stat.color}`}>
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                    <span className="hidden sm:inline">{stat.value}</span>
                    <span className="sm:hidden">{stat.shortValue || stat.value}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-1">
                    <span className="hidden sm:inline">{stat.title}</span>
                    <span className="sm:hidden">{stat.shortTitle}</span>
                  </p>
                  <p className="text-xs text-[#EA580C] dark:text-[#F97316]">
                    <span className="hidden sm:inline">{stat.trend}</span>
                    <span className="sm:hidden">{stat.shortTrend}</span>
                  </p>
                </div>
              ))}
            </div>

            {/* Platform Usage & Recent Applications */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-slate-700 hover:border-[#EA580C] transition-all">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                  <Code className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#EA580C] flex-shrink-0" />
                  <span className="hidden sm:inline">Platform Usage</span>
                  <span className="sm:hidden">Platforms</span>
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  {[
                    { platform: "LeetCode", problems: 187, icon: Code },
                    { platform: "GeeksforGeeks", problems: 124, icon: Brain },
                    { platform: "HackerRank", problems: 89, icon: Target },
                    { platform: "Codeforces", shortPlatform: "CF", problems: 45, icon: Award },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div className="flex items-center min-w-0 flex-1 mr-2">
                        <item.icon className="w-3 h-3 sm:w-4 sm:h-4 text-[#EA580C] mr-2 flex-shrink-0" />
                        <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white truncate">
                          <span className="hidden sm:inline">{item.platform}</span>
                          <span className="sm:hidden">{item.shortPlatform || item.platform}</span>
                        </span>
                      </div>
                      <div className="flex items-center flex-shrink-0">
                        <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mr-2">
                          {item.problems} solved
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Applications */}
              <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-slate-700 hover:border-[#EA580C] transition-all">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                  <Building2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#EA580C] flex-shrink-0" />
                  <span className="hidden sm:inline">Recent Applications</span>
                  <span className="sm:hidden">Applications</span>
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  {[
                    { company: "Google", shortCompany: "Google", status: "Interview", date: "Jan 15", badge: "🏢" },
                    { company: "Microsoft", shortCompany: "Microsoft", status: "Applied", date: "Jan 12", badge: "💼" },
                    { company: "Amazon", shortCompany: "Amazon", status: "Rejected", date: "Jan 10", badge: "📋" },
                    { company: "Meta", shortCompany: "Meta", status: "Applied", date: "Jan 8", badge: "🚀" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between py-1 sm:py-2">
                      <div className="flex items-center min-w-0 flex-1">
                        <span className="text-base sm:text-lg mr-2 sm:mr-3 flex-shrink-0">{item.badge}</span>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white truncate">
                            <span className="hidden sm:inline">{item.company}</span>
                            <span className="sm:hidden">{item.shortCompany}</span>
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {item.date} • {item.status}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ); 
    }
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
      id="planner"
      className="relative min-h-screen py-12 sm:py-16 md:py-20 bg-white dark:bg-[#0A0A0A] overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[300px] sm:w-[500px] md:w-[600px] h-[200px] sm:h-[300px] md:h-[400px] bg-gradient-to-b from-[#EA580C]/5 to-transparent rounded-full filter blur-[40px] sm:blur-[60px] md:blur-[80px]"></div>
        <div className="absolute bottom-0 right-0 w-[200px] sm:w-[300px] md:w-[400px] h-[250px] sm:h-[400px] md:h-[500px] bg-gradient-to-tr from-[#F97316]/5 to-transparent rounded-full filter blur-[30px] sm:blur-[50px] md:blur-[60px]"></div>
      </div>
      {/* Dynamic cursor light effect - disabled on mobile for performance */}
      <div
        className="absolute inset-0 -z-5 overflow-hidden hidden sm:block"
        style={{
          background: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, rgba(234,88,12,0.07), transparent 80%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4"
          >
            <span className="bg-gradient-to-r from-[#EA580C] to-[#F97316] bg-clip-text text-transparent">
              Career Planner
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-0"
          >
            Plan your placement preparation journey with our intelligent career tracking system
          </motion.p>
        </div>

        {/* Planner Tabs */}
        <div className="flex justify-center mb-6 sm:mb-8 md:mb-12">
          <div className="inline-flex rounded-lg bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-gray-200 dark:border-slate-700 p-1 overflow-x-auto">
            <div className="flex space-x-1">
              {plannerTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 sm:px-4 md:px-6 py-2 rounded-md text-xs sm:text-sm font-medium transition-all flex items-center whitespace-nowrap ${activeTab === tab.id
                      ? "bg-gradient-to-r from-[#EA580C] to-[#F97316] text-white"
                      : "text-gray-600 dark:text-gray-300 hover:text-[#EA580C] dark:hover:text-[#EA580C]"
                    }`}
                >
                  <tab.icon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 flex-shrink-0" />
                  <span className="hidden sm:inline">{tab.fullName}</span>
                  <span className="sm:hidden">{tab.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="mt-4 sm:mt-6 md:mt-8"
        >
          {renderTabContent()}
        </motion.div>
      </div>
    </section>
  );
});
export default PlannerSection;