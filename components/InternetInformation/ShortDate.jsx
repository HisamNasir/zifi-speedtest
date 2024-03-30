import React from "react";

const ShortDate = () => {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  return (
    <div>
      <span>{`${day}/${month}/${year}`}</span>
    </div>
  );
};

export default ShortDate;
