
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button-custom';
import FadeIn from '@/components/animations/FadeIn';
import { 
  BarChart, CreditCard, Files, Home, LifeBuoy, 
  LogOut, PieChart, Plus, Settings, Users, Wallet 
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const DashboardHeader = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  
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
            <Link to="/dashboard/payments" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center">
              <Wallet className="h-4 w-4 mr-1" />
              Payments
            </Link>
            <Link to="/dashboard/analytics" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center">
              <BarChart className="h-4 w-4 mr-1" />
              Analytics
            </Link>
            <Link to="/dashboard/users" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center">
              <Users className="h-4 w-4 mr-1" />
              Users
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
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
  return (
    <aside className="hidden lg:block w-64 border-r border-gray-200 h-[calc(100vh-61px)] sticky top-[61px] bg-white">
      <div className="p-4">
        <Button className="w-full justify-start gap-2">
          <Plus className="h-4 w-4" />
          New Transaction
        </Button>
      </div>
      
      <nav className="mt-2">
        <div className="px-3 py-2">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Main
          </h3>
          <div className="mt-2 space-y-1">
            <Link 
              to="/dashboard" 
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-primary/10 text-primary"
            >
              <Home className="h-5 w-5 mr-2" />
              Overview
            </Link>
            <Link 
              to="/dashboard/payments" 
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:bg-gray-50"
            >
              <Wallet className="h-5 w-5 mr-2" />
              Payments
            </Link>
            <Link 
              to="/dashboard/cards" 
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:bg-gray-50"
            >
              <CreditCard className="h-5 w-5 mr-2" />
              Cards
            </Link>
          </div>
        </div>
        
        <div className="px-3 py-2 mt-6">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Reports
          </h3>
          <div className="mt-2 space-y-1">
            <Link 
              to="/dashboard/analytics" 
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:bg-gray-50"
            >
              <BarChart className="h-5 w-5 mr-2" />
              Analytics
            </Link>
            <Link 
              to="/dashboard/reports" 
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:bg-gray-50"
            >
              <PieChart className="h-5 w-5 mr-2" />
              Reports
            </Link>
            <Link 
              to="/dashboard/documents" 
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:bg-gray-50"
            >
              <Files className="h-5 w-5 mr-2" />
              Documents
            </Link>
          </div>
        </div>
      </nav>
    </aside>
  );
};

const MetricCard = ({ title, value, icon, change }: { title: string; value: string; icon: React.ReactNode; change?: { value: string; positive: boolean } }) => {
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
  
  // Calculate trial days remaining if user has an active trial
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
        
        <main className="flex-1 p-6">
          <FadeIn>
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                <div>
                  <h1 className="text-2xl font-bold">Welcome back, {user?.name.split(' ')[0]}</h1>
                  <p className="text-muted-foreground mt-1">Here's what's happening with your account today.</p>
                </div>
                
                {user?.trialActive && (
                  <div className="mt-4 md:mt-0 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg flex items-center text-sm font-medium">
                    <CreditCard className="h-4 w-4 mr-2" />
                    {trialDaysRemaining > 0 ? (
                      <span>{trialDaysRemaining} days left in your trial</span>
                    ) : (
                      <span>Your trial has ended</span>
                    )}
                  </div>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
                />
                <MetricCard
                  title="Active Cards"
                  value="28"
                  icon={<CreditCard className="h-6 w-6" />}
                />
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-gray-200">
                      <h2 className="text-lg font-bold">Recent Transactions</h2>
                    </div>
                    <div className="divide-y divide-gray-200">
                      {[1, 2, 3, 4, 5].map((item) => (
                        <div key={item} className="px-6 py-4 flex items-center justify-between">
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
                            <p className="text-sm text-green-600">Completed</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="p-4 border-t border-gray-200 bg-gray-50">
                      <Button variant="outline" className="w-full">View All Transactions</Button>
                    </div>
                  </div>
                </div>
                
                <div>
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
                      <Button className="w-full">Upgrade Plan</Button>
                      <Link to="/profile">
                        <Button variant="outline" className="w-full">
                          Account Settings
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
