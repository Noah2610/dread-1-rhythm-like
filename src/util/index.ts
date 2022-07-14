import { LaneId } from "../types";

export function getLetterFromLaneId(laneId: LaneId): string {
    switch (laneId) {
        case "a":
            return "H";
        case "b":
            return "J";
        case "c":
            return "K";
        case "d":
            return "L";
    }
}
