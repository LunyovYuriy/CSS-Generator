var menu = document.querySelector(".menu");

/////////SECTION VARIABLES/////////////
var borderStand = document.querySelector(".border-stand");
var borderRadiusStand = document.querySelector(".border-radius-stand");
var boxShadowStand = document.querySelector(".box-shadow-stand");
var textShadowStand = document.querySelector(".text-shadow-stand");
var outlineStand = document.querySelector(".outline-stand");
var transformStand = document.querySelector(".transform-stand");
var transitionStand = document.querySelector(".transition-stand");

var codeBlock = document.createElement("div");
codeBlock.className = "code-block";

borderStand.addEventListener("input", borderChanging)
borderStand.addEventListener("change", borderChanging)

function borderChanging() {
	var bWidth = document.getElementById("bWidth").value;
	var bColor = document.getElementById("bColor").value;
	var styleSelect = document.getElementById("bStyle");
	var styleOptions = styleSelect.options;
	var bStyle = String(styleOptions[styleSelect.selectedIndex].value);

	borderStand.style.borderWidth = bWidth + "px";
	borderStand.style.borderColor = String(bColor) ? String(bColor) : "black";
	borderStand.style.borderStyle = bStyle;

	borderStand.appendChild(codeBlock);
	codeBlock.innerHTML = "border: " + bWidth + "px " + bStyle + " " + borderStand.style.borderColor+";";
}

borderRadiusStand.addEventListener("input", borderRadiusChanging);
borderRadiusStand.addEventListener("change", borderRadiusChanging);

function borderRadiusChanging() {
	var topLeft = document.getElementById("topLeft").value,
		topRight = document.getElementById("topRight").value,
		bottomRight = document.getElementById("bottomRight").value,
		bottomLeft = document.getElementById("bottomLeft").value;


	if (topRight == 0 && bottomRight == 0 && bottomLeft == 0) {
		borderRadiusStand.style.borderRadius = topLeft+"px";
		codeBlock.innerHTML = "border-radius: " + topLeft+"px; <br>" +
						  "-webkit-border-radius: " + topLeft+"px;";
	}
	else {
		borderRadiusStand.style.borderRadius = topLeft+"px " +topRight+"px " + bottomRight+"px " + bottomLeft+"px ";
		codeBlock.innerHTML = "border-radius: " + topLeft+"px " +topRight+"px " + bottomRight+"px " + bottomLeft+"px "+"; <br>" +
						  "-webkit-border-radius: " + topLeft+"px " +topRight+"px " + bottomRight+"px " + bottomLeft+"px "+";";
	}
	borderRadiusStand.appendChild(codeBlock);	
}

boxShadowStand.addEventListener("input", boxShadowChanging);
boxShadowStand.addEventListener("change", boxShadowChanging);

