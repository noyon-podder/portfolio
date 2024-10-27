/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react";
import Testimonial from "./Testimonial";
import Service from "./Service";

const servicesData = [
  {
    icon: "/images/icon-design.svg",
    title: "Building  Web Applications",
    description:
      "Creating responsive, dynamic web applications using the MERN stack  to provide seamless and efficient user experiences",
  },
  {
    icon: "/images/icon-dev.svg",
    title: "Designing & Managing Databases",
    description:
      "Working with MongoDB to design flexible, scalable databases that support complex data structures",
  },
  {
    icon: "/images/icon-app.svg",
    title: "API Development & Integration",
    description:
      "Building RESTful APIs with Express and Node.js to enable smooth data communication",
  },
  {
    icon: "/images/icon-photo.svg",
    title: "Optimizing for Performance",
    description:
      "Focusing on performance optimization and implementing best practices to ensure fast load times and high scalability.",
  },
];

const About = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("testimonials.json")
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(data);
      });
  }, []);
  return (
    <article className="about  active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          Hi, I'm <strong>Noyon Podder</strong>, a dedicated{" "}
          <strong>Full Stack Developer</strong> using MERN with a passion for
          creating dynamic, responsive, and user-friendly web applications. With
          expertise in MongoDB, Express, React, and Node.js.
        </p>

        <p>
          {" "}
          I specialize in building full-stack applications that deliver seamless
          functionality and exceptional performance. Whether it's crafting
          intuitive front-end interfaces or developing robust server-side
          solutions, I’m committed to delivering high-quality code and
          innovative solutions. Explore my projects to see how I bring ideas to
          life through clean, scalable code and modern design." Let me know if
          you’d like any tweaks!
        </p>
      </section>

      {/* <!--
      - service
    --> */}

      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>

        <ul className="service-list">
          {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </ul>
      </section>

      {/* <!--
      - testimonials
    --> */}

      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              avatar={testimonial.avatar}
              testimonial={testimonial.testimonial}
            />
          ))}
        </ul>
      </section>

      {/* <!--
      - clients
    --> */}

      {/* //! client section are comment  */}
      {/* <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>

        <ul className="clients-list has-scrollbar">
          <li className="clients-item">
            <a href="#">
              <img src="images/logo-1-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-2-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-3-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-4-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-5-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-6-color.png" alt="client logo" />
            </a>
          </li>
        </ul>
      </section> */}
    </article>
  );
};

export default About;
