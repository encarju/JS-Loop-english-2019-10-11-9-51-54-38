var output
for(var x=1;x<=9;x++){
	for(var y=1; y<=x; y++){
		if(y==1 && x==1){
			output = `${x}*${y}=${x*y} `
			console.log(output);
		}
		else if(y<x){
			output = output + `${x}*${y}=${x*y} `;
		}
		else{
			output = output + `${x}*${y}=${x*y} `;
			console.log(output);
		}
	}
	output = "";
	console.log("\n");
}