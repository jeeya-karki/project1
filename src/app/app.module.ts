import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { ChildComponent } from './child/child.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { Main1Component } from './main1/main1.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { Main2Component } from './main2/main2.component';
import { Header1Component } from './header1/header1.component';
import { ModelDrivenFormComponent } from './model-driven-form/model-driven-form.component';
import { StructureDirectiveNgifComponent } from './structure-directive1/structure-directive-ngif.component';
import { StructureDriven2Component } from './structure-directive2/structure-driven2.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ChildComponent,
    HeaderComponent,
    MainComponent,
    Main1Component,
    Main2Component,
    Header1Component,
    ModelDrivenFormComponent,
    StructureDirectiveNgifComponent,
    StructureDriven2Component
  ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
