import {Routes,RouterModule} from '@angular/router'
import {ListagemComponent} from './listagem/listagem.component'
import {CadastroComponent} from './cadastro/cadastro.component'


const appRoutes: Routes = [
 {path:'',component: ListagemComponent},
 {path:'cadastro/:id',component: CadastroComponent},
 {path:'cadastro',component: CadastroComponent},
 {path:'**',redirectTo: ''}
]

export const roteamento = RouterModule.forRoot(appRoutes)