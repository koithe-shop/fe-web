import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <header>Main Headeraaaaaaaaaaaa</header>
      <div>{children}</div>
      <footer>Main Footer</footer>
    </div>
  );
};

export default MainLayout;
