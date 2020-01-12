import React from "react";
import fetch from "isomorphic-unfetch";
import BasePage from '../../src/components/base-page';
import Post from '../../src/components/post';

const dev = process.env.NODE_ENV !== 'production';
const API_URL = dev ? `${process.env.DOMAIN}:${process.env.PORT}/api` : `${process.env.DOMAIN}/api`;

const PostDetails = ({ post: { slug, title, content, date } }) => {

  return (
    <BasePage
      title="Post"
      icon="/favicon.ico"
    >

      <Post
        slug={slug}
        title={title}
        content={content}
        date={date}
      />

    </BasePage>
  )
};

PostDetails.getInitialProps = async ({ query }) => {
  let post = { title: "Post not found", content: "No content", slug:"/" };
  const response = await fetch(`${API_URL}/posts/slug/${query.postURL}`);
  try {
    //Try if response is valid
    post = await response.json();
  } catch {
    console.log("Post not found");
  }
  return { post };
}

export default PostDetails;
