const para1=document.getElementById('inp')
let main=document.getElementById('new')
let arr=[]

function arrayAdd(){
    arr.push(para1.value)
    add()
}
  function add()
  {
    main.textContent=''
    arr.forEach((ele,ind)=>{
     let newDiv= document.createElement('div')   //<div class='task'></div>
     newDiv.classList.add('task')
      const names=document.createElement('p')//<p>ele</p>
      names.textContent=ele
    const button=document.createElement('button')//<button>❌</button>
      button.textContent='❌'
      button.addEventListener('click',()=>remove(ind))
      newDiv.append(names,button)
      main.appendChild(newDiv)
      para1.value=''
    })
    
  }

  
function remove(ind)
{
   arr.splice(ind,1);
   add()
   
}