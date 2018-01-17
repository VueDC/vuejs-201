<template>
	<section>
		<poses-filter>
		</poses-filter>
		<poses-grid
			v-bind:poses="poses"
			v-on:pose-clicked="poseClicked"
		>
		</poses-grid>
	</section>
</template>

<script>
import Store from '../model/Store'
import PosesGrid from './PosesGrid'
import PosesFilter from './PosesFilter'
export default {
	name: 'poses',
	data() {
		return {
			poses: Store.poses
		}
	},
	components: {
		PosesFilter,
		PosesGrid
	},
	methods: {
		poseClicked(pose) {
			this.$emit('pose-clicked', pose)
		}
	}
}
</script>
