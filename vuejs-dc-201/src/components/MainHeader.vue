<template>
	<header class="main-header">
		<h1 class="logo">Pose Ninja</h1>
		<nav>
			<ul class="nav__list">
				<li class="nav__item">
					<a class="nav__link"
						href="#"
						v-on:click.prevent="menuClicked('poses')"
						v-bind:class="selectedTab === 'poses' ? 'is-active' : ''"
					>
						Poses
					</a>
				</li>
				<li class="nav__item">
					<a class="nav__link"
						href="#"
						v-on:click.prevent="menuClicked('sequences')"
						v-bind:class="selectedTab === 'sequences' ? 'is-active' : ''"
					>
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
		menuClicked(menuItem) {
			this.$emit('menu-changed', menuItem)
		}
	}
}
</script>
