export function moveBeats() {
    const beatEls = document.querySelectorAll<HTMLElement>(".beat");

    for (const beatEl of Array.from(beatEls)) {
        const y = (parseInt(beatEl.style.top) || 0) + 2;
        beatEl.style.top = `${y}px`;
    }
}
