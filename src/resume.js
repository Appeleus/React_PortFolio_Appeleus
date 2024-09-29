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
    const [WideClass, setWideClass] = useState(false);


    const screenIsWide = () => (window.innerWidth > 843 ? 'col-5' : 'col-6');
    const resumeWidth = () => (window.innerWidth > 843 ? true : false);

    useEffect(() => {
        document.title = `Resume📑`;
        setColClass(screenIsWide());
        setWideClass(resumeWidth());

        // Update class when the window is resized
        const handleResize = () => {
            setColClass(screenIsWide());
            setWideClass(resumeWidth());
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
                <div className="col-12">
                    <div className="row">
                        <div className="col-6 main-col-padding">
                            <div className="col d-flex justify-content-center">
                                <img src="https://firebasestorage.googleapis.com/v0/b/personalwebport.appspot.com/o/DSC_6292.jpg?alt=media&token=08789679-68f6-4fa7-804e-545be56d8742"
                                    alt="pfp" className="profile-image" draggable="false" />

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
                                                <p>2014 - 2019</p>
                                                <li className="bold">King Mongkut's University of Technology North Bangkok</li>
                                                <p className="line-spacing">2020 - Present<br />
                                                    <i className="bi bi-chevron-right"></i>College of Industrial Technology<br />
                                                    &nbsp;&nbsp;<i className="bi bi-chevron-right"></i>Electronic Engineering Technology
                                                    (Computer)</p>
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
                                            <ul className="hide-bullet-point rm-white-space text-y-spacing">
                                                <li>Nickname</li>
                                                <li>Date of Birth</li>
                                                <li>Age</li>
                                            </ul>
                                        </div>
                                        <div className="col-1">
                                            <ul className="hide-bullet-point rm-white-space text-y-spacing">
                                                <li>:</li>
                                                <li>:</li>
                                                <li>:</li>
                                            </ul>
                                        </div>
                                        <div className="col-3 rm-white-space">
                                            <ul className="hide-bullet-point rm-white-space text-y-spacing">
                                                <li>Got</li>
                                                <li>1 April 2002</li>
                                                <li>22</li>
                                            </ul>
                                        </div>

                                        <div className="col-1 bold" style={{ paddingLeft: '0px' }}>
                                            <ul className="hide-bullet-point rm-white-space text-y-spacing">
                                                <li>MBTI</li>
                                            </ul>
                                        </div>
                                        <div className="col-1" style={{ paddingLeft: '0px' }}>
                                            <ul className="hide-bullet-point rm-white-space text-y-spacing">
                                                <li> : INFP</li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="row no-text-break">
                                <div className="col-6">
                                    <div className="row">
                                        <div className="col" style={WideClass ? { paddingRight: '0px' } : {}}>
                                            <span className="sub-header-bold">CONTACT</span>
                                            <hr />
                                        </div>
                                    </div>
                                    <div className="row top-spacing">
                                        <div className="col">
                                            <ul className="hide-bullet-point rm-white-space small-font text-y-spacing">
                                                <li><i className="bi bi-envelope-fill pink"></i> gotkunglovely@outlook.co.th</li>
                                                <li><i className="bi bi-telephone-outbound-fill pink"></i> 099-165-0212</li>
                                                <li><i className="bi bi-github pink"></i> https://github.com/Appeleus</li>
                                                <li><i class="bi bi-geo-alt-fill pink"></i> Nonthaburi</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-1 d-rsm-none d-rsm-block">
                                    <div className="row" style={{ minHeight: '3rem' }}>
                                    </div>
                                    <div className="row">
                                        <div className="col vertical-hr"></div>
                                    </div>
                                </div>

                                <div className={colClass}>
                                    <div className="row">
                                        <div className="col" style={WideClass ? { paddingLeft: '0px' } : {}}>
                                            <span className="sub-header-bold">SOCIAL</span>
                                            <hr />
                                        </div>
                                    </div>
                                    <div className="row top-spacing">
                                        <div className="col" style={WideClass ? { paddingLeft: '0px' } : {}}>
                                            <ul className="hide-bullet-point rm-white-space small-font text-y-spacing">
                                                <li><img src={require('./asset/Resume/yt-logo.png')} alt="yt" width="15px" /> Tanoshii R1NK0</li>
                                                <li><img src={require('./asset/Resume/twitter-logo.png')} alt="twitter" width="15px" /> @TanoshiRinko</li>
                                                <li><img src={require('./asset/Resume/fb-logo.png')} alt="fb" width="15px" /> Apple Mentos</li>
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
                                            <p className="line-spacing">&nbsp;&nbsp;	Hello, I’m Phantakorn. I graduated from KMUTNB (ENET-C).
                                                I had an internship as a Back-End Developer for 4 months. Introduced to both Front-End and Back-End web stack
                                                such as Angular and ASP.Net Core. I aimed to be able to develop a website more efficiently and pleasing as requested
                                                from client, and work efficiently with other people in the team to produce the best result. And to also bettering myself.</p>
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
                                            <span className="bold"><p>University Project</p></span>
                                            <ul className="line-spacing">
                                                <li className="bold">Designed a REST API for University student grading website</li>
                                                <p className="normal-font"><i className="bi bi-chevron-right"></i> With APIary and Postman</p>

                                                <li className="bold">Web application : Food community webboard Mini Project</li>
                                                <p className="normal-font"><i className="bi bi-chevron-right"></i> Designed most of the website pages with Bootstrap 5.</p>

                                                <li className="bold">Mobile App & Web app : Perforkid Childcare Application</li>
                                                <p className="normal-font"><i className="bi bi-chevron-right"></i> Designed with Flutterflow for Mobile app.<br />
                                                    And Bootstrap and Javascript for Web application.</p>
                                            </ul>
                                            <span className="bold"><p>Internship & Work Experience</p></span>
                                            <ul className="line-spacing">
                                                <li className="bold">ADEV Solutions Plus CO., LTD. (Sep 2023 - Mar 2024)<br />Back-End Developer</li>

                                                <p className="normal-font"><i className="bi bi-chevron-right"></i> Developed REST API for a CMS Web application<br />
                                                    With C# ASP.NET Core.</p>
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
                                                <span className="bold rm-white-space"><p>Program & Tools</p></span>
                                                <li>Adobe Photoshop</li>
                                                <li>Adobe Premiere Pro</li>
                                                <li>Adobe After Effect</li>
                                                <li>Live2D Cubism</li>
                                                <li>Procreate app</li>
                                                <li>VS Code & VS</li>
                                                <li>Canva</li>
                                                <li>SSMS</li>
                                                <li>Swagger UI</li>
                                            </ul>
                                        </div>
                                        <div className="col-6">
                                            <ul className="dash rm-white-space">
                                                <span className="bold"><p>Languages & Framework</p></span>
                                                <li>HTML, CSS</li>
                                                <li>Javascript</li>
                                                <li>C#</li>
                                                <li>Bootstrap 5</li>
                                                <li>Angular</li>
                                                <li>ASP.NET Core 6</li>
                                                <li>React</li>
                                                <li>Node.js</li>
                                                <li>SQL</li>
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