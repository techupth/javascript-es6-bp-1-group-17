let height = undefined;
let result = checkheight(height);
function checkheight(variable){
    const result = height?? "Height is not defined";
    return result
}

console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
