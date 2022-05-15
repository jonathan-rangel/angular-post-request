import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({ selector: 'app-root', templateUrl: 'app.component.html' })
export class AppComponent implements OnInit {
  objects = [];


    constructor(private http: HttpClient) { }

    ngOnInit() {      
        // Simple POST request with a JSON body and response type <any>
        this.http.post<any>('https://reqres.in/api/posts', { name: 'cerulean' }).subscribe(data => this.objects = data)
    }
}


