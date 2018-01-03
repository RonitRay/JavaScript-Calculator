$(document).ready(function(){
	
	var inputs=[""];
	var str;

	var op1=["+","-","/","*"];
	var op2=["."];

	var nums=[0,1,2,3,4,5,6,7,8,9];

	function getVal(input){
		if(op2.includes(inputs[inputs.length-1])===true && input==="."){
    console.log("Duplicate '.'");
  }
      //Validation so it doesn't start with an operator
    else if(inputs.length===1 && op1.includes(input)===false){
      inputs.push(input);
    }
    //If last character was not an operator add operator to the array
  else if(op1.includes(inputs[inputs.length-1])===false){
    inputs.push(input);
  }
    else if(nums.includes(Number(input))){
      inputs.push(input);
    }
    update();
	}

	function update() {
		str=inputs.join("");
		$("#steps").html(str);
	}

	function getTotal() {
		str= inputs.join("");
		$("#steps").html(eval(str));
	}

	$("a").on("click", function(){
		if(this.id==="AC"){
			inputs=[""];
			update();
		}
		else if(this.id==="CE"){
			inputs.pop();
			update();
		}
		else if(this.id==="="){
			getTotal();
		}
		else{
			if(inputs[inputs.length-1].indexOf("+","-","/","*",".")===-1){
				getVal(this.id);
			}
			else{
				getVal(this.id);
			}
		}
	})

})