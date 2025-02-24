import { Injectable } from '@nestjs/common';
import { PaymentRequestDto, PaymentUpdateDto } from './dto';
import { stripe } from './utils/stripe';

@Injectable()
export class PaymentService {

    async createBasicSubscription(dto: PaymentRequestDto) {

        // Create customer in stripe
        const customer = await stripe.customers.create({
            email: dto.email,
            payment_method: dto.paymentMethod.paymentMethod.id
        });
        console.log(customer);

        // Create subscription in stripe
        const subscription = await stripe.subscriptions.create({
            customer: customer.id,
            items: [
                { price: process.env.STRIPE_BASIC_SUBSCRIPTION_PRICE_ID }
            ],
            default_payment_method: dto.paymentMethod.paymentMethod.id,
            billing_cycle_anchor_config: {
                day_of_month: 25
            }
        });
        console.log(subscription);

        // Return subscription entity to frontend
        return subscription;
    }

    async createStandardSubscription(dto: PaymentRequestDto) {

        // Create customer in stripe
        const customer = await stripe.customers.create({
            email: dto.email,
            payment_method: dto.paymentMethod.paymentMethod.id
        });
        console.log(customer);

        // Create subscription in stripe
        const subscription = await stripe.subscriptions.create({
            customer: customer.id,
            items: [
                { price: process.env.STRIPE_STANDARD_SUBSCRIPTION_PRICE_ID }
            ],
            default_payment_method: dto.paymentMethod.paymentMethod.id,
            billing_cycle_anchor_config: {
                day_of_month: 25
            }
        });
        console.log(subscription);

        // Return subscription entity to frontend
        return subscription;
    }

    async createProSubscription(dto: PaymentRequestDto) {

        // Create customer in stripe
        const customer = await stripe.customers.create({
            email: dto.email,
            payment_method: dto.paymentMethod.paymentMethod.id
        });
        console.log(customer);

        // Create subscription in stripe
        const subscription = await stripe.subscriptions.create({
            customer: customer.id,
            items: [
                { price: process.env.STRIPE_PRO_SUBSCRIPTION_PRICE_ID }
            ],
            default_payment_method: dto.paymentMethod.paymentMethod.id,
            billing_cycle_anchor_config: {
                day_of_month: 25
            }
        });
        console.log(subscription);

        // Return subscription entity to frontend
        return subscription;
    }

    async upgradeToStandard(dto: PaymentUpdateDto) {
        // Set proration date to this moment:
        const proration_date = Math.floor(Date.now() / 1000);

        const subscription = await stripe.subscriptions.retrieve(dto.subscriptionId);

        // See what the next invoice would look like with a price switch and proration set:
        const invoice = await stripe.invoices.retrieveUpcoming({
            customer: dto.customerId,
            subscription: dto.subscriptionId,
            subscription_items: [
                {
                    id: subscription.items.data[0].id,
                    price: process.env.STRIPE_STANDARD_SUBSCRIPTION_PRICE_ID, // Switch to new price
                }
            ],
            subscription_proration_date: proration_date,
        });
        console.log(invoice);

        // Update the subscription
        const updatedSubscription = await stripe.subscriptions.update(
            dto.subscriptionId,
            {
                items: [
                    {
                        id: subscription.items.data[0].id,
                        price: process.env.STRIPE_STANDARD_SUBSCRIPTION_PRICE_ID, // Switch to new price
                    }
                ],
                proration_date: proration_date,
                proration_behavior: 'always_invoice'
            }
        );
        console.log(updatedSubscription);

        return updatedSubscription;
    }

    async upgradeToPro(dto: PaymentUpdateDto) {
        // Set proration date to this moment:
        const proration_date = Math.floor(Date.now() / 1000);

        const subscription = await stripe.subscriptions.retrieve(dto.subscriptionId);

        // See what the next invoice would look like with a price switch and proration set:
        const invoice = await stripe.invoices.retrieveUpcoming({
            customer: dto.customerId,
            subscription: dto.subscriptionId,
            subscription_items: [
                {
                    id: subscription.items.data[0].id,
                    price: process.env.STRIPE_PRO_SUBSCRIPTION_PRICE_ID, // Switch to new price
                }
            ],
            subscription_proration_date: proration_date,
        });
        console.log(invoice);

        // Update the subscription
        const updatedSubscription = await stripe.subscriptions.update(
            dto.subscriptionId,
            {
                items: [
                    {
                        id: subscription.items.data[0].id,
                        price: process.env.STRIPE_PRO_SUBSCRIPTION_PRICE_ID, // Switch to new price
                    }
                ],
                proration_date: proration_date,
                proration_behavior: 'always_invoice'
            }
        );
        console.log(updatedSubscription);

        return updatedSubscription;
    }

    async downgradeToBasic(dto: PaymentUpdateDto) {
        // Set proration date to this moment:
        const proration_date = Math.floor(Date.now() / 1000);

        const subscription = await stripe.subscriptions.retrieve(dto.subscriptionId);

        // See what the next invoice would look like with a price switch and proration set:
        const invoice = await stripe.invoices.retrieveUpcoming({
            customer: dto.customerId,
            subscription: dto.subscriptionId,
            subscription_items: [
                {
                    id: subscription.items.data[0].id,
                    price: process.env.STRIPE_BASIC_SUBSCRIPTION_PRICE_ID, // Switch to new price
                }
            ],
            subscription_proration_date: proration_date,
        });
        console.log(invoice);

        // Update the subscription
        const updatedSubscription = await stripe.subscriptions.update(
            dto.subscriptionId,
            {
                items: [
                    {
                        id: subscription.items.data[0].id,
                        price: process.env.STRIPE_BASIC_SUBSCRIPTION_PRICE_ID, // Switch to new price
                    }
                ],
                proration_date: proration_date,
                proration_behavior: 'always_invoice'
            }
        );
        console.log(updatedSubscription);

        return updatedSubscription;
    }

    async downgradeToStandard(dto: PaymentUpdateDto) {
        // Set proration date to this moment:
        const proration_date = Math.floor(Date.now() / 1000);

        const subscription = await stripe.subscriptions.retrieve(dto.subscriptionId);

        // See what the next invoice would look like with a price switch and proration set:
        const invoice = await stripe.invoices.retrieveUpcoming({
            customer: dto.customerId,
            subscription: dto.subscriptionId,
            subscription_items: [
                {
                    id: subscription.items.data[0].id,
                    price: process.env.STRIPE_STANDARD_SUBSCRIPTION_PRICE_ID, // Switch to new price
                }
            ],
            subscription_proration_date: proration_date,
        });
        console.log(invoice);

        // Update the subscription
        const updatedSubscription = await stripe.subscriptions.update(
            dto.subscriptionId,
            {
                items: [
                    {
                        id: subscription.items.data[0].id,
                        price: process.env.STRIPE_STANDARD_SUBSCRIPTION_PRICE_ID, // Switch to new price
                    }
                ],
                proration_date: proration_date,
                proration_behavior: 'always_invoice'
            }
        );
        console.log(updatedSubscription);

        return updatedSubscription;
    }
}
