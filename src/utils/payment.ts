export const handlePayment = async (amount: number, description: string, userData: { name: string, email: string, contact: string }) => {
    try {
        // 1. Create order on the server
        const response = await fetch('http://localhost:5000/api/create-order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                amount, // amount in INR
                currency: 'INR',
                receipt: `receipt_${Date.now()}`,
                notes: {
                    customer_name: userData.name,
                    customer_email: userData.email,
                    customer_contact: userData.contact
                }
            }),
        });

        const order = await response.json();

        if (!order.id) {
            alert('Error creating order. Please try again.');
            return;
        }

        // 2. Open Razorpay Checkout modal
        const options = {
            key: "", // Using your test key by default for now
            amount: order.amount,
            currency: order.currency,
            name: "Auro Lakshmanan",
            description: description,
            image: "https://your-logo-url.com/logo.png",
            order_id: order.id,
            handler: async function (response: any) {
                // 3. Verify payment on the server
                const verifyResponse = await fetch('http://localhost:5000/api/verify-payment', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_signature: response.razorpay_signature,
                    }),
                });

                const verifyData = await verifyResponse.json();

                if (verifyData.status === 'ok') {
                    alert('Payment Successful! Welcome to the workshop.');
                    // Redirect or update UI
                } else {
                    alert('Payment verification failed. Please contact support.');
                }
            },
            prefill: {
                name: userData.name,
                email: userData.email,
                contact: userData.contact,
            },
            notes: {
                address: "Workshop Access",
                customer_name: userData.name,
                customer_email: userData.email,
                customer_contact: userData.contact
            },
            theme: {
                color: "#9333ea", // Purple to match the design
            },
        };

        const rzp = new (window as any).Razorpay(options);
        rzp.open();
    } catch (error) {
        console.error('Payment Error:', error);
        alert('Something went wrong. Please try again later.');
    }
};
