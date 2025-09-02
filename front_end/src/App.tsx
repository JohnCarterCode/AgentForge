import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AgentsListPage from "./components/AgentsListPage";
import AgentChatPage from "./components/AgentChatPage";
import GeneralChatPage from "./components/GeneralChatPage";
import WalletConnectButton from "./components/WalletConnectButton";
import Navigation from "./components/Navigation";
import { AgentsProvider } from "./contexts/AgentsContext";

const App: React.FC = () => {
  return (
    <AgentsProvider>
      <Router>
        <div style={{ position: "relative" }}>
          <WalletConnectButton />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/agents" element={<AgentsListPage />} />
            <Route path="/chat" element={<GeneralChatPage />} />
            <Route path="/chat/:agentId" element={<AgentChatPage />} />
          </Routes>
          <Navigation />
        </div>
      </Router>
    </AgentsProvider>
  );
};

export default App;
