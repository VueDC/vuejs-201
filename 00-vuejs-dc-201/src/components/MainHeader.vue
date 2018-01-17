<template>
	<header class="main-header">
		<h1 class="logo">Pose Ninja</h1>
		<nav>
			<ul class="nav__list">
				<li class="nav__item">
					<a class="nav__link" href="#">
						Poses
					</a>
				</li>
				<li class="nav__item">
					<a class="nav__link" href="#">
						Sequences
					</a>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script>
export default {
	name: 'main-header',
	props: {
		selectedTab: {
			type: String
		}
	},
	methods: {
	}
}
</script>
