import React, { forwardRef, useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Play,
  CheckCircle,
  XCircle,
  Clock,
  Star,
  TrendingUp,
  Target,
  Award,
  Zap,
  Brain,
  Users,
  ArrowRight,
  RefreshCw,
  Lightbulb,
  Timer,
} from "lucide-react";

const CodingChallengeSection = forwardRef((props, ref) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeChallenge, setActiveChallenge] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [userCode, setUserCode] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [result, setResult] = useState(null);
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes
  const [isTimerActive, setIsTimerActive] = useState(false);
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

  // Timer logic
  useEffect(() => {
    let interval = null;
    if (isTimerActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [isTimerActive, timeLeft]);

  // Daily coding challenges (real interview questions)
  const codingChallenges = [
    {
      id: 1,
      title: "Two Sum",
      difficulty: "Easy",
      company: "Google",
      description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
      example: `Input: nums = [2,7,11,15], target = 9\nOutput: [0,1]\nExplanation: nums[0] + nums[1] = 2 + 7 = 9`,
      constraints: [
        "2 ≤ nums.length ≤ 10⁴",
        "-10⁹ ≤ nums[i] ≤ 10⁹",
        "-10⁹ ≤ target ≤ 10⁹",
        "Only one valid answer exists."
      ],
      starterCode: `def twoSum(nums, target):
    # Write your solution here
    pass`,
      solution: `def twoSum(nums, target):
    num_map = {}
    for i, num in enumerate(nums):
complement = target - num
if complement in num_map:
return [num_map[complement], i]
num_map[num] = i
return [],       timeComplexity: "O(n)",       spaceComplexity: "O(n)",       tags: ["Array", "Hash Table"],       solvedBy: 2847,       successRate: 89     },     {       id: 2,       title: "Valid Parentheses",       difficulty: "Easy",       company: "Microsoft",       description: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",       example: Input: s = "()[]{}"\nOutput: true\n\nInput: s = "([)]"\nOutput: false,       constraints: [         "1 ≤ s.length ≤ 10⁴",         "s consists of parentheses only '()[]{}'."       ],       starterCode: def isValid(s):
# Write your solution here
pass,       solution: def isValid(s):
stack = []
mapping = {')': '(', '}': '{', ']': '['}for char in s:
    if char in mapping:
        if not stack or stack.pop() != mapping[char]:
            return False
    else:
        stack.append(char)

return not stack`,
      timeComplexity: "O(n)",
      spaceComplexity: "O(n)",
      tags: ["String", "Stack"],
      solvedBy: 1923,
      successRate: 76
    },
    {
      id: 3,
      title: "Maximum Subarray",
      difficulty: "Medium",
      company: "Amazon",
      description: "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
      example: `Input: nums = [-2,1,-3,4,-1,2,1,-5,4]\nOutput: 6\nExplanation: [4,-1,2,1] has the largest sum = 6.`,
      constraints: [
        "1 ≤ nums.length ≤ 10⁵",
        "-10⁴ ≤ nums[i] ≤ 10⁴"
      ],
      starterCode: `def maxSubArray(nums):
# Write your solution here
pass`,
      solution: `def maxSubArray(nums):
max_sum = current_sum = nums[0]

for i in range(1, len(nums)):
    current_sum = max(nums[i], current_sum + nums[i])
    max_sum = max(max_sum, current_sum)

return max_sum`,
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
      tags: ["Array", "Dynamic Programming", "Divide and Conquer"],
      solvedBy: 1654,
      successRate: 62
    }];
  // Challenge statistics
  const challengeStats = [
    { value: "50K+", label: "Daily Attempts", icon: Users, color: "text-orange-600" },
    { value: "500+", label: "Problems Solved", icon: CheckCircle, color: "text-green-600" },
    { value: "15 min", label: "Avg Solve Time", icon: Clock, color: "text-blue-600" },
    { value: "78%", label: "Success Rate", icon: Target, color: "text-purple-600" },
  ];
  const currentChallenge = codingChallenges[activeChallenge];
  // Simulate code execution
  const runCode = async () => {
    setIsRunning(true);
    await new Promise(resolve => setTimeout(resolve, 2000));// Simple validation - in real app, this would be server-side
    const isCorrect = userCode.includes('return') && userCode.length > 50;
    setResult({
      success: isCorrect,
      message: isCorrect ? "All test cases passed!" : "Some test cases failed. Try again!",
      runtime: Math.floor(Math.random() * 100) + 50 + "ms",
      memory: Math.floor(Math.random() * 20) + 10 + "MB"
    });
    setIsRunning(false);
  };
  const startTimer = () => {
    setIsTimerActive(true);
    setTimeLeft(900);
  };
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100 dark:bg-green-900/30';
      case 'Medium': return 'text-orange-600 bg-orange-100 dark:bg-orange-900/30';
      case 'Hard': return 'text-red-600 bg-red-100 dark:bg-red-900/30';
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900/30';
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
      id="coding-challenge"
      className="relative min-h-screen py-20 bg-gradient-to-br from-slate-50 via-orange-50 to-slate-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#EA580C]/10 to-[#F97316]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-[#F97316]/10 to-[#EA580C]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>{/* Dynamic cursor light effect */}
      <div
        className="absolute inset-0 pointer-events-none -z-5"
        style={{
          background: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(234,88,12,0.1) 0%, transparent 60%)`,
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
              Daily Coding Challenge
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Sharpen your coding skills with real interview questions from top tech companies.
            Practice, compete, and track your progress!
          </motion.p>
        </div>

        {/* Challenge Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {challengeStats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className={`w-16 h-16 rounded-xl bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center mx-auto mb-3 ${stat.color}`}>
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-[#EA580C] to-[#F97316] bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Main Challenge Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Problem Description */}
          <div className="lg:col-span-5">
            <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-slate-700/20 shadow-xl">
              {/* Problem Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(currentChallenge.difficulty)}`}>
                    {currentChallenge.difficulty}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Asked at {currentChallenge.company}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {currentChallenge.successRate}% success
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {currentChallenge.title}
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {currentChallenge.description}
              </p>

              {/* Example */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Example:</h4>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                  <pre className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap">
                    {currentChallenge.example}
                  </pre>
                </div>
              </div>

              {/* Constraints */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Constraints:</h4>
                <ul className="space-y-1">
                  {currentChallenge.constraints.map((constraint, idx) => (
                    <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                      <span className="w-2 h-2 bg-[#EA580C] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {constraint}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {currentChallenge.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-[#EA580C]/10 dark:bg-[#EA580C]/20 text-[#EA580C] dark:text-[#F97316] text-xs rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Code Editor */}
          <div className="lg:col-span-7">
            <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-slate-700/20 shadow-xl overflow-hidden">
              {/* Editor Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    solution.py
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  {/* Timer */}
                  <div className="flex items-center gap-2">
                    <Timer className="w-4 h-4 text-[#EA580C]" />
                    <span className={`text-sm font-mono ${timeLeft < 300 ? 'text-red-600' : 'text-gray-600 dark:text-gray-400'}`}>
                      {formatTime(timeLeft)}
                    </span>
                    {!isTimerActive && (
                      <button
                        onClick={startTimer}
                        className="text-xs bg-[#EA580C] text-white px-2 py-1 rounded hover:bg-[#F97316] transition-colors"
                      >
                        Start
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Code Editor Area */}
              <div className="p-4">
                <textarea
                  value={userCode || currentChallenge.starterCode}
                  onChange={(e) => setUserCode(e.target.value)}
                  className="w-full h-64 bg-gray-900 text-green-400 font-mono text-sm p-4 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#EA580C]"
                  placeholder="Write your solution here..."
                  spellCheck={false}
                />
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between p-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <button
                    onClick={runCode}
                    disabled={isRunning}
                    className="flex items-center gap-2 px-4 py-2 bg-[#EA580C] text-white rounded-lg hover:bg-[#F97316] transition-colors disabled:opacity-50"
                  >
                    {isRunning ? (
                      <RefreshCw className="w-4 h-4 animate-spin" />
                    ) : (
                      <Play className="w-4 h-4" />
                    )}
                    {isRunning ? 'Running...' : 'Run Code'}
                  </button>

                  <button className="flex items-center gap-2 px-4 py-2 border border-[#EA580C] text-[#EA580C] rounded-lg hover:bg-[#EA580C]/10 transition-colors">
                    <Lightbulb className="w-4 h-4" />
                    Hint
                  </button>
                </div>

                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {currentChallenge.solvedBy.toLocaleString()} solved
                </div>
              </div>

              {/* Results */}
              {result && (
                <div className={`p-4 border-t ${result.success ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'}`}>
                  <div className="flex items-center gap-2 mb-2">
                    {result.success ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-600" />
                    )}
                    <span className={`font-medium ${result.success ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'}`}>
                      {result.message}
                    </span>
                  </div>
                  {result.success && (
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <span>Runtime: {result.runtime}</span>
                      <span>Memory: {result.memory}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Challenge Navigation */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-4 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-2 border border-white/20 dark:border-slate-700/20">
            {codingChallenges.map((challenge, idx) => (
              <button
                key={idx}
                onClick={() => setActiveChallenge(idx)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${idx === activeChallenge
                    ? 'bg-[#EA580C] text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:text-[#EA580C] hover:bg-[#EA580C]/10'
                  }`}
              >
                Problem {idx + 1}
              </button>
            ))}
          </div>
        </div>


      </div>
    </section>);
});
export default CodingChallengeSection;