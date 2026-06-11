import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaGithub,
  FaLinkedin,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";

const achievements = [
  {
    icon: <FaGraduationCap />,
    title: "Current CGPA",
    value: "9.14",
    description: "Maintaining strong academic performance in Computer Science.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Tech Stack",
    value: "React + Python",
    description: "Building modern web applications and solving problems.",
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    value: "Active",
    description: "Continuously working on projects and repositories.",
  },
  {
    icon: <FaCode />,
    title: "Problem Solving",
    value: "DSA",
    description: "Improving algorithmic thinking and coding skills.",
  },
];

function Achievements() {
  return (
    <section
      id="achievements"
      className="py-32 px-6 bg-gradient-to-b from-slate-950 to-slate-900"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black">
            Achievements
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>

          <p className="text-slate-400 mt-6">
            Academic milestones, technical growth, and professional development.
          </p>
        </div>

        {/* Featured Achievement */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative mb-20"
        >
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>

          <div className="relative overflow-hidden rounded-[32px] border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-xl p-10 md:p-16">

            <div className="absolute -right-16 -top-16 w-64 h-64 border border-cyan-500/20 rounded-full"></div>
            <div className="absolute -left-20 -bottom-20 w-72 h-72 border border-purple-500/20 rounded-full"></div>

            <div className="relative z-10 text-center">

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="text-7xl mb-6"
              >
                🏆
              </motion.div>

              <h3 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Academic Excellence
              </h3>

              <p className="text-2xl md:text-4xl font-bold text-white mb-6">
                2nd Rank Holder at VIT
              </p>

              <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-8">
                Achieved a semester CGPA of
                <span className="text-cyan-400 font-bold"> 9.7 </span>
                and secured the
                <span className="text-purple-400 font-bold">
                  {" "}2nd Rank Position
                </span>
                through consistent academic excellence and dedication.
              </p>

              <div className="flex flex-wrap justify-center gap-6 mt-10">

                <div className="px-8 py-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20">
                  <p className="text-cyan-400 text-sm uppercase tracking-widest">
                    Rank
                  </p>
                  <h4 className="text-3xl font-black text-white">
                    #2
                  </h4>
                </div>

                <div className="px-8 py-4 rounded-2xl bg-purple-500/10 border border-purple-500/20">
                  <p className="text-purple-400 text-sm uppercase tracking-widest">
                    Semester CGPA
                  </p>
                  <h4 className="text-3xl font-black text-white">
                    9.7
                  </h4>
                </div>

                <div className="px-8 py-4 rounded-2xl bg-green-500/10 border border-green-500/20">
                  <p className="text-green-400 text-sm uppercase tracking-widest">
                    Current CGPA
                  </p>
                  <h4 className="text-3xl font-black text-white">
                    9.14
                  </h4>
                </div>

              </div>

            </div>
          </div>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center"
            >
              <div className="text-cyan-400 text-4xl mb-5 flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-3xl font-black text-white mb-2">
                {item.value}
              </h3>

              <h4 className="text-cyan-400 font-semibold mb-3">
                {item.title}
              </h4>

              <p className="text-slate-400 text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}

        </div>

        {/* Coding Profiles */}
        <div className="mt-24">

          <h3 className="text-3xl font-bold text-center mb-12">
            Coding Profiles
          </h3>

          <div className="grid md:grid-cols-3 gap-8">

            <a
              href="https://github.com/rohithurlapu18"
              target="_blank"
              rel="noreferrer"
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-500/50 transition"
            >
              <FaGithub className="text-5xl text-cyan-400 mb-4" />
              <h4 className="text-2xl font-bold">GitHub</h4>
              <p className="text-slate-400 mt-2">
                Explore my repositories and projects.
              </p>
            </a>

            <a
              href="https://www.linkedin.com/in/rohithurlapu/"
              target="_blank"
              rel="noreferrer"
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-500/50 transition"
            >
              <FaLinkedin className="text-5xl text-cyan-400 mb-4" />
              <h4 className="text-2xl font-bold">LinkedIn</h4>
              <p className="text-slate-400 mt-2">
                Connect and view my professional profile.
              </p>
            </a>

            <a
              href="https://leetcode.com/u/ROHITH1899/"
              target="_blank"
              rel="noreferrer"
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-500/50 transition"
            >
              <FaCode className="text-5xl text-cyan-400 mb-4" />
              <h4 className="text-2xl font-bold">LeetCode</h4>
              <p className="text-slate-400 mt-2">
                Track my coding and DSA journey.
              </p>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Achievements;