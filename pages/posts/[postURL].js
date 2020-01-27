import React from "react";
import fetch from "isomorphic-unfetch";

//Components
import BasePage from "../../src/components/base-page";
import Post from "../../src/components/post";
import { BloggerCard } from "../../src/components/blogger-card";

//Configurations for app
const config = require("../../src/config");

const PostDetails = ({ post: { slug, title, content, date, imageURL, tag, minutes } }) => {

  return (
    <BasePage
      title="Post"
      icon="/favicon.ico"
    >
      <div className="card-container">
        <BloggerCard />
      </div>
      <div className="post-list">
        <Post
          slug={slug}
          title={title}
          content={content}
          date={date}
          imageURL={imageURL}
          tag={tag}
          minutes={minutes}
        />
      </div>
    </BasePage>
  )
};

PostDetails.getInitialProps = async ({ query: { postURL } }) => {
  //Initialize dummy post
  let post = { title: "Post not found", content: "No content", slug: "/" };
  //Fetch post from api
  const response = await fetch(`${config.API_URL}/posts/slug/${postURL}`);
  try {
    //Convert it to json if response is valid.
    post = await response.json();
  } catch {
    console.log(`Post with ${postURL} not found`);
  }
  return {
    post
  };
}

export default PostDetails;
