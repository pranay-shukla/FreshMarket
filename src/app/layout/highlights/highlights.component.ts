import { Renderer2 ,Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.css']
})
export class HighlightsComponent implements OnInit {

  constructor(private _renderer2: Renderer2, 
    @Inject(DOCUMENT) private _document: Document) { 
    
  
  }

  ngOnInit(): void {
    let script = this._renderer2.createElement('script');
        script.type = `text/javascript`;
        script.text = `
        var counter = 1;
        setInterval(function(){
          
          
          
          document.getElementById('r'+counter).checked = true;
          
          counter++;
          if(counter > 3)
          counter =1;
        },5000)
        `;

        this._renderer2.appendChild(this._document.body, script);
  }
}
