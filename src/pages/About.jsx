import React, { useState, useTransition } from 'react';
import './index.css';
import TabButton from './TabButton';

const About = () => {

  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="home">
      <div className=" md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sn:py-16 ">
      <img src="./public\app.jpg" alt="" width={500} height={500}
            />
      <div>
        {/* right side */}
      <h2 className="text-4xl font-bold text-white mb-4  ">AboutMe</h2>
      <p className="test-base lg:text-lg">
            My name is david, and I am a versatile 
            professional with a diverse skill set. 
            I have experience working as a UI/UX designer, software engineer, web developer, and mobile developer. With a strong background in these areas, I am able to approach projects with a well-rounded 
            perspective and deliver high-quality results.
            Based in Cameroon, I have honed my skills through hands-on learning and building various applications and web projects.
             I am passionate about staying up-to-date with the 
             latest technologies and techniques in my fields,
              and I constantly strive to enhance my knowledge and capabilities.
      </p>
      <div className="flex flex-row mt-8">
        <TabButton selectTab={() => handleTabChange("Skills")}
        active={tab == "skills"} /> 
        <span className="mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500">
          Skills
          </span>
        <span className="">
          Education
          </span>
        <span className="">
          Experience
          </span>

      </div>
      </div>
      </div>
    </section>
  );
};

export default About;



















