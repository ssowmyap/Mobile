import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
class Mobile{
  mobId:number;
  mobName:string;
  mobPrice:string

constructor( mobId:number, mobName:string,mobPrice:string){
this.mobId=mobId;
this.mobName=mobName;
this.mobPrice=mobPrice
}
}
@Injectable({
  providedIn: 'root'
})
export class MobilesService {
pathUrl:string="../assets/mobile.json";
mobiles:Array<Mobile>=[];
  constructor(private httpClient:HttpClient) { }
  ngOnInit() {
  }
  
  getJson(){
    return this.pathUrl;
   }
  deletemobiles(mobId:number){
    this.mobiles.splice(mobId,1)
    console.log(this.mobiles)
  }
  sortId(mobId:number){
    this.mobiles.sort((a, b) => { 
      if (a.mobId < b.mobId){
        return -1;
      }else if (a.mobId > b.mobId){ 
         return 1;
       }else {
          return 0;
        }
       });
    console.log(this.mobiles)
  }
  sortName(mobName:string){
    this.mobiles.sort((a, b) => { 
      if (a.mobName < b.mobName){
       return -1;
      }else if (a.mobName > b.mobName){
       return 1; 
      }else {
       return 0; 
      }
    });
    console.log(this.mobiles)
  }
  sortPrice(mobPrice:number){
    this.mobiles.sort((a, b) => {
       if (a.mobPrice < b.mobPrice){
        return -1; 
       }else if (a.mobPrice > b.mobPrice) {
       return 1; 
       }else {
       return 0; 
       }
      });
    console.log(this.mobiles)
  }

}
