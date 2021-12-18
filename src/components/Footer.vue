<template>
	<!-- Footer Section Begin -->
	<footer class="section-footer fixed-footer border-top">
		<div class="container pt-4 pb-4">{{ name }} | @ {{ year }} {{ dev }}</div>
	</footer>

	<!-- Footer End -->
</template>

<script>
export default {
	name: "Footer",
	data() {
		let d = new Date();
		return {
			name: "Yuz Dj",
			year: d.getFullYear(),
			dev: "All rights reserved.",
		};
	},
};
</script>

<style scoped></style>
