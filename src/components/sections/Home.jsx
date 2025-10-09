import RevealOnScroll from "../RevealOnScroll";
import cv from "../../assets/CV_Full_Stack_Developer.pdf";

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex justify-center items-center relative">
      <RevealOnScroll>
        <div className="text-center px-4 z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text">Hellow, I'm Yash Parekh</h1>

          <p className="text-gray-300 mb-8 md:text-lg text-sm max-w-lg mx-auto">
            I'm currently studying Computer Engineering and have hands-on experience in programming and web development. I'm passionate about learning, applying new technologies, and working collaboratively to build impactful solutions.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
            <a href="#projects" className="w-40 text-blue-500 font-medium border border-blue-500/50 px-6 py-3 rounded hover:-translate-y-0.5 transition-all duration-200 hover:shadow-[3px_3px_0px_rgba(59,130,246,0.4)] hover:bg-blue-500/10">
              View Projects
            </a>

            <a href="#contact" className="w-40 text-blue-500 font-medium border border-blue-500/50 px-6 py-3 rounded hover:-translate-y-0.5 transition-all duration-200 hover:shadow-[3px_3px_0px_rgba(59,130,246,0.4)] hover:bg-blue-500/10">
              Contact Me
            </a>

            <a href={cv} download="Yash_Parekh_CV.pdf" className="w-40 bg-blue-600 text-white font-medium px-6 py-3 rounded border border-blue-600 hover:bg-blue-500/90 hover:shadow-[3px_3px_0px_rgba(59,130,246,0.4)] transition-all duration-200">
              Download CV
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}

export default Home
