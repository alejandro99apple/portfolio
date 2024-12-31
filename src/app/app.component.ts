import { Component } from '@angular/core';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from "./components/home/home.component";
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactMeComponent } from "./components/contact-me/contact-me.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgScrollbarModule,
    HeaderComponent,
    HomeComponent,
    ProjectsComponent,
    FooterComponent,
    ContactMeComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-app';
}
