import { Component, inject, input, output, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  template: `
  <div class="container">
      <p>helo</p>
  </div>`,
})
export class TestComponent {
  path = input('youssef');
  route = inject(ActivatedRoute)
  // counter = input.required<number>()
  numberCounter = signal(0)
  counterChange = output<number>()
  ngOnInit(): void {
    // this.numberCounter.set(this.counter());
    setInterval(() => {
      this.numberCounter.set(this.numberCounter() + 1);
      this.counterChange.emit(this.numberCounter());
    }, 1000)
    console.log(this.route)
    console.log(this.path())
  }
}
