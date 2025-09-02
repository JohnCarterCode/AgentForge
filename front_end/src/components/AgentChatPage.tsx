import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { 
  Button, 
  Card, 
  Typography, 
  Space, 
  Avatar, 
  Tag, 
  Divider,
  Row,
  Col
} from "antd";
import { 
  RobotOutlined, 
  ArrowLeftOutlined,
  UserOutlined,
  CalendarOutlined,
  TagOutlined
} from "@ant-design/icons";
import ChatBox from "./ChatBox";
import AttestationSection from "./AttestationSection";
import { useAgents } from "../contexts/AgentsContext";

const { Title, Paragraph, Text } = Typography;

interface AttestationInfo {
  runtimeMeasurement: string;
  tlsFingerprint: string;
  attestedBy: string[];
}

const AgentChatPage: React.FC = () => {
  const { agentId } = useParams<{ agentId: string }>();
  const navigate = useNavigate();
  const { getAgent } = useAgents();
  const [agent, setAgent] = useState<any>(null);
  const [attestation, setAttestation] = useState<AttestationInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (agentId) {
      const foundAgent = getAgent(agentId);
      if (foundAgent) {
        setAgent(foundAgent);
      } else {
        // Agent not found, redirect to agents page
        navigate('/agents');
      }
    }
    setLoading(false);
  }, [agentId, navigate, getAgent]);

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('en-US');
  };

  const truncateAddress = (address: string) => {
    if (address.length <= 10) return address;
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  if (loading) {
    return (
      <div style={{ 
        minHeight: "100vh", 
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <div style={{ color: "white", fontSize: "1.2rem" }}>Loading...</div>
      </div>
    );
  }

  if (!agent) {
    return null;
  }

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
        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <Button 
            type="default"
            icon={<ArrowLeftOutlined />}
            onClick={() => navigate('/agents')}
            style={{
              background: "rgba(255,255,255,0.2)",
              border: "1px solid rgba(255,255,255,0.3)",
              color: "white",
              borderRadius: "8px",
              marginBottom: 24
            }}
          >
            Back to Agents List
          </Button>
          
          {/* Agent Info Card */}
          <Card
            style={{
              background: "rgba(255, 255, 255, 0.95)",
              borderRadius: 20,
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(10px)"
            }}
            bodyStyle={{ padding: "32px" }}
          >
            <Row gutter={[32, 24]} align="middle">
              <Col xs={24} sm={8} style={{ textAlign: "center" }}>
                <Avatar 
                  size={80} 
                  icon={<RobotOutlined />}
                  style={{ 
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    marginBottom: 16
                  }}
                />
                <Title level={3} style={{ margin: "16px 0 8px 0", fontWeight: 700 }}>
                  {agent.name}
                </Title>
                <Tag 
                  color={agent.status === 'active' ? 'green' : 'default'}
                  style={{ fontSize: "14px", padding: "4px 12px" }}
                >
                  {agent.status === 'active' ? 'Active' : 'Inactive'}
                </Tag>
              </Col>
              
              <Col xs={24} sm={16}>
                <Paragraph style={{ 
                  color: "#333", 
                  fontSize: "16px",
                  lineHeight: 1.8,
                  marginBottom: 24
                }}>
                  {agent.description}
                </Paragraph>
                
                <Row gutter={[16, 16]}>
                  <Col xs={12} sm={6}>
                    <div style={{ textAlign: "center" }}>
                      <UserOutlined style={{ fontSize: "20px", color: "#1890ff", marginBottom: 8 }} />
                      <div style={{ fontSize: "12px", color: "#666" }}>Creator</div>
                      <div style={{ fontSize: "14px", fontWeight: 600, color: "#333" }}>
                        {truncateAddress(agent.creator)}
                      </div>
                    </div>
                  </Col>
                  
                  <Col xs={12} sm={6}>
                    <div style={{ textAlign: "center" }}>
                      <CalendarOutlined style={{ fontSize: "20px", color: "#52c41a", marginBottom: 8 }} />
                      <div style={{ fontSize: "12px", color: "#666" }}>Created</div>
                      <div style={{ fontSize: "14px", fontWeight: 600, color: "#333" }}>
                        {formatDate(agent.createdAt)}
                      </div>
                    </div>
                  </Col>
                  
                  {agent.tokenSymbol && (
                    <Col xs={12} sm={6}>
                      <div style={{ textAlign: "center" }}>
                        <TagOutlined style={{ fontSize: "20px", color: "#722ed1", marginBottom: 8 }} />
                        <div style={{ fontSize: "12px", color: "#666" }}>Token</div>
                        <Tag color="blue" style={{ margin: 0 }}>{agent.tokenSymbol}</Tag>
                      </div>
                    </Col>
                  )}
                </Row>
              </Col>
            </Row>
          </Card>
        </div>
        
        {/* Chat and Attestation Section */}
        <div style={{ 
          display: "flex", 
          justifyContent: "center", 
          gap: 40, 
          alignItems: "flex-start",
          flexWrap: "wrap"
        }}>
          <ChatBox onAttestationUpdate={setAttestation} />
          <AttestationSection 
            runtimeMeasurement={attestation?.runtimeMeasurement}
            tlsFingerprint={attestation?.tlsFingerprint}
            attestedBy={attestation?.attestedBy}
          />
        </div>
      </div>
    </div>
  );
};

export default AgentChatPage;
