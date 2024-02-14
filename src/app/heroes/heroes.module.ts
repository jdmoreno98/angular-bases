import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";

@NgModule({
  declarations:[HeroComponent,ListComponent],
  exports:[HeroComponent,ListComponent],
  imports:[CommonModule]
})
/*
NG0303: Can't bind to 'ngForOf' since it isn't a known property of 'li' (used in the '_ListComponent' component template).
1. If 'li' is an Angular component and it has the 'ngForOf' input, then verify that it is a part of an @NgModule where this component is declared.
2. To allow any property add 'NO_ERRORS_SCHEMA' to the '@NgModule.schemas' of this component.
NG0303: Can't bind to 'ngIf' since it isn't a known property of 'button' (used in the '_ListComponent' component template).
If the 'ngIf' is an Angular control flow directive, please make sure that either the 'NgIf' directive or the 'CommonModule' is a part of an @NgModule where this component is declared.
NG0303: Can't bind to 'ngIf' since it isn't a known property of 'div' (used in the '_ListComponent' component template).
If the 'ngIf' is an Angular control flow directive, please make sure that either the 'NgIf' directive or the 'CommonModule' is a part of an @NgModule where this component is declared.
NG0303: Can't bind to 'ngIfElse' since it isn't a known property of 'div' (used in the '_ListComponent' component template).
1. If 'div' is an Angular component and it has the 'ngIfElse' input, then verify that it is a part of an @NgModule where this component is declared.
2. To allow any property add 'NO_ERRORS_SCHEMA' to the '@NgModule.schemas' of this component.

*/
// ! SI NO PONEMOS EL IMPORT DEL COMMON MODULE, NOS DA EL ERROR DE QUE NO RECONOCE LAS DIRECTIVAS DE !ngFor NI NgIf.
// * Para utilizarlos tenemos que añadir el import deel commonModule que ahí es donde se encuentran
// * Con el del Counter no teníamos ese problema ya que venía importado por defecto.

export class HeroesModule{

}
