import React from 'react';
import { Form } from 'react-router-dom';

const CreatePost = () => {
  return (
    <Form method="post" className="create-form">
      <span>title</span>
      <input
        placeholder="title"
        aria-label="title name"
        type="text"
        name="title"
      />

      <span>body</span>
      <input placeholder="body" aria-label="body" type="text" name="body" />

      <button className="create-button" type="submit">
        Create
      </button>
    </Form>
  );
};

export default CreatePost;
