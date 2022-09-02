<template>
  <div>
    Logged in: {{ auth }}
    <br />
    <button @click="login">Login</button>
    <br />
    <NuxtLink to="/test">A page that errors</NuxtLink>
  </div>
</template>

<script setup>
const auth = useCookie('auth');
function login() {
  auth.value = 'user';
}
</script>
