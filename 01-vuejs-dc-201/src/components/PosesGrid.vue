<template>
	<ul class="poses-grid">
		<li v-for="pose in poses">
			<a href="#" class="poses-grid__item">
				
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
	}
}
</script>
