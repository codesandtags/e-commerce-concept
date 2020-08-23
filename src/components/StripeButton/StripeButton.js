import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HJOAwGFqD9x4rBQQeUk9rOC7RmYzMrYEYX9ewWsd4XHQPdV3EBHwXWZAJVXGbrW4R2EERBCH9rMJl0pHEZaMnsL003zSvM6V6';

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful!');
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='Clothing Center'
            billingAddress
            shippingAddress
            image='http://localhost:3000/static/media/logo-blue.48814db1.png'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;