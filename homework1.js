/*
Hepimizin Matematik derslerinden bildiği üzere Dairenin Alanı = π x r2 
şeklinde hesaplanır. Node.JS Javascript çalışma ortamında yarıçap değerini
konsoldan parametre olarak girerek alanı bulmaya çalışacağız. Konsol çıktısı: 
Yarıçapı (Yarıçap) olan dairenin alanı: (Alan) şeklinde olmalıdır.

*/


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Please give me a radius?', r => {
    var area = Math.PI * Math.pow(r,2);
    
    area = area.toFixed(2);

    
    console.log(`Area of circle with radius ${r} is ${area}`);
    readline.close();
  });
    


