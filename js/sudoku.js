	function initSudoku() {
		var matrix = new Array();
		for(var rowCounter=0;rowCounter<9;rowCounter++){
			matrix[rowCounter] = new Array();
			for(var colCounter=0;colCounter<9;colCounter++){
				var number = colCounter/1 + 1 + (rowCounter*3) + Math.floor(rowCounter/3)%3;
				if(number>9) number = number % 9;
				if(number==0) number=9;
				matrix[rowCounter][colCounter] = number;				
			}			
		}
		
		// Switching rows
		for(var no=0;no<9;no+=3){
			for(var no2=0;no2<3;no2++){
				row1 = Math.floor(Math.random()*3);	
				row2 = Math.floor(Math.random()*3);	
				while(row2==row1){
					row2 = Math.floor(Math.random()*3);	
				}
				row1 = row1 + no;
				row2 = row2 + no;			
				var tmpMatrix = new Array();
				tmpMatrix = matrix[row1];
				matrix[row1] = matrix[row2];
				matrix[row2] = tmpMatrix; 				
			}			
		}
		
		// Switching columns
		for(var no=0;no<9;no+=3){
			for(var no2=0;no2<3;no2++){
				col1 = Math.floor(Math.random()*3);	
				col2 = Math.floor(Math.random()*3);	
				while(col2==col1){
					col2 = Math.floor(Math.random()*3);	
				}
				col1 = col1 + no;
				col2 = col2 + no;			
				var tmpMatrix = new Array();
				for(var no3=0;no3<matrix.length;no3++){
					tmpMatrixValue = matrix[no3][col1];
					matrix[no3][col1] = matrix[no3][col2];				
					matrix[no3][col2] = tmpMatrixValue;				
				}
			}	
		}

		for (var i=0;i<matrix.length;i++) {
			var str = "";
			for (var ii=0;ii<matrix.length;ii++) {
				str = str + matrix[i][ii] +",";
			}
			console.log(str);
		}
	}
	
	

	
	window.onload = initSudoku;