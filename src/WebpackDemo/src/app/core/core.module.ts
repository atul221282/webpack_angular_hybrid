import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './corePage';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [
        CommonModule,
        HttpModule
    ],
    entryComponents: [LoadingSpinnerComponent],
    exports: [
        LoadingSpinnerComponent
    ],
    declarations: [
        LoadingSpinnerComponent
    ],
    providers: []
})

export class CoreModule {
}