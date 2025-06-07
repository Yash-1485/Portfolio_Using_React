import { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";
import emailjs from "emailjs-com";

const Contact = () => {
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        message:""
    });

    const handleForm=(e)=>{
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID,import.meta.env.VITE_TEMPLATE_ID,e.target,import.meta.env.VITE_PUBLIC_KEY)
        .then(()=>{
            alert("Message Sent Successfully!");
            setFormData({name:"",email:"",message:""});
        })
        .catch(()=>{alert("WOOPS! Something Went Wrong!! Please Try Again 😊");});

    }

  return (
    <section id="contact" className="min-h-screen flex justify-center items-center py-20">
        <RevealOnScroll>
            <div className="w-80 md:w-150 mx-auto px-4 flex flex-col justify-center items-center">
                <h1 className="text-3xl md:text-4xl mb-6 font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Get in Touch</h1>
                <form onSubmit={(e)=>{handleForm(e)}} className="w-full space-y-4">
                    <div className="relative">
                        <input type="text" name="name" id="name" placeholder="Name..." className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/10" required value={formData.name} onChange={(e)=>{setFormData({...formData,name:e.target.value})}}/>
                    </div>
                    <div className="relative">
                        <input type="email" name="email" id="email" placeholder="Email..." className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/10" required value={formData.email} onChange={(e)=>{setFormData({...formData,email:e.target.value})}}/>
                    </div>
                    <div className="relative">
                        <textarea name="message" id="message" rows="5" placeholder="Your Message..." className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/10" required value={formData.message} onChange={(e)=>{setFormData({...formData,message:e.target.value})}}></textarea>
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-500 font-medium px-6 py-3 rounded relative overflow-hidden hover:-translate-y-0.5 transition-all duration-200 relative hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] hover:bg-blue-600 cursor-pointer">Send Message</button>
                </form>
            </div>
        </RevealOnScroll>
    </section>
  )
}

export default Contact