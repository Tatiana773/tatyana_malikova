function getText(){
document.querySelectorAll('tr').forEach((item)=>{
        Array.from(item.children).forEach((element)=>{
            element.textContent = `${(item.rowIndex+1)} : ${(element.cellIndex+1)}`;
            if((item.rowIndex+1) == (element.cellIndex+1)){
                element.style.backgroundColor = "red";
            }
        })
    })
};
getText();