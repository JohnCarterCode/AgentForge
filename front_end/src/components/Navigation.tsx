import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Space } from "antd";
import { HomeOutlined, RobotOutlined } from "@ant-design/icons";

const Navigation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { path: "/", label: "Home", icon: <HomeOutlined /> },
    { path: "/agents", label: "Agents", icon: <RobotOutlined /> },
  ];

  return (
    <div style={{
      position: "fixed",
      bottom: 20,
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 1000,
      background: "rgba(255, 255, 255, 0.1)",
      borderRadius: 25,
      padding: "8px",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
    }}>
      <Space size={4}>
        {navItems.map((item) => (
          <Button
            key={item.path}
            type={location.pathname === item.path ? "primary" : "default"}
            icon={item.icon}
            onClick={() => navigate(item.path)}
            style={{
              borderRadius: "20px",
              height: "40px",
              padding: "0 16px",
              border: location.pathname === item.path ? "none" : "1px solid rgba(255, 255, 255, 0.3)",
              background: location.pathname === item.path 
                ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" 
                : "rgba(255, 255, 255, 0.2)",
              color: location.pathname === item.path ? "white" : "white",
              fontWeight: 500
            }}
          >
            {item.label}
          </Button>
        ))}
      </Space>
    </div>
  );
};

export default Navigation; 