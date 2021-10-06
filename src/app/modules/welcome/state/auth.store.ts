import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface AuthState {
   authStatus: boolean;
   name: string;
   password: string;
}

export function createInitialState(): AuthState {
  return {
    authStatus: false,
    name: '',
    password: ''
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'auth' })
export class AuthStore extends Store<AuthState> {

  constructor() {
    super(createInitialState());
  }

}
