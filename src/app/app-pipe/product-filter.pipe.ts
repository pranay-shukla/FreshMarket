import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: any, searchTerms: any){

    console.log(searchTerms.fruit);
    return value.filter( function(obj: any ){
      let flagPrice = -1;
      let flagType = -1;
      let flagBrand = -1;
      if(searchTerms[obj.type] === true )
         flagType = 1;
         else
         return false;
      for(let i = 50; i<=200;i+=50)
      {
        if(searchTerms.price[i] === true)
        {
          if(obj.price <= 50)
           flagPrice = 1;
           else
           return false;
        }
      }

      Object.keys(searchTerms.brand).forEach(key =>{
        if(searchTerms.brand[key] === true)
        {
          if(obj.brand === key)
           flagBrand = 1;
           else
           flagBrand = 0;
        }
             
      });
      
      if(flagBrand === 0)
      return false;
      return true;
      
     
      })

   
  }

}
