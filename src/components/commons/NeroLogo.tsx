import { defineComponent } from 'vue';
import s from './NeroLogo.module.scss';
import nero from '@/assets/images/nero.png';

export const NeroLogo = defineComponent({
  setup: (props, context) => {
    return () => (
      <view class={s.wrapper}>
        <img class={s.nero} src={nero} alt='' />
        <view class={s.subtitle}>　うむうむ！</view>
      </view>
    );
  },
});

export default NeroLogo;
