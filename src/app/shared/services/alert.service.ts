import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs/bundles/Rx';

import { Alert, AlertType } from '../models/alert';

@Injectable()
export class AlertService {

  private subject = new Subject<Alert>();
  private keepAfterRouteChange = false;

  constructor(private router: Router) {
    // clear message after route change unless keepAfterRouteChange = true
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterRouteChange) {
          // only keep for a single route change
          this.keepAfterRouteChange = false;
        } else {
          // clear alert messages
          this.clear();
        }
      }
    });
  }

  getAlert(): Observable<any> {
    return this.subject.asObservable();
  }

  primary(messageHeader: string, message: string, keepAfterRouteChange = false) {
    this.alert(AlertType.Primary, messageHeader, message, keepAfterRouteChange);
  }

  secondary(messageHeader: string, message: string, keepAfterRouteChange = false) {
    this.alert(AlertType.Secondary, messageHeader, message, keepAfterRouteChange);
  }

  success(messageHeader: string, message: string, keepAfterRouteChange = false) {
    this.alert(AlertType.Success, messageHeader, message, keepAfterRouteChange);
  }

  danger(messageHeader: string, message: string, keepAfterRouteChange = false) {
    this.alert(AlertType.Danger, messageHeader, message, keepAfterRouteChange);
  }

  warning(messageHeader: string, message: string, keepAfterRouteChange = false) {
    this.alert(AlertType.Warning, messageHeader, message, keepAfterRouteChange);
  }

  info(messageHeader: string, message: string, keepAfterRouteChange = false) {
    this.alert(AlertType.Info, messageHeader, message, keepAfterRouteChange);
  }

  light(messageHeader: string, message: string, keepAfterRouteChange = false) {
    this.alert(AlertType.Light, messageHeader, message, keepAfterRouteChange);
  }

  dark(messageHeader: string, message: string, keepAfterRouteChange = false) {
    this.alert(AlertType.Dark, messageHeader, message, keepAfterRouteChange);
  }

  alert(type: AlertType, messageHeader: string, message: string, keepAfterRouteChange = false) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next(<Alert>{ type: type, messageHeader: messageHeader, message: message });
    document.documentElement.scrollTop = 0;
  }

  clear() {
    // clear alerts
    this.subject.next();
  }

}
