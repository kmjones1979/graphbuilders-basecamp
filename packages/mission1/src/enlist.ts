import { Enlisted as EnlistedEvent } from "../generated/Enlist/Enlist"
import { Enlisted } from "../generated/schema"

export function handleEnlisted(event: EnlistedEvent): void {
  let entity = new Enlisted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
