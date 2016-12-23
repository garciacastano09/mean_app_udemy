import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { MessageComponent } from "./messages/message/message.component";
import { MessageListComponent } from "./messages/message-list/message-list.component";
import { MessageInputComponent } from "./messages/message-input/message-input.component";
import { MessagesComponent } from "./messages/messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication/authentication.component";
import { HeaderComponent } from "./header/header.component";
import { routing } from "./app.routing";
import { LogoutComponent } from "./auth/logout/logout.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { SigninComponent } from "./auth/signin/signin.component";

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent,
        AuthenticationComponent,
        HeaderComponent,
        LogoutComponent,
        SignupComponent,
        SigninComponent
    ],
    imports: [BrowserModule, FormsModule, routing, ReactiveFormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}