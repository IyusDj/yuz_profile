<template>
	<!-- <Navbar /> -->
	<div class="container my-5 skills" id="skills">
		<div class="max-width">
			<h2 class="title">Skills</h2>
			<div class="skills-content">
				<div class="column left">
					<div class="text">My creative skills & experiences.</div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Dignissimos, ratione error est recusandae consequatur, iusto illum
						deleniti quidem impedit, quos quaerat quis minima sequi. Cupiditate
						recusandae laudantium esse, harum animi aspernatur quisquam et
						delectus ipsum quam alias quaerat? Quasi hic quidem illum. Ad
						delectus natus aut hic explicabo minus quod.
					</p>
					<a href="#">Read more</a>
				</div>
				<div class="column right">
					<div class="bars">
						<div class="info">
							<span>HTML</span>
							<span>90%</span>
						</div>
						<div class="line html"></div>
					</div>
					<div class="bars">
						<div class="info">
							<span>CSS</span>
							<span>85%</span>
						</div>
						<div class="line css"></div>
					</div>
					<div class="bars">
						<div class="info">
							<span>JavaScript</span>
							<span>80%</span>
						</div>
						<div class="line js"></div>
					</div>
					<div class="bars">
						<div class="info">
							<span>PHP</span>
							<span>80%</span>
						</div>
						<div class="line php"></div>
					</div>
					<div class="bars">
						<div class="info">
							<span>MySQL</span>
							<span>80%</span>
						</div>
						<div class="line mysql"></div>
					</div>
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
	name: "Skill",
	components: {
		Navbar,
		Footer,
	},
};
</script>

<style scoped>
.skills {
	background: rgba(225, 225, 225, 0);
	padding: 100px 0;
}

.max-width {
	max-width: 1300px;
	padding: 0 80px;
	margin: auto;
}

.skills .title {
	position: relative;
	text-align: center;
	font-size: 40px;
	font-weight: 500;
	margin-bottom: 60px;
	padding-bottom: 20px;
	font-family: "Ubuntu", sans-serif;
}
.skills .title::before {
	content: "";
	position: absolute;
	bottom: 0px;
	left: 50%;
	width: 180px;
	height: 3px;
	background: #111;
	transform: translateX(-50%);
}
.skills .title::after {
	position: absolute;
	bottom: -8px;
	left: 50%;
	font-size: 20px;
	color: crimson;
	/* color: blue; */
	padding: 0 5px;
	background: #fff;
	transform: translateX(-50%);
}
.skills .title::after {
	content: "Yuz Dj";
}

.skills .skills-content {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
}

.skills .skills-content .column {
	width: calc(50% - 30px);
}
.skills .skills-content .left .text {
	font-size: 20px;
	font-weight: 600;
	margin-bottom: 10px;
}
.skills .skills-content .left p {
	text-align: justify;
}
.skills .skills-content .left a {
	display: inline-block;
	background: crimson;
	color: #fff;
	font-size: 18px;
	font-weight: 500;
	padding: 8px 16px;
	margin-top: 20px;
	border-radius: 6px;
	border: 2px solid crimson;
	transition: all 0.3s ease;
}
.skills .skills-content .left a:hover {
	color: crimson;
	background: none;
}
.skills .skills-content .right .bars {
	margin-bottom: 15px;
}
.skills .skills-content .right .info {
	display: flex;
	margin-bottom: 5px;
	align-items: center;
	justify-content: space-between;
}
.skills .skills-content .right span {
	font-weight: 500;
	font-size: 18px;
}
.skills .skills-content .right .line {
	height: 5px;
	width: 100%;
	background: lightgrey;
	position: relative;
}
.skills .skills-content .right .line::before {
	content: "";
	position: absolute;
	height: 100%;
	left: 0;
	top: 0;
	background: crimson;
}
.skills-content .right .html::before {
	width: 90%;
}
.skills-content .right .css::before {
	width: 60%;
}
.skills-content .right .js::before {
	width: 80%;
}
.skills-content .right .php::before {
	width: 50%;
}
.skills-content .right .mysql::before {
	width: 70%;
}
</style>
