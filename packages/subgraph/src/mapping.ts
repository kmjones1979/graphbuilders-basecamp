import {
    CommsEstablished as CommsEstablishedEvent,
    OwnershipTransferred as OwnershipTransferredEvent,
} from "../generated/Comms/Comms";
import { CommsEstablished, OwnershipTransferred } from "../generated/schema";

export function handleCommsEstablished(event: CommsEstablishedEvent): void {}

export function handleOwnershipTransferred(
    event: OwnershipTransferredEvent
): void {}
