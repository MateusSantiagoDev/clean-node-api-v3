import { AccountModel } from '../../domain/model/account'
import { Account } from '../../domain/usecase/add-account'

export interface AddAccountRepository {
  add (account: Account): Promise<AccountModel>
}
