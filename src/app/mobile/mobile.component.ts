import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MobilesService } from '../mobiles.service';


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
@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
  url:string;
  mobiles:Array<Mobile>=[];
  constructor(private httpClient:HttpClient,private ms:MobilesService) { }

  ngOnInit() {
    this.httpClient.get<Mobile[]>(this.url=this.ms.getJson()).subscribe(
      (response)=>{
        console.log(response)
        this.mobiles=response
        console.log(this.mobiles)
      },
      (error)=>{
        console.log("not responding")
      }
    )
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
