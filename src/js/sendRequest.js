
"use strict" ;

const  sendRequest  = {

 
  post: (param, url , content_type, options={}) => {

    return new Promise((resolve, reject) => {
      
      let defaultOpitons ={
        isSetHeader : true , 
        defaultContentType: "application/x-www-form-urlencoded",
        ...options,
      };

      var xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = function () {
        if (this.readyState ===4  ) { 
          if(this.status >= 200 && this.status<300){ 
                        
            resolve( this.response);
          }
          else{ 
            reject( this.response);
          }

        }
      };
      xhttp.open("POST", url, true);
      if (defaultOpitons.isSetHeader) {
        xhttp.setRequestHeader("Content-type", content_type || defaultOpitons.defaultContentType );
      }
            
      // xhttp.withCredentials = true; // pass along cookies
      xhttp.send(param);
    }

    );
  }

  ,
 
  delete: (param, url , content_type, options={}) => {

    return new Promise((resolve, reject) => {
      
      let defaultOpitons ={
        isSetHeader : true , 
        defaultContentType: "application/x-www-form-urlencoded",
        ...options,
      };

      var xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = function () {
        if (this.readyState ===4  ) { 
          if(this.status >= 200 && this.status<300){ 
                        
            resolve( this.response);
          }
          else{ 
            reject( this.response);
          }

        }
      };
      xhttp.open("DELETE", url, true);
      if (defaultOpitons.isSetHeader) {
        xhttp.setRequestHeader("Content-type", content_type || defaultOpitons.defaultContentType );
      }
            
      // xhttp.withCredentials = true; // pass along cookies
      xhttp.send(param);
    }

    );
  }

  ,
  get: ( url) => {

    return new Promise((resolve, reject) => {
 
      var xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = function () {
        if (this.readyState ===4  ) {
          // console.log( this.status); 
          if(this.status >= 200 && this.status<300){ 
                    
            resolve( this.response);
          }
          else{ 
            reject( this.response);
          }

        }
      };
      xhttp.open("GET", url, true);
     
      // xhttp.withCredentials = true; // pass along cookies
       
      xhttp.send();
    }

    );
  }

};
export default  sendRequest ;  