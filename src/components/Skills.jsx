import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 80 },
      { name: "C", level: 85 },
      { name: "JavaScript", level: 75 },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React", level: 85 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", level: 80 },
      { name: "GitHub", level: 85 },
      { name: "SQL", level: 75 },
      { name: "VS Code", level: 95 },
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="py-32 px-6 bg-gradient-to-b from-slate-900 to-slate-950"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-black">Skills</h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full mt-4"></div>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Technologies and tools I use to build applications,
            solve problems, and continuously improve as a developer.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">

          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-8">
                {group.title}
              </h3>

              {group.skills.map((skill) => (
                <div key={skill.name} className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300">
                      {skill.name}
                    </span>

                    <span className="text-cyan-400">
                      {skill.level}%
                    </span>
                  </div>

                  <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{
                        width: `${skill.level}%`,
                      }}
                      transition={{
                        duration: 1,
                      }}
                      viewport={{ once: true }}
                      className="h-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Skills;