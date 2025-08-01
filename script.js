var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addbutton=document.getElementById("add-popup-button")

addbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

var cancel=document.getElementById("cancel-popup")

cancel.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"

})

var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var booktitle=document.getElementById("book-title-input")
var bookauthor=document.getElementById("book-author-input")
var bookdescription=document.getElementById("book-decription-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitle.value}<h2><h5>${bookauthor.value}</h5><p>${bookdescription.value}</p><button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"  
})
function deletebook(event){
    event.target.parentElement.remove()
}
