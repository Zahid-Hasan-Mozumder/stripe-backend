export class PaymentRequestDto {
    email : string;
    paymentMethod : any;
}

export class PaymentUpdateDto {
    customerId : string;
    subscriptionId : string;
}