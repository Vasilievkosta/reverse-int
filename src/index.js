module.exports = function reverse(n) {
    if (n < 0) n = n * -1;
    let result = String(n);
    result = result.split('');
    result = result.reverse();
    result = result.join('');

    return Number(result);
}
