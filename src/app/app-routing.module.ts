import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WlbsidebarComponent } from './wlbsidebar/wlbsidebar.component';
import { StoreComponent } from './store/store.component';
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {
    path: '',
    component: StoreComponent
  },
  {
    path: 'dat',
    component: PostsComponent
  },
  {
    path: 'store',
    component: StoreComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
