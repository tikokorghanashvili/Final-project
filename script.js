function getuser(page) {
    let request = new XMLHttpRequest();
    request.addEventListener('load', render);
    request.addEventListener('error', errorender);


    request.open('GET', 'https://reqres.in/api/users?page=' + page);
    request.send();

}
let currentPage = 1;
let totalPagesApi;

function render() {
    let response = this.responseText;
    let responsedata = JSON.parse(response);

    var fragment = document.createDocumentFragment();

    responsedata.data.forEach(item => {
        let image = document.createElement('img');
        image.src = item.avatar;
        image.classList.add('class', 'image-block');

        let li = document.createElement('li');

        let pemail = document.createElement('p');
        pemail.textContent = item.email;
        pemail.classList.add('class', 'p-email');

        li.classList.add('class', 'list');

        li.appendChild(image);
        li.appendChild(pemail);

        fragment.appendChild(li);

    })
    document.getElementById('ul-list').innerHTML = ' ';
    document.getElementById('ul-list').appendChild(fragment);
    totalPagesApi = responsedata.total_pages;


}
function errorender() {
    let error = document.createElement('p');
    error.textContent = 'Server error';

    document.getElementById('main-section').appendChild(error);

}



document.getElementById('previous').addEventListener('click', function () {
    if (currentPage == 1) {
        return;
    }

    currentPage -= 1;
    getuser(currentPage);

})

document.getElementById('next').addEventListener('click', function () {
    if (currentPage == totalPagesApi) {
        return;
    }
    currentPage += 1;
    getuser(currentPage);
})

getuser(currentPage);

// სლაიდერი
let data = [
    {
      id : 1,
      imageurl : 'https://img.marketer.ge/2020/03/0-2.jpeg',
      url : "https://www.adjarabet.com/en",
      title : "adjarabet"
  
    },
    {
      id : 2,
      imageurl : 'https://casinohub.ge/wp-content/uploads/2021/05/AAEAAQAAAAAAAAAAAAAAJDRjOGM2NjcwLWZlZjEtNGY3Zi04MjE3LTQxNGY5ZGQ0NzIxOQ.jpg',
      url : "https://www.betlive.com/ka/home",
      title : "betlive"
    }
  ];
  
  
  let leftbotton =document.getElementById("arow-left");
  let rightboton = document.getElementById("arow-right");
  let slidercontent = document.getElementById("slider-content");
  let dotlist = document.getElementsByClassName("dot");
  
  let sliderelement = 0;
  
  function createatag(x){
    let atag = document.createElement("a");
    atag.setAttribute("href", x.url);
    atag.classList.add("slider");
    return atag;
  }
  
  function createimg (x){
  slidercontent.style.backgroundImage = 'url('+ x.imageurl +')';
  slidercontent.classList.add('image-slider');

  }
  
  function createdots (item){
  let dots = document.createElement("div");
  dots.classList.add("dots");
  data.forEach( (elements) =>{
    let dot =document.createElement("div");
    dot.classList.add("dot");
    dot.setAttribute("data-id", elements.id - 1 );
  
  
    dot.onclick = function(event){
      let id = event.target.getAttribute("data-id");
      sliderelement=id;
      setslide();
    }
    dots.appendChild(dot);
  
  })
  return(dots);
  }
  
  function setslide () {
  slidercontent.innerHTML = " ";
  let xatag = createatag (data[sliderelement]);
  let ximgtag = createimg(data[sliderelement]);
  let dots=createdots();
  
  slidercontent.appendChild(xatag);
  slidercontent.appendChild(dots);
  
  dotsslide();
  console.log(setslide);
  
  }
  
  
  function dotsslide (){
  dotlist[sliderelement].classList.add("active");
  }
  
  function leftclick (){
  if(sliderelement <= 0){
    sliderelement = data.length - 1;
    setslide();
    return;
  }
  sliderelement--;
  setslide();
  }
  function rightclick(){
  if(sliderelement >= data.length - 1){
    sliderelement = 0;
    setslide();
    return;
  }
  sliderelement++;
  setslide();
  
  }
  
  leftbotton.addEventListener("click", leftclick);
  
  rightboton.addEventListener("click", rightclick);
  
  setInterval(() => {
    rightclick();
  }, 3000);
  
  setslide();