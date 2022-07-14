interface InCollisionObject {
    x: number;
    y: number;
    width: number;
    height: number;
}

export function inCollision(
    a: InCollisionObject,
    b: InCollisionObject
): boolean {
    const aLef = a.x;
    const aRig = a.x + a.width;
    const aTop = a.y;
    const aBot = a.y + a.height;
    const bLef = b.x;
    const bRig = b.x + b.width;
    const bTop = b.y;
    const bBot = b.y + b.height;

    return (
        ((aLef >= bLef && aLef < bRig) || (aLef <= bLef && aRig > bLef)) &&
        ((aTop >= bTop && aTop < bBot) || (aTop <= bTop && aBot > bTop))
    );
}
