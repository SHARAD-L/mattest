"use client"

import { motion } from "framer-motion"
import { ArrowLeft, PinIcon as Chip } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BlockchainProblemsPage() {
  // Sample Blockchain problem statements
  const problems = [
    {
      id: 1,
      title: "Decentralized Identity Verification",
      description:
        "Create a blockchain-based system for secure, self-sovereign identity verification that gives users control over their personal data.",
      difficulty: "Hard",
      tags: ["Identity", "Privacy", "Smart Contracts"],
    },
    {
      id: 2,
      title: "Supply Chain Transparency Platform",
      description:
        "Develop a blockchain solution that tracks products through the supply chain, ensuring transparency and authenticity for consumers.",
      difficulty: "Medium",
      tags: ["Supply Chain", "Traceability", "Consumer Trust"],
    },
    {
      id: 3,
      title: "Decentralized Voting System",
      description:
        "Build a secure, transparent voting system using blockchain technology that ensures vote integrity and prevents manipulation.",
      difficulty: "Hard",
      tags: ["Governance", "Security", "Transparency"],
    },
    {
      id: 4,
      title: "NFT Marketplace for Digital Creators",
      description:
        "Design a marketplace where digital creators can mint, sell, and trade NFTs with low transaction fees and environmental impact.",
      difficulty: "Medium",
      tags: ["NFTs", "Digital Art", "Marketplace"],
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/10 to-black -z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.05)_0%,transparent_70%)] -z-20"></div>

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20 -z-30">
        <div className="h-full w-full bg-[linear-gradient(to_right,#8884_1px,transparent_1px),linear-gradient(to_bottom,#8884_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="mb-8">
          <Link href="/#theme">
            <Button variant="ghost" className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-950/30 mb-4">
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
            <div className="p-4 bg-black/70 rounded-lg border border-cyan-500/30">
              <Chip className="h-12 w-12 text-cyan-400" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Blockchain
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-3xl"
          >
            Explore these blockchain challenges and build decentralized applications that revolutionize trust,
            transparency, and security across various industries.
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="p-6 bg-black/50 backdrop-blur-md border border-cyan-500/30 rounded-lg hover:border-cyan-500/50 transition-all shadow-lg shadow-cyan-500/10"
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
                    className="px-2 py-1 bg-cyan-900/30 border border-cyan-500/30 rounded-md text-xs text-cyan-300"
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

