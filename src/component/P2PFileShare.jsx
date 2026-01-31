import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  Github,
  Globe,
  Play,
  Download,
  Cpu,
  Database,
  Shield,
  Code,
  Server,
  Lock,
  Network,
  Key,
  FileLock,
} from "lucide-react";
import { Link } from "react-router-dom";

export const P2PFileShare = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  // Tự động cuộn lên đầu trang khi component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = {
    id: "p2p-file-share",
    title: "VieCloud - Lưu trữ và chia sẻ file P2P",
    category: "Enterprise Web Application",
    status: "Pause",
    year: "2025",
    description:
      "Nền tảng chia sẻ file peer-to-peer với end-to-end encryption, Java Spring Boot backend và React frontend.",
    longDescription:
      "Platform chia sẻ file sử dụng WebRTC cho direct P2P connections, với Spring Boot backend và React frontend. Hệ thống hỗ trợ end-to-end encryption, blockchain-based file verification, và real-time transfer tracking. Tính năng security bao gồm military-grade encryption, digital signatures, và tamper-proof audit logs. MERN stack cho frontend và admin dashboard với enterprise-grade security protocols.",
    imageUrl:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    // Sử dụng Google Drive embed URL
    videoDemo: "https://drive.google.com/file/d/1nidcukXGAEE2VXYitfgHK8PyYuL9kAel/preview",
    liveUrl: "https://p2p-fileshare-demo.vercel.app",
    repoUrl: "https://github.com/nguyendinhdo148/VieClouds__BE",
    techStack: [
      { name: "Java", icon: "☕", component: <Code className="w-5 h-5" /> },
      {
        name: "Spring Boot",
        icon: "🌱",
        component: <Server className="w-5 h-5" />,
      },
      { name: "React", icon: "⚛️", component: <Code className="w-5 h-5" /> },
      {
        name: "Node.js",
        icon: "🟢",
        component: <Server className="w-5 h-5" />,
      },
      {
        name: "WebRTC",
        icon: "📡",
        component: <Network className="w-5 h-5" />,
      },
      { name: "AES-256", icon: "🔒", component: <Lock className="w-5 h-5" /> },
      {
        name: "MongoDB",
        icon: "🍃",
        component: <Database className="w-5 h-5" />,
      },
      {
        name: "Tailwind CSS",
        icon: "🎨",
        component: <Code className="w-5 h-5" />,
      },
    ],
    features: [
      {
        title: "End-to-end Encryption",
        description:
          "Military-grade AES-256 encryption cho tất cả file transfers với zero-knowledge architecture và perfect forward secrecy",
        icon: "🔐",
      },
      {
        title: "Direct P2P WebRTC Transfer",
        description:
          "WebRTC-based direct connections giữa users không qua central server, với STUN/TURN fallback servers",
        icon: "⚡",
      },
      {
        title: "Blockchain File Verification",
        description:
          "Immutable file verification và integrity checks trên private blockchain với smart contract validation",
        icon: "⛓️",
      },
      {
        title: "Real-time Transfer Tracking",
        description:
          "Live transfer tracking với detailed analytics, speed optimization, và network adaptation",
        icon: "📊",
      },
      {
        title: "No Size Limitations",
        description:
          "Transfer files không giới hạn kích thước với resume capability và chunk-based transfers",
        icon: "📁",
      },
      {
        title: "Digital Signatures & Audit Logs",
        description:
          "Cryptographic signatures cho file authenticity, non-repudiation, và tamper-proof audit trails",
        icon: "✍️",
      },
      {
        title: "Multi-file Transfer",
        description:
          "Simultaneous transfer của multiple files với parallel connections và priority management",
        icon: "📦",
      },
      {
        title: "Admin Dashboard",
        description:
          "Enterprise admin dashboard với transfer analytics, user management, và security monitoring",
        icon: "👨‍💼",
      },
    ],
    challenges: [
      {
        title: "NAT Traversal Complexity",
        description:
          "Establish P2P connections qua firewalls, NAT devices, và corporate networks với STUN/TURN servers",
        solution:
          "Implement robust ICE protocol với multiple STUN/TURN servers, connection fallbacks, và hole punching techniques",
      },
      {
        title: "Transfer Reliability",
        description:
          "Đảm bảo reliable file transfers với network disruptions, packet loss, và connection drops",
        solution:
          "Chunk-based transfers với checksums, automatic resume capabilities, và error correction algorithms",
      },
      {
        title: "Security Implementation",
        description:
          "Implement end-to-end encryption cho large-scale transfers, key management và performance overhead",
        solution:
          "Hybrid encryption system với session keys, secure key exchange protocols, và hardware acceleration",
      },
      {
        title: "Scalability & Performance",
        description:
          "Handle thousands of concurrent P2P connections, signaling server optimization và resource management",
        solution:
          "Microservices architecture với load balancing, connection pooling, và efficient signaling mechanisms",
      },
    ],
    screenshots: [
      {
        url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Transfer Interface",
        description: "Main interface cho file selection và transfer initiation",
      },
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Security Settings",
        description: "Encryption settings và security preferences",
      },
      {
        url: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Transfer Progress",
        description: "Real-time transfer tracking và progress monitoring",
      },
      {
        url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Admin Dashboard",
        description: "Enterprise admin interface với analytics",
      },
      {
        url: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "File History",
        description: "Transfer history và audit logs",
      },
      {
        url: "https://images.unsplash.com/photo-1551836026-d5c2c5af78e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Security Audit",
        description: "Security audit và compliance reports",
      },
    ],
    platform: "Web",
    architecture: {
      frontend: "React + WebRTC + Tailwind CSS",
      backend: "Spring Boot + Java",
      database: "MongoDB với GridFS cho large files",
      signaling: "Socket.IO signaling server cluster",
      security: "AES-256 + RSA hybrid encryption",
      blockchain: "Private Ethereum blockchain với smart contracts",
      storage: "Peer storage với distributed caching",
      deployment: "Docker containers trên Kubernetes cluster",
      monitoring: "Prometheus + Grafana + ELK stack",
    },
    achievements: [
      "Zero-knowledge encryption đảm bảo complete privacy",
      "99.9% transfer success rate với automatic resume",
      "Military-grade security certifications",
      "Enterprise scalability cho 10,000+ concurrent users",
    ],
  };

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
                <span className="hidden sm:inline">Back to Projects</span>
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
                <span className="hidden sm:inline">Live Demo</span>
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
                <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-full text-sm font-medium">
                  🔐 Enterprise Security
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
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech, index) => (
                  <div
                    key={index}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border transition-all hover:scale-105 ${
                      index === 0
                        ? "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800"
                        : index === 1
                        ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800"
                        : index === 2
                        ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800"
                        : index === 3
                        ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800"
                        : index === 4
                        ? "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800"
                        : index === 5
                        ? "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700"
                        : index === 6
                        ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800"
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
                    Security
                  </div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    {project.architecture.security}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    Blockchain
                  </div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    {project.architecture.blockchain}
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
                title="Job Portal Website Demo"
                allowFullScreen
              />
            </div>


            {/* Resources Section */}
            <div className="  from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-6">
                <Download className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Tài nguyên
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
                          Video Demo
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
                          View Java + React repository
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
                          Live Demo (Đang phát triển)
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
            {[
              { id: "overview", label: "Tổng quan", icon: "📋" },
              { id: "features", label: "Chức năng", icon: "✨" },
              { id: "screenshots", label: "Ảnh hệ thống", icon: "🖼️" },
              { id: "architecture", label: "Kiến trúc hệ thống", icon: "🏗️" },
            ].map((tab) => (
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
                    Tổng Quan Chia Sẻ Tệp P2P Bảo Mật
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
                                Triển khai mã hóa end-to-end cấp độ quân sự cho việc chuyển tệp bảo mật
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mt-0.5">
                                <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                            </div>
                            <span className="text-gray-700 dark:text-gray-300">
                                Tạo kết nối P2P đáng tin cậy với WebRTC và giải pháp NAT traversal
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mt-0.5">
                                <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                            </div>
                            <span className="text-gray-700 dark:text-gray-300">
                                Phát triển xác minh dựa trên blockchain cho tính toàn vẹn và xác thực tệp
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mt-0.5">
                                <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                            </div>
                            <span className="text-gray-700 dark:text-gray-300">
                                Xây dựng kiến trúc doanh nghiệp có khả năng mở rộng với nhật ký kiểm tra toàn diện
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="from-green-50 to-white dark:from-green-900/10 dark:to-gray-800 rounded-xl p-6 border border-green-100 dark:border-green-900/30">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Điểm Nổi Bật Công Nghệ Bảo Mật
                    </h4>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mt-0.5">
                                <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full"></div>
                            </div>
                            <span className="text-gray-700 dark:text-gray-300">
                                Backend Java Spring Boot với các giao thức bảo mật cấp doanh nghiệp
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mt-0.5">
                                <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full"></div>
                            </div>
                            <span className="text-gray-700 dark:text-gray-300">
                                Kết nối P2P WebRTC với mã hóa end-to-end AES-256
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mt-0.5">
                                <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full"></div>
                            </div>
                            <span className="text-gray-700 dark:text-gray-300">
                                Tích hợp blockchain cho xác minh tệp bất biến và nhật ký kiểm tra
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mt-0.5">
                                <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full"></div>
                            </div>
                            <span className="text-gray-700 dark:text-gray-300">
                                Kiến trúc zero-knowledge đảm bảo quyền riêng tư dữ liệu hoàn toàn
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )}

    {/* Tab Tính Năng */}
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
                    className="group bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-lg"
                >
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            <span className="text-xl">{feature.icon}</span>
                        </div>
                        <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                {feature.title}
                            </h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
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
                Thách Thức Bảo Mật & P2P & Giải Pháp
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

    {/* Tab Ảnh Chụp Màn Hình */}
    {activeTab === "screenshots" && (
        <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Ảnh Chụp Màn Hình Nền Tảng
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.screenshots.map((screenshot, index) => (
                    <div
                        key={index}
                        className="group relative rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300"
                    >
                        <img
                            src={screenshot.url}
                            alt={screenshot.title}
                            className="w-full h-48 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-6">
                            <div className="text-white text-center mb-4">
                                <div className="font-semibold mb-1">
                                    {screenshot.title}
                                </div>
                                <div className="text-sm text-white/70">
                                    {screenshot.description}
                                </div>
                            </div>
                            <button className="px-4 py-2 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors">
                                Xem Kích Thước Đầy Đủ
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )}

    {/* Tab Kiến Trúc */}
    {activeTab === "architecture" && (
        <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Kiến Trúc Bảo Mật
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
                            <Lock className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Sơ Đồ Kiến Trúc Bảo Mật
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Mã hóa P2P với xác minh blockchain và bảo mật doanh nghiệp
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

export default P2PFileShare;