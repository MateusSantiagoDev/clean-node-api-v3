import { AccountModel } from '../../../domain/model/account'
import { Account, AddAccount } from '../../../domain/usecase/add-account'
import { Encrypter } from '../../protocols/encrypter'
import { AddAccountRepository } from '../../protocols/add-account-repository'

export class DbAccount implements AddAccount {
  private readonly encrypter: Encrypter
  private readonly addAccountrepository: AddAccountRepository
  constructor (encrypter: Encrypter, addAccountRepository: AddAccountRepository) {
    this.encrypter = encrypter
    this.addAccountrepository = addAccountRepository
  }

  async add (accountData: Account): Promise<AccountModel> {
    const hashedPassword = await this.encrypter.encrypt(accountData.password)
    const account = await this.addAccountrepository.add(Object.assign({}, accountData, { password: hashedPassword }))
    return account
  }
}
