import React from "react";

const AboutDeveloper: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-6 text-center">About Me</h1>
      <div className="bg-white rounded-lg shadow-md p-8">
        <p className="text-lg mb-4">
          Hi, I’m <span className="font-semibold">Moeed ul Hassan</span>, a full-stack developer specializing in <span className="font-semibold">React</span>, <span className="font-semibold">TypeScript</span>, and <span className="font-semibold">Python</span>. I build scalable web applications and tools with a focus on clean architecture, maintainable code, and real-world impact.
        </p>
        <p className="text-lg mb-4">
          I have experience creating industry-level projects including SaaS platforms, developer tools, and internal systems, with attention to performance, reliability, and usability. I enjoy solving complex problems, designing robust systems, and contributing to open source communities.
        </p>
        <p className="text-lg">
          Currently, I’m focused on backend mastery, SaaS product development, and building innovative solutions that combine automation, AI, and web engineering best practices.
        </p>
      </div>
    </div>
  );
};

export default AboutDeveloper;
