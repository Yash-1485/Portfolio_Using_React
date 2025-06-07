import RevealOnScroll from "../RevealOnScroll";

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex justify-center items-center py-20">
      <RevealOnScroll>
      <div className="max-w-5xl mx-auto px-4 flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-4xl mb-6 font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Featured Projects</h1>

        <div className="border border-xl border-white/10 rounded-xl p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl p-4 border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all">
            <h3 className='text-xl font-bold mb-2'>E Commerce Management System</h3>
            <p className='text-gray-400 text-sm mb-4'>
              Designed to streamline the buying and selling process contains 3 roles - Admin, Supplier, Customer.
            </p>
            <div className='flex flex-wrap gap-2'>
              {
                ["Java","MySQL"].map((tech,key)=>{
                  return <span key={key} className="rounded-full px-3 py-2 overflow-hidden text-blue-500 text-sm bg-blue-500/20 hover:bg-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] hover:-translate-y-1 transition-all cursor-pointer">{tech}</span>
                })
              }
            </div>
            <div className="my-6 flex justify-between items-center">
              <a target='_blank' href="https://github.com/Yash-1485/E-Commerce-Management-System" className="text-blue-400 hover:text-blue-300 hover:underline transition-color duration-200">View Project ➡️</a>
            </div>
          </div>

          <div className="rounded-xl p-4 border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all">
            <h3 className='text-xl font-bold mb-2'>AI Image Generator</h3>
            <p className='text-gray-400 text-sm mb-4'>
              A web-based tool that lets users generate stunning images using AI by entering simple text prompts.
            </p>
            <div className='flex flex-wrap gap-2'>
              {
                ["HTML","CSS","JavaScript"].map((tech,key)=>{
                  return <span key={key} className="rounded-full px-3 py-2 overflow-hidden text-blue-500 text-sm bg-blue-500/20 hover:bg-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] hover:-translate-y-1 transition-all cursor-pointer">{tech}</span>
                })
              }
            </div>
            <div className="my-6 flex justify-between items-center">
              <a target='_blank' href="https://github.com/Yash-1485/Web-Development/tree/main/Frontend_Projects/AI_Image_Generator" className="text-blue-400 hover:text-blue-300 hover:underline transition-color duration-200">View Project ➡️</a>
            </div>
          </div>
          
          <div className="rounded-xl p-4 border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all">
            <h3 className='text-xl font-bold mb-2'>Urban Style</h3>
            <p className='text-gray-400 text-sm mb-4'>
              An Ecommerce Shopping Website for Fashion Accessories like Footwear, Clothes, Watches and etc.
            </p>
            <div className='flex flex-wrap gap-2'>
              {
                ["HTML","CSS","JavaScript"].map((tech,key)=>{
                  return <span key={key} className="rounded-full px-3 py-2 overflow-hidden text-blue-500 text-sm bg-blue-500/20 hover:bg-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] hover:-translate-y-1 transition-all cursor-pointer">{tech}</span>
                })
              }
            </div>
            <div className="my-6 flex justify-between items-center">
              <a target='_blank' href="https://github.com/Yash-1485/Urban_Style.git" className="text-blue-400 hover:text-blue-300 hover:underline transition-color duration-200">View Project ➡️</a>
            </div>
          </div>
          
          <div className="rounded-xl p-4 border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all">
            <h3 className='text-xl font-bold mb-2'>Chatbot-1.0</h3>
            <p className='text-gray-400 text-sm mb-4'>
              A Python Streamlit based chatbot using Google Gemini API Access.
            </p>
            <div className='flex flex-wrap gap-2'>
              {
                ["Python","Streamlit"].map((tech,key)=>{
                  return <span key={key} className="rounded-full px-3 py-2 overflow-hidden text-blue-500 text-sm bg-blue-500/20 hover:bg-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] hover:-translate-y-1 transition-all cursor-pointer">{tech}</span>
                })
              }
            </div>
            <div className="my-6 flex justify-between items-center">
              <a target='_blank' href="https://github.com/Yash-1485/Python_Gemini_Chatbot_1.0.git" className="text-blue-400 hover:text-blue-300 hover:underline transition-color duration-200">View Project ➡️</a>
            </div>
          </div>


        </div>
      </div>
      </RevealOnScroll>
    </section>
  )
}

export default Projects
