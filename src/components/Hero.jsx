import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/profile.jpg";
import {
  FaGithub,
  FaLinkedin,
  FaCode,
  FaArrowDown,
} from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-slate-950" />

      {/* Gradient Blobs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      {/* Grid Effect */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff10 1px, transparent 1px), linear-gradient(to bottom, #ffffff10 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-black leading-tight">
  Hi, I'm{" "}
  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
    Rohith URLAPU
  </span>
  <p className="text-xl md:text-2xl text-slate-300 mt-4">
  B.Tech CSE Student at VIT
</p>
</h1>

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.3 }}
  className="mt-8 mb-6"
>
  <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-xl">
    <span className="w-2 h-2 rounded-full bg-green-400"></span>
    🚀 Available for Internships
  </span>
</motion.div>

            <div className="mt-6 text-2xl md:text-4xl font-semibold text-slate-300 h-20">
              <TypeAnimation
                sequence={[
                  "Python Developer",
                  1500,
                  "React Developer",
                  1500,
                  "Problem Solver",
                  1500,
                  "Future Software Engineer",
                  1500,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </div>

            <p className="mt-6 text-slate-400 text-lg max-w-xl leading-relaxed">
              B.Tech CSE Student at VIT with a CGPA of 9.14.
              Passionate about building scalable applications,
              solving challenging problems, and learning modern technologies.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold hover:scale-105 transition"
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                className="px-8 py-4 rounded-xl border border-cyan-500/30 hover:bg-cyan-500/10 transition"
              >
                Download Resume
              </a>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-12">

  <div className="text-center">
    <h3 className="text-3xl font-black text-cyan-400">
      9.14
    </h3>
    <p className="text-slate-400">
      CGPA
    </p>
  </div>

  <div className="text-center">
    <h3 className="text-3xl font-black text-cyan-400">
      3+
    </h3>
    <p className="text-slate-400">
      Technologies
    </p>
  </div>

  <div className="text-center">
    <h3 className="text-3xl font-black text-cyan-400">
      VIT
    </h3>
    <p className="text-slate-400">
      University
    </p>
  </div>

</div>

            {/* Social Links */}
            <div className="flex gap-6 mt-10 text-3xl">
              <a
                href="https://github.com/rohithurlapu18"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/rohithurlapu/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://leetcode.com/u/ROHITH1899/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 transition"
              >
                <FaCode />
              </a>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-30 animate-pulse" />

              {/* Profile Circle */}
              <div className="relative w-80 h-80 rounded-full border-4 border-cyan-500/30 overflow-hidden bg-slate-900 flex items-center justify-center">
                <img
                    src={profile}
                    alt="Rohith Urlapu"
                    className="w-full h-full object-cover"
                />
              </div>
              <motion.div
  animate={{
    y: [0, -15, 0],
  }}
  transition={{
    repeat: Infinity,
    duration: 3,
  }}
  className="absolute -left-10 top-20 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-lg border border-white/10"
>
  Python
</motion.div>

<motion.div
  animate={{
    y: [0, 15, 0],
  }}
  transition={{
    repeat: Infinity,
    duration: 4,
  }}
  className="absolute -right-10 top-32 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-lg border border-white/10"
>
  React
</motion.div>

<motion.div
  animate={{
    y: [0, -10, 0],
  }}
  transition={{
    repeat: Infinity,
    duration: 5,
  }}
  className="absolute right-0 bottom-10 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-lg border border-white/10"
>
  JavaScript
</motion.div>
            </div>
          </motion.div>

        </div>

        {/* Scroll Down */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cyan-400 text-2xl"
        >
          <FaArrowDown />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;