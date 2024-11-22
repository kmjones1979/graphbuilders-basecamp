import {
    Approval as ApprovalEvent,
    OwnershipTransferred as OwnershipTransferredEvent,
    Transfer as TransferEvent,
} from "../generated/Moon/Moon";
import { Approval, OwnershipTransferred, Transfer } from "../generated/schema";

export function handleApproval(event: ApprovalEvent): void {
    // STEP 1: Implement the Approval event
}

export function handleOwnershipTransferred(
    event: OwnershipTransferredEvent
): void {
    let entity = new OwnershipTransferred(
        event.transaction.hash.concatI32(event.logIndex.toI32())
    );
    entity.previousOwner = event.params.previousOwner;
    entity.newOwner = event.params.newOwner;

    entity.blockNumber = event.block.number;
    entity.blockTimestamp = event.block.timestamp;
    entity.transactionHash = event.transaction.hash;

    entity.save();
}

export function handleTransfer(event: TransferEvent): void {
    // STEP 2: Implement the Transfer event
}
