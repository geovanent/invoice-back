import { Controller, Post, Body, Res, Get, HttpCode } from '@nestjs/common';
import { Response } from 'express';
import { InvoiceService } from './invoice.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Invoice2Service } from './invoice2.service';
import { InvoiceDTO } from './invoice.dto';
import { invoiceDataMock } from './invoice.mock';

@ApiTags('Invoice')
@Controller('invoice')
export class InvoiceController {
  constructor(
    private readonly invoiceService: InvoiceService,
    private readonly invoice2Service: Invoice2Service,
    ) {}

  @ApiResponse({ status: 201, description: 'Invoice created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Post()
  async createInvoice(@Body() invoiceDto: InvoiceDTO, @Res() res: Response) {
    const pdfBuffer = await this.invoiceService.generateInvoicePDF(invoiceDto);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=invoice.pdf');
    res.status(200).send(pdfBuffer);
  }

  @Get()
  async getInvoice(@Res() response: Response) {
    const invoiceData = invoiceDataMock;

    const pdfBuffer = await this.invoiceService.generateInvoicePDF(invoiceData)

    response.setHeader('Content-Type', 'application/pdf');
    response.setHeader('Content-Disposition', 'inline');
    response.send(pdfBuffer);
  }

  @Get('v2')
  async getInvoice2(@Res() response: Response) {
    const pdfDoc = await this.invoice2Service.createInvoice(null);
    response.setHeader('Content-Type', 'application/pdf');
    response.setHeader('Content-Disposition', 'inline; filename=your-file-name.pdf');

    pdfDoc.pipe(response);

    response.on('finish', () => {
      pdfDoc.end();
    });
  }
}
