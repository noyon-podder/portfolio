import { useState, useEffect } from "react";
import { FaLink, FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const Portfolio = () => {
  // State to store project data and filtered projects
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  // State to store the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Load project data from projects.json
  useEffect(() => {
    fetch("http://localhost:5000/api/project")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data.data);
        setFilteredProjects(data.data);
      })
      .catch((error) => console.error("Error loading project data:", error));
  }, []);

  // Function to handle category filter selection
  const handleFilterClick = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(
        (project) => project.category === category
      );
      setFilteredProjects(filtered);
    }
  };

  return (
    <section className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      {/* Filter buttons */}
      <ul className="filter-list">
        {["All", "Single Page", "Web Application", "Admin Portal"].map(
          (category) => (
            <li className="filter-item" key={category}>
              <button
                className={category === selectedCategory ? "active" : ""}
                onClick={() => handleFilterClick(category)}
                data-filter-btn
              >
                {category}
              </button>
            </li>
          )
        )}
      </ul>

      {/* Portfolio items */}
      <section className="projects">
        <ul className="project-list">
          {filteredProjects.map((project) => (
            <li
              className="project-item active"
              data-filter-item
              data-category={project.category}
              key={project._id}
            >
              <Link to={`/portfolio/${project._id}`}>
                {/* <figure className="project-img"> */}
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <span className="flex items-center justify-center bg-gray-700 w-12 h-12 rounded-[10px]">
                      <FaRegEye />
                    </span>
                    {/* <Link
                      to={project?.liveURL}
                      className="flex items-center justify-center bg-gray-700 w-12 h-12 rounded-[10px]"
                    >
                      <FaLink />
                    </Link> */}
                  </div>
                  <img
                    src={project.imageLink}
                    alt={project.title}
                    loading="lazy"
                  />
                </figure>
                <h2 className="project-title">{project.title}</h2>
                <p className="project-category">{project.category}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Portfolio;
