function maxProfit(price){
    let globalProfit = 0;
    for(i=0;i<=price.length -1 ; i++){
        for(j=i+1;j<=price.length; j++){
            const currentprofit = price[j] - price[i];
            if(currentprofit > globalProfit) globalProfit = currentprofit
            console.log(currentprofit, globalProfit);
        }
    }
    return globalProfit;
}

// console.log(maxProfit([7,1,5,3,6,4]))

function maxprofitOptimation(prices){
   
    let price = prices[0] || 0
    let profit = 0;
    for(let i=1;i< prices.length; i++){

        if(prices[i] < price){
            price = prices[i]
        }

        // if(profit < price[i]-price)
        //     profit = price[i] - price;
        profit = Math.max(profit, prices[i]  - price);
    }
    return profit;
}

console.log(maxprofitOptimation([7,1,5,3,6,4]));


