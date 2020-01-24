import * as React from "react";
import fetch from "isomorphic-unfetch";

//Components
import BasePage from "../src/components/base-page";
import Link from "next/link";
import Post from "../src/components/post";
import { BloggerCard } from "../src/components/blogger-card";

//Configurations for app
const config = require("../src/config");

const Home = ({ posts }) => {

  return (
    <BasePage
      title="Home"
      icon="/favicon.ico"
    >
      <BloggerCard />
      {
        //If posts are fetched, render them.
        posts && posts.length > 0 && posts.map(({ slug, title, content, date }, index) => (
          <Post
            section
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
  let posts = [];
  console.log("Index page fetching all posts");
  const response = await fetch(`${config.API_URL}/posts`);
  try {
    posts = await response.json();
  } catch (e) {
    console.log("Error when fetching posts ", e);
  }
  return {
    posts
  };
};

export default Home;
