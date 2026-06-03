import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="py-32 px-6 bg-gradient-to-b from-slate-950 to-slate-900"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-black mb-4">
            About Me
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

              <h3 className="text-3xl font-bold mb-6 text-cyan-400">
                Who Am I?
              </h3>

              <p className="text-slate-300 leading-8">
                I'm Rohith Urlapu, a passionate Computer Science student
                at Vellore Institute of Technology.
                I enjoy building software, solving challenging problems,
                and exploring modern technologies.
              </p>

              <p className="text-slate-300 leading-8 mt-5">
                My interests include Python development, React applications,
                software engineering, artificial intelligence,
                and competitive programming.
              </p>

            </div>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-3xl p-8 text-center">
              <h3 className="text-5xl font-black text-cyan-400">
                9.11
              </h3>
              <p className="mt-2 text-slate-300">
                Current CGPA
              </p>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-3xl p-8 text-center">
              <h3 className="text-5xl font-black text-blue-400">
                3rd
              </h3>
              <p className="mt-2 text-slate-300">
                Year Student
              </p>
            </div>

            <div className="bg-purple-500/10 border border-purple-500/20 rounded-3xl p-8 text-center">
              <h3 className="text-5xl font-black text-purple-400">
                React
              </h3>
              <p className="mt-2 text-slate-300">
                Frontend
              </p>
            </div>

            <div className="bg-green-500/10 border border-green-500/20 rounded-3xl p-8 text-center">
              <h3 className="text-5xl font-black text-green-400">
                Python
              </h3>
              <p className="mt-2 text-slate-300">
                Backend
              </p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;