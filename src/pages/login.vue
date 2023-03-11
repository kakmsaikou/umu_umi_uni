<template>
  <view class="content">
    <view class="bgCircle"/>
    <view class="mainContent">
      <NeroLogo class="neroLogo"/>
      
    </view>
  </view>
</template>

<script setup lang="ts">
  import NeroLogo from "../components/commons/NeroLogo";
</script>


<style lang="scss">
.content {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #f4f4f4;
  overflow: hidden;

  .bgCircle {
    position: absolute;
    width: 160vw;
    height: 160vw;
    background-color: #b36a64;
    border-radius: 50%;
    top: -295px;
    left: 50%;
    transform: translateX(-50%);
  }

  .mainContent {
    display: flex;
    flex-direction: column;
    align-items: center;

    .neroLogo {
      // 顶部稍微多留防止刘海屏遮挡
      padding-top: 4vh;
      padding-bottom: 12px;
    }
  }
}
</style>
