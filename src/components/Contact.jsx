import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-6 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-black">
            Let's Connect
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Open to internships, collaborations, and exciting opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10">
            <h3 className="text-3xl font-bold mb-6 text-cyan-400">
              Contact Information
            </h3>

            <div className="space-y-6">

              <a
                href="mailto:rohithurlapu18@gmail.com"
                className="flex items-center gap-4 hover:text-cyan-400 transition"
              >
                <FaEnvelope className="text-2xl" />
                <span>rohithurlapu18@gmail.com</span>
              </a>

              <a
                href="https://github.com/rohithurlapu18"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 hover:text-cyan-400 transition"
              >
                <FaGithub className="text-2xl" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/rohithurlapu/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 hover:text-cyan-400 transition"
              >
                <FaLinkedin className="text-2xl" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://leetcode.com/u/ROHITH1899/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 hover:text-cyan-400 transition"
              >
                <FaCode className="text-2xl" />
                <span>LeetCode</span>
              </a>

            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl border border-cyan-500/20 p-10 flex flex-col justify-center">

            <h3 className="text-4xl font-black mb-4">
              Ready to Build Something Amazing?
            </h3>

            <p className="text-slate-300 leading-8">
              I'm passionate about software engineering,
              web development, and solving real-world problems.
            </p>

            <a
              href="mailto:rohithurlapu18@gmail.com"
              className="mt-8 inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold hover:scale-105 transition"
            >
              Contact Me
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;