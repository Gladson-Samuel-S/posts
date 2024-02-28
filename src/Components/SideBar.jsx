import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const SideBar = ({ posts }) => (
  <aside className="sidebar">
    <h1 className="sidebar-title">
      <Link className="title-link" to="/">
        Post
      </Link>
    </h1>
    <div className="line" />

    <div className="posts-container">
      {posts &&
        posts.length > 0 &&
        posts.map(({ id, title }) => (
          <NavLink
            key={id}
            className={({ isActive }) =>
              isActive ? 'post-link-container active' : 'post-link-container'
            }
            to={`posts/${id}`}
          >
            <p className="post-link">{title}</p>
          </NavLink>
        ))}
    </div>
  </aside>
);

export default SideBar;
