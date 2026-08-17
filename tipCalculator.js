function  tipCalculate(totalAmount,tipPercentage,locale,currency){
    let tip = [];
    for(let i = 0; i<tipPercentage.length; i++){
        tipAmount = totalAmount * (tipPercentage[i] / 100);
        // tipAmount = tipAmount.toFixed(2);
        // tip.push(tipAmount);
        const formatter = Intl.NumberFormat(locale, {
            style: "currency",
            currency: currency
        });
        tip.push(formatter.format(tipAmount));
    }
    return tip;
}
console.log("Amount: 1000₹,Tip percentage: [5,10,15] ->  Tip Amount: ", tipCalculate(1000,[5,10,15],"en-IN","INR"));
console.log("Amount: 997$,Tip percentage: [5,10,15] ->  Tip Amount: ", tipCalculate(997,[5,10,15],"en-US","USD"));

