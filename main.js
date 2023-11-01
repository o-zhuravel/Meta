                   // ARTISTS

let artists = document.querySelector(".art");
let links = document.querySelectorAll(".links");

artists.addEventListener("mouseover", (e) => {
    if (e.target.hasAttribute("data-id")) {
        let id = e.target.getAttribute("data-id");
        console.log(id);
        for (let l of links) {
            if (l.getAttribute("data-number") === id) {
                l.style.display = "block";
                console.log(l.getAttribute("data-number"));
            }
        }
        e.target.addEventListener("mouseout", () => {
            for (let l of links) {
                if (l.getAttribute("data-number") === id) {
                    l.style.display = "none";
                    console.log(l.getAttribute("data-number"));
                }
            }
        })
    }
});
                 // STORY
let story = document.querySelector(".menu");
let parMenu = document.querySelectorAll(".menu-par");
let articles = document.querySelectorAll(".article");
story.addEventListener("click", (e) => {
    if (e.target.hasAttribute("data-id")) {
        let id = e.target.getAttribute("data-id");
        for (let p of parMenu) {
            p.classList.remove("change");
        }
        e.target.classList.add("change");
        for (let a of articles) {
            a.style.display = "none";
            if (a.getAttribute("data-number") === id) {
                a.style.display = "block grid";
            }
        }
    }
});