function boxShadowChanging() {
	var insetSelect = document.getElementById("inset"),
		insetSelectOptions = insetSelect.options,
		inset = insetSelectOptions[insetSelect.selectedIndex].value;
	var boxHorLength = document.getElementById("box-hor-length").value,
		boxVertLength = document.getElementById("box-vert-length").value,
		blurRad = document.getElementById("box-blur-rad").value,
		spread = document.getElementById("spread").value;
	var colorTypeSelect = document.getElementById("color-type"),
		colorTypeSelectOpt = colorTypeSelect.options,
		colorType = colorTypeSelectOpt[colorTypeSelect.selectedIndex].value;

	var RGBADiv = document.getElementById("selectedRGBA");
	var HEXDiv = document.getElementById("selectedHEX");	

	boxShadowStand.appendChild(codeBlock);

	if (colorType === "RGBA") {
		HEXDiv.classList.add("hide");
		RGBADiv.classList.remove("hide");
		var r = document.getElementById("RGBA-r").value,
			g = document.getElementById("RGBA-g").value,
			b = document.getElementById("RGBA-b").value,
			a = document.getElementById("RGBA-a").value;

		if (inset === "inset") {
			boxShadowStand.style.boxShadow = "inset " + boxHorLength + "px " + boxVertLength + "px " + blurRad + "px " + spread + "px " + "rgba("+r+","+g+","+b+","+a+")";
			codeBlock.innerHTML = "-webkit-box-shadow: inset " + boxHorLength + "px " + boxVertLength + "px " + blurRad + "px " + spread + "px " + "rgba("+r+","+g+","+b+","+a+");<br>"
								  +"box-shadow: inset " + boxHorLength + "px " + boxVertLength + "px " + blurRad + "px " + spread + "px " + "rgba("+r+","+g+","+b+","+a+");";
		}
		else if (inset === "no") {
			boxShadowStand.style.boxShadow = boxHorLength + "px " + boxVertLength + "px " + blurRad + "px " + spread + "px " + "rgba("+r+","+g+","+b+","+a+")";
			codeBlock.innerHTML = "-webkit-box-shadow: " + boxHorLength + "px " + boxVertLength + "px " + blurRad + "px " + spread + "px " + "rgba("+r+","+g+","+b+","+a+");<br>"
								  +"box-shadow: " + boxHorLength + "px " + boxVertLength + "px " + blurRad + "px " + spread + "px " + "rgba("+r+","+g+","+b+","+a+");";
		}	
	}
	else if (colorType === "HEX") {
		RGBADiv.classList.add("hide");
		HEXDiv.classList.remove("hide");
		var HEXColor = document.getElementById("HEXColor").value;

		if (inset === "inset") {
			boxShadowStand.style.boxShadow = "inset " + boxHorLength + "px " + boxVertLength + "px " + blurRad + "px " + spread + "px " + HEXColor;
			codeBlock.innerHTML = "-webkit-box-shadow: inset " + boxHorLength + "px " + boxVertLength + "px " + blurRad + "px " + spread + "px " + HEXColor + ";<br>"
								  +"box-shadow: inset " + boxHorLength + "px " + boxVertLength + "px " + blurRad + "px " + spread + "px " + HEXColor + ";";
		}
		else if (inset === "no") {
			boxShadowStand.style.boxShadow = boxHorLength + "px " + boxVertLength + "px " + blurRad + "px " + spread + "px " + HEXColor;
			codeBlock.innerHTML = "-webkit-box-shadow: " + boxHorLength + "px " + boxVertLength + "px " + blurRad + "px " + spread + "px " + HEXColor + ";<br>"
								  +"box-shadow: " + boxHorLength + "px " + boxVertLength + "px " + blurRad + "px " + spread + "px " + HEXColor + ";";
		}	
	}
}	

textShadowStand.addEventListener("input", textShadowChanging);
textShadowStand.addEventListener("change", textShadowChanging);

function textShadowChanging() {
	var textHorHeight = document.getElementById("text-hor-length").value,
		textVertHeight = document.getElementById("text-vert-length").value,
		textBlurRad = document.getElementById("text-blur-rad").value,
		textShadowColor = document.getElementById("text-shadow-color");


	textShadowStand.style.textShadow = textHorHeight + "px " + textVertHeight + "px " + textBlurRad + "px " + textShadowColor.value;
	textShadowColor.style.backgroundColor = textShadowColor.value;

	codeBlock.innerHTML = "text-shadow: " +textHorHeight + "px " + textVertHeight + "px " + textBlurRad + "px " + (textShadowColor.value || "black") + ";";
	textShadowStand.appendChild(codeBlock);
}

outlineStand.addEventListener("input", outlineChanging);
outlineStand.addEventListener("change", outlineChanging);

function outlineChanging() {
	var outlineThickness = document.getElementById("outline-thickness").value,
		outlineColor = "#" + document.getElementById("outline-color").value,
		outlineOffset = document.getElementById("outline-offset").value;

	var outlineSelect = document.getElementById("outline-select"),
		outlineSelectOptions = outlineSelect.options,
		outlineType = outlineSelectOptions[outlineSelect.selectedIndex].value;

	outlineStand.style.outline = outlineThickness + "px " + outlineType + outlineColor;
	outlineStand.style.outlineOffset = outlineOffset + "px ";	

	codeBlock.innerHTML = "outline: " + outlineThickness + "px " + outlineType + " " + outlineColor + "; <br>";
	codeBlock.innerHTML += outlineOffset > 0 ? "outline-offset: " + outlineOffset + "px;" : " ";

	outlineStand.appendChild(codeBlock);
}


transformStand.addEventListener("input", transformation);
transformStand.addEventListener("change", transformation);

