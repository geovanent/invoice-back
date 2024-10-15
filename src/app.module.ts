import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import globalConfig from './config/global.config';
import { DatabaseModule } from './shared/database/database.module';
import { InvoiceModule } from './invoice/invoice.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      load: [globalConfig],
      isGlobal: true,
    }),
    DatabaseModule,
    InvoiceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
