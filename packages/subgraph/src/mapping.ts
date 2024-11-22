import {
    CommsEstablished as CommsEstablishedEvent,
    OwnershipTransferred as OwnershipTransferredEvent,
} from "../generated/Comms/Comms";
import { CommsEstablished, OwnershipTransferred } from "../generated/schema";

export function handleCommsEstablished(event: CommsEstablishedEvent): void {
    // STEP 1: Create a new CommsEstablished entity
    // STEP 2: Set the properties of the entity using event data
    // STEP 3: Save the entity to the database using the save() method
}

export function handleOwnershipTransferred(
    event: OwnershipTransferredEvent
): void {
    // STEP 1: Create a new OwnershipTransferred entity
    // STEP 2: Set the properties of the entity using event data
    // STEP 3: Save the entity to the database using the save() method
}
