<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">PropertiesProperty</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a to="/" class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a to="/add" class="nav-link" href="/add">Add address</a>
        </li>
        <li class="nav-item">
          <a v-on:click="logout" class="nav-link" href="#">Log Out</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
</template>
<script>
export default {
        name:'Header',
        methods:{
            logout()
            {
                localStorage.clear();
                this.$router.push({name:'LogIn'})
            }
        }
    }
</script>