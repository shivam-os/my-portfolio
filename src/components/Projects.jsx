import profilerProject from "../assets/profiler-project.jpeg";
import nodecmsProject from "../assets/nodecmsProject.jpeg";
import songifyProject from "../assets/songifyProject.jpeg";

const projectData = [
  {
    type: "Full Stack Project",
    img: profilerProject,
    title: "Profiler",
    content:
      "A web app which allows users to manage all the online personalities they follow in one place. Users can add profiles and all the associated links. MongoDB is used as the database and JWT authentication is implemented with the help of passport. React Hook Form is used for getting the user inputs. Validators are added on both frontend and backend to get proper data from users.",
    github: "https://github.com",
    live: "https://live.com",
    packages: ["React", "Chakra UI", "Express", "MongoDB", "React-Hook-Form", "Yup"],
  },
  {
    type: "Backend Project",
    img: nodecmsProject,
    title: "NodeBlog API",
    content:
      "This API acts as a content management systsm (CMS) for a blog. To handle the blog mangement, there are 3 types of users- Author, Editor & Admin. The admin can add new users and assign role to them. Public endpoints are also provided to access the blog posts. Documentation for this API is done using Postman (It's screenshot can be seen here). ",
    github: "https://github.com/shivam-os/node-cms",
    live: "https://bit.ly/node-cms-api",
    packages: ["Express", "MySQL", "Passport", "Postman", "JWT", "Express-validator"],
  },
  {
    type: "Backend Project",
    img: songifyProject,
    title: "Songify API",
    content:
      "A spotify like API which allows users to creatae and manage playlists by adding songs to them. The songs are provided via an external unofficial JIO Saavn API. Axios is used to handle the communication with the external API. A trending list of songs is provided to choose from but users also have option to search songs by their name. Documentation for this API is done using Swagger (It's screenshot can be seen here).",
    github: "https://github.com/shivam-os/songify",
    live: "https://songify-8fvl.onrender.com/api/docs/",
    packages: ["Express", "MySQL", "Passport", "Axios", "Swagger", "Express-validator"],
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
    <div className="container d-section" id="projects">
      <div className="">
        <div className="second-font s-title">03. Some Things I've Built</div>
        {projectData.map((item, index) => (
          <ProjectCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
