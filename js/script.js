function clearAll() {

    setTimeout(function(){
        document.getElementById("first").style.cssText = 'display: none';
        document.getElementById("second").style.cssText = 'display: none';
    },500);
    
}
function clickFunction() {
    document.getElementById("first").style.cssText = 'display: flex';
    document.getElementById("second").style.cssText = 'display: none';
}

function clickFunction2() {
    document.getElementById("second").style.cssText = 'display: flex';
    document.getElementById("first").style.cssText = 'display: none';
}