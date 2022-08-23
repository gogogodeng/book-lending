<template>
  <div class="home">
    <div class="banner">
      <p>儿童图书借阅系统</p>
      <p>当前用户：xxxx， <span>退出登录</span></p>
    </div>
    <div class="grid">
      <div>开卡续费</div>
      <div>会员查询</div>
      <div>图书查询</div>
      <div>借阅办理</div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script></script>

<style lang="less" scoped>
.home {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
.banner {
  position: fixed;
  width: 100%;
  height: 50px;
  box-shadow: 0px -2px 10px 0px inset #aecfab;
  line-height: 35px;
  background: beige;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  padding: 5px 20px;
  span {
    color:red;
    font-size: 12px;
    cursor: pointer;
  }
}
.grid {
  display: grid;
  /* 声明列的宽度,数字3表示的重复3次，即有3列宽度为200px*/
  grid-template-columns: repeat(3, 300px);
  /* 声明行间距和列间距 */
  grid-gap: 20px;
  > div {
    border-radius: 10px;
    height: 150px;
    background: #f9f9f9;
    box-shadow: -1px -2px 1px 1px inset #e3e3e3;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    &:hover {
      opacity: 0.6;
      cursor: pointer;
    }
  }
}
</style>
