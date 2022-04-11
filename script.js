let bodyContent = document.getElementById('mainContent');

let jsonDatabase = [
  //first one
  {
    "teaTitle" : "Green Tea",
    "color" : "#536355",
    "waterTemp" : "75 - 80 Celsius",
    "popularType" : "Longjing Tea",
    "Effect" : "Alleviate headchae, keep cardiac health, and lower cholestrol.",
    "picture_url" : "https://www.zhifure.com/upload/images/2018/7/24151646935.jpg"
  },
  //second one
  {
    "teaTitle" : "Black Tea",
    "color" : "#5c3024",
    "waterTemp" : "95 - 100 Celsius",
    "popularType" : "Dianhong",
    "Effect" : "Helps gastrointestinal digestion and stimulate appetite.",
    "picture_url" : "https://img.17motor.com/article/1903/26/img_20190326220508sbiq9o.jpg"
  },
  //third one
  {
    "teaTitle" : "White Tea",
    "color" : "#81a17f",
    "waterTemp" : "75 - 80 Celsius",
    "popularType" : "White Peony Tea",
    "Effect" : "Improve immunity and protect the cardiovascular system.",
    "picture_url" : "https://www.yadao8.com/uploads/20210928/16327864933769.jpg"
  },
  //Fourth one
  {
    "teaTitle" : "Oolong",
    "color" : "#380b00",
    "waterTemp" : "95 - 100 Celsius",
    "popularType" : "Big Red Robe Tea",
    "Effect" : "Prevent cancer, reduce blood fat, and eliminate fatigue.",
    "picture_url" : "https://pic3.zhimg.com/v2-6a0daed9860e21a338e968d9c4d2a52a_1440w.jpg?source=172ae18b"
  },
  //Fifth one
  {
    "teaTitle" : "Yellow Tea",
    "color" : "#544900",
    "waterTemp" : "85 - 90 Celsius",
    "popularType" : "Junshan Silver Needle Tea",
    "Effect" : "Helps to prevent cancer, sterilization, anti-inflammatory.",
    "picture_url" : "https://www.lvchashuo.com/uploads/allimg/210526/13_210526112641_1.jpg"
  },
  //Sixth one
  {
    "teaTitle" : "Dark Green Tea",
    "color" : "#1f1a12",
    "waterTemp" : "90 - 100 Celsius",
    "popularType" : "Bian Tea",
    "Effect" : "Helps to lower blood pressure, soften blood vessels, prevent and treat cardiovascular diseases",
    "picture_url" : "https://m.juyixuan.com/uploads/allimg/210729/4-210H914392C95.jpg"
  }
]

for (var i=0; i<jsonDatabase.length; i++){
  executePortfolio(jsonDatabase[i]);
}

function executePortfolio(dataValue) {
  let newbodyContent = document.createElement("DIV");
  newbodyContent.style.backgroundColor = dataValue('color');
  newbodyContent.classList.add('portfolioContainer');

  let newbodyContentTitle = document.createElement("H3");
  newbodyContentTitle.innerText = dataValue('teaTitle');
  newbodyContent.appendChild(newbodyContentTitle);

  let newbodyContentWater = document.createElement("H4");
  newbodyContentWater.innerText = "Best Water Temperature: " + dataValue('waterTemp');
  newbodyContent.appendChild(newbodyContentWater);

  let newbodyContentPopular = document.createElement("H4");
  newbodyContentPopular.innerText = "Popular Type: " + dataValue('popularType');
  newbodyContent.appendChild(newbodyContentPopular);

  let newbodyContentEffect = document.createElement("H4");
  newbodyContentEffect.innerText = "Effect: " + dataValue('Effect');
  newbodyContent.appendChild(newbodyContentEffect);

  let newImg = document.createElement("IMG");

  contentGridElement.appendChild(newContentElement);
}
