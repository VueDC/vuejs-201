<template>
	<section>
		<ul>
			<sequence
				v-for="sequence in sequences"
				v-bind:sequence="sequence"
				v-bind:key="sequence.id"
				v-on:pose-clicked="poseClicked"
			>
				{{ sequence }}
			</sequence>
		</ul>
	</section>
</template>

<script>
import Store from '../model/Store'
import Sequence from './Sequence'
export default {
	name: 'sequences',
	components: {
		Sequence
	},
	data() {
		return {
			sequences: Store.sequences
		}
	},
	methods: {
		poseClicked(pose) {
			this.$emit('pose-clicked', pose)
		}
	}
}
</script>
