import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/layout/header/header.component";
import { AccordionComponent } from "./components/ui/accordion/accordion.component";
import { ButtonComponent } from "./components/ui/button/button.component";
import { CardComponent } from "./components/ui/card/card.component";
import { DownloadExtensionComponent } from "./components/sections/download-extension/download-extension.component";
import { FAQuestionComponent } from "./components/sections/f-a-question/f-a-question.component";
import { FeaturesComponent } from "./components/sections/features/features.component";
import { SBManagerComponent } from "./components/sections/s-b-manager/s-b-manager.component";
import { SocialComponent } from "./components/ui/social/social.component";
import { FooterComponent } from "./components/layout/footer/footer.component";

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
