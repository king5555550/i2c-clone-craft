import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button-custom';
import FadeIn from '@/components/animations/FadeIn';
import DashboardTools from '@/components/dashboard/DashboardTools';
import { 
  BarChart, CreditCard, Files, Home, LifeBuoy, 
  LogOut, PieChart, Plus, Settings, Users, Wallet,
  Bell, Search, Shield, LineChart, Terminal, Database,
  ExternalLink, ChevronDown, Layers, Lock, Calendar
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

const DashboardHeader = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  
  const handleLogout = () => {
    logout();
    navigate('/');
  };
  
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-30">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold text-foreground mr-10">
            i2c<span className="text-primary">Inc</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/dashboard" className="text-sm font-medium text-primary flex items-center">
              <Home className="h-4 w-4 mr-1" />
              Dashboard
            </Link>
            <Link to="/dashboard" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center">
              <Wallet className="h-4 w-4 mr-1" />
              Payments
            </Link>
            <Link to="/dashboard" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center">
              <BarChart className="h-4 w-4 mr-1" />
              Analytics
            </Link>
            <Link to="/dashboard" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center">
              <Users className="h-4 w-4 mr-1" />
              Users
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="pl-10 pr-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 w-[180px] lg:w-[300px]" 
            />
          </div>
          
          <div className="relative">
            <button
              className="p-1.5 rounded-full hover:bg-gray-100 relative"
              onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
            >
              <Bell className="h-5 w-5 text-gray-600" />
              <span className="absolute top-0 right-0 h-2.5 w-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            
            {isNotificationsOpen && (
              <div className="absolute right-0 mt-2 w-80 rounded-md bg-white shadow-lg border border-gray-200 py-1 z-40">
                <div className="px-4 py-2 border-b border-gray-100 flex justify-between items-center">
                  <p className="text-sm font-medium">Notifications</p>
                  <button className="text-xs text-primary">Mark all as read</button>
                </div>
                <div className="max-h-[400px] overflow-y-auto">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="px-4 py-3 hover:bg-gray-50 border-b border-gray-100">
                      <div className="flex items-start">
                        <div className={`h-9 w-9 rounded-full flex items-center justify-center mr-3 ${
                          item % 3 === 0 ? 'bg-blue-100 text-blue-600' : 
                          item % 3 === 1 ? 'bg-green-100 text-green-600' : 
                          'bg-yellow-100 text-yellow-600'
                        }`}>
                          {item % 3 === 0 ? <Bell className="h-5 w-5" /> : 
                           item % 3 === 1 ? <CreditCard className="h-5 w-5" /> : 
                           <Shield className="h-5 w-5" />}
                        </div>
                        <div>
                          <p className="text-sm font-medium">
                            {item % 3 === 0 ? 'New feature available' : 
                             item % 3 === 1 ? 'Payment processed' : 
                             'Security alert'}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {item % 3 === 0 ? 'Check out our latest API endpoints' : 
                             item % 3 === 1 ? 'Your monthly subscription was processed' : 
                             'New login from unknown device detected'}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {new Date().toLocaleDateString()} • {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-4 py-2 border-t border-gray-100">
                  <button className="text-sm text-primary font-medium w-full text-center">
                    View all notifications
                  </button>
                </div>
              </div>
            )}
          </div>
          
          <Button variant="outline" size="sm" className="hidden md:flex">
            <LifeBuoy className="h-4 w-4 mr-1" />
            Support
          </Button>
          
          <div className="relative">
            <button
              className="flex items-center space-x-1 rounded-full bg-accent p-1.5 pl-2.5"
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
            >
              <span className="text-sm font-medium">{user?.name?.split(' ')[0]}</span>
              <div className="h-7 w-7 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                {user?.name?.charAt(0).toUpperCase()}
              </div>
            </button>
            
            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-md bg-white shadow-lg border border-gray-200 py-1 z-40">
                <div className="px-4 py-2 border-b border-gray-100">
                  <p className="text-sm font-medium">{user?.name}</p>
                  <p className="text-xs text-muted-foreground">{user?.email}</p>
                </div>
                <Link to="/profile" className="flex items-center px-4 py-2 text-sm hover:bg-gray-50">
                  <Settings className="h-4 w-4 mr-2" />
                  Account settings
                </Link>
                <button 
                  className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-50 w-full text-left"
                  onClick={handleLogout}
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

const DashboardSidebar = () => {
  const { user } = useAuth();
  const [expandedSection, setExpandedSection] = useState<string | null>('main');

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  const getTrialDaysRemaining = () => {
    if (!user?.trialActive || !user?.trialEndDate) return 0;
    
    const endDate = new Date(user.trialEndDate);
    const now = new Date();
    const diffTime = endDate.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };
  
  const trialDaysRemaining = getTrialDaysRemaining();
  
  return (
    <aside className="hidden lg:block w-64 border-r border-gray-200 h-[calc(100vh-61px)] sticky top-[61px] bg-white overflow-y-auto">
      <div className="p-4">
        <Button className="w-full justify-start gap-2">
          <Plus className="h-4 w-4" />
          New Transaction
        </Button>
      </div>
      
      {user?.trialActive && (
        <div className="mx-4 mb-4 p-3 bg-blue-50 border border-blue-100 rounded-lg">
          <div className="flex items-center">
            <div className="mr-3 h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
              <Calendar className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-medium text-blue-800">Trial Status</p>
              <p className="text-xs text-blue-700">{trialDaysRemaining} days remaining</p>
            </div>
          </div>
          <div className="mt-2 w-full bg-blue-200 rounded-full h-1.5">
            <div 
              className="bg-blue-600 h-1.5 rounded-full" 
              style={{ width: `${(trialDaysRemaining / 30) * 100}%` }}
            ></div>
          </div>
          <Button 
            variant="outline" 
            className="mt-3 w-full bg-white text-blue-700 border-blue-200 hover:bg-blue-50 text-xs py-1"
          >
            Upgrade Now
          </Button>
        </div>
      )}
      
      <nav className="mt-2">
        <div className="px-3 py-2">
          <button 
            onClick={() => toggleSection('main')}
            className="flex items-center justify-between w-full text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2"
          >
            <span>Main</span>
            <ChevronDown className={`h-3 w-3 transition-transform ${expandedSection === 'main' ? 'rotate-180' : ''}`} />
          </button>
          
          {expandedSection === 'main' && (
            <div className="mt-2 space-y-1">
              <Link 
                to="/dashboard" 
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-primary/10 text-primary"
              >
                <Home className="h-5 w-5 mr-2" />
                Overview
              </Link>
              <Link 
                to="/dashboard" 
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:bg-gray-50"
              >
                <Wallet className="h-5 w-5 mr-2" />
                Payments
              </Link>
              <Link 
                to="/dashboard" 
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:bg-gray-50"
              >
                <CreditCard className="h-5 w-5 mr-2" />
                Cards
              </Link>
              <Link 
                to="/dashboard" 
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:bg-gray-50"
              >
                <Database className="h-5 w-5 mr-2" />
                Data Management
              </Link>
            </div>
          )}
        </div>
        
        <div className="px-3 py-2">
          <button 
            onClick={() => toggleSection('reports')}
            className="flex items-center justify-between w-full text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2"
          >
            <span>Reports</span>
            <ChevronDown className={`h-3 w-3 transition-transform ${expandedSection === 'reports' ? 'rotate-180' : ''}`} />
          </button>
          
          {expandedSection === 'reports' && (
            <div className="mt-2 space-y-1">
              <Link 
                to="/dashboard" 
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:bg-gray-50"
              >
                <BarChart className="h-5 w-5 mr-2" />
                Analytics
              </Link>
              <Link 
                to="/dashboard" 
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:bg-gray-50"
              >
                <LineChart className="h-5 w-5 mr-2" />
                Trends
              </Link>
              <Link 
                to="/dashboard" 
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:bg-gray-50"
              >
                <PieChart className="h-5 w-5 mr-2" />
                Reports
              </Link>
              <Link 
                to="/dashboard" 
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:bg-gray-50"
              >
                <Files className="h-5 w-5 mr-2" />
                Documents
              </Link>
            </div>
          )}
        </div>
        
        <div className="px-3 py-2">
          <button 
            onClick={() => toggleSection('premium')}
            className="flex items-center justify-between w-full text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2"
          >
            <span>Premium Tools</span>
            <ChevronDown className={`h-3 w-3 transition-transform ${expandedSection === 'premium' ? 'rotate-180' : ''}`} />
          </button>
          
          {expandedSection === 'premium' && (
            <div className="mt-2 space-y-1">
              <div className="px-3 py-2 text-sm font-medium rounded-md text-muted-foreground flex items-center justify-between">
                <div className="flex items-center">
                  <Terminal className="h-5 w-5 mr-2" />
                  <span>API Access</span>
                </div>
                {user?.trialActive ? (
                  <span className="text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded">Active</span>
                ) : (
                  <Lock className="h-4 w-4 text-muted-foreground" />
                )}
              </div>
              <div className="px-3 py-2 text-sm font-medium rounded-md text-muted-foreground flex items-center justify-between">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  <span>Advanced Security</span>
                </div>
                {user?.trialActive ? (
                  <span className="text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded">Active</span>
                ) : (
                  <Lock className="h-4 w-4 text-muted-foreground" />
                )}
              </div>
              <div className="px-3 py-2 text-sm font-medium rounded-md text-muted-foreground flex items-center justify-between">
                <div className="flex items-center">
                  <Layers className="h-5 w-5 mr-2" />
                  <span>Integrations</span>
                </div>
                {user?.trialActive ? (
                  <span className="text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded">Active</span>
                ) : (
                  <Lock className="h-4 w-4 text-muted-foreground" />
                )}
              </div>
            </div>
          )}
        </div>
      </nav>
      
      <div className="px-3 py-5 mt-6 border-t border-gray-100">
        <div className="space-y-4">
          <Link 
            to="/profile" 
            className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:bg-gray-50"
          >
            <Settings className="h-5 w-5 mr-2" />
            Settings
          </Link>
          <a 
            href="https://docs.i2cinc.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:bg-gray-50"
          >
            <ExternalLink className="h-5 w-5 mr-2" />
            Documentation
          </a>
        </div>
      </div>
    </aside>
  );
};

const MetricCard = ({ title, value, icon, change, isPremium = false }: { 
  title: string; 
  value: string; 
  icon: React.ReactNode; 
  change?: { value: string; positive: boolean };
  isPremium?: boolean;
}) => {
  const { user } = useAuth();
  const canAccessPremium = user?.trialActive || false;
  
  if (isPremium && !canAccessPremium) {
    return (
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm relative overflow-hidden">
        <div className="filter blur-sm pointer-events-none">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold mt-1">---</p>
            {change && (
              <div className={`flex items-center mt-2 text-xs font-medium`}>
                ---%
              </div>
            )}
          </div>
          <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center absolute top-6 right-6">
            {icon}
          </div>
        </div>
        <div className="absolute inset-0 bg-white/50 flex flex-col items-center justify-center">
          <Lock className="h-6 w-6 text-muted-foreground mb-2" />
          <p className="text-sm font-medium text-center px-4">Premium Feature</p>
          <Button 
            variant="outline" 
            size="sm" 
            className="mt-2"
            onClick={() => {
              toast({
                title: "Premium Feature",
                description: "Start your free trial to access this feature",
              });
            }}
          >
            Start Free Trial
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      <div className="flex justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
          {change && (
            <div className={`flex items-center mt-2 text-xs font-medium ${change.positive ? 'text-green-600' : 'text-red-600'}`}>
              {change.positive ? '+' : ''}{change.value}
              <span className="ml-1">{change.positive ? '↑' : '↓'}</span>
            </div>
          )}
        </div>
        <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
          {icon}
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">You need to be logged in</h1>
          <Button onClick={() => navigate('/login')}>Log In</Button>
        </div>
      </div>
    );
  }
  
  const getTrialDaysRemaining = () => {
    if (!user?.trialActive || !user?.trialEndDate) return 0;
    
    const endDate = new Date(user.trialEndDate);
    const now = new Date();
    const diffTime = endDate.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };
  
  const trialDaysRemaining = getTrialDaysRemaining();
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <DashboardHeader />
      
      <div className="flex flex-1">
        <DashboardSidebar />
        
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <FadeIn>
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 md:mb-8">
                <div>
                  <h1 className="text-xl md:text-2xl font-bold">Welcome back, {user?.name.split(' ')[0]}</h1>
                  <p className="text-muted-foreground mt-1">Here's what's happening with your account today.</p>
                </div>
                
                {user?.trialActive ? (
                  <div className="mt-4 md:mt-0 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg flex items-center text-sm font-medium">
                    <CreditCard className="h-4 w-4 mr-2" />
                    {trialDaysRemaining > 0 ? (
                      <span>{trialDaysRemaining} days left in your trial</span>
                    ) : (
                      <span>Your trial has ended</span>
                    )}
                  </div>
                ) : (
                  <Link to="/trial-signup" className="mt-4 md:mt-0">
                    <Button size="sm" className="gap-2">
                      <CreditCard className="h-4 w-4" />
                      Start Free Trial
                    </Button>
                  </Link>
                )}
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
                <MetricCard
                  title="Total Transactions"
                  value="$24,780"
                  icon={<Wallet className="h-6 w-6" />}
                  change={{ value: "12%", positive: true }}
                />
                <MetricCard
                  title="Active Users"
                  value="573"
                  icon={<Users className="h-6 w-6" />}
                  change={{ value: "8%", positive: true }}
                />
                <MetricCard
                  title="Conversion Rate"
                  value="3.2%"
                  icon={<BarChart className="h-6 w-6" />}
                  change={{ value: "0.5%", positive: false }}
                  isPremium={true}
                />
                <MetricCard
                  title="Active Cards"
                  value="28"
                  icon={<CreditCard className="h-6 w-6" />}
                  isPremium={true}
                />
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                    <div className="p-4 md:p-6 border-b border-gray-200 flex justify-between items-center">
                      <h2 className="text-lg font-bold">Recent Transactions</h2>
                      <div className="flex items-center space-x-2">
                        <select className="text-sm border border-gray-200 rounded-md p-1.5 bg-white">
                          <option>All transactions</option>
                          <option>Payments</option>
                          <option>Deposits</option>
                          <option>Withdrawals</option>
                        </select>
                      </div>
                    </div>
                    <div className="divide-y divide-gray-200">
                      {[1, 2, 3, 4, 5].map((item) => (
                        <div key={item} className="px-4 md:px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                          <div className="flex items-center">
                            <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 mr-3">
                              {item % 2 === 0 ? <CreditCard className="h-5 w-5" /> : <Wallet className="h-5 w-5" />}
                            </div>
                            <div>
                              <p className="font-medium">Transaction #{1000 + item}</p>
                              <p className="text-sm text-muted-foreground">
                                {new Date().toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">${(Math.random() * 1000).toFixed(2)}</p>
                            <p className={`text-xs ${item % 4 === 0 ? 'text-yellow-600' : 'text-green-600'}`}>
                              {item % 4 === 0 ? 'Pending' : 'Completed'}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="p-4 border-t border-gray-200 bg-gray-50">
                      <Button variant="outline" className="w-full">View All Transactions</Button>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-gray-200">
                      <h2 className="text-lg font-bold">Account Overview</h2>
                    </div>
                    <div className="p-6">
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Account Status</p>
                          <p className="font-medium mt-1 flex items-center text-green-600">
                            <span className="h-2 w-2 rounded-full bg-green-600 mr-2"></span>
                            Active
                          </p>
                        </div>
                        
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Plan</p>
                          <p className="font-medium mt-1">
                            {user?.trialActive ? 'Trial Plan' : 'Free Plan'}
                          </p>
                        </div>
                        
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">User Since</p>
                          <p className="font-medium mt-1">
                            {new Date(user?.createdAt || '').toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </p>
                        </div>
                        
                        {user?.trialActive && user?.trialEndDate && (
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">Trial Ends</p>
                            <p className="font-medium mt-1">
                              {new Date(user.trialEndDate).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                              })}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="p-6 border-t border-gray-200 space-y-3">
                      {!user.trialActive ? (
                        <Link to="/trial-signup">
                          <Button className="w-full">Start Free Trial</Button>
                        </Link>
                      ) : (
                        <Button className="w-full">Upgrade Plan</Button>
                      )}
                      <Link to="/profile">
                        <Button variant="outline" className="w-full">
                          Account Settings
                        </Button>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-gray-200">
                      <h2 className="text-lg font-bold">Premium Features</h2>
                    </div>
                    <div className="p-4">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className={`mt-0.5 mr-3 h-5 w-5 rounded-full flex items-center justify-center ${user?.trialActive ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
                            {user?.trialActive ? '✓' : ''}
                          </div>
                          <div>
                            <p className="font-medium">Advanced Analytics</p>
                            <p className="text-sm text-muted-foreground">Detailed insights and custom reports</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className={`mt-0.5 mr-3 h-5 w-5 rounded-full flex items-center justify-center ${user?.trialActive ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
                            {user?.trialActive ? '✓' : ''}
                          </div>
                          <div>
                            <p className="font-medium">API Access</p>
                            <p className="text-sm text-muted-foreground">Full API access with higher rate limits</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className={`mt-0.5 mr-3 h-5 w-5 rounded-full flex items-center justify-center ${user?.trialActive ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
                            {user?.trialActive ? '✓' : ''}
                          </div>
                          <div>
                            <p className="font-medium">Priority Support</p>
                            <p className="text-sm text-muted-foreground">24/7 dedicated technical support</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {!user.trialActive && (
                      <div className="p-4 border-t border-gray-100">
                        <Link to="/trial-signup">
                          <Button variant="outline" className="w-full">
                            Start 30-Day Free Trial
                          </Button>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <DashboardTools />
            </div>
          </FadeIn>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

