import { expect, it, describe, vi } from "vitest";
import { Bullet } from "./Bullet";

describe("Bullet", () => {
  it("move", () => {
    const bullet = new Bullet();
    bullet.speed = 1;
    bullet.x = 0;
    bullet.y = 1;
    bullet.border = 0;
    // 用mock模拟函数调用
    bullet.onDestory = vi.fn();
    bullet.move();
    expect(bullet.y).toBe(0);
  });
});
