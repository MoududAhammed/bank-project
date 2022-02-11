/* deposit part
------------------- */
document.getElementById('deposit-button').addEventListener('click', function(){
    // get amount of deposit 
    const depositAmount = document.getElementById('deposit-input');
    //current deposit
    const depositTotal = document.getElementById('deposit-total');
    // get old deposit amount 
    let depositOldAmount = parseFloat(depositTotal.innerText);
    //set new total deposit
    depositTotal.innerText = depositOldAmount + parseFloat(depositAmount.value);
     
    // deposit add in main balance
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceAmount = parseFloat(totalBalance.innerText);
   //set finel balance
    totalBalance.innerText = totalBalanceAmount + parseFloat(depositAmount.value);

    // clear the deposit input field
    depositAmount.value = '';  

})
/* withdraw part
-------------------- */
document.getElementById('withdraw-button').addEventListener('click', function(){
    //get withdraw input amount
    const withdrawAmount = document.getElementById('withdraw-input');
    //get withdraw old total
    const withdrawTotal = document.getElementById('withdraw-total'); 
    //convert withdraw total : string to float
    const withdrawOldAmount = parseFloat(withdrawTotal.innerText);
    //set new total 
    withdrawTotal.innerText = withdrawOldAmount + parseFloat(withdrawAmount.value);
    //withdrow in main balance 
    const totalBalance = document.getElementById('total-balance');
    totalBalance.innerText = parseFloat(totalBalance.innerText) - parseFloat(withdrawAmount.value);
    //clear withdraw field
    // note: total balance calculate korer por clear korbo because total balance calculate korte ai data lagbe.
    withdrawAmount.value = '';
})


