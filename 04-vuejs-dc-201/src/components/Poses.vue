<template>
	<section>
		<poses-filter
			v-on:search-changed="searchChanged"
		>
		</poses-filter>
		<poses-grid
			v-bind:poses="poses"
			v-bind:keyword-search="keywordSearch"
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
			keywordSearch: '',
			poses: Store.poses
		}
	},
	components: {
		PosesFilter,
		PosesGrid
	},
	methods: {
		searchChanged(evt) {
			this.$data.keywordSearch = evt.target.value
		},
		poseClicked(pose) {
			this.$emit('pose-clicked', pose)
		}
	}
}
</script>
