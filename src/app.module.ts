import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { PaymentController } from './payment/payment.controller';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [PrismaModule, PaymentModule]
})
export class AppModule {}
