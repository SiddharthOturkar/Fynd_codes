//------------one---------------

// let text = 'Hello Students';
// let pattern = /students/i;
// let result = text.match(pattern)
// document.getElementById('demo').innerHTML=result;


//--------------Modifiers/Attributes-------------
//**********g*******/
// let text = "How is everyone and what is this"
// let pattern = /is/ig; //g = global ... prints all g
// let result = text.match(pattern)
// let result  = pattern.exec(text)
// let result  = pattern.test(text)
// console.log(result);
// document.getElementById('demo').innerHTML=result;

//********************m*********/ multiline
// let text = `Is this 
// all are there 
// is 
// is`
// let pattern = /^is/mg   
// let pattern = /is$/mg 
// let result = text.match(pattern)
// let result = pattern.multiline
// console.log(result)
// document.getElementById('demo').innerHTML=result

//------------Groups------------
// **********[abc]***********

// let text = "Is this but all there is?";
// // let pattern =/[is]/gi
// let pattern =/[a-h]/gi
// let result = text.match(pattern)
// document.getElementById('demo').innerHTML=result

// let text = "TIME IS ssdkjsdfds MONEY";
// // let pattern =/[is]/gi
// let pattern =/[A-Ma-r]/gi
// let result = text.match(pattern)
// document.getElementById('demo').innerHTML=result

/**************[^abc]******* */
// let text = "Is this but all there is?";
// // let pattern =/[^is]/gi
// // let pattern =/[^h]/gi  //^ means negation, ignores the capital h
// let pattern =/[^i-s]/g
// let result = text.match(pattern)
// document.getElementById('demo').innerHTML=result


// /**************[0-9]******* */
// let text = "0123456789";
// // let pattern =/[5]/gi
// let pattern =/[^1-4]/gi
// // // let pattern =/[^h]/gi  //^ means negation, ignores the capital h
// // let pattern =/[^i-s]/g
// let result = text.match(pattern)
// document.getElementById('demo').innerHTML=result;

/**************[x|y]******* */
// let text = "re,green,red,red,green,green,ge,blue,yellow";
// // let pattern =/(red|green)/g;
// let pattern =/(red|green|yellow)/g;
// // // let pattern =/[^h]/gi  //^ means negation, ignores the capital h
// // let pattern =/[^i-s]/g
// let result = text.match(pattern)
// document.getElementById('demo').innerHTML=result;

//--------MetaCharacters--------
// let text = "Give your 100%"
// let pattern = /\w/g; //w = a-z,A-z,0-9
// let result = text.match(pattern)
// document.getElementById('demo').innerHTML=result;

// let text = "Give your 100%"
// // let pattern = /\W/g; //W = Capital W
// let pattern = /\D/g; //d=numers D=on digit characters
// let result = text.match(pattern) 
// document.getElementById('demo').innerHTML=result;


//--------Quantifiers--------
// let text = "Helloooooo wor ld he   llo coolege!"
// let pattern = /o+/g; //+ means atleast once count
// let result = text.match(pattern)
// document.getElementById('demo').innerHTML=result;


//=====================(*)=========
// let text = "Hello How are you at hoe he?"
// let pattern = /Ho*e/gi //* means zero or more times
// let result = text.match(pattern)
// document.getElementById('demo').innerHTML=result;

// let text = "1,100,1000"
// let pattern = /10*/g //* means zero or more times
// let result = text.match(pattern)
// document.getElementById('demo').innerHTML=result;

//=====================(?)==========
// let text = "1,100,1000,10000000"
// let pattern = /10?/g //* means zero or more times
// let result = text.match(pattern)
// document.getElementById('demo')

// var str = 'abcpp';
// var str1 = 'abcpppp';
// var str1 = 'abcpppppppppppppp';
// var pattern =/p{4}/g;
// let result = str.match(pattern);
// document.getElementById('demo').innerHTML=result;


let text = "100 1000 or 100000"
let pattern = /\d{3}/g
let result =text.match(pattern)
document.getElementById('demo').innerHTML=result