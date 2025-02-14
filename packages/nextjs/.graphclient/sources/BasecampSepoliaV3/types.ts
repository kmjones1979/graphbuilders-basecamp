// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace BasecampSepoliaV3Types {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Bytes: { input: any; output: any; }
  Int8: { input: any; output: any; }
  Timestamp: { input: any; output: any; }
};

export type AdminAdded = {
  id: Scalars['Bytes']['output'];
  admin: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type AdminAdded_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  admin?: InputMaybe<Scalars['Bytes']['input']>;
  admin_not?: InputMaybe<Scalars['Bytes']['input']>;
  admin_gt?: InputMaybe<Scalars['Bytes']['input']>;
  admin_lt?: InputMaybe<Scalars['Bytes']['input']>;
  admin_gte?: InputMaybe<Scalars['Bytes']['input']>;
  admin_lte?: InputMaybe<Scalars['Bytes']['input']>;
  admin_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  admin_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  admin_contains?: InputMaybe<Scalars['Bytes']['input']>;
  admin_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AdminAdded_filter>>>;
  or?: InputMaybe<Array<InputMaybe<AdminAdded_filter>>>;
};

export type AdminAdded_orderBy =
  | 'id'
  | 'admin'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type AdminRemoved = {
  id: Scalars['Bytes']['output'];
  admin: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type AdminRemoved_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  admin?: InputMaybe<Scalars['Bytes']['input']>;
  admin_not?: InputMaybe<Scalars['Bytes']['input']>;
  admin_gt?: InputMaybe<Scalars['Bytes']['input']>;
  admin_lt?: InputMaybe<Scalars['Bytes']['input']>;
  admin_gte?: InputMaybe<Scalars['Bytes']['input']>;
  admin_lte?: InputMaybe<Scalars['Bytes']['input']>;
  admin_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  admin_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  admin_contains?: InputMaybe<Scalars['Bytes']['input']>;
  admin_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AdminRemoved_filter>>>;
  or?: InputMaybe<Array<InputMaybe<AdminRemoved_filter>>>;
};

export type AdminRemoved_orderBy =
  | 'id'
  | 'admin'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type Aggregation_interval =
  | 'hour'
  | 'day';

export type ApprovalForAll = {
  id: Scalars['Bytes']['output'];
  account: Scalars['Bytes']['output'];
  operator: Scalars['Bytes']['output'];
  approved: Scalars['Boolean']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type ApprovalForAll_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account?: InputMaybe<Scalars['Bytes']['input']>;
  account_not?: InputMaybe<Scalars['Bytes']['input']>;
  account_gt?: InputMaybe<Scalars['Bytes']['input']>;
  account_lt?: InputMaybe<Scalars['Bytes']['input']>;
  account_gte?: InputMaybe<Scalars['Bytes']['input']>;
  account_lte?: InputMaybe<Scalars['Bytes']['input']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  operator?: InputMaybe<Scalars['Bytes']['input']>;
  operator_not?: InputMaybe<Scalars['Bytes']['input']>;
  operator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  operator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  operator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  operator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  operator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  operator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  operator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  operator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  approved?: InputMaybe<Scalars['Boolean']['input']>;
  approved_not?: InputMaybe<Scalars['Boolean']['input']>;
  approved_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  approved_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ApprovalForAll_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ApprovalForAll_filter>>>;
};

export type ApprovalForAll_orderBy =
  | 'id'
  | 'account'
  | 'operator'
  | 'approved'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type BasecampAddressSet = {
  id: Scalars['Bytes']['output'];
  newBasecampAddress: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type BasecampAddressSet_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newBasecampAddress?: InputMaybe<Scalars['Bytes']['input']>;
  newBasecampAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  newBasecampAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  newBasecampAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  newBasecampAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  newBasecampAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  newBasecampAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newBasecampAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newBasecampAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newBasecampAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BasecampAddressSet_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BasecampAddressSet_filter>>>;
};

export type BasecampAddressSet_orderBy =
  | 'id'
  | 'newBasecampAddress'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type Credential = {
  id: Scalars['Bytes']['output'];
  enabled: Scalars['Boolean']['output'];
  Basecamp_id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type CredentialMinted = {
  id: Scalars['Bytes']['output'];
  to: User;
  Basecamp_id: Scalars['Int']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type CredentialMinted_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
  to_not?: InputMaybe<Scalars['String']['input']>;
  to_gt?: InputMaybe<Scalars['String']['input']>;
  to_lt?: InputMaybe<Scalars['String']['input']>;
  to_gte?: InputMaybe<Scalars['String']['input']>;
  to_lte?: InputMaybe<Scalars['String']['input']>;
  to_in?: InputMaybe<Array<Scalars['String']['input']>>;
  to_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  to_contains?: InputMaybe<Scalars['String']['input']>;
  to_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  to_not_contains?: InputMaybe<Scalars['String']['input']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  to_starts_with?: InputMaybe<Scalars['String']['input']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_ends_with?: InputMaybe<Scalars['String']['input']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_?: InputMaybe<User_filter>;
  Basecamp_id?: InputMaybe<Scalars['Int']['input']>;
  Basecamp_id_not?: InputMaybe<Scalars['Int']['input']>;
  Basecamp_id_gt?: InputMaybe<Scalars['Int']['input']>;
  Basecamp_id_lt?: InputMaybe<Scalars['Int']['input']>;
  Basecamp_id_gte?: InputMaybe<Scalars['Int']['input']>;
  Basecamp_id_lte?: InputMaybe<Scalars['Int']['input']>;
  Basecamp_id_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  Basecamp_id_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CredentialMinted_filter>>>;
  or?: InputMaybe<Array<InputMaybe<CredentialMinted_filter>>>;
};

export type CredentialMinted_orderBy =
  | 'id'
  | 'to'
  | 'to__id'
  | 'to__address'
  | 'to__rank'
  | 'to__lastCredentialMinted'
  | 'to__blockNumber'
  | 'to__blockTimestamp'
  | 'to__transactionHash'
  | 'Basecamp_id'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type CredentialSet = {
  id: Scalars['Bytes']['output'];
  enabled: Scalars['Boolean']['output'];
  Basecamp_id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  url: Scalars['String']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type CredentialSet_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  enabled_not?: InputMaybe<Scalars['Boolean']['input']>;
  enabled_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  enabled_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  Basecamp_id?: InputMaybe<Scalars['Int']['input']>;
  Basecamp_id_not?: InputMaybe<Scalars['Int']['input']>;
  Basecamp_id_gt?: InputMaybe<Scalars['Int']['input']>;
  Basecamp_id_lt?: InputMaybe<Scalars['Int']['input']>;
  Basecamp_id_gte?: InputMaybe<Scalars['Int']['input']>;
  Basecamp_id_lte?: InputMaybe<Scalars['Int']['input']>;
  Basecamp_id_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  Basecamp_id_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_gt?: InputMaybe<Scalars['String']['input']>;
  url_lt?: InputMaybe<Scalars['String']['input']>;
  url_gte?: InputMaybe<Scalars['String']['input']>;
  url_lte?: InputMaybe<Scalars['String']['input']>;
  url_in?: InputMaybe<Array<Scalars['String']['input']>>;
  url_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  url_starts_with?: InputMaybe<Scalars['String']['input']>;
  url_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  url_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  url_ends_with?: InputMaybe<Scalars['String']['input']>;
  url_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  url_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CredentialSet_filter>>>;
  or?: InputMaybe<Array<InputMaybe<CredentialSet_filter>>>;
};

export type CredentialSet_orderBy =
  | 'id'
  | 'enabled'
  | 'Basecamp_id'
  | 'name'
  | 'url'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type Credential_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  enabled_not?: InputMaybe<Scalars['Boolean']['input']>;
  enabled_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  enabled_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  Basecamp_id?: InputMaybe<Scalars['Int']['input']>;
  Basecamp_id_not?: InputMaybe<Scalars['Int']['input']>;
  Basecamp_id_gt?: InputMaybe<Scalars['Int']['input']>;
  Basecamp_id_lt?: InputMaybe<Scalars['Int']['input']>;
  Basecamp_id_gte?: InputMaybe<Scalars['Int']['input']>;
  Basecamp_id_lte?: InputMaybe<Scalars['Int']['input']>;
  Basecamp_id_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  Basecamp_id_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_gt?: InputMaybe<Scalars['String']['input']>;
  url_lt?: InputMaybe<Scalars['String']['input']>;
  url_gte?: InputMaybe<Scalars['String']['input']>;
  url_lte?: InputMaybe<Scalars['String']['input']>;
  url_in?: InputMaybe<Array<Scalars['String']['input']>>;
  url_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  url_starts_with?: InputMaybe<Scalars['String']['input']>;
  url_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  url_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  url_ends_with?: InputMaybe<Scalars['String']['input']>;
  url_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  url_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Credential_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Credential_filter>>>;
};

