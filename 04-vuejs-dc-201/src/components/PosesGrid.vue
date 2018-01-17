<template>
	<ul class="poses-grid">
		<li v-for="pose in poses"
			v-if="filterPoses(pose, keywordSearch)"
		>
			<a href="#" class="poses-grid__item"
				v-on:click="poseClicked(pose)"
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
	},
	methods: {
		filterPoses(pose, keywordSearch, selectedType) {
			let keywordSearchRegEx = RegExp(keywordSearch, 'gi')
			return (
				(keywordSearchRegEx.test(pose.name.english) || keywordSearch === '')
			)
		},
		poseClicked(pose) {
			this.$emit('pose-clicked', pose)
		}
	}
}
</script>
