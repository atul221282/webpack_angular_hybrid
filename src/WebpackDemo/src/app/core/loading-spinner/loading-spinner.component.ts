import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'loading-spinner',
    template: `<div class="k-loading-mask" style="width:100%;height:100%;" id="k_loading_home_index">
                   <span class="k-loading-text">
                        Loading...
                   </span>
                   <div class="k-loading-image">
                       <div class="k-loading-color"></div>
                   </div>
               </div>`
})

export class LoadingSpinnerComponent implements OnInit {
    ngOnInit() {
    }
}