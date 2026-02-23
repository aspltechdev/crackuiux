import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { handlePayment } from "../../utils/payment";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
}

export function PaymentModal({ isOpen, onClose, amount }: PaymentModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.contact) {
      alert("Please fill all details");
      return;
    }
    
    setLoading(true);
    try {
      await handlePayment(amount, "UI/UX Workshop Access", formData);
      onClose();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-neutral-900 text-white border-neutral-800">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Complete Registration
          </DialogTitle>
          <DialogDescription className="text-neutral-400">
            Enter your details to proceed with the payment for the workshop.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-neutral-300">Full Name</Label>
            <Input
              id="name"
              placeholder="John Doe"
              className="bg-neutral-800 border-neutral-700 text-white focus:ring-purple-500"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-neutral-300">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              className="bg-neutral-800 border-neutral-700 text-white focus:ring-purple-500"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact" className="text-neutral-300">Phone Number</Label>
            <Input
              id="contact"
              type="tel"
              placeholder="+91 99999 99999"
              className="bg-neutral-800 border-neutral-700 text-white focus:ring-purple-500"
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              required
            />
          </div>
          <Button 
            type="submit" 
            disabled={loading}
            className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-6 text-lg rounded-xl transition-all duration-300 transform hover:scale-[1.02]"
          >
            {loading ? "Processing..." : `Pay ₹${amount} Now`}
          </Button>
          <p className="text-center text-xs text-neutral-500">
            Secure payment powered by Razorpay
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
