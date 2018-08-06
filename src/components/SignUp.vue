<template>
  <div>
    <h1>Let's create a new account!</h1>
    <input type="text" placeholder="Email"><br>
    <input type="password" placeholder="Password"><br>
    <button>Sign Up</button>
    <p>Already have an account? <router-link to="/login">sign in</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'signUp',
  data: function() {
    return {}
  },
  methods: {}
}
</script>
