"use strict";
const list = document.querySelector("#list");
const modal = document.querySelector("#modal");
const input = document.querySelector(".textfield");
const form = document.querySelector("#attendee-form");
const btn = document.querySelector("#fab");

const openModal = () => {
    document.addEventListener("keydown", (e) => {
        if (e.key === "n") {
            modal.classList.add("show");
        }
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            modal.classList.remove("show");
        }
    });
    btn.addEventListener("click", (e) => {
        modal.classList.add("show");
    });
};
const addName = () => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        list.insertAdjacentHTML(
            "beforeend",
            `<li class="deletable" tabindex="0">${input.value}</li>`,
        );
        modal.classList.remove("show");
    });
};

openModal();
addName();
