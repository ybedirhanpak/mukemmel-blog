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
          <Link href="https://www.google.com">
            <a className="social-link">Google</a>
          </Link>
          <Link href="https://www.google.com">
            <a className="social-link">Google</a>
          </Link>
        </div>
      </div>

      <style jsx>{`
          .hero {
            text-align: center;
          }

          .social-link {
            margin: 0 10px;
            padding: 5px;
            text-decoration: none;
          }
      `}</style>
    </BasePage>
  )
};

Home.getInitialProps = async ({ req }) => {
  return {
    posts: [
      {
        title: "Title",
        slug: "slug",
        content: "Content",
        date: "Today"
      }
    ]
  };
};

export default Home;
