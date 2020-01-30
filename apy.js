let sum = 2680;
let interest = 0.07;
let years = 40;
let ylimit = 6000;
let olimit = 7000;

let c = 0;
for(let i = 0; i < years; i++) {
    sum = sum + (sum*interest);
    if(i > 25) {
        sum+=olimit
    }else{
        sum += ylimit;
    }
    console.log(sum,(sum*0.04)/12,i+1);
    
    if(c > 6) {
        ylimit = ylimit + (0.09*ylimit);
        olimit = olimit + (0.09*olimit);
        c = 0;
    }

    c++;
}