let toRetire = document.getElementById('retirar')

let account = document.getElementById('cuenta')

let toAbonar = document.getElementById('abonar')

let saldo = 1000
account.innerHTML = saldo

function restar(){
    // resta lo de toRetire con lo de account
    let saldoConRetiro = saldo - parseFloat(toRetire.value)
    saldo = saldoConRetiro
    account.innerHTML = saldoConRetiro
}
function sumar(){
    // suma lo de toRetire con lo del account
    let saldoConAbonar = saldo + parseFloat(toAbonar.value)
    account.innerHTML = saldoConAbonar
    saldo = saldoConAbonar
}


