const wrapper=document.querySelector(".sliderwrapper");
const menuitems=document.querySelectorAll(".menuitem");
const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];
let choosenproduct=products[0];

const currentimg=document.querySelector(".productimg")
const currenttitle=document.querySelector(".productstitle")
const currentprice=document.querySelector(".productprice")
const currentcolor=document.querySelectorAll(".color")
const currentsize=document.querySelectorAll(".size")

menuitems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        wrapper.style.transform=`translate(${-100*index}vw)`
        choosenproduct=products[index]
        currenttitle.textContent=choosenproduct.title;
        currentprice.textContent="$"+choosenproduct.price;
        currentimg.src=choosenproduct.colors[0].img;
        currentcolor.forEach((color,index)=>{
            color.style.backgroundColor=choosenproduct.colors[index].code;
        })
    })
})
currentcolor.forEach((color,index)=>{
  color.addEventListener("click",()=>{
    currentimg.src=choosenproduct.colors[index].img
  })
})
currentsize.forEach((size,index)=>{
  size.addEventListener("click",()=>{
    currentsize.forEach((size,index)=>{
      size.style.backgroundColor="white";
      size.style.color="black";
    })
    size.style.backgroundColor="black";
    size.style.color="white";
  })
})
const productbtn=document.querySelector(".productbutton")
const payment=document.querySelector(".payment")
const close=document.querySelector(".close")

productbtn.addEventListener("click",()=>{
  payment.style.display="flex";
})
close.addEventListener("click",()=>{
  payment.style.display="none";
})