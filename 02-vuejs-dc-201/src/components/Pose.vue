<template>
	<div class="modal">
		<div class="modal__content">
			<div class="modal__header">
				<h4>{{ pose.name.english }}</h4>
				<button type="button" class="close">X</button>
			</div>
			<div class="modal__body">
				<img class="icon">
				<p class="pg-item__type">Types: TYPES</p>
				<p class="pg-item__experience">Experience Level: EXPERIENCE</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'pose',
	data() {
		return {}
	},
	props: {
		pose: {
			type: Object
		}
	},
	methods: {
	}
}
</script>

<style scoped>

</style>