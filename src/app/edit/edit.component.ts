import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  userProfile: object;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.userProfile = this.profileService.getUserProfile();
  }

  goToProfile(): void {
    this.profileService.goToProfile();
  }

  updateProfile(form: any): any {
    console.log(form);
    this.profileService.updateUserProfile(form);
  }

}
