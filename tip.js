'use strict';

const tipData = function(bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2 ;
}
const bill = [125,555,44];
const tips = [tipData(bill[0]),tipData(bill[2]),tipData(bill[2])];
const total = [bill[0]+tips[0],bill[1]+tips[1],bill[2]+tips[2]];
console.log(tips,total);