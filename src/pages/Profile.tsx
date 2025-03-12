
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button-custom';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/layout/Footer';
import FadeIn from '@/components/animations/FadeIn';
import { User } from 'lucide-react';

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center p-6">
        <FadeIn>
          <div className="w-full max-w-md">
            <div className="bg-white/50 backdrop-blur-glass p-8 rounded-2xl shadow-card border border-white/20">
              <div className="flex flex-col items-center">
                <div className="bg-primary/10 p-4 rounded-full text-primary mb-4">
                  <User size={64} />
                </div>
                <h1 className="text-3xl font-bold mb-1">{user.name}</h1>
                <p className="text-muted-foreground mb-6">{user.email}</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-background/40 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">Account created on</p>
                  <p className="font-medium">
                    {new Date(user.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
                
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
