import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => (
  <>
    <p> Navigate posts via sidebar</p>
    <button className="create-button">
      <Link to="/create">Create Post</Link>
    </button>
  </>
);

export default Index;
