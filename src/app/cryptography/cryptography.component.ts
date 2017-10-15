import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-cryptography',
  templateUrl: './cryptography.component.html',
  styleUrls: ['./cryptography.component.css']
})
export class CryptographyComponent implements OnInit {
crypto: any[];
  error: string;
// objectKeys = Object.keys;
  constructor(private http: Http) { }
  ngOnInit() {
    this.http.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,EUR&e=Coinbase&extraParams=your_app_name')
      .map(res => res.json())
      .subscribe(response => this.crypto,
        error => this.error = error.statusText);
  }

}
