import { useState } from 'react';
import { PaymentModal } from './PaymentModal';

interface JoinNowButtonProps {
  className?: string;
  amount: number;
  text?: string;
}

export function JoinNowButton({ className, amount, text = "Join Now 🚀" }: JoinNowButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={className}
      >
        <span className="font-['Poppins:Bold',sans-serif]">
          {text}
        </span>
      </button>
      
      <PaymentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        amount={amount}
      />
    </>
  );
}
