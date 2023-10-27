import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { ListRenderComponent } from "./components/list-render/list-render.component";
import { EmiterComponent } from "./components/emiter/emiter.component";

const routes: Routes = [
    {path: '', component: FirstComponentComponent},
    {path: 'list', component: ListRenderComponent},
    {path: 'change', component: EmiterComponent}
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}