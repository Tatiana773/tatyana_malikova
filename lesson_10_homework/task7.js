
function checkSpam(str){
    let string = str.toLowerCase();
    if(string.includes("viagra") || string.includes("xxx")){
        return true;
    }
    return false;
}
console.log(checkSpam("buy ViAgRA now"));
console.log(checkSpam("free xxxxx"));
console.log(checkSpam("innocent rabbit"));