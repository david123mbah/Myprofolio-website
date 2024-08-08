import React from 'react'
import './Home.css';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
      <motion.h1
            initial={{x: "1rem", opacity: 0}}
            animate={{x:0 , opacity: 1}}
            transition= {{
              duration: 2,
              type: "spring",
              repeat: Infinity,
              repeatDelay: 20,
            }}
            > 
            
            <h3>Hello, I'm{" "}</h3>
            <TypeAnimation 
            sequence={[
              "david",
              1000,
              "UI/UX designer",
              1000,
              "Software Engineer",
              1000,
              "Web Developer",
               1000,
               "Mobile Developer",
               1000,
            ]}
             speed={50}
             repeat={Infinity}
            
      />
      <p>Software Engineer based in cameroon, 
        specializing in mobile App and web development through hands-on learning and building applicaions,web projects.</p>
      </motion.h1>
      <div className="btn-box">
        <a href="https://wa.me/652892462?text=I%20would%20like%20to%20hire%20you" class="button">Hire Me</a>
        <a href="https://wa.me/652892462?text=I%20would%20like%20to%20hire%20you" class="button">  Let's Talk</a>

        </div>
      </div>
      <div className="home-sci">
        <a href='https://www.facebook.com/652892462" class="button' > <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999c0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891c1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z" fill="currentColor"/></svg></a>
        <a href='https://wa.me/652892462?text=I%20would%20like%20to%20hire%20you' > <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/></svg></a>
        <a href='https://github.com/david123mbah'> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg> </a>
        <a href='https://wa.me/652892462?text=I%20would%20like%20to%20hire%20you'> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"/></svg></a>
  
        </div>
       
        <div>
       {/* right side */}
       <div className="flexCenter hero-right">
          <motion.div className="image-container"
             initial={{x: "3rem", opacity: 0}}
             animate={{x:0 , opacity: 1}}
             transition= {{
               duration: 2,
               type: "spring",
               repeat: Infinity,
               repeatDelay: 20,
             }}
          >
            <img src="/mmmmmm.jpg" alt="home" 
            />
          </motion.div>
          </div>
          </div>
    </section>
  )
}

export default Home ;