export type Credential_orderBy =
  | 'id'
  | 'enabled'
  | 'Basecamp_id'
  | 'name'
  | 'url';

export type DonIdSet = {
  id: Scalars['Bytes']['output'];
  newDonId: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type DonIdSet_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newDonId?: InputMaybe<Scalars['Bytes']['input']>;
  newDonId_not?: InputMaybe<Scalars['Bytes']['input']>;
  newDonId_gt?: InputMaybe<Scalars['Bytes']['input']>;
  newDonId_lt?: InputMaybe<Scalars['Bytes']['input']>;
  newDonId_gte?: InputMaybe<Scalars['Bytes']['input']>;
  newDonId_lte?: InputMaybe<Scalars['Bytes']['input']>;
  newDonId_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newDonId_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newDonId_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newDonId_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DonIdSet_filter>>>;
  or?: InputMaybe<Array<InputMaybe<DonIdSet_filter>>>;
};

export type DonIdSet_orderBy =
  | 'id'
  | 'newDonId'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type FunctionsRouterAddressSet = {
  id: Scalars['Bytes']['output'];
  newFunctionsRouterAddress: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type FunctionsRouterAddressSet_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newFunctionsRouterAddress?: InputMaybe<Scalars['Bytes']['input']>;
  newFunctionsRouterAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  newFunctionsRouterAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  newFunctionsRouterAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  newFunctionsRouterAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  newFunctionsRouterAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  newFunctionsRouterAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newFunctionsRouterAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newFunctionsRouterAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newFunctionsRouterAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FunctionsRouterAddressSet_filter>>>;
  or?: InputMaybe<Array<InputMaybe<FunctionsRouterAddressSet_filter>>>;
};

export type FunctionsRouterAddressSet_orderBy =
  | 'id'
  | 'newFunctionsRouterAddress'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type MinterAdded = {
  id: Scalars['Bytes']['output'];
  minter: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type MinterAdded_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  minter?: InputMaybe<Scalars['Bytes']['input']>;
  minter_not?: InputMaybe<Scalars['Bytes']['input']>;
  minter_gt?: InputMaybe<Scalars['Bytes']['input']>;
  minter_lt?: InputMaybe<Scalars['Bytes']['input']>;
  minter_gte?: InputMaybe<Scalars['Bytes']['input']>;
  minter_lte?: InputMaybe<Scalars['Bytes']['input']>;
  minter_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  minter_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  minter_contains?: InputMaybe<Scalars['Bytes']['input']>;
  minter_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MinterAdded_filter>>>;
  or?: InputMaybe<Array<InputMaybe<MinterAdded_filter>>>;
};

export type MinterAdded_orderBy =
  | 'id'
  | 'minter'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type MinterRemoved = {
  id: Scalars['Bytes']['output'];
  minter: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type MinterRemoved_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  minter?: InputMaybe<Scalars['Bytes']['input']>;
  minter_not?: InputMaybe<Scalars['Bytes']['input']>;
  minter_gt?: InputMaybe<Scalars['Bytes']['input']>;
  minter_lt?: InputMaybe<Scalars['Bytes']['input']>;
  minter_gte?: InputMaybe<Scalars['Bytes']['input']>;
  minter_lte?: InputMaybe<Scalars['Bytes']['input']>;
  minter_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  minter_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  minter_contains?: InputMaybe<Scalars['Bytes']['input']>;
  minter_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MinterRemoved_filter>>>;
  or?: InputMaybe<Array<InputMaybe<MinterRemoved_filter>>>;
};

export type MinterRemoved_orderBy =
  | 'id'
  | 'minter'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type MissionSubmitted = {
  id: Scalars['Bytes']['output'];
  requestId: Scalars['Bytes']['output'];
  missionIndex: Scalars['Int']['output'];
  queryUrl: Scalars['String']['output'];
  account: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type MissionSubmitted_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  requestId?: InputMaybe<Scalars['Bytes']['input']>;
  requestId_not?: InputMaybe<Scalars['Bytes']['input']>;
  requestId_gt?: InputMaybe<Scalars['Bytes']['input']>;
  requestId_lt?: InputMaybe<Scalars['Bytes']['input']>;
  requestId_gte?: InputMaybe<Scalars['Bytes']['input']>;
  requestId_lte?: InputMaybe<Scalars['Bytes']['input']>;
  requestId_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  requestId_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  requestId_contains?: InputMaybe<Scalars['Bytes']['input']>;
  requestId_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  missionIndex?: InputMaybe<Scalars['Int']['input']>;
  missionIndex_not?: InputMaybe<Scalars['Int']['input']>;
  missionIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  missionIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  missionIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  missionIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  missionIndex_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  missionIndex_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  queryUrl?: InputMaybe<Scalars['String']['input']>;
  queryUrl_not?: InputMaybe<Scalars['String']['input']>;
  queryUrl_gt?: InputMaybe<Scalars['String']['input']>;
  queryUrl_lt?: InputMaybe<Scalars['String']['input']>;
  queryUrl_gte?: InputMaybe<Scalars['String']['input']>;
  queryUrl_lte?: InputMaybe<Scalars['String']['input']>;
  queryUrl_in?: InputMaybe<Array<Scalars['String']['input']>>;
  queryUrl_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  queryUrl_contains?: InputMaybe<Scalars['String']['input']>;
  queryUrl_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  queryUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  queryUrl_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  queryUrl_starts_with?: InputMaybe<Scalars['String']['input']>;
  queryUrl_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  queryUrl_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  queryUrl_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  queryUrl_ends_with?: InputMaybe<Scalars['String']['input']>;
  queryUrl_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  queryUrl_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  queryUrl_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account?: InputMaybe<Scalars['Bytes']['input']>;
  account_not?: InputMaybe<Scalars['Bytes']['input']>;
  account_gt?: InputMaybe<Scalars['Bytes']['input']>;
  account_lt?: InputMaybe<Scalars['Bytes']['input']>;
  account_gte?: InputMaybe<Scalars['Bytes']['input']>;
  account_lte?: InputMaybe<Scalars['Bytes']['input']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MissionSubmitted_filter>>>;
  or?: InputMaybe<Array<InputMaybe<MissionSubmitted_filter>>>;
};

