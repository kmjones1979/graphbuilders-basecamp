// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@graphql-mesh/utils';

import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';

import { MeshResolvedSource } from '@graphql-mesh/runtime';
import { MeshTransform, MeshPlugin } from '@graphql-mesh/types';
import GraphqlHandler from "@graphql-mesh/graphql"
import BareMerger from "@graphql-mesh/merger-bare";
import { printWithCache } from '@graphql-mesh/utils';
import { usePersistedOperations } from '@graphql-yoga/plugin-persisted-operations';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { BasecampSepoliaTypes } from './sources/BasecampSepolia/types';
import * as importedModule$0 from "./sources/BasecampSepolia/introspectionSchema";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



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
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Credential_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Credential_filter>>>;
};

export type Credential_orderBy =
  | 'id'
  | 'enabled'
  | 'Basecamp_id'
  | 'name';

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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  AdminAdded: ResolverTypeWrapper<AdminAdded>;
  AdminAdded_filter: AdminAdded_filter;
  AdminAdded_orderBy: AdminAdded_orderBy;
  AdminRemoved: ResolverTypeWrapper<AdminRemoved>;
  AdminRemoved_filter: AdminRemoved_filter;
  AdminRemoved_orderBy: AdminRemoved_orderBy;
  Aggregation_interval: Aggregation_interval;
  ApprovalForAll: ResolverTypeWrapper<ApprovalForAll>;
  ApprovalForAll_filter: ApprovalForAll_filter;
  ApprovalForAll_orderBy: ApprovalForAll_orderBy;
  BasecampAddressSet: ResolverTypeWrapper<BasecampAddressSet>;
  BasecampAddressSet_filter: BasecampAddressSet_filter;
  BasecampAddressSet_orderBy: BasecampAddressSet_orderBy;
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']['output']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']['output']>;
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']['output']>;
  Credential: ResolverTypeWrapper<Credential>;
  CredentialMinted: ResolverTypeWrapper<CredentialMinted>;
  CredentialMinted_filter: CredentialMinted_filter;
  CredentialMinted_orderBy: CredentialMinted_orderBy;
  CredentialSet: ResolverTypeWrapper<CredentialSet>;
  CredentialSet_filter: CredentialSet_filter;
  CredentialSet_orderBy: CredentialSet_orderBy;
  Credential_filter: Credential_filter;
  Credential_orderBy: Credential_orderBy;
  DonIdSet: ResolverTypeWrapper<DonIdSet>;
  DonIdSet_filter: DonIdSet_filter;
  DonIdSet_orderBy: DonIdSet_orderBy;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  FunctionsRouterAddressSet: ResolverTypeWrapper<FunctionsRouterAddressSet>;
  FunctionsRouterAddressSet_filter: FunctionsRouterAddressSet_filter;
  FunctionsRouterAddressSet_orderBy: FunctionsRouterAddressSet_orderBy;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Int8: ResolverTypeWrapper<Scalars['Int8']['output']>;
  MinterAdded: ResolverTypeWrapper<MinterAdded>;
  MinterAdded_filter: MinterAdded_filter;
  MinterAdded_orderBy: MinterAdded_orderBy;
  MinterRemoved: ResolverTypeWrapper<MinterRemoved>;
  MinterRemoved_filter: MinterRemoved_filter;
  MinterRemoved_orderBy: MinterRemoved_orderBy;
  MissionSubmitted: ResolverTypeWrapper<MissionSubmitted>;
  MissionSubmitted_filter: MissionSubmitted_filter;
  MissionSubmitted_orderBy: MissionSubmitted_orderBy;
  MissionValidated: ResolverTypeWrapper<MissionValidated>;
  MissionValidated_filter: MissionValidated_filter;
  MissionValidated_orderBy: MissionValidated_orderBy;
  OrderDirection: OrderDirection;
  OwnershipTransferred: ResolverTypeWrapper<OwnershipTransferred>;
  OwnershipTransferred_filter: OwnershipTransferred_filter;
  OwnershipTransferred_orderBy: OwnershipTransferred_orderBy;
  Query: ResolverTypeWrapper<{}>;
  RequestFulfilled: ResolverTypeWrapper<RequestFulfilled>;
  RequestFulfilled_filter: RequestFulfilled_filter;
  RequestFulfilled_orderBy: RequestFulfilled_orderBy;
  RequestSent: ResolverTypeWrapper<RequestSent>;
  RequestSent_filter: RequestSent_filter;
  RequestSent_orderBy: RequestSent_orderBy;
  RoleAdminChanged: ResolverTypeWrapper<RoleAdminChanged>;
  RoleAdminChanged_filter: RoleAdminChanged_filter;
  RoleAdminChanged_orderBy: RoleAdminChanged_orderBy;
  RoleGranted: ResolverTypeWrapper<RoleGranted>;
  RoleGranted_filter: RoleGranted_filter;
  RoleGranted_orderBy: RoleGranted_orderBy;
  RoleRevoked: ResolverTypeWrapper<RoleRevoked>;
  RoleRevoked_filter: RoleRevoked_filter;
  RoleRevoked_orderBy: RoleRevoked_orderBy;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Subscription: ResolverTypeWrapper<{}>;
  Timestamp: ResolverTypeWrapper<Scalars['Timestamp']['output']>;
  TransferBatch: ResolverTypeWrapper<TransferBatch>;
  TransferBatch_filter: TransferBatch_filter;
  TransferBatch_orderBy: TransferBatch_orderBy;
  TransferSingle: ResolverTypeWrapper<TransferSingle>;
  TransferSingle_filter: TransferSingle_filter;
  TransferSingle_orderBy: TransferSingle_orderBy;
  URI: ResolverTypeWrapper<URI>;
  URI_filter: URI_filter;
  URI_orderBy: URI_orderBy;
  User: ResolverTypeWrapper<User>;
  User_filter: User_filter;
  User_orderBy: User_orderBy;
  ValidatorOwnershipTransferred: ResolverTypeWrapper<ValidatorOwnershipTransferred>;
  ValidatorOwnershipTransferred_filter: ValidatorOwnershipTransferred_filter;
  ValidatorOwnershipTransferred_orderBy: ValidatorOwnershipTransferred_orderBy;
  ValidatorWithdraw: ResolverTypeWrapper<ValidatorWithdraw>;
  ValidatorWithdraw_filter: ValidatorWithdraw_filter;
  ValidatorWithdraw_orderBy: ValidatorWithdraw_orderBy;
  Withdraw: ResolverTypeWrapper<Withdraw>;
  Withdraw_filter: Withdraw_filter;
  Withdraw_orderBy: Withdraw_orderBy;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AdminAdded: AdminAdded;
  AdminAdded_filter: AdminAdded_filter;
  AdminRemoved: AdminRemoved;
  AdminRemoved_filter: AdminRemoved_filter;
  ApprovalForAll: ApprovalForAll;
  ApprovalForAll_filter: ApprovalForAll_filter;
  BasecampAddressSet: BasecampAddressSet;
  BasecampAddressSet_filter: BasecampAddressSet_filter;
  BigDecimal: Scalars['BigDecimal']['output'];
  BigInt: Scalars['BigInt']['output'];
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: Scalars['Boolean']['output'];
  Bytes: Scalars['Bytes']['output'];
  Credential: Credential;
  CredentialMinted: CredentialMinted;
  CredentialMinted_filter: CredentialMinted_filter;
  CredentialSet: CredentialSet;
  CredentialSet_filter: CredentialSet_filter;
  Credential_filter: Credential_filter;
  DonIdSet: DonIdSet;
  DonIdSet_filter: DonIdSet_filter;
  Float: Scalars['Float']['output'];
  FunctionsRouterAddressSet: FunctionsRouterAddressSet;
  FunctionsRouterAddressSet_filter: FunctionsRouterAddressSet_filter;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Int8: Scalars['Int8']['output'];
  MinterAdded: MinterAdded;
  MinterAdded_filter: MinterAdded_filter;
  MinterRemoved: MinterRemoved;
  MinterRemoved_filter: MinterRemoved_filter;
  MissionSubmitted: MissionSubmitted;
  MissionSubmitted_filter: MissionSubmitted_filter;
  MissionValidated: MissionValidated;
  MissionValidated_filter: MissionValidated_filter;
  OwnershipTransferred: OwnershipTransferred;
  OwnershipTransferred_filter: OwnershipTransferred_filter;
  Query: {};
  RequestFulfilled: RequestFulfilled;
  RequestFulfilled_filter: RequestFulfilled_filter;
  RequestSent: RequestSent;
  RequestSent_filter: RequestSent_filter;
  RoleAdminChanged: RoleAdminChanged;
  RoleAdminChanged_filter: RoleAdminChanged_filter;
  RoleGranted: RoleGranted;
  RoleGranted_filter: RoleGranted_filter;
  RoleRevoked: RoleRevoked;
  RoleRevoked_filter: RoleRevoked_filter;
  String: Scalars['String']['output'];
  Subscription: {};
  Timestamp: Scalars['Timestamp']['output'];
  TransferBatch: TransferBatch;
  TransferBatch_filter: TransferBatch_filter;
  TransferSingle: TransferSingle;
  TransferSingle_filter: TransferSingle_filter;
  URI: URI;
  URI_filter: URI_filter;
  User: User;
  User_filter: User_filter;
  ValidatorOwnershipTransferred: ValidatorOwnershipTransferred;
  ValidatorOwnershipTransferred_filter: ValidatorOwnershipTransferred_filter;
  ValidatorWithdraw: ValidatorWithdraw;
  ValidatorWithdraw_filter: ValidatorWithdraw_filter;
  Withdraw: Withdraw;
  Withdraw_filter: Withdraw_filter;
  _Block_: _Block_;
  _Meta_: _Meta_;
}>;

