import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GreetingService {
  url: string = environment.url;
  greetingMessage!: string;
  constructor(private http: HttpClient) {}

  getGreeting(name: string) {
    this.http.get<string>(this.url + name).subscribe((data: string) => {
      return (this.greetingMessage = data);
    });
  }
}
