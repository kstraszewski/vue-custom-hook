<template>
  <div>
    <p>{{car}}</p>
    <mechanic :car="car"></mechanic>
    <journal :car="car"></journal>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {Car} from '@/models/Car';
import Mechanic from "@/components/Mechanic.vue";
import Journal from "@/components/Journal.vue";

@Component({
  components: {Journal, Mechanic,},
})
export default class HelloWorld extends Vue {
    public car = new Car();
}
</script>
