import { Injectable } from '@nestjs/common';
import { InvoiceDTO } from '../shared/invoice-pdf/invoice.dto';
import { PrismaService } from '../shared/database/database.service';
import { InvoicePDFService } from '../shared/invoice-pdf/invoice-pdf.service';

@Injectable()
export class InvoiceService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly invoicePdfService: InvoicePDFService
  ) {}

  async generateInvoicePDF(invoiceDto: InvoiceDTO): Promise<Buffer> {
    return this.invoicePdfService.generateInvoicePDF(invoiceDto);
  }
}
