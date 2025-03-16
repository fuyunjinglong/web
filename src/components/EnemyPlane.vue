<template>
  <Container :x="enemyPlane.x" :y="enemyPlane.y">
    <Sprite :texture="enemyPlaneImg"></Sprite>
  </Container>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";
import enemyPlaneImg from "../assets/img/diPlane.png";
import type { EnemyPlane } from "../game";

const { enemyPlane } = defineProps({
  enemyPlane: {
    type: Object as PropType<EnemyPlane>,
    require: true,
  },
});
enemyPlane.width = 138;
enemyPlane.height = 89;
</script>
