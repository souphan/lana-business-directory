import { Component, OnInit } from '@angular/core';
import { BusinessesService } from 'src/app/services/businesses.service';
import { OpenHoursService } from 'src/app/services/common/open-hours.service';
import { InAppBrowserService } from 'src/app/services/common/in-app-browser.service';
import { MapsService } from 'src/app/services/common/maps.service';
import { EmailService } from 'src/app/services/common/email.service';
import { CallService } from 'src/app/services/common/call.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  business: any;
  days: any[];
  today: number = Date.now();
  
  constructor(
    private businessesService: BusinessesService,
    private openHoursService: OpenHoursService,
    private callService: CallService,
    private emailService: EmailService,
    private iab: InAppBrowser,
    private mapsService: MapsService,
  ) { }

  ngOnInit() {
    this.business = this.businessesService.getCurrent();
    //this.days = this.openHoursService.getOpenHours(this.business.openhours);
  }

  call(phone: string) {
    this.callService.call(phone);
  }

  sendEmail(email: string) {
    this.emailService.sendEmail(email);
  }

  openUrl(url: string) {
    this.iab.create(url,'blank');
  }

  getDirections(officeLocation: string) {
    this.mapsService.openMapsApp(officeLocation, this.business.title);
  }
}
