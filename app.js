const body = document.querySelector("body");
const btn = document.createElement("button");
btn.textContent = "Click me!";
btn.style.margin = "25px";
btn.addEventListener("click", promptNumSquares);

let num = 16;
main();

function promptNumSquares() {
    do {
        num = parseInt(prompt("Number of squares per side:"));
    } while (num > 100 || num <= 0);
    resetDOM();
    main();
}

function resetDOM() {
    body.removeChild(document.querySelector("div"));
    const container = document.createElement("div");
    container.setAttribute("id", "container");
    body.appendChild(container);
}

function main() {
    const NUM_SQUARES_PER_SIDE = num;
    const CONTAINER_SIDE = 16*4*10;

    const container = document.querySelector("#container");
    container.style.width = `${CONTAINER_SIDE}px`;
    container.style.height = `${CONTAINER_SIDE}px`;

    body.insertBefore(btn, container);

    for (let i = 0; i < NUM_SQUARES_PER_SIDE; i++) {
        let line = document.createElement("div");
        line.classList.add("line");
        line.style.height = `${CONTAINER_SIDE / NUM_SQUARES_PER_SIDE}px`;
        line.style.width = `${CONTAINER_SIDE}px`;
        container.appendChild(line);
    
        for (let j = 0; j < NUM_SQUARES_PER_SIDE; j++){
            let square = document.createElement("div");
            square.classList.add("square");
            square.style.height = `${CONTAINER_SIDE / NUM_SQUARES_PER_SIDE}px`;
            square.style.width = `${CONTAINER_SIDE / NUM_SQUARES_PER_SIDE}px`;
            line.appendChild(square);

            square.addEventListener("mouseover", () => {square.style.backgroundColor = "red";});
            square.addEventListener("mouseleave", () => {square.style.backgroundColor = "green";});
        }
    }
}

