import { Module } from '@nestjs/common';
import { InvoiceService } from './invoice/invoice.service';
import { ConfigModule } from '@nestjs/config';
import { InvoiceController } from './invoice/invoice.controller';
import globalConfig from './config/global.config';
import { Invoice2Service } from './invoice/invoice2.service';
import { DatabaseModule } from './shared/database/database.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      load: [globalConfig],
      isGlobal: true,
    }),
    DatabaseModule
  ],
  controllers: [InvoiceController],
  providers: [InvoiceService, Invoice2Service],
})
export class AppModule {}
