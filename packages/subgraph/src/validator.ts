import {
  BasecampAddressSet as BasecampAddressSetEvent,
  DonIdSet as DonIdSetEvent,
  FunctionsRouterAddressSet as FunctionsRouterAddressSetEvent,
  MissionSubmitted as MissionSubmittedEvent,
  MissionValidated as MissionValidatedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  RequestFulfilled as RequestFulfilledEvent,
  RequestSent as RequestSentEvent,
  Withdraw as WithdrawEvent,
} from "../generated/Validator/Validator"
import {
  BasecampAddressSet,
  DonIdSet,
  FunctionsRouterAddressSet,
  MissionSubmitted,
  MissionValidated,
  OwnershipTransferred,
  RequestFulfilled,
  RequestSent,
  Withdraw,
} from "../generated/schema"

export function handleBasecampAddressSet(event: BasecampAddressSetEvent): void {
  let entity = new BasecampAddressSet(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.newBasecampAddress = event.params.newBasecampAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDonIdSet(event: DonIdSetEvent): void {
  let entity = new DonIdSet(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.newDonId = event.params.newDonId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFunctionsRouterAddressSet(
  event: FunctionsRouterAddressSetEvent,
): void {
  let entity = new FunctionsRouterAddressSet(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.newFunctionsRouterAddress = event.params.newFunctionsRouterAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMissionSubmitted(event: MissionSubmittedEvent): void {
  let entity = new MissionSubmitted(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.requestId = event.params.requestId
  entity.missionIndex = event.params.missionIndex
  entity.queryUrl = event.params.queryUrl
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMissionValidated(event: MissionValidatedEvent): void {
  let entity = new MissionValidated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.requestId = event.params.requestId
  entity.missionIndex = event.params.missionIndex
  entity.isValid = event.params.isValid
  entity.success = event.params.success
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent,
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRequestFulfilled(event: RequestFulfilledEvent): void {
  let entity = new RequestFulfilled(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.Validator_id = event.params.id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRequestSent(event: RequestSentEvent): void {
  let entity = new RequestSent(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.Validator_id = event.params.id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdraw(event: WithdrawEvent): void {
  let entity = new Withdraw(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
