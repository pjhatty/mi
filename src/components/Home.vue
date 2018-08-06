<template>
	<div class="home-screen">
		<div class="large-quote"></div>
		<div class="events">
			<div v-for="poster in posters" :key="poster.id" class="fl w-100">
				<div v-if="!oddPoster(poster, posters)" class="fl w-50 poster cover" :style="{ 'background-image': 'url(' + poster.image + ')' }"></div>
				<div class="fl w-50">
					<div class="text-card tl ma5 helvetica">
						<h1 class="f2 lh-copy measure">{{poster.title}}</h1>
						<h2 class="f4 1h-copy measure">{{poster.subtitle}}</h2>
					</div>
				</div>
				<div v-if="oddPoster(poster, posters)" class="fl w-50 poster cover" :style="{ 'background-image': 'url(' + poster.image + ')' }"></div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
				currentPoster: 0,
        posters: [
          {
            title: 'Knights Winter Trip!',
						subtitle: 'The coolest camp ever!',
            image: require('../assets/wt1.jpg')
          },
          {
            title: 'Work Day',
						subtitle: 'Show up 10am with a lunch. All members are required to attend',
            image: require('../assets/shed.jpg')
          },
          {
            title: 'Seminary Trip',
						subtitle: 'Come with Fr. Kopec as he braves the stone-tiles halls.',
            image: require('../assets/seminary.jpg')
          },
          {
            title: 'Poor DJ',
						subtitle: 'That Just Sucks!',
            image: require('../assets/dj.jpg')
          }
        ]
      }
    },
		methods: {
			oddPoster: function(poster, posters) {
				var id = posters.indexOf(poster)
				return (id % 2 !== 0)
			}
		}
  }
</script>



<style>

  .poster {
      height: 42vw;
      background-repeat: no-repeat;
			background-position: center;
  }

</style>
