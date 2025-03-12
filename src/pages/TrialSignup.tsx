
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button-custom';
import { CreditCard } from '@/types/auth';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/layout/Footer';
import FadeIn from '@/components/animations/FadeIn';
import { CreditCard as CreditCardIcon, Lock, ShieldCheck, Info, CheckCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const TrialSignup = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const navigate = useNavigate();
  const { startTrial, user } = useAuth();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!cardNumber) newErrors.cardNumber = 'Card number is required';
    else if (!/^\d{16}$/.test(cardNumber)) newErrors.cardNumber = 'Card number must be 16 digits';
    
    if (!nameOnCard) newErrors.nameOnCard = 'Name is required';
    
    if (!expiryDate) newErrors.expiryDate = 'Expiry date is required';
    else if (!/^\d{2}\/\d{2}$/.test(expiryDate)) newErrors.expiryDate = 'Format must be MM/YY';
    
    if (!cvv) newErrors.cvv = 'CVV is required';
    else if (!/^\d{3}$/.test(cvv)) newErrors.cvv = 'CVV must be 3 digits';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      const creditCardDetails: CreditCard = {
        userId: user?.id || '',
        cardNumber,
        nameOnCard,
        expiryDate,
        cvv,
      };
      
      const success = await startTrial(creditCardDetails);
      if (success) {
        toast({
          title: "Success!",
          description: "Your 30-day free trial has been activated successfully.",
        });
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Error starting trial:', error);
      toast({
        title: "Error",
        description: "Failed to process your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const formatCardNumber = (value: string) => {
    const digits = value.replace(/\D/g, '');
    return digits.substring(0, 16);
  };

  const formatExpiryDate = (value: string) => {
    const digits = value.replace(/\D/g, '');
    if (digits.length > 2) {
      return `${digits.substring(0, 2)}/${digits.substring(2, 4)}`;
    }
    return digits;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center p-4 md:p-6 bg-gradient-to-b from-background to-accent/30">
        <FadeIn>
          <div className="w-full max-w-4xl grid md:grid-cols-5 gap-8">
            <div className="md:col-span-3 bg-white/80 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-card border border-white/30">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <CreditCardIcon size={28} />
                </div>
                <h1 className="text-2xl md:text-3xl font-bold mb-2">Start Your Free Trial</h1>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Enter your payment details to activate your 30-day free trial. 
                  No charges will be made until the trial period ends.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-foreground mb-1">
                    Card Number
                  </label>
                  <div className="relative">
                    <input
                      id="cardNumber"
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                      className={`w-full p-3 rounded-md border ${errors.cardNumber ? 'border-red-500' : 'border-input'} bg-background focus:outline-none focus:ring-2 focus:ring-primary pl-12`}
                      placeholder="1234 5678 9012 3456"
                      maxLength={16}
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <CreditCardIcon className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </div>
                  {errors.cardNumber && <p className="mt-1 text-sm text-red-500">{errors.cardNumber}</p>}
                </div>
                
                <div>
                  <label htmlFor="nameOnCard" className="block text-sm font-medium text-foreground mb-1">
                    Name on Card
                  </label>
                  <input
                    id="nameOnCard"
                    type="text"
                    value={nameOnCard}
                    onChange={(e) => setNameOnCard(e.target.value)}
                    className={`w-full p-3 rounded-md border ${errors.nameOnCard ? 'border-red-500' : 'border-input'} bg-background focus:outline-none focus:ring-2 focus:ring-primary`}
                    placeholder="John Smith"
                  />
                  {errors.nameOnCard && <p className="mt-1 text-sm text-red-500">{errors.nameOnCard}</p>}
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="expiryDate" className="block text-sm font-medium text-foreground mb-1">
                      Expiry Date
                    </label>
                    <input
                      id="expiryDate"
                      type="text"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(formatExpiryDate(e.target.value))}
                      className={`w-full p-3 rounded-md border ${errors.expiryDate ? 'border-red-500' : 'border-input'} bg-background focus:outline-none focus:ring-2 focus:ring-primary`}
                      placeholder="MM/YY"
                      maxLength={5}
                    />
                    {errors.expiryDate && <p className="mt-1 text-sm text-red-500">{errors.expiryDate}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="cvv" className="block text-sm font-medium text-foreground mb-1">
                      CVV
                    </label>
                    <div className="relative">
                      <input
                        id="cvv"
                        type="text"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').substring(0, 3))}
                        className={`w-full p-3 rounded-md border ${errors.cvv ? 'border-red-500' : 'border-input'} bg-background focus:outline-none focus:ring-2 focus:ring-primary`}
                        placeholder="123"
                        maxLength={3}
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-help group">
                        <Info className="h-4 w-4 text-muted-foreground" />
                        <div className="hidden group-hover:block absolute bottom-full right-0 mb-2 p-2 bg-black text-white text-xs rounded w-48">
                          The 3-digit security code on the back of your card
                        </div>
                      </div>
                    </div>
                    {errors.cvv && <p className="mt-1 text-sm text-red-500">{errors.cvv}</p>}
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button
                    type="submit"
                    className="w-full py-6 text-lg"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <div className="custom-loader mr-2"></div>
                        Processing...
                      </div>
                    ) : 'Start My Free Trial'}
                  </Button>
                </div>
              </form>
              
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Lock className="h-4 w-4 mr-1" />
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center">
                  <ShieldCheck className="h-4 w-4 mr-1" />
                  <span>No Charges During Trial</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>Cancel Anytime</span>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                <h2 className="text-xl font-bold mb-4">Trial Benefits</h2>
                <ul className="space-y-4">
                  {[
                    'Full access to all premium features',
                    'Advanced analytics and reporting',
                    'Unlimited API calls',
                    'Priority 24/7 support',
                    'Team collaboration tools',
                    'Custom integrations',
                    'Enhanced security features'
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 pt-6 border-t border-primary/10">
                  <h3 className="font-semibold mb-2">What happens after the trial?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    After your 30-day free trial ends, you'll be automatically enrolled in our Professional plan at $999/month. You can cancel or change your plan anytime before the trial ends.
                  </p>
                  <div className="flex items-start">
                    <Info className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-blue-800">
                      For this demo, no real charges will be made and no actual payment processing occurs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </main>
      
      <Footer />
    </div>
  );
};

export default TrialSignup;
