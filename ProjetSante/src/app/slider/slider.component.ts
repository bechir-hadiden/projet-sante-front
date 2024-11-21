import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent  implements AfterViewInit {

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    const slider = this.el.nativeElement.querySelector('.slider .list');
    const items = this.el.nativeElement.querySelectorAll('.slider .list .item');
    const next = this.el.nativeElement.querySelector('#next');
    const prev = this.el.nativeElement.querySelector('#prev');
    const dots = this.el.nativeElement.querySelectorAll('.slider .dots li');

    let lengthItems = items.length - 1;
    let active = 0;

    next.onclick = () => {
      active = active + 1 <= lengthItems ? active + 1 : 0;
      this.reloadSlider(slider, items, dots, active);
    };
    prev.onclick = () => {
      active = active - 1 >= 0 ? active - 1 : lengthItems;
      this.reloadSlider(slider, items, dots, active);
    };

    let refreshInterval = setInterval(() => { next.click(); }, 3000);

    window.onresize = () => {
      this.reloadSlider(slider, items, dots, active);
    };

    dots.forEach((li: { addEventListener: (arg0: string, arg1: () => void) => void; }, key: number) => {
      li.addEventListener('click', () => {
        active = key;
        this.reloadSlider(slider, items, dots, active);
      });
    });
  }

  reloadSlider(slider: HTMLElement, items: NodeListOf<Element>, dots: NodeListOf<Element>, active: number): void {
    const itemWidth = items[0].clientWidth;
    slider.style.left = -itemWidth * active + 'px';

    const lastActiveDot = this.el.nativeElement.querySelector('.slider .dots li.active');
    if (lastActiveDot) {
      lastActiveDot.classList.remove('active');
    }
    dots[active].classList.add('active');
  }
}
