import React from "react";
import fetch from "isomorphic-unfetch";
import BasePage from '../../src/components/base-page';
import Post from '../../src/components/post';

const API_URL = process.env.API_URL;

const BlogPost = ({ postId }) => {

  return (
    <BasePage
      title="Post"
      icone="/favicon.ico"
    >

      <span>
        {`Post Id: ${postId}`}
      </span>

      <style jsx>{`

    `}</style>
    </BasePage>
  )
};

BlogPost.getInitialProps = ({ query }) => {
  return { postId: query.postId };
}

export default BlogPost;
