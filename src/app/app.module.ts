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
import { HouseTwoComponent } from './products/products-house/house-two/house-two.component';
import { HouseThreeComponent } from './products/products-house/house-three/house-three.component';
import { HouseFourComponent } from './products/products-house/house-four/house-four.component';
import { HouseFiveComponent } from './products/products-house/house-five/house-five.component';
import { HouseSixComponent } from './products/products-house/house-six/house-six.component';
import { HouseSevenComponent } from './products/products-house/house-seven/house-seven.component';
import { HouseEichComponent } from './products/products-house/house-eich/house-eich.component';
import { TechOneComponent } from './products/products-tech/tech-one/tech-one.component';
import { TechTwoComponent } from './products/products-tech/tech-two/tech-two.component';
import { TechThreeComponent } from './products/products-tech/tech-three/tech-three.component';
import { TechFourComponent } from './products/products-tech/tech-four/tech-four.component';
import { TechFiveComponent } from './products/products-tech/tech-five/tech-five.component';
import { TechSixComponent } from './products/products-tech/tech-six/tech-six.component';
import { TechSevenComponent } from './products/products-tech/tech-seven/tech-seven.component';
import { TechEichComponent } from './products/products-tech/tech-eich/tech-eich.component';
import { PetsOneComponent } from './products/products-pets/pets-one/pets-one.component';
import { PetsTwoComponent } from './products/products-pets/pets-two/pets-two.component';
import { PetsThreeComponent } from './products/products-pets/pets-three/pets-three.component';
import { PetsFourComponent } from './products/products-pets/pets-four/pets-four.component';
import { PetsFiveComponent } from './products/products-pets/pets-five/pets-five.component';
import { PetsSixComponent } from './products/products-pets/pets-six/pets-six.component';
import { PetsSevenComponent } from './products/products-pets/pets-seven/pets-seven.component';
import { PetsEichComponent } from './products/products-pets/pets-eich/pets-eich.component';
import { BeautyOneComponent } from './products/products-beauty/beauty-one/beauty-one.component';
import { BeautyTwoComponent } from './products/products-beauty/beauty-two/beauty-two.component';
import { BeautyThreeComponent } from './products/products-beauty/beauty-three/beauty-three.component';
import { BeautyFourComponent } from './products/products-beauty/beauty-four/beauty-four.component';
import { BeautyFiveComponent } from './products/products-beauty/beauty-five/beauty-five.component';
import { BeautySixComponent } from './products/products-beauty/beauty-six/beauty-six.component';
import { BeautySevenComponent } from './products/products-beauty/beauty-seven/beauty-seven.component';
import { BeautyEichComponent } from './products/products-beauty/beauty-eich/beauty-eich.component';
import { FitOneComponent } from './products/products-fit/fit-one/fit-one.component';
import { FitTwoComponent } from './products/products-fit/fit-two/fit-two.component';
import { FitThreeComponent } from './products/products-fit/fit-three/fit-three.component';
import { FitFourComponent } from './products/products-fit/fit-four/fit-four.component';
import { FitFiveComponent } from './products/products-fit/fit-five/fit-five.component';
import { FitSixComponent } from './products/products-fit/fit-six/fit-six.component';
import { FitSevenComponent } from './products/products-fit/fit-seven/fit-seven.component';
import { FitEichComponent } from './products/products-fit/fit-eich/fit-eich.component';

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
  {path: 'house-two', component:HouseTwoComponent},
  {path: 'house-three', component:HouseThreeComponent},
  {path: 'house-four', component:HouseFourComponent},
  {path: 'house-five', component:HouseFiveComponent},
  {path: 'house-six', component:HouseSixComponent},
  {path: 'house-seven', component:HouseSevenComponent},
  {path: 'house-eich', component:HouseEichComponent},
  {path: 'house-one', component:HouseOneComponent},
  {path: 'tech-one', component:TechOneComponent},
  {path: 'tech-two', component:TechTwoComponent},
  {path: 'tech-three', component:TechThreeComponent},
  {path: 'tech-four', component:TechFourComponent},
  {path: 'tech-five', component:TechFiveComponent},
  {path: 'tech-six', component:TechSixComponent},
  {path: 'tech-seven', component:TechSevenComponent},
  {path: 'tech-eich', component:TechEichComponent},
  {path: 'pets-one', component:PetsOneComponent},
  {path: 'pets-two', component:PetsTwoComponent},
  {path: 'pets-three', component:PetsThreeComponent},
  {path: 'pets-four', component:PetsFourComponent},
  {path: 'pets-five', component:PetsFiveComponent},
  {path: 'pets-six', component:PetsSixComponent},
  {path: 'pets-seven', component:PetsSevenComponent},
  {path: 'pets-eich', component:PetsEichComponent},
  {path: 'beauty-one', component:BeautyOneComponent},
  {path: 'beauty-two', component:BeautyTwoComponent},
  {path: 'beauty-three', component:BeautyThreeComponent},
  {path: 'beauty-four', component:BeautyFourComponent},
  {path: 'beauty-five', component:BeautyFiveComponent},
  {path: 'beauty-six', component:BeautySixComponent},
  {path: 'beauty-seven', component:BeautySevenComponent},
  {path: 'beauty-eich', component:BeautyEichComponent},
  {path: 'fit-one', component:FitOneComponent},
  {path: 'fit-two', component:FitTwoComponent},
  {path: 'fit-three', component:FitThreeComponent},
  {path: 'fit-four', component:FitFourComponent},
  {path: 'fit-five', component:FitFiveComponent},
  {path: 'fit-six', component:FitSixComponent},
  {path: 'fit-seven', component:FitSevenComponent},
  {path: 'fit-eich', component:FitEichComponent},
  

 
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
    HouseOneComponent,
    HouseTwoComponent,
    HouseThreeComponent,
    HouseFourComponent,
    HouseFiveComponent,
    HouseSixComponent,
    HouseSevenComponent,
    HouseEichComponent,
    TechOneComponent,
    TechTwoComponent,
    TechThreeComponent,
    TechFourComponent,
    TechFiveComponent,
    TechSixComponent,
    TechSevenComponent,
    TechEichComponent,
    PetsOneComponent,
    PetsTwoComponent,
    PetsThreeComponent,
    PetsFourComponent,
    PetsFiveComponent,
    PetsSixComponent,
    PetsSevenComponent,
    PetsEichComponent,
    BeautyOneComponent,
    BeautyTwoComponent,
    BeautyThreeComponent,
    BeautyFourComponent,
    BeautyFiveComponent,
    BeautySixComponent,
    BeautySevenComponent,
    BeautyEichComponent,
    FitOneComponent,
    FitTwoComponent,
    FitThreeComponent,
    FitFourComponent,
    FitFiveComponent,
    FitSixComponent,
    FitSevenComponent,
    FitEichComponent
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
