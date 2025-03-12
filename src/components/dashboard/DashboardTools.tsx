import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button-custom';
import { 
  BarChart, PieChart, DatabaseZap, Shield, 
  Webhook, FileJson, Zap, CreditCard, Boxes, BadgeAlert, Workflow
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface ToolCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isPremium: boolean;
  onClick: () => void;
}

const ToolCard: React.FC<ToolCardProps> = ({
  icon,
  title,
  description,
  isPremium,
  onClick
}) => {
  const { user } = useAuth();
  const canAccessPremium = user?.trialActive || false;

  return (
    <div 
      className={`group relative p-6 border rounded-xl shadow-sm transition-all duration-300 ${
        isPremium && !canAccessPremium 
          ? 'bg-gray-50 border-gray-200' 
          : 'bg-white border-gray-100 hover:border-primary/30 hover:shadow-md'
      }`}
    >
      <div className={isPremium && !canAccessPremium ? "opacity-50" : ""}>
        <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>

      {isPremium && (
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 text-xs rounded-full font-medium ${
            canAccessPremium 
              ? 'bg-green-100 text-green-800' 
              : 'bg-gray-200 text-gray-800'
          }`}>
            Premium
          </span>
        </div>
      )}

      <div className="mt-4">
        <Button 
          onClick={onClick}
          variant={isPremium && !canAccessPremium ? "outline" : "default"}
          className="w-full justify-center"
          disabled={isPremium && !canAccessPremium}
        >
          {isPremium && !canAccessPremium ? "Upgrade to Access" : "Launch Tool"}
        </Button>
      </div>
    </div>
  );
};

const DashboardTools = () => {
  const { user } = useAuth();
  const canAccessPremium = user?.trialActive || false;

  const handleToolClick = (toolName: string, isPremium: boolean) => {
    if (isPremium && !canAccessPremium) {
      toast({
        title: "Premium Tool",
        description: "Start your free trial to access this feature",
      });
      return;
    }
    
    toast({
      title: `Launching ${toolName}`,
      description: "Tool is loading...",
    });
  };

  const tools = [
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Basic Analytics",
      description: "View simple charts and data analytics for your transactions",
      isPremium: false,
    },
    {
      icon: <FileJson className="h-6 w-6" />,
      title: "Data Export",
      description: "Export your transaction data in CSV format",
      isPremium: false,
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Card Management",
      description: "Manage your payment cards and settings",
      isPremium: false,
    },
    {
      icon: <PieChart className="h-6 w-6" />,
      title: "Advanced Analytics",
      description: "Get detailed insights with advanced filtering and visualization",
      isPremium: true,
    },
    {
      icon: <DatabaseZap className="h-6 w-6" />,
      title: "Real-time Monitoring",
      description: "Monitor transactions and events in real time",
      isPremium: true,
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security Dashboard",
      description: "Manage security settings and view security logs",
      isPremium: true,
    },
    {
      icon: <Webhook className="h-6 w-6" />,
      title: "API Integration",
      description: "Connect to third-party services via our API",
      isPremium: true,
    },
    {
      icon: <FileAnalytics className="h-6 w-6" />,
      title: "Custom Reports",
      description: "Create and schedule custom financial reports",
      isPremium: true,
    },
    {
      icon: <Boxes className="h-6 w-6" />,
      title: "Batch Processing",
      description: "Process multiple transactions at once",
      isPremium: true,
    },
    {
      icon: <BadgeAlert className="h-6 w-6" />,
      title: "Alert Management",
      description: "Set up custom alerts for important events",
      isPremium: true,
    },
    {
      icon: <Workflow className="h-6 w-6" />,
      title: "Workflow Automation",
      description: "Create automated workflows for repetitive tasks",
      isPremium: true,
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Performance Optimizer",
      description: "Optimize your payment processing for speed and efficiency",
      isPremium: true,
    }
  ];

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold">Tools & Features</h2>
          <p className="text-muted-foreground">Access our suite of financial management tools</p>
        </div>
        
        {!canAccessPremium && (
          <Link to="/trial-signup">
            <Button size="sm" className="gap-2">
              Start Free Trial
            </Button>
          </Link>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {tools.map((tool, index) => (
          <ToolCard
            key={index}
            icon={tool.icon}
            title={tool.title}
            description={tool.description}
            isPremium={tool.isPremium}
            onClick={() => handleToolClick(tool.title, tool.isPremium)}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardTools;
