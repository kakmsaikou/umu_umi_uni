import { defineComponent } from 'vue';
import s from './NeroLogo.module.scss';
import nero from '@/assets/images/nero.png';

export const NeroLogo = defineComponent({
  setup: (props, context) => {
    return () => (
      <view class={s.wrapper}>
        <image class={s.nero} mode='widthFix' src={nero}/>
        <h1 class={s.subtitle}>　うむうむ！</h1>
      </view>
    );
  },
});

export default NeroLogo;