export type MissionSubmitted_orderBy =
  | 'id'
  | 'requestId'
  | 'missionIndex'
  | 'queryUrl'
  | 'account'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type MissionValidated = {
  id: Scalars['Bytes']['output'];
  requestId: Scalars['Bytes']['output'];
  missionIndex: Scalars['Int']['output'];
  isValid: Scalars['BigInt']['output'];
  success: Scalars['Boolean']['output'];
  account: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type MissionValidated_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  requestId?: InputMaybe<Scalars['Bytes']['input']>;
  requestId_not?: InputMaybe<Scalars['Bytes']['input']>;
  requestId_gt?: InputMaybe<Scalars['Bytes']['input']>;
  requestId_lt?: InputMaybe<Scalars['Bytes']['input']>;
  requestId_gte?: InputMaybe<Scalars['Bytes']['input']>;
  requestId_lte?: InputMaybe<Scalars['Bytes']['input']>;
  requestId_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  requestId_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  requestId_contains?: InputMaybe<Scalars['Bytes']['input']>;
  requestId_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  missionIndex?: InputMaybe<Scalars['Int']['input']>;
  missionIndex_not?: InputMaybe<Scalars['Int']['input']>;
  missionIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  missionIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  missionIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  missionIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  missionIndex_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  missionIndex_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  isValid?: InputMaybe<Scalars['BigInt']['input']>;
  isValid_not?: InputMaybe<Scalars['BigInt']['input']>;
  isValid_gt?: InputMaybe<Scalars['BigInt']['input']>;
  isValid_lt?: InputMaybe<Scalars['BigInt']['input']>;
  isValid_gte?: InputMaybe<Scalars['BigInt']['input']>;
  isValid_lte?: InputMaybe<Scalars['BigInt']['input']>;
  isValid_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  isValid_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  success?: InputMaybe<Scalars['Boolean']['input']>;
  success_not?: InputMaybe<Scalars['Boolean']['input']>;
  success_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  success_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  account?: InputMaybe<Scalars['Bytes']['input']>;
  account_not?: InputMaybe<Scalars['Bytes']['input']>;
  account_gt?: InputMaybe<Scalars['Bytes']['input']>;
  account_lt?: InputMaybe<Scalars['Bytes']['input']>;
  account_gte?: InputMaybe<Scalars['Bytes']['input']>;
  account_lte?: InputMaybe<Scalars['Bytes']['input']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MissionValidated_filter>>>;
  or?: InputMaybe<Array<InputMaybe<MissionValidated_filter>>>;
};

export type MissionValidated_orderBy =
  | 'id'
  | 'requestId'
  | 'missionIndex'
  | 'isValid'
  | 'success'
  | 'account'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type OwnershipTransferred = {
  id: Scalars['Bytes']['output'];
  previousOwner: Scalars['Bytes']['output'];
  newOwner: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type OwnershipTransferred_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_not?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  previousOwner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  previousOwner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_not?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newOwner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newOwner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OwnershipTransferred_filter>>>;
  or?: InputMaybe<Array<InputMaybe<OwnershipTransferred_filter>>>;
};

export type OwnershipTransferred_orderBy =
  | 'id'
  | 'previousOwner'
  | 'newOwner'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type Query = {
  user?: Maybe<User>;
  users: Array<User>;
  credential?: Maybe<Credential>;
  credentials: Array<Credential>;
  adminAdded?: Maybe<AdminAdded>;
  adminAddeds: Array<AdminAdded>;
  adminRemoved?: Maybe<AdminRemoved>;
  adminRemoveds: Array<AdminRemoved>;
  approvalForAll?: Maybe<ApprovalForAll>;
  approvalForAlls: Array<ApprovalForAll>;
  credentialMinted?: Maybe<CredentialMinted>;
  credentialMinteds: Array<CredentialMinted>;
  credentialSet?: Maybe<CredentialSet>;
  credentialSets: Array<CredentialSet>;
  minterAdded?: Maybe<MinterAdded>;
  minterAddeds: Array<MinterAdded>;
  minterRemoved?: Maybe<MinterRemoved>;
  minterRemoveds: Array<MinterRemoved>;
  ownershipTransferred?: Maybe<OwnershipTransferred>;
  ownershipTransferreds: Array<OwnershipTransferred>;
  roleAdminChanged?: Maybe<RoleAdminChanged>;
  roleAdminChangeds: Array<RoleAdminChanged>;
  roleGranted?: Maybe<RoleGranted>;
  roleGranteds: Array<RoleGranted>;
  roleRevoked?: Maybe<RoleRevoked>;
  roleRevokeds: Array<RoleRevoked>;
  transferBatch?: Maybe<TransferBatch>;
  transferBatches: Array<TransferBatch>;
  transferSingle?: Maybe<TransferSingle>;
  transferSingles: Array<TransferSingle>;
  uri?: Maybe<URI>;
  uris: Array<URI>;
  withdraw?: Maybe<Withdraw>;
  withdraws: Array<Withdraw>;
  basecampAddressSet?: Maybe<BasecampAddressSet>;
  basecampAddressSets: Array<BasecampAddressSet>;
  donIdSet?: Maybe<DonIdSet>;
  donIdSets: Array<DonIdSet>;
  functionsRouterAddressSet?: Maybe<FunctionsRouterAddressSet>;
  functionsRouterAddressSets: Array<FunctionsRouterAddressSet>;
  missionSubmitted?: Maybe<MissionSubmitted>;
  missionSubmitteds: Array<MissionSubmitted>;
  missionValidated?: Maybe<MissionValidated>;
  missionValidateds: Array<MissionValidated>;
  validatorOwnershipTransferred?: Maybe<ValidatorOwnershipTransferred>;
  validatorOwnershipTransferreds: Array<ValidatorOwnershipTransferred>;
  requestFulfilled?: Maybe<RequestFulfilled>;
  requestFulfilleds: Array<RequestFulfilled>;
  requestSent?: Maybe<RequestSent>;
  requestSents: Array<RequestSent>;
  validatorWithdraw?: Maybe<ValidatorWithdraw>;
  validatorWithdraws: Array<ValidatorWithdraw>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryuserArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryusersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycredentialArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycredentialsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Credential_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Credential_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryadminAddedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryadminAddedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdminAdded_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AdminAdded_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryadminRemovedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryadminRemovedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdminRemoved_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AdminRemoved_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryapprovalForAllArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryapprovalForAllsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ApprovalForAll_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ApprovalForAll_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycredentialMintedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycredentialMintedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CredentialMinted_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CredentialMinted_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycredentialSetArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycredentialSetsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CredentialSet_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CredentialSet_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryminterAddedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryminterAddedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MinterAdded_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MinterAdded_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryminterRemovedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryminterRemovedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MinterRemoved_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MinterRemoved_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryownershipTransferredArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryownershipTransferredsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OwnershipTransferred_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<OwnershipTransferred_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryroleAdminChangedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryroleAdminChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RoleAdminChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RoleAdminChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryroleGrantedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryroleGrantedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RoleGranted_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RoleGranted_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryroleRevokedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryroleRevokedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RoleRevoked_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RoleRevoked_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransferBatchArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransferBatchesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TransferBatch_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TransferBatch_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransferSingleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransferSinglesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TransferSingle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TransferSingle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuriArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryurisArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<URI_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<URI_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerywithdrawArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerywithdrawsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Withdraw_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Withdraw_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybasecampAddressSetArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybasecampAddressSetsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BasecampAddressSet_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BasecampAddressSet_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydonIdSetArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydonIdSetsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DonIdSet_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DonIdSet_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfunctionsRouterAddressSetArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfunctionsRouterAddressSetsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FunctionsRouterAddressSet_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FunctionsRouterAddressSet_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymissionSubmittedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymissionSubmittedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MissionSubmitted_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MissionSubmitted_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymissionValidatedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymissionValidatedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MissionValidated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MissionValidated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvalidatorOwnershipTransferredArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvalidatorOwnershipTransferredsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ValidatorOwnershipTransferred_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ValidatorOwnershipTransferred_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrequestFulfilledArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrequestFulfilledsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RequestFulfilled_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RequestFulfilled_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrequestSentArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrequestSentsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RequestSent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RequestSent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvalidatorWithdrawArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvalidatorWithdrawsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ValidatorWithdraw_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ValidatorWithdraw_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type RequestFulfilled = {
  id: Scalars['Bytes']['output'];
  Validator_id: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type RequestFulfilled_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  Validator_id?: InputMaybe<Scalars['Bytes']['input']>;
  Validator_id_not?: InputMaybe<Scalars['Bytes']['input']>;
  Validator_id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  Validator_id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  Validator_id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  Validator_id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  Validator_id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  Validator_id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  Validator_id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  Validator_id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RequestFulfilled_filter>>>;
  or?: InputMaybe<Array<InputMaybe<RequestFulfilled_filter>>>;
};

export type RequestFulfilled_orderBy =
  | 'id'
  | 'Validator_id'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type RequestSent = {
  id: Scalars['Bytes']['output'];
  Validator_id: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type RequestSent_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  Validator_id?: InputMaybe<Scalars['Bytes']['input']>;
  Validator_id_not?: InputMaybe<Scalars['Bytes']['input']>;
  Validator_id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  Validator_id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  Validator_id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  Validator_id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  Validator_id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  Validator_id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  Validator_id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  Validator_id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RequestSent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<RequestSent_filter>>>;
};

export type RequestSent_orderBy =
  | 'id'
  | 'Validator_id'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type RoleAdminChanged = {
  id: Scalars['Bytes']['output'];
  role: Scalars['Bytes']['output'];
  previousAdminRole: Scalars['Bytes']['output'];
  newAdminRole: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type RoleAdminChanged_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  role?: InputMaybe<Scalars['Bytes']['input']>;
  role_not?: InputMaybe<Scalars['Bytes']['input']>;
  role_gt?: InputMaybe<Scalars['Bytes']['input']>;
  role_lt?: InputMaybe<Scalars['Bytes']['input']>;
  role_gte?: InputMaybe<Scalars['Bytes']['input']>;
  role_lte?: InputMaybe<Scalars['Bytes']['input']>;
  role_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  role_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  role_contains?: InputMaybe<Scalars['Bytes']['input']>;
  role_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  previousAdminRole?: InputMaybe<Scalars['Bytes']['input']>;
  previousAdminRole_not?: InputMaybe<Scalars['Bytes']['input']>;
  previousAdminRole_gt?: InputMaybe<Scalars['Bytes']['input']>;
  previousAdminRole_lt?: InputMaybe<Scalars['Bytes']['input']>;
  previousAdminRole_gte?: InputMaybe<Scalars['Bytes']['input']>;
  previousAdminRole_lte?: InputMaybe<Scalars['Bytes']['input']>;
  previousAdminRole_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  previousAdminRole_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  previousAdminRole_contains?: InputMaybe<Scalars['Bytes']['input']>;
  previousAdminRole_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newAdminRole?: InputMaybe<Scalars['Bytes']['input']>;
  newAdminRole_not?: InputMaybe<Scalars['Bytes']['input']>;
  newAdminRole_gt?: InputMaybe<Scalars['Bytes']['input']>;
  newAdminRole_lt?: InputMaybe<Scalars['Bytes']['input']>;
  newAdminRole_gte?: InputMaybe<Scalars['Bytes']['input']>;
  newAdminRole_lte?: InputMaybe<Scalars['Bytes']['input']>;
  newAdminRole_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newAdminRole_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newAdminRole_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newAdminRole_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RoleAdminChanged_filter>>>;
  or?: InputMaybe<Array<InputMaybe<RoleAdminChanged_filter>>>;
};

export type RoleAdminChanged_orderBy =
  | 'id'
  | 'role'
  | 'previousAdminRole'
  | 'newAdminRole'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type RoleGranted = {
  id: Scalars['Bytes']['output'];
  role: Scalars['Bytes']['output'];
  account: Scalars['Bytes']['output'];
  sender: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type RoleGranted_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  role?: InputMaybe<Scalars['Bytes']['input']>;
  role_not?: InputMaybe<Scalars['Bytes']['input']>;
  role_gt?: InputMaybe<Scalars['Bytes']['input']>;
  role_lt?: InputMaybe<Scalars['Bytes']['input']>;
  role_gte?: InputMaybe<Scalars['Bytes']['input']>;
  role_lte?: InputMaybe<Scalars['Bytes']['input']>;
  role_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  role_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  role_contains?: InputMaybe<Scalars['Bytes']['input']>;
  role_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account?: InputMaybe<Scalars['Bytes']['input']>;
  account_not?: InputMaybe<Scalars['Bytes']['input']>;
  account_gt?: InputMaybe<Scalars['Bytes']['input']>;
  account_lt?: InputMaybe<Scalars['Bytes']['input']>;
  account_gte?: InputMaybe<Scalars['Bytes']['input']>;
  account_lte?: InputMaybe<Scalars['Bytes']['input']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_lt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_lte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RoleGranted_filter>>>;
  or?: InputMaybe<Array<InputMaybe<RoleGranted_filter>>>;
};

export type RoleGranted_orderBy =
  | 'id'
  | 'role'
  | 'account'
  | 'sender'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type RoleRevoked = {
  id: Scalars['Bytes']['output'];
  role: Scalars['Bytes']['output'];
  account: Scalars['Bytes']['output'];
  sender: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type RoleRevoked_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  role?: InputMaybe<Scalars['Bytes']['input']>;
  role_not?: InputMaybe<Scalars['Bytes']['input']>;
  role_gt?: InputMaybe<Scalars['Bytes']['input']>;
  role_lt?: InputMaybe<Scalars['Bytes']['input']>;
  role_gte?: InputMaybe<Scalars['Bytes']['input']>;
  role_lte?: InputMaybe<Scalars['Bytes']['input']>;
  role_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  role_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  role_contains?: InputMaybe<Scalars['Bytes']['input']>;
  role_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account?: InputMaybe<Scalars['Bytes']['input']>;
  account_not?: InputMaybe<Scalars['Bytes']['input']>;
  account_gt?: InputMaybe<Scalars['Bytes']['input']>;
  account_lt?: InputMaybe<Scalars['Bytes']['input']>;
  account_gte?: InputMaybe<Scalars['Bytes']['input']>;
  account_lte?: InputMaybe<Scalars['Bytes']['input']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_lt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_lte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RoleRevoked_filter>>>;
  or?: InputMaybe<Array<InputMaybe<RoleRevoked_filter>>>;
};

export type RoleRevoked_orderBy =
  | 'id'
  | 'role'
  | 'account'
  | 'sender'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type Subscription = {
  user?: Maybe<User>;
  users: Array<User>;
  credential?: Maybe<Credential>;
  credentials: Array<Credential>;
  adminAdded?: Maybe<AdminAdded>;
  adminAddeds: Array<AdminAdded>;
  adminRemoved?: Maybe<AdminRemoved>;
  adminRemoveds: Array<AdminRemoved>;
  approvalForAll?: Maybe<ApprovalForAll>;
  approvalForAlls: Array<ApprovalForAll>;
  credentialMinted?: Maybe<CredentialMinted>;
  credentialMinteds: Array<CredentialMinted>;
  credentialSet?: Maybe<CredentialSet>;
  credentialSets: Array<CredentialSet>;
  minterAdded?: Maybe<MinterAdded>;
  minterAddeds: Array<MinterAdded>;
  minterRemoved?: Maybe<MinterRemoved>;
  minterRemoveds: Array<MinterRemoved>;
  ownershipTransferred?: Maybe<OwnershipTransferred>;
  ownershipTransferreds: Array<OwnershipTransferred>;
  roleAdminChanged?: Maybe<RoleAdminChanged>;
  roleAdminChangeds: Array<RoleAdminChanged>;
  roleGranted?: Maybe<RoleGranted>;
  roleGranteds: Array<RoleGranted>;
  roleRevoked?: Maybe<RoleRevoked>;
  roleRevokeds: Array<RoleRevoked>;
  transferBatch?: Maybe<TransferBatch>;
  transferBatches: Array<TransferBatch>;
  transferSingle?: Maybe<TransferSingle>;
  transferSingles: Array<TransferSingle>;
  uri?: Maybe<URI>;
  uris: Array<URI>;
  withdraw?: Maybe<Withdraw>;
  withdraws: Array<Withdraw>;
  basecampAddressSet?: Maybe<BasecampAddressSet>;
  basecampAddressSets: Array<BasecampAddressSet>;
  donIdSet?: Maybe<DonIdSet>;
  donIdSets: Array<DonIdSet>;
  functionsRouterAddressSet?: Maybe<FunctionsRouterAddressSet>;
  functionsRouterAddressSets: Array<FunctionsRouterAddressSet>;
  missionSubmitted?: Maybe<MissionSubmitted>;
  missionSubmitteds: Array<MissionSubmitted>;
  missionValidated?: Maybe<MissionValidated>;
  missionValidateds: Array<MissionValidated>;
  validatorOwnershipTransferred?: Maybe<ValidatorOwnershipTransferred>;
  validatorOwnershipTransferreds: Array<ValidatorOwnershipTransferred>;
  requestFulfilled?: Maybe<RequestFulfilled>;
  requestFulfilleds: Array<RequestFulfilled>;
  requestSent?: Maybe<RequestSent>;
  requestSents: Array<RequestSent>;
  validatorWithdraw?: Maybe<ValidatorWithdraw>;
  validatorWithdraws: Array<ValidatorWithdraw>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionuserArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionusersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncredentialArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncredentialsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Credential_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Credential_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionadminAddedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionadminAddedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdminAdded_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AdminAdded_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionadminRemovedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionadminRemovedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdminRemoved_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AdminRemoved_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionapprovalForAllArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionapprovalForAllsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ApprovalForAll_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ApprovalForAll_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncredentialMintedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncredentialMintedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CredentialMinted_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CredentialMinted_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncredentialSetArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncredentialSetsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CredentialSet_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CredentialSet_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionminterAddedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionminterAddedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MinterAdded_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MinterAdded_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionminterRemovedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionminterRemovedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MinterRemoved_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MinterRemoved_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionownershipTransferredArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionownershipTransferredsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OwnershipTransferred_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<OwnershipTransferred_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionroleAdminChangedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionroleAdminChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RoleAdminChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RoleAdminChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionroleGrantedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionroleGrantedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RoleGranted_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RoleGranted_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionroleRevokedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionroleRevokedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RoleRevoked_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RoleRevoked_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransferBatchArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransferBatchesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TransferBatch_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TransferBatch_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransferSingleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransferSinglesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TransferSingle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TransferSingle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuriArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionurisArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<URI_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<URI_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionwithdrawArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionwithdrawsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Withdraw_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Withdraw_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbasecampAddressSetArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbasecampAddressSetsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BasecampAddressSet_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BasecampAddressSet_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondonIdSetArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondonIdSetsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DonIdSet_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DonIdSet_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfunctionsRouterAddressSetArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfunctionsRouterAddressSetsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FunctionsRouterAddressSet_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FunctionsRouterAddressSet_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmissionSubmittedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmissionSubmittedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MissionSubmitted_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MissionSubmitted_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmissionValidatedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmissionValidatedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MissionValidated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MissionValidated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvalidatorOwnershipTransferredArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvalidatorOwnershipTransferredsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ValidatorOwnershipTransferred_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ValidatorOwnershipTransferred_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrequestFulfilledArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrequestFulfilledsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RequestFulfilled_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RequestFulfilled_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrequestSentArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrequestSentsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RequestSent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RequestSent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvalidatorWithdrawArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvalidatorWithdrawsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ValidatorWithdraw_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ValidatorWithdraw_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type TransferBatch = {
  id: Scalars['Bytes']['output'];
  operator: Scalars['Bytes']['output'];
  from: Scalars['Bytes']['output'];
  to: Scalars['Bytes']['output'];
  ids: Array<Scalars['BigInt']['output']>;
  values: Array<Scalars['BigInt']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type TransferBatch_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  operator?: InputMaybe<Scalars['Bytes']['input']>;
  operator_not?: InputMaybe<Scalars['Bytes']['input']>;
  operator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  operator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  operator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  operator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  operator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  operator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  operator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  operator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from?: InputMaybe<Scalars['Bytes']['input']>;
  from_not?: InputMaybe<Scalars['Bytes']['input']>;
  from_gt?: InputMaybe<Scalars['Bytes']['input']>;
  from_lt?: InputMaybe<Scalars['Bytes']['input']>;
  from_gte?: InputMaybe<Scalars['Bytes']['input']>;
  from_lte?: InputMaybe<Scalars['Bytes']['input']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to?: InputMaybe<Scalars['Bytes']['input']>;
  to_not?: InputMaybe<Scalars['Bytes']['input']>;
  to_gt?: InputMaybe<Scalars['Bytes']['input']>;
  to_lt?: InputMaybe<Scalars['Bytes']['input']>;
  to_gte?: InputMaybe<Scalars['Bytes']['input']>;
  to_lte?: InputMaybe<Scalars['Bytes']['input']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  to_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  ids?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  ids_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  ids_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  ids_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  ids_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  ids_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  values?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  values_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  values_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  values_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  values_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  values_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TransferBatch_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TransferBatch_filter>>>;
};

export type TransferBatch_orderBy =
  | 'id'
  | 'operator'
  | 'from'
  | 'to'
  | 'ids'
  | 'values'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type TransferSingle = {
  id: Scalars['Bytes']['output'];
  operator: Scalars['Bytes']['output'];
  from: Scalars['Bytes']['output'];
  to: Scalars['Bytes']['output'];
  Basecamp_id: Scalars['BigInt']['output'];
  value: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type TransferSingle_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  operator?: InputMaybe<Scalars['Bytes']['input']>;
  operator_not?: InputMaybe<Scalars['Bytes']['input']>;
  operator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  operator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  operator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  operator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  operator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  operator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  operator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  operator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from?: InputMaybe<Scalars['Bytes']['input']>;
  from_not?: InputMaybe<Scalars['Bytes']['input']>;
  from_gt?: InputMaybe<Scalars['Bytes']['input']>;
  from_lt?: InputMaybe<Scalars['Bytes']['input']>;
  from_gte?: InputMaybe<Scalars['Bytes']['input']>;
  from_lte?: InputMaybe<Scalars['Bytes']['input']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to?: InputMaybe<Scalars['Bytes']['input']>;
  to_not?: InputMaybe<Scalars['Bytes']['input']>;
  to_gt?: InputMaybe<Scalars['Bytes']['input']>;
  to_lt?: InputMaybe<Scalars['Bytes']['input']>;
  to_gte?: InputMaybe<Scalars['Bytes']['input']>;
  to_lte?: InputMaybe<Scalars['Bytes']['input']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  to_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  Basecamp_id?: InputMaybe<Scalars['BigInt']['input']>;
  Basecamp_id_not?: InputMaybe<Scalars['BigInt']['input']>;
  Basecamp_id_gt?: InputMaybe<Scalars['BigInt']['input']>;
  Basecamp_id_lt?: InputMaybe<Scalars['BigInt']['input']>;
  Basecamp_id_gte?: InputMaybe<Scalars['BigInt']['input']>;
  Basecamp_id_lte?: InputMaybe<Scalars['BigInt']['input']>;
  Basecamp_id_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  Basecamp_id_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  value?: InputMaybe<Scalars['BigInt']['input']>;
  value_not?: InputMaybe<Scalars['BigInt']['input']>;
  value_gt?: InputMaybe<Scalars['BigInt']['input']>;
  value_lt?: InputMaybe<Scalars['BigInt']['input']>;
  value_gte?: InputMaybe<Scalars['BigInt']['input']>;
  value_lte?: InputMaybe<Scalars['BigInt']['input']>;
  value_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  value_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TransferSingle_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TransferSingle_filter>>>;
};

export type TransferSingle_orderBy =
  | 'id'
  | 'operator'
  | 'from'
  | 'to'
  | 'Basecamp_id'
  | 'value'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type URI = {
  id: Scalars['Bytes']['output'];
  value: Scalars['String']['output'];
  Basecamp_id: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type URI_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  value_not?: InputMaybe<Scalars['String']['input']>;
  value_gt?: InputMaybe<Scalars['String']['input']>;
  value_lt?: InputMaybe<Scalars['String']['input']>;
  value_gte?: InputMaybe<Scalars['String']['input']>;
  value_lte?: InputMaybe<Scalars['String']['input']>;
  value_in?: InputMaybe<Array<Scalars['String']['input']>>;
  value_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  value_contains?: InputMaybe<Scalars['String']['input']>;
  value_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  value_not_contains?: InputMaybe<Scalars['String']['input']>;
  value_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  value_starts_with?: InputMaybe<Scalars['String']['input']>;
  value_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  value_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  value_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  value_ends_with?: InputMaybe<Scalars['String']['input']>;
  value_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  value_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  value_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  Basecamp_id?: InputMaybe<Scalars['BigInt']['input']>;
  Basecamp_id_not?: InputMaybe<Scalars['BigInt']['input']>;
  Basecamp_id_gt?: InputMaybe<Scalars['BigInt']['input']>;
  Basecamp_id_lt?: InputMaybe<Scalars['BigInt']['input']>;
  Basecamp_id_gte?: InputMaybe<Scalars['BigInt']['input']>;
  Basecamp_id_lte?: InputMaybe<Scalars['BigInt']['input']>;
  Basecamp_id_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  Basecamp_id_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<URI_filter>>>;
  or?: InputMaybe<Array<InputMaybe<URI_filter>>>;
};

export type URI_orderBy =
  | 'id'
  | 'value'
  | 'Basecamp_id'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type User = {
  id: Scalars['Bytes']['output'];
  address: Scalars['Bytes']['output'];
  credentials?: Maybe<Array<CredentialMinted>>;
  rank: Scalars['BigInt']['output'];
  lastCredentialMinted: Scalars['BigInt']['output'];
  blockNumber?: Maybe<Scalars['BigInt']['output']>;
  blockTimestamp?: Maybe<Scalars['BigInt']['output']>;
  transactionHash?: Maybe<Scalars['Bytes']['output']>;
};


export type UsercredentialsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CredentialMinted_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CredentialMinted_filter>;
};

export type User_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address?: InputMaybe<Scalars['Bytes']['input']>;
  address_not?: InputMaybe<Scalars['Bytes']['input']>;
  address_gt?: InputMaybe<Scalars['Bytes']['input']>;
  address_lt?: InputMaybe<Scalars['Bytes']['input']>;
  address_gte?: InputMaybe<Scalars['Bytes']['input']>;
  address_lte?: InputMaybe<Scalars['Bytes']['input']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  address_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  credentials_?: InputMaybe<CredentialMinted_filter>;
  rank?: InputMaybe<Scalars['BigInt']['input']>;
  rank_not?: InputMaybe<Scalars['BigInt']['input']>;
  rank_gt?: InputMaybe<Scalars['BigInt']['input']>;
  rank_lt?: InputMaybe<Scalars['BigInt']['input']>;
  rank_gte?: InputMaybe<Scalars['BigInt']['input']>;
  rank_lte?: InputMaybe<Scalars['BigInt']['input']>;
  rank_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rank_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastCredentialMinted?: InputMaybe<Scalars['BigInt']['input']>;
  lastCredentialMinted_not?: InputMaybe<Scalars['BigInt']['input']>;
  lastCredentialMinted_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastCredentialMinted_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastCredentialMinted_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastCredentialMinted_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastCredentialMinted_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastCredentialMinted_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<User_filter>>>;
  or?: InputMaybe<Array<InputMaybe<User_filter>>>;
};

