const MobileMenu = ({menuOpen,setMenuOpen}) => {
    
  return (
    <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] flex justify-center items-center flex-col transition-all duration-200 ease-in-out z-40 
        ${
            menuOpen
            ?"h-screen opacity-100 pointer-events-auto"
            :"h-0 opacity-0 pointer-events-none"
        }`}>

        <button type="button" className="absolute top-4 right-7 text-3xl text-white cursor-pointer focus:outline-none" onClick={()=>{setMenuOpen(false)}} aria-label="Close Menu">
            &times;
        </button>

        <a href="#home" className={`text-gray-300 hover:text-white font-semibold text-2xl my-4 transform transition-all duration-200 ${menuOpen?"opacity-100 transform-y-0":"opacity-0 transform-y-5"}`} onClick={()=>{setMenuOpen(false)}}>Home</a>
        <a href="#project" className={`text-gray-300 hover:text-white font-semibold text-2xl my-4 transform transition-all duration-200 ${menuOpen?"opacity-100 transform-y-0":"opacity-0 transform-y-5"}`} onClick={()=>{setMenuOpen(false)}}>Project</a>
        <a href="#about" className={`text-gray-300 hover:text-white font-semibold text-2xl my-4 transform transition-all duration-200 ${menuOpen?"opacity-100 transform-y-0":"opacity-0 transform-y-5"}`} onClick={()=>{setMenuOpen(false)}}>About</a>
        <a href="#contact" className={`text-gray-300 hover:text-white font-semibold text-2xl my-4 transform transition-all duration-200 ${menuOpen?"opacity-100 transform-y-0":"opacity-0 transform-y-5"}`} onClick={()=>{setMenuOpen(false)}}>Contact</a>
    </div>
  )
}

export default MobileMenu
