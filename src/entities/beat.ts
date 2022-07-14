import { LaneId } from "../types";
import { getLetterFromLaneId } from "../util";

export function spawnBeat(laneId: LaneId) {
    const beatEl = document.createElement("span");
    beatEl.classList.add("beat", "disc");
    beatEl.innerHTML = getLetterFromLaneId(laneId);

    const beatLaneEl = document.querySelector(
        `.beats > [data-lane-id=${laneId}]`
    );

    if (!beatLaneEl) {
        throw new Error(
            `[createBeat] beat lane element with lane ID ${laneId} doesn't exist!`
        );
    }

    beatLaneEl.appendChild(beatEl);
}
