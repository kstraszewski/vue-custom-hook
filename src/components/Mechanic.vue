<template>
  <div>
    <button @click="car.engineHP = 155">Change engine</button>
    <button @click="car.wheelSize = 18">Change wheels</button>
    <button @click="car.color = 'blue'">Change color</button>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {VueCarWatcher} from "@/components/VueCarWatcher";

@Component
export default class Mechanic extends VueCarWatcher {

}
</script>
