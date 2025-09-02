import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import ChatBox from "./ChatBox";
import AttestationSection from "./AttestationSection";

const { Title } = Typography;

interface AttestationInfo {
  runtimeMeasurement: string;
  tlsFingerprint: string;
  attestedBy: string[];
}

const GeneralChatPage: React.FC = () => {
  const navigate = useNavigate();
  const [attestation, setAttestation] = useState<AttestationInfo | null>(null);

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
            onClick={() => navigate('/')}
            style={{
              background: "rgba(255,255,255,0.2)",
              border: "1px solid rgba(255,255,255,0.3)",
              color: "white",
              borderRadius: "8px",
              marginBottom: 24
            }}
          >
            Back to Home
          </Button>
          
          <Title style={{ 
            textAlign: "center", 
            color: "white", 
            fontSize: "2.5rem",
            fontWeight: 700,
            marginBottom: 60,
            textShadow: "0 2px 4px rgba(0,0,0,0.3)",
            letterSpacing: "0.5px"
          }}>
            APUS Chat Attestation
          </Title>
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

export default GeneralChatPage; 