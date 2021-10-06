import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { AuthStore, AuthState } from './auth.store';

@Injectable({ providedIn: 'root' })
export class AuthQuery extends Query<AuthState> {

  constructor(protected store: AuthStore) {
    super(store);
  }

  selectName() {
    return this.select(state => state.name)
  }

  selectPassword() {
    return this.select(state => state.password)
  }

  selectAuthStatus() {
    return this.select(state => state.authStatus)
  }

}
