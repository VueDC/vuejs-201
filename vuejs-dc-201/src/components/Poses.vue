<template>
	<section>
		<poses-filter
			v-bind:types="types"
			v-bind:experiences="experiences"
			v-on:search-changed="searchChanged"
			v-on:type-changed="typeChanged"
			v-on:experience-changed="experienceChanged"
			v-on:sort-changed="sortChanged">
		</poses-filter>
		<poses-grid
			v-bind:poses="poses"
			v-bind:keyword-search="keywordSearch"
			v-bind:selected-type="selectedType"
			v-bind:selected-experience="selectedExperience"
			v-bind:selected-sort="selectedSort"
			v-on:pose-clicked="poseClicked">
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
			poses: Store.poses,
			types: Store.types,
			experiences: Store.experiences,
			keywordSearch: '',
			selectedType: 'all',
			selectedExperience: 'all',
			selectedSort: 0
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
		typeChanged(evt) {
			this.$data.selectedType = evt.target.value
		},
		experienceChanged(evt) {
			this.$data.selectedExperience = evt.target.value
		},
		sortChanged(evt) {
			this.$data.selectedSort = parseInt(evt.target.value)
		},
		poseClicked(pose) {
			this.$emit('pose-clicked', pose)
		}
	}
}
</script>
