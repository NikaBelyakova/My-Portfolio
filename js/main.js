let arrow = document.getElementById('arrow');
let footer = document.querySelector('.footer')

function getCoords(elem) {
    let box = elem.getBoundingClientRect();

    return {
        bottom: box.bottom + window.pageYOffset,
    };
};



arrow.onclick = function () {
    // получить полную высоту документа
    let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
    // получить высоту футера
    let footerHeight = footer.getBoundingClientRect().height;
    // максимальнаые координаты для стрелки
    let arrowMaxCoord = scrollHeight - footerHeight / 2;
    // координаты стрелки
    let arrowCoord = getCoords(arrow).bottom;

    if (arrowCoord <= arrowMaxCoord) {
        window.scrollBy({
            top: document.documentElement.clientHeight,
            behavior: "smooth"
        });
    } else {
        arrow.style.display = "none";
        // arrow.style.transform = "rotate(180deg)";
        // window.scrollTo(0, 0);
    }
    
};