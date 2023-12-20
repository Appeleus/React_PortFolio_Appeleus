import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './resume.css';
import { Footer } from './footer'

import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'bootstrap/dist/css/bootstrap.min.css';



const Resume = () => {
    const location = useLocation();
    const isResume = location.pathname === '/resume';

    const [colClass, setColClass] = useState('');

    const screenIsWide = () => (window.innerWidth > 845 ? 'col-5' : 'col-6');

    useEffect(() => {
        setColClass(screenIsWide());

        // Update class when the window is resized
        const handleResize = () => {
            setColClass(screenIsWide());
        };

        window.addEventListener('resize', handleResize);

        // Clean up the event listener when the component is unmounted
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (

        <div className="resume-page">
            <div className="container-fluid container-bg" style={{ paddingBottom: '10%' }}>
                <div className="col">
                    <div className="row">
                        <div className="col-6 main-col-padding">
                            <div className="col d-flex justify-content-center">
                                <img src="https://cdn.discordapp.com/avatars/300933528659427329/e760c0b62e3d874026381709310d2684.png?size=4096"
                                    alt="pfp" className="profile-image" />

                            </div>
                            <div className="rounded-corner"></div>
                            <div className="row rm-white-space banner-container d-none d-rsm-block">
                                <div className="col">
                                    <div className="header">
                                        PHANTAKORN SANGJINDA
                                    </div>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col">
                                    <span className="sub-header-bold">EDUCATION</span>
                                    <hr />
                                    <div className="row top-spacing">
                                        <div className="col">
                                            <ul>
                                                <li className="bold">Debsirin Nonthaburi School</li>
                                                2014 - 2019
                                                <li className="bold">King Mongkut's University of Technology North Bangkok</li>
                                                2020 - Present<br />
                                                <i className="bi bi-chevron-right"></i>College of Industrial Technology<br />
                                                &nbsp;&nbsp;<i className="bi bi-chevron-right"></i>Electronic Engineering Technology
                                                (Computer)
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="row ">
                                <div className="col">
                                    <span className="sub-header-bold">LANGUAGE</span>
                                    <hr />
                                    <div className="row top-spacing">
                                        <div className="col">
                                            <ul className="hide-bullet-point rm-white-space">
                                                <li className="bold">THAI : Native</li>
                                                <li><span className="bold">ENGLISH :</span> Proficient</li>
                                                <li className="two-tab"> <i className="bi bi-chevron-right"></i>
                                                    (<span className="bold">TOEIC 810</span> | Test Date : Feb 1, 2020)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-6 main-col-padding">
                            <div className="row rm-white-space banner-container d-rsm-none d-rsm-block">
                                <div className="col">
                                    <div className="header">
                                        PHANTAKORN SANGJINDA
                                    </div>
                                </div>
                            </div>

                            <div className="row" style={{ whiteSpace: 'pre' }}>
                                <div className="col">
                                    <span className="sub-header-bold">DETAILS</span>
                                    <hr />
                                    <div className="row top-spacing">
                                        <div className="col-3 bold">
                                            <ul className="hide-bullet-point rm-white-space">
                                                <li>Nickname</li>
                                                <li>Date of Birth</li>
                                                <li>Age</li>
                                            </ul>
                                        </div>
                                        <div className="col-3">
                                            <ul className="hide-bullet-point rm-white-space">
                                                <li>: Got</li>
                                                <li>: 1 April 2002</li>
                                                <li>: 21</li>
                                            </ul>
                                        </div>
                                        <div className="col-1 bold">
                                            <ul className="hide-bullet-point rm-white-space">
                                                <li>MBTI</li>
                                            </ul>
                                        </div>
                                        <div className="col-5">
                                            <ul className="hide-bullet-point rm-white-space">
                                                <li>: INFP</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row no-text-break">
                                <div className="col-6">
                                    <div className="row">
                                        <div className="col">
                                            <span className="sub-header-bold">CONTACT</span>
                                            <hr />
                                        </div>
                                    </div>
                                    <div className="row top-spacing">
                                        <div className="col">
                                            <ul className="hide-bullet-point rm-white-space small-font">
                                                <li><i className="bi bi-envelope-fill pink"></i> gotkunglovely@outlook.co.th</li>
                                                <li><i className="bi bi-telephone-outbound-fill pink"></i> 099-165-0212</li>
                                                <li><i className="bi bi-github pink"></i> https://github.com/Appeleus</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-1 d-rsm-none d-rsm-block">
                                    <div className="row" style={{ minHeight: '3.5rem' }}>
                                    </div>
                                    <div className="row">
                                        <div className="col vertical-hr">
                                            <div className=""></div>
                                        </div>
                                    </div>
                                </div>
                                <div className={colClass}>
                                    <div className="row">
                                        <div className="col">
                                            <span className="sub-header-bold">SOCIAL</span>
                                            <hr />
                                        </div>
                                    </div>
                                    <div className="row top-spacing">
                                        <div className="col">
                                            <ul className="hide-bullet-point rm-white-space small-font">
                                                <li><img src={require('./asset/Resume/yt-logo.png')} alt="yt" width="20px" /> Tanoshii R1NK0</li>
                                                <li><img src={require('./asset/Resume/twitter-logo.png')} alt="twitter" width="20px" /> @TanoshiRinko</li>
                                                <li><img src={require('./asset/Resume/fb-logo.png')} alt="fb" width="20px" /> Apple Mentos</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <span className="sub-header-bold">ABOUT ME</span>

                                    <hr />
                                    <div className="row top-spacing">
                                        <div className="col">
                                            <p>&nbsp;&nbsp;I’m currently studying for a bachelor’s degree in Electronic Engineering -
                                                Computer. I’ve
                                                learned
                                                a variety of things throughout my years in this university, such as hardware, software
                                                development, computer networking and coding. But what really piqued my interest is the
                                                act of
                                                expressing creativity, to be able to bring thoughts into real life, and let people see
                                                your
                                                creation. It is such a fascinating process to me, and I hope I could continue it
                                                further.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <span className="sub-header-bold">EXPERIENCE</span>
                                    <hr />
                                    <div className="row top-spacing">
                                        <div className="col">
                                            <ul>
                                                <li className="bold">Designed a REST API for University student grading website</li>
                                                <i className="bi bi-chevron-right"></i> With APIary and Postman

                                                <li className="bold">Web application : Food community webboard Mini Project</li>
                                                <i className="bi bi-chevron-right"></i> Designed most of the website pages with Bootstrap 5.

                                                <li className="bold">Mobile App & Web app : Perforkid Childcare Application</li>
                                                <i className="bi bi-chevron-right"></i> Designed with Flutterflow for Mobile app.<br />
                                                And Bootstrap and Javascript for Web application.
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="row">
                        <div className="col-6 main-col-padding">

                            <div className="row">
                                <div className="col">
                                    <span className="sub-header-bold">SOFT SKILL</span>
                                    <hr />
                                    <div className="row top-spacing">
                                        <div className="col">
                                            <ul className="dash rm-white-space">
                                                <li>Very dedicated to work that can be made possible.</li>
                                                <li>Friendly towards everyone I meet.</li>
                                                <li>Very good emotional control.</li>
                                                <li>Always looking to learn new interesting things.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-6 main-col-padding">
                            <div className="row">
                                <div className="col">
                                    <span className="sub-header-bold">SKILL</span>
                                    <hr />
                                    <div className="row top-spacing">
                                        <div className="col-6">
                                            <ul className="dash rm-white-space">
                                                <span className="bold">Program</span>
                                                <li>Adobe Photoshop</li>
                                                <li>Adobe Premiere Pro</li>
                                                <li>Adobe After Effect</li>
                                                <li>Live2D Cubism</li>
                                                <li>Procreate app</li>
                                                <li>Visual Studio Code</li>
                                                <li>Canva</li>
                                            </ul>
                                        </div>
                                        <div className="col-6">
                                            <ul className="dash rm-white-space">
                                                <span className="bold">Computer Language</span>
                                                <li>HTML, CSS, PHP</li>
                                                <li>Javascript</li>
                                                <li>Python</li>
                                                <li>Java</li>
                                                <span className="bold">Framework</span>
                                                <li>Bootstrap 5</li>
                                                <li>React JS</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>




    );
};

export default Resume;