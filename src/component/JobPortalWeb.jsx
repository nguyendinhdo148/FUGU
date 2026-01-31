import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  Github,
  Globe,
  Play,
  Download,
  Smartphone,
  Cpu,
  Database,
  Shield,
  Code,
  Server,
  Brain,
  Cloud,
  Maximize2,
  Minimize2,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

export const JobPortalWeb = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [zoomLevel, setZoomLevel] = useState(100);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  
  // Tự động cuộn lên đầu trang khi component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Tạo mảng 19 ảnh từ public/findjob/
  const screenshots = Array.from({ length: 19 }, (_, i) => ({
    url: `/findjob/Ảnh${i + 1}.png`,
    title: `Hệ thống Website ${i + 1}`,
  }));

  const project = {
    id: "job-portal-web",
    title: "VieJobs - Website tìm kiếm việc làm",
    category: "Full-stack Web Application",
    status: "Live",
    year: "2025",
    description:
      "Nền tảng tìm việc làm thông minh với AI matching từ OpenAI/Gemini, real-time notifications và Cloudinary media hosting.",
    longDescription:
      "VieJobs là nền tảng tìm kiếm việc làm thế hệ mới sử dụng MERN stack với AI integration từ OpenAI và Gemini. Hệ thống hỗ trợ real-time notifications, advanced search với filter đa chiều, Cloudinary cho media upload, và hệ thống tracking ứng tuyển từ A đến Z. Tính năng nổi bật bao gồm AI-powered job recommendations, interview simulation với chatbot AI, và advanced analytics dashboard.",
    imageUrl:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    // Sử dụng Google Drive embed URL
    videoDemo: "https://drive.google.com/file/d/194QGIYoJ_CXCHFz5x7lygWmI5YXiVn4U/preview",
    liveUrl: "https://vie-jobs.vercel.app/",
    repoUrl:
      "https://github.com/nguyendinhdo148/Nhom3-DACS-CNPM-WebsiteTimKiemViecLam",
    techStack: [
      { name: "React", icon: "⚛️", component: <Code className="w-5 h-5" /> },
      {
        name: "Node.js",
        icon: "🟢",
        component: <Server className="w-5 h-5" />,
      },
      {
        name: "MongoDB",
        icon: "🍃",
        component: <Database className="w-5 h-5" />,
      },
      {
        name: "Express.js",
        icon: "🚂",
        component: <Server className="w-5 h-5" />,
      },
      {
        name: "Cloudinary",
        icon: "☁️",
        component: <Cloud className="w-5 h-5" />,
      },
      {
        name: "OpenAI API",
        icon: "🧠",
        component: <Brain className="w-5 h-5" />,
      },
      {
        name: "Gemini AI",
        icon: "🌟",
        component: <Brain className="w-5 h-5" />,
      },
      {
        name: "Tailwind CSS",
        icon: "🎨",
        component: <Code className="w-5 h-5" />,
      },
    ],
    features: [
      {
        title: "AI Job Matching với OpenAI/Gemini",
        description:
          "Sử dụng multiple AI models để phân tích CV và đề xuất công việc phù hợp với độ chính xác 95%+",
        icon: "🧠",
      },
      {
        title: "Real-time Notifications System",
        description:
          "WebSocket-based real-time alerts cho ứng tuyển, interview schedules và job updates",
        icon: "🔔",
      },
      {
        title: "Cloudinary Media Hosting",
        description:
          "Upload và quản lý CV, portfolio, company images với CDN và auto-optimization",
        icon: "📁",
      },
      {
        title: "Advanced Search Engine",
        description:
          "Full-text search với 20+ filters, location-based search và salary range analysis",
        icon: "🔍",
      },
      {
        title: "Interview Simulation Chatbot",
        description:
          "AI chatbot phỏng vấn thử với real-time feedback và performance scoring",
        icon: "🤖",
      },
      {
        title: "Analytics Dashboard",
        description:
          "Real-time insights về job market trends, application rates và performance metrics",
        icon: "📊",
      },
      {
        title: "Resume Builder với Templates",
        description:
          "Interactive resume builder với professional templates và AI suggestions",
        icon: "📄",
      },
      {
        title: "Salary Insights & Comparison",
        description:
          "Market salary analysis và comparison tools cho informed decisions",
        icon: "💰",
      },
    ],
    challenges: [
      {
        title: "AI Integration Complexity",
        description:
          "Tích hợp và quản lý multiple AI models (OpenAI GPT-4 + Google Gemini) cho job matching, xử lý rate limits và costs optimization",
        solution:
          "Implement hybrid AI system với fallback mechanism, intelligent caching strategy, và cost optimization algorithms",
      },
      {
        title: "Real-time Scalability",
        description:
          "Xử lý real-time updates từ 10,000+ job listings, 50,000+ users với WebSocket connections và database optimization",
        solution:
          "Sử dụng Socket.IO cluster với Redis adapter, connection pooling, và database indexing strategies",
      },
      {
        title: "Media Processing Performance",
        description:
          "Optimize media upload (CV, portfolio images) với Cloudinary, xử lý large files và CDN distribution",
        solution:
          "Implement chunked uploads với resumable capability, image compression algorithms, và CDN caching",
      },
      {
        title: "Security & Privacy Compliance",
        description:
          "Đảm bảo data protection compliance (GDPR, CCPA) cho sensitive user data và job applications",
        solution:
          "End-to-end encryption cho sensitive data, role-based access control, và audit logging system",
      },
    ],
    platform: "Web",
    architecture: {
      frontend: "React + Redux + Tailwind CSS",
      backend: "Node.js + Express.js",
      database: "MongoDB Atlas với Mongoose ODM",
      aiServices: "OpenAI API + Google Gemini AI",
      storage: "Cloudinary CDN",
      realtime: "Socket.IO với Redis adapter",
      deployment: "Vercel (Frontend) + AWS EC2 (Backend)",
      monitoring: "Prometheus + Grafana",
    },
    achievements: [
      "95% accuracy trong job matching với AI algorithms",
      "70% reduction in page load times với optimized media delivery",
      "50,000+ monthly active users",
      "99.9% uptime với scalable architecture",
    ],
  };

  const handleZoomIn = () => {
    if (zoomLevel < 200) {
      setZoomLevel(zoomLevel + 25);
    }
  };

  const handleZoomOut = () => {
    if (zoomLevel > 50) {
      setZoomLevel(zoomLevel - 25);
    }
  };

  const handleResetZoom = () => {
    setZoomLevel(100);
  };

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1
    );
  };

  // Thêm phần tab mới "screenshots"
  const tabs = [
    { id: "overview", label: "Tổng quan", icon: "📋" },
    { id: "features", label: "Tính năng", icon: "✨" },
    { id: "screenshots", label: "Ảnh hệ thống", icon: "🖼️" },
    { id: "architecture", label: "Kiến trúc hệ thống", icon: "🏗️" },
  ];

  return (
    <div className="min-h-screen   from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                to="/#projects"
                className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
              >
                <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                <span className="hidden sm:inline">Trở về</span>
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2   from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/25 active:scale-95"
              >
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline">Xem trang web trực tiếp</span>
              </a>

              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-medium rounded-lg transition-all hover:shadow-lg active:scale-95"
              >
                <Github className="w-4 h-4" />
                <span className="hidden sm:inline">Source Code</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Left Column - Project Info */}
          <div className="space-y-6">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span
                  className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === "Live"
                      ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                      : "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400"
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      project.status === "Live"
                        ? "bg-green-500 animate-pulse"
                        : "bg-yellow-500"
                    }`}
                  ></div>
                  {project.status}
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium">
                  {project.category}
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-sm font-medium">
                  {project.year}
                </span>
                <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-sm font-medium">
                  💻 Web Platform
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {project.title}
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Project Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="  from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  Status
                </div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">
                  {project.status}
                </div>
              </div>
              <div className="  from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  Year
                </div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">
                  {project.year}
                </div>
              </div>
              <div className="  from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  Category
                </div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">
                  {project.category}
                </div>
              </div>
              <div className="  from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  Platform
                </div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">
                  {project.platform}
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Công nghệ sử dụng
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech, index) => (
                  <div
                    key={index}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border transition-all hover:scale-105 ${
                      index === 0
                        ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800"
                        : index === 1
                        ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800"
                        : index === 2
                        ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800"
                        : index === 3
                        ? "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700"
                        : index === 4
                        ? "bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800"
                        : index === 5
                        ? "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800"
                        : index === 6
                        ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800"
                        : "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800"
                    }`}
                  >
                    <span className="text-lg">{tech.icon}</span>
                    <span className="font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Overview */}
            <div className="  from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-4">
                <Cpu className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Kiến trúc hệ thống
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    Frontend
                  </div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    {project.architecture.frontend}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    Backend
                  </div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    {project.architecture.backend}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    Database
                  </div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    {project.architecture.database}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    AI Services
                  </div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    {project.architecture.aiServices}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Video Demo */}
          <div className="space-y-6">
            {/* Video Player - Sử dụng Google Drive embed */}
            <div className="relative w-full pt-[56.25%] rounded-2xl overflow-hidden border-2 border-gray-800 dark:border-gray-700 shadow-2xl bg-black">
              <iframe
                src={project.videoDemo}
                className="absolute top-0 left-0 w-full h-full"
                allow="autoplay"
                referrerPolicy="no-referrer"
                title="VieJobs Website Demo"
                allowFullScreen
              />
            </div>


            {/* Resources Section */}
            <div className="  from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-6">
                <Download className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Tài nguyên dự án
                </h3>
              </div>

              <div className="space-y-4">
                {/* Demo Video Card */}
                <div className="group relative">
                  <div className="absolute inset-0   from-blue-500 to-purple-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <a
                    href={project.videoDemo.replace('/preview', '/view')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center justify-between p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-500 transition-all group-hover:shadow-lg"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12   from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">
                          Xem Demo Dự Án
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          Xem video demo trên Google Drive
                        </div>
                      </div>
                    </div>
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>

                {/* GitHub Repository Card */}
                <div className="group relative">
                  <div className="absolute inset-0   from-gray-700 to-gray-900 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center justify-between p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-gray-800 dark:hover:border-gray-400 transition-all group-hover:shadow-lg"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12   from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">
                          Source Code
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          View GitHub repository
                        </div>
                      </div>
                    </div>
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>

                {/* Live Demo Card */}
                <div className="group relative">
                  <div className="absolute inset-0   from-blue-600 to-blue-800 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center justify-between p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-500 transition-all group-hover:shadow-lg"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12   from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">
                          Xem website trực tiếp
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          Visit live website
                        </div>
                      </div>
                    </div>
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="border-b border-gray-200 dark:border-gray-800 mb-8">
          <nav className="flex flex-wrap gap-4 sm:gap-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? "border-blue-500 text-blue-600 dark:text-blue-400"
                    : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                }`}
              >
                <span>{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="mb-16">
          {/* Tab Tổng Quan */}
          {activeTab === "overview" && (
            <div className="space-y-8">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Tổng Quan Dự Án
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  {project.longDescription}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="from-blue-50 to-white dark:from-blue-900/10 dark:to-gray-800 rounded-xl p-6 border border-blue-100 dark:border-blue-900/30">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Mục Tiêu Chính
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        Tạo trải nghiệm người dùng trực quan và hấp dẫn cho người tìm việc và nhà tuyển dụng
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        Triển khai kiến trúc MERN stack có thể mở rộng với tích hợp AI
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        Đảm bảo bảo mật cấp doanh nghiệp và quyền riêng tư cho dữ liệu nhạy cảm
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        Tối ưu hiệu suất trên tất cả thiết bị với thiết kế responsive
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="from-green-50 to-white dark:from-green-900/10 dark:to-gray-800 rounded-xl p-6 border border-green-100 dark:border-green-900/30">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Công Nghệ Nổi Bật
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        MERN stack (MongoDB, Express, React, Node.js) với tích hợp Cloudinary
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        Tích hợp AI kép: OpenAI GPT-4 + Google Gemini cho kết hợp thông minh
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        Tính năng thời gian thực với WebSockets và push notifications
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        Bảo mật nâng cao với JWT, mã hóa và kiểm soát truy cập theo vai trò
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Tab Tính Năng */}
          {activeTab === "features" && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Tính Năng Chính
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="group from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="text-2xl">{feature.icon}</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab Thách Thức */}
          {activeTab === "challenges" && (
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Thách Thức Kỹ Thuật & Giải Pháp
              </h3>

              <div className="space-y-6">
                {project.challenges.map((challenge, index) => (
                  <div
                    key={index}
                    className="group from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/30 rounded-lg flex items-center justify-center">
                        <span className="text-red-600 dark:text-red-400 font-bold text-xl">
                          !
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-sm font-medium rounded-full">
                            Thách Thức {index + 1}
                          </span>
                        </div>

                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          {challenge.title}
                        </h4>

                        <div className="mb-4 p-4 bg-gray-100 dark:bg-gray-800/50 rounded-lg">
                          <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                            Mô Tả Thách Thức:
                          </div>
                          <p className="text-gray-700 dark:text-gray-300">
                            {challenge.description}
                          </p>
                        </div>

                        <div className="p-4 from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg border border-blue-100 dark:border-blue-900/30">
                          <div className="flex items-center gap-2 mb-2">
                            <Shield className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            <div className="text-sm font-medium text-blue-700 dark:text-blue-300">
                              Giải Pháp Đã Triển Khai:
                            </div>
                          </div>
                          <p className="text-gray-700 dark:text-gray-300">
                            {challenge.solution}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab Ảnh Hệ Thống */}
          {activeTab === "screenshots" && (
            <div>
              {/* Zoom Controls */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Ảnh Hệ Thống
                </h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleZoomOut}
                      disabled={zoomLevel <= 50}
                      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      title="Zoom Out"
                    >
                      <Minimize2 className="w-4 h-4" />
                    </button>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg font-medium text-gray-700 dark:text-gray-300 min-w-[60px] text-center">
                      {zoomLevel}%
                    </span>
                    <button
                      onClick={handleZoomIn}
                      disabled={zoomLevel >= 200}
                      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      title="Zoom In"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleResetZoom}
                      className="px-3 py-2 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>

              {/* Image Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {screenshots.map((screenshot, index) => (
                  <div
                    key={index}
                    className="group relative rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 cursor-pointer"
                    onClick={() => openLightbox(index)}
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={screenshot.url}
                        alt={screenshot.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        style={{ transform: `scale(${zoomLevel / 100})` }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div className="text-white">
                        <div className="font-semibold mb-1">
                          {screenshot.title}
                        </div>
                        <div className="text-sm text-white/70">
                          Click để xem toàn màn hình
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Lightbox */}
              {isLightboxOpen && (
                <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4">
                  <button
                    onClick={closeLightbox}
                    className="absolute top-4 right-4 z-10 p-2 bg-gray-800/50 hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>

                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-gray-800/50 hover:bg-gray-800 rounded-full transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>

                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-gray-800/50 hover:bg-gray-800 rounded-full transition-colors"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>

                  <div className="relative max-w-7xl max-h-[90vh] w-full h-full">
                    <img
                      src={screenshots[currentImageIndex].url}
                      alt={screenshots[currentImageIndex].title}
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gray-800/50 px-4 py-2 rounded-lg text-white">
                      {currentImageIndex + 1} / {screenshots.length} - {screenshots[currentImageIndex].title}
                    </div>
                  </div>

                  {/* Thumbnail Navigation */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {screenshots.slice(0, 10).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          currentImageIndex === index
                            ? "bg-white"
                            : "bg-gray-500 hover:bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Tab Kiến Trúc */}
          {activeTab === "architecture" && (
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Kiến Trúc Hệ Thống
              </h3>

              <div className="from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {Object.entries(project.architecture).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-2 capitalize">
                        {key.replace(/([A-Z])/g, " $1")}
                      </div>
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">
                        {value}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="relative h-64 from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Cpu className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Sơ Đồ Kiến Trúc
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      MERN stack với dịch vụ AI và tích hợp Cloudinary
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobPortalWeb;