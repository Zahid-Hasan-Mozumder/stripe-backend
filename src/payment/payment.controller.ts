import { Body, Controller, Post } from '@nestjs/common';
import { PaymentRequestDto } from './dto';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {

    constructor(private paymentService : PaymentService) {}

    @Post('basic')
    createBasicSubscription(@Body() dto : PaymentRequestDto) {
        return this.paymentService.createBasicSubscription(dto);
    }

    @Post('standard')
    createStandardSubscription(@Body() dto : PaymentRequestDto) {
        return this.paymentService.createStandardSubscription(dto);
    }
    
    @Post('pro')
    createProSubscription(@Body() dto : PaymentRequestDto) {
        return this.paymentService.createProSubscription(dto);
    }
}
