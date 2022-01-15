function showInfo(){
    for(let li of document.querySelectorAll('li')){
        console.log(li.textContent);
    }
    console.log(document.querySelectorAll('li').length);
};
showInfo();