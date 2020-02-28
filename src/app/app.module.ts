import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, RouteReuseStrategy, Routes} from '@angular/router';
import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {Camera} from '@ionic-native/camera/ngx';
import {File} from '@ionic-native/File/ngx';
import {WebView} from '@ionic-native/ionic-webview/ngx';
import {FormsModule} from '@angular/forms';
import {IonicStorageModule} from '@ionic/storage';
import {HTTP} from '@ionic-native/http/ngx';
import {ImagePicker} from '@ionic-native/image-picker/ngx';


@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [BrowserModule,
        IonicModule.forRoot(), AppRoutingModule,
        HttpClientModule, FormsModule,
        IonicStorageModule.forRoot()
    ],
    providers: [
        StatusBar,
        SplashScreen,

        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        File,
        HTTP,
        WebView, HttpClientModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
