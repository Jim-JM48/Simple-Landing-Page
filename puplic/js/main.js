
let toggleBtn = document.querySelector("nav .toggle-btn");
let links = document.querySelector("nav .links");
let filter = document.querySelector(".portofolio .filter")
let send = document.querySelector(".send")

//toggle button function
const toggleFun = () => {
    toggleBtn.addEventListener("click" ,() => {
        links.classList.toggle("active");
        toggleBtn.classList.toggle("cross");
    })
}

//active link function
const activeFun = (selector ,tagname) => {
    if (!selector) return;
    let target = Array.from(selector.getElementsByTagName(tagname));
    target.map((ele) => {
        ele.addEventListener("click" ,() => {
            target.forEach((e) => {
                e.classList.remove("active");
            })
            ele.classList.add("active");
            scrollTO(ele)
        })
    })
}

//scrollHandle
const scrollTO = (element) => {
    const name = element.dataset.id;
    if(name == 'home') return;
    let currenElement = document.querySelector(`.${name}`);
    currenElement.scrollIntoView({behavior : 'smooth'})
}

//formHandle
const formSender = () => {
    send.addEventListener("click" ,(e) => {
        e.preventDefault();
    })
}


toggleFun();
formSender();
activeFun(links ,"li");
activeFun(filter ,"button");