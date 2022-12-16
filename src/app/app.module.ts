import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './information/home/home.component';
import { AboutComponent } from './information/about/about.component';
import { ContactComponent } from './information/contact/contact.component';
import { ShopComponent } from './information/shop/shop.component';
import { TermsComponent } from './information/terms/terms.component';
import { PaymentComponent } from './politics/payment/payment.component';
import { PribacyComponent } from './politics/pribacy/pribacy.component';
import { RefundComponent } from './politics/refund/refund.component';
import { ShippingComponent } from './politics/shipping/shipping.component';
import { TrackOrderComponent } from './politics/track-order/track-order.component';
import { HouseComponent } from './categories/house/house.component';
import { TechComponent } from './categories/tech/tech.component';
import { PetsComponent } from './categories/pets/pets.component';
import { BeautyComponent } from './categories/beauty/beauty.component';
import { FitComponent } from './categories/fit/fit.component';
import { CartComponent } from './cart/cart.component';
import { ShopHouseComponent } from './shop-house/shop-house.component';
import { ShopTechComponent } from './shop-tech/shop-tech.component';
import { ShopPetsComponent } from './shop-pets/shop-pets.component';
import { ShopBeautyComponent } from './shop-beauty/shop-beauty.component';
import { ShopFitComponent } from './shop-fit/shop-fit.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BtnWhatsappComponent } from './btn-whatsapp/btn-whatsapp.component';
import { HouseOneComponent } from './products/products-house/house-one/house-one.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'nosotros', component:AboutComponent},
  {path: 'shop', component:ShopComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'terms', component:TermsComponent},
  {path: 'privacy', component:PribacyComponent},
  {path: 'shipping', component:ShippingComponent},
  {path: 'refund', component:RefundComponent},
  {path: 'track', component:TrackOrderComponent},
  {path: 'payment', component:PaymentComponent},
  {path: 'house', component:HouseComponent},
  {path: 'tech', component:TechComponent},
  {path: 'pets', component:PetsComponent},
  {path: 'beauty', component:BeautyComponent},
  {path: 'fit', component:FitComponent},
  {path: 'house-one', component:HouseOneComponent},
 
 ]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ShopComponent,
    TermsComponent,
    PaymentComponent,
    PribacyComponent,
    RefundComponent,
    ShippingComponent,
    TrackOrderComponent,
    HouseComponent,
    TechComponent,
    PetsComponent,
    BeautyComponent,
    FitComponent,
    CartComponent,
    ShopHouseComponent,
    ShopTechComponent,
    ShopPetsComponent,
    ShopBeautyComponent,
    ShopFitComponent,
    HeaderComponent,
    FooterComponent,
    BtnWhatsappComponent,
    HouseOneComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
