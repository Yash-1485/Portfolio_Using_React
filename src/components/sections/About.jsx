import RevealOnScroll from "../RevealOnScroll";

const About = () => {

    const skills={
        "Frontend":["ReactJs","AngularJs","TypeScript"],
        "Backend":["Node.js","Express.js","MongoDB"],
        "Computer Languages":["C","Java","Python"],
    }

  return (
    <section id="about" className="min-h-screen flex justify-center items-center py-20">
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4 flex flex-col justify-center items-center">
            <h1 className="text-3xl md:text-4xl mb-6 font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">About Me</h1>

            <div className="border border-xl border-white/10 rounded-xl flex flex-col justify-center items-center p-4">
                <p className="text-center mb-6 text-gray-300">
                    Passionate about coding and web development, I'm currently pursuing Computer Engineering and love turning ideas into real applications.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {
                        Object.entries(skills).map(([skill,data],idx)=>{
                            return <div className="rounded-xl p-2 border border-white/10 p-2" key={idx}>
                                        <h1 className="text-xl font-bold mb-4">{skill}</h1>
                                        <div className="flex flex-wrap gap-2">
                                            {
                                                data.map((tech,key)=>{
                                                    return <span key={key} className="rounded-full px-3 py-2 overflow-hidden text-blue-500 text-sm bg-blue-500/20 hover:bg-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.4)] hover:-translate-y-1 transition-all cursor-pointer">{tech}</span>
                                                })
                                            }
                                        </div>
                                    </div>
                        })
                    }
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 w-full">
                <div className="p-6 border border-white/10 rounded-xl hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-4">
                        <li>
                            <strong>B.E in Computer Engineering</strong> - LJ University (2023 - 2027)
                        </li>
                        <li>
                            <strong>Relevent Coursework:</strong> Data Structures, Database Management System, Web-Development... 
                        </li>
                    </ul>
                </div>
                <div className="p-6 border border-white/10 rounded-xl hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">📃 Certifications</h3>
                    <div className="space-y-4 text-gray-300">
                        <div>
                            <a href="https://drive.google.com/file/d/1lViHaM1o5MoKUJ3mWDQOqtduGkS5elDA/view?usp=drive_link" target="_blank" className="font-semibold hover:underline transition cursor-pointer">LJ Innovation Village - LJ University (2024)</a>
                        </div>
                        <div>
                            <a href="https://drive.google.com/file/d/1cDKrFlisjlMh2Z_nCDDT7cc54azHhk3c/view?usp=drive_link" target="_blank" className="font-semibold hover:underline transition cursor-pointer">Hackthon - Ahmedabad University (2025)</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full border border-xl border-white/10 rounded-xl flex flex-col justify-center items-center p-4 mt-4">
                <div className="flex flex-wrap flex-row gap-3 text-xl text-gray-100 items-center justify-center">
                    <strong>Connect With Me: </strong>
                    <div className="links flex gap-3">
                        <span><a href="https://www.linkedin.com/in/yash-parekh-bb5404330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="flex items-center justify-center text-2xl hover:text-gray-300 border border-white/0 hover:border-white transition-all rounded-full block w-10 h-10 px-2 py-2"><i className="fa-brands fa-linkedin"></i></a></span>
                        <span><a href="https://github.com/yash-1485" target="_blank" className="flex items-center justify-center text-2xl hover:text-gray-300 border border-white/0 hover:border-white transition-all rounded-full block w-10 h-10 px-2 py-2"><i className="fa-brands fa-github"></i></a></span>
                        <span><a href="https://www.instagram.com/yashparekh1485" target="_blank" className="flex items-center justify-center text-2xl hover:text-gray-300 border border-white/0 hover:border-white transition-all rounded-full block w-10 h-10 px-2 py-2"><i className="fa-brands fa-instagram"></i></a></span>
                    </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>
    )
}

export default About