function transformation() {
	var transfScale = document.getElementById("transf-scale").value,
		transfRotate = document.getElementById("transf-rotate").value;
	
	var skewX = document.getElementById("skew-x").value,
		skewY = document.getElementById("skew-y").value;

	var transfExample = document.getElementById("transform-example");

	var transfRotateStyle = transfRotate > 0 ? "rotate("+transfRotate+"deg) " : " ",
		transfScaleStyle = transfScale > 0 ? "scale("+transfScale+") " : " ",
		skewXStyle = skewX > 0 ? "skewX("+skewX+"deg) " : " ",
		skewYStyle = skewY > 0 ? "skewY("+skewY+"deg) " : " ";

	transfExample.style.transform = transfScaleStyle + transfRotateStyle + skewXStyle + skewYStyle;
	
	codeBlock.innerHTML = "-moz-transform: " + transfScaleStyle + transfRotateStyle + skewXStyle + skewYStyle +"; <br>"
						 +"-webkit-transform: " + transfScaleStyle + transfRotateStyle + skewXStyle + skewYStyle +"; <br>"
						 +"-o-transform: " + transfScaleStyle + transfRotateStyle + skewXStyle + skewYStyle +"; <br>"
						 +"-ms-transform: " + transfScaleStyle + transfRotateStyle + skewXStyle + skewYStyle +"; <br>"
						 +"transform: " + transfScaleStyle + transfRotateStyle + skewXStyle + skewYStyle +"; <br>";
	transformStand.appendChild(codeBlock);
}

transitionStand.addEventListener("input", transitioning);
transitionStand.addEventListener("change", transitioning);

function transitioning() {
	var transitPropertySelect = document.getElementById("transition-property"),
		transitPropertyOptions = transitPropertySelect.options,
		transitProperty = transitPropertyOptions[transitPropertySelect.selectedIndex].value;

	var transitDuration = document.getElementById("transition-duration").value;
	
	var transitFunctionSelect = document.getElementById("transition-function"),
		transitFunctionOptions = transitFunctionSelect.options,
		transitFunction = transitFunctionOptions[transitFunctionSelect.selectedIndex].value;	

	var transitExample = document.getElementById("transition-example");

	transitExample.style.transition = transitProperty + " " +transitDuration + "s " + transitFunction;

	codeBlock.innerHTML = "-moz-transition: " + transitProperty + " " +transitDuration + "s " + transitFunction +"; <br>"
						 +"-webkit-transition: " + transitProperty + " " +transitDuration + "s " + transitFunction +"; <br>"
						 +"-o-transition: " + transitProperty + " " +transitDuration + "s " + transitFunction +"; <br>"
						 +"-ms-transition: " + transitProperty + " " +transitDuration + "s " + transitFunction +"; <br>"
						 +"transition: " + transitProperty + " " +transitDuration + "s " + transitFunction +"; <br>";
	transitionStand.appendChild(codeBlock);

}

menu.onclick = function(e) {
	e.preventDefault();

	function removeActiveClass() {
		var a = document.querySelectorAll("a");

		for (var i = 0; i < a.length; i++) {
			a[i].classList.remove("active");
		}
	}

	function hideAllSections() {
		var sections = document.querySelectorAll("section");

		for (var i = 0; i < sections.length; i++) {
			sections[i].classList.add("hide");
		}
	}

	switch (e.target.id) {
		case "bord":
			removeActiveClass();
			hideAllSections();
			e.target.classList.add("active");
			borderStand.classList.toggle("hide");
			break;

		case "bord-rad":
			removeActiveClass();
			hideAllSections();
			e.target.classList.add("active");
			borderRadiusStand.classList.remove("hide");
			break;

		case "box-shad":
			removeActiveClass();
			hideAllSections();
			e.target.classList.add("active");
			boxShadowStand.classList.toggle("hide");
			break;

		case "text-shad":
			removeActiveClass();
			hideAllSections();
			e.target.classList.add("active");
			textShadowStand.classList.toggle("hide");
			break;

		case "outline":
			removeActiveClass();
			hideAllSections();
			e.target.classList.add("active");
			outlineStand.classList.toggle("hide");
			break;

		case "transform":
			removeActiveClass();
			hideAllSections();
			e.target.classList.add("active");
			transformStand.classList.toggle("hide");
			break;
		case "transition":
			removeActiveClass();
			hideAllSections();
			e.target.classList.add("active");
			transitionStand.classList.toggle("hide");
			break;							
	}


}


