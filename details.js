const getProduct=  async()=>{

    const param = new URLSearchParams(window.location.search);
    const id = param.get('id');

    const {data} = await axios.get(`https://dummyjson.com/products/${id}`);
    return data;
}
const displayProduct = async function(){
    const data = await getProduct();
    const images = data.images.map((img)=>{
        return `
        <img src='${img}' width='200px'/>`;
    }).join(" ");
    console.log(images);
    const result =
    `<h2>${data.title}</h2>
    <p>${data.description}</p>
    <h3>${Math.round(data.price)}$</h3>
    `;
    document.querySelector(".product").innerHTML=result;
    document.querySelector(".imgs").innerHTML=images;
    document.querySelector(".overlay").classList.add("d-none");
}

displayProduct();