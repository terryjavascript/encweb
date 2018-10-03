// image slideshow

var imageArray = ["assets/images/ss1.png","assets/images/ss2.png","assets/images/ss3.png","assets/images/ss4.png", "assets/images/ss5.png", "assets/images/airplane.jpg"];
//"assets/images/ss1.png","assets/images/ss2.png","assets/images/ss3.png","assets/images/ss4.png", "assets/images/ss5.png", "assets/images/ss0.png"//
var imageIndex = 0;	

function changeImage(){
	slide.setAttribute("src", imageArray [imageIndex]);
	imageIndex++;
	if (imageIndex>=imageArray.length) {
		imageIndex = 0;
	}
};

console.log(changeImage);

var intervalHandle = setInterval(changeImage,5000);