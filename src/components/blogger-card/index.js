import React from "react";

export const BloggerCard = (props) => {
    const {
        header = "whoami",
        content = "Merhaba ben bir öğrenciyim.Merhaba ben bir öğrenciyim.Merhaba ben bir öğrenciyim.Merhaba ben bir öğrenciyim.Merhaba ben bir öğrenciyim.",
        imgSrc = "/yahya.jpeg"
    } = props;

    return (
        <div className="blogger-card">
            <div className="blogger-about">
                <h3>{header}</h3>
                <p>{content}</p>
            </div>
            <div className="blogger-image">
                <img src={imgSrc} alt="Blogger image" />
            </div>
        </div>
    )
}