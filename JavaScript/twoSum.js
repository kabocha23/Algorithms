var twoSum = function(nums, target) {
    newarr = [];
    for(var i=0; i < nums.length; i++){
        for(var j=i+1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                newarr.push(i);
                newarr.push(j);
                return newarr;
            }   
        }
    }
    return false;
};