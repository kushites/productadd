let arr=JSON.parse(localStorage.getItem("Productlist"))||[]

function Product(n,c,i,p,g,s){
this.name=n;
this.Category=c;
this.ImageUrl=i;
this.price=p;
this.Gender=g;
this.Sold=s;
}

document.querySelector("form").addEventListener("submit", storeProducts)
function storeProducts(e){
e.preventDefault();


let name=document.querySelector("#name").value;

let Category=document.querySelector("#category").value;

let ImageUrl=document.querySelector("#image").value;

let Price =document.querySelector("#price").value;

let Gender=document.querySelector("#gender").value;

let Sold=document.querySelector("#sold").value;

let p1= new Product(name,Category,ImageUrl,Price,Gender,Sold)
arr.push(p1);
localStorage.setItem("Productslist",JSON.stringify(arr))
}