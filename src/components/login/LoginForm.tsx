import { defineComponent } from 'vue';
import s from './LoginForm.module.scss';

export const LoginForm = defineComponent({
  setup: (props, context) => {
    return () => (
      <form class={s.wrapper}>
        <view class={s.inputWrapper}>
          <input
            class={s.emailInput}
            type='text'
            placeholder='请输入邮箱地址'
          />
        </view>

        <view class={s.inputWrapper}>
          <input class={s.evcInput} type='text' placeholder='请输入验证码' />
          <button>获取验证码</button>
        </view>
        <button>登陆</button>
      </form>
    );
  },
});

export default LoginForm;
