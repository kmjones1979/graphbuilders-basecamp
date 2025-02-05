import { Address, BigInt } from '@graphprotocol/graph-ts'
import { Enlisted as EnlistedEvent } from '../generated/Enlist/Enlist'
import { Enlisted } from '../generated/schema'

export function handleEnlisted(event: EnlistedEvent): void {
  // Create a new Enlisted entity with the correct ID type using Bytes
  let entity = new Enlisted(event.address)
  // Set the properties of the entity using event data
  entity.account = event.params.user // Use 'user' as the event parameter name
  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  // Save the entity to the database using the save() method
  entity.save()
}
