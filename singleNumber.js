var singleNumber = function(nums) {
    if(nums.length == 1){
        return nums[0];
    }
    var hash = {};
    console.log(hash);
    for(var i=0; i < nums.length; i++){
      if(!hash[nums[i]]){
        hash[nums[i]] = 1; 
      }else{
        hash[nums[i]] += 1;
      }
    }
    for(var key in hash){
        if(hash[key] == 1){
            console.log(key);
            return parseInt(key);
        }
    }
};