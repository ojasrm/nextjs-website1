import React from "react";
import styled from "styled-components";

const FooterSection = styled.div`
	height: 60px;
	background: #000;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Footer = () => {
	return (
		<FooterSection>
			<p>All copyrights reserved @Ojas Mahajan</p>
		</FooterSection>
	);
};

export default Footer;
