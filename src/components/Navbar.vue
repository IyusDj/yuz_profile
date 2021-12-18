<template>
	<!-- Navbar Section Begin -->
	<nav class="navbar navbar-expand-lg">
		<div class="container nav-con">
			<router-link link to="/" class="navbar-brand"
				>Yuz <span>Dj</span></router-link
			>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mb-2 mb-lg-0">
					<li class="nav-item">
						<router-link link to="/" class="nav-link">Home</router-link>
					</li>
					<li class="nav-item">
						<a href="/#about" class="nav-link">About</a>
						<!-- <router-link link to="/#about" class="nav-link">About</router-link> -->
					</li>
					<li class="nav-item">
						<a href="/#skills" class="nav-link">Skills</a>
						<!-- <router-link link to="/#skill" class="nav-link">Skill</router-link> -->
					</li>
					<li class="nav-item">
						<router-link link to="/portfolio" class="nav-link"
							>Portfolio</router-link
						>
					</li>
					<li class="nav-item">
						<a href="/#contact" class="nav-link">Contact</a>
						<!-- <router-link link to="/#contact" class="nav-link"
							>Contact</router-link -->
					</li>
				</ul>
			</div>
		</div>
	</nav>
	<!-- Navbar End -->
</template>

<script>
export default {
	name: "Navbar",
};
</script>

<style scoped>
.navbar {
	background: black;
}

.nav .nav-con {
	display: flex;
	justify-content: end;
}

/* BRAND */
.navbar-brand {
	color: #fff;
	font-size: 35px;
	font-weight: 600;
	transition: 0.4s ease;
}
.navbar-brand:hover {
	font-size: 45px;
	box-shadow: 0px 0px 10px rgba(red, green, blue, 1);
}
.navbar-brand span {
	/* color: crimson; */
	color: rgb(8, 189, 8);
	transition: all 0.3s ease;
}

/* MENU LIST */
.collapse {
	/* background: grey; */
}
.navbar-nav {
	/* background: green; */
	margin-left: 50%;
}
.navbar-nav .nav-item {
	font-size: 18px;
	font-weight: 500;
	margin-left: 25px;
	transition: 0.3s ease;
}
.navbar-nav .nav-item:hover {
	color: rgb(32, 0, 128);
	/* font-size: 19px; */
}
.navbar-nav .nav-item .nav-link {
	color: #fff;
}
.navbar-nav .nav-item .nav-link:hover {
	color: rgb(0, 206, 7);
}
.navbar-nav .nav-item .nav-link::after {
	position: absolute;
	content: "";
	background: #fff;
	width: 100%;
	height: 50px;
	left: 0;
	border-radius: 50px;
	transform: scaleY(0);
	z-index: -1;
	transition: transform 0.3s ease;
}
.navbar-nav .nav-item .nav-link:hover::after {
	transform: scaleY(1);
}
</style>
