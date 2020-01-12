import React from "react";
import fetch from "isomorphic-unfetch";
import BasePage from '../components/base-page';
import Post from '../components/post';

const API_URL = process.env.API_URL;

const BlogPost = ({ post }) => {

  return (
    <BasePage
      title="Post"
      icone="/favicon.ico"
    >

      <Post
        slug={"/"}
        title={post.title}
        content={post.details}
        date={post.date}
      />

      <style jsx>{`

    `}</style>
    </BasePage>
  )
};

BlogPost.getInitialProps = async ({ req, query }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch(`${API_URL}/post/${query.postId}`);
  const json = await res.json();
  return { post: json.post };
};

export default BlogPost;
