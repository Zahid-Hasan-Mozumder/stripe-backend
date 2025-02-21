import { Injectable } from '@nestjs/common';
import { PaymentRequestDto } from './dto';
import { stripe } from './utils/stripe';

@Injectable()
export class PaymentService {

    async createBasicSubscription(dto: PaymentRequestDto) {

        // Create customer in stripe
        const customer = await stripe.customers.create({
            email : dto.email,
            payment_method : dto.paymentMethod.paymentMethod.id
        });
        console.log(customer);

        // Create subscription in stripe
        const subscription = await stripe.subscriptions.create({
            customer : customer.id,
            items : [
                { price : process.env.STRIPE_BASIC_SUBSCRIPTION_PRICE_ID }
            ],
            default_payment_method: dto.paymentMethod.paymentMethod.id
        });
        console.log(subscription);

        // Return subscription entity to frontend
        return subscription;
    }

    async createStandardSubscription(dto: PaymentRequestDto) {
        
        // Create customer in stripe
        const customer = await stripe.customers.create({
            email : dto.email,
            payment_method : dto.paymentMethod.paymentMethod.id
        });
        console.log(customer);

        // Create subscription in stripe
        const subscription = await stripe.subscriptions.create({
            customer : customer.id,
            items : [
                { price : process.env.STRIPE_STANDARD_SUBSCRIPTION_PRICE_ID }
            ],
            default_payment_method: dto.paymentMethod.paymentMethod.id
        });
        console.log(subscription);
        
        // Return subscription entity to frontend
        return subscription;
    }

    async createProSubscription(dto: PaymentRequestDto) {
        
        // Create customer in stripe
        const customer = await stripe.customers.create({
            email : dto.email,
            payment_method : dto.paymentMethod.paymentMethod.id
        });
        console.log(customer);

        // Create subscription in stripe
        const subscription = await stripe.subscriptions.create({
            customer : customer.id,
            items : [
                { price : process.env.STRIPE_PRO_SUBSCRIPTION_PRICE_ID }
            ],
            default_payment_method: dto.paymentMethod.paymentMethod.id
        });
        console.log(subscription);
        
        // Return subscription entity to frontend
        return subscription;
    }
}
