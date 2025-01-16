function openNav() {
    document.getElementById("mySideNav").style.width = "250px";
}
function closeNav() {
    document.getElementById("mySideNav").style.width = "0";
}


// const boxs = document.getElementById("cards")
// const options = {}
// const observer = new IntersectionObserver((entries) => {
//         entries.forEach(el => {
//             el.target.classList.toggle("slide", el.isIntersecting)
//         })
//     },
//     options)
// boxs.forEach(box=> {
//     observer.observe(box)
// })
const secs = document.querySelectorAll("#cards");
const section = {};

const sect = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        entry.target.classList.toggle("slids", entry.isIntersecting);
    });
}, section);

// Observe each element in the NodeList
secs.forEach(box => {
    sect.observe(box);
});


let math = document.getElementById("ss"); // Select a single element
let id = {}; // Options for IntersectionObserver

let sectr = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        entry.target.classList.toggle("slids", entry.isIntersecting);
    });
}, id);

// Check if the element exists before observing
if (math) {
    sectr.observe(math);
}
let ff = document.querySelector(".xx"); // Select a single element
let dd = {}; // Options for IntersectionObserver

let ww = new IntersectionObserver((entriess) => {
    entriess.forEach(entrys => {
        entrys.target.classList.toggle("sliw", entrys.isIntersecting); // Fixed typo: entrys instead of entry
    });
}, dd);

// Check if the element exists before observing
if (ff) {
    ww.observe(ff); // Use 'ff' instead of 'math'
}
