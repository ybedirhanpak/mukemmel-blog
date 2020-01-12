import * as React from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import BasePage from '../src/components/base-page';
import Post from "../src/components/post";

const API_URL = process.env.API_URL;

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
  const response = await fetch(`${API_URL}/posts`);
  try {

  } catch {
    posts = await response.json();
  }
  return {
    posts: posts
  };
};

export default Home;
