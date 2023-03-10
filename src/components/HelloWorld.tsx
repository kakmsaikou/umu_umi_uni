import { defineComponent } from 'vue';
import s from './HelloWorld.module.scss';

export const HelloWorld = defineComponent({
  setup: (props, context) => {
    return () => <div>HelloWorld</div>;
  },
});

export default HelloWorld;