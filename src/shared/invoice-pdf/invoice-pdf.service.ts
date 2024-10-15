import { Injectable } from '@nestjs/common';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { getInvoiceTemplate } from './templates/invoice-template';
import { InvoiceDTO } from './invoice-pdf.dto';

@Injectable()
export class InvoicePDFService {
  constructor() {}

  async generateInvoicePDF(invoiceDto: InvoiceDTO): Promise<Buffer> {
    let subtotal = 0;
    invoiceDto.services.forEach(service => {
        service.amount = service.quantity * service.rate;
        subtotal += service.quantity * service.rate;
    });

    // Assuming total includes some additional charges or tax
    // For example, a 10% tax
    const taxRate = 0;
    const total = subtotal + (subtotal * taxRate);

    invoiceDto.subTotal = subtotal;
    invoiceDto.total = total;

    const invoiceTemplateData = getInvoiceTemplate(invoiceDto)
    const modifiedTemplate = { ...invoiceTemplateData, content: [...invoiceTemplateData.content,] };

    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    const pdfDocGenerator = pdfMake.createPdf(modifiedTemplate);
    const pdfBuffer: Buffer = await new Promise((resolve) => {
      pdfDocGenerator.getBuffer((buffer: ArrayBuffer) => {
        const uint8Array = new Uint8Array(buffer);
        const bufferArray = Array.from(uint8Array);
        resolve(Buffer.from(bufferArray));
      });
    });

    return pdfBuffer;
  }
}
