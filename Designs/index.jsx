import React from "react";
import { MakersFooter } from "./MakersFooter";
import { MakersTextContent } from "./MakersTextContent";
import { PagesCovers } from "./PagesCovers";
import "./style.css";

export const LandingPageLook = () => {
    return (
        <div className="landing-page-look">
            <div className="top-header">
                <div className="navbar">
                    <div className="text-wrapper-2">Main</div>
                    <div className="text-wrapper-2">Digital</div>
                    <div className="text-wrapper-2">Type</div>
                    <div className="text-wrapper-2">Experience</div>
                </div>
                <div className="name-logo">
                    <div className="text-wrapper-3">Sean Bertolini</div>
                </div>
                <div className="social-contact-links">
                    <div className="rectangle" />
                    <div className="rectangle" />
                </div>
            </div>
            <div className="about-section">
                <div className="text-container">
                    <MakersTextContent
                        align="center"
                        className="MAKERS-TEXT-CONTENT-instance"
                        divClassName="design-component-instance-node"
                        hasDiv={false}
                        text="My Work"
                        text1=" This portfolio contains a wide range of work such as web/mobile design, sports related designs, 3D designs, typographic work, branding, as well as illustrative work."
                    />
                </div>
            </div>
            <div className="work">
                <div className="row">
                    <PagesCovers className="pages-covers-instance" />
                    <PagesCovers className="pages-covers-2" />
                    <PagesCovers className="pages-covers-3" />
                </div>
                <div className="row">
                    <PagesCovers className="pages-covers-4" />
                    <PagesCovers className="pages-covers-5" />
                    <PagesCovers className="pages-covers-6" />
                </div>
                <div className="row">
                    <PagesCovers className="pages-covers-7" />
                    <PagesCovers className="pages-covers-8" />
                    <PagesCovers className="pages-covers-9" />
                </div>
            </div>
            <div className="layout-simple-wrapper">
                <MakersFooter className="layout-simple" layout="simple-centered" />
            </div>
        </div>
    );
};
