let projectNameHeading = document.getElementById("project-name-heading");
let about = document.getElementById("about");
let keyPoints = document.getElementById("keyPoints");
let techUsed = document.getElementById("techUsed");
let liveLink = document.getElementById("liveLink");
let sourceCode = document.getElementById("sourceCode");
let liveBtn = document.getElementById("liveLink");

const url = window.location.href;
const sl = url.split("sl=")[1];

fetch("data.json")
    .then(response => response.json())
    .then(data => {
        if (data.length < sl) window.location.href = "/";
        let projectData = data[sl];
        projectNameHeading.innerText = projectData["name"];
        liveLink.href = projectData["liveLink"];
        sourceCode.href = projectData["sourceCode"];
        about.innerHTML = projectData["about"] + "<br>" + projectData["about2"];    
        document.title = projectData["title"];

        for (let item of projectData["keyPoints"]) {
            keyPoints.innerHTML += `<li><i class="far fa-arrow-alt-circle-right"></i><span>${item}</span></li>`;
        }
        for (let item of projectData["techUsed"]) {
            techUsed.innerHTML += `<button>${item}</button>`;
        }
        
        if(projectData["liveLink"] === "") alert("Live Link is not available for this project");

    })