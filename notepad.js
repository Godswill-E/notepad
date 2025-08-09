

const addbutton = document.querySelector(".circle");

const notebox = document.querySelector(".add-container");

const close = document.querySelector(".close");

const title = document.querySelector("input");

const content = document.querySelector("textarea");

const container = document.querySelector(".section");

const addnote = document.querySelector(".addnote");

const deletenote = document.getElementById("delete");


addbutton.addEventListener('click', function(){
    notebox.classList.replace('closethis',"openthis")
    console.log(notebox);
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
        const newlist = document.createElement("div");
        newlist.setAttribute("class", "note-items");

        newlist.innerHTML = `
            <div>
                <h2>${title.value}</h2>
                <p>${content.value} </p>
                <div class="buttons"><button>Edit note 🖊️</button><button id="delete">Delete note 📌</button></div>
            </div>
        </div>
        
        `;
        let divnewlist = newlist;
        let titleText = title.value;
       
        var store = container.appendChild(divnewlist);
        
        localStorage.setItem(titleText, divnewlist);
        divnewlist = localStorage.getItem(titleText);

        close.click();
        
         
        
    });
    
    
};
addnotes();



// deletenote.addEventListener('click', function(){
//     deletenote.parentElement.parentElement.parentElement.remove();
// });
