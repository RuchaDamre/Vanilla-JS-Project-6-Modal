let modal_open = document.getElementById("modal_open");
let close = document.querySelector(".close");
let overlay = document.querySelector(".overlay");
let show_modal_content = document.querySelector(".show_modal_content");
let modal_content = document.querySelector(".modal_content");


modal_open.addEventListener('click', function () {
    overlay.classList.add("show_modal_content");
});

close.addEventListener('click', function () {
    overlay.classList.remove("show_modal_content");
});

document.addEventListener("click", (e) => {
    if (e.target.contains(overlay)) {
        overlay.classList.remove("show_modal_content");
    }
});