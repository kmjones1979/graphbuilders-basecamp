import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { Enlisted } from "../generated/Enlist/Enlist"

export function createEnlistedEvent(user: Address): Enlisted {
  let enlistedEvent = changetype<Enlisted>(newMockEvent())

  enlistedEvent.parameters = new Array()

  enlistedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )

  return enlistedEvent
}
