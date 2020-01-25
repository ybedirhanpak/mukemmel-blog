import React from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

const Post = ({ slug, title, content, date, imageURL }) => {
    return (
        <React.Fragment>
            <div className={"post-container"}>
                <div className="post-image">
                    <img src={imageURL}>
                    </img>
                </div>
                <h1 className="post-title">
                    <span className="post-title-link">{title}</span>
                </h1>
                <div className="custom-html-style post-content">
                    <ReactMarkdown source={content} />
                </div>
                <div className="post-date">{date}</div>
            </div>
        </React.Fragment>
    )
}

export default Post;