import React from "react";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div>
      <header>Admin Header</header>
      <aside>Sidebara</aside>
      <div>{children}</div>
      <footer>Admin Footer</footer>
    </div>
  );
};

export default AdminLayout;