export type User_orderBy =
  | 'id'
  | 'address'
  | 'credentials'
  | 'rank'
  | 'lastCredentialMinted'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type ValidatorOwnershipTransferred = {
  id: Scalars['Bytes']['output'];
  previousOwner: Scalars['Bytes']['output'];
  newOwner: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type ValidatorOwnershipTransferred_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_not?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  previousOwner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  previousOwner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_not?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newOwner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newOwner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ValidatorOwnershipTransferred_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ValidatorOwnershipTransferred_filter>>>;
};

export type ValidatorOwnershipTransferred_orderBy =
  | 'id'
  | 'previousOwner'
  | 'newOwner'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type ValidatorWithdraw = {
  id: Scalars['Bytes']['output'];
  amount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type ValidatorWithdraw_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ValidatorWithdraw_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ValidatorWithdraw_filter>>>;
};

export type ValidatorWithdraw_orderBy =
  | 'id'
  | 'amount'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type Withdraw = {
  id: Scalars['Bytes']['output'];
  amount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type Withdraw_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Withdraw_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Withdraw_filter>>>;
};

export type Withdraw_orderBy =
  | 'id'
  | 'amount'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Bytes']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  user: InContextSdkMethod<Query['user'], QueryuserArgs, MeshContext>,
  /** null **/
  users: InContextSdkMethod<Query['users'], QueryusersArgs, MeshContext>,
  /** null **/
  credential: InContextSdkMethod<Query['credential'], QuerycredentialArgs, MeshContext>,
  /** null **/
  credentials: InContextSdkMethod<Query['credentials'], QuerycredentialsArgs, MeshContext>,
  /** null **/
  adminAdded: InContextSdkMethod<Query['adminAdded'], QueryadminAddedArgs, MeshContext>,
  /** null **/
  adminAddeds: InContextSdkMethod<Query['adminAddeds'], QueryadminAddedsArgs, MeshContext>,
  /** null **/
  adminRemoved: InContextSdkMethod<Query['adminRemoved'], QueryadminRemovedArgs, MeshContext>,
  /** null **/
  adminRemoveds: InContextSdkMethod<Query['adminRemoveds'], QueryadminRemovedsArgs, MeshContext>,
  /** null **/
  approvalForAll: InContextSdkMethod<Query['approvalForAll'], QueryapprovalForAllArgs, MeshContext>,
  /** null **/
  approvalForAlls: InContextSdkMethod<Query['approvalForAlls'], QueryapprovalForAllsArgs, MeshContext>,
  /** null **/
  credentialMinted: InContextSdkMethod<Query['credentialMinted'], QuerycredentialMintedArgs, MeshContext>,
  /** null **/
  credentialMinteds: InContextSdkMethod<Query['credentialMinteds'], QuerycredentialMintedsArgs, MeshContext>,
  /** null **/
  credentialSet: InContextSdkMethod<Query['credentialSet'], QuerycredentialSetArgs, MeshContext>,
  /** null **/
  credentialSets: InContextSdkMethod<Query['credentialSets'], QuerycredentialSetsArgs, MeshContext>,
  /** null **/
  minterAdded: InContextSdkMethod<Query['minterAdded'], QueryminterAddedArgs, MeshContext>,
  /** null **/
  minterAddeds: InContextSdkMethod<Query['minterAddeds'], QueryminterAddedsArgs, MeshContext>,
  /** null **/
  minterRemoved: InContextSdkMethod<Query['minterRemoved'], QueryminterRemovedArgs, MeshContext>,
  /** null **/
  minterRemoveds: InContextSdkMethod<Query['minterRemoveds'], QueryminterRemovedsArgs, MeshContext>,
  /** null **/
  ownershipTransferred: InContextSdkMethod<Query['ownershipTransferred'], QueryownershipTransferredArgs, MeshContext>,
  /** null **/
  ownershipTransferreds: InContextSdkMethod<Query['ownershipTransferreds'], QueryownershipTransferredsArgs, MeshContext>,
  /** null **/
  roleAdminChanged: InContextSdkMethod<Query['roleAdminChanged'], QueryroleAdminChangedArgs, MeshContext>,
  /** null **/
  roleAdminChangeds: InContextSdkMethod<Query['roleAdminChangeds'], QueryroleAdminChangedsArgs, MeshContext>,
  /** null **/
  roleGranted: InContextSdkMethod<Query['roleGranted'], QueryroleGrantedArgs, MeshContext>,
  /** null **/
  roleGranteds: InContextSdkMethod<Query['roleGranteds'], QueryroleGrantedsArgs, MeshContext>,
  /** null **/
  roleRevoked: InContextSdkMethod<Query['roleRevoked'], QueryroleRevokedArgs, MeshContext>,
  /** null **/
  roleRevokeds: InContextSdkMethod<Query['roleRevokeds'], QueryroleRevokedsArgs, MeshContext>,
  /** null **/
  transferBatch: InContextSdkMethod<Query['transferBatch'], QuerytransferBatchArgs, MeshContext>,
  /** null **/
  transferBatches: InContextSdkMethod<Query['transferBatches'], QuerytransferBatchesArgs, MeshContext>,
  /** null **/
  transferSingle: InContextSdkMethod<Query['transferSingle'], QuerytransferSingleArgs, MeshContext>,
  /** null **/
  transferSingles: InContextSdkMethod<Query['transferSingles'], QuerytransferSinglesArgs, MeshContext>,
  /** null **/
  uri: InContextSdkMethod<Query['uri'], QueryuriArgs, MeshContext>,
  /** null **/
  uris: InContextSdkMethod<Query['uris'], QueryurisArgs, MeshContext>,
  /** null **/
  withdraw: InContextSdkMethod<Query['withdraw'], QuerywithdrawArgs, MeshContext>,
  /** null **/
  withdraws: InContextSdkMethod<Query['withdraws'], QuerywithdrawsArgs, MeshContext>,
  /** null **/
  basecampAddressSet: InContextSdkMethod<Query['basecampAddressSet'], QuerybasecampAddressSetArgs, MeshContext>,
  /** null **/
  basecampAddressSets: InContextSdkMethod<Query['basecampAddressSets'], QuerybasecampAddressSetsArgs, MeshContext>,
  /** null **/
  donIdSet: InContextSdkMethod<Query['donIdSet'], QuerydonIdSetArgs, MeshContext>,
  /** null **/
  donIdSets: InContextSdkMethod<Query['donIdSets'], QuerydonIdSetsArgs, MeshContext>,
  /** null **/
  functionsRouterAddressSet: InContextSdkMethod<Query['functionsRouterAddressSet'], QueryfunctionsRouterAddressSetArgs, MeshContext>,
  /** null **/
  functionsRouterAddressSets: InContextSdkMethod<Query['functionsRouterAddressSets'], QueryfunctionsRouterAddressSetsArgs, MeshContext>,
  /** null **/
  missionSubmitted: InContextSdkMethod<Query['missionSubmitted'], QuerymissionSubmittedArgs, MeshContext>,
  /** null **/
  missionSubmitteds: InContextSdkMethod<Query['missionSubmitteds'], QuerymissionSubmittedsArgs, MeshContext>,
  /** null **/
  missionValidated: InContextSdkMethod<Query['missionValidated'], QuerymissionValidatedArgs, MeshContext>,
  /** null **/
  missionValidateds: InContextSdkMethod<Query['missionValidateds'], QuerymissionValidatedsArgs, MeshContext>,
  /** null **/
  validatorOwnershipTransferred: InContextSdkMethod<Query['validatorOwnershipTransferred'], QueryvalidatorOwnershipTransferredArgs, MeshContext>,
  /** null **/
  validatorOwnershipTransferreds: InContextSdkMethod<Query['validatorOwnershipTransferreds'], QueryvalidatorOwnershipTransferredsArgs, MeshContext>,
  /** null **/
  requestFulfilled: InContextSdkMethod<Query['requestFulfilled'], QueryrequestFulfilledArgs, MeshContext>,
  /** null **/
  requestFulfilleds: InContextSdkMethod<Query['requestFulfilleds'], QueryrequestFulfilledsArgs, MeshContext>,
  /** null **/
  requestSent: InContextSdkMethod<Query['requestSent'], QueryrequestSentArgs, MeshContext>,
  /** null **/
  requestSents: InContextSdkMethod<Query['requestSents'], QueryrequestSentsArgs, MeshContext>,
  /** null **/
  validatorWithdraw: InContextSdkMethod<Query['validatorWithdraw'], QueryvalidatorWithdrawArgs, MeshContext>,
  /** null **/
  validatorWithdraws: InContextSdkMethod<Query['validatorWithdraws'], QueryvalidatorWithdrawsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  user: InContextSdkMethod<Subscription['user'], SubscriptionuserArgs, MeshContext>,
  /** null **/
  users: InContextSdkMethod<Subscription['users'], SubscriptionusersArgs, MeshContext>,
  /** null **/
  credential: InContextSdkMethod<Subscription['credential'], SubscriptioncredentialArgs, MeshContext>,
  /** null **/
  credentials: InContextSdkMethod<Subscription['credentials'], SubscriptioncredentialsArgs, MeshContext>,
  /** null **/
  adminAdded: InContextSdkMethod<Subscription['adminAdded'], SubscriptionadminAddedArgs, MeshContext>,
  /** null **/
  adminAddeds: InContextSdkMethod<Subscription['adminAddeds'], SubscriptionadminAddedsArgs, MeshContext>,
  /** null **/
  adminRemoved: InContextSdkMethod<Subscription['adminRemoved'], SubscriptionadminRemovedArgs, MeshContext>,
  /** null **/
  adminRemoveds: InContextSdkMethod<Subscription['adminRemoveds'], SubscriptionadminRemovedsArgs, MeshContext>,
  /** null **/
  approvalForAll: InContextSdkMethod<Subscription['approvalForAll'], SubscriptionapprovalForAllArgs, MeshContext>,
  /** null **/
  approvalForAlls: InContextSdkMethod<Subscription['approvalForAlls'], SubscriptionapprovalForAllsArgs, MeshContext>,
  /** null **/
  credentialMinted: InContextSdkMethod<Subscription['credentialMinted'], SubscriptioncredentialMintedArgs, MeshContext>,
  /** null **/
  credentialMinteds: InContextSdkMethod<Subscription['credentialMinteds'], SubscriptioncredentialMintedsArgs, MeshContext>,
  /** null **/
  credentialSet: InContextSdkMethod<Subscription['credentialSet'], SubscriptioncredentialSetArgs, MeshContext>,
  /** null **/
  credentialSets: InContextSdkMethod<Subscription['credentialSets'], SubscriptioncredentialSetsArgs, MeshContext>,
  /** null **/
  minterAdded: InContextSdkMethod<Subscription['minterAdded'], SubscriptionminterAddedArgs, MeshContext>,
  /** null **/
  minterAddeds: InContextSdkMethod<Subscription['minterAddeds'], SubscriptionminterAddedsArgs, MeshContext>,
  /** null **/
  minterRemoved: InContextSdkMethod<Subscription['minterRemoved'], SubscriptionminterRemovedArgs, MeshContext>,
  /** null **/
  minterRemoveds: InContextSdkMethod<Subscription['minterRemoveds'], SubscriptionminterRemovedsArgs, MeshContext>,
  /** null **/
  ownershipTransferred: InContextSdkMethod<Subscription['ownershipTransferred'], SubscriptionownershipTransferredArgs, MeshContext>,
  /** null **/
  ownershipTransferreds: InContextSdkMethod<Subscription['ownershipTransferreds'], SubscriptionownershipTransferredsArgs, MeshContext>,
  /** null **/
  roleAdminChanged: InContextSdkMethod<Subscription['roleAdminChanged'], SubscriptionroleAdminChangedArgs, MeshContext>,
  /** null **/
  roleAdminChangeds: InContextSdkMethod<Subscription['roleAdminChangeds'], SubscriptionroleAdminChangedsArgs, MeshContext>,
  /** null **/
  roleGranted: InContextSdkMethod<Subscription['roleGranted'], SubscriptionroleGrantedArgs, MeshContext>,
  /** null **/
  roleGranteds: InContextSdkMethod<Subscription['roleGranteds'], SubscriptionroleGrantedsArgs, MeshContext>,
  /** null **/
  roleRevoked: InContextSdkMethod<Subscription['roleRevoked'], SubscriptionroleRevokedArgs, MeshContext>,
  /** null **/
  roleRevokeds: InContextSdkMethod<Subscription['roleRevokeds'], SubscriptionroleRevokedsArgs, MeshContext>,
  /** null **/
  transferBatch: InContextSdkMethod<Subscription['transferBatch'], SubscriptiontransferBatchArgs, MeshContext>,
  /** null **/
  transferBatches: InContextSdkMethod<Subscription['transferBatches'], SubscriptiontransferBatchesArgs, MeshContext>,
  /** null **/
  transferSingle: InContextSdkMethod<Subscription['transferSingle'], SubscriptiontransferSingleArgs, MeshContext>,
  /** null **/
  transferSingles: InContextSdkMethod<Subscription['transferSingles'], SubscriptiontransferSinglesArgs, MeshContext>,
  /** null **/
  uri: InContextSdkMethod<Subscription['uri'], SubscriptionuriArgs, MeshContext>,
  /** null **/
  uris: InContextSdkMethod<Subscription['uris'], SubscriptionurisArgs, MeshContext>,
  /** null **/
  withdraw: InContextSdkMethod<Subscription['withdraw'], SubscriptionwithdrawArgs, MeshContext>,
  /** null **/
  withdraws: InContextSdkMethod<Subscription['withdraws'], SubscriptionwithdrawsArgs, MeshContext>,
  /** null **/
  basecampAddressSet: InContextSdkMethod<Subscription['basecampAddressSet'], SubscriptionbasecampAddressSetArgs, MeshContext>,
  /** null **/
  basecampAddressSets: InContextSdkMethod<Subscription['basecampAddressSets'], SubscriptionbasecampAddressSetsArgs, MeshContext>,
  /** null **/
  donIdSet: InContextSdkMethod<Subscription['donIdSet'], SubscriptiondonIdSetArgs, MeshContext>,
  /** null **/
  donIdSets: InContextSdkMethod<Subscription['donIdSets'], SubscriptiondonIdSetsArgs, MeshContext>,
  /** null **/
  functionsRouterAddressSet: InContextSdkMethod<Subscription['functionsRouterAddressSet'], SubscriptionfunctionsRouterAddressSetArgs, MeshContext>,
  /** null **/
  functionsRouterAddressSets: InContextSdkMethod<Subscription['functionsRouterAddressSets'], SubscriptionfunctionsRouterAddressSetsArgs, MeshContext>,
  /** null **/
  missionSubmitted: InContextSdkMethod<Subscription['missionSubmitted'], SubscriptionmissionSubmittedArgs, MeshContext>,
  /** null **/
  missionSubmitteds: InContextSdkMethod<Subscription['missionSubmitteds'], SubscriptionmissionSubmittedsArgs, MeshContext>,
  /** null **/
  missionValidated: InContextSdkMethod<Subscription['missionValidated'], SubscriptionmissionValidatedArgs, MeshContext>,
  /** null **/
  missionValidateds: InContextSdkMethod<Subscription['missionValidateds'], SubscriptionmissionValidatedsArgs, MeshContext>,
  /** null **/
  validatorOwnershipTransferred: InContextSdkMethod<Subscription['validatorOwnershipTransferred'], SubscriptionvalidatorOwnershipTransferredArgs, MeshContext>,
  /** null **/
  validatorOwnershipTransferreds: InContextSdkMethod<Subscription['validatorOwnershipTransferreds'], SubscriptionvalidatorOwnershipTransferredsArgs, MeshContext>,
  /** null **/
  requestFulfilled: InContextSdkMethod<Subscription['requestFulfilled'], SubscriptionrequestFulfilledArgs, MeshContext>,
  /** null **/
  requestFulfilleds: InContextSdkMethod<Subscription['requestFulfilleds'], SubscriptionrequestFulfilledsArgs, MeshContext>,
  /** null **/
  requestSent: InContextSdkMethod<Subscription['requestSent'], SubscriptionrequestSentArgs, MeshContext>,
  /** null **/
  requestSents: InContextSdkMethod<Subscription['requestSents'], SubscriptionrequestSentsArgs, MeshContext>,
  /** null **/
  validatorWithdraw: InContextSdkMethod<Subscription['validatorWithdraw'], SubscriptionvalidatorWithdrawArgs, MeshContext>,
  /** null **/
  validatorWithdraws: InContextSdkMethod<Subscription['validatorWithdraws'], SubscriptionvalidatorWithdrawsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["BasecampSepoliaV3"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
