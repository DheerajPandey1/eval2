// On clicking remove button the item should be removed from DOM as well as localstorage.
let items=JSON.parse(localStorage.getItem("coffee"))

function sum(data){
  let sum=0;
  for(let i=0; i<data.length; i++){
    sum=sum+data[i].price;
  }
document.getElementById("#total_amount").innerText=sum

}

function bucketitem(data){
  const box=document.getElementById("bucket")
  data.forEach((el , index )=> {


    const div=document.createElement("div")

    const img=document.createElement("img")
    img.src=el.image

    const name=document.createElement("p")
    name.innerText=el.name

    const price=document.createElement("p")
    price.innerText=el.price

    const btn=document.createElement("button")

    button.innerText="REMOVE"
    btn.addEventListener("click",function(){
      index.splice(index,1)
      localStorage.setItem("items",JSON.stringify(items))
      window.location.reload()
    })
  div.append(img,name,price,btn)
  box.append(div)
})
}
bucketitem(data)
sum(data)
