import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css"
import me from '../../assets/img/aboutme.jpg'
import CV from '../../assets/file/CV.pdf'
import classNames from 'classnames'
export const About = ({ isDarkMode }) => {
    return (
        <div className={classNames("about", { 'aboutDark': isDarkMode })}>
            <Container>
                <Row className="align-items-start">
                    <Col xs={12} md={6} xl={6}>
                        <div className="">
                            <h5 id="aboutme" className="aboutme_section">About Me</h5>
                            <h2 className="aboutme_title">Hello! I'm Viviana Fajardo</h2>
                            <p className="aboutme_text">
                                A frontend developer with a computer engineer degree, I have +1 years of experience working in the field.
                                I am proficient in HTML, CSS, and JavaScript, utilizing frameworks such as React to build dynamic and
                                responsive web applications. With a keen eye for detail and a passion for creating user-centric designs,
                                I strive to continuously expand my knowledge and stay up-to-date with the latest industry trends.
                            </p>
                            <a className="aboutme_button" download href={CV}>Download CV</a>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={6}>
                        <div >
                            <img src={me} alt="Me" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}