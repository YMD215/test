import { HttpClient } from '@angular/common/http';
import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { TestComponent } from "./test/test.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  routes = 'jhfkdshj'

  signal = signal(100)
  derived  = computed(() => signal(this.signal()))

  http = inject(HttpClient)
  url = "https://api.angular-email.com/"
  youssef = signal<number>(2);
  counter = 5;
  activatedRoute = inject(ActivatedRoute)
  ngOnInit(): void {
    this.http.get<any>(this.url + 'auth/signedin').subscribe((res)=>{
      console.log(res) 
    })
    console.log('on init');
    
    this.youssef.set(5)    

    console.log(this.activatedRoute);
    
    this.activatedRoute.params.subscribe((res) => {
      console.log('res');
      console.log(res);
    })
  }
  Usignal = this.youssef.update(value => { value *= 2; console.log('updating'); return value })

  Esignal = effect(() => {
    console.log('youssef is changed to: %o', this.youssef());
  })
  nada2 = effect(() => {
    console.log('computed changed to: %o', this.Csignal());
  })
  Csignal = computed(() => {
    console.log('computed!');
    return this.youssef() * 2;
  })
}
