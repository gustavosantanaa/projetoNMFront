function calc_total() {
    var qtd = parseInt(document.getElementById('crendapes').value);
    if (qtd<=0){
        document.getElementById('crendapestotal').value = "Não possuo";
    }else if(qtd<=1212){
        document.getElementById('crendapestotal').value = "Entre R$ 1.212,00 a R$3.636,00";        
    }else if(qtd<=2862){
        document.getElementById('crendapestotal').value = "Entre R$ 15.756,00 a R$18.180,00";
    }else if (qtd<=20604){
        document.getElementById('crendapestotal').value = "Entre R$ 18.180,00 a R$20.604,00";     
    }else{
        document.getElementById('crendapestotal').value = "Acima de R$ 20.604,00";
    }
   
}    

function calc_total2() {
    var qtd2 = parseInt(document.getElementById('crendafam').value);

    if(qtd2<=0){
        document.getElementById('crendafamtotal').value = "Não possuo";
    }else if(qtd2<=1212){
        document.getElementById('crendafamtotal').value = "Menos que R$ 1.212,000"; 
    }else if(qtd2<=3636){
        document.getElementById('crendafamtotal').value = "Entre R$ 1.212,00 a R$3.636,00";
    }else if(qtd2<=6060){
        document.getElementById('crendafamtotal').value = "Entre R$ 3.636,00,00 a R$6.060,00";
    }else if(qtd2<=8484){
        document.getElementById('crendafamtotal').value = "Entre R$ 6.060,00 a R$8.484,00";
    }else if(qtd2<=10908){
        document.getElementById('crendafamtotal').value = "Entre R$ 8.484 a R$ 10.098,00";      
    }else if(qtd2<=23028){
        document.getElementById('crendafamtotal').value = "Entre R$ 20.604,00 a R$23.028,00";
    }else if(qtd2<=25452){
        document.getElementById('crendafamtotal').value = "Entre R$ 23.028,00 a R$25.452,00";
    }else if(qtd2<=27876){
        document.getElementById('crendafamtotal').value = "Entre R$ 25.452,000 a R$27.876,00";
    }else if (qtd2<=30300){
        document.getElementById('crendafamtotal').value = "Entre R$ 27.876,00 a R$30.300,00";     
    }else{
        document.getElementById('crendafamtotal').value = "Acima de R$ 30.300,00";
    }
}