import Vue from 'vue';
import {Car} from '@/models/Car';
import {Prop, Watch} from 'vue-property-decorator';

const ON_CAR_CHANGE_FUNCTION_NAME = 'onCarChange';

export interface onCarChange {
  [ON_CAR_CHANGE_FUNCTION_NAME](newCar: Car, oldCar: Car): void;
}

export class VueCarWatcher extends Vue {
  @Prop() private car!: Car;

  @Watch('car', {deep: true,})
  private carWatcher(newCar: Car, oldCar: Car) {
    const carHandler = (this as any)[ON_CAR_CHANGE_FUNCTION_NAME] as (((newCar: Car, oldCar: Car) => void) | undefined);
    if(carHandler && typeof carHandler === 'function') {
      carHandler(newCar, oldCar);
    }
  }
}
