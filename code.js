window.onload = function(){
    var todoList = []; 
    if (localStorage.getItem('todo') != undefined){
        todoList = JSON.parse(localStorage.getItem('todo'));
        printOut();
    }

    document.getElementById('add').onclick = function (){
    var usersInput = document.getElementById('in').value;

    //создаю временный ассоциативный массив
    //todo: купить хлеб,  check: false
    var temp = {};
    temp.todo = usersInput;//  название дела
    temp.check = false; // сделано или нет(его состояние)

    
    var i = todoList.length;
    todoList[i] = temp;// связываю массив со списком дел todoList с временным массивом temp
    console.log(todoList);
    printOut();
    localStorage.setItem('todo', JSON.stringify(todoList));
}

function printOut(){
    var print = '';
    for (var key in todoList){
        if (todoList[key].check == true){
            print +='<input type="checkbox" checked>';
        }
        else{
            print +='<input type = "checkbox">';
        }
        print += todoList[key].todo + '<br>';
    }
    document.getElementById('out').innerHTML = print;

}
    document.getElementById('delete').onclick = function (){
        
        todoList[this].checked = true;
        
        console.log(todoList);
        printOut();
       
    }   
 
}

