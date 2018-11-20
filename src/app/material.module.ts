import { NgModule } from '@angular/core';
import { 
  MatButtonModule, 
  MatCheckboxModule, 
  MatSidenavModule,
  MatIcon,
  MatIconModule,
  MatListModule,
  MatToolbarModule} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    MatButtonModule, 
    MatCheckboxModule, 
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule, 
    MatCheckboxModule, 
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule
  ],
})
export class MaterialModule { }
