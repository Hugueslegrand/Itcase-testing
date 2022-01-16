import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-configurationBuilderButton',
  templateUrl: './configurationBuilderButton.component.html',
  styleUrls: ['./configurationBuilderButton.component.css']
})
export class ConfigurationBuilderButton implements OnInit {

	submit(push){
		console.log("Form submitted",push)
	}
}
