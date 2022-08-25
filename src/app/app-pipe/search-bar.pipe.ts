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
      return (search.type.toLowerCase() === searchTerm.trim().toLowerCase()) ||   searchTitle(search, searchTerm.trim().toLowerCase());
    });
  }

}


function searchTitle(search:any , searchTerm : string): boolean {
  if(searchTerm == search.title.toLowerCase())
  return true;
  else {
    let spaces = 0;
    for(let i = 0;i<searchTerm.length;i++){
      if(searchTerm[i] === " ")
        spaces++;
    }
 
    if(spaces != 0)
    {
      for(let i =0;i < spaces;i++)
    {
      let word = searchTerm.split(' ')[i];
      if(search.title.toLowerCase().indexOf(word)!= -1)
      return true;
    }
    }
    else
    {
      if(search.title.toLowerCase().indexOf(searchTerm)!= -1)
      return true;

    }
  }
  return false;
}

