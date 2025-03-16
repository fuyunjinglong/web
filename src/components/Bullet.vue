<template>
  <Container :x="bullet.x" :y="bullet.y">
    <Sprite :texture="bulletImg"></Sprite>
  </Container>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";
import bulletImg from "../assets/img/bullet.png";
import type { Bullet } from "../game";

const { bullet } = defineProps({
  bullet: {
    type: Object as PropType<Bullet>,
    require: true,
  },
});
bullet.width = 20;
bullet.height = 20;
</script>
