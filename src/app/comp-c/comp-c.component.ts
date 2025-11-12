import { I18nPluralPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-c',
  templateUrl: './comp-c.component.html',
  styleUrls: ['./comp-c.component.scss']
})
export class CompCComponent implements OnInit {
  @Input() fname!: string;
  @Input() lname!: string;
  @Input() age!: number;
  @Input() city!: string;
  @Input() profession!: string;
  @Input() company!: string;
  @Input() hobby!: string;
  @Input() experience!: number;
  @Input() favLang!: string;
  @Input() petName!: string;
  @Input() petType!: string;
  @Input() married!: string;

  @Input() studentName ! : string;
  @Input() school ! : string;
  @Input() grade ! : number;
  @Input() favSubject ! : string;
  @Input() bestFriend ! : string;
  @Input() favSport ! : string;
  @Input() dream ! : string;
  @Input() city1 ! : string;
  @Input() teacherName ! : string;
  @Input() marks ! : number;

  @Input() brand ! : string;
  @Input() model ! : string;
  @Input() price ! : number;
  @Input() color ! : string;
  @Input() storage ! : string;
  @Input() camera ! : string;
  @Input() os ! :string;
  @Input() owner ! : string;
  @Input() purchaseYear ! : number;
  @Input() warranty ! : string;

  @Input() movieName ! : string;
  @Input() director ! : string;
  @Input() releaseYear ! : number;
  @Input() actor ! :string;
  @Input() genre ! : string;
  @Input() rating ! : number;
  @Input() duration ! : string;
  @Input() platform ! : string;
  @Input() favScene ! : string;

  @Input() traveler ! : string;
  @Input() country ! : string;
@Input() city2 ! : string;
@Input() days ! : number;
@Input() favPlace ! : string;
@Input() localFood ! :string;
@Input() stayHotel ! : string;
@Input() travelMode !:string;
@Input() spent ! : string;


@Input() playerName ! : string;
@Input() team ! : string;
@Input() runs ! :number;
@Input() balls ! : number;
@Input() opponent ! : string;
@Input() venue ! :string;
@Input() matchType ! :string;
@Input() result ! :string;
@Input() strikeRate ! : number
 
@Input() author ! : string;
@Input() book ! : string;
@Input() genre1 ! : string;
@Input() published ! : number;
@Input() copiesSold ! : string;
@Input() mainCharacter ! : string;
@Input() setting ! : string;
@Input() publisher ! : string;

@Input() shopName ! : string;
@Input() owner1 ! : string;
@Input() location ! : string;
@Input() openTime ! : string;
@Input() closeTime ! : string;
@Input() bestSelling ! : string;
@Input() foundedYear ! : number;
@Input() employees ! : number;
@Input() rating1 ! : number;

@Input() trainer ! :string;
@Input() gymName ! : string;
@Input() experience1 ! : number;
@Input() specialization ! : string;
@Input() location1 ! : string;
@Input() clients ! : number;
@Input() timing ! : string;
@Input() rating2 ! : number;

@Input() restaurant ! : string;
@Input() chef ! : string;
@Input() cuisine ! : string;
@Input() location2 ! : string;
@Input() signatureDish ! : string;
@Input() rating3 ! : number;
@Input() established ! : number;
@Input() branches ! : number

@Input() singer ! : string;
@Input() concertName ! : string;
@Input() location4 ! : string;
@Input() date ! : string;
@Input() crowd ! : number;
@Input() ticketPrice ! : number;
@Input() duration4 ! : string;
@Input() organizer ! : string;

@Input() carBran ! : string;
@Input() model1 ! : string;
@Input() owner2 ! : string;
@Input() range ! :string;
@Input() price2 ! : string;
@Input() battery ! : string;
@Input() topSpeed ! : string;
@Input() color4 ! : string;

@Input() teacher ! : string;
@Input() subject !: string;
@Input() school1 ! : string;
@Input() experience2 ! : number;
@Input() favTopic ! : string;
@Input() awards ! : number;
@Input() city4 ! : string;

@Input() employee3 ! : string;
@Input() designation ! : string;
@Input() department ! : string;
@Input() company1 ! : string;
@Input() years ! : number;
@Input() city6 ! : string;
@Input() projects ! : number;
@Input() teamSize ! : number;

@Input() youtuber ! : string;
@Input() subscribers ! : string;
@Input() contentType ! : string;
@Input() joinYear ! : number;
@Input() uploads ! : number;
@Input() favVideo ! : string;
@Input() vacountry ! : string;


@Input() game ! : string;
@Input() player ! : string;
@Input() rank ! : string;
@Input() playHours ! : number;
@Input() favAgent ! : string;
@Input() bestWeapon ! : string;
@Input() region ! : string;

@Input() developer ! : string;
@Input() stack ! : string;
@Input() company7 ! : string;
@Input() exp ! : number;
@Input() favTech ! : string;
@Input() projectCount ! : number;
@Input() mentor ! : string;
@Input() location7 ! : string;

@Input() photographer ! : string;
@Input() camera1 ! : string;
@Input() specialization1 !: string;
@Input()  experience3 ! : number;
@Input() location3 ! : string;
@Input() awards1 ! : number;
@Input() clients1 !: number;

@Input() chef1 ! : string;
@Input() show ! : string;
@Input() season ! : number;
@Input() dish ! : string;
@Input() rank2 ! : string;
@Input() city7 ! : string;
@Input() fans ! : string;


@Input() artist ! : string;
@Input() artStyle ! : string;
@Input() medium ! : string;
@Input() exhibitions ! : number;
@Input() awards4 ! : number;
@Input() city8 ! : string;
@Input() favPiece ! : string;

@Input() doctor ! : string;
@Input() specialization3 ! : string;
@Input() hospital ! : string;
@Input()  experience4 ! : number;
@Input() city9 ! : string;
@Input() patientsPerDay ! : number;
@Input() rating6 ! : number;

@Input() pilot ! : string;
@Input() airline ! : string;
@Input() experience7 ! : number;
@Input() aircraft ! : string;
@Input() routes ! : string;
@Input() flightHours ! :number;

@Input() influencer ! : string;
@Input() platform1 ! : string;
@Input() followers ! : string;
@Input() niche ! : string;
@Input() collaborations ! :number;
@Input() country2 !: string;

@Input() student1 ! : string;
@Input() university ! : string;
@Input() course5 ! : string;
@Input() semester ! : number;
@Input() cgpa ! : number;
@Input() project ! : string;
@Input() mentor1 ! : string;
    constructor() { }

  ngOnInit(): void {
  }

}
