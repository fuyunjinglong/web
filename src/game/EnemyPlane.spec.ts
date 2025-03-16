import { expect, it, describe, vi } from "vitest";
import { EnemyPlane, initEnemyPlanes, runEnemyPlanes } from "./EnemyPlane";

describe("EnemyPlane", () => {
  it("move", () => {
    const enemy = new EnemyPlane();
    enemy.y = 0;
    enemy.move();
    expect(enemy.y).toBe(1);
  });

  //   it("创建一个敌军", () => {
  //     const enemys = [];
  //     initEnemyPlanes(enemys);
  //     expect(enemys.length).toBe(1);
  //   });

  it("让所有敌军移动", () => {
    const enemy = new EnemyPlane();
    enemy.y = 1;
    const enemys = [enemy];
    runEnemyPlanes(enemys);
    expect(enemy.y).toBe(2);
  });

  it("2s创建一个敌军", () => {
    // 利用vi魔法，快速经过4s时间-强强强
    vi.useFakeTimers();
    const enemys = [];
    // 2000
    initEnemyPlanes(enemys);
    vi.advanceTimersByTime(4000);

    expect(enemys.length).toBe(2);
    vi.restoreAllMocks();
  });
});
