
  document.addEventListener("DOMContentLoaded", () => {
    // your code here
    let form = document.querySelector("form")
    document.querySelector("form").addEventListener('submit',(e) => {
       e.preventDefault();
       let inputVal = document.getElementById("new-task-description").value;
       const ul = document.getElementById("tasks");
       const btn = document.createElement("button");
       btn.textContent = "X";
       btn.addEventListener("click",handleDelete);
       const li = document.createElement("li");
       li.textContent = ` ${inputVal} `
       li.append(btn)
       ul.append(li)
       form.reset()
   
     })
   });
   function handleDelete(e) {
     console.log(e.target.parentNode.remove())
   }
});
