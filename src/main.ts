import "./style.css";
import { handleDespawnBeats } from "./systems/handleDespawnBeats";
import { handleSpawnBeats } from "./systems/handleSpawnBeats";
import { moveBeats } from "./systems/moveBeats";
import { getLaneIdFromLetter } from "./util";
import { inCollision } from "./util/collision";

export let FRAME = 0;

function main() {
    setupHandleInput();

    window.requestAnimationFrame(update);
}

function setupHandleInput() {
    function handleKeyDown(event: KeyboardEvent) {
        const laneId = getLaneIdFromLetter(event.key);
        if (!laneId) return;

        const targetEl = document.querySelector(
            `.targets .target[data-lane-id=${laneId}]`
        );
        if (!targetEl) {
            throw new Error(
                `[handleKeyDown] target element with lane ID ${laneId} not found`
            );
        }

        const targetRect = targetEl.getBoundingClientRect();

        const beatEls = document.querySelectorAll(
            `.beats .beat[data-lane-id=${laneId}]`
        );

        beatEls.forEach((beatEl) => {
            const beatRect = beatEl.getBoundingClientRect();
            if (inCollision(targetRect, beatRect)) {
                beatEl.remove();
            }
        });
    }

    document.addEventListener("keydown", handleKeyDown);
}

function update() {
    moveBeats();
    handleSpawnBeats();
    handleDespawnBeats();

    FRAME++;

    window.requestAnimationFrame(update);
}

window.onload = main;
