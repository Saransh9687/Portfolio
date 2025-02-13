import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import data from "../assets/data.json";

const Projects = () => {
  return (
    <div id="projects">
      <h2>Projects</h2>
      <section>
        <article>
          <Carousel
          showArrows={false}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          interval={2000}
          infiniteLoop={true}
          autoPlay={true}>{
          data.projects.map(i=>(
            <div key={i.title} className="projectItem">
              <img src={i.imgSrc} alt={i.title} />
              <aside><h3>{i.title}</h3>
              <p>{i.description}</p></aside>
            </div>
          ))
            }</Carousel>
        </article>
      </section>
    </div>
  );
};

export default Projects;
