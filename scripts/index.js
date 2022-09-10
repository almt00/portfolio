project_info = [
  {
    id: 0,
    name: "UAPPING",
    img: "assets/uapping.svg",
    desc: "UAPPING is a <b>mobile web app</b> created under the theme “from students, to students”. It aimed to <b>connect</b> multiple university groups and streamline its <b>events</b>, as well as promote the creation of new ones proposed by the students. It was fully conceptualized, designed and implemented using <b>JavaScript, CSS, PHP and MySQL.</b>",
    lang: ["JavaScript", "CSS", "PHP", "mySQL"],
    site: "https://uapping.pt",
    repo: "https://github.com/mari-alves/uapping",
  },
  {
    id: 1,
    name: "marsLAB",
    img: "assets/marsLAB.svg",
    desc: "marsLAB consists on a website that lets you compare weather data from Mars and the Earth. It was developed using React as well as multiple APIs such as Google Places API, NASA’s and weather APIs, in order to get images from locations chosen by the user and corresponding weather.",
    lang: ["React", "JavaScript", "CSS", "Google Places API"],
    site: null,
    repo: "https://github.com/almt00/mars_lab",
  },
  {
    id: 2,
    name: "ur.FPS",
    img: "assets/urFPS.svg",
    desc: "ur.FPS is a website that aims to make known several first person shooter games and allows users not only to view the list of games and franchises but also to read and leave reviews. It also has a back office area that lets admin users manage the platform.It was developed through PHP, using relational databases with MySQL.",
    lang: ["PHP", "mySQL"],
    site: null,
    repo: "https://github.com/almt00/urFPS",
  },
];

window.onload = function () {
  const navbar = document.getElementById("main_navbar");
  const nav_toggle = document.getElementById("nav_toggle");
  let toggle_state = nav_toggle.getAttribute("aria-expanded");

  nav_toggle.addEventListener("click", () => {
    if (toggle_state === "true") {
      navbar.style.transform = "translateX(100%)";
      navbar.style.transition = "transform 250ms ease-out, visibility 250ms";
      navbar.style.visibility = "hidden";
      toggle_state = "false";
      nav_toggle.innerHTML = '<i class="fa-solid fa-bars fa-xl"></i>';
    } else if (toggle_state === "false") {
      if (nav_toggle.display != "none") {
        navbar.style.visibility = "visible";
        navbar.style.display = "flex";
        navbar.style.transform = "translateX(0%)";
        navbar.style.transition = "transform 250ms ease-in";

        nav_toggle.innerHTML = '<i class="fa-solid fa-x fa-xl"></i>';
        toggle_state = "true";
      }
    }
  });

  project_info.forEach((project, index) => {
    document.getElementById(
      "projects"
    ).innerHTML += `<article class="project_container" id="project_${project.id}">
    <span>
      <img src="${project.img}" class="img" />
    </span>
    <span class="project_body">
      <p class="project_title" id="project_title">${project.name}</p>
      <p class="project_text" id="project_text">
        ${project.desc}
      </p>
      <span class="project_more bottom">
        <span class="flex line" id="project_tech_${project.id}">
        </span>
        <span class="flex" id="project_links_${project.id}"> 
        </span>
      </span>
    </span>
  </article>`;

    project.lang.forEach((language) => {
      document.getElementById(`project_tech_${project.id}`).innerHTML += `
    <p>${language}</p>`;
    });

    if (project.site != null) {
      document.getElementById(`project_links_${project.id}`).innerHTML += `
      <p>
        <a href="${project.site}" target="_blank">
          <i class="fa-solid fa-link fa-xl"></i>
        </a>
      </p>`;
    }

    if (project.repo != null) {
      document.getElementById(`project_links_${project.id}`).innerHTML += `
      <p>
      <a href="${project.repo}" target="_blank">
        <i class="fa-brands fa-github fa-xl"></i>
      </a>
    </p>`;
    }
  });
};
