const {randomBytes} = require('crypto');

const utilFunc = {
 
   
  generateRandomBytes:  ( length = 20  )=>{

    return  randomBytes(length/2).toString("hex");
 
  },
  sleep  : (milliseconds) =>  {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }
    
};

export default  utilFunc