<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.logo{
    width: 200px;
}

.Register input, .LogIn input, .add input{
    width: 300px;
    height:40px;
    padding-left:20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid lightslategray;
    border-radius: 25px;
}

.Register button, .LogIn button, .add button{
    width: 320px;
    height:40px;
    padding-left:20px;
    cursor: pointer;
    background-color: aqua;
    color: #000;
    border-radius: 25px;
    font-size: 20px;
    font-weight: bold;
}

body {
  background-image: url("background.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.LogIn{
  margin-top: 110px;
}

.Register{
  margin-top: 110px;
}
</style>