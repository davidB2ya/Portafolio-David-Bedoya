let text = document.getElementById('text')
let bird1 = document.getElementById('bird1')
let bird2 = document.getElementById('bird2')
let btn = document.getElementById('btn')
let rocks = document.getElementById('rocks')
let forest = document.getElementById('forest')
let water = document.getElementById('water')
let header = document.getElementById('header')
let darkMode = document.getElementById('dark-mode')
let body = document.getElementById('body')

const menu = document.querySelector('.menu')
const open = document.querySelector('.open')
const close = document.querySelector('.close')
const home = document.getElementById('btns_home')
const about = document.getElementById('btns_about')
const project = document.getElementById('btns_project')
const contact = document.getElementById('btns_contact')
const btnContact = document.getElementById('button');
const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');
const tel = document.getElementById('tel');
const msm = document.getElementById('msm');

const skills = document.querySelector('.skills')
const tools = document.querySelector('.tools')
const pixels = () =>
    document.documentElement.scrollTop || document.body.scrollTop
const project_container = document.getElementById('project-container')

// Static Import
import data from './dataEn.js'

window.addEventListener('scroll', function () {
    let value = window.scrollY

    text.style.top = 40 + value * -0.3 + '%'
    // text.style.transition = all + 100000 + "s" ;
    bird1.style.top = value * -0.5 + 'px'
    bird1.style.left = value * 0.5 + 'px'
    bird2.style.top = value * -1.5 + 'px'
    bird2.style.top = value * -5 + 'px'
    // btn.style.marginTop = value * 1.5 + 'px';
    rocks.style.top = value * -0.12 + 'px'
    forest.style.top = value * 0.25 + 'px'
    header.style.top = value * 0.5 + 'px'
})

window.onload = init

function init() {
    var Xmas95 = new Date()
    var hours = Xmas95.getHours()

    if (hours >= 20 && hours <= 6) {
        darkMode.src = 'https://i.ibb.co/BKtHGmZ/Planning-25-Morning.png'
        body.style.background = 'rgb(' + 30 + ',' + 30 + ',' + 30 + ')'
    } else {
        darkMode.src = 'https://i.ibb.co/1bB41tH/Planning-24-Night-Time.png'
        body.style.background = '#fff'
    }

    console.log(hours)
}

const funcDarkMode = () => {
    if (darkMode.src === 'https://i.ibb.co/1bB41tH/Planning-24-Night-Time.png') {
        darkMode.src = 'https://i.ibb.co/BKtHGmZ/Planning-25-Morning.png'
        body.style.background = 'rgb(' + 30 + ',' + 30 + ',' + 30 + ')'
    } else {
        darkMode.src = 'https://i.ibb.co/1bB41tH/Planning-24-Night-Time.png'
        body.style.background = '#fff'
    }
}

darkMode.addEventListener('click', funcDarkMode)

addEventListener('DOMContentLoaded', () => {
    const btn_top = document.querySelector('#btn_top')

    const goUp = () => {
        if (pixels() > 0) {
            requestAnimationFrame(goUp)
            scrollTo(0)
        }
        cancelAnimationFrame(goUp)
    }

    const indicateScroll = () => {
        if (pixels() > 50) {
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
    if (pixels() > 700) {
        skills.style.transform = 'translateX(' + 0 + '%)'
        tools.style.transform = 'translateX(' + 0 + '%)'
    } else if (pixels() < 700) {
        skills.style.transform = 'translateX(' + -500 + '%)'
        tools.style.transform = 'translateX(' + -500 + '%)'
    }
}

function addProject() {
    for (let i = 0; i < data.length; i++) {
        createProject()
        function createProject() {
            const projectEl = document.createElement('div')
            projectEl.classList.add('project')

            const projectInnerHTML = `
            <div class="img-container">
                <h3 class="name">${data[i].name}</h3>
                <img src='${data[i].img}' alt="${data[i].name}">
                <div class="overlay">
                    <p>${data[i].description}</p>
                    <div class="info">
                        <a target='_blank' class="github-project" href="${data[i].github}"><i class="fab fa-github-alt"></i></a> 
                        <a target='_blank' class="deploy-project" href="${data[i].deploy}"><i class="fas fa-globe-americas"></i></a> 
                    </div>    
                </div>
            </div>
            `
            projectEl.innerHTML = projectInnerHTML

            project_container.appendChild(projectEl)
        }
    }
}

addProject()

function toggleMenu() {
    menu.classList.toggle('opened')
}

function removeMenu() {
    menu.classList.remove('opened')
}

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btnContact.value = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'template_hv5tvwj';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btnContact.value = 'Send';
                nombre.value = "";
                correo.value = "";
                tel.value = "";
                msm.value = "";
            }, (err) => {
                btnContact.value = 'Send';
                alert(JSON.stringify(err));
            });
    });

open.addEventListener('click', toggleMenu)
close.addEventListener('click', toggleMenu)
home.addEventListener('click', toggleMenu)
about.addEventListener('click', toggleMenu)
project.addEventListener('click', toggleMenu)
contact.addEventListener('click', toggleMenu)