export type entityDirectiveArgs = { };

export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type subgraphIdDirectiveArgs = {
  id: Scalars['String']['input'];
};

export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type derivedFromDirectiveArgs = {
  field: Scalars['String']['input'];
};

export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AdminAddedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AdminAdded'] = ResolversParentTypes['AdminAdded']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  admin?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AdminRemovedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AdminRemoved'] = ResolversParentTypes['AdminRemoved']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  admin?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApprovalForAllResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApprovalForAll'] = ResolversParentTypes['ApprovalForAll']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  operator?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  approved?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BasecampAddressSetResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BasecampAddressSet'] = ResolversParentTypes['BasecampAddressSet']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  newBasecampAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type CredentialResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Credential'] = ResolversParentTypes['Credential']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  enabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  Basecamp_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CredentialMintedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CredentialMinted'] = ResolversParentTypes['CredentialMinted']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  Basecamp_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CredentialSetResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CredentialSet'] = ResolversParentTypes['CredentialSet']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  enabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  Basecamp_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DonIdSetResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DonIdSet'] = ResolversParentTypes['DonIdSet']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  newDonId?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FunctionsRouterAddressSetResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FunctionsRouterAddressSet'] = ResolversParentTypes['FunctionsRouterAddressSet']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  newFunctionsRouterAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface Int8ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Int8'], any> {
  name: 'Int8';
}

