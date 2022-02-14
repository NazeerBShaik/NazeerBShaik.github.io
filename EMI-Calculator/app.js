






const findBtn = document.getElementById("find");

findBtn.addEventListener('click', computeLoan)



function computeLoan(){
    const amount = document.getElementById('amount').value;
    const intrest_rate = document.getElementById('ir').value;
    const months = document.getElementById('time').value;

    const res = document.getElementById('emi')
    res.innerHTML = "<div class='amountInfo'> <h4>Your EMI amount is : <span class='amount'>" + 
                     + ((amount/months) + (amount/months) * (intrest_rate/100)) .toFixed(2) +
                    "</span> </h4> </div>"

}