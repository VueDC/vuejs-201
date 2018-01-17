<template>
	<div class="page-grid">
		<main-header />
		<main>
			<poses v-on:pose-clicked="poseClicked">
			</poses>
			<pose v-if="selectedPose.hasOwnProperty('id')"
				v-bind:pose="selectedPose">
			</pose>
		</main>
		<main-footer />
	</div>
</template>

<script>
import MainHeader from './components/MainHeader'
import MainFooter from './components/MainFooter'
import Store from './model/Store'
import Poses from './components/Poses'
import Sequences from './components/Sequences'
import Pose from './components/Pose'

export default {
	name: 'app',
	data() {
		return {
			selectedPose: {}
		}
	},
	components: {
		Poses,
		Sequences,
		Pose,
		MainHeader,
		MainFooter
	},
	methods: {
		poseClicked(pose) {
			this.$data.selectedPose = pose
		}
	}
}
</script>
