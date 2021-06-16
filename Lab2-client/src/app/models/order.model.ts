export interface Order {
    id: string;
    buckwheatQuantity: string;
    riceQuantity: string;
    compoteQuantity: string;
    cutletQuantity: string;
    calculated: boolean;
}

// tslint:disable-next-line:max-line-length
export function getOrder(buckwheatQuantity1: string, riceQuantity1: string, compoteQuantity1: string, cyberCutletQuantity1: string, id1: string): Order{
    const order: Order = {
        buckwheatQuantity: buckwheatQuantity1,
        riceQuantity: riceQuantity1,
        compoteQuantity: compoteQuantity1,
        cutletQuantity: cyberCutletQuantity1,
        calculated: false,
        id: id1
    };
    return order;
}
