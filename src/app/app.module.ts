import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HeaderComponent } from "./components/header/header.component";
import { UserInputComponent } from "./components/user-input/user-input.component";
import { InvestmentResultComponent } from "./components/investment-result/investment-result.component";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        UserInputComponent,
        InvestmentResultComponent,
    ],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {};