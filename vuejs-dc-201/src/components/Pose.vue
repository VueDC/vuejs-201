<template>
	<div class="modal" v-on:click="closeClicked">
		<div class="modal__content" v-on:click.stop="modalClicked">
			<div class="modal__header">
				<h4>{{ pose.name.english }} ({{ pose.name.sanskrit }})</h4>
				<button type="button" class="close" v-on:click.prevent="closeClicked">X</button>
			</div>
			<div class="modal__body">
				<img class="icon" v-bind:src="pose.media.icon" v-bind:alt="pose.name.english">
				<p class="pg-item__type">Types: {{ pose.types.join(', ') }}</p>
				<p class="pg-item__experience">Experience Level: {{ pose.experience }}</p>
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
		closeClicked(evt) {
			this.$emit('pose-closed')
		},
		modalClicked(evt) {}
	}
}
</script>
