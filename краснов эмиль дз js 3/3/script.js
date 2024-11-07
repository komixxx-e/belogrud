const bl = 'QWERTYUIOPASDFGHJKLZXCVBNM';
const ll = 'qwertyuiopasdfghjklzxcvbnm';
const num = '1234567890';

function changeText(str) {
    let result = '';
    
    for (let i = 0; i < str.length; i++) {


        if (ll.includes(str[i])) {
            result += bl[ll.indexOf(str[i])];
        } 
        
        else if (bl.includes(str[i])) {
            result += ll[bl.indexOf(str[i])];
        }
        
        else if (num.includes(str[i])) {
            result += '_';
        }
        
    }
    
    return result;
}

let result = changeText("FGHJK123abc");
console.log(result);