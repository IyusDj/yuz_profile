<template>
	<!-- <Navbar /> -->
	<div class="container my-5 contact" id="contact">
		<h2 class="title">Contact me</h2>
		<div class="contact-content">
			<div class="column left">
				<div class="text">Get in Touch</div>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
					harum corporis fuga corrupti. Doloribus quis soluta nesciunt veritatis
					vitae nobis?
				</p>
				<div class="icons">
					<div class="row">
						<i class="fas fa-user"></i>
						<div class="info">
							<div class="head">Name</div>
							<div class="sub-title">Yuz Dj</div>
						</div>
					</div>
					<div class="row">
						<i class="fas fa-map-marker-alt"></i>
						<div class="info">
							<div class="head">Address</div>
							<div class="sub-title">Cimahi, Indonesia</div>
						</div>
					</div>
					<div class="row">
						<i class="fas fa-envelope"></i>
						<div class="info">
							<div class="head">Email</div>
							<div class="sub-title">iyusdjruswana@gmail.com</div>
						</div>
					</div>
				</div>
			</div>
			<div class="column right">
				<div class="text">Message me</div>
				<form action="#">
					<div class="fields">
						<div class="field name">
							<input type="text" placeholder="Name" required />
						</div>
						<div class="field email">
							<input type="email" placeholder="Email" required />
						</div>
					</div>
					<div class="field">
						<input type="text" placeholder="Subject" required />
					</div>
					<div class="field textarea">
						<textarea
							cols="30"
							rows="10"
							placeholder="Message.."
							required
						></textarea>
					</div>
					<div class="button">
						<button type="submit">Send message</button>
					</div>
				</form>
			</div>
		</div>
	</div>
	<!-- <Footer /> -->
</template>

<script>
import Navbar from "/src/components/Navbar.vue";
import Footer from "/src/components/Footer.vue";

export default {
	name: "Contact",
	components: {
		Navbar,
		Footer,
	},
};
</script>

<style scoped>
.contact {
	padding: 100px 0;
}

.contact .title {
	position: relative;
	text-align: center;
	font-size: 40px;
	font-weight: 500;
	margin-bottom: 60px;
	padding-bottom: 20px;
	font-family: "Ubuntu", sans-serif;
}
.contact .title::before {
	content: "";
	position: absolute;
	bottom: 0px;
	left: 50%;
	width: 180px;
	height: 3px;
	background: #111;
	transform: translateX(-50%);
}
.contact .title::after {
	position: absolute;
	bottom: -8px;
	left: 50%;
	font-size: 20px;
	color: crimson;
	padding: 0 5px;
	background: #fff;
	transform: translateX(-50%);
}

.contact .contact-content {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
}

.contact .title::after {
	content: "Get in Touch";
}
.contact .contact-content .column {
	width: calc(50% - 30px);
}
.contact .contact-content .text {
	font-size: 20px;
	font-weight: 600;
	margin-bottom: 10px;
}
.contact .contact-content .left p {
	text-align: justify;
}
.contact .contact-content .left .icons {
	margin: 10px 0;
}
.contact .contact-content .row {
	display: flex;
	height: 65px;
	align-items: center;
}
.contact .contact-content .row .info {
	margin-left: 30px;
}
.contact .contact-content .row i {
	font-size: 25px;
	color: crimson;
}
.contact .contact-content .info .head {
	font-weight: 500;
}
.contact .contact-content .info .sub-title {
	color: #333;
}
.contact .right form .fields {
	display: flex;
}
.contact .right form .field,
.contact .right form .fields .field {
	height: 45px;
	width: 100%;
	margin-bottom: 15px;
}
.contact .right form .textarea {
	height: 80px;
	width: 100%;
}
.contact .right form .name {
	margin-right: 10px;
}
.contact .right form .email {
	margin-left: 10px;
}
.contact .right form .field input,
.contact .right form .textarea textarea {
	height: 100%;
	width: 100%;
	border: 1px solid lightgrey;
	border-radius: 6px;
	outline: none;
	padding: 0 15px;
	font-size: 17px;
	font-family: "Poppins", sans-serif;
	transition: all 0.3s ease;
}
.contact .right form .field input:focus,
.contact .right form .textarea textarea:focus {
	border-color: #b3b3b3;
}
.contact .right form .textarea textarea {
	padding-top: 10px;
	resize: none;
}
.contact .right form .button {
	height: 47px;
	width: 170px;
}
.contact .right form .button button {
	width: 100%;
	height: 100%;
	border: 2px solid crimson;
	background: crimson;
	color: #fff;
	outline: none;
	font-size: 20px;
	font-weight: 500;
	border-radius: 6px;
	cursor: pointer;
	transition: all 0.3s ease;
}
.contact .right form .button button:hover {
	color: crimson;
	background: none;
}
</style>
