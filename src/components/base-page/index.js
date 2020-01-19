import React from "react";

//Components
import Head from "next/head";
import Navbar from "../navbar";

const BasePage = ({ title, icon, children }) => {
    return (
        <React.Fragment>
            <div className="page-container">
                <Head>
                    <title>{title}</title>
                    <link rel="icon" href={icon} />
                    <link type="text/css" href="/static/styles.css" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans|Alata|Poppins|Roboto+Slab&display=swap" rel="stylesheet" />
                </Head>
                <Navbar />
                <div className="content-container">
                    {children}
                </div>
            </div>
        </React.Fragment>
    )
}

export default BasePage;