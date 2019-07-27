const { BlockNumber, Vector, AccountId, u32, Hash, Signature, u128 } = require('@polkadot/types');
import { Abi } from '@polkadot/api-contract';

const abi = new Abi();

export async function submit_block(api : any, address : AccountId, value:u32 , gas:u32 ,header : Hash) {

  api.tx.contracts
  .call(address, value, gas, abi.messages.submit_block(hash))
  .signAndSend(<keyring pair>, (result: SubmittableResult) => { ... });
}
