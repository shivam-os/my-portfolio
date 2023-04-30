const projectData = [
  {
    type: "Frontend Project",
    img: "https://images5.alphacoders.com/810/thumbbig-810547.webp",
    title: "Profiler",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ipsum. Amet consequuntur, ab non aliquam ea voluptate labore earum ut omnis aspernatur alias porro perferendis, quaerat hic similique explicabo soluta.",
    github: "https://github.com",
    live: "https://live.com",
    packages: ["React", "Chakra UI", "Express", "MongoDB", "Passport"],
  },
  {
    type: "Full Stack Project",
    img: "https://images5.alphacoders.com/810/thumbbig-810547.webp",
    title: "Profiler",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ipsum. Amet consequuntur, ab non aliquam ea voluptate labore earum ut omnis aspernatur alias porro perferendis, quaerat hic similique explicabo soluta.",
    packages: ["React", "Chakra UI", "Express", "MongoDB", "Passport"],
  },
];

function ProjectCard(props) {
  const { item } = props;
  return (
    <div className="project-card">
      <div className="project-img">
        <img className="img-fluid rounded" src={item.img} alt={item.title} />
      </div>
      <div className="project-content-box">
        <p className="second-font project-subtitle">{item.type}</p>
        <p className="project-title">{item.title}</p>
        <p>{item.content}</p>
        {
          <div className="project-links">
            <a href={item.github}>GitHub</a> <a href={item.live}>Live</a>
          </div>
        }
        <div>
          {item.packages.map((item, index) => (
            <span key={index} className="second-font project-tags">
              {item}{" "}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="container d-section" id="about">
      <div className="">
        <div className="second-font s-title">03. Some Things I've Built</div>
        {projectData.map((item, index) => (
          <ProjectCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
