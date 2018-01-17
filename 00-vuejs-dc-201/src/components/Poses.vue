<template>
	<section>
		<poses-filter>
		</poses-filter>
		<poses-grid>
		</poses-grid>
	</section>
</template>

<script>
import Store from '../model/Store'
import PosesGrid from './PosesGrid'
import PosesFilter from './PosesFilter'
export default {
	name: 'poses',
	data() {
		return {
		}
	},
	components: {
		PosesFilter,
		PosesGrid
	},
	methods: {
	}
}
</script>
