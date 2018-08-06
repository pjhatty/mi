<template>
  <div class="contact">
    <h1>Contact</h1>
    <h3>Have any questions? Let us know.</h3>

    <div class="tc pa4 center">
    <form action="https://formspree.io/pjhattster@gmail.com" method="POST">

      <label for="name" class="f6 b db mb2 pt2">Name:</label>
      <input type="text" id="name-box" name="name" class="border-box db center hover-black w-100 measure ba b--black-20 pa2 br2 mb2" aria-describedby="comment-desc" required></input>

      <label for="email" class="f6 b db mb2 pt2">Email:</label>
      <input type="email" id="email-box" name="email" class="border-box db center hover-black w-100 measure ba b--black-20 pa2 br2 mb2" aria-describedby="comment-desc required"></input>

      <label for="message" class="f6 b db mb2 pt2">Message:</label>
      <textarea id="message-box" name="message" class="border-box db center hover-black w-100 measure ba b--black-20 pa2 br2 mb2" aria-describedby="comment-desc" required></textarea>

      <input type="submit" value="Send" class="f6 link dim bg-navy ma2 br1 ba b--white ph3 pv2 mb2 dib white"></a>
    </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>
