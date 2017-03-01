import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { UpgradeModule } from '@angular/upgrade/static';
import { CoreModule } from './core/core.module';
// import { removeNgStyles, createNewHosts } from '@angularclass/hmr';
@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        UpgradeModule,
        CoreModule
    ],
    declarations: [

    ],
    providers: [
    ],
    bootstrap: []
})
export class AppModule {
    ngDoBootstrap() {
    }
}