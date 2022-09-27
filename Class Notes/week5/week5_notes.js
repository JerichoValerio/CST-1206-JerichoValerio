// Way 1 capture the button element in script

// cont button = document.getElementById("click");
// console.log(button);

// Way 2
//const button = document.getElementsByTagName("button");
// console.log(button);

//way 3

// const button = document.querySelector(".btn");
// console.log(button)

//way 4

const button1 = document.querySelector(".btn");
console.log(button1);

const buttons = document.querySelectorAll(".btn");
console.log(buttons, "All");

// event handler and listener for button 1

 //button1.addEventListener("click", function () {
//   console.log("fIRED");
// });


const container = document.querySelector(".container");
console.log(container)


container.addEventListener("mouseenter", () => {
    console.log("mouse entered")
})

function mouseLeft() {
    console.log("mouse left");
}

container.addEventListener("mouseleave", () => {
    console.log("mouse left")
})