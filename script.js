let userInput=document.querySelector(".user-input");
let addBtn= document.querySelector(".add-btn");
let displayTask=document.querySelector(".task_display-container");
let userArray= JSON.parse(localStorage.getItem("userData")) || [];

// function to create items dynamically
function createItemsDynamically(value){
    // create a container to put the todo in
  const todoEntry= document.createElement('div');
  todoEntry.className = "todo";
    // created paragraph element inside displayTask
  const para=document.createElement('p');
  para.className = 'display-added-task';
  para.textContent=value;
  todoEntry.appendChild(para);
  // created delete button
  const deleteBtn= document.createElement('Button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent= "Delete";
  todoEntry.appendChild(deleteBtn);
  displayTask.appendChild(todoEntry);
  deleteBtn.addEventListener('click',function(){
    deleteItem(todoEntry,value);
  });
  }

  // function to get data
  function getData(){
    arrayList = JSON.parse(localStorage.getItem("userData")) || [];
    console.log(arrayList);
    arrayList.forEach(element => {
      createItemsDynamically(element);
    });
  }
  
  getData();

// function to add data
function addTask(){
  let uservalue=userInput.value.trim();
if (uservalue.length>0) {
 // adding uservalue to array
 userArray.push(uservalue);
 // console.log(userArray);
 // add data to local storage
   localStorage.setItem("userData", JSON.stringify(userArray));
  createItemsDynamically(uservalue);
}
  userInput.value="";
}

// function for the deletebtn
function deleteItem(todoEntry,value){
  todoEntry.remove();
   userArray= userArray.filter(item=>item!==value);
   localStorage.setItem("userData",JSON.stringify(userArray));
  
}

addBtn.addEventListener("click", addTask);

userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

