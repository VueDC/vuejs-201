<template>
	<ul class="filter-bar">
		<li class="filter__item">Search:
			<input type="text" name="search" v-on:keyup="searchChanged" />
		</li>
		<li class="filter__item">Filter by Type:
			<select>
				<option value="all">All</option>
				<option value="typeA">
					TYPE A
				</option>
				<option value="typeB">
					TYPE B
				</option>
			</select>
		</li>
		<li class="filter__item">Filter by Experience:
			<select>
				<option value="all">All</option>
				<option value="experienceA">
					EXPERIENCE A
				</option>
				<option value="experienceB">
					EXPERIENCE B
				</option>			</select>
		</li>
		<li class="filter__item">Sort:
			<select>
				<option value="0">A-Z</option>
				<option value="1">Z-A</option>
			</select>
		</li>
	</ul>
</template>

<script>
export default {
	name: 'poses-filter',
	data() {
		return {}
	},
	props: {
		types: {
			type: Array
		},
		experiences: {
			type: Array
		}
	},
	methods: {
		searchChanged(evt) {
			this.$emit('search-changed', evt)
		}
	}
}
</script>
