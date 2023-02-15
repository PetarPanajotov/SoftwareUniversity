exports.generatePaymentOptions = (selectedPayment) => {
    let paymentOptions = [
        { key: "crypto-wallet", value: "Crypto Wallet", selected: false },
        { key: "credit-card", value: "Credit Card", selected: false },
        { key: "debit-card", value: "Debit Card", selected: false },
        { key: "paypal", value: "PayPal", selected: false }
    ];
    paymentOptions =  paymentOptions.map( (x) => x.key == selectedPayment? { ...x, selected: true}: x);
    return paymentOptions;
};