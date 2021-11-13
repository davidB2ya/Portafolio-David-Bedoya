let text = document.getElementById('text');
let bird1 = document.getElementById('bird1');
let bird2 = document.getElementById('bird2');
let btn = document.getElementById('btn');
let rocks = document.getElementById('rocks');
let forest = document.getElementById('forest');
let water = document.getElementById('water');
let header = document.getElementById('header');

const skills = document.querySelector('.skills');
const tools = document.querySelector('.tools');
const pixels = () => document.documentElement.scrollTop || document.body.scrollTop;
const project_container = document.getElementById('project-container')

// Static Import
import data from "./data.js" 
console.log(data);

// const textEl = document.getElementById('auto-text')
// const text = 'Soy un jóven cubano, residente en Colombia y Técnico en Sistemas, que busca retos nuevos en la rama de las Tecnologías (tanto como Full-Stack Web Developer como en la Electrónica). Participé activamente durante cuatro años en equipos de investación y desarrollo, con enfoque en diseño y fabricación de equipos de telecomunicaciones y automatización. Como desarrollador formé parte de la segunda cohorte del Bootcamp de la Fundación Educamas.'

window.addEventListener('scroll', function() {
    let value = window.scrollY;

    text.style.top = 40 + value * -0.3 + "%";
    // text.style.transition = all + 100000 + "s" ;
    bird1.style.top = value * -0.5 + "px";
    bird1.style.left = value * 0.5 + "px";
    bird2.style.top = value * -1.5 + "px";
    bird2.style.top = value * -5 + "px";
    // btn.style.marginTop = value * 1.5 + 'px';
    rocks.style.top = value * -0.12 + 'px';
    forest.style.top = value * 0.25 + 'px';
    header.style.top = value * 0.5 + 'px';
})

addEventListener('DOMContentLoaded', () =>{
    const btn_top = document.querySelector('#btn_top');

    const goUp = () => {
        if (pixels() > 0) {
            requestAnimationFrame(goUp)
            scrollTo(0);
            
        }
        cancelAnimationFrame(goUp)
    }

    const indicateScroll = () => {
        if (pixels () > 50) {
            btn_top.className = 'show'
        } else {
            btn_top.className = 'hidden'
        }
    }
    btn_top.addEventListener('click', goUp)
    window.addEventListener('scroll', indicateScroll)
})

window.addEventListener('scroll', checkSkills)

function checkSkills() {

    if (pixels () > 600){
        skills.style.transform = "translateX(" + 0 + "%)";
        tools.style.transform = "translateX(" + 0 + "%)";
    }else if (pixels () < 600) {
        skills.style.transform = "translateX(" + -500 + "%)";
        tools.style.transform = "translateX(" + -500 + "%)";
    }
    // if (pixels () > 800){
    //     tools.style.transform = "translateX(" + 0 + "%)";
    // }else if (pixels () < 800) {
    //     tools.style.transform = "translateX(" + -500 + "%)";
    // }

    //     let idx = 1
    //     let speed = 300 

    //     if (pixels () > 400){
    //         textEl.innerText = text.slice(0, idx)

    //         idx++
        
    //         if (idx > text.length) {
    //             idx = 1
    //         }
        
    //         setTimeout(writeText, speed)
    //     }


}


function addProject(){
    for(let i = 0; i < data.length; i++) {
        // let id_project = data[i];
        createProject()
        function createProject() {
            const projectEl = document.createElement('div')
            projectEl.classList.add('project')
        
            const projectInnerHTML = `
            <div class="img-container">
                <h3 class="name">${data[i].name}</h3>
                <img src='${data[i].img}' alt="${data[i].name}">
                <div class="info">
                    <a class="github-project" href="${data[i].github}"><i class="fab fa-github-alt"></i></a> 
                    <a class="deploy-project" href="${data[i].deploy}"><i class="fas fa-globe-americas"></i></a> 
                    <p>${data[i].description}</p>
                </div>
            </div>
            
            `
            projectEl.innerHTML = projectInnerHTML
        
            project_container.appendChild(projectEl)
        
        }
    }
}
    
addProject()