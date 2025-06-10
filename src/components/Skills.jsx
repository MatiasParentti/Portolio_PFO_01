import './Skills.css';

const Skills = () => {
  const skills = [
    {
      id: 1,
      name_skill: "Angular",
      url_svg:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    },
    {
      id: 2,
      name_skill: "React",
      url_svg:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      id: 3,
      name_skill: "Javascript",
      url_svg:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      id: 4,
      name_skill: "Java",
      url_svg:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      id: 5,
      name_skill: "Next.js",
      url_svg:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      id: 6,
      name_skill: "MySQL",
      url_svg:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      id: 7,
      name_skill: "MongoDB",
      url_svg:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      id: 8,
      name_skill: "Node.js",
      url_svg:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      id: 9,
      name_skill: "CSS",
      url_svg:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      id: 10,
      name_skill: "HTML",
      url_svg:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      id: 11,
      name_skill: "Trello",
      url_svg:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg",
    },
    {
      id: 12,
      name_skill: "Github",
      url_svg:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
  ];

  const rows = [];

  for (let i = 0; i < skills.length; i += 3) {
    const row = skills.slice(i, i + 3);
    rows.push(row);
  }

  return (
    <section>
      <h2>Skills</h2>

      <div className="tableContainer">
        <table id="tableSkills">
          <thead>
            <tr>
              <th colSpan="3">Tecnologías - Skills</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                {row.map((skill) => (
                  <td key={skill.id} style={{ textAlign: "center" }}>
                    <img
                      src={skill.url_svg}
                      alt={skill.name_skill}
                      width="40"
                      height="40"
                    />
                    <div>{skill.name_skill}</div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Skills;
