import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import {account} from './auth.types'

export interface AuthState {
   authStatus: boolean;
   accounts: Array<account>
}

export function createInitialState(): AuthState {
  return {
    authStatus: false,
    accounts: []
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'auth' })
export class AuthStore extends Store<AuthState> {

  constructor() {
    super(createInitialState());
  }

}
