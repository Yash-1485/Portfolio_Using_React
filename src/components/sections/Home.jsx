const Home = () => {
  return (
    <section id="home" className="min-h-screen flex justify-center items-center relative">
        <div className="text-center px-4 z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text">Hellow, I'm Yash Parekh</h1>
            
            <p className="text-gray-300 mb-8 md:text-lg text-sm max-w-lg mx-auto">
                I'm currently studying Computer Engineering and have hands-on experience in programming and web development. I'm passionate about learning, applying new technologies, and working collaboratively to build impactful solutions.
            </p>

            <div className="flex justify-center space-x-4">
                <a href="#project" className="text-md font-medium px-6 py-3 bg-blue-500 text-white rounded overflow-hidden hover:-translate-y-0.5 transition relative hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">View Projects</a>
                <a href="#contact" className="text-blue-500 font-medium border border-blue-500/50 px-6 py-3 rounded overflow-hidden hover:-translate-y-0.5 transition-all duration-200 relative hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] hover:bg-blue-500/10">Contact Me</a>
            </div>
        </div>
    </section>
  )
}

export default Home
