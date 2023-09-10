let nums=[5,9,8,1,2,3,4,0,3];
let lar=-Infinity;
let sec_lar=-Infinity;
for(var i=0;i<nums.length;i++){
if(nums[i]>lar){
sec_lar=lar;
lar=nums[i];

}else if(nums[i]>sec_lar && i!=lar){
sec_lar=nums[i];
}

}
console.log('Second Largest element in an array is '+sec_lar);
