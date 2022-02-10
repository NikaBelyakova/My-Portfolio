let arrowDown = document.getElementById('arrow-down');
let arrowUp = document.getElementById('arrow-up');
let footer = document.querySelector('.footer')

function getCoords(elem) {
    let box = elem.getBoundingClientRect();

    return {
        bottom: box.bottom + window.pageYOffset,
    };
};



arrowDown.onclick = function () {
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
    let arrowCoord = getCoords(arrowDown).bottom;

    if (arrowCoord <= arrowMaxCoord) {
        window.scrollBy({
            top: document.documentElement.clientHeight,
            behavior: "smooth"
        });
    } else {
        arrowDown.style.display = "none";
    }  
};

arrowUp.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

let callback = function(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            arrowUp.style.display = "block",
            arrowDown.style.display = "none"
        } else {
            arrowUp.style.display = "none",
            arrowDown.style.display = "block"
        }
    });
};

let observer = new IntersectionObserver (callback , {
    treshold: 0.7
});

observer.observe(footer);