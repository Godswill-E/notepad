

const addbutton = document.querySelector(".circle");

const notebox = document.querySelector(".add-container");

const close = document.querySelector(".close");

const title = document.querySelector("input");

const content = document.querySelector("textarea");

const container = document.querySelector(".section");

const addnote = document.querySelector(".addnote");

const allitemslist = document.querySelector(".allitems");

const deletenote = document.getElementById("#delete");






addbutton.addEventListener('click', function(){
    notebox.classList.replace('closethis',"openthis")
    
});

function clear(){
    title.value = '';
    content.value = '';
}

close.addEventListener('click', function(e){
    e.preventDefault;
    notebox.classList.replace("openthis","closethis");
    clear();

});





function addnotes(){
    addnote.addEventListener('click', function(){
        const create = document.createElement('div');
        create.setAttribute('class', 'note-items')
        create.innerHTML = `<div><h2>${title.value}</h2><p>${content.value} </p><div class="buttons"><button id="delete" onclick="removethis(this)"> 📌 Delete note </button></div></div>`;

        
        allitemslist.appendChild(create)
        savedata();

        close.click();
        

    });
    
    
};
addnotes();


allitemslist.innerHTML = JSON.parse(localStorage.getItem('data'));
console.log(JSON.parse(localStorage.getItem('data')));
// console.log(notes);


   
function savedata(){
localStorage.setItem('data', JSON.stringify(allitemslist.innerHTML));
}






function removethis(name){
    name.parentElement.parentElement.parentElement.remove()
    savedata();
}

 
