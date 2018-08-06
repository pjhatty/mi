<template>
  <div class="calendar ma4">
    <h1>Calendar</h1>
    <div class="g-cal pa1 center">
    <iframe src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=vri3gglk4bmrbp9drk1fsuhpcc%40group.calendar.google.com&amp;color=%236B3304&amp;ctz=America%2FChicago" style="border-width:0" width="100%" height="100%" frameborder="0" scrolling="yes"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calendar'
}
</script>

<style>

.g-cal {
  width: 90vw;
  height: 90vw;
  min-width: 400px;
  min-height: 400px;
}

</style>
