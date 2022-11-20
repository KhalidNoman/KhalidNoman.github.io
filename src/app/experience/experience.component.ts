import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {


  experiences: exp[] = [];
  value:any;
  httpClient: HttpClient;
  lines: string[] = [];

  constructor(http: HttpClient) {
    this.httpClient = http;

    // let expTemp:exp = new exp();
    // expTemp.compLogo += "takamul.jpg " ;
    // expTemp.compName = "Takamul Smart Technology" ;
    // expTemp.title = "Software Developer Intern" ;
    // expTemp.startDate = "Oct 2021" ;
    // expTemp.endDate = "Dec 2021";
    // expTemp.desc = "Full Stack Developer with a concentration in Front End Development. Used web development technologies, source control, and work management software to work as a team" ;
    // expTemp.desc.split(".").forEach(x=>
    //   expTemp.bp.push(x)
    //   )
    // this.experiences.push(expTemp)

    // expTemp = new exp();
    // expTemp.compLogo += "shsu.jpg" ;
    // expTemp.compName = "Sam Houston State University" ;
    // expTemp.title = "Volunteer Student Researcher" ;
    // expTemp.startDate = "Jan 2021" ;
    // expTemp.endDate = "Jun 2021";
    // expTemp.desc = "The development of a mobile device code editor is proposed to reduce the struggles and frustration experienced by CS students in their first programming course. It is a dire need to develop a mobile editor that (1) facilitates the understanding of programming concepts, (2) automatically generates programming statements and the related syntax, (3) minimizes the time spent on fixing the errors, and (4) shows the results immediately" ;
    // expTemp.desc.split(".").forEach(x=>
    //   expTemp.bp.push(x)
    //   )
    // this.experiences.push(expTemp)

    // expTemp = new exp();
    // expTemp.compLogo += "shsu.jpg" ;
    // expTemp.compName = "Sam Houston State University" ;
    // expTemp.title = "Student Researcher" ;
    // expTemp.startDate = "Jun 2019" ;
    // expTemp.endDate = "Jun 2021";
    // expTemp.desc = 'Part of a research team under the Sam Houston State University Department of Computer Science tasked with the "Development of an Intelligent Mobile Application to Enhance the Quality of Latent Fingerprint Acquisition". Research was done in association with the Cyber Forensics Intelligence Center and Department of Forensic Science. The research was then selected to be presented at the 72nd American Academy of Forensic Sciences Annual Scientific Meeting, 2020 in Anaheim California';
    // expTemp.desc.split(".").forEach(x=>
    //   expTemp.bp.push(x)
    //   )
    // this.experiences.push(expTemp)

    // expTemp = new exp();
    // expTemp.compLogo += "skin.jpg" ;
    // expTemp.compName = "Skin Essentials Medical Clinics" ;
    // expTemp.title = "Application Enhancement" ;
    // expTemp.startDate = "Jun 2019" ;
    // expTemp.endDate = "Jun 2021";
    // expTemp.desc = "Worked with clinic staff and application provider to enhance the system that clinic currently uses. Helped application provider more accurately customize the system to the clinics needs";
    // expTemp.desc.split(".").forEach(x=>
    //   expTemp.bp.push(x)
    //   )
    // this.experiences.push(expTemp)

    // expTemp = new exp();
    // expTemp.compLogo += "skin.jpg" ;
    // expTemp.compName = "Skin Essentials Medical Clinics" ;
    // expTemp.title = "Information Technology Assistant" ;
    // expTemp.startDate = "May 2017" ;
    // expTemp.endDate = "Jun 2019";
    // expTemp.desc = "In charge of designing, creating, and maintaining the clinics website. Diagnosing/troubleshooting any technological faults the clinic faces";
    // expTemp.desc.split(".").forEach(x=>
    //   expTemp.bp.push(x)
    //   )
    // this.experiences.push(expTemp)

    // expTemp = new exp();
    // expTemp.compLogo += "microsoft.jpg" ;
    // expTemp.compName = "Microsoft" ;
    // expTemp.title = "Promoter" ;
    // expTemp.startDate = "May 2013" ;
    // expTemp.endDate = "Jun 2013";
    // expTemp.desc = "Demonstrated the features of various Microsoft products to customers, including Microsoft Windows, Microsoft Office, XBOX 360, and XBOX One";
    // expTemp.desc.split(".").forEach(x=>
    //   expTemp.bp.push(x)
    //   )
    // this.experiences.push(expTemp)

    this.httpClient.get('assets/experiences/experience.txt', {responseType: 'text'})
      .subscribe(data => {
        this.lines = data.split("!")
        for(let i = 0; i < this.lines.length; i++){
          let expTemp:exp = new exp();
          expTemp.compLogo += this.lines[i++]
          expTemp.compName = this.lines[i++]
          expTemp.title = this.lines[i++]
          expTemp.startDate = this.lines[i++]
          expTemp.endDate = this.lines[i++]
          expTemp.bp = this.lines[i].split(".")
          this.experiences.push(expTemp)
        }
      });
  }

  ngOnInit(): void {
  }

}

class exp{
  compLogo: string = "../../assets/experiences/imgs/";
  compName: string = "";
  title: string = "";
  startDate: string = "";
  endDate: string = "";
  desc: string = "";
  bp: string[] = [];

  constructor(){}
}
