import { ApiProperty } from '@nestjs/swagger';

class ClientDTO {
    @ApiProperty({ example: 'Geovane Chaves Pires Tecnologia' })
    name: string;

    @ApiProperty({ example: 'Rua Solidônio Leite, 2694, Apto 114 Bloco C' })
    addressLine1: string;

    @ApiProperty({ example: 'Vila Ivone, Sao Paulo, Sao Paulo, 03275-000' })
    addressLine2: string;

    @ApiProperty({ example: 'AB123456789' })
    taxId: string;
}


class ServiceItemDTO {
    @ApiProperty({ example: 'Web Development Services' })
    description: string;

    @ApiProperty({ example: 5 })
    quantity: number;

    @ApiProperty({ example: 100 })
    rate: number;

    @ApiProperty({ example: 500 })
    amount: number;
}

export class InvoiceDTO {
    @ApiProperty({ example: 'INV-001' })
    invoiceNumber: string;

    @ApiProperty({ example: '2024-01-01' })
    date: string;

    @ApiProperty({ example: '2024-01-15' })
    dueDate: string;

    @ApiProperty({ type: ClientDTO })
    client: ClientDTO;

    @ApiProperty({ type: [ServiceItemDTO] })
    services: ServiceItemDTO[];

    @ApiProperty({ example: 950 })
    subTotal: number;

    @ApiProperty({ example: 1000 }) // Assuming a tax or fee is added
    total: number;

    @ApiProperty({ example: 'Please make all checks payable to XYZ Corporation' })
    note: string;

    @ApiProperty({ example: 'Bank XYZ, Account No: 123456789' })
    bankInfo: string;
}
