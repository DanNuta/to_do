const submit = document.querySelector(".submit_to_do");
const inputToDo = document.querySelector(".input_to_do");
const form = document.querySelector("form");
const renderToDo = document.querySelector(".render_to_do");
const edit =  form.querySelector(".edit");








let toDo = [];
let curentToDo;

let btnVerify = false;


function  counterDown(counter){

    if(counter < 0){
        let alerAddANewItem = `<p>New item added</p>`;
        document.innerHTML = document.innerHTML + alerAddANewItem;

    }
    counter--;

    console.log(counter)
    
}


submit.addEventListener("click", function(e){

    


    let counter = 2

    const newItemAdedd = document.querySelector(".new_item");

    newItemAdedd.style.display = "block"


   let show =  function displayMessage(){
        if(counter <=  0){
            const newItemAdedd = document.querySelector(".new_item");
            newItemAdedd.style.display = "none"
    
            clearInterval(show())
            return
        }
        counter--;
    }

 

    setInterval(show, 500)


    





    


    console.log("SUBMIT")
    e.preventDefault();

    if(inputToDo.value == ""){
       return
    }else{
        let value = inputToDo.value;
        toDo.push({id: Math.floor(Math.random()*1000), toDo: value})
        curentToDo = {id: Math.floor(Math.random()*1000), toDo: value}
    }

                let ToDoElement =
                    `<div class="all_to_do">
                    <h4 class="question" data-question=${curentToDo.toDo}>${curentToDo.toDo}</h4>
      
                    <div>
                       <button class="edit_btn">Edit</button>
                       <button class="delete">Delete</button>
                    </div>
                  </div>`;
                
   


    inputToDo.value = "";

    

    renderToDo.innerHTML = renderToDo.innerHTML + ToDoElement;


    const deleteItem = renderToDo.querySelector(".delete_items");
    let allToDo = [...renderToDo.querySelectorAll(".all_to_do")];

    


    allToDo.length > 0 ? deleteItem.style.display = "block" : deleteItem.style.display = "none"
    
    const editBtns = renderToDo.querySelectorAll(".edit_btn");
    const deleteBtn = [...renderToDo.querySelectorAll(".delete")];

    editBtns.forEach(function(btn){
        btn.addEventListener("click", function(event){

      let tinta = event.target.parentElement.parentElement.querySelector("[data-question]").innerHTML;


     
      let input = form.querySelector(".input_to_do");
 
     edit.style.display = "block" 
     submit.style.display = 'none'
      
      input.value = tinta;


      edit.addEventListener("click", function(e){
        e.preventDefault()

       let valueInput = input.value;
       let tintaElement =  event.target.parentElement.parentElement.querySelector(".question");


       tintaElement.innerHTML = valueInput;

       input.value = "";


     edit.style.display = "none" 
     submit.style.display = 'block'

      })
        })
    })




    deleteBtn.forEach(function(btn){

        btn.addEventListener("click", function(e){
            let deleteElement = e.target.parentElement.parentElement;
            deleteElement.remove();

            let allToDo = [...renderToDo.querySelectorAll(".all_to_do")];

            allToDo.length > 0 ? deleteItem.style.display = "block" : deleteItem.style.display = "none"

            
        })
       
        })


        


        allToDo.length > 0 ? deleteItem.style.display = "block" : deleteItem.style.display = "none"
        
        deleteItem.addEventListener("click", function(){
            
            let allToDo = [...renderToDo.querySelectorAll(".all_to_do")];

            allToDo.forEach(function(item){
                item.remove()

            })

            deleteItem.style.display = "none"
            
        })


    })








form.addEventListener("submit", function(e){
    e.preventDefault()
})


const newItemAdedd = document.querySelector(".new_item");



edit.style.display = 'none';
newItemAdedd.style.display = "none"
