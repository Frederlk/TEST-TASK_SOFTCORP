import * as noUiSlider from "nouislider";
import SimpleBar from "simplebar";
import { isMobile } from "../files/functions.js";

const slider = document.querySelector("#nouislider"),
    inputNumber = document.querySelector("#range-input"),
    form = document.querySelector(".order__form");

if (slider && inputNumber) {
    noUiSlider.create(slider, {
        start: 75,
        range: {
            min: [1],
            max: [100],
        },
    });

    slider.noUiSlider.on("update", function (values, handle) {
        inputNumber.value = Math.floor(values[handle]);
    });
}

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
    });
}

//========================================================================================================================================================

const menuBody = document.querySelector(".menu__body");

if (menuBody && window.matchMedia("(max-width: 768px)").matches) {
    new SimpleBar(menuBody, {
        autoHide: false,
    });
}

if (document.body && !isMobile.any()) {
    new SimpleBar(document.body);
}
