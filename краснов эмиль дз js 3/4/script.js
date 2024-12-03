//function toCamelCase(a) {
//  for (item of str)
//  }
//
//console.log(toCamelCase("font-size"));
//console.log(toCamelCase("background-color"));
//console.log(toCamelCase("text-align"));



function transform(str){
  const bl = 'QWERTYUIOPASDFGHJKLZXCVBNM';
  const ll = 'qwertyuiopasdfghjklzxcvbnm';
  let flag = false;
  let result = ''

  for (item of str){
    if (flag){
      result += bl[ll.indexOf(item)]
      flag = false
    }

    else{
      if (item == '-'){
        flag = true
      }
      else {
        result += item
      }
    }
  }
}

