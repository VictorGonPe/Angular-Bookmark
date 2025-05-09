import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { AccordionComponent } from "./components/accordion/accordion.component";
import { ButtonComponent } from "./components/button/button.component";
import { CardComponent } from "./components/card/card.component";
import { DownloadExtensionComponent } from "./components/download-extension/download-extension.component";
import { FAQuestionComponent } from "./components/f-a-question/f-a-question.component";
import { FeaturesComponent } from "./components/features/features.component";
import { SBManagerComponent } from "./components/s-b-manager/s-b-manager.component";
import { SocialComponent } from "./components/social/social.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, AccordionComponent, ButtonComponent, CardComponent, DownloadExtensionComponent, FAQuestionComponent, FeaturesComponent, SBManagerComponent, SocialComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-bookmark';
}
