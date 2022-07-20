import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpClientModule } from "@angular/common/http";


import { CourierLoginComponent } from './Courier-Introduction-Page/courier-login/courier-login.component';
import { CourierRegistrationComponent } from './Courier-Introduction-Page/courier-registration/courier-registration.component';
import { CourierAcceptedRequestComponent } from './Courier-Main-Page/courier-accepted-request/courier-accepted-request.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { CourierIntroductionOpportunitiesComponent } from './Courier-Introduction-Page/courier-introduction-opportunities/courier-introduction-opportunities.component';
import { CourierBenefitsComponent } from './Courier-Introduction-Page/courier-introduction-opportunities/courier-benefits/courier-benefits.component';
import { CourierFrequentQuestionsComponent } from './Courier-Introduction-Page/courier-introduction-opportunities/courier-frequent-questions/courier-frequent-questions.component';
import { AcceptedRequestPickUpComponent } from './Courier-Main-Page/courier-accepted-request/accepted-request-pick-up/accepted-request-pick-up.component';
import { AcceptedRequestOrderComponent } from './Courier-Main-Page/courier-accepted-request/accepted-request-order/accepted-request-order.component';
import { AcceptedRequestDropOffComponent } from './Courier-Main-Page/courier-accepted-request/accepted-request-drop-off/accepted-request-drop-off.component';
import { CourierIntroductionNavbarComponent } from './Courier-Introduction-Page/courier-introduction-navbar/courier-introduction-navbar.component';
import { CourierMainNavbarComponent } from './Courier-Main-Page/courier-main-navbar/courier-main-navbar.component';
import { RequestOrderComponent } from './Courier-Main-Page/request-order/request-order.component';
import { CourierReceivedRequestComponent } from './Courier-Main-Page/courier-received-request/courier-received-request.component';


const routes: Routes = [
  //Introduction Page
  // {
  //   path: '',
  //   redirectTo: 'CourierIntroPage',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'CourierIntroPage',
  //   component: CourierIntroductionComponent,
  //   children: [
  {
    path: 'CourierIntroPage',
    component: CourierIntroductionNavbarComponent
  },
  {
    path: 'courierOpportunities',
    component: CourierIntroductionOpportunitiesComponent,
  },
  {
    path: 'courierOpportunities',
    component: CourierIntroductionOpportunitiesComponent,
    children: [
      {
        path: '',
        component: CourierBenefitsComponent,
      },
      {
        path: '',
        component: CourierFrequentQuestionsComponent,
      },
    ]
  },
  {
    path: 'courierSignUp',
    component: CourierRegistrationComponent,
    data:  {
      courierSignUp: true,
    },
    children: [
      {
        path: 'courierLogin',
        component:CourierLoginComponent
      }
    ]
  },
  {
    path: 'courierLogin',
    component: CourierLoginComponent,
    children: [
      {
        path: 'CourierMainPage',
        component: CourierMainNavbarComponent
      },
    ]
  },    

  // Main Page
  {
    path: 'CourierMainPage',
    component: CourierMainNavbarComponent,
    children: [
      {
        path: 'courierCurrentRequest',
        component:CourierReceivedRequestComponent,
        children: [
          {
            path: 'accept',
            component: CourierAcceptedRequestComponent
          }
        ]
      }, 
      {
        path: 'courierAcceptedRequest',
        component: CourierAcceptedRequestComponent,
      },
      {
        path: 'courierProfile',
        component: CourierRegistrationComponent
      },
    ]
  },
  {
    path: 'courierAcceptedRequest',
    component: CourierAcceptedRequestComponent,
    children: [
      {
        path: '',
        component: AcceptedRequestPickUpComponent
      }, 
      {
        path: '',
        component: AcceptedRequestOrderComponent
      }, 
      {
        path: '',
        component: AcceptedRequestDropOffComponent
      }, 
    ]
  },
  {
    path: '',
    component: AcceptedRequestPickUpComponent
  }, 
  {
    path: '',
    component: AcceptedRequestOrderComponent
  }, 
  {
    path: '',
    component: AcceptedRequestDropOffComponent
  }, 
  {
    path: '',
    component: RequestOrderComponent
  },
  {
    path: 'courierProfile',
    component: CourierRegistrationComponent,
    data: [
      {
        courierSignUp: false
      },
    ]
  },
]

@NgModule({
  declarations: [
  // Introduction Page
    CourierIntroductionNavbarComponent,
    // Navbar Link Components
      CourierIntroductionOpportunitiesComponent,
        CourierBenefitsComponent,
        CourierFrequentQuestionsComponent,
      CourierLoginComponent,
      CourierRegistrationComponent,

  // Main Page
    CourierMainNavbarComponent,
      // Navbar Link Components
      CourierReceivedRequestComponent,
      CourierAcceptedRequestComponent,
        AcceptedRequestPickUpComponent,
        AcceptedRequestOrderComponent,
          RequestOrderComponent,
        AcceptedRequestDropOffComponent,
      // CourierProfileComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    ReactiveFormsModule
  ],
  exports:[
    RouterModule,
  ]
})
export class AppRoutingModule { }
