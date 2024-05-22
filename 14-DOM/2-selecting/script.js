// ---------- getElementById() ----------
const myIdPara = document.getElementById("myIdPara");
myIdPara.textContent = "This is changed by Id Selector"

// ---------- getElementsByClassName() ----------
const myClassPara = document.getElementsByClassName("myClassPara");
myClassPara[0].textContent = "Changed by using Class Selector"
// ClassName return HTMLCollection that why we use index to acces
// Elements, similar to array

// ---------- getElementsByTagName() ----------
const tagTest = document.getElementsByTagName("h1");
tagTest[0].innerText = 'Changed by using Tag Selector';
// Return HTMLCollection

// ---------- querySelector() ----------
const myQuery = document.querySelector(".myQuery")
myQuery.textContent = "Changed by Query Selector"
// this only select first element

// ---------- querySelectorAll() ----------
const myLi = document.querySelectorAll("li");
myLi[0].textContent = "hello";



