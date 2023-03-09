import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { MenuComponent } from './common/menu/menu.component';
import { StoriesComponent } from './common/stories/stories.component';
import { FeedsComponent } from './home/feeds/feeds.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { MyClickToggleDirective } from './directive/my-click-toggle.directive';
import { MessagesComponent } from './common/messages/messages.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    MenuComponent,
    StoriesComponent,
    FeedsComponent,
    CreatePostComponent,
    MyClickToggleDirective,
    MessagesComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
