import { NgModule } from '@angular/core';

import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  exports:[
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class MaterialModule { }
