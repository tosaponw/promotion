function createNode(element) {
    return document.createElement(element);
  }
  function append(parent, el) {
    return parent.appendChild(el);
  }
  
  const aisSeasonal = "https://omm-test.azurewebsites.net/ton/promotion/data/promotion.json";
  
  axios
    .get(aisSeasonal)
    .then((res) => {
      // console.log(res.data)
      const nodeDiv = document.querySelector("#map-ais-seasonal");
      let promotion = res.data;
      return promotion.map((promotions) => {
        
        // filter ais shop
        let typeName = promotions.type;
        if (typeName === "seasonal") {
          
          // create tag html
          let column = createNode("div");
          let cardPromotion = createNode("a");
          let promotionImage = createNode("div");
          let promotionImageImg = createNode("img");
          let promotionContent = createNode("div");
          let contentTitle = createNode("h1");
          let contentDescription = createNode("p");
          let dateAndLink = createNode("ul");
          let dateAndLinkLiForLeft = createNode("li");
          let dateAndLinkLiForRight = createNode("li");
          let date = createNode("p");
          let link = createNode("a");
  
          // parent node
          append(nodeDiv, column);
          append(column, cardPromotion);
          append(cardPromotion, promotionImage);
          append(promotionImage, promotionImageImg);
          append(cardPromotion, promotionContent);
          append(promotionContent, contentTitle);
          append(promotionContent, contentDescription);
          append(cardPromotion, dateAndLink);
          append(dateAndLink, dateAndLinkLiForLeft);
          append(dateAndLink, dateAndLinkLiForRight);
          append(dateAndLinkLiForLeft, date);
          append(dateAndLinkLiForRight, link);
  
          // add class css
          column.classList.add("column");
          column.classList.add("is-multiline");
          column.classList.add("is-4-desktop");
          column.classList.add("is-6-tablet");
          column.classList.add("is-12-mobile");
          cardPromotion.classList.add("card-promotion");
          promotionImage.classList.add("promotion-image");
          promotionContent.classList.add("promotion-content");
          contentTitle.classList.add("content-title");
          contentDescription.classList.add("content-description");
          dateAndLink.classList.add("date-and-link");
          dateAndLinkLiForLeft.classList.add("for-left");
          dateAndLinkLiForRight.classList.add("for-right");
          date.classList.add("date");
          link.classList.add("link");
  
          // get data
          cardPromotion.href = `${promotions.link}`;
          cardPromotion.target = "_blank";
          promotionImageImg.src = `${promotions.image}`;
          promotionImageImg.alt = `${promotions.title}`;
          contentTitle.innerHTML = `${promotions.title}`;
          contentDescription.innerHTML = `${promotions.description}`;
          date.innerHTML = `${promotions.date}`;
          link.innerHTML = `รายละเอียด`;
          link.href = `${promotions.link}`;
          link.target = "_blank";
        }
      });
    })
    .catch((error) => {
      console.error(error);
    });
  