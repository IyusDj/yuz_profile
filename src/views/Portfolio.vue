<template>
	<Navbar />
	<div class="container my-5" id="portfolio">
		<div class="portfolio-content">
			<div class="text-1">
				<h2>Halaman Portfolio</h2>
				<p>Masih dalam pengembangan.</p>
			</div>
		</div>
	</div>
	<Footer />
</template>

<script>
import Navbar from "/src/components/Navbar.vue";
import Footer from "/src/components/Footer.vue";

export default {
	name: "Portfolio",
	components: {
		Navbar,
		Footer,
	},
};
</script>
