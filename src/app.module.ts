import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { PaymentModule } from './payment/payment.module';
require('dotenv').config();

@Module({
  imports: [PrismaModule, PaymentModule]
})
export class AppModule {}
