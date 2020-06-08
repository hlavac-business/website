import React from 'react'

import { useViewport} from '../../utils/useViewport'
import "./styles.scss"

export const Home = () => {
    const { isMobile } = useViewport();

    return (
        <>
            <div className="container">
                <div className="mainBox">
                    <div data-aos="fade-in" data-aos-duration="1000">
                        <h1>We build the future of your business<span>.</span></h1>
                    </div>
                    <div className="sub" data-aos="fade-right">Web and Mobile Apps for Innovative, Transforming & Inspiring solutions.</div>
                </div>
                {!isMobile && 
                    <div className="bottom visible">
                    <div className="scroll" data-aos="fade-up" data-aos-delay="1000" data-aos-offset="-100">
                        <span>v</span>
                    </div>
                </div>}
                <div className="bg bg--background"></div>
            </div>

            <div className="white about">
                <div className="container">
                    <div className="about-wrapper">
                        <h2 data-aos="fade-right">What do we do?</h2>
                        <div className="text" data-aos="fade-left">
                            <p className="lead">We make web apps, mobile apps. We build brands, services and platforms.</p>
                            <p className="lead">
                                We offers service and development of released applications in their production environment. We provide IT
                                consulting, JavaScript development and new framework issues.
                            </p>
                        </div>
                    </div>
                    <div className="icons">
                        <img src="icons.svg" alt=""/>
                    </div>
                </div>
                {!isMobile && <div className="bg" />}
            </div>

            <div className="stack">
                <div className="container">
                    <h2 data-aos="fade-up">TechStack</h2>
                    <ul className="list">
                        <li data-aos="fade-up">10+ years of development experience building fullstack products from scratch.</li>
                        <li data-aos="fade-up">Developing and integrating APIs, working with a variety of databases and clould platforms.</li>
                        <li data-aos="fade-up">Developing iOs, Android, PWA applications</li>
                    </ul>

                    <div className="stack_inner" data-aos="fade-up" data-aos-delay="500">
                        <div className="item">
                            <svg
                                width="30px"
                                height="26px"
                                viewBox="0 0 30 26"
                                version="1.1"
                            >
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g transform="translate(-206.000000, -374.000000)" fill="#FFFFFE">
                                        <g transform="translate(152.000000, 368.000000)">
                                            <path
                                                d="M83.7204216,18.5396482 L77.7294216,13.6966482 C77.3354216,13.3126482 76.6964216,13.3126482 76.3034216,13.6966482 C75.9094216,14.0806482 75.9094216,14.7026482 76.3034216,15.0876482 L81.4944216,19.2846482 L76.3034216,23.4826482 C75.9094216,23.8656482 75.9094216,24.4886482 76.3034216,24.8726482 C76.6964216,25.2576482 77.3354216,25.2576482 77.7294216,24.8726482 L83.7204216,20.0296482 C83.9304216,19.8246482 84.0194216,19.5526482 84.0054216,19.2846482 C84.0194216,19.0166482 83.9304216,18.7436482 83.7204216,18.5396482 L83.7204216,18.5396482 Z M61.7034216,23.4816482 L56.5124216,19.2846482 L61.7034216,15.0876482 C62.0974216,14.7026482 62.0974216,14.0796482 61.7034216,13.6966482 C61.3104216,13.3116482 60.6714216,13.3116482 60.2774216,13.6966482 L54.2864216,18.5396482 C54.0764216,18.7436482 53.9874216,19.0166482 54.0014216,19.2846482 C53.9874216,19.5526482 54.0764216,19.8246482 54.2864216,20.0296482 L60.2774216,24.8726482 C60.6714216,25.2576482 61.3104216,25.2576482 61.7034216,24.8726482 C62.0974216,24.4886482 62.0974216,23.8656482 61.7034216,23.4816482 L61.7034216,23.4816482 Z M75.9634216,6.13164822 C75.4844216,5.86064822 74.8734216,6.02164822 74.5974216,6.48964822 L62.0974216,30.5766482 C61.8204216,31.0456482 61.9354216,31.7626482 62.4634216,31.9156482 C63.1084216,32.1026482 63.5534216,32.0266482 63.8294216,31.5576482 L76.3294216,7.46964822 C76.6054216,7.00064822 76.4414216,6.40264822 75.9634216,6.13164822 L75.9634216,6.13164822 Z"
                                                id="Fill-99"
                                            ></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <h3>Frameworks</h3>
                            <div className="stack_text">
                                Angular, VueX, NodeJs, KoaJS, ExpressJs, NestJS.
                            </div>
                        </div>
                        <div className="item">
                            <svg
                                width="32px"
                                height="32px"
                                viewBox="0 0 32 32"
                                version="1.1"

                            >
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g transform="translate(-497.000000, -368.000000)" fill="#FFFFFE">
                                        <g transform="translate(152.000000, 368.000000)">
                                            <path
                                                d="M354,4 C353.448,4 353,4.448 353,5 C353,5.553 353.448,6 354,6 C354.552,6 355,5.553 355,5 C355,4.448 354.552,4 354,4 L354,4 Z M358,4 C357.448,4 357,4.448 357,5 C357,5.553 357.448,6 358,6 C358.552,6 359,5.553 359,5 C359,4.448 358.552,4 358,4 L358,4 Z M375,8 L347,8 L347,4 C347,2.896 347.896,2 349,2 L373,2 C374.104,2 375,2.896 375,4 L375,8 L375,8 Z M375,28 C375,29.104 374.104,30 373,30 L349,30 C347.896,30 347,29.104 347,28 L347,10 L375,10 L375,28 L375,28 Z M373,0 L349,0 C346.791,0 345,1.791 345,4 L345,28 C345,30.209 346.791,32 349,32 L373,32 C375.209,32 377,30.209 377,28 L377,4 C377,1.791 375.209,0 373,0 L373,0 Z M350,4 C349.448,4 349,4.448 349,5 C349,5.553 349.448,6 350,6 C350.552,6 351,5.553 351,5 C351,4.448 350.552,4 350,4 L350,4 Z"
                                                id="Fill-109"
                                            ></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <h3>Databases</h3>
                            <div className="stack_text">
                                PostgreSQL, MySQL, Oracle, NoSQL, Redis, MongoDB, ElasticSearch.
                            </div>
                        </div>
                        <div className="item">
                            <svg
                                width="32px"
                                height="24px"
                                viewBox="0 0 32 24"
                                version="1.1"
                            >
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g transform="translate(-771.000000, -375.000000)" fill="#FFFFFE">
                                        <g transform="translate(152.000000, 368.000000)">
                                            <path
                                                d="M641,29 L627,29 C627,29 620.963,28.381 621,23 C621.021,19.964 623.688,17.183 627,17 C627,12.858 629.65,9 634,9 C637.433,9 639.723,11.096 640.538,14.014 C645.493,13.798 648.844,17.718 649,21 C649.21,25.413 644.601,29 641,29 L641,29 Z M642.067,12.028 C640.599,9.053 637.543,7 634,7 C629.251,7 625.37,10.682 625.033,15.345 C621.542,16.34 619,19.39 619,23 C619,27.26 622.54,30.731 627,30.977 C627,30.977 640.831,31 641,31 C646.247,31 651,26.747 651,21.5 C651,16.444 647.049,12.323 642.067,12.028 L642.067,12.028 Z"
                                                id="Fill-84"
                                            ></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <h3>Cloud</h3>
                            <div className="stack_text">
                                Google Apps, Google Suite, FireBase, AWS, Azure.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="white partners">
                <div className="container">
                    <h2>Our partners</h2>
                    <div>We've had the pleasure of working with</div>
                    <div className="partners_wrap">
                        <div className="partners_item">
                            <span className="partners_year">2014 - 2016</span>
                            <img src="dsoft.png" alt="dSoft logo" />
                        </div>
                        <div className="partners_item">
                            <span className="partners_year">2017</span>
                            <img src="wezeo.png" alt="" />
                        </div>
                        <div className="partners_item">
                            <span className="partners_year">2018</span>
                            <img src="danube.png" alt=""/>
                        </div>
                        <div className="partners_item active">
                            <span className="partners_year">2018 - today</span>
                            <img src="rise.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
