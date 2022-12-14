import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgSelectModule } from "@ng-select/ng-select";
import { SideNavComponent } from "./side-nav/side-nav.component";
import { ProgressBannerComponent } from './progress-banner/progress-banner.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from "ngx-pagination";
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    SideNavComponent,
    ProgressBannerComponent,
    DestinationsComponent
  ],
  imports: [
    MatMenuModule,
    MatIconModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgbModule,
    NgxPaginationModule
  ],
  exports: [
    MatMenuModule,
    MatIconModule,
    NgbModule,
    NgSelectModule,
    ProgressBannerComponent,
    SideNavComponent,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    DestinationsComponent,
    NgxPaginationModule
  ],
  providers: [

  ]
})
export class SharedModule { }
