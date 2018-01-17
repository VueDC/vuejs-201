<template>
	<div class="sequence">
		<h3 class="sequence__title">{{ sequence.title }}</h3>
		<ul>
			<li v-for="pose in sequence.poses">
				<a
					href="#"
					v-on:click.prevent="poseClicked(pose)"
				>
					<img
						class="icon"
						v-bind:src="pose.media.icon"
						v-bind:title="pose.name.english"
						v-bind:alt="pose.name.english"
					>
					<h4>{{ pose.name.english }}</h4>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
import Store from '../model/Store'
export default {
	name: 'sequence',
	data() {
		return {}
	},
	props: {
		sequence: {
			type: Object
		}
	},
	methods: {
		poseClicked(pose) {
			this.$emit('pose-clicked', pose)
		}
	}
}
</script>
