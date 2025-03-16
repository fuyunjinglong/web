import { Application } from "pixi.js";
import { setupPlane, type Plane } from "./Plane";
import { initEnemyPlanes, runEnemyPlanes } from "./EnemyPlane";
import { fighting } from "./fighting";
export * from "./Plane";
export * from "./Bullet";
export * from "./EnemyPlane";

// 绘制游戏的属性
export const game = new Application({
  width: 1500,
  height: 650,
});

// 将pixi应用添加到body-dom上
document.body.appendChild(game.view);

// 这里类似一个胶水层：粘合UI层和业务逻辑层，但并没有提供单测
export function initGame(_plane, bullets, enemyPlanes) {
  const plane = setupPlane(_plane, bullets);
  // 初始化敌军
  initEnemyPlanes(enemyPlanes);
  mainTicker(plane, enemyPlanes);
  return { plane, bullets, enemyPlanes };
}

function mainTicker(plane: Plane, enemyPlanes) {
  // game定时触发器，出发run函数中子弹真循环
  game.ticker.add(() => {
    // 触发器循环执行子弹移动
    plane.run();
    // 触发器循环执行敌军移动
    runEnemyPlanes(enemyPlanes);
    fighting(plane, enemyPlanes);
  });
}
