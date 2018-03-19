export class Alert {
  type: AlertType;
  messageHeader: string;
  message: string;
}

export enum AlertType {
  Primary,
  Secondary,
  Success,
  Danger,
  Warning,
  Info,
  Light,
  Dark
}
