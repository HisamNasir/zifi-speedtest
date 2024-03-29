import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const ParentComponent = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div>
      <Header handleClose={handleCloseSidebar} />
      {sidebarOpen && <Sidebar handleClose={handleCloseSidebar} />}
    </div>
  );
};

export default ParentComponent;
