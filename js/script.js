// owlCarousel
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 30,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3500,
        smartSpeed: 700,
        dotsEach: 5,
        slideBy: 2,
        responsive: {
            0: { items: 1 },
            1000: { items: 2 }
        }
    });
});

// top btn
const topBtn = document.querySelector(".top-btn button")
topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" })


// header toggled icon
const togglerBtn = document.querySelector("#toggler-btn")
const togglerIcon = document.querySelector("nav button i.fas")

togglerBtn.onclick = () => togglerIcon.classList.contains("fa-bars") ? togglerIcon.classList.replace("fa-bars", "fa-close") : togglerIcon.classList.replace("fa-close", "fa-bars");

// dropdown in nav

const btn = document.querySelector("#dropdownNvbarButton");
const menu = document.querySelector("#dropdownNavbar");

btn.onclick = (e) => {
    e.stopPropagation();
    menu.classList.toggle("hidden");
};

menu.onclick = (e) => {
    e.stopPropagation();
};

document.onclick = () => {
    menu.classList.add("hidden");
};

// mood btn
const nav = document.querySelector("nav");
const mood = localStorage.getItem("mood")
const moodBtn = document.querySelector("#mood-btn")

moodBtn.onclick = () => {
    if (mood) {
        if (localStorage.getItem("mood") == "dark") {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("mood", "light");
            moodBtn.querySelector("i").classList.replace("fa-sun", "fa-moon")
        } else {
            localStorage.setItem("mood", "dark");
            moodBtn.querySelector("i").classList.replace("fa-moon", "fa-sun")
            document.documentElement.classList.add("dark")
        }
    } else {
        localStorage.setItem("mood", "dark");
        document.documentElement.classList.add("dark")
    }
}

// on load
window.onload = () => {
    if (document.documentElement.scrollTop > 95) {
        nav.classList.add("scrolled-nav")
        topBtn.classList.remove("invisible", "opacity-0");
    } else {
        nav.classList.remove("scrolled-nav")
        topBtn.classList.add("invisible", "opacity-0");
    }
    if (mood) {
        if (localStorage.getItem("mood") == "dark") {
            moodBtn.querySelector("i").classList.replace("fa-moon", "fa-sun")
            document.documentElement.classList.add("dark")
        } else {
            moodBtn.querySelector("i").classList.replace("fa-sun", "fa-moon")
            document.documentElement.classList.remove("dark")
        }
    }
    // Typing Effect
    const p = document.querySelector(".typing");
    const text = p.innerText;
    p.textContent = "";
    let i = 0;

    let timer = setInterval(() => {
        p.textContent += text[i++];
        if (!text[i]) clearInterval(timer);
    }, 100);
    // AOS 
    AOS.init();
}
// Header background in scroll

window.onscroll = () => {
    if (document.documentElement.scrollTop > 95) {
        nav.classList.add("scrolled-nav")
        topBtn.classList.remove("invisible", "opacity-0");
    } else {
        nav.classList.remove("scrolled-nav")
        topBtn.classList.add("invisible", "opacity-0");
    }
    // progress
    const progress = document.querySelector(".progress");
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    progress.style.width = `${(scrollTop / (scrollHeight - clientHeight)) * 100}%`;
}

// search
const searchBtn = document.querySelector("#search-btn")
const search = document.querySelector("#search")
const closeBtn = search.querySelector("#close-btn")

searchBtn.onclick = () => search.classList.remove("opacity-0", "invisible")

closeBtn.onclick = () => search.classList.add("opacity-0", "invisible")
