function Abbreviation(str) {
  const bl = 'QWERTYUIOPASDFGHJKLZXCVBNM';
  const ll = 'qwertyuiopasdfghjklzxcvbnm';
  let flag;
  let result = ''
  for (i = 0; i < str.lenght; i++){
    if (i == 0 || flag){
      result += bl[ll.indexOf(str[i])]
      flag = false
    }

    else if (str[i] == ' ' || str[i] == '-'){
      flag = true
    }
  }
  console.log (result)
}

Abbreviation ("cascading style sheets")