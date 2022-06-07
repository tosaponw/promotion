function createNode(element) {
  return document.createElement(element);
}
function append(parent, el) {
  return parent.appendChild(el);
}

const newsProducts = "https://www.ais.th/review/asset/data/data__products.json";

axios
  .get(newsProducts)
  .then((res) => {
    // console.log(res.data)
    const nodeDiv = document.querySelector("#map-products");
    let product = res.data;
    return product.filter(
        (products) => products.id > 60)
    
  })
  .catch((error) => {
    console.error(error);
  });


