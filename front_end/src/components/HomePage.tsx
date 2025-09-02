import React from "react";
import { Button, Card, Row, Col, Typography, Space, Divider } from "antd";
import { 
  RobotOutlined, 
  RocketOutlined, 
  SafetyOutlined, 
  ThunderboltOutlined,
  GlobalOutlined,
  LockOutlined,
  TeamOutlined,
  StarOutlined
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title, Paragraph, Text } = Typography;

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <RobotOutlined style={{ fontSize: 32, color: '#667eea' }} />,
      title: "AI Agent Minting",
      description: "One-click minting of your exclusive AI agents with personalized customization"
    },
    {
      icon: <RocketOutlined style={{ fontSize: 32, color: '#764ba2' }} />,
      title: "Token Issuance",
      description: "Issue exclusive tokens for your AI agents and build economic models"
    },
    {
      icon: <SafetyOutlined style={{ fontSize: 32, color: '#52c41a' }} />,
      title: "Trusted Computing",
      description: "TEE-based trusted execution environment ensuring credibility of AI inference results"
    },
    {
      icon: <ThunderboltOutlined style={{ fontSize: 32, color: '#fa8c16' }} />,
      title: "High Performance",
      description: "High-performance computing capabilities provided by AO network for fast response"
    }
  ];

  const benefits = [
    {
      icon: <GlobalOutlined style={{ fontSize: 24, color: '#1890ff' }} />,
      title: "Decentralized",
      description: "Based on Arweave permanent storage, data never lost"
    },
    {
      icon: <LockOutlined style={{ fontSize: 24, color: '#52c41a' }} />,
      title: "Secure & Reliable",
      description: "Blockchain-level security with transparency and verifiability"
    },
    {
      icon: <TeamOutlined style={{ fontSize: 24, color: '#722ed1' }} />,
      title: "Community Driven",
      description: "Open ecosystem supporting community contributions and collaboration"
    },
    {
      icon: <StarOutlined style={{ fontSize: 24, color: '#faad14' }} />,
      title: "Innovation Frontier",
      description: "Combining latest AI and blockchain technologies, leading the future"
    }
  ];

  return (
    <div style={{ 
      minHeight: "100vh", 
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Background decoration */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)",
        pointerEvents: "none"
      }} />
      
      <div style={{ 
        position: "relative", 
        zIndex: 1,
        padding: "40px 20px",
        maxWidth: 1400,
        margin: "0 auto"
      }}>
        {/* Hero Section */}
        <div style={{ textAlign: "center", marginBottom: 80, paddingTop: 40 }}>
          <Title style={{ 
            color: "white", 
            fontSize: "4rem",
            fontWeight: 800,
            marginBottom: 24,
            textShadow: "0 4px 8px rgba(0,0,0,0.3)",
            letterSpacing: "1px"
          }}>
            Agent Forge
          </Title>
          <Paragraph style={{
            color: "rgba(255,255,255,0.9)",
            fontSize: "1.5rem",
            marginBottom: 40,
            maxWidth: 800,
            margin: "0 auto 40px auto",
            lineHeight: 1.6
          }}>
            One-click to mint your AI agent and token, powered by AO × Arweave
          </Paragraph>
          <Button 
            type="primary" 
            size="large"
            onClick={() => navigate('/agents')}
            style={{
              height: "56px",
              padding: "0 40px",
              fontSize: "18px",
              fontWeight: 600,
              borderRadius: "28px",
              background: "linear-gradient(135deg, #52c41a 0%, #73d13d 100%)",
              border: "none",
              boxShadow: "0 8px 24px rgba(82, 196, 26, 0.4)"
            }}
          >
            Get Started
          </Button>
        </div>

        {/* Features Section */}
        <div style={{ marginBottom: 80 }}>
          <Title level={2} style={{ 
            textAlign: "center", 
            color: "white", 
            marginBottom: 60,
            fontSize: "2.5rem",
            fontWeight: 700
          }}>
            Core Features
          </Title>
          <Row gutter={[32, 32]}>
            {features.map((feature, index) => (
              <Col xs={24} sm={12} lg={6} key={index}>
                <Card 
                  style={{
                    textAlign: "center",
                    background: "rgba(255, 255, 255, 0.95)",
                    borderRadius: 20,
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(10px)",
                    height: "100%"
                  }}
                  bodyStyle={{ padding: "32px 24px" }}
                >
                  <div style={{ marginBottom: 24 }}>
                    {feature.icon}
                  </div>
                  <Title level={4} style={{ marginBottom: 16, fontWeight: 600 }}>
                    {feature.title}
                  </Title>
                  <Paragraph style={{ color: "#666", margin: 0, lineHeight: 1.6 }}>
                    {feature.description}
                  </Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Benefits Section */}
        <div style={{ marginBottom: 80 }}>
          <Title level={2} style={{ 
            textAlign: "center", 
            color: "white", 
            marginBottom: 60,
            fontSize: "2.5rem",
            fontWeight: 700
          }}>
            Why Choose Agent Forge
          </Title>
          <Row gutter={[32, 32]}>
            {benefits.map((benefit, index) => (
              <Col xs={24} sm={12} lg={6} key={index}>
                <Card 
                  style={{
                    textAlign: "center",
                    background: "rgba(255, 255, 255, 0.9)",
                    borderRadius: 16,
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    backdropFilter: "blur(10px)",
                    height: "100%"
                  }}
                  bodyStyle={{ padding: "24px 20px" }}
                >
                  <div style={{ marginBottom: 16 }}>
                    {benefit.icon}
                  </div>
                  <Title level={5} style={{ marginBottom: 12, fontWeight: 600 }}>
                    {benefit.title}
                  </Title>
                  <Paragraph style={{ color: "#666", margin: 0, fontSize: "14px", lineHeight: 1.5 }}>
                    {benefit.description}
                  </Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* CTA Section */}
        <div style={{ 
          textAlign: "center", 
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: 24,
          padding: "60px 40px",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)"
        }}>
          <Title level={2} style={{ 
            color: "white", 
            marginBottom: 24,
            fontSize: "2.5rem",
            fontWeight: 700
          }}>
            Ready to Get Started?
          </Title>
          <Paragraph style={{
            color: "rgba(255,255,255,0.9)",
            fontSize: "1.2rem",
            marginBottom: 40,
            maxWidth: 600,
            margin: "0 auto 40px auto"
          }}>
            Join the AI Agent revolution and create your own intelligent empire
          </Paragraph>
          <Button 
            type="primary" 
            size="large"
            onClick={() => navigate('/agents')}
            style={{
              height: "56px",
              padding: "0 48px",
              fontSize: "18px",
              fontWeight: 600,
              borderRadius: "28px",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              border: "none",
              boxShadow: "0 8px 24px rgba(102, 126, 234, 0.4)"
            }}
          >
            Start Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 