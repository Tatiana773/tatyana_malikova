let ul = document.createElement('ul');
document.body.append(ul);
function createList(){
    let text= prompt('Введите пункт списка');
    if(!text){return};
    let li = document.createElement('li');
    li.textContent = text;
    ul.append(li);
    createList();

}
createList();