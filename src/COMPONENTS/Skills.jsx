import React from 'react';
import './style.css';

const Skills = () => {
  const skillsData = {
    "Front-End": [
      { name: "HTML", logo: "https://cdn-icons-png.flaticon.com/512/732/732212.png" },
      { name: "CSS", logo: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
      { name: "JavaScript", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
      { name: "React", logo: "https://cdn-icons-png.flaticon.com/512/919/919851.png" },
      {name: "Bootstrap", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png" },
    ],
    "Tools and Software": [
      { name: "Git", logo: "https://cdn-icons-png.flaticon.com/512/25/25231.png" },
      { name: "VS Code", logo: "https://cdn-icons-png.flaticon.com/512/906/906324.png" },
      { name: "Microsoft Word", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968558.png" },
    ],
    "Physics Research": [
      { name: "Specialization in Electronics", logo: "https://cdn-icons-png.flaticon.com/512/2209/2209000.png" },
      { name: "Research in Bandgap Energy of Semiconductors", logo: "https://cdn-icons-png.flaticon.com/512/2980/2980548.png" },
      { name: "Study of Cirrus Clouds", logo: "https://cdn-icons-png.flaticon.com/512/2994/2994894.png" },
    ],
    "Writing and Content Creation": [
      { name: "Creative Writing", logo: "https://example.com/logo-creative-writing.png" },
      { name: "Published Book", logo: "https://example.com/logo-published-book.png" },
      { name: "Social Media Content Creation", logo: "https://example.com/logo-social-media.png" },
    ],
    "Soft Skills": [
      { name: "Teamwork", logo: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png" },
      { name: "Communication", logo: "https://cdn-icons-png.flaticon.com/512/1237/1237946.png" },
      { name: "Problem Solving", logo: "https://cdn-icons-png.flaticon.com/512/2936/2936770.png" },
      { name: "Creative Thinking", logo: "https://cdn-icons-png.flaticon.com/512/1041/1041928.png" },
      { name: "Adaptability", logo: "https://cdn-icons-png.flaticon.com/512/1256/1256655.png" },
      { name: "Time Management", logo: "https://cdn-icons-png.flaticon.com/512/3418/3418128.png" }
    ],
    
  };

  return (
    <div class="skills-page">
      <h1 class="page-title">PROFICIENCY PROFILE</h1>
      <h2 class="page-subtitle">Science Syncs with Software Skills</h2>
      {Object.entries(skillsData).map(([section, skills]) => (
        <div key={section} className="skills-section">
          <h2 className="section-title">{section}</h2>
          <div className="skills-cards">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
                <p className="skill-name">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
