<template>
    <div class="header">
      <div class="addressbox">
        <span>广州<i class="fa fa-angle-down fa-fw"></i></span>
      </div>
      <div class="searchbox">
        <div class="inputdiv">
          <i class="fa fa-search fa-lg"></i>
          <span>输入商家/品类/商圈</span>
        </div>
      </div>
      <div class="userinfo">
        <i class="fa fa-user fa-2x"></i>
        <span>我的</span>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'Search'
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
.header{
  display: flex;
  height: 102px;
  background-color: #06c1ae;
  .addressbox{
    width: 135px;
    color: white;
    span{
      display: block;
      height: 35px;
      line-height: 35px;
      font-size: 35px;
      text-align: center;
      margin-top: 35px;
    }
  }
  .searchbox{
    flex: 1;
    .inputdiv{
      height: 64px;
      background-color: rgba(0,0,0,.15);
      margin-top: 20px;
      border-radius: 8px;
      overflow: hidden;
      position: relative;
      .fa-search{
        color: white;
        display: block;
        margin-top: 20px;
        margin-left: 20px;
        width: 36px;
      }
      span{
        display: block;
        height: 64px;
        line-height: 64px;
        color: #68dbce;
        outline: none;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 65px;

      }

    }
  }
  .userinfo{
    width: 94px;
    i,span{
      display: block;
      text-align: center;
      color: white;
    }
    i{
      margin-top: 10px;
    }
    span{
      font-size: 24px;
    }
  }
}
</style>
