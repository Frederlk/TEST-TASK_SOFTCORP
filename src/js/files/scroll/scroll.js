// Переменная контроля добавления события window scroll.
let addWindowScrollEvent = false;
//====================================================================================================================================================================================================================================================================================================

// Работа с шапкой при скроле
export function headerScroll() {
    addWindowScrollEvent = true;
    const header = document.querySelector("header.header");
    const startPoint = header.dataset.scroll ? header.dataset.scroll : 1;
    let scrollDirection = 0;
    let timer;
    document.addEventListener("windowScroll", function (e) {
        const scrollTop = window.scrollY;
        clearTimeout(timer);
        if (scrollTop >= startPoint) {
            !header.classList.contains("_scroll") ? header.classList.add("_scroll") : null;
        } else {
            header.classList.contains("_scroll") ? header.classList.remove("_scroll") : null;
        }
        scrollDirection = scrollTop <= 0 ? 0 : scrollTop;
    });
}
// При подключении модуля обработчик события запустится автоматически
setTimeout(() => {
    if (addWindowScrollEvent) {
        let windowScroll = new Event("windowScroll");
        window.addEventListener("scroll", function (e) {
            document.dispatchEvent(windowScroll);
        });
    }
}, 0);
