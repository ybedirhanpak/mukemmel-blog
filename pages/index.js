import * as React from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import BasePage from '../src/components/base-page';
import Post from "../src/components/post";

const dev = process.env.NODE_ENV !== 'production';
const API_URL = dev ? `${process.env.DOMAIN}:${process.env.PORT}/api` : `${process.env.DOMAIN}/api`;

const Home = ({ posts }) => {

  return (
    <BasePage
      title="Home"
      icon="/favicon.ico"
    >
      <div className="hero">
        <h1 className="hero-title">Hello World</h1>
        <div className="hero-social-links">
            <a href="https://www.google.com" className="social-link">Google</a>
            <a href="https://www.google.com" className="social-link">Google</a>
        </div>
      </div>

      {
        posts && posts.length > 0 && posts.map(({slug, title, content, date},index) => (
          <Post
            key={index}
            slug={`posts/${slug}`}
            title={title}
            content={content}
            date={date}            
            />
        ))  
      }
    </BasePage>
  )
};

Home.getInitialProps = async ({ req }) => {
  let posts = []
  console.log("API URL ", API_URL)
  const response = await fetch(`${API_URL}/posts`);
  try {
    posts = await response.json();
  } catch {
    console.log("Error when fetching posts");
  }
  return {
    posts: posts
  };
};

export default Home;
