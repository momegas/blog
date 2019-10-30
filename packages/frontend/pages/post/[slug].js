import React from "react";
import Head from "next/head";
import MDReactComponent from "markdown-react-js";
import * as moment from "moment";
import { getPosts } from "../../utils/api-calls";

const PostPage = ({ currentPost }) => {
  if (!currentPost) {
    return "No such page mate... trying to hack me?";
  }

  return (
    <>
      <Head>
        <title>momegas | {currentPost.title}</title>
      </Head>

      <article>
        <h4>{currentPost.title}</h4>

        <small>
          {moment(currentPost.created_at).format("MMMM Do YYYY")}
          {" | "}
          {currentPost.timeToRead}
        </small>
        <div>
          <MDReactComponent text={currentPost.body} />
        </div>
      </article>
      {style}
    </>
  );
};

PostPage.getInitialProps = async ({ query }) => {
  const posts = await getPosts();
  const currentPost = posts.find(post => post.slug === query.slug);
  return { posts, currentPost };
};

const style = (
  <style jsx>{`
    h4 {
      margin-bottom: 10px;
    }

    article p {
      margin-bottom: 15px;
    }

    article small {
      margin-bottom: 15px;
    }
  `}</style>
);

export default PostPage;
