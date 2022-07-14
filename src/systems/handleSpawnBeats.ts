import { spawnBeat } from "../entities/beat";
import { FRAME } from "../main";
import { LaneId } from "../types";

export function handleSpawnBeats() {
    if (FRAME % 60 !== 0) {
        return;
    }

    const laneIdx = ((FRAME % (60 * 4)) / 60) % 4;
    let laneId: LaneId;

    switch (laneIdx) {
        case 0:
            laneId = "a";
            break;
        case 1:
            laneId = "b";
            break;
        case 2:
            laneId = "c";
            break;
        case 3:
            laneId = "d";
            break;
        default:
            throw new Error("Unreachable");
    }

    spawnBeat(laneId);
}
