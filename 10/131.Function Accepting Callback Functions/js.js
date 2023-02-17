const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toLowerCase(), ...others].join(' ');
};

//Higher-order function
const transformer = function(str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

//JS user callbacks all the time

const high5 = function() {
    console.log('bye');
};
document.body.addEventListener('click', high5);
['jonas', 'Martha', 'Adam'].forEach(high5);