import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
@NgModule({
    imports: [
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatDatepickerModule,
        MatSelectModule,
        MatToolbarModule,
        MatCardModule,
        MatIconModule,
        MatTooltipModule,
        MatNativeDateModule

    ],
    exports: [
        MatButtonModule,
        MatInputModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatSelectModule,
        MatToolbarModule,
        MatCardModule,
        MatIconModule,
        MatTooltipModule,
        MatNativeDateModule
      ]
  })

  export class MaterialModule { }
