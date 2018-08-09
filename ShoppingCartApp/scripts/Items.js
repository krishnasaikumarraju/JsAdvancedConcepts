var auto_gen_number=0;

function Item(a,b,c,d){
	this.id=++auto_gen_number;
	this.name=a;
	this.actualPrice=b;
	this.offerPrice=c;
	this.imageFile=d;
	
	this.getSavingAmount=function(){
		return this.actualPrice-this.offerPrice;
	}
}

var i1=new Item("Woodland Scenics Black Faux Leather Formal Belt",1850 ,372 ,"images/men accesories/1075-00-757520_main_480x480.jpg");
var i2=new Item("Laurels Wallet and Belt Combo...",1999 ,599 ,"images/men accesories/1133-00-558820_main_1c7d8cc1-8ec0-4860-823c-1be40a39cc9c_480x480.jpg");
var i3=new Item("ADIDAS Men Ankle Length Socks",3800 ,834 ,"images/men accesories/11466848387270-WildHorn-Men-Accessory-Gift-Set-5101466848387165-1_mini.jpg");
var i4=new Item("URBANE BROWN COLORED MICROFIBER NECKTIE FOR MEN", 2099, 998,"images/men accesories/3xs-adi1000245-adidas-original-imaepfqfjhyngcbu.jpeg");
var i5=new Item("WINNING SURPRISE BOX FOR MEN",5399 ,2699,"images/men accesories/81GoxQrbYuL._AC_SY230_.jpg");

var i6=new Item("Men's Punk & Gothic Street chic Leather Jacket - Solid Colored",2058 ,1852 ,"images/mens clothing/blvcux1508378886490.jpg");
var i7=new Item("Men's Cotton Jacket - Solid Colored Stand",2484,2236,"images/mens clothing/cmwtyy1516938494800.jpg");
var i8=new Item("Men's Street chic Long Fur Coat - Solid Colored",1484 ,936 ,"images/mens clothing/ddppmh1516270303574.jpg");
var i9=new Item("Men's Plus Size Leather Jacket - Solid Colored Hooded",1243 ,867 ,"images/mens clothing/desdnn1509521110917.jpg");
var i10=new Item("Men's Jackets Cotton Jacket - Other",1234 ,899 ,"images/mens clothing/dzuojo1479432212997.jpg");

var i11=new Item("Utsa by Westside Lime A-line Kurta",1099 ,900 ,"images/women accesories/2018-Women-Handmade-Round-Beach-Shoulder-Bag.jpg_350x350.jpg");
var i12=new Item("Vark by Westside Peach Paisley Design Ethnic Set",2799 ,1500 ,"images/women accesories/Fabtone-Multi-Stoles-SDL017835897-1-ecf94.jpg");
var i13=new Item("Ziyaa Black Printed Crepe Kurta With Palazzo",2791 ,1256 ,"images/women accesories/Fabtone-Multi-Stoles-SDL398658728-2-39e8d.jpg");
var i14=new Item("Juniper Grey Rayon Kurta With Pants", 3048,1524,"images/women accesories/Gatasmay-Multi-PU-Combo-Belts-SDL386095355-1-ac76c.jpg");
var i15=new Item("Aujjessa Mustard Rayon Kurta",1599 , 799,"images/women accesories/Indulekha-GoldenRod-Casual-Combo-SDL009979205-1-e33e6.jpg");


var i16=new Item("Gatasmay Multi PU Combo Belts", 999, 254,"images/women accessories/2018-Women-Handmade-Round-Beach-Shoulder-Bag.jpg_350x350.jpg");
var i17=new Item("Sanjog White Party Comb Clip", 400, 279,"images/women accessories/Fabtone-Multi-Stoles-SDL017835897-1-ecf94.JPG");
var i18=new Item("Indulekha GoldenRod Casual Combo", 1728, 1399,"images/women accessories/Fabtone-Multi-Stoles-SDL398658728-2-39e8d.JPG");
var i19=new Item("Fabtone Multi Stoles", 450, 289,"images/women accessories/Gatasmay-Multi-PU-Combo-Belts-SDL386095355-1-ac76c.jpeg");
var i20=new Item("Fabtone Multi Stoles", 599, 299,"images/women accessories/Indulekha-GoldenRod-Casual-Combo-SDL009979205-1-e33e6.jpeg");

