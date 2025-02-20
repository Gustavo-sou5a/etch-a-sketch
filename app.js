const NUM_SQUARES_PER_SIDE = 16;
const CONTAINER_SIDE = 16*4*10;

const container = document.querySelector("div");
container.style.width = `${CONTAINER_SIDE}px`;
container.style.height = `${CONTAINER_SIDE}px`;

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

        // square.addEventListener("mouseover", hoverEvent(square));
    }
}

// function hoverEvent(div) {
//     div.style.backgroundColor = "red";
// }

