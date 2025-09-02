import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Agent {
  id: string;
  name: string;
  description: string;
  creator: string;
  createdAt: number;
  tokenSymbol?: string;
  status: 'active' | 'inactive';
}

interface AgentsContextType {
  agents: Agent[];
  addAgent: (agent: Agent) => void;
  updateAgent: (id: string, updates: Partial<Agent>) => void;
  deleteAgent: (id: string) => void;
  getAgent: (id: string) => Agent | undefined;
}

const AgentsContext = createContext<AgentsContextType | undefined>(undefined);

// Default mock agents
const DEFAULT_AGENTS: Agent[] = [
  {
    id: "1",
    name: "AI Assistant XiaoZhi",
    description: "An intelligent AI assistant that can help users answer various questions, provide professional advice and creative inspiration.",
    creator: "0x1234...5678",
    createdAt: Date.now() - 86400000,
    tokenSymbol: "XIAOZHI",
    status: 'active'
  },
  {
    id: "2",
    name: "Creative Writing Master",
    description: "Professional creative writing AI, skilled in story creation, poetry writing and copywriting planning, inspiring unlimited creativity.",
    creator: "0x8765...4321",
    createdAt: Date.now() - 172800000,
    tokenSymbol: "CREATIVE",
    status: 'active'
  },
  {
    id: "3",
    name: "Data Analysis Expert",
    description: "Professional data analysis AI that can process complex data and provide insights and visualization recommendations.",
    creator: "0x9999...8888",
    createdAt: Date.now() - 259200000,
    tokenSymbol: "DATA",
    status: 'inactive'
  }
];

export const AgentsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [agents, setAgents] = useState<Agent[]>(DEFAULT_AGENTS);

  // Load agents from localStorage on mount
  useEffect(() => {
    const savedAgents = localStorage.getItem('agents');
    if (savedAgents) {
      try {
        const parsedAgents = JSON.parse(savedAgents);
        setAgents(parsedAgents);
      } catch (error) {
        console.error('Failed to parse saved agents:', error);
        setAgents(DEFAULT_AGENTS);
      }
    }
  }, []);

  // Save agents to localStorage whenever agents change
  useEffect(() => {
    localStorage.setItem('agents', JSON.stringify(agents));
  }, [agents]);

  const addAgent = (agent: Agent) => {
    setAgents(prev => [agent, ...prev]);
  };

  const updateAgent = (id: string, updates: Partial<Agent>) => {
    setAgents(prev => prev.map(agent => 
      agent.id === id ? { ...agent, ...updates } : agent
    ));
  };

  const deleteAgent = (id: string) => {
    setAgents(prev => prev.filter(agent => agent.id !== id));
  };

  const getAgent = (id: string) => {
    return agents.find(agent => agent.id === id);
  };

  const value: AgentsContextType = {
    agents,
    addAgent,
    updateAgent,
    deleteAgent,
    getAgent
  };

  return (
    <AgentsContext.Provider value={value}>
      {children}
    </AgentsContext.Provider>
  );
};

export const useAgents = (): AgentsContextType => {
  const context = useContext(AgentsContext);
  if (context === undefined) {
    throw new Error('useAgents must be used within an AgentsProvider');
  }
  return context;
};
