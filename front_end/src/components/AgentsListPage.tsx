import React, { useState } from "react";
import { 
  Button, 
  Card, 
  Input, 
  Modal, 
  Form, 
  Row, 
  Col, 
  Typography, 
  Space, 
  Avatar, 
  Tag,
  message,
  Empty,
  Spin
} from "antd";
import { 
  PlusOutlined, 
  RobotOutlined, 
  EditOutlined, 
  DeleteOutlined,
  MessageOutlined,
  UserOutlined
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useWallet } from "../contexts/WalletContext";
import { useAgents } from "../contexts/AgentsContext";

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

const AgentsListPage: React.FC = () => {
  const navigate = useNavigate();
  const { checkLogin, activeAddress } = useWallet();
  const { agents, addAgent, deleteAgent } = useAgents();
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);

  const handleCreateAgent = async (values: any) => {
    if (!checkLogin()) return;
    
    setSubmitting(true);
    try {
      // Simulate creation process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const newAgent = {
        id: Date.now().toString(),
        name: values.name,
        description: values.description,
        creator: activeAddress || "Unknown",
        createdAt: Date.now(),
        tokenSymbol: values.name.toUpperCase().substring(0, 6),
        status: 'active' as const
      };
      
      addAgent(newAgent);
      message.success('Agent created successfully!');
      setIsModalVisible(false);
      form.resetFields();
    } catch (error) {
      message.error('Creation failed, please try again');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteAgent = (agentId: string) => {
    Modal.confirm({
      title: 'Confirm Deletion',
      content: 'Are you sure you want to delete this Agent? This action cannot be undone.',
      okText: 'Delete',
      okType: 'danger',
      cancelText: 'Cancel',
      onOk: () => {
        deleteAgent(agentId);
        message.success('Agent deleted successfully');
      }
    });
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('en-US');
  };

  const truncateAddress = (address: string) => {
    if (address.length <= 10) return address;
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

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
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center", 
          marginBottom: 40,
          flexWrap: "wrap",
          gap: "20px"
        }}>
          <div>
            <Title style={{ 
              color: "white", 
              margin: 0,
              fontSize: "2.5rem",
              fontWeight: 700
            }}>
              AI Agents
            </Title>
            <Paragraph style={{
              color: "rgba(255,255,255,0.8)",
              margin: 0,
              fontSize: "1.1rem"
            }}>
              Create and manage your AI agents
            </Paragraph>
          </div>
          <Space>
            <Button 
              type="default"
              onClick={() => navigate('/')}
              style={{
                background: "rgba(255,255,255,0.2)",
                border: "1px solid rgba(255,255,255,0.3)",
                color: "white",
                borderRadius: "8px"
              }}
            >
              Back to Home
            </Button>
            <Button 
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => setIsModalVisible(true)}
              style={{
                background: "linear-gradient(135deg, #52c41a 0%, #73d13d 100%)",
                border: "none",
                borderRadius: "8px",
                height: "40px",
                padding: "0 24px"
              }}
            >
              Create Agent
            </Button>
          </Space>
        </div>

        {/* Agents Grid */}
        {loading ? (
          <div style={{ textAlign: "center", padding: "60px 0" }}>
            <Spin size="large" />
          </div>
        ) : agents.length === 0 ? (
          <Empty 
            description="No agents created yet"
            style={{ 
              background: "rgba(255,255,255,0.9)",
              borderRadius: 16,
              padding: "60px 40px",
              margin: "40px 0"
            }}
          />
        ) : (
          <Row gutter={[24, 24]}>
            {agents.map(agent => (
              <Col xs={24} sm={12} lg={8} xl={6} key={agent.id}>
                <Card
                  hoverable
                  style={{
                    background: "rgba(255, 255, 255, 0.95)",
                    borderRadius: 16,
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(10px)",
                    height: "100%"
                  }}
                  bodyStyle={{ padding: "24px" }}
                  actions={[
                    <MessageOutlined 
                      key="chat" 
                      onClick={() => navigate(`/chat/${agent.id}`)}
                      style={{ color: '#1890ff' }}
                    />,
                    <EditOutlined key="edit" style={{ color: '#52c41a' }} />,
                    <DeleteOutlined 
                      key="delete" 
                      onClick={() => handleDeleteAgent(agent.id)}
                      style={{ color: '#ff4d4f' }}
                    />
                  ]}
                >
                  <div style={{ textAlign: "center", marginBottom: 20 }}>
                    <Avatar 
                      size={64} 
                      icon={<RobotOutlined />}
                      style={{ 
                        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        marginBottom: 12
                      }}
                    />
                    <Title level={4} style={{ margin: "12px 0 8px 0", fontWeight: 600 }}>
                      {agent.name}
                    </Title>
                    <Tag 
                      color={agent.status === 'active' ? 'green' : 'default'}
                      style={{ marginBottom: 8 }}
                    >
                      {agent.status === 'active' ? 'Active' : 'Inactive'}
                    </Tag>
                  </div>
                  
                  <Paragraph style={{ 
                    color: "#666", 
                    marginBottom: 16,
                    lineHeight: 1.6,
                    minHeight: "60px"
                  }}>
                    {agent.description}
                  </Paragraph>
                  
                  <div style={{ 
                    borderTop: "1px solid #f0f0f0", 
                    paddingTop: 16,
                    fontSize: "12px",
                    color: "#999"
                  }}>
                    <div style={{ marginBottom: 8 }}>
                      <UserOutlined style={{ marginRight: 6 }} />
                      Creator: {truncateAddress(agent.creator)}
                    </div>
                    <div style={{ marginBottom: 8 }}>
                      Created: {formatDate(agent.createdAt)}
                    </div>
                    {agent.tokenSymbol && (
                      <div>
                        Token: <Tag color="blue">{agent.tokenSymbol}</Tag>
                      </div>
                    )}
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </div>

      {/* Create Agent Modal */}
      <Modal
        title="Create New AI Agent"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        width={600}
        destroyOnClose
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleCreateAgent}
        >
          <Form.Item
            name="name"
            label="Agent Name"
            rules={[
              { required: true, message: 'Please enter agent name' },
              { min: 2, max: 20, message: 'Name length should be between 2-20 characters' }
            ]}
          >
            <Input 
              placeholder="Give your AI Agent a name"
              size="large"
            />
          </Form.Item>
          
          <Form.Item
            name="description"
            label="Description"
            rules={[
              { required: true, message: 'Please enter agent description' },
              { min: 10, max: 200, message: 'Description length should be between 10-200 characters' }
            ]}
          >
            <TextArea
              placeholder="Describe your AI Agent's functions and features"
              rows={4}
              showCount
              maxLength={200}
            />
          </Form.Item>
          
          <Form.Item style={{ marginBottom: 0, textAlign: "right" }}>
            <Space>
              <Button onClick={() => setIsModalVisible(false)}>
                Cancel
              </Button>
              <Button 
                type="primary" 
                htmlType="submit"
                loading={submitting}
                style={{
                  background: "linear-gradient(135deg, #52c41a 0%, #73d13d 100%)",
                  border: "none"
                }}
              >
                Create Agent
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AgentsListPage;
