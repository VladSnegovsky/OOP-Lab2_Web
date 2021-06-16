export interface Receipt {
    orderid: string;
    price: string;
    paid: boolean;
}

// tslint:disable-next-line:max-line-length
export function getReceipt(orderId1: string, price1: string): Receipt{
    const receipt: Receipt = {
        orderid: orderId1,
        price: price1,
        paid: false
    };
    return receipt;
}
