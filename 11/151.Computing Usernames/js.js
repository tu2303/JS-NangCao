displayMovements(account1.movements);

const calcPrintBalance = function(acc) {
    const balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
    labelBalence.textContent = `${balance} EUR`;
};

calcPrintBalance(account1.movements);

const calcPrintSummary = function(acc) {
    const incomes = acc.movements
        .filter(mov => mov > 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${incomes}`;

    const out = acc.movements
        .filter(mov => mov < 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${Math.abs(out)}`;

    const interest = acc.movements
        .filter(mov => mov > 0)
        .map(deposits => (deposits * acc.interestRate) / 100)
        .filter((int, i, arr) => {
           // console.log(arr);
            return int >= 1;
        })
        .reduce((acc, int) => acc + int, 0);
    labelSumInterest.textContent = `${interest}`;
};
calcPrintBalance(account1.movements);

const createUsernames = function(accs) {
    accs.forEach(function(acc) {
        const username = acc.owner
            .toLowerCase()
            .split(' ')
            .map(name => name[0])
            .join('');
    });
};
createUsernames(accounts);
//console.log(accounts);