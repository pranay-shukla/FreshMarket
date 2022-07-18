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

  ngOnInit(): void {
    this._upDownSideService.fruitsVeggiesSidebar.subscribe(response=>
      {this.fruitsVeggiesSidebar = response});
    this._upDownSideService.brandSidebar.subscribe(response=>
      {this.brandSidebar = response});
    this._upDownSideService.priceSidebar.subscribe(response=>
      {this.priceSidebar = response});
  }
  ngOnDestroy(): void {
    this._upDownSideService.fruitsVeggiesSidebar.next(true)
    this._upDownSideService.brandSidebar.next(true)
    this._upDownSideService.priceSidebar.next(true)
  }
  
  OnClickSide(categoryType:string){
    if(categoryType === 'fruitsVeggies')
    {
      // let temp = this._upDownSideService.fruitsVeggiesSidebar;
      this._upDownSideService.fruitsVeggiesSidebar.next(!this.fruitsVeggiesSidebar)
    }
    else if(categoryType === 'brand')
    this._upDownSideService.brandSidebar.next(!this.brandSidebar)
    else
    this._upDownSideService.priceSidebar.next(!this.priceSidebar)

  }
  onChange(event:any){
    if(event.target.checked){
      this._productDataService.addFilterSideBarValue(event.target.value);      
    }
    else
    {
      this._productDataService.removeFilterSideBarValue(event.target.value);
    }
  }
}
