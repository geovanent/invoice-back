import { Injectable } from '@nestjs/common';
import * as PdfPrinter from 'pdfmake';

@Injectable()
export class Invoice2Service {
  createInvoice(invoiceData: any) {
    invoiceData = {
        number: 'INV-23',
        date: '2023-04-01',
        dueDate: '2023-04-15',
        client: {
          name: 'Veralogica GmbH',
          address: 'Some Address, City, Country',
          taxId: 'DE123456789'
        },
        quantity: 10,
        rate: 50,
        amount: 500,
        subTotal: 500,
        total: 500
      };

    const fonts = {
      Roboto: {
        normal: 'src/invoice/fonts/Roboto-Regular.ttf',
        bold: 'src/invoice/fonts/Roboto-Medium.ttf',
        italics: 'src/invoice/fonts/Roboto-Italic.ttf',
        bolditalics: 'src/invoice/fonts/Roboto-MediumItalic.ttf'
      }
    };

    const printer = new PdfPrinter(fonts);

    const docDefinition = {
      content: [
        { text: 'Invoice', style: 'header' },
        {
          columns: [
            {
              text: [
                'From\n',
                'MANEL CHAVES PIRES 4CODE. TECNOLOGIA LTDA\n',
                'Rua Solidônio Leite 2694 Apto 114 Bloco C  Vila Ivone\n',
                'Sao Paulo Sao Paulo 03275-000\n',
                'Brazil\n',
                'Tax ID: 36.827.847/0001-91\n'
              ]
            },
            {
              text: [
                'Invoice No.: ' + invoiceData.number + '\n',
                'Date: ' + invoiceData.date + '\n',
                'Invoice Due: ' + invoiceData.dueDate + '\n'
              ],
              alignment: 'right'
            }
          ]
        },
        { text: 'To', style: 'subheader' },
        {
          text: [
            invoiceData.client.name + '\n',
            invoiceData.client.address + '\n',
            invoiceData.client.taxId + '\n'
          ]
        },
        { text: 'Description', style: 'subheader' },
        {
          table: {
            body: [
              ['Quantity', 'Rate', 'Amount'],
              [invoiceData.quantity, invoiceData.rate, invoiceData.amount]
            ]
          }
        },
        {
          columns: [
            { text: 'Sub Total', alignment: 'right' },
            { text: invoiceData.subTotal, alignment: 'right' }
          ]
        },
        {
          columns: [
            { text: 'Total', alignment: 'right' },
            { text: invoiceData.total, alignment: 'right' }
          ]
        },
        { text: 'Bank information', style: 'subheader' },
        {
          text: [
            'Bank Name: Citibank\n',
            'Bank Address: 1 North Wall Quay International Financial Services Centre (IFSC) Dublin 1 Ireland\n',
            'BIC: CITIIE2X\n',
            'Beneficiary Account (IBAN): IE60CITI99005170145614\n',
            'Beneficiary: Geovane Chaves\n'
          ]
        },
        { text: 'Email: geovanent@gmail.com', style: 'footer' }
      ],
      styles: {
        header: { fontSize: 18, bold: true },
        subheader: { fontSize: 14, bold: true },
        footer: { fontSize: 12, italics: true }
      }
    };

    const pdfDoc = printer.createPdfKitDocument(docDefinition);
    pdfDoc.end();
    return pdfDoc;
  }
}
