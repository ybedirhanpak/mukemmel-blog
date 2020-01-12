import React from "react";
import Head from "next/head";

const BasePage = ({ title, icon, children }) => {
    return (
        <React.Fragment>
            <div className="page-container">
                <Head>
                    <title>{title}</title>
                    <link rel="icon" href={icon} />
                    <link type="text/css" href="/static/styles.css" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"/>
                </Head>
                {children}
            </div>
            <style jsx global>
                {`
                    body {
                        font-family: 'Open Sans', sans-serif;
                        background-color:lavender;
                    }
                `}
            </style>
        </React.Fragment>
    )
}

export default BasePage;