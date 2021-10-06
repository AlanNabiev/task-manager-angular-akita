import { Injectable } from '@angular/core';
import { AuthStore } from './auth.store';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private authStore: AuthStore) {
  }

  updateAccount(name: string, password: string) {
    this.authStore.update({name, password})
  }

  updateAuthStatus(authStatus: boolean) {
    this.authStore.update({authStatus})
  }


}
