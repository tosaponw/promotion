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
    return product.map((products) => {

      $(".card-product-load").slice(0, 6).show();
    
      // create tag html
      let column = createNode("div");
      let cardPromotion = createNode("a");
      let promotionImage = createNode("div");
      let promotionImageImg = createNode("img");
      let promotionContent = createNode("div");
      let contentTitle = createNode("h1");
      let link = createNode("a");

      // parent node
      append(nodeDiv, column);
      append(column, cardPromotion);
      append(cardPromotion, promotionImage);
      append(promotionImage, promotionImageImg);
      append(cardPromotion, promotionContent);
      append(promotionContent, contentTitle);
      append(cardPromotion, link);

      // add class css
      column.classList.add("column");
      column.classList.add("is-multiline");
      column.classList.add("is-4-desktop");
      column.classList.add("is-6-tablet");
      column.classList.add("is-12-mobile");
      column.classList.add("card-product-load");
      cardPromotion.classList.add("card-promotion");
      promotionImage.classList.add("promotion-image");
      promotionContent.classList.add("promotion-content");
      promotionContent.classList.add("for-article");
      contentTitle.classList.add("content-title");
      contentTitle.classList.add("for-news");
      link.classList.add("article-link");

      // get data
     
      let urlReview = "https://www.ais.th/";
      cardPromotion.href = `${products.url}`;
      cardPromotion.target = "_blank";
      promotionImageImg.src = `${urlReview + products.images}`;
      promotionImageImg.alt = `${products.title}`;
      contentTitle.innerHTML = `${products.title}`;
      link.innerHTML = `อ่านเพิ่มเติม`;
      link.href = `${products.url}`;
      link.target = "_blank";

     
      
    });
  })
  .catch((error) => {
    console.error(error);
  });
