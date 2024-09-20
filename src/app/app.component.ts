// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  messages: any[] = [];

  ngOnInit() {
    const eventSource = new EventSource('http://localhost:3000/events'); // Simulated event source URL

    eventSource.addEventListener('message', (event: MessageEvent) => { // Source: Incoming message event
      // Sink: Processing incoming message without origin verification
      this.messages.push(JSON.parse(event.data)); // Vulnerable to cross-origin attacks
    });
  }
}
