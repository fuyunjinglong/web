import { expect, it, describe } from "vitest";
import { setupPlane } from "./Plane";
import { Bullet } from "./Bullet";
import { EnemyPlane } from "./EnemyPlane";
import { fighting, hitTestObject } from "./fighting";

describe("fighting", () => {
  it("当敌军和我方子弹碰撞上的话，都会被销毁", () => {
    const bullet = new Bullet();
    bullet.x = 0;
    bullet.y = 0;
    bullet.width = 100;
    bullet.height = 100;
    const bullets = [bullet];
    const plane = setupPlane({}, bullets, { x: 0, y: 0 });
    const enemy = new EnemyPlane();
    enemy.x = 50;
    enemy.y = 0;
    enemy.width = 100;
    enemy.height = 100;
    const enemys = [enemy];
    fighting(plane, enemys);
    expect(bullets.length).toBe(0);
    expect(enemys.length).toBe(0);
  });

  it("两个矩形相交,返回true", () => {
    const rectA = {
      x: 0,
      y: 0,
      width: 100,
      height: 100,
    };
    const rectB = {
      x: 50,
      y: 50,
      width: 100,
      height: 100,
    };
    const r = hitTestObject(rectA, rectB);
    expect(r).toBe(true);
  });

  it("两个矩形不相交,返回false", () => {
    const rectA = {
      x: 0,
      y: 0,
      width: 100,
      height: 100,
    };
    const rectB = {
      x: 150,
      y: 150,
      width: 100,
      height: 100,
    };
    const r = hitTestObject(rectA, rectB);
    expect(r).toBe(false);
  });
});
