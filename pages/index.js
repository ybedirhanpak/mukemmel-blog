import * as React from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import BasePage from '../components/base-page';
import Post from "../components/post";

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

      {
        posts.map((post, index) => (
          <Post
            key={index}
            slug={post.slug}
            title={post.title}
            content={post.details}
            date={post.date}
          />
        ))
      }
      
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
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  console.log("api url: ", API_URL);
  const res = await fetch(`${API_URL}/posts`);
  const json = await res.json();
  return { posts: json.posts };
};

export default Home;
