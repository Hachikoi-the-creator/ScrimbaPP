import {
  M2Projects,
  M5Projects,
  M6Projects,
  M7Projects,
} from "./projectsData.js";

function getModuleHtml(dataArr = []) {
  let moduleHTML = "";

  dataArr.forEach((project) => {
    const { name, url, images } = project;

    moduleHTML += `
    <div class="projects--project">
      <h3>${name}</h3>
      <a href="./${url}">
        <img src="./${images[0]}" alt="${name} img">
      </a>
    </div>
  `;
  });

  return moduleHTML;
}

document.getElementById("m2").innerHTML = getModuleHtml(M2Projects);
document.getElementById("m5").innerHTML = getModuleHtml(M5Projects);
document.getElementById("m6").innerHTML = getModuleHtml(M6Projects);
document.getElementById("m7").innerHTML = getModuleHtml(M7Projects);
