import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBar'
})
export class SearchBarPipe implements PipeTransform {

  transform(value: any,searchTerm: string): any {
   
    if(searchTerm.length === 0)
    {     
      return value;
    }
    
    return value.filter(function(search : any){
      return search.type.toLowerCase() === searchTerm.toLowerCase();
    });
  }

}
