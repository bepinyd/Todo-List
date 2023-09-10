const input=document.getElementById('input-txt');
const listContainer=document.getElementById('list-container');

function addlist(){
    if(input.value==''){
        alert("Please Enter Something");
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=input.value;
        listContainer.appendChild(li)
        let span=document.createElement('span')
        span.innerText="x";
        li.appendChild(span)
    }
    input.value='';

    savedata()
}

listContainer.addEventListener('click',function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle('checked')
        savedata()
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove()
        savedata()
    }
},false)

function savedata(){
    localStorage.setItem('data', listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem('data')
}
showTask();