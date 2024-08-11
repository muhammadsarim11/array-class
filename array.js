 let arr = [3,55,44,66,333,33333,55534434];

 let max = arr[0];
 let small = arr[0];

 for(var i = 0; i<arr.length; i++){
    if(max<arr[i]){
        max = arr[i]
    }

    if(small>arr[i]){
        small = arr[i]
    }

}
console.log(max)
console.log(small)