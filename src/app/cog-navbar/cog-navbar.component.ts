import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'navbar',
  templateUrl: './cog-navbar.component.html',
  styleUrls: ['./cog-navbar.component.scss']
})
export class CogNavbarComponent {

  isDarkTheme: boolean = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private overlayContainer: OverlayContainer) {
    this.setTheme();
  }

  setTheme = () => {
    if(this.isDarkTheme){
      this.overlayContainer.getContainerElement().classList.remove('light-theme-mode');
      this.overlayContainer.getContainerElement().classList.add('dark-theme-mode');
    }
    else{
      this.overlayContainer.getContainerElement().classList.remove('dark-theme-mode');
      this.overlayContainer.getContainerElement().classList.add('light-theme-mode');
    }
  }
}
