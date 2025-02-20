import { Injectable } from '@nestjs/common';
import { PaymentRequestDto } from './dto';
import { stripe } from './utils/stripe';

@Injectable()
export class PaymentService {

    async createPaymentIntent(dto: PaymentRequestDto) {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: dto.amount,
            currency: dto.currency,
            payment_method_types: ['card']
        });
        return paymentIntent;
    }
}
