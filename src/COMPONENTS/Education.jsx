import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap, FaSchool, FaLaptopCode } from "react-icons/fa";
import emblem1 from '../images/emblem1'
import emblem2 from '../images/emblem2'
import emblem3 from '../images/emblem3'
import emblem4 from '../images/emblem4'
import emblem5 from '../images/emblem5'

const Education = () => {
  const educationData = [
    {
      key: 1,
      date: "2024 - Present",
      institution: "Networkz Systems, Trivandrum",
      emblem: "emblem5",
      degree: "Python Full Stack Development",
      year: "2024 - Present",
      percentage: "Ongoing",
      summary: "Gaining expertise in frontend and backend development with a focus on modern technologies.",
      icon: <FaLaptopCode />,
    },
    {
      key: 2,
      date: "2022 - 2024",
      institution: "St. Xavier's College, Thumba, Trivandrum",
      emblem: "https://via.placeholder.com/50",
      degree: "Postgraduate in Physics",
      year: "2022 - 2024",
      percentage: "85%",
      summary: "Expertise in Electronics, complemented by cutting-edge research in Material Science .",
      icon: <FaGraduationCap />,
    },
    {
      key: 3,
      date: "2019 - 2022",
      institution: "All Saints' College, Trivandrum",
      emblem: "https://via.placeholder.com/50",
      degree: "Bachelor of Science in Physics",
      year: "2016 - 2020",
      percentage: "88%",
      summary: "Explored advanced physics topics and completed a project on Atmospheric Physics.",
      icon: <FaGraduationCap />,
    },
    {
      key: 4,
      date: "2015 - 2017",
      institution: "Carmel Girls HSS, Vazhuthacaud, Trivandrum",
      emblem: "https://via.placeholder.com/50",
      degree: "12th Grade (Bio-Maths)",
      year: "2015 - 2017",
      percentage: "92%",
      summary: "Excelled in physics, mathematics, and chemistry.",
      icon: <FaSchool />,
    },
    {
      key: 4,
      date: "2014 - 2015",
      institution: "St. Roch's HS, Thope, Trivandrum",
      emblem: "https://via.placeholder.com/50",
      degree: "10th Grade",
      year: "2014 - 2015",
      percentage: "96%",
      summary: "Achieved top grades and participated in science exhibitions.",
      icon: <FaSchool />,
    },
  ];

  return (
    <div class="education-container">
      <h1 class="education-title">ACADEMIC STORY</h1>
        <h3 class="education-subtitle">Trials, Triumphs and Takeaways</h3>
        
            <VerticalTimeline>
              {educationData.map((edu) => (
               

                <VerticalTimelineElement
                  key={edu.key}
                  date={edu.date} 
                  iconStyle={{ background: "rgb(14, 14, 127)", color: "#fff" }}
                  icon={edu.icon} >
                
                  <h1 class="education-degree">{edu.degree}</h1>
                  <div class="education-header">
                    <img src={emblem1} alt={`${edu.institution} emblem`} class="education-emblem"/>
                    <h1 class="education-institution">{edu.institution}</h1>
                  </div>
                  
                  <h3><strong>Year:</strong> {edu.year}</h3>
                  <h3><strong>Percentage:</strong> {edu.percentage}</h3>
                  <h3>{edu.summary}</h3>
                </VerticalTimelineElement>
                
              ))}
            </VerticalTimeline>
        
    </div>
  );
};

export default Education;