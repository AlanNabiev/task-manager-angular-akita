import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { AuthStore, AuthState } from './auth.store';

@Injectable({ providedIn: 'root' })
export class AuthQuery extends Query<AuthState> {

  constructor(protected store: AuthStore) {
    super(store);
  }

  selectAccounts() {
    return this.select(state => state.accounts)
  }

  getAccounts() {
    return this.getValue().accounts
  }

  selectAuthStatus() {
    return this.select(state => state.authStatus)
  }

 selectLogInStatus() {
    return this.select(state => state.logInStatus)
  }

  selectSelectedAccount() {
    return this.select(state => state.selectedAccount)
  }

  getSelectedAccount() {
    return this.getValue().selectedAccount
  }

  selectSelectedAccountName() {
    return this.select(state => state.selectedAccount.name)
  }

}
