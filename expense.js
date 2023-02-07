let form=document.getElementById('my-form');
let list=document.getElementById('users');
localStorage.setItem('Pizza','{"amount":"200","discription":"Pizza","categary":"Food"})');
let li=document.createElement('li');
li.className='ulList';
li.appendChild(document.createTextNode(200));
li.appendChild(document.createTextNode("-"));
li.appendChild(document.createTextNode('Food'));
li.appendChild(document.createTextNode("-"));
li.appendChild(document.createTextNode('Pizza'));
delEdit(li);

list.appendChild(li);
let localObj=(Object.values(localStorage));
// console.log(localObj);
// set all local object inside UI
for(let i=1; i<localObj.length; i++){
    let amount=JSON.parse(localObj[i]).amount;
    let discription=JSON.parse(localObj[i]).discription;
    let categary=JSON.parse(localObj[i]).categary;

    let li=document.createElement('li');
    li.className='ulList';
    li.appendChild(document.createTextNode(amount));
    li.appendChild(document.createTextNode("-"));
    li.appendChild(document.createTextNode(categary));
    li.appendChild(document.createTextNode("-"));
    li.appendChild(document.createTextNode(discription));
    delEdit(li);
    list.appendChild(li);
}



form.addEventListener('submit',addItem);

function addItem(e){
    e.preventDefault();
    // console.log('add item');
    let amount=document.getElementById('amount').value;
    let discription=document.getElementById('discription').value;
    let categary=document.getElementById('categary').value;
    if(amount==""||discription==""||categary=="categary"){
        return alert('field is empty'+"\n"+'please fill details properly');
    }
    let liTag=list.querySelectorAll('li');
    Array.from(liTag).forEach(function(item){
        let disItem=item.childNodes[4].textContent;
        if(disItem.indexOf(discription)!=-1){
            item.style.display='none';
        }
    })

    let li=document.createElement('li');
    let obj={
        amount,
        discription,
        categary
    }

    localStorage.setItem(`${obj.discription}`,JSON.stringify(obj));
    li.className='ulList';
    li.appendChild(document.createTextNode(`${obj.amount}`));
    li.appendChild(document.createTextNode("-"));
    li.appendChild(document.createTextNode(`${obj.categary}`));
    li.appendChild(document.createTextNode("-"));
    li.appendChild(document.createTextNode(`${obj.discription}`));
    delEdit(li);
    
    list.appendChild(li);

    //make empty details for new user
    let val=document.getElementById('amount');
    let val2=document.getElementById('discription');
    let val3=document.getElementById('categary');
    val.value=null;
    val2.value=null;
    val3.value='categary';

}

//delete item event
list.addEventListener('click',removeItem);
function removeItem(e){
    if(e.target.classList.contains('delete')){
        li=e.target.parentElement;
        let key=li.childNodes[4].textContent;
        // console.log(key);
        localStorage.removeItem((key));
        list.removeChild(li);
    }
}

//edit item event
list.addEventListener('click',editItem);
function editItem(e){
    if(e.target.classList.contains('edit')){
        // console.log('edit');
        li=e.target.parentElement;
        let amt=li.childNodes[0].textContent;
        let ctg=li.childNodes[2].textContent;
        let dis=li.childNodes[4].textContent;

        let v1=document.getElementById('amount');
        let v2=document.getElementById('discription');
        let v3=document.getElementById('categary');

        v1.value=amt;
        v2.value=dis;
        v3.value=ctg;
    }
}

//function for to add delete and edit button.
function delEdit(li){
    let del=document.createElement('button');
    del.appendChild(document.createTextNode('Delete Expence'));
    del.className='delete';
    let edit=document.createElement('button');
    edit.className='edit';
    edit.appendChild(document.createTextNode('Edit Expence'));
    li.appendChild(del);
    li.appendChild(edit);
}








