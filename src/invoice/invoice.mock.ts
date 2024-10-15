export const invoiceDataMock = {
    invoiceNumber: "INV-001",
    date: "2024-01-01",
    dueDate: "2024-01-15",
    client: {
        name: "Geovane Chaves",
        addressLine1: "Rua Solidônio Leite, 2694, Apto 114 Bloco C",
        addressLine2: "Vila Ivone, Sao Paulo, Sao Paulo, 03275-000",
        taxId: "AB123456789"
    },
    services: [
        {
            description: "Service 1",
            quantity: 2,
            rate: 100,
            amount: 500
        },
        {
            description: "Service 2",
            quantity: 1,
            rate: 150,
            amount: 450
        },
        {
            description: "Service 3",
            quantity: 1,
            rate: 500,
            amount: 450
        }
    ],
    subTotal: 950,
    total: 1000,
    note: "Please make all checks payable to XYZ Corporation",
    bankInfo: "Bank XYZ, Account No: 123456789"
};
