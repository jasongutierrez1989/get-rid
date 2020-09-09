import React from 'react';

const PostInfo = ({ post }) => {
  return (
      <div key={post.id} className="post-card">
        <div className="dropdown">
          <button className="produce-name">{post.name}</button>
          <div className="dropdown-content">
            <p>Price: {post.price} </p>
          </div>
        </div>
      </div>
  );
}

export default ProduceCard;
