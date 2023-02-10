import { AccountModel } from '../model/account'

export interface Account {
  name: string
  email: string
  password: string
}

export interface AddAccount {
  add (account: Account): Promise<AccountModel>
}
