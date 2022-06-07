function createNode(element) {
  return document.createElement(element);
}
function append(parent, el) {
  return parent.appendChild(el);
}

const highlight = "https://omm-test.azurewebsites.net/ton/promotion/data/highlight.json";

axios
  .get(highlight)
  .then((res) => {
    // console.log(res.data)
    const nodeDiv = document.querySelector("#swiper-wrapper-map")
    let highlight = res.data;
    return highlight.map((highlights) => {
      // create tag html
      let swiperSlide = createNode("div")
      let cardHighlight = createNode("a")
      let highlightImage = createNode("div")
      let highlightImageImg = createNode("img")
      let highlightContent = createNode("div")
      let contentTitle = createNode("h1")
      let contentDescription = createNode("p")
      let dateAndLink = createNode("ul")
      let dateAndLinkLiForLeft = createNode("li")
      let dateAndLinkLiForRight = createNode("li")
      let date = createNode("p")
      let link = createNode("a")

      // parent node
      append(nodeDiv, swiperSlide)
      append(swiperSlide, cardHighlight)
      append(cardHighlight, highlightImage)
      append(highlightImage,highlightImageImg)
      append(cardHighlight, highlightContent)
      append(highlightContent, contentTitle)
      append(highlightContent, contentDescription)
      append(cardHighlight, dateAndLink)
      append(dateAndLink, dateAndLinkLiForLeft)
      append(dateAndLink, dateAndLinkLiForRight)
      append(dateAndLinkLiForLeft, date)
      append(dateAndLinkLiForRight, link)

      // add class css
      swiperSlide.classList.add("swiper-slide")
      cardHighlight.classList.add("card-highlight")
      highlightImage.classList.add("highlight-image")
      highlightContent.classList.add("highlight-content")
      contentTitle.classList.add("content-title")
      contentDescription.classList.add("content-description")
      dateAndLink.classList.add("date-and-link")
      dateAndLinkLiForLeft.classList.add("for-left")
      dateAndLinkLiForRight.classList.add("for-right")
      date.classList.add("date")
      link.classList.add("link")

      // get data
      cardHighlight.href = `${highlights.link}`
      cardHighlight.target = "_blank";
      highlightImageImg.src = `${highlights.image}`
      highlightImageImg.alt = `${highlights.title}`
      contentTitle.innerHTML = `${highlights.title}`
      contentDescription.innerHTML = `${highlights.description}`
      date.innerHTML = `${highlights.date}`
      link.innerHTML = `รายละเอียด`
      link.href = `${highlights.link}`
      link.target = "_blank";
    });
  })
  .catch((error) => {
    console.error(error);
  });
