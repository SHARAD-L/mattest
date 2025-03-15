"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function IoTProblemsPage() {
  // Sample IoT problem statements
  const problems = [
    {
      id: 1,
      title: "Smart City Traffic Management",
      description:
        "Design an IoT system that optimizes traffic flow in urban areas by collecting and analyzing data from various sensors and cameras.",
      difficulty: "Hard",
      tags: ["Smart Cities", "Data Analysis", "Traffic Management"],
    },
    {
      id: 2,
      title: "Connected Healthcare Monitoring",
      description:
        "Create a network of IoT devices that can monitor patient health metrics remotely and alert healthcare providers about critical changes.",
      difficulty: "Medium",
      tags: ["Healthcare", "Remote Monitoring", "Real-time Alerts"],
    },
    {
      id: 3,
      title: "Sustainable Agriculture System",
      description:
        "Develop an IoT solution for agriculture that monitors soil conditions, weather, and crop health to optimize resource usage and increase yields.",
      difficulty: "Medium",
      tags: ["Agriculture", "Sustainability", "Resource Optimization"],
    },
    {
      id: 4,
      title: "Smart Home Energy Management",
      description:
        "Build a system that connects home appliances and energy sources to optimize energy usage, reduce costs, and minimize environmental impact.",
      difficulty: "Easy",
      tags: ["Smart Home", "Energy Efficiency", "Automation"],
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black -z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(128,0,255,0.05)_0%,transparent_70%)] -z-20"></div>

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20 -z-30">
        <div className="h-full w-full bg-[linear-gradient(to_right,#8884_1px,transparent_1px),linear-gradient(to_bottom,#8884_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="mb-8">
          <Link href="/#theme">
            <Button variant="ghost" className="text-purple-400 hover:text-purple-300 hover:bg-purple-950/30 mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Themes
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="p-4 bg-black/70 rounded-lg border border-purple-500/30">
              <Globe className="h-12 w-12 text-purple-400" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Internet of Things
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-3xl"
          >
            Dive into these IoT challenges and connect the physical and digital worlds to create smarter, more efficient
            environments that improve our daily lives.
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="p-6 bg-black/50 backdrop-blur-md border border-purple-500/30 rounded-lg hover:border-purple-500/50 transition-all shadow-lg shadow-purple-500/10"
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold text-white">{problem.title}</h2>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    problem.difficulty === "Hard"
                      ? "bg-red-500/20 text-red-300"
                      : problem.difficulty === "Medium"
                        ? "bg-yellow-500/20 text-yellow-300"
                        : "bg-green-500/20 text-green-300"
                  }`}
                >
                  {problem.difficulty}
                </span>
              </div>

              <p className="text-gray-300 mb-4">{problem.description}</p>

              <div className="flex flex-wrap gap-2">
                {problem.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-purple-900/30 border border-purple-500/30 rounded-md text-xs text-purple-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

