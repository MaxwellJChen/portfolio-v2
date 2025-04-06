// const fade_classes = ["timeline-text", "timeline-middle", "timeline-date"];
const faders = [...document.getElementsByClassName("timeline")];
// for(let i = 0; i < fade_classes.length; i++) {
//     const cur = document.getElementsByClassName(fade_classes[i]);
//     faders.push(...cur);
// }

// console.log(faders);

const appear_options = {
    threshold: 1,
    rootMargin: `0px 0px -${window.innerHeight * 0.1}px 0px`
};
const appear_on_scroll = new IntersectionObserver(function(entries, appear_on_scroll) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        }
        else {
            entry.target.classList.add("appear");
            appear_on_scroll.unobserve(entry.target);
        }
    })
}, appear_options);

faders.forEach(fader => {
    appear_on_scroll.observe(fader);
});