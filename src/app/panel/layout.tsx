import React from "react";
const PanelLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-full">{children}</div>;
};

export default PanelLayout;
