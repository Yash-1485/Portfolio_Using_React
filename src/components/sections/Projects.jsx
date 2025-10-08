import RevealOnScroll from "../RevealOnScroll";

const projects = [
  {
    id: 1,
    title: "Connectify",
    desc: "A modern social media platform where users can connect, share posts, follow others, and engage through likes, comments, and real-time interactions.",
    techStack: ["NextJS", "Prisma", "PostgresDB"],
    link: "https://github.com/Yash-1485/Connectify.git",
    live_project_link: "https://connectify-git-main-yash-a-parekhs-projects.vercel.app"
  },
  {
    id: 2,
    title: "CampusConnect",
    desc: "A campus community platform for students to discover and share resources such as PGs, hostels, mess, tiffin, and tutors.",
    techStack: ["React", "Django REST Framework", "Python", "SQLite"],
    link: "https://github.com/Yash-1485/CampusConnect.git",
    live_project_link: ""
  },
  {
    id: 3,
    title: "StackChat",
    desc: "A modern chat and social platform where users can send and recieve friend request and chat and video call each other with secured authentication.",
    techStack: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS"],
    link: "https://github.com/Yash-1485/StackChat_MERN.git",
    live_project_link: "https://stackchat-mern.onrender.com/"
  },
  {
    id: 4,
    title: "AI Image Generator",
    desc: "An image generation web app with easy downloading, just propmt -> select model -> select aspect ratio -> Generate 😊 ",
    techStack: ["HTML","CSS","JavaScript","Hugging Face API"],
    link: "https://github.com/Yash-1485/Web-Development/tree/main/Frontend_Projects/AI_Image_Generator",
    live_project_link: "https://drishyamai.vercel.app/"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex justify-center items-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-4xl mb-6 font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Featured Projects</h1>

          <div className="border border-xl border-white/10 rounded-xl p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            {
              projects?.map((project, idx) => (
                <div className="rounded-2xl p-5 border border-white/10 bg-gradient-to-b from-slate-900/30 to-slate-800/30 shadow-lg hover:shadow-[4px_4px_0px] hover:shadow-blue-500/40 transition-all duration-200 cursor-pointer" key={idx}>
                  <h3 className='text-xl font-bold mb-2'>{project.title}</h3>
                  <p className='text-gray-400 text-sm mb-4'>
                    {project.desc}
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    {
                      project.techStack.map((tech, key) => {
                        return <span key={key} className="rounded-full px-4 py-2 bg-blue-500/20 text-blue-400 text-sm font-medium hover:bg-blue-500/30 hover:shadow-[0_2px_0px_rgba(59,130,246,0.4)] hover:-translate-y-1 transition-all cursor-pointer">{tech}</span>
                      })
                    }
                  </div>
                  <div className="my-6 flex justify-between items-center">
                    <a target='_blank' href={project.link} className="text-blue-400 hover:text-blue-300 hover:underline transition-color duration-200">View Project 🔗</a>

                    {
                      project.live_project_link ? (
                        <a target='_blank' href={project.live_project_link} className="text-blue-400 hover:text-blue-300 hover:underline transition-color duration-200">Live Project ➡️</a>
                      ) : (
                        null
                      )
                    }
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}

export default Projects
