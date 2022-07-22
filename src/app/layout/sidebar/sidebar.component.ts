import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsDataService } from 'src/app/services/products-data.service';
import { UpDownSideService } from 'src/app/services/up-down-side.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit,OnDestroy {

    
  
  fruitsVeggiesSidebar = true;
  brandSidebar = true;
  priceSidebar = true;
  constructor(private _upDownSideService:UpDownSideService,
              private _productDataService:ProductsDataService
    ) { }

// object array for side bar structure
    sideBar = [
      {
        'category' : "Fruits & Veggies",
        'sub': [
          {
            'category' : 'Fruits',
            'type':true,
            'value': 'fruit'
  
          },
          {
            'category' : 'Veggies',
            'type': true,
            'value':'vegetable'
          }         
        ],
        'var' : true,
        'input': false,
        'varType' : 'fruitsVeggies'      
      },
      {
        'category' : "Bakery",
        'value':'bakery',
        'type': true,
        'input': true,
            
      },
      {
        'category' : "Vegan",
        'value':'vegan',
        'type': true,
        'input': true,    
      },
      {
        'category' : "Meat",
        'value':'meat',
        'type': true,
        'input': true,    
      },
      {
        'category' : "Dairy Products",
        'value':'dairy',
        'type': true,
        'input': true,    
      },
      {
      'category' : "Brand",
      'sub' : [
        {
          'category' : 'Amul',
          'type':false,
          'value': '$amul'
  
        },
        {
          'category' : 'Goldy',
          'type':false,
          'value':'$goldy'
        }
       
      ],
      'var' : true,
      'varType' : 'brand',
      'input': false,      
    },
    {
      'category' : "Price",
      'sub' : [
        {
          'category' : 'Less Than 50',
          'type':false,
          'value' : '50'
  
        },
        {
          'category' : 'Less than 100',
          'type':false,
          'value' : '100'
        },
        {
          'category' : 'Less than 150',
          'type':false,
          'value': '150'
        },
        {
          'category' : 'Less than 200',
          'type':false,
          'value': '200'
        }
       
      ],

      'var' : true,
      'varType' : 'price',
      'input': false,      
    },
    ]
    
    
    
  
  ngOnInit(): void {
    this._upDownSideService.fruitsVeggiesSidebar.subscribe(response=>
      {this.sideBar[0].var = response});
    this._upDownSideService.brandSidebar.subscribe(response=>
      {this.sideBar[5].var = response});
    this._upDownSideService.priceSidebar.subscribe(response=>
      {this.sideBar[6].var = response});
     
    
      
  }
  ngOnDestroy(): void {
    this._upDownSideService.fruitsVeggiesSidebar.next(true)
    this._upDownSideService.brandSidebar.next(true)
    this._upDownSideService.priceSidebar.next(true)
   
  }
  
  OnClickSide(categoryType:any){
    
    if(categoryType === 'fruitsVeggies')
    {
      this._upDownSideService.fruitsVeggiesSidebar.next(!this.sideBar[0].var)
    }
    else if(categoryType === 'brand')
    this._upDownSideService.brandSidebar.next(!this.sideBar[5].var)
    else
    this._upDownSideService.priceSidebar.next(!this.sideBar[6].var)

  }

  onChange(){
    const sidebarValue ={
      "fruit" : this.sideBar[0].sub![0].type,
      "vegetable" : this.sideBar[0].sub![1].type,
      "bakery" : this.sideBar[1].type,
      "vegan" : this.sideBar[2].type,
      "meat" : this.sideBar[3].type,
      "dairy" : this.sideBar[4].type,
      "brand" : {
        "amul" : this.sideBar[5].sub![0].type,
        "goldy": this.sideBar[5].sub![1].type
      },
      'price':{
        "50" : this.sideBar[6].sub![0].type,
      "100" : this.sideBar[6].sub![1].type,
      "150" : this.sideBar[6].sub![2].type,
      "200" : this.sideBar[6].sub![3].type
      }
      
    }
    
    this._productDataService.filteredValue(sidebarValue);
   
  }
}
