import React from "react";
import fetch from "isomorphic-unfetch";
import BasePage from '../../src/components/base-page';
import Post from '../../src/components/post';

const PostDetails = () => {

  return (
    <BasePage
      title="Post"
      icon="/favicon.ico"
    >

      {/* <Post
        slug={slug}
        title={title}
        content={content}
        date={date}
      /> */}

    </BasePage>
  )
};

// PostDetails.getInitialProps = async ({ query }) => {
//   let post = { title: "Post not found", content: "No content", slug:"/" };
//   const response = await fetch(`${API_URL}/posts/slug/${query.postURL}`);
//   try {
//     //Try if response is valid
//     post = await response.json();
//   } catch {
//     console.log("Post not found");
//   }
//   return { post };
// }

export default PostDetails;
