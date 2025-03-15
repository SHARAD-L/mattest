"use client"
import { motion } from "framer-motion"
import { Brain, Lock, PinIcon as Chip, Globe, ArrowRight, Zap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const ThemeSection = () => {
  // Theme categories with icons
  const themes = [
    {
      icon: <Brain className="h-10 w-10 text-cyan-400" />,
      title: "Artificial Intelligence",
      description: "Harness the power of AI to solve complex problems and create innovative solutions.",
      route: "/problems/ai",
    },
    {
      icon: <Lock className="h-10 w-10 text-purple-400" />,
      title: "Cybersecurity",
      description: "Develop cutting-edge security solutions to protect digital assets and privacy.",
      route: "/problems/cybersecurity",
    },
    {
      icon: <Chip className="h-10 w-10 text-cyan-400" />,
      title: "Blockchain",
      description: "Build decentralized applications that revolutionize trust and transparency.",
      route: "/problems/blockchain",
    },
    {
      icon: <Globe className="h-10 w-10 text-purple-400" />,
      title: "Internet of Things",
      description: "Connect the physical and digital worlds to create smarter environments.",
      route: "/problems/iot",
    },
  ]

  return (
    <section 
      id="theme"
      className="py-12"
      >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white text-center mb-8"
        >
          Explore Problem Statement Themes
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {themes.map((theme, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-black/50 backdrop-blur-md border border-cyan-500/30 rounded-lg hover:border-cyan-500/50 transition-all shadow-lg shadow-cyan-500/10"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                <div className="p-3 bg-black/70 rounded-lg border border-cyan-500/30">{theme.icon}</div>
                <h3 className="text-xl font-bold text-white">{theme.title}</h3>
              </div>
              <p className="text-gray-300 mb-4">{theme.description}</p>

              {/* Animated circuit lines */}
              <div className="relative h-1 w-full bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-full overflow-hidden mb-4">
                <motion.div
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 2,
                    ease: "linear",
                  }}
                  className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-cyan-400 to-purple-400"
                />
              </div>

              {/* Add button for each theme */}
              <Link href={theme.route}>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-none shadow-lg shadow-cyan-500/20 group">
                  <span>View Problem Statements</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="h-0.5 bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 mt-16 mx-auto max-w-md"
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-8 flex items-center justify-center gap-3"
          >
            <Zap className="h-5 w-5 text-cyan-400" />
            <p className="text-gray-400">Choose a theme to explore detailed problem statements</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ThemeSection

