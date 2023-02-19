import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {


  certifications: cert[] = [];
  value:any;
  httpClient: HttpClient;
  lines: string[] = [];

  constructor(http: HttpClient) {
    this.httpClient = http;

    this.httpClient.get('assets/certificates/certificates.txt', {responseType: 'text'})
      .subscribe(data => {
        console.log(data)
        this.lines = data.split("!")
        for(let i = 0; i < this.lines.length; i++){
          let certTemp:cert = new cert();
          certTemp.img += this.lines[i++]
          certTemp.issuer = this.lines[i++]
          certTemp.title = this.lines[i++]
          certTemp.desc = this.lines[i]

          this.certifications.push(certTemp)
          console.log(certTemp)
        }
      });
  }

  ngOnInit(): void {
  }

}

class cert{
  img: string = "../../assets/certificates/imgs/";
  issuer: string = "";
  title: string = "";
  desc: string = "";

  constructor(){}
}
