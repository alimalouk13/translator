let arabic= document.getElementById("arabic");
let english= document.getElementById("english");
let title= document.getElementById("title");
let text1= document.getElementById("text1");
let text2= document.getElementById("text2");
let text3= document.getElementById("text3");
let call= document.getElementById("call");


arabic.onclick=()=>{
    setlanuage("arabic"); 
    localStorage.setItem("lang1","arabic")
}
english.onclick=()=>{
    setlanuage("english"); 
    localStorage.setItem("lang","english")
};
onload = ()=>{
    setlanuage(localStorage.getItem("Lang1"));
};

function setlanuage(getlanuage){
 if(getlanuage==="arabic")
 {
    text1.innerHTML="مرحبا في صفحة المصمم علي ملوك "
    text2.innerHTML="معلومات عنا"
    text3.innerHTML="أنا مهندس تكنولوجيا المعلومات  "
    title.innerHTML="مترجم"
    call.innerHTML="تواصل معي"
    localStorage.setItem("arabic")

 }
 else if(getlanuage==="english")
 {
    text1.innerHTML="welcome to website Ali malouk "
    text2.innerHTML="about US"
    text3.innerHTML="I'm an Engineer information technologe "
    call.innerHTML="call me"
    title.innerHTML="trnslet"

 }
}