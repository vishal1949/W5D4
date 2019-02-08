Array.prototype.myEach = function(callback){
  for(let i = 0; i< this.length; i++){
    callback(this[i]);
  }
}

// Array.prototype.myMap = function(callback){
//   let arr = [];
//   for(let i = 0; i < this.length; i++){
//     arr.push(callback(this[i]))
//   }
//   return arr;
// }

Array.prototype.myMap = function(callback){
  let arr = []
  this.myEach(function(x){
    arr.push(callback(x))    
  });
  return arr;
}


Array.prototype.myReduce = function(callback, element = null){
  let acc = this[0];
  let i = 1;
  if (element !== null){
    acc = element;
    i = 0;
  }
  for (i; i < this.length; i ++) {
   ele = this[i];

   acc = callback(acc, ele);
  }
  return acc;
}



Array.prototype.bubbleSort = function(){
  for(let i = 0; i < this.length; i++){
    for(let j = i+1; j<this.length; j++){
      if (this[i] > this[j]){
        let temp = this[j];
        this[j] = this[i];
        this[i] = temp;
      }
    }
  }
  return this
}

String.prototype.subStrings = function() {
  const result = []

  for (let i = 0; i < this.length; i ++) {
    for (let j = i + 1; j < this.length; j ++) {
      result.push(this.slice(i, j + 1))
    }
  }
  return result
}

function range(start, end) {
  if (start === end) {
    return [start]
  } 
  result = range(start, end - 1)
  result.push(end)
  return result
}


incrementOne = function() {
  var x = 0;
  (function() {
    x++;
    console.log(x);
  })();
}

