import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import cat from "../../assets/img/cat.png";
import 'animate.css';
import "./Banner.css";
import TrackVisibility from 'react-on-screen';
import classNames from 'classnames'
export const Banner = ({ isDarkMode }) => {
    return (
        <section className={classNames("banner", { 'bannerDark': isDarkMode })} id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h1>Welcome to my portfolio! </h1>
                                    <p>My name is Viviana and I'm a FrontEnd Developer.</p>
                                    <a className="aboutMeButton shake-top" href="#aboutme" >More About Me</a>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={cat} alt="Header Img" />
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}