function Plant(name, color, price, stock, image) {
	this.name = name;
	this.color = color;
	this.price = price;
	this.stock = stock;
	this.image = image;
}

var plantArray = []

var aloe = new Plant('Aloe', 'Green', '35.00', 200, 'img/aloe.jpg')
var ficus = new Plant('Ficus', 'Green', '195.00', 25, 'img/ficus.jpg')
var limelight = new Plant('Limelight', 'Green', '52.00', 65, 'img/limelight.jpg')
var littlehope = new Plant('Little Hope', 'Green', '40.00', 35, 'img/littlehope.jpg')
var majestypalm = new Plant('Majesty Palm', 'Green', '150.00', 100, 'img/majestypalm.jpg')
var neonpothos = new Plant('Neonpothos', 'Light Green', '32.00', 120, 'img/neonpothos.jpg')
var palm = new Plant('Palm', 'Dark Green', '48.00', 165, 'img/palm.jpg')
var redprayer = new Plant('Red Prayer', 'Multicolored', '32.00', 23, 'img/redprayer.jpg')
var tabletoppine = new Plant('Tabletop Pine', 'Green', '78.00', 17, 'img/tabletoppine.jpg')

plantArray.push(aloe)
plantArray.push(ficus)
plantArray.push(limelight)
plantArray.push(littlehope)
plantArray.push(majestypalm)
plantArray.push(neonpothos)
plantArray.push(palm)
plantArray.push(redprayer)
plantArray.push(tabletoppine)

for (var i = 0; i < plantArray.length; i++) {
	var Name = document.createTextNode(plantArray[i].name)
	var Color = document.createTextNode("Color of Plant: " + plantArray[i].color)
	var Price = document.createTextNode("Price: $" + plantArray[i].price)
	var Stock = document.createTextNode("In Stock: " + plantArray[i].stock)
	var Button =  document.createTextNode("Click Here to Buy")
	var Image = plantArray[i].image

	var newCol = document.createElement("DIV")
	var newDiv = document.createElement("DIV")
	var nameH1 = document.createElement("H1")
	var colorH2	= document.createElement("H2")
	var priceH3 = document.createElement("H3")
	var stockH4 = document.createElement("H4")
	var clickhere = document.createElement("BUTTON")
	var image = document.createElement("IMG")

	nameH1.appendChild(Name)
	nameH1.className = "border border-success rounded"
	colorH2.appendChild(Color)
	priceH3.appendChild(Price)
	stockH4.appendChild(Stock)
	clickhere.appendChild(Button)
	clickhere.className = "btn btn-primary btn-lg"
	image.src = Image
	image.className = "img-responsive"

	newCol.className = "col-sm-4"
	newDiv.className = "plants plantName" + i + " thumbnail"
	newDiv.appendChild(nameH1)
	newDiv.appendChild(image)
	newDiv.appendChild(colorH2)
	newDiv.appendChild(priceH3)
	newDiv.appendChild(stockH4)
	newDiv.appendChild(clickhere)
	newCol.appendChild(newDiv)

	document.getElementById("plants").appendChild(newCol)

}