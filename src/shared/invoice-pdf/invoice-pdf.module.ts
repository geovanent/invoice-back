import { Module } from '@nestjs/common';
import { InvoicePDFService } from './invoice-pdf.service';

@Module({
  providers: [InvoicePDFService],
  exports: [InvoicePDFService],
})
export class InvoicePDFModule {}