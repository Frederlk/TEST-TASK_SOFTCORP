import * as noUiSlider from "nouislider";

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
