import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Post = () => {
  const { post } = useLoaderData();

  return (
    <main className="post">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </main>
  );
};

export default Post;
