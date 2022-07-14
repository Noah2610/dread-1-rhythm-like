import "./style.css";
import { handleSpawnBeats } from "./systems/handleSpawnBeats";
import { moveBeats } from "./systems/moveBeats";

export let FRAME = 0;

function main() {
    window.requestAnimationFrame(update);
}

function update() {
    moveBeats();
    handleSpawnBeats();

    FRAME++;

    window.requestAnimationFrame(update);
}

window.onload = main;
