import React, { useState, useTransition } from 'react';
import TabButton from './TabButton';
import './index.css'

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Python</li>
          <li>Java</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>MySQL</li>
          <li>C++</li>
          <li>Flutter , firebase</li>
          
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul>
          <li>ICT University Cameroon</li>
          <li>Corsela Certifications</li>
        </ul>
      ),
    },
    {
      title: "Experience",
      id: "experience",
      content: (
        <ul>
          <li>Built numerous hands-on projects</li>
          <li>Contributed to open source projects</li>
          <li>Participated in Hackathon competitions</li>
          <li>Worked as an intern at VTC International Cameroon</li>
        </ul>
      ),
    },
  ];

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="home">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sn:py-16">
        <img src="/app.jpg" alt="" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="test-base lg:text-lg">
            My name is David, and I am a versatile professional with a diverse skill set. I have experience working as a UI/UX designer, software engineer, web developer, and mobile developer. With a strong background in these areas, I am able to approach projects with a well-rounded perspective and deliver high-quality results. Based in Cameroon, I have honed my skills through hands-on learning and building various applications and web projects. I am passionate about staying up-to-date with the latest technologies and techniques in my fields, and I constantly strive to enhance my knowledge and capabilities.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton selectTab={() => handleTabChange("skills")} active={tab == "skills"}>Skills</TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab == "education"}>Education</TabButton>
            <TabButton selectTab={() => handleTabChange("experience")} active={tab == "experience"}>Experience</TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default About;



















