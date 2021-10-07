import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import {account} from './auth.types'

export interface AuthState {
   authStatus: boolean;
   logInStatus: boolean;
   accounts: Array<account>;
   selectedAccount: account;
}

export function createInitialState(): AuthState {
  return {
    authStatus: false,
    logInStatus: false,
    accounts: [],
    selectedAccount: {
      name: "",
      password: ""
    }
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'auth' })
export class AuthStore extends Store<AuthState> {

  constructor() {
    super(createInitialState());
  }

}
