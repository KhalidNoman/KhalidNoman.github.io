import { NgModule } from "@angular/core";
import { MatTableModule } from '@angular/material/table'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatButtonModule} from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { ClipboardModule } from '@angular/cdk/clipboard'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { MatRipple, MatRippleModule } from "@angular/material/core";



@NgModule({
    imports:[
        MatTableModule,
        MatCardModule,
        MatFormFieldModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        ClipboardModule,
        MatSnackBarModule,
        MatSidenavModule,
        MatListModule,
        MatRippleModule
    ],
    exports:[
        MatTableModule,
        MatCardModule,
        MatFormFieldModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        ClipboardModule,
        MatSnackBarModule,
        MatSidenavModule,
        MatListModule,
        MatRippleModule
    ]

})

export class AngularMaterialModule{}
