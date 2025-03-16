<template>
  <Container :x="plane.x" :y="plane.y">
    <Sprite :texture="planeImg"></Sprite>
  </Container>
</template>

<script setup lang="ts">
import { reactive, type PropType } from "vue";
import planeImg from "../assets/img/myPlane.png";
// import { setupPlane } from "../game/Plane";
import { Plane } from "../game";

// 优化代码小技巧：飞机按下开火键需要发射子弹，所以子弹的初始化位置等与飞机有关。既然耦合，所以plane变量优化到外部
// const plane = setupPlane(reactive({}));
const { plane } = defineProps({
  plane: {
    type: Object as PropType<Plane>,
    require: true,
  },
});

window.addEventListener("keydown", (e) => {
  if (["Space", "Enter"].includes(e.code)) {
    plane.attack();
  }
  switch (e.code) {
    case "ArrowDown":
    case "KeyS":
      plane.moveDown();
      break;
    case "ArrowUp":
    case "KeyW":
      plane.moveUp();
      break;
    case "ArrowLeft":
    case "KeyA":
      plane.moveLeft();
      break;
    case "ArrowRight":
    case "KeyD":
      plane.moveRight();
      break;
    default:
      break;
  }
});
</script>
