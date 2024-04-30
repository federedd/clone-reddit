import React from "react";

function NewComponent({ subCategories }) {
  return (
    <div>
      {isOpen && (
        <div>
          {subCategories.map((sub) => {
            return <p>{sub}</p>;
          })}
        </div>
      )}
    </div>
  );
}

export default NewComponent;
