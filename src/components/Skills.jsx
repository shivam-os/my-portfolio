const skills = [
  {
    title: "Programming languages",
    content: "JavaScript, Python, SQL",
  },
  {
    title: "Frontend Technologies",
    content: "HTML/CSS, React, Chakra UI",
  },
  {
    title: "Backend Technologies",
    content: "Node.js, MySQL, MongoDB",
  },
  {
    title: "Developer Tools",
    content: "Git, GitHub, VS Code, Postman, PyCharm",
  },
  {
    title: "Others",
    content: "WordPress, SEO",
  },
];

export default function Skills() {
  return (
    <div className="container d-section" id="skills">
      <div>
        <div className="second-font s-title">02. My Skills</div>
        <p>These are the technologies with which I'm currently familiar:</p>
        <div>
          <ul>
            {skills.map((item, index) => (
              <li key={index}>
                <b>{item.title}</b>: {item.content}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
