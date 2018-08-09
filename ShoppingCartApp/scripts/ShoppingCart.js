function ShoppingCart(){
	this.shoppedItems=[];
	
	this.addToCart=function(shoppingItem){
		this.shoppedItems.push(shoppingItem)
	}
	
	this.getItemWiseQuantity=function(){
		
	}
	
	this.getActualTotal=function(){
		var total=0;
		for(i=0;i<this.shoppedItems.length;i++){
			var c_item=this.shoppedItems[i]
			total=total+c_item.quantity*c_item.item.actualPrice;
		}
		return total;
	}
	
	this.getOfferTotal=function(){
		var total=0;
		for(i=0;i<this.shoppedItems.length;i++){
			var c_item=this.shoppedItems[i]
			total=total+c_item.quantity*c_item.item.offerPrice;
		}
		return total;
	}
	
	this.getSavingsAmount=function(){
		return this.getActualTotal()-this.getOfferTotal();
	}
	
}