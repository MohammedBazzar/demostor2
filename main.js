
const getProduct = async () => {
    try {
        const { data } = await axios.get('https://dummyjson.com/products');
        return data;
    }
    catch (error) {
        console.log(error.message);
    }
    finally {
        document.querySelector(".overlay").classList.add("d-none");
    }
}



const displayProducts = async () => {
    const data = await getProduct();
    const products = data.products
    const result = data.products.map(function (p) {
        return `
    <div class="product">
    <h2>${p.title}</h2>
    <img src="${p.thumbnail}" />
    <h3>${Math.round(p.price)}$</h3></a>
    <button onclick='deleteProduct(${p.id})'>Delete</button>
    </div>`
    }).join(" ");
    document.querySelector(".products").innerHTML = result;
}
const modal = document.querySelector(".modalx");
const closebtn = document.querySelector(".close-btn");
const leftebtn = document.querySelector(".left-btn");
const rightbtn = document.querySelector(".right-btn");
const allimages = document.querySelectorAll(".img");

for(let i=0;i<allimages.length;i++){
    allimages[i].addEventListener("click",(e)=>{
        console.log(e.target.src);
        modal.classList.remove('.d-none');
    })
    
}

const deleteProduct= async (id)=>{
    try{
        const {data} = await axios.delete(`https://dummyjson.com/products/${id}`);
        alert("THE Product Has been deleted successfully");
    }
    
    catch(E){
        return
        `<h1>This item connet be deleted !</h1>`
    }
}

displayProducts();