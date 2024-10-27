import React from "react";
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from "./TimelineItem";
import SkillItem from "./SkillItem";

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Kushtia Polytechnic Institute, Kushtia"
            date="2018 — 2023"
            description="Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
          />
          <TimelineItem
            title="Kushtia Zilla School, Kushtia"
            date="2000 — 2017 "
            description="Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis."
          />
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Full Stack Developer"
            date="2023 — Present"
            description="Currently working as a Full Stack Developer, handling both front-end and back-end tasks. Skilled in the MERN stack, I build complete web applications, from responsive UI to robust server-side functionality. Collaborate with cross-functional teams to deliver efficient, high-quality solutions that meet user and business needs"
          />
          <TimelineItem
            title="Front End Developer"
            date="2022 — 2023"
            description="Worked as a Front-End Developer focused on building responsive, user-friendly interfaces. Utilized modern frameworks like React to deliver clean, optimized designs for functionality, speed, and compatibility across devices. Collaborated with designers and back-end teams to ensure cohesive user experiences and maintained high standards in code quality and performance."
          />
          {/* <TimelineItem
            title="Web designer"
            date="2020 — 2022"
            description="Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
          /> */}
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">Developer Skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="Front-End Development" value={90} />
          <SkillItem title="Back-End Development" value={85} />
          <SkillItem title="Full-Stack Development" value={80} />
          <SkillItem title="Database Management" value={80} />
          <SkillItem title="Version Control" value={95} />
          <SkillItem title="API Integration" value={87} />
        </ul>
      </div>
    </section>
  );
};

export default Resume;
