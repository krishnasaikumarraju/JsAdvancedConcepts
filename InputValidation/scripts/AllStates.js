function AllStates(){
	this.states=[];
	this.addState=function(state){
		this.states.push(state);
	}
	this.getStates=function(){
		return this.states;
	}
	this.getState=function(id){
		for(i=0;i<this.states.length;i++){
			if(this.states[i].id==id) {
				return this.states[i];
			}
		}
	}
}