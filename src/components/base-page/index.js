import React from "react";

//Components
import Head from "next/head";
import Navbar from "../navbar";

const BasePage = ({ title, icon, children, fill }) => {
    const contentClass = fill ? "content-container fill"
        : "content-container";
    return (
        <React.Fragment>
            <div className="page-container">
                <Head>
                    <title>{title}</title>
                    <link rel="icon" href={icon} />
                    <link type="text/css" href="/static/styles.css" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Permanent+Marker|Press+Start+2P|Open+Sans|Roboto+Slab&display=swap" rel="stylesheet" />
                </Head>
                <Navbar />
                <div className={contentClass}>
                    {children}
                </div>
            </div>
        </React.Fragment>
    )
}

export default BasePage;