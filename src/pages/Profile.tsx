
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button-custom';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/layout/Footer';
import FadeIn from '@/components/animations/FadeIn';
import { CreditCard, Edit, Lock, MailCheck, User as UserIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('account');

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user) {
    return <div>Loading...</div>;
  }

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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12 bg-gradient-to-b from-background to-accent/30">
        <div className="container px-4 md:px-6">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="p-6 text-center border-b border-gray-100">
                    <div className="relative mx-auto w-24 h-24 rounded-full bg-primary/10 text-primary flex items-center justify-center text-4xl font-semibold mb-4">
                      {user.name.charAt(0).toUpperCase()}
                      <button className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-sm border border-gray-200">
                        <Edit className="h-4 w-4 text-gray-500" />
                      </button>
                    </div>
                    <h2 className="text-xl font-bold">{user.name}</h2>
                    <p className="text-muted-foreground">{user.email}</p>
                    
                    {user.trialActive && (
                      <div className="mt-3 inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                        {trialDaysRemaining > 0 ? `Trial: ${trialDaysRemaining} days left` : 'Trial ended'}
                      </div>
                    )}
                  </div>
                  
                  <nav className="p-2">
                    <button
                      className={`w-full text-left px-4 py-2 rounded-lg flex items-center ${
                        activeTab === 'account' ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-gray-50'
                      }`}
                      onClick={() => setActiveTab('account')}
                    >
                      <UserIcon className="h-5 w-5 mr-3" />
                      Account Information
                    </button>
                    
                    <button
                      className={`w-full text-left px-4 py-2 rounded-lg flex items-center ${
                        activeTab === 'password' ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-gray-50'
                      }`}
                      onClick={() => setActiveTab('password')}
                    >
                      <Lock className="h-5 w-5 mr-3" />
                      Password & Security
                    </button>
                    
                    <button
                      className={`w-full text-left px-4 py-2 rounded-lg flex items-center ${
                        activeTab === 'billing' ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-gray-50'
                      }`}
                      onClick={() => setActiveTab('billing')}
                    >
                      <CreditCard className="h-5 w-5 mr-3" />
                      Billing & Subscription
                    </button>
                    
                    <button
                      className={`w-full text-left px-4 py-2 rounded-lg flex items-center ${
                        activeTab === 'notifications' ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-gray-50'
                      }`}
                      onClick={() => setActiveTab('notifications')}
                    >
                      <MailCheck className="h-5 w-5 mr-3" />
                      Notifications
                    </button>
                  </nav>
                  
                  <div className="p-4 border-t border-gray-100">
                    <Button 
                      variant="outline" 
                      className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                      onClick={handleLogout}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      Logout
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  {activeTab === 'account' && (
                    <div className="p-6">
                      <h2 className="text-xl font-bold mb-6">Account Information</h2>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-muted-foreground mb-1">Full Name</label>
                          <input
                            type="text"
                            value={user.name}
                            readOnly
                            className="w-full p-3 rounded-md border border-input bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-muted-foreground mb-1">Email Address</label>
                          <input
                            type="email"
                            value={user.email}
                            readOnly
                            className="w-full p-3 rounded-md border border-input bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-muted-foreground mb-1">Account Created</label>
                          <input
                            type="text"
                            value={new Date(user.createdAt).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                            readOnly
                            className="w-full p-3 rounded-md border border-input bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        
                        <div className="pt-4">
                          <Button>
                            <Edit className="h-4 w-4 mr-2" />
                            Edit Profile
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 'password' && (
                    <div className="p-6">
                      <h2 className="text-xl font-bold mb-6">Password & Security</h2>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-muted-foreground mb-1">Current Password</label>
                          <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full p-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-muted-foreground mb-1">New Password</label>
                          <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full p-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-muted-foreground mb-1">Confirm New Password</label>
                          <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full p-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        
                        <div className="pt-4">
                          <Button>Update Password</Button>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 'billing' && (
                    <div className="p-6">
                      <h2 className="text-xl font-bold mb-6">Billing & Subscription</h2>
                      
                      {user.trialActive ? (
                        <div className="space-y-6">
                          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                            <h3 className="font-semibold text-blue-800 flex items-center">
                              <CreditCard className="h-5 w-5 mr-2" />
                              Trial Subscription
                            </h3>
                            <p className="mt-1 text-blue-700">
                              You are currently on a trial plan that will expire in {trialDaysRemaining} days.
                            </p>
                          </div>
                          
                          <div>
                            <h3 className="font-semibold mb-3">Payment Method</h3>
                            <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-between">
                              <div className="flex items-center">
                                <div className="h-10 w-16 bg-gray-100 rounded flex items-center justify-center mr-3">
                                  <CreditCard className="h-6 w-6 text-gray-500" />
                                </div>
                                <div>
                                  <p className="font-medium">•••• •••• •••• 1234</p>
                                  <p className="text-sm text-muted-foreground">Expires 12/25</p>
                                </div>
                              </div>
                              <Button variant="outline" size="sm">Update</Button>
                            </div>
                          </div>
                          
                          <div className="pt-4">
                            <Button className="w-full lg:w-auto">Upgrade to Premium</Button>
                          </div>
                        </div>
                      ) : (
                        <div className="text-center py-10">
                          <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                            <CreditCard className="h-8 w-8 text-muted-foreground" />
                          </div>
                          <h3 className="text-lg font-semibold mb-2">No Active Subscription</h3>
                          <p className="text-muted-foreground max-w-md mx-auto mb-6">
                            Start your free trial today to access all premium features and services.
                          </p>
                          <Link to="/trial-signup">
                            <Button>Start Free Trial</Button>
                          </Link>
                        </div>
                      )}
                    </div>
                  )}
                  
                  {activeTab === 'notifications' && (
                    <div className="p-6">
                      <h2 className="text-xl font-bold mb-6">Notification Preferences</h2>
                      
                      <div className="space-y-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Email Notifications</h4>
                            <p className="text-sm text-muted-foreground">Receive important account updates via email</p>
                          </div>
                          <div className="h-6 w-11 bg-primary rounded-full relative cursor-pointer">
                            <span className="absolute right-1 top-1 h-4 w-4 bg-white rounded-full"></span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Marketing Communications</h4>
                            <p className="text-sm text-muted-foreground">Receive offers, promotions and news</p>
                          </div>
                          <div className="h-6 w-11 bg-gray-200 rounded-full relative cursor-pointer">
                            <span className="absolute left-1 top-1 h-4 w-4 bg-white rounded-full"></span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Security Alerts</h4>
                            <p className="text-sm text-muted-foreground">Get notified about important security events</p>
                          </div>
                          <div className="h-6 w-11 bg-primary rounded-full relative cursor-pointer">
                            <span className="absolute right-1 top-1 h-4 w-4 bg-white rounded-full"></span>
                          </div>
                        </div>
                        
                        <div className="pt-4">
                          <Button>Save Preferences</Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                {user.trialActive ? (
                  <div className="mt-6">
                    <Link to="/dashboard">
                      <Button className="w-full" variant="outline">
                        Go to Dashboard
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className="mt-6 bg-primary/5 rounded-xl p-6 border border-primary/10">
                    <h3 className="text-lg font-semibold mb-2">Ready to experience the full platform?</h3>
                    <p className="text-muted-foreground mb-4">
                      Start your 30-day free trial to access all premium features and tools.
                    </p>
                    <Link to="/trial-signup">
                      <Button>Start Free Trial</Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </FadeIn>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
