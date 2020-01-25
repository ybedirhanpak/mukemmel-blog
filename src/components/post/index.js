import React from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

const Post = ({ slug, title, content, date, section }) => {
    const containerClass = section ? "post-container section"
        : "post-container";
    return (
        <React.Fragment>
            <div className={containerClass}>
                <div className="post-image">
                    <img src="https://blog.emojipedia.org/content/images/size/w2000/2015/09/IMG_0001-1.jpg">
                    </img>
                </div>
                <h1 className="post-title">
                    <Link>
                        <a className="post-title-link">{title}</a>
                    </Link>
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