/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    let upperToLower = {A:'a', B:'b', C:'c', D:'d', E:'e', F:'f',G:'g', H:'h', I:'i', J:'j', K:'k', L:'l', M:'m', N:'n', O:'o', P:'p', Q:'q', R:'r', S:'s', T:'t', U:'u', V:'v', W:'w', X:'x', Y:'y', Z:'z'}
    for (let i = 0; i < str.length; i++){
        // console.log(str[i], upperToLower[str[i]])
        if (upperToLower[str[i]]){
            str = str.replace(str[i], upperToLower[str[i]]);
        }
    }
    return str;
    // return str.toLowerCase();
};
