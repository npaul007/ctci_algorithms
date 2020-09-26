strStr = function(haystack, needle) {
    let index = -1;
    for(let i = 0; i < haystack.length; i++) {
        if( haystack.substring(i,i+needle.length) == needle ) {
            index = i;
            i = haystack.length;
        }
    }

    if( haystack == needle ) {
        index = 0;
    }

    return index;
};

console.log(strStr("",""));