import React, { forwardRef, useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Calendar,
  Clock,
  User,
  ArrowRight,
  BookOpen,
  TrendingUp,
  Lightbulb,
  Target,
  ChevronRight,
  Eye,
  ThumbsUp,
  Share2,
  Tag,
  Code,
  Trophy,
  Users,
  Building2,
  Briefcase,
  DollarSign,
} from "lucide-react";

const BlogsSection = forwardRef((props, ref) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeCategory, setActiveCategory] = useState("all");
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

  // Blog categories - placement focused
  const blogCategories = [
    { id: "all", name: "All Posts", count: 89 },
    { id: "interview-tips", name: "Interview Tips", count: 28 },
    { id: "salary-guide", name: "Salary Guides", count: 15 },
    { id: "company-reviews", name: "Company Reviews", count: 22 },
    { id: "career-advice", name: "Career Advice", count: 24 },
  ];

  // Real placement blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Complete Google Interview Guide: From Application to Offer",
      excerpt: "A comprehensive walkthrough of Google's interview process, including coding rounds, system design, and behavioral interviews. Real experiences from L4 and L5 candidates.",
      content: "Google's interview process is known for its rigor and selectivity. This guide covers everything from initial application screening to final offer negotiations...",
      author: {
        name: "Rahul Sharma",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        designation: "SDE-3 @Google, Ex-Microsoft"
      },
      publishDate: "2024-12-15",
      readTime: "18 min read",
      category: "interview-tips",
      tags: ["google", "faang", "system-design"],
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2069&auto=format&fit=crop",
      featured: true,
      views: 45230,
      likes: 2847,
      shares: 892
    },
    {
      id: 2,
      title: "Software Engineer Salary Report 2024: India vs Global Markets",
      excerpt: "Detailed salary breakdown for software engineers across experience levels, companies, and locations. Compare Indian salaries with Silicon Valley, Europe, and other markets.",
      content: "The software engineering salary landscape has evolved significantly in 2024. Here's our comprehensive analysis...",
      author: {
        name: "Priya Agarwal",
        avatar: "https://randomuser.me/api/portraits/women/32.jpg",
        designation: "Senior SDE @Amazon, Salary Negotiation Expert"
      },
      publishDate: "2024-12-10",
      readTime: "12 min read",
      category: "salary-guide",
      tags: ["salary", "compensation", "india"],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop",
      featured: false,
      views: 32890,
      likes: 1956,
      shares: 543
    },
    {
      id: 3,
      title: "Microsoft vs Amazon: Culture, Work-Life Balance & Growth",
      excerpt: "An insider's comparison of working at Microsoft versus Amazon. Covering team dynamics, promotion cycles, compensation, and work-life balance from current employees.",
      content: "Having worked at both Microsoft and Amazon, I can provide unique insights into these tech giants...",
      author: {
        name: "Arjun Malhotra",
        avatar: "https://randomuser.me/api/portraits/men/68.jpg",
        designation: "Principal Engineer, Ex-Amazon & Microsoft"
      },
      publishDate: "2024-12-08",
      readTime: "15 min read",
      category: "company-reviews",
      tags: ["microsoft", "amazon", "culture"],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop",
      featured: false,
      views: 28765,
      likes: 1674,
      shares: 421
    },
    {
      id: 4,
      title: "From 3 LPA to 50 LPA: My 5-Year Career Journey",
      excerpt: "A detailed account of career progression from a tier-3 college graduate to senior software engineer at a unicorn startup. Strategies, mistakes, and key learnings.",
      content: "Five years ago, I graduated from a tier-3 engineering college with a 3 LPA offer. Today, I earn 50 LPA at a unicorn startup...",
      author: {
        name: "Sneha Patel",
        avatar: "https://randomuser.me/api/portraits/women/55.jpg",
        designation: "Senior SDE @Razorpay, Career Mentor"
      },
      publishDate: "2024-12-05",
      readTime: "14 min read",
      category: "career-advice",
      tags: ["career-growth", "salary-jump", "tier3"],
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop",
      featured: false,
      views: 67834,
      likes: 4521,
      shares: 1234
    },
    {
      id: 5,
      title: "Cracking System Design Interviews: Real Questions & Solutions",
      excerpt: "Master system design interviews with real questions asked at FAANG companies. Step-by-step solutions for designing WhatsApp, Uber, and Netflix-like systems.",
      content: "System design interviews can make or break your FAANG application. Here are real questions with detailed solutions...",
      author: {
        name: "Karthik Reddy",
        avatar: "https://randomuser.me/api/portraits/men/42.jpg",
        designation: "Staff Engineer @Netflix, System Design Expert"
      },
      publishDate: "2024-12-01",
      readTime: "22 min read",
      category: "interview-tips",
      tags: ["system-design", "faang", "architecture"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      featured: false,
      views: 41567,
      likes: 2934,
      shares: 687
    },
    {
      id: 6,
      title: "Startup vs Big Tech: Comprehensive Career Comparison 2024",
      excerpt: "Should you join a startup or big tech company? Compare compensation, learning opportunities, job security, and long-term career prospects in detail.",
      content: "The startup vs big tech dilemma is one of the most common career decisions software engineers face...",
      author: {
        name: "Amit Kumar",
        avatar: "https://randomuser.me/api/portraits/men/33.jpg",
        designation: "VP Engineering @Byju's, Ex-Google"
      },
      publishDate: "2024-11-28",
      readTime: "16 min read",
      category: "career-advice",
      tags: ["startup", "big-tech", "career-choice"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
      featured: false,
      views: 35421,
      likes: 2187,
      shares: 498
    },
  ];

  // Filter posts based on category
  const filteredPosts = activeCategory === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  // Get featured post
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

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

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  // Format numbers
  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k";
    }
    return num.toString();
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
      id="blogs"
      className="relative min-h-screen py-20 bg-slate-50 dark:bg-[#0C0C20] overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="w-full h-full bg-[linear-gradient(transparent_39px,#EA580C_1px),linear-gradient(90deg,transparent_39px,#EA580C_1px)] bg-[length:40px_40px]"></div>
        </div>
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#EA580C]/10 to-transparent blur-[80px]"></div>
        <div className="absolute bottom-[10%] left-[15%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#F97316]/10 to-transparent blur-[100px]"></div>
      </div>

      {/* Dynamic cursor light effect */}
      <div
        className="absolute inset-0 -z-5 overflow-hidden"
        style={{
          background: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, rgba(234,88,12,0.07), transparent 80%)`,
        }}
      />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <span className="inline-flex items-center rounded-full px-4 py-1.5 text-sm bg-white/10 dark:bg-slate-800/20 backdrop-blur-sm border border-white/10 dark:border-slate-700/20 mb-6">
            <span className="inline-block w-2 h-2 rounded-full bg-[#EA580C] mr-2 animate-pulse"></span>
            <span className="bg-gradient-to-r from-slate-700 dark:from-slate-100 to-slate-500 dark:to-slate-300 bg-clip-text text-transparent font-medium">
              Career Insights & Guides
            </span>
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 relative">
            <span className="bg-gradient-to-r from-slate-900 dark:from-white to-slate-600 dark:to-slate-300 bg-clip-text text-transparent relative z-10">
              Career 
            </span>
            <span className="text-[#EA580C] dark:text-[#F97316]"> Insights</span>
          </h2>

          <motion.p
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Stay updated with the latest placement strategies, salary insights, 
            company reviews, and career advice from industry professionals.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {blogCategories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-[#EA580C] to-[#F97316] text-white shadow-lg"
                  : "bg-white/70 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 border border-white/20 dark:border-slate-700/20 hover:border-[#EA580C]/30"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
              <span className={`ml-2 px-1.5 py-0.5 rounded-full text-xs ${
                activeCategory === category.id
                  ? "bg-white/20 text-white"
                  : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400"
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Featured Post */}
        {featuredPost && activeCategory === "all" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 dark:border-slate-700/50 shadow-xl hover:shadow-2xl hover:border-[#EA580C]/30 transition-all group">
              <div className="flex flex-col lg:flex-row">
                {/* Image */}
                <div className="lg:w-1/2 relative overflow-hidden">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-gradient-to-r from-[#EA580C] to-[#F97316] text-white text-xs font-medium rounded-full">
                      Featured Post
                    </span>
                  </div>
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2 p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(featuredPost.publishDate)}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {featuredPost.readTime}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-[#EA580C] dark:group-hover:text-[#F97316] transition-colors">
{featuredPost.title}
</h3><p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                {/* Author */}
                <div className="flex items-center mb-6">
                  <img
                    src={featuredPost.author.avatar}
                    alt={featuredPost.author.name}
                    className="w-12 h-12 rounded-full object-cover mr-3"
                  />
                  <div>
                    <div className="font-medium text-slate-900 dark:text-white">
                      {featuredPost.author.name}
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">
                      {featuredPost.author.designation}
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPost.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-[#EA580C]/10 dark:bg-[#EA580C]/20 text-[#EA580C] dark:text-[#F97316] text-xs rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Post Meta & CTA */}
              <div>
                <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 mb-4">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {formatNumber(featuredPost.views)}
                    </span>
                    <span className="flex items-center">
                      <ThumbsUp className="w-4 h-4 mr-1" />
                      {formatNumber(featuredPost.likes)}
                    </span>
                    <span className="flex items-center">
                      <Share2 className="w-4 h-4 mr-1" />
                      {formatNumber(featuredPost.shares)}
                    </span>
                  </div>
                </div>

                <button className="w-full px-6 py-3 bg-gradient-to-r from-[#EA580C] to-[#F97316] hover:from-[#DC2626] hover:to-[#EA580C] text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-[#EA580C]/25 flex items-center justify-center">
                  Read Full Article
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    )}

    {/* Regular Posts Grid */}
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
    >
      {(activeCategory === "all" ? regularPosts : filteredPosts).map((post, idx) => (
        <motion.article
          key={post.id}
          variants={itemVariants}
          className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 dark:border-slate-700/50 shadow-lg hover:shadow-xl hover:border-[#EA580C]/30 transition-all group"
        >
          {/* Image */}
          <div className="relative overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3 left-3">
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                post.category === "interview-tips" ? "bg-[#EA580C]/10 text-[#EA580C] dark:bg-[#EA580C]/20 dark:text-[#F97316]" :
                post.category === "salary-guide" ? "bg-[#F97316]/10 text-[#F97316] dark:bg-[#F97316]/20 dark:text-[#EA580C]" :
                post.category === "company-reviews" ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300" :
                post.category === "career-advice" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300" :
                "bg-[#EA580C]/10 text-[#EA580C] dark:bg-[#EA580C]/20 dark:text-[#F97316]"
              }`}>
                {blogCategories.find(cat => cat.id === post.category)?.name || "General"}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-3">
              <span className="flex items-center">
                <Calendar className="w-3 h-3 mr-1" />
                {formatDate(post.publishDate)}
              </span>
              <span className="flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                {post.readTime}
              </span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-[#EA580C] dark:group-hover:text-[#F97316] transition-colors line-clamp-2">
              {post.title}
            </h3>

            <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-3">
              {post.excerpt}
            </p>

            {/* Author */}
            <div className="flex items-center mb-4">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-8 h-8 rounded-full object-cover mr-2"
              />
              <div>
                <div className="font-medium text-slate-900 dark:text-white text-sm">
                  {post.author.name}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                  {post.author.designation}
                </div>
              </div>
            </div>

            {/* Post Meta */}
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-4">
              <div className="flex items-center gap-3">
                <span className="flex items-center">
                  <Eye className="w-3 h-3 mr-1" />
                  {formatNumber(post.views)}
                </span>
                <span className="flex items-center">
                  <ThumbsUp className="w-3 h-3 mr-1" />
                  {formatNumber(post.likes)}
                </span>
              </div>
            </div>

            {/* CTA */}
            <button className="w-full px-4 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-[#EA580C]/10 dark:hover:bg-[#EA580C]/20 text-slate-700 dark:text-slate-300 hover:text-[#EA580C] dark:hover:text-[#F97316] font-medium rounded-lg transition-colors flex items-center justify-center text-sm">
              Read More
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </motion.article>
      ))}
    </motion.div>

    {/* Load More & Newsletter CTA */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center"
    >
      <div className="bg-gradient-to-r from-[#EA580C] to-[#F97316] rounded-2xl p-8 text-white relative overflow-hidden mb-8">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full transform -translate-x-1/4 translate-y-1/4"></div>
        
        <div className="relative">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Never Miss a Career Opportunity
          </h3>
          <p className="text-white/80 max-w-2xl mx-auto mb-6">
            Subscribe to our newsletter and get the latest salary insights, 
            interview tips, and career advice delivered to your inbox weekly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="px-6 py-3 bg-white text-[#EA580C] hover:bg-gray-100 font-medium rounded-lg transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <button className="px-8 py-4 bg-white/70 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-[#EA580C]/30 font-medium rounded-lg border border-white/20 dark:border-slate-700/20 transition-all shadow-lg">
        Load More Articles
      </button>
    </motion.div>
  </div>
</section>);
});
export default BlogsSection;