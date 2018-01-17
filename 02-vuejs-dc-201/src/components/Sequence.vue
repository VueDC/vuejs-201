<template>
	<div class="sequence">
		<h3 class="sequence__title">SEQUENCE TITLE</h3>
		<ul>
			<li>
				<a href="#">
					<img class="icon" src="/dist/assets/icons/yoga-0.svg">
					<h4>POSE NAME</h4>
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
	}
}
</script>
