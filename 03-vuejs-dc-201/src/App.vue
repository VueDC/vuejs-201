<template>
	<div class="page-grid" v-on:keyup.27="poseClosed">
		<main-header 
			v-bind:selectedTab="selectedTab"
			v-on:menu-changed="menuChanged"
		/>
		<main>
			<poses
				v-if="selectedTab === 'poses'"
				v-on:pose-clicked="poseClicked"
			>
			</poses>

			<sequences
				v-if="selectedTab === 'sequences'"
				v-on:pose-clicked="poseClicked"
			>
			</sequences>
			<pose v-if="selectedPose.hasOwnProperty('id')"
				v-bind:pose="selectedPose"
				v-on:pose-closed="poseClosed">
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
			selectedPose: {},
			selectedTab: 'poses'
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
		menuChanged(menuItem) {
			this.$data.selectedTab = menuItem
		},
		poseClicked(pose) {
			this.$data.selectedPose = pose
		},
		poseClosed() {
			this.$data.selectedPose = {}
		}
	}
}
</script>
