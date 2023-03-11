<template>
  <view class="content">
    <view class="bgCircle"/>
    <view class="mainContent">
      <NeroLogo/>
      <LoginForm/>
    </view>
  </view>
</template>

<script setup lang="ts">
  import NeroLogo from "@/components/commons/NeroLogo";
  import LoginForm from "@/components/login/LoginForm";
</script>


<style lang="scss">
.content {
  height: 100vh;
  background-color: #f4f4f4;

  .bgCircle {
    position: absolute;
    width: 160vw;
    height: 160vw;
    background-color: #b36a64;
    border-radius: 50%;
	top: -35%;
    left: 50%;
    transform: translateX(-50%);
  }

  .mainContent {
    display: flex;
    flex-direction: column;
  }
}
</style>
