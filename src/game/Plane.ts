import { Bullet } from "./Bullet";

export interface Plane {
  x: number;
  y: number;
  moveDown: () => void;
  moveUp: () => void;
  moveLeft: () => void;
  moveRight: () => void;
  attack: () => void;
  run: () => void;
}
// { x: 700, y: 550, speed: 20 }
const defaultOptions = {
  x: 0,
  y: 500,
  speed: 20, // 移动速度
};

// 这里没有封装为Class类，因为我方飞机是单例，且数据需要响应式
export function setupPlane(plane, bullets: Bullet[] = [], options?): Plane {
  plane.bullets = bullets;
  // 设置默认值，主动暴露初始化环境，可读性高，将业务逻辑与UI逻辑拆分开，方便vitest测试代码
  Object.assign(plane, defaultOptions, options);
  initMove(plane);
  initAttack(plane, bullets);
  initRun(plane, bullets);
  return plane;
}

function initMove(plane) {
  // 重构
  plane.moveDown = function moveDown() {
    plane.y += plane.speed;
  };
  plane.moveUp = function moveDown() {
    plane.y -= plane.speed;
  };
  plane.moveLeft = function moveDown() {
    plane.x -= plane.speed;
  };
  plane.moveRight = function moveDown() {
    plane.x += plane.speed;
  };
}

function initAttack(plane, bullets) {
  // 重构
  plane.attack = () => {
    const bullet = new Bullet();
    // 子弹跟随飞机位置
    bullet.x = plane.x + 40;
    bullet.y = plane.y - 20;
    bullet.border = 0;
    // 飞机攻击时绑定子弹的销毁事件
    bullet.onDestory = () => {
      const index = bullets.indexOf(bullet);
      bullets.splice(index, 1);
    };

    // 有点类似闭包
    bullets.push(bullet);
  };
}

function initRun(plane, bullets) {
  // 重构：申明子弹真循环移动
  plane.run = () => {
    bullets.forEach((bullet) => {
      bullet.move();
    });
  };
}
