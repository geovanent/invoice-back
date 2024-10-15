import { InvoiceDTO } from "../invoice-pdf.dto";

export const getInvoiceTemplate = (invoiceDto: InvoiceDTO) => ({
  content: [
    {
      text: 'Invoice',
      fontSize: 20,
      style: 'header',
    },
    {
      columns: [
        [
          {
            text: 'From',
            color: '#aaaaab',
            bold: true,
            fontSize: 11,
            margin: [0, 5, 0, 3],
          },
          {
            text: `${invoiceDto.client.name.toUpperCase()}\n${invoiceDto.client.addressLine1}\n${invoiceDto.client.addressLine2}\nBrazil\nTax ID: ${invoiceDto.client.taxId}`,
            fontSize: 8,
          },
          {
            text: 'To',
            color: '#aaaaab',
            bold: true,
            fontSize: 11,
            alignment: 'left',
            margin: [0, 10, 0, 3],
          },
          {
            text: `${invoiceDto.client.name}\n${invoiceDto.client.addressLine1}\n${invoiceDto.client.addressLine2}\nTax ID: ${invoiceDto.client.taxId}`,
            fontSize: 8,
          },
        ],
        [
          {
            text: 'No.',
            color: '#aaaaab',
            bold: true,
            fontSize: 10,
            margin: [0, 5, 0, 3],
          },
          {
            text: invoiceDto.invoiceNumber,
            bold: true,
            color: '#333333',
            fontSize: 10,
            margin: [0, 0, 0, 3],
          },
          {
            text: 'Date',
            color: '#aaaaab',
            bold: true,
            fontSize: 10,
            margin: [0, 0, 0, 3],
          },
          {
            text: invoiceDto.date,
            bold: true,
            color: '#333333',
            fontSize: 10,
            margin: [0, 0, 0, 3],
          },
          {
            text: 'Invoice Due',
            color: '#aaaaab',
            bold: true,
            fontSize: 10,
            margin: [0, 0, 0, 3],
          },
          {
            text: invoiceDto.dueDate,
            bold: true,
            fontSize: 10,
            color: '#333333',
            margin: [0, 0, 0, 3],
          },
        ],
      ],
    },
    {
      margin: [0, 20, 0, 3],
      fontSize: 10,
      table: {
        headerRows: 1,
        widths: ['*', 'auto', 'auto', 'auto'],
        body: [
          [
            { text: 'Description', border: [false, true, false, true], margin: [0, 5, 0, 5], textTransform: 'uppercase' },
            { text: 'Quantity', border: [false, true, false, true], margin: [0, 5, 0, 5], textTransform: 'uppercase' },
            { text: 'Rate', border: [false, true, false, true], margin: [0, 5, 0, 5], textTransform: 'uppercase' },
            { text: 'Amount', border: [false, true, false, true], margin: [0, 5, 0, 5], textTransform: 'uppercase' },
          ],
          ...invoiceDto.services.map(service => ([
            { text: service.description, border: [false, false, false, true], margin: [0, 5, 0, 5], alignment: 'left' },
            { text: service.quantity.toString(), border: [false, false, false, true], alignment: 'center', margin: [0, 5, 0, 5] },
            { text: `EUR ${service.rate.toFixed(2)}`, border: [false, false, false, true], alignment: 'center', margin: [0, 5, 0, 5] },
            { text: `EUR ${service.amount.toFixed(2)}`, border: [false, false, false, true], alignment: 'center', margin: [0, 5, 0, 5] }
          ]))
        ],
      },
      layout: 'lightHorizontalLines',
    },
    {
      layout: 'noBorders',
      table: {
        headerRows: 0,
        widths: ['*', 'auto'],
        body: [
          [
            { text: 'Sub Total', alignment: 'right' },
            { text: `EUR ${invoiceDto.subTotal.toFixed(2)}`, alignment: 'right' }
          ],
          [
            { text: 'Paid to Date', alignment: 'right' },
            { text: `EUR 0.00`, alignment: 'right' } // Example static value
          ],
          [
            { text: 'Total Amount', bold: true, alignment: 'right' },
            { text: `EUR ${invoiceDto.total.toFixed(2)}`, bold: true, alignment: 'right' }
          ],
        ],
      },
    },
    '\n\n',
    {
      fontSize: 15,
      text: 'Invoice Note',
      style: 'subheader',
    },
    {
      fontSize: 10,
      text: invoiceDto.note,
    },
    '\n',
    {
      fontSize: 10,
      text: `Bank information:\n${invoiceDto.bankInfo}`,
    },
  ],
  styles: {
    header: {
      fontSize: 18,
      bold: true,
      alignment: 'center',
      margin: [0, 0, 0, 10],
    },
    subheader: {
      fontSize: 12,
      bold: true,
      margin: [0, 10, 0, 5],
    },
  },
  defaultStyle: {
    columnGap: 20,
  },
});
