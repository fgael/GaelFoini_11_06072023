import React from "react";

const Tag = ({ tagList }) => {
  return (
    <div className="tag-container">
      {/* map pour itérer sur chaque element de la props */}
      {tagList.map((tag, index) => (
        <div key={index} className="tag">
          <p>{tag}</p>
        </div>
      ))}
    </div>
  );
};

export default Tag;
