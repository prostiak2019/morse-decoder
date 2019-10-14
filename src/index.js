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

/**
 * Decodes encoded data.
 *
 * @param {string} expr - encoded string
 * @return {string} signsDecode - decoded string
 */

function decode(expr) {


  // get all the codes of morse object
  const morsePoint = Object.keys(MORSE_TABLE);

  // get all the values of morse object
  const morseSignFull = Object.values(MORSE_TABLE);

  let i = 0;
  let morseBulean = [];

   // loop all the morse codes to convert '.' to '10' and '-' to '11'
  for (var key in MORSE_TABLE) {

    morseBulean[i] = '';

    for (let j = 0; j < morsePoint[i].length ; j++) { 

      if (morsePoint[i].slice(j, j + 1) === '.') {
        morseBulean[i] = morseBulean[i] + '10';
        } else { morseBulean[i] = morseBulean[i] + '11';
      }
    }

    i++;
  }
  
  let zero ='0';

  // loop to add '0' to the beginning of an element if the number of signs < 10
  let morseBuleanFull = morseBulean.map(function(sign) {
    while (sign.length !=10) {
      sign = zero + sign;
    }

    return sign;
  });
    
  // add the element '**********' to the end of the array, which matches the value ' '
  morseBuleanFull.push('**********');

  // add the element ' ' to the end of the array, which matches the value '**********'
  morseSignFull.push(' ');

  // break the input variable into 10 signs 

  let slicedExpr = expr.match(/.{1,10}/g);
 
  let signsDecode = '';

  // decoding cycle from zeros and ones to alphabet and numbers
  for (let i = 0; i < slicedExpr.length; i++) {
    for (let j = 0; j < morseBuleanFull.length; j++) {
      let valueSlicedExpr = slicedExpr[i];
      let valueMorseBuleanFull = morseBuleanFull[j];
      if (valueSlicedExpr == valueMorseBuleanFull) {
        signsDecode = signsDecode + morseSignFull[j];
      }        
    }      
  }

  return signsDecode;
}

module.exports = {
    decode
}