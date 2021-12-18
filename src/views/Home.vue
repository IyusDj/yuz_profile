<template>
	<Navbar />
	<div class="home">
		<div class="container">
			<div class="max-width">
				<div class="home-content" id="home">
					<div class="text-1">My name is</div>
					<div class="text-2">Iyus Djaya R</div>
					<div class="text-3">
						And I'm a <span class="typing">Full Stack Web Developer</span>
					</div>
					<a href="#">Hire Me</a>
				</div>
			</div>
		</div>
	</div>
	<About />
	<Skill />
	<Contact />
	<Footer />
</template>

<script>
import Navbar from "/src/components/Navbar.vue";
import Footer from "/src/components/Footer.vue";
import About from "./About.vue";
import Skill from "./Skill.vue";
import Contact from "./Contact.vue";

export default {
	name: "Home",
	components: {
		Navbar,
		Footer,
		About,
		Skill,
		Contact,
	},
};
</script>

<style scoped>
.home {
	display: flex;
	/* padding: 100px 0; */
	/* background: url("images/banner.jpg") no-repeat center; */
	background: black;
	height: 90vh;
	color: #fff;
	min-height: 500px;
	background-size: cover;
	/* background-attachment: fixed; */
	font-family: "Ubuntu", sans-serif;
	text-align: left;
}
.home .max-width {
	margin: auto 0 auto;
}
.home .home-content {
	/* background-color: grey; */
	padding-top: 100px;
	height: 80vh;
}
.home .home-content .text-1 {
	font-size: 27px;
	margin-left: -3px;
}
.home .home-content .text-2 {
	font-size: 55px;
	font-weight: 600;
	margin-left: -3px;
}
.home .home-content .text-3 {
	font-size: 30px;
	margin: 5px 0;
}
.home .home-content .text-3 span {
	/* color: crimson; */
	color: green;
	font-weight: 500;
}
.home .home-content a {
	display: inline-block;
	/* background: crimson; */
	/* background: green; */
	color: green;
	font-size: 25px;
	text-decoration: none;

	padding: 12px 36px;
	margin-top: 60px;
	font-weight: 400;
	border-radius: 6px;
	/* border: 2px solid crimson; */
	border: 2px solid green;
	transition: all 0.3s ease;
}
.home .home-content a:hover {
	/* color: crimson; */
	color: white;
	background: green;
}
</style>
