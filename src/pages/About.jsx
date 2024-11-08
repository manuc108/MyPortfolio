import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { CTA } from "../components";
import { experiences, skills, education } from "../constants";  

import "react-vertical-timeline-component/style.min.css";

// Education Component
const Education = ({ educationItem }) => (
  <VerticalTimelineElement
    date={educationItem.date}
    iconStyle={{ background: educationItem.iconBg }}
    // icon={
    //   <div className="flex justify-center items-center w-full h-full">
    //     <img src={educationItem.icon} alt={educationItem.institution} className="w-[60%] h-[60%] object-contain" />
    //   </div>
    // }
    contentStyle={{
      borderBottom: "8px solid",
      borderBottomColor: educationItem.iconBg,
      boxShadow: "none",
    }}
  >
    <h3 className="text-xl font-semibold">{educationItem.degree}</h3>
    <p className="text-base font-medium">{educationItem.institution}</p>

    <ul className="my-5 list-disc ml-5">
      {educationItem.points.map((point, index) => (
        <li key={index} className="text-sm text-black-500/50">{point}</li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

// Skill Component
const Skill = ({ skill }) => (
  <div className="w-20 h-20">
    <div className="btn-back rounded-xl" />
    <div className="btn-front rounded-xl flex justify-center items-center">
      <img src={skill.imageUrl} alt={skill.name} className="w-1/2 h-1/2 object-contain" />
    </div>
  </div>
);

// Experience Component
const Experience = ({ experience }) => (
  <VerticalTimelineElement
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    // icon={
    //   <div className="flex justify-center items-center w-full h-full">
    //     <img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain" />
    //   </div>
    // }
    contentStyle={{
      borderBottom: "8px solid",
      borderBottomColor: experience.iconBg,
      boxShadow: "none",
    }}
  >
    <h3 className="text-xl font-semibold">{experience.title}</h3>
    <p className="text-base font-medium">{experience.company_name}</p>

    <ul className="my-5 list-disc ml-5">
      {experience.points.map((point, index) => (
        <li key={index} className="text-sm text-black-500/50">{point}</li>
      ))}
    </ul>
  </VerticalTimelineElement>
);


const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm <span className="blue-gradient_text font-semibold">{' Manu'}</span> 👋
      </h1>

      <p className="mt-5 text-slate-500">
        Software Engineer based in India, specializing in technical education through hands-on learning and building applications.
      </p>

      {/* Education Section */}
      <div className="py-16">
        <h3 className="subhead-text">Education</h3>
        <p className="mt-5 text-slate-500">
          Here's a summary of my formal education, where I honed my skills and knowledge to start my career:
        </p>

        <VerticalTimeline className="mt-12">
          {education.map((eduItem) => (
            <Education key={eduItem.institution} educationItem={eduItem} />
          ))}
        </VerticalTimeline>
      </div>

      {/* Skills Section */}
      <div className="py-10">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <Skill key={skill.name} skill={skill} />
          ))}
        </div>
      </div>

      {/* Work Experience Section */}
      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <p className="mt-5 text-slate-500">
          I've worked on developing a company's website, leveling up my skills, and teaming up with smart people. Here's the rundown:
        </p>

        <VerticalTimeline className="mt-12">
          {experiences.map((experience) => (
            <Experience key={experience.company_name} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>

      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default About;
