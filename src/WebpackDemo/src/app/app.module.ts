import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { ApiService } from './shared';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        CoreModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        ApiService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}