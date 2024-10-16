import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        Back to home
      </Button>
    </div>
  );
};

export default NotFoundPage;
