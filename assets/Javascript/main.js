/* Dang nhap, Dang ky ---------------------------------------------------*/

const logIns=document.querySelectorAll(".auth-form__switch-btn");
const authForm=document.querySelector(".auth-form");
const modalBody=document.querySelector(".modal__body");
modalBody.lastElementChild.classList.add("un-active");

for(const logIn of logIns){
    logIn.onclick=function(e){
        if(e.target.innerText == "Đăng nhập") //Neu bam nut dang nhap thi se dong form dang ky va chuyen qua dang ky 
        {
            modalBody.firstElementChild.classList.add("un-active");
            modalBody.lastElementChild.classList.remove("un-active");
        }
        else //Neu bam nut dang ky thi se dong form dang ky va chuyen qua dang nhap 
        {
            modalBody.lastElementChild.classList.add("un-active");
            modalBody.firstElementChild.classList.remove("un-active");
        }
    };
}

/* Tro lai ------------------------------------------------------------------*/
const back=document.querySelectorAll(".auth-form__controls-back");
const modal=document.querySelector(".modal");
const blockNavBarItemMenu=document.querySelector(".header__navbar-item-menu");

for(const backs of back){
    backs.onclick=function(e){
        if(e.target.innerText == "TRỞ LẠI")
        {
            modal.classList.remove("active--modal");
        }

        blockNavBarItemMenu.style.removeProperty("display");

        app.classList.remove("un-active");

    }
}

/* Đăng xuất ------------------------------------------------------------------*/
const signOut=document.querySelectorAll(".header__navbar-item-menu-list");
const app=document.querySelector(".app");
for(const signOuts of signOut){
    signOuts.onclick=function(e){
        
        if(signOuts.innerText == "Đăng xuất"){
            modal.classList.add("active--modal");
        }
        e.preventDefault();

        Object.assign(blockNavBarItemMenu.style,{
            display:'none',
        });

        Object.assign(blockNavBarItemMenu.style,{
            display:'none',
        });

        app.classList.add("un-active");
    }
}