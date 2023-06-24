var strStr = function(haystack, needle) {
    console.log(haystack, needle)

    // convert haystack and needle to array
    let haystackArr = haystack.split('');
    // let needleArr = needle.split('');
    // find needle in haystack
    let index = haystackArr.indexOf(needle);
    // return index
    return index;
};
