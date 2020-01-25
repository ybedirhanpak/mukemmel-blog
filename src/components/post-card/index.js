import React from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

const PostCard = ({ slug, title, content, date, imageURL }) => {
    return (
        <React.Fragment>
            <div className="post-card">
                <div className="post-image">
                    <a href={slug}>
                        <img src={imageURL} />
                    </a>
                </div>
                <h1 className="post-title">
                    <Link href={slug}>
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

export default PostCard;