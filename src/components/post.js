import React from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

const Post = ({ slug, title, content, date }) => (
    <React.Fragment>
        <div className="post-container">
            <h2 className="post-title">
                <Link href={slug}>
                    <a className="post-title-link">{title}</a>
                </Link>
            </h2>
            <div className="post-content">
                <ReactMarkdown source={content} />
            </div>
            <div className="post-date">{date}</div>
        </div>
    </React.Fragment>
)

export default Post;