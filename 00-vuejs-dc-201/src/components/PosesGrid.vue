<template>
	<ul class="poses-grid">
		<li>
			<a href="#" class="poses-grid__item">
				<img class="pg-item__icon" src="/dist/assets/icons/yoga-0.svg">
				<p class="pg-item__label">POSE NAME</p>
			</a>
		</li>
		<li>
			<a href="#" class="poses-grid__item">
				<img class="pg-item__icon" src="/dist/assets/icons/yoga-0.svg">
				<p class="pg-item__label">POSE NAME</p>
			</a>
		</li>
		<li>
			<a href="#" class="poses-grid__item">
				<img class="pg-item__icon" src="/dist/assets/icons/yoga-0.svg">
				<p class="pg-item__label">POSE NAME</p>
			</a>
		</li>
		<li>
			<a href="#" class="poses-grid__item">
				<img class="pg-item__icon" src="/dist/assets/icons/yoga-0.svg">
				<p class="pg-item__label">POSE NAME</p>
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
