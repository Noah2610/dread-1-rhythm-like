import { FRAME } from "../main";

export function handleDespawnBeats() {
    if (FRAME % 60 !== 0) {
        return;
    }

    const screenBottom = document.body.getBoundingClientRect().bottom;
    const beatEls = document.querySelectorAll<HTMLElement>(".beat");

    beatEls.forEach((beatEl) => {
        const y = parseInt(beatEl.style.top) || 0;

        if (y > screenBottom) {
            beatEl.parentElement?.removeChild(beatEl);
        }
    });
}
