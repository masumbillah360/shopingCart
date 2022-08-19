const getValue = (id) =>{
    const element = document.getElementById(id);
    const elementString = element.value;
    const eleInt = parseInt(elementString);
    return eleInt;
}
const getTextValue = (id) =>{
    const element = document.getElementById(id);
    const elementString = element.innerText;
    const eleInt = parseInt(elementString);
    return eleInt;
}
const setTextValue = (id,value) =>{
    const element = document.getElementById(id);
    element.innerText = value;    
}
const setInputValue = (id,value) =>{
    const element = document.getElementById(id);
    element.value = value;    
}

const findElement =(id)=>{
    return document.getElementById(id);
}

const updater = (isIncrease,id) =>{
    const phoneNum = getValue(id);
    let newNumber;
    if(isIncrease){
        newNumber = phoneNum + 1;
    }
    else{
        newNumber = phoneNum - 1;
    }
    setInputValue(id,newNumber);
    return newNumber;
}

const totalPriceCounter=(quantity,price)=>{
    return quantity * price;
}

const subTotal = () =>{
    const phoneTotalPrice = getTextValue('phone-price');
    const caseTotalPrice = getTextValue('case-price');
    const allTotal = phoneTotalPrice+caseTotalPrice;
    return allTotal;
}

const phoneBtnPlus = findElement('btnPlusPro');
phoneBtnPlus.addEventListener('click',()=>{
    const phoneQuantity = updater(true,'phoneNum');
    const totalPhonePice = totalPriceCounter(phoneQuantity,1219);
    setTextValue('phone-price',totalPhonePice);
    setTextValue('sub-total',subTotal());
    const taxAmout = subTotal()*.1;
    const finalAmount = subTotal() - taxAmout;
    setTextValue('tax-amount', taxAmout);
    setTextValue('final-amount', finalAmount);
});



const phoneBtnMinus = findElement('bntMinusPro');
    phoneBtnMinus.addEventListener('click',()=>{
       const phoneQuantity = updater(false,'phoneNum');
       const totalPhonePice = totalPriceCounter(phoneQuantity,1219);
       setTextValue('phone-price',totalPhonePice);
       setTextValue('sub-total',subTotal());
       const taxAmout = subTotal()*.1;
       const finalAmount = subTotal() - taxAmout;
       setTextValue('tax-amount', taxAmout);
       setTextValue('final-amount', finalAmount);

});

const caseBtnPlus = findElement('case-plus');
caseBtnPlus.addEventListener('click',()=>{
    const caseQuantity = updater(true,'case-container');
    const totalCasePrice = totalPriceCounter(caseQuantity,59);
    setTextValue('case-price',totalCasePrice);
    setTextValue('sub-total',subTotal());
    const taxAmout = subTotal()*.1;
    const finalAmount = subTotal() - taxAmout;
    setTextValue('tax-amount', taxAmout);
    setTextValue('final-amount', finalAmount);

});
const caseBtnMinus = findElement('case-minus');
caseBtnMinus.addEventListener('click',()=>{
    const caseQuantity = updater(false,'case-container');
    const totalCasePrice = totalPriceCounter(caseQuantity,59);
    setTextValue('case-price',totalCasePrice);
    setTextValue('sub-total',subTotal());
    const taxAmout = subTotal()*.1;
    const finalAmount = subTotal() - taxAmout;
    setTextValue('tax-amount', taxAmout);
    setTextValue('final-amount', finalAmount);
});