export type MinterAddedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MinterAdded'] = ResolversParentTypes['MinterAdded']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  minter?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MinterRemovedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MinterRemoved'] = ResolversParentTypes['MinterRemoved']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  minter?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MissionSubmittedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MissionSubmitted'] = ResolversParentTypes['MissionSubmitted']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  requestId?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  missionIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  queryUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MissionValidatedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MissionValidated'] = ResolversParentTypes['MissionValidated']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  requestId?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  missionIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isValid?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OwnershipTransferredResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OwnershipTransferred'] = ResolversParentTypes['OwnershipTransferred']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  previousOwner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  newOwner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryuserArgs, 'id' | 'subgraphError'>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryusersArgs, 'skip' | 'first' | 'subgraphError'>>;
  credential?: Resolver<Maybe<ResolversTypes['Credential']>, ParentType, ContextType, RequireFields<QuerycredentialArgs, 'id' | 'subgraphError'>>;
  credentials?: Resolver<Array<ResolversTypes['Credential']>, ParentType, ContextType, RequireFields<QuerycredentialsArgs, 'skip' | 'first' | 'subgraphError'>>;
  adminAdded?: Resolver<Maybe<ResolversTypes['AdminAdded']>, ParentType, ContextType, RequireFields<QueryadminAddedArgs, 'id' | 'subgraphError'>>;
  adminAddeds?: Resolver<Array<ResolversTypes['AdminAdded']>, ParentType, ContextType, RequireFields<QueryadminAddedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  adminRemoved?: Resolver<Maybe<ResolversTypes['AdminRemoved']>, ParentType, ContextType, RequireFields<QueryadminRemovedArgs, 'id' | 'subgraphError'>>;
  adminRemoveds?: Resolver<Array<ResolversTypes['AdminRemoved']>, ParentType, ContextType, RequireFields<QueryadminRemovedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  approvalForAll?: Resolver<Maybe<ResolversTypes['ApprovalForAll']>, ParentType, ContextType, RequireFields<QueryapprovalForAllArgs, 'id' | 'subgraphError'>>;
  approvalForAlls?: Resolver<Array<ResolversTypes['ApprovalForAll']>, ParentType, ContextType, RequireFields<QueryapprovalForAllsArgs, 'skip' | 'first' | 'subgraphError'>>;
  credentialMinted?: Resolver<Maybe<ResolversTypes['CredentialMinted']>, ParentType, ContextType, RequireFields<QuerycredentialMintedArgs, 'id' | 'subgraphError'>>;
  credentialMinteds?: Resolver<Array<ResolversTypes['CredentialMinted']>, ParentType, ContextType, RequireFields<QuerycredentialMintedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  credentialSet?: Resolver<Maybe<ResolversTypes['CredentialSet']>, ParentType, ContextType, RequireFields<QuerycredentialSetArgs, 'id' | 'subgraphError'>>;
  credentialSets?: Resolver<Array<ResolversTypes['CredentialSet']>, ParentType, ContextType, RequireFields<QuerycredentialSetsArgs, 'skip' | 'first' | 'subgraphError'>>;
  minterAdded?: Resolver<Maybe<ResolversTypes['MinterAdded']>, ParentType, ContextType, RequireFields<QueryminterAddedArgs, 'id' | 'subgraphError'>>;
  minterAddeds?: Resolver<Array<ResolversTypes['MinterAdded']>, ParentType, ContextType, RequireFields<QueryminterAddedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  minterRemoved?: Resolver<Maybe<ResolversTypes['MinterRemoved']>, ParentType, ContextType, RequireFields<QueryminterRemovedArgs, 'id' | 'subgraphError'>>;
  minterRemoveds?: Resolver<Array<ResolversTypes['MinterRemoved']>, ParentType, ContextType, RequireFields<QueryminterRemovedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  ownershipTransferred?: Resolver<Maybe<ResolversTypes['OwnershipTransferred']>, ParentType, ContextType, RequireFields<QueryownershipTransferredArgs, 'id' | 'subgraphError'>>;
  ownershipTransferreds?: Resolver<Array<ResolversTypes['OwnershipTransferred']>, ParentType, ContextType, RequireFields<QueryownershipTransferredsArgs, 'skip' | 'first' | 'subgraphError'>>;
  roleAdminChanged?: Resolver<Maybe<ResolversTypes['RoleAdminChanged']>, ParentType, ContextType, RequireFields<QueryroleAdminChangedArgs, 'id' | 'subgraphError'>>;
  roleAdminChangeds?: Resolver<Array<ResolversTypes['RoleAdminChanged']>, ParentType, ContextType, RequireFields<QueryroleAdminChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  roleGranted?: Resolver<Maybe<ResolversTypes['RoleGranted']>, ParentType, ContextType, RequireFields<QueryroleGrantedArgs, 'id' | 'subgraphError'>>;
  roleGranteds?: Resolver<Array<ResolversTypes['RoleGranted']>, ParentType, ContextType, RequireFields<QueryroleGrantedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  roleRevoked?: Resolver<Maybe<ResolversTypes['RoleRevoked']>, ParentType, ContextType, RequireFields<QueryroleRevokedArgs, 'id' | 'subgraphError'>>;
  roleRevokeds?: Resolver<Array<ResolversTypes['RoleRevoked']>, ParentType, ContextType, RequireFields<QueryroleRevokedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  transferBatch?: Resolver<Maybe<ResolversTypes['TransferBatch']>, ParentType, ContextType, RequireFields<QuerytransferBatchArgs, 'id' | 'subgraphError'>>;
  transferBatches?: Resolver<Array<ResolversTypes['TransferBatch']>, ParentType, ContextType, RequireFields<QuerytransferBatchesArgs, 'skip' | 'first' | 'subgraphError'>>;
  transferSingle?: Resolver<Maybe<ResolversTypes['TransferSingle']>, ParentType, ContextType, RequireFields<QuerytransferSingleArgs, 'id' | 'subgraphError'>>;
  transferSingles?: Resolver<Array<ResolversTypes['TransferSingle']>, ParentType, ContextType, RequireFields<QuerytransferSinglesArgs, 'skip' | 'first' | 'subgraphError'>>;
  uri?: Resolver<Maybe<ResolversTypes['URI']>, ParentType, ContextType, RequireFields<QueryuriArgs, 'id' | 'subgraphError'>>;
  uris?: Resolver<Array<ResolversTypes['URI']>, ParentType, ContextType, RequireFields<QueryurisArgs, 'skip' | 'first' | 'subgraphError'>>;
  withdraw?: Resolver<Maybe<ResolversTypes['Withdraw']>, ParentType, ContextType, RequireFields<QuerywithdrawArgs, 'id' | 'subgraphError'>>;
  withdraws?: Resolver<Array<ResolversTypes['Withdraw']>, ParentType, ContextType, RequireFields<QuerywithdrawsArgs, 'skip' | 'first' | 'subgraphError'>>;
  basecampAddressSet?: Resolver<Maybe<ResolversTypes['BasecampAddressSet']>, ParentType, ContextType, RequireFields<QuerybasecampAddressSetArgs, 'id' | 'subgraphError'>>;
  basecampAddressSets?: Resolver<Array<ResolversTypes['BasecampAddressSet']>, ParentType, ContextType, RequireFields<QuerybasecampAddressSetsArgs, 'skip' | 'first' | 'subgraphError'>>;
  donIdSet?: Resolver<Maybe<ResolversTypes['DonIdSet']>, ParentType, ContextType, RequireFields<QuerydonIdSetArgs, 'id' | 'subgraphError'>>;
  donIdSets?: Resolver<Array<ResolversTypes['DonIdSet']>, ParentType, ContextType, RequireFields<QuerydonIdSetsArgs, 'skip' | 'first' | 'subgraphError'>>;
  functionsRouterAddressSet?: Resolver<Maybe<ResolversTypes['FunctionsRouterAddressSet']>, ParentType, ContextType, RequireFields<QueryfunctionsRouterAddressSetArgs, 'id' | 'subgraphError'>>;
  functionsRouterAddressSets?: Resolver<Array<ResolversTypes['FunctionsRouterAddressSet']>, ParentType, ContextType, RequireFields<QueryfunctionsRouterAddressSetsArgs, 'skip' | 'first' | 'subgraphError'>>;
  missionSubmitted?: Resolver<Maybe<ResolversTypes['MissionSubmitted']>, ParentType, ContextType, RequireFields<QuerymissionSubmittedArgs, 'id' | 'subgraphError'>>;
  missionSubmitteds?: Resolver<Array<ResolversTypes['MissionSubmitted']>, ParentType, ContextType, RequireFields<QuerymissionSubmittedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  missionValidated?: Resolver<Maybe<ResolversTypes['MissionValidated']>, ParentType, ContextType, RequireFields<QuerymissionValidatedArgs, 'id' | 'subgraphError'>>;
  missionValidateds?: Resolver<Array<ResolversTypes['MissionValidated']>, ParentType, ContextType, RequireFields<QuerymissionValidatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  validatorOwnershipTransferred?: Resolver<Maybe<ResolversTypes['ValidatorOwnershipTransferred']>, ParentType, ContextType, RequireFields<QueryvalidatorOwnershipTransferredArgs, 'id' | 'subgraphError'>>;
  validatorOwnershipTransferreds?: Resolver<Array<ResolversTypes['ValidatorOwnershipTransferred']>, ParentType, ContextType, RequireFields<QueryvalidatorOwnershipTransferredsArgs, 'skip' | 'first' | 'subgraphError'>>;
  requestFulfilled?: Resolver<Maybe<ResolversTypes['RequestFulfilled']>, ParentType, ContextType, RequireFields<QueryrequestFulfilledArgs, 'id' | 'subgraphError'>>;
  requestFulfilleds?: Resolver<Array<ResolversTypes['RequestFulfilled']>, ParentType, ContextType, RequireFields<QueryrequestFulfilledsArgs, 'skip' | 'first' | 'subgraphError'>>;
  requestSent?: Resolver<Maybe<ResolversTypes['RequestSent']>, ParentType, ContextType, RequireFields<QueryrequestSentArgs, 'id' | 'subgraphError'>>;
  requestSents?: Resolver<Array<ResolversTypes['RequestSent']>, ParentType, ContextType, RequireFields<QueryrequestSentsArgs, 'skip' | 'first' | 'subgraphError'>>;
  validatorWithdraw?: Resolver<Maybe<ResolversTypes['ValidatorWithdraw']>, ParentType, ContextType, RequireFields<QueryvalidatorWithdrawArgs, 'id' | 'subgraphError'>>;
  validatorWithdraws?: Resolver<Array<ResolversTypes['ValidatorWithdraw']>, ParentType, ContextType, RequireFields<QueryvalidatorWithdrawsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
}>;

