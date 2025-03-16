export class EnemyPlane {
  public x: number = 0;
  public y: number = 0;
  public speed: number = 1;
  public border: number = 0;
  public onDestory: any;
  public width: number = 0;
  public height: number = 0;

  constructor() {}

  move() {
    this.y += this.speed;
    // 子弹超过边界后，调用回调函数
    if (this.y < this.border) {
      this.onDestory && this.onDestory();
    }
  }
}

export function initEnemyPlanes(enemyPlanes) {
  setInterval(() => {
    const enemyPlane = new EnemyPlane();
    enemyPlanes.push(enemyPlane);
  }, 2000);
}

export function runEnemyPlanes(enemyPlanes) {
  enemyPlanes.forEach((enemyPlane) => {
    enemyPlane.move();
  });
}
