



/*2. Given an array of nested arrays. Write a recursive function
that flattens it. (Hint create function that concats arrays).*/

 function nestedArrayToArray(arr=[]){

     let arrNew=[];
	arr.forEach(function(arr){
		if(Array.isArray(arr)){
		arrNew=arrNew.concat(nestedArrayToArray(arr));
		}
		else{
		arrNew.push(arr);
		}

	})     
    	return arrNew;
}
console.log(nestedArrayToArray([1, [3, 4, [1, 2]], 10]));
console.log(nestedArrayToArray([14, [1, [[[3, [5]]], 1], 0]]));



/* 3. Given a number. Write a function that calculates its sum of
the digits and if that sum has more than 1 digit find the sum of
digits of that number. Repeat that process if needed and return
the result.*/

 function sumDigitsNumber(num, sum=0){

		while( num>0 ){

			if (Math.floor(num/10)==0){
			sum=num;
			return sum;
			}
			else{
			sum+=num%10+sumDigitsNumber(Math.floor(num/10
))
				if (sum<=9){
				return sum;
				}
				else{
				return sumDigitsNumber(sum, sum1=0);
				}
			}

		} 
   }
console.log(sumDigitsNumber(14));
console.log(sumDigitsNumber(29));
console.log(sumDigitsNumber(999999999999));


/* 4. Given an object. Invert it (keys become values and values
become keys). If there is more than key for that given value
create an array.*/

 function objectKeyToValue(obj){
     let obj1 = {};
		for(key in obj){
                obj1[obj[key]] = key;
        }
     return obj1;
}
	
console.log(objectKeyToValue({ a: '1', b: '2' }));
console.log(objectKeyToValue({ a: '1', b: '2', c: '2' }));
console.log(objectKeyToValue({ a: '1', b: '2', c: '2', d: '2' }));

 