export type RequestFulfilledResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RequestFulfilled'] = ResolversParentTypes['RequestFulfilled']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  Validator_id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RequestSentResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RequestSent'] = ResolversParentTypes['RequestSent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  Validator_id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RoleAdminChangedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RoleAdminChanged'] = ResolversParentTypes['RoleAdminChanged']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  previousAdminRole?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  newAdminRole?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RoleGrantedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RoleGranted'] = ResolversParentTypes['RoleGranted']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  sender?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RoleRevokedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RoleRevoked'] = ResolversParentTypes['RoleRevoked']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  sender?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  user?: SubscriptionResolver<Maybe<ResolversTypes['User']>, "user", ParentType, ContextType, RequireFields<SubscriptionuserArgs, 'id' | 'subgraphError'>>;
  users?: SubscriptionResolver<Array<ResolversTypes['User']>, "users", ParentType, ContextType, RequireFields<SubscriptionusersArgs, 'skip' | 'first' | 'subgraphError'>>;
  credential?: SubscriptionResolver<Maybe<ResolversTypes['Credential']>, "credential", ParentType, ContextType, RequireFields<SubscriptioncredentialArgs, 'id' | 'subgraphError'>>;
  credentials?: SubscriptionResolver<Array<ResolversTypes['Credential']>, "credentials", ParentType, ContextType, RequireFields<SubscriptioncredentialsArgs, 'skip' | 'first' | 'subgraphError'>>;
  adminAdded?: SubscriptionResolver<Maybe<ResolversTypes['AdminAdded']>, "adminAdded", ParentType, ContextType, RequireFields<SubscriptionadminAddedArgs, 'id' | 'subgraphError'>>;
  adminAddeds?: SubscriptionResolver<Array<ResolversTypes['AdminAdded']>, "adminAddeds", ParentType, ContextType, RequireFields<SubscriptionadminAddedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  adminRemoved?: SubscriptionResolver<Maybe<ResolversTypes['AdminRemoved']>, "adminRemoved", ParentType, ContextType, RequireFields<SubscriptionadminRemovedArgs, 'id' | 'subgraphError'>>;
  adminRemoveds?: SubscriptionResolver<Array<ResolversTypes['AdminRemoved']>, "adminRemoveds", ParentType, ContextType, RequireFields<SubscriptionadminRemovedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  approvalForAll?: SubscriptionResolver<Maybe<ResolversTypes['ApprovalForAll']>, "approvalForAll", ParentType, ContextType, RequireFields<SubscriptionapprovalForAllArgs, 'id' | 'subgraphError'>>;
  approvalForAlls?: SubscriptionResolver<Array<ResolversTypes['ApprovalForAll']>, "approvalForAlls", ParentType, ContextType, RequireFields<SubscriptionapprovalForAllsArgs, 'skip' | 'first' | 'subgraphError'>>;
  credentialMinted?: SubscriptionResolver<Maybe<ResolversTypes['CredentialMinted']>, "credentialMinted", ParentType, ContextType, RequireFields<SubscriptioncredentialMintedArgs, 'id' | 'subgraphError'>>;
  credentialMinteds?: SubscriptionResolver<Array<ResolversTypes['CredentialMinted']>, "credentialMinteds", ParentType, ContextType, RequireFields<SubscriptioncredentialMintedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  credentialSet?: SubscriptionResolver<Maybe<ResolversTypes['CredentialSet']>, "credentialSet", ParentType, ContextType, RequireFields<SubscriptioncredentialSetArgs, 'id' | 'subgraphError'>>;
  credentialSets?: SubscriptionResolver<Array<ResolversTypes['CredentialSet']>, "credentialSets", ParentType, ContextType, RequireFields<SubscriptioncredentialSetsArgs, 'skip' | 'first' | 'subgraphError'>>;
  minterAdded?: SubscriptionResolver<Maybe<ResolversTypes['MinterAdded']>, "minterAdded", ParentType, ContextType, RequireFields<SubscriptionminterAddedArgs, 'id' | 'subgraphError'>>;
  minterAddeds?: SubscriptionResolver<Array<ResolversTypes['MinterAdded']>, "minterAddeds", ParentType, ContextType, RequireFields<SubscriptionminterAddedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  minterRemoved?: SubscriptionResolver<Maybe<ResolversTypes['MinterRemoved']>, "minterRemoved", ParentType, ContextType, RequireFields<SubscriptionminterRemovedArgs, 'id' | 'subgraphError'>>;
  minterRemoveds?: SubscriptionResolver<Array<ResolversTypes['MinterRemoved']>, "minterRemoveds", ParentType, ContextType, RequireFields<SubscriptionminterRemovedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  ownershipTransferred?: SubscriptionResolver<Maybe<ResolversTypes['OwnershipTransferred']>, "ownershipTransferred", ParentType, ContextType, RequireFields<SubscriptionownershipTransferredArgs, 'id' | 'subgraphError'>>;
  ownershipTransferreds?: SubscriptionResolver<Array<ResolversTypes['OwnershipTransferred']>, "ownershipTransferreds", ParentType, ContextType, RequireFields<SubscriptionownershipTransferredsArgs, 'skip' | 'first' | 'subgraphError'>>;
  roleAdminChanged?: SubscriptionResolver<Maybe<ResolversTypes['RoleAdminChanged']>, "roleAdminChanged", ParentType, ContextType, RequireFields<SubscriptionroleAdminChangedArgs, 'id' | 'subgraphError'>>;
  roleAdminChangeds?: SubscriptionResolver<Array<ResolversTypes['RoleAdminChanged']>, "roleAdminChangeds", ParentType, ContextType, RequireFields<SubscriptionroleAdminChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  roleGranted?: SubscriptionResolver<Maybe<ResolversTypes['RoleGranted']>, "roleGranted", ParentType, ContextType, RequireFields<SubscriptionroleGrantedArgs, 'id' | 'subgraphError'>>;
  roleGranteds?: SubscriptionResolver<Array<ResolversTypes['RoleGranted']>, "roleGranteds", ParentType, ContextType, RequireFields<SubscriptionroleGrantedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  roleRevoked?: SubscriptionResolver<Maybe<ResolversTypes['RoleRevoked']>, "roleRevoked", ParentType, ContextType, RequireFields<SubscriptionroleRevokedArgs, 'id' | 'subgraphError'>>;
  roleRevokeds?: SubscriptionResolver<Array<ResolversTypes['RoleRevoked']>, "roleRevokeds", ParentType, ContextType, RequireFields<SubscriptionroleRevokedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  transferBatch?: SubscriptionResolver<Maybe<ResolversTypes['TransferBatch']>, "transferBatch", ParentType, ContextType, RequireFields<SubscriptiontransferBatchArgs, 'id' | 'subgraphError'>>;
  transferBatches?: SubscriptionResolver<Array<ResolversTypes['TransferBatch']>, "transferBatches", ParentType, ContextType, RequireFields<SubscriptiontransferBatchesArgs, 'skip' | 'first' | 'subgraphError'>>;
  transferSingle?: SubscriptionResolver<Maybe<ResolversTypes['TransferSingle']>, "transferSingle", ParentType, ContextType, RequireFields<SubscriptiontransferSingleArgs, 'id' | 'subgraphError'>>;
  transferSingles?: SubscriptionResolver<Array<ResolversTypes['TransferSingle']>, "transferSingles", ParentType, ContextType, RequireFields<SubscriptiontransferSinglesArgs, 'skip' | 'first' | 'subgraphError'>>;
  uri?: SubscriptionResolver<Maybe<ResolversTypes['URI']>, "uri", ParentType, ContextType, RequireFields<SubscriptionuriArgs, 'id' | 'subgraphError'>>;
  uris?: SubscriptionResolver<Array<ResolversTypes['URI']>, "uris", ParentType, ContextType, RequireFields<SubscriptionurisArgs, 'skip' | 'first' | 'subgraphError'>>;
  withdraw?: SubscriptionResolver<Maybe<ResolversTypes['Withdraw']>, "withdraw", ParentType, ContextType, RequireFields<SubscriptionwithdrawArgs, 'id' | 'subgraphError'>>;
  withdraws?: SubscriptionResolver<Array<ResolversTypes['Withdraw']>, "withdraws", ParentType, ContextType, RequireFields<SubscriptionwithdrawsArgs, 'skip' | 'first' | 'subgraphError'>>;
  basecampAddressSet?: SubscriptionResolver<Maybe<ResolversTypes['BasecampAddressSet']>, "basecampAddressSet", ParentType, ContextType, RequireFields<SubscriptionbasecampAddressSetArgs, 'id' | 'subgraphError'>>;
  basecampAddressSets?: SubscriptionResolver<Array<ResolversTypes['BasecampAddressSet']>, "basecampAddressSets", ParentType, ContextType, RequireFields<SubscriptionbasecampAddressSetsArgs, 'skip' | 'first' | 'subgraphError'>>;
  donIdSet?: SubscriptionResolver<Maybe<ResolversTypes['DonIdSet']>, "donIdSet", ParentType, ContextType, RequireFields<SubscriptiondonIdSetArgs, 'id' | 'subgraphError'>>;
  donIdSets?: SubscriptionResolver<Array<ResolversTypes['DonIdSet']>, "donIdSets", ParentType, ContextType, RequireFields<SubscriptiondonIdSetsArgs, 'skip' | 'first' | 'subgraphError'>>;
  functionsRouterAddressSet?: SubscriptionResolver<Maybe<ResolversTypes['FunctionsRouterAddressSet']>, "functionsRouterAddressSet", ParentType, ContextType, RequireFields<SubscriptionfunctionsRouterAddressSetArgs, 'id' | 'subgraphError'>>;
  functionsRouterAddressSets?: SubscriptionResolver<Array<ResolversTypes['FunctionsRouterAddressSet']>, "functionsRouterAddressSets", ParentType, ContextType, RequireFields<SubscriptionfunctionsRouterAddressSetsArgs, 'skip' | 'first' | 'subgraphError'>>;
  missionSubmitted?: SubscriptionResolver<Maybe<ResolversTypes['MissionSubmitted']>, "missionSubmitted", ParentType, ContextType, RequireFields<SubscriptionmissionSubmittedArgs, 'id' | 'subgraphError'>>;
  missionSubmitteds?: SubscriptionResolver<Array<ResolversTypes['MissionSubmitted']>, "missionSubmitteds", ParentType, ContextType, RequireFields<SubscriptionmissionSubmittedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  missionValidated?: SubscriptionResolver<Maybe<ResolversTypes['MissionValidated']>, "missionValidated", ParentType, ContextType, RequireFields<SubscriptionmissionValidatedArgs, 'id' | 'subgraphError'>>;
  missionValidateds?: SubscriptionResolver<Array<ResolversTypes['MissionValidated']>, "missionValidateds", ParentType, ContextType, RequireFields<SubscriptionmissionValidatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  validatorOwnershipTransferred?: SubscriptionResolver<Maybe<ResolversTypes['ValidatorOwnershipTransferred']>, "validatorOwnershipTransferred", ParentType, ContextType, RequireFields<SubscriptionvalidatorOwnershipTransferredArgs, 'id' | 'subgraphError'>>;
  validatorOwnershipTransferreds?: SubscriptionResolver<Array<ResolversTypes['ValidatorOwnershipTransferred']>, "validatorOwnershipTransferreds", ParentType, ContextType, RequireFields<SubscriptionvalidatorOwnershipTransferredsArgs, 'skip' | 'first' | 'subgraphError'>>;
  requestFulfilled?: SubscriptionResolver<Maybe<ResolversTypes['RequestFulfilled']>, "requestFulfilled", ParentType, ContextType, RequireFields<SubscriptionrequestFulfilledArgs, 'id' | 'subgraphError'>>;
  requestFulfilleds?: SubscriptionResolver<Array<ResolversTypes['RequestFulfilled']>, "requestFulfilleds", ParentType, ContextType, RequireFields<SubscriptionrequestFulfilledsArgs, 'skip' | 'first' | 'subgraphError'>>;
  requestSent?: SubscriptionResolver<Maybe<ResolversTypes['RequestSent']>, "requestSent", ParentType, ContextType, RequireFields<SubscriptionrequestSentArgs, 'id' | 'subgraphError'>>;
  requestSents?: SubscriptionResolver<Array<ResolversTypes['RequestSent']>, "requestSents", ParentType, ContextType, RequireFields<SubscriptionrequestSentsArgs, 'skip' | 'first' | 'subgraphError'>>;
  validatorWithdraw?: SubscriptionResolver<Maybe<ResolversTypes['ValidatorWithdraw']>, "validatorWithdraw", ParentType, ContextType, RequireFields<SubscriptionvalidatorWithdrawArgs, 'id' | 'subgraphError'>>;
  validatorWithdraws?: SubscriptionResolver<Array<ResolversTypes['ValidatorWithdraw']>, "validatorWithdraws", ParentType, ContextType, RequireFields<SubscriptionvalidatorWithdrawsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
}>;

