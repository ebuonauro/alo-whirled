<template>
  <div id="app">
    <nav class="navbar navbar-expand">
      <div class="container">
        <router-link to="/" class="navbar-brand col">Alo Whirled</router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>