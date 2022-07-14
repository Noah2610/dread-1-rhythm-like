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

export function getLaneIdFromLetter(letter: string): LaneId | null {
    switch (letter.toUpperCase()) {
        case "H":
            return "a";
        case "J":
            return "b";
        case "K":
            return "c";
        case "L":
            return "d";
        default:
            return null;
    }
}
