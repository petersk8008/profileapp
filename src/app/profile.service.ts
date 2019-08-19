import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private router: Router) { }

  userProfile: object = {
    name: "Kody Peters",
    contact: "kodypeters91@gmail.com",
    bio: "I like dogs. They are really cool and fun and I can't wait til the day I get one"
  };

  getUserProfile(): object {
    return this.userProfile;
  }

  goToEdit(): void {
    this.router.navigate(['edit']);
  }

  goToProfile(): void {
    this.router.navigate(["profile"]);
  }

  updateUserProfile(form: object): void {
    console.log(form);
    this.router.navigate(["profile"]);
  }

}