export interface TimestampScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Timestamp'], any> {
  name: 'Timestamp';
}

export type TransferBatchResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TransferBatch'] = ResolversParentTypes['TransferBatch']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  operator?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  ids?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  values?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TransferSingleResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TransferSingle'] = ResolversParentTypes['TransferSingle']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  operator?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  Basecamp_id?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type URIResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['URI'] = ResolversParentTypes['URI']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Basecamp_id?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  credentials?: Resolver<Maybe<Array<ResolversTypes['CredentialMinted']>>, ParentType, ContextType, RequireFields<UsercredentialsArgs, 'skip' | 'first'>>;
  rank?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lastCredentialMinted?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  blockTimestamp?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  transactionHash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ValidatorOwnershipTransferredResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ValidatorOwnershipTransferred'] = ResolversParentTypes['ValidatorOwnershipTransferred']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  previousOwner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  newOwner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ValidatorWithdrawResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ValidatorWithdraw'] = ResolversParentTypes['ValidatorWithdraw']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WithdrawResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Withdraw'] = ResolversParentTypes['Withdraw']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  parentHash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  AdminAdded?: AdminAddedResolvers<ContextType>;
  AdminRemoved?: AdminRemovedResolvers<ContextType>;
  ApprovalForAll?: ApprovalForAllResolvers<ContextType>;
  BasecampAddressSet?: BasecampAddressSetResolvers<ContextType>;
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  Credential?: CredentialResolvers<ContextType>;
  CredentialMinted?: CredentialMintedResolvers<ContextType>;
  CredentialSet?: CredentialSetResolvers<ContextType>;
  DonIdSet?: DonIdSetResolvers<ContextType>;
  FunctionsRouterAddressSet?: FunctionsRouterAddressSetResolvers<ContextType>;
  Int8?: GraphQLScalarType;
  MinterAdded?: MinterAddedResolvers<ContextType>;
  MinterRemoved?: MinterRemovedResolvers<ContextType>;
  MissionSubmitted?: MissionSubmittedResolvers<ContextType>;
  MissionValidated?: MissionValidatedResolvers<ContextType>;
  OwnershipTransferred?: OwnershipTransferredResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RequestFulfilled?: RequestFulfilledResolvers<ContextType>;
  RequestSent?: RequestSentResolvers<ContextType>;
  RoleAdminChanged?: RoleAdminChangedResolvers<ContextType>;
  RoleGranted?: RoleGrantedResolvers<ContextType>;
  RoleRevoked?: RoleRevokedResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Timestamp?: GraphQLScalarType;
  TransferBatch?: TransferBatchResolvers<ContextType>;
  TransferSingle?: TransferSingleResolvers<ContextType>;
  URI?: URIResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  ValidatorOwnershipTransferred?: ValidatorOwnershipTransferredResolvers<ContextType>;
  ValidatorWithdraw?: ValidatorWithdrawResolvers<ContextType>;
  Withdraw?: WithdrawResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = BasecampSepoliaTypes.Context & BaseMeshContext;


