<template>
  <div>
    <p :key="index" v-for="(element, index) in journalElements">{{element.content}} on {{element.date}}</p>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {onCarChange, VueCarWatcher} from '@/components/VueCarWatcher';
import {Car} from "@/models/Car";

interface JournalElement{
  content: string;
  date: Date;
}

@Component
export default class Journal extends VueCarWatcher implements onCarChange{
  private journalElements: JournalElement[] = [];

  onCarChange(newCar: Car, oldCar: Car): void {
    this.journalElements.push({
      content: `car has been changed from ${JSON.stringify(oldCar)} to ${JSON.stringify(newCar)}`,
      date: new Date(),
    });
  }
}
</script>
