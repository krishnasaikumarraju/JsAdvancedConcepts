function Category(i,j){
	this.id=i;
	this.categoryName=j;
	this.items=[];
	
	this.addItem=function(item){
		this.items.push(item);
	}
	
	this.getCount=function(){
		return this.items.length;
	}
	
	this.findItem=function(id_p){
		for(i=0;i<this.items.length; i++){
			var cur_item=this.items[i];
			if(cur_item.id==id_p){
				return cur_item;
			}
		}
		return null;
	}
	
	
	
}

var category1=new Category(1," Men's Accessories")
var category2=new Category(2,"Men's Clothings")
var category3=new Category(3," Women's Clothings")
var category4=new Category(4,"Women's Accessories")

category1.addItem(i1);
category1.addItem(i2);
category1.addItem(i3);
category1.addItem(i4);
category1.addItem(i5);

category2.addItem(i6);
category2.addItem(i7);
category2.addItem(i8);
category2.addItem(i9);
category2.addItem(i10);

category3.addItem(i11);
category3.addItem(i12);
category3.addItem(i13);
category3.addItem(i14);
category3.addItem(i15);

category4.addItem(i16);
category4.addItem(i17);
category4.addItem(i18);
category4.addItem(i19);
category4.addItem(i20);

var categories=[category1,category2,category3,category4];