import { fileURLToPath } from '@graphql-mesh/utils';
const baseDir = pathModule.join(pathModule.dirname(fileURLToPath(import.meta.url)), '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".graphclient/sources/BasecampSepolia/introspectionSchema":
      return Promise.resolve(importedModule$0) as T;
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("GraphClient");
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    } as any)

const sources: MeshResolvedSource[] = [];
const transforms: MeshTransform[] = [];
const additionalEnvelopPlugins: MeshPlugin<any>[] = [];
const basecampSepoliaTransforms = [];
const additionalTypeDefs = [] as any[];
const basecampSepoliaHandler = new GraphqlHandler({
              name: "BasecampSepolia",
              config: {"endpoint":"https://api.studio.thegraph.com/query/37762/basecamp-basesepolia/version/latest"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("BasecampSepolia"),
              logger: logger.child("BasecampSepolia"),
              importFn,
            });
sources[0] = {
          name: 'BasecampSepolia',
          handler: basecampSepoliaHandler,
          transforms: basecampSepoliaTransforms
        }
const additionalResolvers = [] as any[]
const merger = new(BareMerger as any)({
        cache,
        pubsub,
        logger: logger.child('bareMerger'),
        store: rootStore.child('bareMerger')
      })
const documentHashMap = {
        "fd3760779cd90197c41eae070b4acbc7de637da323e0b1532e16b4b273d15181": GetUserCredentialsDocument,
"f5e0f8cecc7ddf3e10d79194fbded7de118a80385b54fa355444f493228ec53f": GetUsersDocument
      }
additionalEnvelopPlugins.push(usePersistedOperations({
        getPersistedOperation(key) {
          return documentHashMap[key];
        },
        ...{}
      }))

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      {
        document: GetUserCredentialsDocument,
        get rawSDL() {
          return printWithCache(GetUserCredentialsDocument);
        },
        location: 'GetUserCredentialsDocument.graphql',
        sha256Hash: 'fd3760779cd90197c41eae070b4acbc7de637da323e0b1532e16b4b273d15181'
      },{
        document: GetUsersDocument,
        get rawSDL() {
          return printWithCache(GetUsersDocument);
        },
        location: 'GetUsersDocument.graphql',
        sha256Hash: 'f5e0f8cecc7ddf3e10d79194fbded7de118a80385b54fa355444f493228ec53f'
      }
    ];
    },
    fetchFn,
  };
}

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltGraphClient,
    rawServeConfig: undefined,
  })
}


