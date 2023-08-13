const heading=document.getElementById("heading");
function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value;
    
    if (task === "") {
      alert("Please enter a task!");
      return;
    }
  
    var taskList = document.getElementById("taskList");
    var li = document.createElement("li");
    li.innerHTML = task + ' <button class="delete-btn" onclick="deleteTask(this)">Delete</button>';
    taskList.appendChild(li);
    
    input.value = "";
  }
  
  function deleteTask(button) {
    var li = button.parentNode;
    var ul = li.parentNode;
    ul.removeChild(li);
  }

function onClick(){
  setInterval(()=>{
    const rd=Math.floor(Math.random()*1000000+1);
    document.body.style.backgroundColor=`#${rd}`;
  },1000)
}

heading.addEventListener("click",onClick);
