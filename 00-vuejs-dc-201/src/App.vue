<template>
	<div class="page-grid">
		<main-header />
		<main>
			<poses>
			</poses>
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
	}
}
</script>
