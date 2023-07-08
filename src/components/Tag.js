import React from "react";

const Tag = ({ tagList }) => {
  return (
    <div className="tag-container">
      {/* map pour itérer sur chaque element de la props */}
      {tagList.map((tag, index) => (
        <button key={index}>
          <p>{tag}</p>
        </button>
      ))}
    </div>
  );
};

export default Tag;
