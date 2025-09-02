# Technical Writeup: Agent Forge - AI Agent Minting Platform

## 1. Introduction

**Agent Forge** is a one-click AI Agent and Token minting platform powered by **AO × Arweave**.  
It enables users to easily create, customize, and deploy AI agents while issuing exclusive tokens that support economic models.  
The system integrates **trusted AI inference**, **blockchain-backed verification**, and **modern Web3 user experience**.  

---

## 2. Core Features

- **AI Agent Minting**: One-click minting of exclusive AI agents with personalized customization  
- **Token Issuance**: Issue exclusive tokens for your AI agents and build sustainable economic models  
- **Trusted Computing**: TEE-based trusted execution environment ensuring credibility of AI inference results  
- **High Performance**: High-performance computing capabilities provided by AO network for fast response  

---

## 3. Technical Architecture

- **Frontend**: React + TypeScript + Ant Design  
- **Blockchain**: Arweave + AO Network  
- **AI Service**: APUS (AI Processing Unit Service)  
- **Wallet**: Arweave Wallet Kit  

---

## 4. Page Structure

### 4.1 Homepage (`/`)
- Product introduction and feature showcase  
- Core feature explanations  
- Quick navigation to other functions  

### 4.2 Agents List Page (`/agents`)
- View all created AI Agents  
- Create new AI Agents  
- Manage existing Agents (edit, delete)  

### 4.3 General Chat Page (`/chat`)
- Chat with APUS AI service  
- Display trusted computing proofs  
- Support for attestation information display  

### 4.4 Agent Detail Page (`/chat/:agentId`)
- Display detailed information of a specific Agent  
- Chat with specific Agent  
- Reuse chat components and attestation functionality  

---

## 5. Key Features

### Modern UI/UX
- Gradient backgrounds and glassmorphism effects  
- Responsive design supporting various devices  
- Intuitive navigation and interactions  

### Blockchain Integration
- Arweave wallet connection  
- AO network message passing  
- Trusted computing proofs  

### AI Chat Functionality
- Real-time AI responses  
- Attestation information display  
- Chat history records  

---

## 6. Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Connect Wallet**
   - Use Arweave wallet to connect  
   - Gain access permissions  

4. **Start Using**
   - Browse homepage to understand features  
   - Create your first AI Agent  
   - Start AI chat experience  

---

## 7. Project Structure

```
src/
├── components/
│   ├── HomePage.tsx            # Homepage
│   ├── AgentsListPage.tsx      # Agents list page
│   ├── AgentChatPage.tsx       # Agent detail/chat page
│   ├── GeneralChatPage.tsx     # General chat page
│   ├── ChatBox.tsx             # Chat component
│   ├── AttestationSection.tsx  # Attestation info component
│   ├── WalletConnectButton.tsx # Wallet connection component
│   └── Navigation.tsx          # Navigation component
├── contexts/
│   └── WalletContext.tsx       # Wallet context
├── config/
│   └── index.ts                # Configuration file
└── App.tsx                     # Main application component
```

---

## 8. Configuration

Configure in `src/config/index.ts`:  

- `aoProcessId`: Your AO process ID  
- `apusHyperbeamNodeUrl`: APUS service node URL  
- `defaultAttestedBy`: Default attestation provider list  

---

## 9. Design Highlights

- **Visual Hierarchy**: Gradient backgrounds and glassmorphism effects to create depth  
- **Color Scheme**: Blue-purple gradient theme, professional and modern  
- **Interactive Feedback**: Real-time status updates and error prompts  
- **Information Display**: Clear separation of chat and attestation information for better clarity  

---

## 10. Future Plans

- [ ] Support for more AI models  
- [ ] Add Agent marketplace functionality  
- [ ] Implement Token economic model  
- [ ] Add community features  
- [ ] Support Agent training and customization  

---

## 11. License

MIT License  

---

## 12. Contributing

We welcome contributions! Please submit Issues and Pull Requests.  

---

**Agent Forge** - Making AI Agent creation simple and trustworthy
