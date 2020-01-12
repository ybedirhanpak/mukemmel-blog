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

        <style jsx>{`
            .post-container {
                max-width: 600px;
                margin: 0 auto;
            }
            .post-content {
                background: #dbe0e5;
            }
            .post-date {
                font-size: 16px;
                text-align: end;
                color: #3e3e3e;
            }
        `}</style>
    </React.Fragment>
)

export default Post;