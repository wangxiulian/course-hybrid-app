// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class CommonService {

//   constructor() { }
// }



import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() {
    let a;
    console.log(a);
   }
  set(key,value){
    localStorage.setItem(key,value);
  }
  get(key){
    localStorage.getItem(key);
  }
}

