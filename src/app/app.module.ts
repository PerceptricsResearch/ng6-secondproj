import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WlbsidebarComponent } from './wlbsidebar/wlbsidebar.component';
import { StoreComponent } from './store/store.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';
import { WlbdirectiveDirective } from './wlbdirective.directive';

@NgModule({
  declarations: [
    AppComponent,
    WlbsidebarComponent,
    StoreComponent,
    DetailsComponent,
    PostsComponent,
    WlbdirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
