// Add the coffee to local storage with key "coffee"
let menu=document.getElementById("menu")
 items=[]
const url =`https://masai-mock-api.herokuapp.com/coffee/menu`;
  fetch(url)
  .then(function(responce){
  return responce.json();
})

.then(function(responce){
  appendData(responce.menu.data)
  // console.log(responce)

})


 .catch(function(err){
  console.log(err)
 })
   

 function appendData(data){
   data.forEach(function(el) {
     
  
 
  let cont=document.createElement("div")
 
  let img=document.createElement("img")
 img.src=el.image;

 let title=document.createElement("p")
 title.innerText=el.title;

 let price=document.createElement("p")
 price.innerText=el.price;
let btn=document.createElement("button")
btn.innerText="Add to Bucket"
btn.addEventListener("click",function(){
addToCart(el);
cart(items)

})

 cont.append(img,title,price,btn)
 menu.append(cont)

});
}

function addToCart(el){
  function Item(image,name, price){
    (this.image=image),
  (this.name=name),
  (this.price=price)
 console.log(Item)
  }
 


let item = new Item(el.image,el.name,el.price)
items.push(item)
localStorage.setItem("coffee",JSON.stringify(items))
}
function cart(items){
  let coffee_count=document.querySelector("#coffee_count")
  coffee_count=innerText=items.length
}

cart(items)


