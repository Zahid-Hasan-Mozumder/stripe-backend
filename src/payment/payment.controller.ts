import { Body, Controller, Post } from '@nestjs/common';
import { PaymentRequestDto } from './dto';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {

    constructor(private paymentService : PaymentService) {}

    @Post('payment-intent/create')
    createPaymentIntent(@Body() dto : PaymentRequestDto) {
        return this.paymentService.createPaymentIntent(dto);
    }
}
