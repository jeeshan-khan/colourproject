let menuDiv = document.querySelector("#menu");
let  mainDiv =document.querySelector("#main")

menuDiv.addEventListener("click",(elem)=>{
    if(elem.target.tagName == "BUTTON"){
        mainDiv.style.backgroundColor = elem.target.innerText;
    }
    
})
// elem - returns the element on which you click /
// .tagname - returns the tag of the element
// BUTTON - it should always be capital so that when we clcik on the tag it selects the tagname