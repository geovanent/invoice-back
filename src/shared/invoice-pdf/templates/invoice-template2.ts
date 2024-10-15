import { InvoiceDTO } from "../invoice.dto";

export const getInvoiceTemplate = (invoiceDto: InvoiceDTO) => ({
    content: [
      {
          text: 'Invoice\n\n',
          style: 'header',
          alignment: 'left'
      },
      {
          columns: [
              {
                  fontSize: 9,
                  alignment: 'left',
                  text: [
                      { text: 'From\n', style: 'subheader' },
                      '\nGEOVANE CHAVES PIRES 4CODE. \nTECNOLOGIA LTDA\n',
                      'Rua Solidônio Leite, 2694, Apto 114 Bloco C',
                      'Vila\n Ivone Sao Paulo, Sao Paulo, 03275-000\n Brazil\n',
                      'Tax ID: 36.827.847/0001-91'
          
                  ]
              },
              {
                  fontSize: 9,
                  text: [
                      { text: 'Invoice No. \n', bold: true,},'INV-46\n',
                      { text: '\nDate \n', bold: true }, 'Dec 08 2023\n',
                      { text: '\nInvoice Due \n', bold: true }, 'Dec 11 2023\n'
                  
                  ],
                  
              },
          ]
      },
      {
          text: 'To',
          style: 'subheader'
      },
      {
          fontSize: 9,
          text: 'Company GmbH\nZum Gipelhof 4\nFrankfurt am Main, Hesse, 60594 Germany\nTax ID: DE 319 637 011\n\n',
      },
      {

  style: 'tableExample',
  table: {
  widths: ['*', 'auto', 'auto', 'auto'],
  body: [
    [
      { text: 'Description', style: 'tableHeader' },
      { text: 'Quantity', style: 'tableHeader', margin: [0, 0, 60, 0] },
      { text: 'Rate', style: 'tableHeader', margin: [0, 0, 60, 0] },
      { text: 'Amount', style: 'tableHeader', alignment: 'right' }
    ],
    [
      'Extra hours supporting Company EAR IT on the new backup AWS infrastructure for Company Platform',
      { text:'25'},
      { text:'50.00'},
      'EUR 500.00'
    ],
    [
      { text: 'Sub Total', margin: [190, 7, 0, 8], colSpan: 3, alignment: 'right' },
      {},
      {},
      'EUR 50.00'
    ],
    [
      { text: 'Total', margin: [190, 7, 0, 8], colSpan: 3, alignment: 'right' },
      {},
      {},
      'EUR 500.00'
    ],
    [
      { text: 'Paid to Date', margin: [190, 7, 0, 8], colSpan: 3, alignment: 'right' },
      {},
      {},
      'EUR 0.00'
    ],
    [
      { text: 'Balance', margin: [190, 7, 0, 8], colSpan: 3, alignment: 'right' },
      {},
      {},
      'EUR 500.00'
    ]
  ]
  },
  layout: 'lightHorizontalLines'
      },
      {
          text: 'Invoice Note',
          style: 'subheader'
      },

      {
          fontSize: 9,
          text: '\nBank information:\n Bank Name: Citibank\n Bank Address: 1 North Wall Quay, International Financial Services Centre (IFSC), Dublin 1,\n Ireland BIC: CITIIE2X\n Beneficiary Account (IBAN): IE60CITI99005170145614\n Beneficiary: Geovane Chaves\nEmail: geovanent@gmail.com\n',
          
      }
  ],
  styles: {
      header: {
          fontSize: 15,
          bold: true,
          margin: [0, 0, 0, 10]
      },
      subheader: {
          fontSize: 10,
          bold: true,
          margin: [0, 10, 0, 5]
      },
      tableExample: {
          fontSize: 9,
          margin: [0, 2, 0, 15]
      },
      tableHeader: {
          bold: true,
          fontSize: 10,
          color: 'black'
      }
  },
  defaultStyle: {
      columnGap: 20
  }
});