let meshInstance$: Promise<MeshInstance> | undefined;

export const pollingInterval = null;

export function getBuiltGraphClient(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    if (pollingInterval) {
      setInterval(() => {
        getMeshOptions()
        .then(meshOptions => getMesh(meshOptions))
        .then(newMesh =>
          meshInstance$.then(oldMesh => {
            oldMesh.destroy()
            meshInstance$ = Promise.resolve(newMesh)
          })
        ).catch(err => {
          console.error("Mesh polling failed so the existing version will be used:", err);
        });
      }, pollingInterval)
    }
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));
export function getBuiltGraphSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext) {
  const sdkRequester$ = getBuiltGraphClient().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext));
  return getSdk<TOperationContext, TGlobalContext>((...args) => sdkRequester$.then(sdkRequester => sdkRequester(...args)));
}
export type GetUserCredentialsQueryVariables = Exact<{
  address: Scalars['Bytes']['input'];
}>;


export type GetUserCredentialsQuery = { users: Array<(
    Pick<User, 'id' | 'rank'>
    & { credentials?: Maybe<Array<Pick<CredentialMinted, 'Basecamp_id'>>> }
  )> };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { users: Array<(
    Pick<User, 'address' | 'rank' | 'blockTimestamp' | 'lastCredentialMinted'>
    & { credentials?: Maybe<Array<Pick<CredentialMinted, 'Basecamp_id'>>> }
  )> };


export const GetUserCredentialsDocument = gql`
    query GetUserCredentials($address: Bytes!) {
  users(where: {id_contains: $address}) {
    id
    credentials(orderBy: Basecamp_id) {
      Basecamp_id
    }
    rank
  }
}
    ` as unknown as DocumentNode<GetUserCredentialsQuery, GetUserCredentialsQueryVariables>;
export const GetUsersDocument = gql`
    query GetUsers {
  users(first: 100, orderBy: rank, orderDirection: desc) {
    address
    rank
    blockTimestamp
    credentials(orderBy: Basecamp_id) {
      Basecamp_id
    }
    lastCredentialMinted
  }
}
    ` as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;



export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    GetUserCredentials(variables: GetUserCredentialsQueryVariables, options?: C): Promise<GetUserCredentialsQuery> {
      return requester<GetUserCredentialsQuery, GetUserCredentialsQueryVariables>(GetUserCredentialsDocument, variables, options) as Promise<GetUserCredentialsQuery>;
    },
    GetUsers(variables?: GetUsersQueryVariables, options?: C): Promise<GetUsersQuery> {
      return requester<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, variables, options) as Promise<GetUsersQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;