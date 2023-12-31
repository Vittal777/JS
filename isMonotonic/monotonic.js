function isMonotonic(arr){
    let increasing=false
    let decreasing=false
    for(var i=1;i<arr.length;i++){
        if(arr[i]>arr[i-1]){
            increasing=true
        }else if(arr[i]<arr[i-1]){
            decreasing=true
        }
        if(increasing&&decreasing){
            return false;
        }
    }
    return true;
}
const arr1=[6,7,9]
const arr2=[1,0,7,2]
const arr3=[3,2,1]
console.log('Is the arr1 monotonic? '+isMonotonic(arr1))
console.log('Is the arr2 monotonic? '+isMonotonic(arr2))
console.log('Is the arr3 monotonic? '+isMonotonic(arr3))