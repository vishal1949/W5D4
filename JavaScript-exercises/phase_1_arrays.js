Array.prototype.unique = function() {
  const result = [];
  for(let i = 0; i < this.length; i++){
    el = this[i]
    if (result.indexOf(el) === -1) {
      result.push(el)
    }
  }
  return result 
}

Array.prototype.twoSum = function(){
  const result = [];

  for (let i = 0; i < this[0].length - 1; i ++) {
    let j = i + 1;
    let subArray = [];
    if (this[i] + this[j] === 0) {
      subArray.push(i, j);
      result.push(subArray);
    } 
  }
  return result;
}

Array.prototype.transpose = function(){
  const result = new Array();
  for (let i = 0; i < this.length; i++){
    let j = 0;
    const subArray = new Array();
    while (j < this.length){ 
      subArray.push(this[j][i])
      j++;
    }
    result.push(subArray); 
  }
  return result;
}