import { Component, Input, OnInit } from '@angular/core';
import { Iadmission, Ibooking, Icart, Iclass, ICon, Icourse, Iemployee, Ienrollment, Iinvoice, Ik, Imeeting, Imovie, Iorde, IorderNow, Ip, IpatientRecord, Iplaylist, Iprod, Ir, Irestu, Is, Ishipment, Istudent, Iticket, Itransaction } from '../model/meeting';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.scss']
})
export class CompBComponent implements OnInit {
 
  @Input() meeting ! : Imeeting;
  @Input() student ! : Istudent;
  @Input() emp ! : Iemployee;
  @Input() booking ! : Ibooking;
  @Input() course ! : Icourse;
  @Input() order ! : Iorde;
  @Input() playlist ! : Iplaylist;
  @Input() enrollment ! : Ienrollment;
  @Input() patientRecord ! : IpatientRecord;
  @Input() transaction ! : Itransaction
  @Input() product ! : Iprod;
  @Input() movie ! : Imovie;
  @Input() shipment ! : Ishipment;
  @Input() admission ! : Iadmission;
  @Input() conference ! : ICon;
  @Input() invoice ! : Iinvoice;
  @Input() orderNow ! : IorderNow;
  @Input() ticket ! : Iticket;
  @Input() transactionBank ! : Ir;
  @Input() productSell ! : Ip;
  @Input() j ! : Is;
  @Input() r ! : Icart;
  @Input() restur !: Irestu;
  @Input() k ! : Iclass;
  @Input() ecommerceOrder ! :Ik;
  constructor() { }

  ngOnInit(): void {
  }

}
