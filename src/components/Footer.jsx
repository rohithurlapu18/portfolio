import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-10">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <h3 className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Rohith Urlapu
        </h3>

        <p className="text-slate-400 mt-4">
          B.Tech CSE Student • Python Developer • React Developer
        </p>

        <div className="flex justify-center gap-6 mt-6 text-2xl">

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

        <p className="text-slate-500 mt-8">
          © 2026 Rohith Urlapu. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;