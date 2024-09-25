'use strict'

let toTopBtn = document.querySelector('.totop');
let doctors = document.querySelector('.doctors');

let observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                toTopBtn.classList.add('show');
            }else{
                toTopBtn.classList.remove('show');
            }
        })
    },
    {
        threshold: 0.5,
    }
);

observer.observe(doctors);