<template>
	<!-- <Navbar /> -->
	<div class="container my-5 about" id="about">
		<div class="max-width">
			<h2 class="title">About</h2>
			<div class="about-content">
				<div class="column left">
					<img src="./assets/logo.png" alt="profile1" />
				</div>
				<div class="column right">
					<div class="text">
						I'm Yuz Dj and I'm a <span class="typing-2"></span>
					</div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut
						voluptatum eveniet doloremque autem excepturi eaque, sit laboriosam
						voluptatem nisi delectus. Facere explicabo hic minus accusamus alias
						fuga nihil dolorum quae. Explicabo illo unde, odio consequatur ipsam
						possimus veritatis, placeat, ab molestiae velit inventore
						exercitationem consequuntur blanditiis omnis beatae. Dolor iste
						excepturi ratione soluta quas culpa voluptatum repudiandae harum
						non.
					</p>
					<a href="#">Download CV</a>
				</div>
			</div>
		</div>
	</div>
	<!-- <Footer /> -->
</template>

<script>
import Navbar from "/src/components/Navbar.vue";
import Footer from "/src/components/Footer.vue";

export default {
	name: "About",
	components: {
		Navbar,
		Footer,
	},
};
</script>

<style scoped>
.about {
	padding: 100px 0;
}
.max-width {
	max-width: 1300px;
	padding: 0 80px;
	margin: auto;
}

.about .title {
	position: relative;
	text-align: center;
	font-size: 40px;
	font-weight: 500;
	margin-bottom: 60px;
	padding-bottom: 20px;
	font-family: "Ubuntu", sans-serif;
}
.about .title::before {
	content: "";
	position: absolute;
	bottom: 0px;
	left: 50%;
	width: 180px;
	height: 3px;
	background: #111;
	transform: translateX(-50%);
}
.about .title::after {
	position: absolute;
	bottom: -8px;
	left: 50%;
	font-size: 20px;
	/* color: crimson; */
	color: green;
	padding: 0 5px;
	background: #fff;
	transform: translateX(-50%);
}

.about .about-content {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
}

.about .title::after {
	content: "Yuz DJ";
}
.about .about-content .left {
	width: 45%;
}
.about .about-content .left img {
	height: 400px;
	width: 400px;
	object-fit: cover;
	border-radius: 6px;
}
.about .about-content .right {
	width: 55%;
}
.about .about-content .right .text {
	font-size: 25px;
	font-weight: 600;
	margin-bottom: 10px;
}
.about .about-content .right .text span {
	/* color: crimson; */
	color: green;
}
.about .about-content .right p {
	text-align: justify;
}
.about .about-content .right a {
	display: inline-block;
	/* background: crimson; */
	background: green;
	color: #fff;
	font-size: 20px;
	font-weight: 500;
	padding: 10px 30px;
	margin-top: 20px;
	border-radius: 6px;
	/* border: 2px solid crimson; */
	border: 2px solid green;
	transition: all 0.3s ease;
}
.about .about-content .right a:hover {
	/* color: crimson */
	color: green;
	background: none;
}
</style>
