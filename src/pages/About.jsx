import React from 'react';
import './index.css';

const AboutMe = () => {
  return (
    <section className="home">
      <div className="about-container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="about-title text-4xl font-bold text-center text-gray-800 mb-8 animate-fadeInUp">
          About Me
        </h2>
        <div className="about-content grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="about-image">
            <img
              src="./public\WhatsApp Image 2024-06-17 at 16.29.54_50b48a10.jpg"
              alt="About Me"
              className="rounded-lg shadow-lg animate-fadeInLeft"
            />
          </div>
          <div className="about-text">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 animate-fadeInUp">
              Software Engineer
            </h3>
            <p className="text-gray-600 mb-4 animate-fadeInUp">
              As a software engineer, I have had the opportunity to work on a wide range of projects, from building web applications to developing mobile apps and backend systems. I have a strong foundation in computer science principles and a passion for problem-solving and innovation.
            </p>
            <p className="text-gray-600 mb-4 animate-fadeInUp">
              Throughout my career, I have developed a diverse skillset, including expertise in programming languages like JavaScript, Python, and Java, as well as experience with various frameworks and libraries such as React, Node.js, and Django. I am also comfortable with database management, DevOps practices, and agile development methodologies.
            </p>
            <p className="text-gray-600 mb-4 animate-fadeInUp">
              One of the things I enjoy most about my work is the constant learning and growth opportunities. I am always eager to explore new technologies and stay up-to-date with the latest industry trends and best practices. I believe in continuous improvement and strive to deliver high-quality, scalable, and maintainable software solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;