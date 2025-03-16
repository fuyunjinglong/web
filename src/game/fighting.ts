export function fighting(plane, enemyPlanes) {
  plane.bullets.forEach((bullet, bI) => {
    enemyPlanes.forEach((enemy, eI) => {
      if (hitTestObject(bullet, enemy)) {
        plane.bullets.splice(bI, 1);
        enemyPlanes.splice(eI, 1);
      }
    });
  });
}

export function hitTestObject(rectA, rectB) {
  // 判断两个矩形是否重叠即碰撞,通过取反
  // return !(rectA.x+rectA.width<rectB.x|| rectB.x+rectB.width<rectA.x||rectA.y+rectA.height<rectB.y||rectB.y+rectB.height<rectA.y)
  return (
    rectA.x + rectA.width >= rectB.x &&
    rectB.x + rectB.width >= rectA.x &&
    rectA.y + rectA.height >= rectB.y &&
    rectB.y + rectB.height >= rectA.y
  );
}
