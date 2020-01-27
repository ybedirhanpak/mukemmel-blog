import React from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

const Post = ({ title, content, date, imageURL, minutes, tag }) => {
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
                <div className="h-block post-details">
                    {tag &&
                        <div className="post-tag">
                            <img src="/tag.png" />
                            <span>{tag}</span>
                        </div>
                    }
                    {minutes &&
                        <span>{`${minutes} min read`}</span>
                    }
                </div>
                <div className="custom-html-style post-content">
                    <ReactMarkdown source={content} />
                </div>
                <div className="post-date">{date}</div>
            </div>
        </React.Fragment>
    )
}

export default Post;