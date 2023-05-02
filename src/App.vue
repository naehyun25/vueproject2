<template>
  <nav class="navbar bg-light justify-content-start">
    <!-- a태그 대신 router-link사용 -->
    <router-link class="navbar-brand"  to="/">
      <img src="./assets/logo.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
    </router-link>
    <ul class="nav nav-pills justify-content-center">
      <li class="nav-item">
        <router-link  ter-link class="nav-link"  to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link"  to="/test">Test</router-link>
      </li>
    </ul>
</nav>
<div class="container">
  <router-view/>
</div>
<footer>
<div class="container-fluid">Footer 입니다.</div>
</footer>  

</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;500;700;900&display=swap');
#app {
  font-family: 'Noto Sans KR', sans-serif, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
