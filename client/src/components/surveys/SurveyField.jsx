// survey field contains logic to render a single lable and text input
import React from "react";

export default ({ input, label, meta }) => {
  console.log(meta);
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
    </div>
  );
};
