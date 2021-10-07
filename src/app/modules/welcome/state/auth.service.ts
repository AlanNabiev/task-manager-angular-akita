import { Injectable } from '@angular/core';
import { AuthQuery } from './auth.query';
import { AuthStore } from './auth.store';
import { account } from './auth.types';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private authStore: AuthStore, private authQuery: AuthQuery) {
  }

  async updateAccount(account: account) {
    let accounts: Array<account> = await this.authQuery.getAccounts().map((el) => {return el})
    accounts.push(account)
    console.log(accounts)
    this.authStore.update({accounts})
  }

  updateAuthStatus(authStatus: boolean) {
    this.authStore.update({authStatus})
  }
  updateLogInStatus(logInStatus: boolean) {
    this.authStore.update({logInStatus})
  }
  updateSelectedAccount(selectedAccount: account) {
    this.authStore.update({selectedAccount})
  }


}
