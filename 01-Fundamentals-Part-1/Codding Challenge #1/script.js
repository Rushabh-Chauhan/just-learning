let markWeight1 = 78; 
let markHeight1 = 1.69;
let johnWeight1 = 92;
let johnheight1 = 1.95;

let markBMI1 = markWeight1 / (markHeight1 ** 2);
let jhonBMI1 = johnWeight1 / (johnheight1 ** 2);

let markHigherBHI = markBMI1 > jhonBMI1;

console.log(markHigherBHI);

markWeight1 = 95; 
markHeight1 = 1.88;
johnWeight1 = 85;
johnheight1 = 1.76;

markBMI1 = markWeight1 / (markHeight1 ** 2);
jhonBMI1 = johnWeight1 / (johnheight1 ** 2);

markHigherBHI = markBMI1 > jhonBMI1;

console.log(markHigherBHI);