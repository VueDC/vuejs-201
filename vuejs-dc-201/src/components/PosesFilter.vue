<template>
	<ul class="filter-bar">
		<li class="filter__item">Search:
			<input type="text" name="search" v-on:keyup="searchChanged" />
		</li>
		<li class="filter__item">Filter by Type:
			<select v-on:change="typeChanged">
				<option value="all">All</option>
				<option 
					v-for="type in types"
					v-bind:value="type"
				>
					{{ type }}
				</option>
			</select>
		</li>
		<li class="filter__item">Filter by Experience:
			<select v-on:change="experienceChanged">
				<option value="all">All</option>
				<option v-for="experience in experiences"
					v-bind:value="experience"
				>
					{{ experience }}
				</option>
			</select>
		</li>
		<li class="filter__item">Sort:
			<select v-on:change="sortChanged">
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
		},
		typeChanged(evt) {
			this.$emit('type-changed', evt)
		},
		experienceChanged(evt) {
			this.$emit('experience-changed', evt)
		},
		sortChanged(evt) {
			this.$emit('sort-changed', evt)
		}
	}
}
</script>
