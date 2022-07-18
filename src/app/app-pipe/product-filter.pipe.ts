import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: any, searchTerms: any){

    console.log(searchTerms);
    // searchTerms.forEach((el: any) => {
    //   console.log(el);
    // });
    if(searchTerms.length === 0)
      return value;
    
    // console.log(searchTerms);
    return value.filter(function(search : any){
          let flag = false;
          for(let i = 0;i<searchTerms.length;i++)
          {
            if((Number(searchTerms[i][0])>=0 && Number(searchTerms[i][0]) <=9 )
            && (search.price <= Number(searchTerms[i])))
              {
                flag = true;
                continue;
              }
            if(searchTerms[i][0] === '$') 
              {
                if(search.brand === searchTerms[i].substring(1).toLowerCase())
                    flag = true;
                else{
                    flag = false;                
                    }
                continue;
              }
              
              if( search.type.toLowerCase() === searchTerms[i].toLowerCase() )
                flag= true;
              else
                flag = false;            
          }
          return flag;
          });
  }

}
