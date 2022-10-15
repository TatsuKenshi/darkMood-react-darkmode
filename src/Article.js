import moment from "moment";
import React from "react";

const Article = ({ title, snippet, date, length }) => {
  console.log(date);
  return (
    <article className="post">
      <h2>{title}</h2>
      <div className="post-info">
        <span>{moment(date).format("MMM ddd Do, YYYY")} </span>
        <span>{length} min read</span>
      </div>
      <p>{snippet}</p>
    </article>
  );
};

export default Article;
