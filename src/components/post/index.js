import React from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

const Post = ({ slug, title, content, date, section }) => {
    const contentClass = section ? "custom-html-style post-content section"
        : "custom-html-style post-content";
    return (
        <React.Fragment>
            <div className="post-container">
                <h1 className="post-title">
                    <Link href={slug}>
                        <a className="post-title-link">{title}</a>
                    </Link>
                </h1>
                <div className={contentClass}>
                    <ReactMarkdown source={content} />
                </div>
                <div className="post-date">{date}</div>
            </div>
        </React.Fragment>
    )
}

export default Post;