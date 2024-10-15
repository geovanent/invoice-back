import { Module } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { InvoiceController } from './invoice.controller';
import { InvoicePDFModule } from '../shared/invoice-pdf/invoice-pdf.module';

@Module({
    imports: [InvoicePDFModule],
    providers: [InvoiceService],
    controllers: [InvoiceController],
})
export class InvoiceModule {}