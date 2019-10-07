const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};


function decode(expr) {

//   *** part I ***
  let morsePoint = Object.keys(MORSE_TABLE);
  var i = 0;
  let morseBulean = [];
  
  for (var key in MORSE_TABLE) {

    morseBulean [i] = '';

    for (let j = 0; j < morsePoint[i].length ; j++) { 

        if (morsePoint[i].slice(j, j + 1) === '.') {
            morseBulean[i] = morseBulean [i] + "10";
        } else {
            morseBulean[i] = morseBulean [i] + "11";
        }
    } 
    i++;
  }
  
  let zero ="0";

  let morseBuleanFull = morseBulean.map(function(sign) {
    while (sign.length !=10) {
        sign = zero +sign
      } 
    return sign;
  });
    
  morseBuleanFull.push("**********");

  let morseSignFull = Object.values(MORSE_TABLE);

  morseSignFull.push(" ");

//    ***part II***

  let slicedExpr = expr.match(/.{1,10}/g);
 
//    ***part III***

  let signsDecode = '';

  for (let i = 0; i < slicedExpr.length; i++) {
    for (let j = 0; j < morseBuleanFull.length; j++) {
        let valueSlicedExpr = slicedExpr[i];
        let valueMorseBuleanFull = morseBuleanFull[j];
        if (valueSlicedExpr == valueMorseBuleanFull) {
          signsDecode = signsDecode + morseSignFull[j];
        }        
    }      
  }

console.log ("signsDecode", signsDecode);

 return signsDecode;
}

 module.exports = {
    decode
}