import React from "react";
import Head from "next/head";
import { getPosts } from "../utils/api-calls";
import Link from "next/link";

const Home = ({ posts }) => {
  const getEmoji = () => {
    const randomNumber0To9 = Math.floor(Math.random() * 10);
    return ["😉", "😇", "😆", "😀", "😁", "😋", "🤪", "😝", "😋", "😘"][
      randomNumber0To9
    ];
  };

  const renderPosts = () =>
    posts.map(post => (
      <article className="post" key={post.id}>
        <header>
          <h4>
            <Link href={`post/${post.slug}`}>{post.title}</Link>
          </h4>
        </header>
        <small>{post.timeToRead}</small>
        <p>{post.description}</p>
      </article>
    ));

  return (
    <div>
      <Head>
        <title>momegas {getEmoji()}</title>
      </Head>
      <div>{renderPosts()}</div>
      {style}
    </div>
  );
};

Home.getInitialProps = async ({ req }) => {
  const posts = await getPosts();
  return { posts };
};

const style = (
  <style jsx>{`
    .post {
      margin-bottom: 45px;
    }
    .post header {
      margin-bottom: 10px;
    }

    .post a {
      text-decoration: none;
      color: #000;
    }

    .post p {
      color: rgba(0, 0, 0, 0.4);
    }
  `}</style>
);

export default Home;
