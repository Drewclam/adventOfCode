module.exports = {
    pow: arr => arr.reduce((res, current) => {
        res *= current;
        return res;
    }, 1)
}