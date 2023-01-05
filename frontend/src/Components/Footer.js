import React from "react";
import { Link } from "react-router-dom";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
<div style={{MarginBottom:"100px", position:""}}>
<Box>
<h1 style={{ color: "white",
			textAlign: "center",
			marginTop: "-50px" }}>
	Plan-B Tuition Point

</h1>
<Container>
	<Row>
	<Column>
		<Heading>Admin side</Heading>
		<Link to={"/Admin"}>
		<FooterLink href="#">Admin Login</FooterLink>
		</Link>
		{/* <FooterLink href="#">Internships</FooterLink>
		<FooterLink href="#">Coding</FooterLink>
		<FooterLink href="#">Teaching</FooterLink> */}
	</Column>
	<Column>
		<Heading>About </Heading>
		<FooterLink href="#">Aim</FooterLink>
		<FooterLink href="#">Vision</FooterLink>
		<FooterLink href="#">About us</FooterLink>
	</Column>

	<Column>
		<Heading>Address</Heading>
		<FooterLink href="#">tuitionpoint@gmail.com</FooterLink>
		<FooterLink href="#">Jadoon plaza phase 2, Mandian, Aboottabad, Pakistan</FooterLink>
		<FooterLink href="#">+923461687409</FooterLink>
		
	</Column>
	<Column>
		<Heading>Social Media</Heading>
		<FooterLink href="#">
		<i className="fab fa-facebook-f">
			<span style={{ marginLeft: "10px" }}>
			Facebook
			</span>
		</i>
		</FooterLink>
		<FooterLink href="#">
		<i className="fab fa-instagram">
			<span style={{ marginLeft: "10px" }}>
			Instagram
			</span>
		</i>
		</FooterLink>
		<FooterLink href="#">
		<i className="fab fa-twitter">
			<span style={{ marginLeft: "10px" }}>
			Twitter
			</span>
		</i>
		</FooterLink>
		<FooterLink href="#">
		<i className="fab fa-youtube">
			<span style={{ marginLeft: "10px" }}>
			Youtube
			</span>
		</i>
		</FooterLink>
	</Column>
	</Row>
</Container>
</Box>
</div>
);
};
export default Footer;
