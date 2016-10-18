debugger;
const diamond = function(n){
	if (n%2===0){
		n=n+1;
	}
	const space = function(n){
	    let spc = "";
		for (let i = 0 ; i < ((n-1)/2) ; i ++ ) {
	        spc+=' ';
		}
		return spc;
	};

	const stars = function(n){
		let str = "*";
		for (let i = 1 ; i < n ; i ++ ) {
	        str+='*';
		}
		return str;
	};
	let row = (space(n)+stars(1));

	for(let i = 0;i<=((n-1)/2);i++){
		console.log(row);
		if (row.substr(0,1)===' '){

			row = row.substring(1)+"**";
	    }
	}   
	for(let i = 0;i<=(((n-1)/2)+1);i++){
         
	    if (row.substring(i,i+1)==="*"){
	    	if(row.substr(((((n-1)/2)-1)),1)===" "){
	    		return;
	    	}

	    	else if (row.substr(0,1)==="*"){

	        row = " "+row.substring(1,row.length-1);
	            console.log(row);
	        }
	        
	       else if(row.substr(0,1)===" "){

	       	row = " "+row.substring(0,row.length-2);
	       	console.log(row); 
	       } 
		}
    }
	    
};





diamond(7);