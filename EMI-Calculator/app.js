






const findBtn = document.getElementById("find");

findBtn.addEventListener('click', computeLoan)



function computeLoan(){
    const amount = document.getElementById('amount').value;
    const intrest_rate = document.getElementById('ir').value;
    const months = document.getElementById('time').value;

    let interest = (amount * (intrest_rate * 0.01) *months)/100;
    

    const res = document.getElementById('emi')
    res.innerHTML = "<div class='amountInfo'> <h4>Your EMI amount is : <span class='amount'>" + 
                     + amount*(interest * (1+interest)^months)/ (((1+interest)^months)-1).toFixed(2) +
                    "</span> </h4> </div>"

}




 