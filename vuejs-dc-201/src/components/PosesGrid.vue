<template>
	<ul class="poses-grid">
		<li v-for="pose in sorted"
			v-if="filterPoses(pose, keywordSearch, selectedType, selectedExperience)"
		>
			<a href="#"
				class="poses-grid__item"
				v-on:click.prevent="poseClicked(pose)"
			>
				
				<img
					class="pg-item__icon"
					v-bind:src="pose.media.icon"
					v-bind:alt="pose.name.english"
				/>

				<p class="pg-item__label">{{ pose.name.english }}</p>
			</a>
		</li>
	</ul>
</template>

<script>
export default {
	name: 'poses-grid',
	data() {
		return {}
	},
	props: {
		'poses': {
			type: Array
		},
		'keyword-search': {
			type: String
		},
		'selected-type': {
			type: String
		},
		'selected-experience': {
			type: String
		},
		'selected-sort': {
			type: Number
		}
	},
	computed: {
		sorted() {
			let sortAZ = (a, b) => {
				if (a.name.english < b.name.english) return -1
				if (a.name.english > b.name.english) return 1
				return 0
			}
			let sortZA = (a, b) => {
				if (a.name.english < b.name.english) return 1
				if (a.name.english > b.name.english) return -1
				return 0
			}
			if (this.selectedSort === 1) {
				return this.poses.sort(sortZA)
			} else {
				return this.poses.sort(sortAZ)
			}
		}
	},
	methods: {
		filterPoses(pose, keywordSearch, selectedType, selectedExperience) {
			let keywordSearchRegEx = RegExp(keywordSearch, 'gi')
			return (
				(keywordSearchRegEx.test(pose.name.english) || keywordSearch === '') &&
				(pose.typesByKey.hasOwnProperty(selectedType) || selectedType === 'all') &&
				(pose.experience === selectedExperience || selectedExperience === 'all')
			)
		},
		poseClicked(pose) {
			this.$emit('pose-clicked', pose)
		}
	}
}
</script>
