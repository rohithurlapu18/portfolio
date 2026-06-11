import { motion } from "framer-motion";

function Education() {
  return (
    <section
      id="education"
      className="py-32 px-6 bg-slate-900"
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-black">
            Education
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full mt-4"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10"
        >
          <div className="flex flex-col md:flex-row justify-between">

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">
                B.Tech Computer Science & Engineering
              </h3>

              <p className="text-slate-300 mt-3 text-lg">
                Vellore Institute of Technology
              </p>

              <p className="text-slate-400 mt-2">
                Expected Graduation: 2028
              </p>
            </div>

            <div className="mt-6 md:mt-0">
              <span className="px-5 py-3 rounded-xl bg-cyan-500/20 text-cyan-400 font-bold">
                CGPA: 9.14
              </span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Education;