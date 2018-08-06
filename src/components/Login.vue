<template>
  <div>
    <input type="text" placeholder="Email"><br>
    <input type="password" placeholder="Password"><br>
    <button @click="login">Login</button>
    <p>Don't have an account? Head over <router-link to="/sign-up">here</router-link> to get started</p>
  </div>
</template>

<script>
export default {
  name: 'login',
  data: function() {
    return {}
  },
  methods: {
    login: function() {
      this.$router.replace('admin')
    }
  }
}
</script>
