import { InvoiceDTO } from "../invoice.dto";

export const getInvoiceTemplate = (invoiceDto: InvoiceDTO) => ({
content: [
        { text: 'Invoice', style: 'header' },
        {
            columns: [
                {
                    width: '*',
                    text: 'From\nGEOVANE CHAVES PIRES\n4CODE.TECNOLOGIA LTDA\nRua Solidônio Leite, 2694, Apto 114 Bloco C\nVila Ivone\nSao Paulo, Sao Paulo, 03275-000\nBrazil\nTax ID: 36.827.847/0001-91',
                },
                {
                    width: 150,
                    text: [
                        { text: 'Invoice No.\n', bold: true }, 'INV-46\n\n',
                        { text: 'Date\n', bold: true }, 'Dec 08 2023\n\n',
                        { text: 'Invoice Due\n', bold: true }, 'Dec 11 2023'
                    ],
                }
            ]
        },
        '\n',
        { text: 'To\nVeralogica GmbH\nZum Gipelhof 4\nFrankfurt am Main, Hesse, 60594\nGermany\nTax ID: DE 319 637 011', style: 'subheader' },
        '\n',
        {
            style: 'tableExample',
            table: {
                widths: [ '*', 50, 50, 70 ],
                body: [
                    [ 
                        { text: 'Description', style: 'tableHeader', border: [false, false, false, true] }, 
                        { text: 'Quantity', style: 'tableHeader', border: [false, false, false, true] }, 
                        { text: 'Rate',alignment: 'center', style: 'tableHeader', border: [false, false, false, true] }, 
                        { text: 'Amount',alignment: 'right', style: 'tableHeader', border: [false, false, false, true] }
                    ],
                    [ 
                        { text: 'Extra hours supporting Toyota EAR IT on the new backup AWS infrastructure for Veralogica Platform', border: [false, false, false, true] }, 
                        { text: '25',alignment: 'right', border: [false, false, false, true] }, 
                        { text: '20.00',alignment: 'center', border: [false, false, false, true] }, 
                        { text: 'EUR 500.00', alignment: 'right',border: [false, false, false, true] }
                    ]         
                ]
            }
        },
        {
            table: {
                widths: [ '*', 'auto' ], 
                body: [
                    [ 
                        { text: 'Sub Total', bold:true, border: [false, false, false, true], }, 
                        { text: 'EUR 500.00', alignment: 'right',border: [false, false, false, true], }
                    ],
                    [ 
                        { text: 'Total', bold:true,border: [false, false, false, true], }, 
                        { text: 'EUR 500.00', alignment: 'right',border: [false, false, false, true], }
                    ],
                    [ 
                        { text: 'Paid to Date',border: [false, false, false, false], }, 
                        { text: 'EUR 0.00', alignment:'right',border: [false, false, false, false], }
                    ],
                ]
            },
            margin: [260, 1, 0, 0]
        },
        {
            table: {
                widths: [ '*', 'auto' ],
        body: [
            [ 
                { text: 'Balance', alignment: 'center', style: 'balanceHeader', bold: true, border: [true, true, true, true], colSpan: 2 }, 
                {} 
            ],
            [ 
                { text: '500.00', alignment: 'right', border: [true, true, true, true], colSpan: 2 },
                {}
            ]
        ]
    },
            margin: [260, 1, 0, 0]
        },
        '\n',
        { text: 'Invoice Note', style: 'subheader' },
        { text: 'Bank information:', bold: true },
        { text: 'Bank Name: Citibank\nBank Address: 1 North Wall Quay, International Financial Services Centre (IFSC), Dublin 1, Ireland\nBIC: CITIIE2X\nBeneﬁciary Account (IBAN): IE60CITI99005170145614\nBeneﬁciary: Geovane Chaves Pires', style: 'small' },
    
            {
            
            table: {
                widths: ['*'],
                style: 'tableEmail',
                body: [
                    
                    [ 
                    { text:'Email: geovanent@gmail.com',alignment: 'left', border: [false, true, false, false] },
                    ]         
                ]
            },
            margin: [1, 5, 0, 0],
        },
        
    ],
    styles: {
        font: 'Baskerville',
        header: {
            fontSize: 18,
            bold: true,
            margin: [0, 0, 0, 10]
        },
        subheader: {
            fontSize: 14,
            bold: true,
            margin: [0, 10, 0, 5],
        },
        tableExample: {
            margin: [0, 5, 0, 15]
        },
        tableHeader: {
            bold: true,
            fontSize: 13,
            color: 'black'
        },
        balanceHeader: {
            bold: true,
            fillColor: '#000000', // Cor de fundo preta
            color: '#ffffff', // Texto branco
            alignment: 'center',
            margin: [0, 5, 0, 5]
        },
        balanceAmount: {
            alignment: 'right',
            margin: [0, 5, 0, 5]
        }
    }
});
