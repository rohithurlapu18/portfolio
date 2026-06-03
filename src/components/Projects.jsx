import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "AI Resume Analyzer",
    description:
      "An AI-powered application that analyzes resumes, extracts skills, and provides improvement suggestions.",
    tech: ["Python", "NLP", "Machine Learning"],
  },
  {
    title: "Student Management System",
    description:
      "A full-stack application for managing student records, attendance, and academic performance.",
    tech: ["React", "Node.js", "SQL"],
  },
  {
    title: "Research Paper Summarizer",
    description:
      "Tool that summarizes research papers and extracts key insights using NLP techniques.",
    tech: ["Python", "Transformers", "Flask"],
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio website showcasing projects, achievements, and technical skills.",
    tech: ["React", "Tailwind", "Framer Motion"],
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="py-32 px-6 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <h2 className="text-5xl font-black">
            Projects
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full mt-4"></div>

          <p className="text-slate-400 mt-6">
            Some projects demonstrating my technical abilities and problem-solving skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden"
            >

              {/* Project Banner */}
              <div className="h-48 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 flex items-center justify-center">
                <h3 className="text-3xl font-black text-white">
                  {project.title}
                </h3>
              </div>

              <div className="p-8">

                <p className="text-slate-300 leading-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-8">
                  <a
                    href="https://github.com/rohithurlapu18"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition"
                  >
                    <FaGithub />
                    Code
                  </a>

                  <a
                    href="#"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition"
                  >
                    <FaExternalLinkAlt />
                    Demo
                  </a>
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;