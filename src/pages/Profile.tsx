
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button-custom';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/layout/Footer';
import FadeIn from '@/components/animations/FadeIn';
import { 
  CreditCard, Edit, Lock, MailCheck, User as UserIcon,
  ShieldCheck, Bell, FileText, Settings as SettingsIcon,
  LogOut, Calendar, HelpCircle
} from 'lucide-react';
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
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="custom-loader mx-auto mb-4"></div>
          <h1 className="text-xl font-medium mb-2">Loading your profile</h1>
          <p className="text-muted-foreground">Please wait...</p>
        </div>
      </div>
    );
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
      
      <main className="flex-grow py-6 md:py-12 bg-gradient-to-b from-background to-accent/30">
        <div className="container px-4 md:px-6">
          <FadeIn>
            <div className="mb-6 md:mb-8">
              <h1 className="text-2xl md:text-3xl font-bold">Account Settings</h1>
              <p className="text-muted-foreground">Manage your profile and preferences</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden sticky top-20">
                  <div className="p-6 text-center border-b border-gray-100">
                    <div className="relative mx-auto w-24 h-24 rounded-full bg-primary/10 text-primary flex items-center justify-center text-4xl font-semibold mb-4">
                      {user.name.charAt(0).toUpperCase()}
                      <button className="absolute bottom-0 right-0 bg-white rounded-full p-1.5 shadow-sm border border-gray-200">
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
                      className={`w-full text-left px-4 py-2.5 rounded-lg flex items-center ${
                        activeTab === 'account' ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-gray-50'
                      }`}
                      onClick={() => setActiveTab('account')}
                    >
                      <UserIcon className="h-5 w-5 mr-3" />
                      Account Information
                    </button>
                    
                    <button
                      className={`w-full text-left px-4 py-2.5 rounded-lg flex items-center ${
                        activeTab === 'password' ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-gray-50'
                      }`}
                      onClick={() => setActiveTab('password')}
                    >
                      <Lock className="h-5 w-5 mr-3" />
                      Password & Security
                    </button>
                    
                    <button
                      className={`w-full text-left px-4 py-2.5 rounded-lg flex items-center ${
                        activeTab === 'billing' ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-gray-50'
                      }`}
                      onClick={() => setActiveTab('billing')}
                    >
                      <CreditCard className="h-5 w-5 mr-3" />
                      Billing & Subscription
                    </button>
                    
                    <button
                      className={`w-full text-left px-4 py-2.5 rounded-lg flex items-center ${
                        activeTab === 'notifications' ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-gray-50'
                      }`}
                      onClick={() => setActiveTab('notifications')}
                    >
                      <Bell className="h-5 w-5 mr-3" />
                      Notifications
                    </button>
                    
                    <button
                      className={`w-full text-left px-4 py-2.5 rounded-lg flex items-center ${
                        activeTab === 'preferences' ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-gray-50'
                      }`}
                      onClick={() => setActiveTab('preferences')}
                    >
                      <SettingsIcon className="h-5 w-5 mr-3" />
                      Preferences
                    </button>
                    
                    <button
                      className={`w-full text-left px-4 py-2.5 rounded-lg flex items-center ${
                        activeTab === 'documents' ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-gray-50'
                      }`}
                      onClick={() => setActiveTab('documents')}
                    >
                      <FileText className="h-5 w-5 mr-3" />
                      Documents & Reports
                    </button>
                    
                    <button
                      className={`w-full text-left px-4 py-2.5 rounded-lg flex items-center ${
                        activeTab === 'help' ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-gray-50'
                      }`}
                      onClick={() => setActiveTab('help')}
                    >
                      <HelpCircle className="h-5 w-5 mr-3" />
                      Help & Support
                    </button>
                  </nav>
                  
                  <div className="p-4 border-t border-gray-100">
                    <Button 
                      variant="outline" 
                      className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                      onClick={handleLogout}
                    >
                      <LogOut className="h-5 w-5 mr-2" />
                      Logout
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  {activeTab === 'account' && (
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold">Account Information</h2>
                        <Button size="sm" variant="outline" className="gap-2">
                          <Edit className="h-4 w-4" />
                          Edit
                        </Button>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
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
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-muted-foreground mb-1">User ID</label>
                            <input
                              type="text"
                              value={user.id}
                              readOnly
                              className="w-full p-3 rounded-md border border-input bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm"
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
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-muted-foreground mb-1">Account Status</label>
                          <div className="flex items-center mt-1">
                            <span className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></span>
                            <span className="font-medium">Active</span>
                            {user?.trialActive && (
                              <span className="ml-2 text-sm text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                                Trial Mode
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 'password' && (
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold">Password & Security</h2>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="p-4 bg-yellow-50 border border-yellow-100 rounded-lg mb-6">
                          <div className="flex">
                            <ShieldCheck className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="text-sm font-medium text-yellow-800">Security Recommendation</p>
                              <p className="text-sm text-yellow-700 mt-1">
                                For maximum security, use a strong, unique password and enable two-factor authentication.
                              </p>
                            </div>
                          </div>
                        </div>
                        
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
                          <p className="text-xs text-muted-foreground mt-1">
                            Password must be at least 8 characters with a number and special character.
                          </p>
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
                        
                        <div className="pt-6 border-t border-gray-100 mt-6">
                          <h3 className="font-semibold mb-4">Two-Factor Authentication</h3>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Protect your account with 2FA</p>
                              <p className="text-sm text-muted-foreground">
                                Add an extra layer of security to your account
                              </p>
                            </div>
                            <div className="h-6 w-11 bg-gray-200 rounded-full relative cursor-pointer">
                              <span className="absolute left-1 top-1 h-4 w-4 bg-white rounded-full"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 'billing' && (
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold">Billing & Subscription</h2>
                      </div>
                      
                      {user.trialActive ? (
                        <div className="space-y-6">
                          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                            <div className="flex items-start">
                              <Calendar className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                              <div>
                                <h3 className="font-semibold text-blue-800">Trial Subscription</h3>
                                <p className="text-sm text-blue-700 mt-1">
                                  You are currently on a trial plan that will {trialDaysRemaining > 0 ? 
                                    `expire in ${trialDaysRemaining} days.` : 
                                    'has expired.'}
                                </p>
                              </div>
                            </div>
                            <div className="mt-3 space-y-1">
                              <div className="flex justify-between text-sm">
                                <span className="text-blue-700">Progress:</span>
                                <span className="text-blue-700 font-medium">
                                  {Math.min(100, Math.round(((30 - trialDaysRemaining) / 30) * 100))}%
                                </span>
                              </div>
                              <div className="w-full bg-blue-200 rounded-full h-1.5">
                                <div 
                                  className="bg-blue-600 h-1.5 rounded-full" 
                                  style={{ width: `${Math.min(100, Math.round(((30 - trialDaysRemaining) / 30) * 100))}%` }}
                                ></div>
                              </div>
                            </div>
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
                          
                          <div className="space-y-4">
                            <h3 className="font-semibold">Billing Address</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-sm font-medium text-muted-foreground mb-1">Country</label>
                                <select className="w-full p-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary">
                                  <option>United States</option>
                                  <option>Canada</option>
                                  <option>United Kingdom</option>
                                </select>
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-muted-foreground mb-1">Zip/Postal Code</label>
                                <input
                                  type="text"
                                  placeholder="10001"
                                  className="w-full p-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                              </div>
                            </div>
                          </div>
                          
                          <div className="pt-4 space-y-3">
                            <Button className="w-full">Upgrade to Premium</Button>
                            <Button variant="outline" className="w-full text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200">
                              Cancel Subscription
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="text-center py-8">
                          <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                            <CreditCard className="h-8 w-8 text-muted-foreground" />
                          </div>
                          <h3 className="text-lg font-semibold mb-2">No Active Subscription</h3>
                          <p className="text-muted-foreground max-w-md mx-auto mb-6">
                            Start your free trial today to access all premium features and services.
                          </p>
                          <Link to="/trial-signup">
                            <Button size="lg">Start Free Trial</Button>
                          </Link>
                        </div>
                      )}
                    </div>
                  )}
                  
                  {activeTab === 'notifications' && (
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold">Notification Preferences</h2>
                        <Button size="sm" variant="outline">Save Changes</Button>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="flex items-center justify-between py-3 border-b border-gray-100">
                          <div>
                            <h4 className="font-medium">Email Notifications</h4>
                            <p className="text-sm text-muted-foreground">Receive important account updates via email</p>
                          </div>
                          <div className="h-6 w-11 bg-primary rounded-full relative cursor-pointer">
                            <span className="absolute right-1 top-1 h-4 w-4 bg-white rounded-full"></span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between py-3 border-b border-gray-100">
                          <div>
                            <h4 className="font-medium">Marketing Communications</h4>
                            <p className="text-sm text-muted-foreground">Receive offers, promotions and news</p>
                          </div>
                          <div className="h-6 w-11 bg-gray-200 rounded-full relative cursor-pointer">
                            <span className="absolute left-1 top-1 h-4 w-4 bg-white rounded-full"></span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between py-3 border-b border-gray-100">
                          <div>
                            <h4 className="font-medium">Security Alerts</h4>
                            <p className="text-sm text-muted-foreground">Get notified about important security events</p>
                          </div>
                          <div className="h-6 w-11 bg-primary rounded-full relative cursor-pointer">
                            <span className="absolute right-1 top-1 h-4 w-4 bg-white rounded-full"></span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between py-3 border-b border-gray-100">
                          <div>
                            <h4 className="font-medium">Product Updates</h4>
                            <p className="text-sm text-muted-foreground">Receive updates about new features and improvements</p>
                          </div>
                          <div className="h-6 w-11 bg-primary rounded-full relative cursor-pointer">
                            <span className="absolute right-1 top-1 h-4 w-4 bg-white rounded-full"></span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between py-3">
                          <div>
                            <h4 className="font-medium">Billing Notifications</h4>
                            <p className="text-sm text-muted-foreground">Get notified about billing events and receipts</p>
                          </div>
                          <div className="h-6 w-11 bg-primary rounded-full relative cursor-pointer">
                            <span className="absolute right-1 top-1 h-4 w-4 bg-white rounded-full"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {(activeTab === 'preferences' || activeTab === 'documents' || activeTab === 'help') && (
                    <div className="p-6 text-center py-16">
                      <div className="mx-auto w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                        {activeTab === 'preferences' && <SettingsIcon className="h-8 w-8" />}
                        {activeTab === 'documents' && <FileText className="h-8 w-8" />}
                        {activeTab === 'help' && <HelpCircle className="h-8 w-8" />}
                      </div>
                      <h3 className="text-lg font-semibold mb-2">
                        {activeTab === 'preferences' && 'Coming Soon'}
                        {activeTab === 'documents' && 'No Documents Available'}
                        {activeTab === 'help' && 'Need Help?'}
                      </h3>
                      <p className="text-muted-foreground max-w-md mx-auto mb-6">
                        {activeTab === 'preferences' && 'This feature is currently being developed and will be available soon.'}
                        {activeTab === 'documents' && 'You have no documents or reports available at this time.'}
                        {activeTab === 'help' && 'Our support team is available 24/7 to assist with any questions you may have.'}
                      </p>
                      {activeTab === 'help' && (
                        <Button>Contact Support</Button>
                      )}
                    </div>
                  )}
                </div>
                
                <div className="mt-6">
                  <Link to="/dashboard">
                    <Button variant="outline" className="w-full gap-2">
                      <UserIcon className="h-4 w-4" />
                      Back to Dashboard
                    </Button>
                  </Link>
                </div>
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
