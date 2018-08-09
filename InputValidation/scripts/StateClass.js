function State(id, name) {
	this.id = id;
	this.name = name;
	this.cities=[];
	
	this.getId = function() {
		return this.id;
	}

	this.getName = function() {
		return this.name;
	}
	
	this.addCity = function(cityName){
		this.cities.push(cityName);
	}
	
	this.getCities = function(){
		return this.cities;
	}
}