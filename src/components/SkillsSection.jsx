const skills = {
    "Full Stack Development": [
        "HTML", "CSS", "JavaScript", "TypeScript", "ReactJS", "NextJS",
        "NodeJS", "ExpressJS", "MongoDB", "Django", "Flask"
    ],
    "Computer Languages": ["C", "C#", "Java", "Python"],
    "Known Tools": [
        "Git & GitHub", "Visual Studio Code", "Visual Studio", "Postman", "Figma", "Docker", "Prisma", "TailwindCSS"
    ],
};

export default function SkillsSection() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:row-span-2 rounded-2xl p-5 border border-white/10 bg-gradient-to-b from-slate-900/10 to-slate-800/20 shadow-lg hover:shadow-[4px_4px_0px] hover:shadow-blue-500/40 transition-all duration-200 cursor-pointer">
                <h1 className="text-2xl font-bold mb-4 text-blue-400">Full Stack Development</h1>
                <div className="flex flex-wrap gap-3">
                    {skills["Full Stack Development"].map((tech, i) => (
                        <span
                            key={i}
                            className="rounded-full px-4 py-2 bg-blue-500/20 text-blue-400 text-sm font-medium hover:bg-blue-500/30 hover:shadow-[0_2px_0px_rgba(59,130,246,0.4)] hover:-translate-y-1 transition-all cursor-pointer"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            <div className="rounded-2xl p-5 border border-white/10 bg-gradient-to-b from-slate-900/30 to-slate-800/30 shadow-lg hover:shadow-[4px_4px_0px] hover:shadow-blue-500/40 transition-all duration-300 cursor-pointer">
                <h1 className="text-2xl font-bold mb-4 text-blue-400">Computer Languages</h1>
                <div className="flex flex-wrap gap-3">
                    {skills["Computer Languages"].map((lang, i) => (
                        <span
                            key={i}
                            className="rounded-full px-4 py-2 bg-green-500/20 text-green-400 text-sm font-medium hover:bg-green-500/30 hover:shadow-[0_2px_0px_rgba(34,197,94,0.4)] hover:-translate-y-1 transition-all cursor-pointer"
                        >
                            {lang}
                        </span>
                    ))}
                </div>
            </div>

            <div className="rounded-2xl p-5 border border-white/10 bg-gradient-to-b from-slate-900/30 to-slate-800/30 shadow-lg hover:shadow-[4px_4px_0px] hover:shadow-blue-500/40 transition-all duration-300 cursor-pointer">
                <h1 className="text-2xl font-bold mb-4 text-blue-400">Known Tools</h1>
                <div className="flex flex-wrap gap-3">
                    {skills["Known Tools"].map((tool, i) => (
                        <span
                            key={i}
                            className="rounded-full px-4 py-2 bg-yellow-500/20 text-yellow-400 text-sm font-medium hover:bg-yellow-500/30 hover:shadow-[0_2px_8px_rgba(234,179,8,0.4)] hover:-translate-y-1 transition-all cursor-pointer"
                        >
                            {tool}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
