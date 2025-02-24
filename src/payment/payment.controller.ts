import { Body, Controller, Post } from '@nestjs/common';
import { PaymentRequestDto, PaymentUpdateDto } from './dto';
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

    @Post('upgrade/standard')
    upgradeToStandard(@Body() dto : PaymentUpdateDto){
        return this.paymentService.upgradeToStandard(dto);
    }

    @Post('upgrade/pro')
    upgradeToPro(@Body() dto : PaymentUpdateDto){
        return this.paymentService.upgradeToPro(dto);
    }

    @Post('downgrade/basic')
    downgradeToBasic(@Body() dto : PaymentUpdateDto){
        return this.paymentService.downgradeToBasic(dto);
    }

    @Post('downgrade/standard')
    downgradeToStandard(@Body() dto : PaymentUpdateDto){
        return this.paymentService.downgradeToStandard(dto);
    }
}
