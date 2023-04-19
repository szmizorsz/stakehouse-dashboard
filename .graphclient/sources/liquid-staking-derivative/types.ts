// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace LiquidStakingDerivativeTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type Depositor = {
  id: Scalars['ID'];
  lpAddress: Scalars['String'];
  amount: Scalars['BigInt'];
};

export type Depositor_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  lpAddress?: InputMaybe<Scalars['String']>;
  lpAddress_not?: InputMaybe<Scalars['String']>;
  lpAddress_gt?: InputMaybe<Scalars['String']>;
  lpAddress_lt?: InputMaybe<Scalars['String']>;
  lpAddress_gte?: InputMaybe<Scalars['String']>;
  lpAddress_lte?: InputMaybe<Scalars['String']>;
  lpAddress_in?: InputMaybe<Array<Scalars['String']>>;
  lpAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  lpAddress_contains?: InputMaybe<Scalars['String']>;
  lpAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  lpAddress_not_contains?: InputMaybe<Scalars['String']>;
  lpAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  lpAddress_starts_with?: InputMaybe<Scalars['String']>;
  lpAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  lpAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  lpAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  lpAddress_ends_with?: InputMaybe<Scalars['String']>;
  lpAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  lpAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  lpAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Depositor_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Depositor_filter>>>;
};

export type Depositor_orderBy =
  | 'id'
  | 'lpAddress'
  | 'amount';

export type Event = {
  id: Scalars['ID'];
  tx: Scalars['String'];
  from: Scalars['String'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  blsPubKeyForKnot: Scalars['String'];
  key: Scalars['String'];
  value: Scalars['String'];
  value2?: Maybe<Scalars['String']>;
};

export type Event_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  tx?: InputMaybe<Scalars['String']>;
  tx_not?: InputMaybe<Scalars['String']>;
  tx_gt?: InputMaybe<Scalars['String']>;
  tx_lt?: InputMaybe<Scalars['String']>;
  tx_gte?: InputMaybe<Scalars['String']>;
  tx_lte?: InputMaybe<Scalars['String']>;
  tx_in?: InputMaybe<Array<Scalars['String']>>;
  tx_not_in?: InputMaybe<Array<Scalars['String']>>;
  tx_contains?: InputMaybe<Scalars['String']>;
  tx_contains_nocase?: InputMaybe<Scalars['String']>;
  tx_not_contains?: InputMaybe<Scalars['String']>;
  tx_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tx_starts_with?: InputMaybe<Scalars['String']>;
  tx_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tx_not_starts_with?: InputMaybe<Scalars['String']>;
  tx_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tx_ends_with?: InputMaybe<Scalars['String']>;
  tx_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tx_not_ends_with?: InputMaybe<Scalars['String']>;
  tx_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['String']>;
  from_not?: InputMaybe<Scalars['String']>;
  from_gt?: InputMaybe<Scalars['String']>;
  from_lt?: InputMaybe<Scalars['String']>;
  from_gte?: InputMaybe<Scalars['String']>;
  from_lte?: InputMaybe<Scalars['String']>;
  from_in?: InputMaybe<Array<Scalars['String']>>;
  from_not_in?: InputMaybe<Array<Scalars['String']>>;
  from_contains?: InputMaybe<Scalars['String']>;
  from_contains_nocase?: InputMaybe<Scalars['String']>;
  from_not_contains?: InputMaybe<Scalars['String']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']>;
  from_starts_with?: InputMaybe<Scalars['String']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_starts_with?: InputMaybe<Scalars['String']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_ends_with?: InputMaybe<Scalars['String']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_ends_with?: InputMaybe<Scalars['String']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blsPubKeyForKnot?: InputMaybe<Scalars['String']>;
  blsPubKeyForKnot_not?: InputMaybe<Scalars['String']>;
  blsPubKeyForKnot_gt?: InputMaybe<Scalars['String']>;
  blsPubKeyForKnot_lt?: InputMaybe<Scalars['String']>;
  blsPubKeyForKnot_gte?: InputMaybe<Scalars['String']>;
  blsPubKeyForKnot_lte?: InputMaybe<Scalars['String']>;
  blsPubKeyForKnot_in?: InputMaybe<Array<Scalars['String']>>;
  blsPubKeyForKnot_not_in?: InputMaybe<Array<Scalars['String']>>;
  blsPubKeyForKnot_contains?: InputMaybe<Scalars['String']>;
  blsPubKeyForKnot_contains_nocase?: InputMaybe<Scalars['String']>;
  blsPubKeyForKnot_not_contains?: InputMaybe<Scalars['String']>;
  blsPubKeyForKnot_not_contains_nocase?: InputMaybe<Scalars['String']>;
  blsPubKeyForKnot_starts_with?: InputMaybe<Scalars['String']>;
  blsPubKeyForKnot_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blsPubKeyForKnot_not_starts_with?: InputMaybe<Scalars['String']>;
  blsPubKeyForKnot_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blsPubKeyForKnot_ends_with?: InputMaybe<Scalars['String']>;
  blsPubKeyForKnot_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blsPubKeyForKnot_not_ends_with?: InputMaybe<Scalars['String']>;
  blsPubKeyForKnot_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  key_not?: InputMaybe<Scalars['String']>;
  key_gt?: InputMaybe<Scalars['String']>;
  key_lt?: InputMaybe<Scalars['String']>;
  key_gte?: InputMaybe<Scalars['String']>;
  key_lte?: InputMaybe<Scalars['String']>;
  key_in?: InputMaybe<Array<Scalars['String']>>;
  key_not_in?: InputMaybe<Array<Scalars['String']>>;
  key_contains?: InputMaybe<Scalars['String']>;
  key_contains_nocase?: InputMaybe<Scalars['String']>;
  key_not_contains?: InputMaybe<Scalars['String']>;
  key_not_contains_nocase?: InputMaybe<Scalars['String']>;
  key_starts_with?: InputMaybe<Scalars['String']>;
  key_starts_with_nocase?: InputMaybe<Scalars['String']>;
  key_not_starts_with?: InputMaybe<Scalars['String']>;
  key_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  key_ends_with?: InputMaybe<Scalars['String']>;
  key_ends_with_nocase?: InputMaybe<Scalars['String']>;
  key_not_ends_with?: InputMaybe<Scalars['String']>;
  key_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
  value_not?: InputMaybe<Scalars['String']>;
  value_gt?: InputMaybe<Scalars['String']>;
  value_lt?: InputMaybe<Scalars['String']>;
  value_gte?: InputMaybe<Scalars['String']>;
  value_lte?: InputMaybe<Scalars['String']>;
  value_in?: InputMaybe<Array<Scalars['String']>>;
  value_not_in?: InputMaybe<Array<Scalars['String']>>;
  value_contains?: InputMaybe<Scalars['String']>;
  value_contains_nocase?: InputMaybe<Scalars['String']>;
  value_not_contains?: InputMaybe<Scalars['String']>;
  value_not_contains_nocase?: InputMaybe<Scalars['String']>;
  value_starts_with?: InputMaybe<Scalars['String']>;
  value_starts_with_nocase?: InputMaybe<Scalars['String']>;
  value_not_starts_with?: InputMaybe<Scalars['String']>;
  value_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  value_ends_with?: InputMaybe<Scalars['String']>;
  value_ends_with_nocase?: InputMaybe<Scalars['String']>;
  value_not_ends_with?: InputMaybe<Scalars['String']>;
  value_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  value2?: InputMaybe<Scalars['String']>;
  value2_not?: InputMaybe<Scalars['String']>;
  value2_gt?: InputMaybe<Scalars['String']>;
  value2_lt?: InputMaybe<Scalars['String']>;
  value2_gte?: InputMaybe<Scalars['String']>;
  value2_lte?: InputMaybe<Scalars['String']>;
  value2_in?: InputMaybe<Array<Scalars['String']>>;
  value2_not_in?: InputMaybe<Array<Scalars['String']>>;
  value2_contains?: InputMaybe<Scalars['String']>;
  value2_contains_nocase?: InputMaybe<Scalars['String']>;
  value2_not_contains?: InputMaybe<Scalars['String']>;
  value2_not_contains_nocase?: InputMaybe<Scalars['String']>;
  value2_starts_with?: InputMaybe<Scalars['String']>;
  value2_starts_with_nocase?: InputMaybe<Scalars['String']>;
  value2_not_starts_with?: InputMaybe<Scalars['String']>;
  value2_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  value2_ends_with?: InputMaybe<Scalars['String']>;
  value2_ends_with_nocase?: InputMaybe<Scalars['String']>;
  value2_not_ends_with?: InputMaybe<Scalars['String']>;
  value2_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Event_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Event_filter>>>;
};

export type Event_orderBy =
  | 'id'
  | 'tx'
  | 'from'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'blsPubKeyForKnot'
  | 'key'
  | 'value'
  | 'value2';

export type FeesAndMevBatch = {
  id: Scalars['ID'];
  blsPublicKey?: Maybe<Scalars['String']>;
  vaultLPToken?: Maybe<LPToken>;
  lsdValidator?: Maybe<LSDValidator>;
  listOfLiquidityProviderAddresses: Array<Scalars['String']>;
  liquidityProviders: Array<GiantFeesAndMevLiquidityProvider>;
};


export type FeesAndMevBatchliquidityProvidersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GiantFeesAndMevLiquidityProvider_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GiantFeesAndMevLiquidityProvider_filter>;
};

export type FeesAndMevBatch_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  blsPublicKey?: InputMaybe<Scalars['String']>;
  blsPublicKey_not?: InputMaybe<Scalars['String']>;
  blsPublicKey_gt?: InputMaybe<Scalars['String']>;
  blsPublicKey_lt?: InputMaybe<Scalars['String']>;
  blsPublicKey_gte?: InputMaybe<Scalars['String']>;
  blsPublicKey_lte?: InputMaybe<Scalars['String']>;
  blsPublicKey_in?: InputMaybe<Array<Scalars['String']>>;
  blsPublicKey_not_in?: InputMaybe<Array<Scalars['String']>>;
  blsPublicKey_contains?: InputMaybe<Scalars['String']>;
  blsPublicKey_contains_nocase?: InputMaybe<Scalars['String']>;
  blsPublicKey_not_contains?: InputMaybe<Scalars['String']>;
  blsPublicKey_not_contains_nocase?: InputMaybe<Scalars['String']>;
  blsPublicKey_starts_with?: InputMaybe<Scalars['String']>;
  blsPublicKey_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blsPublicKey_not_starts_with?: InputMaybe<Scalars['String']>;
  blsPublicKey_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blsPublicKey_ends_with?: InputMaybe<Scalars['String']>;
  blsPublicKey_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blsPublicKey_not_ends_with?: InputMaybe<Scalars['String']>;
  blsPublicKey_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  vaultLPToken_?: InputMaybe<LPToken_filter>;
  lsdValidator?: InputMaybe<Scalars['String']>;
  lsdValidator_not?: InputMaybe<Scalars['String']>;
  lsdValidator_gt?: InputMaybe<Scalars['String']>;
  lsdValidator_lt?: InputMaybe<Scalars['String']>;
  lsdValidator_gte?: InputMaybe<Scalars['String']>;
  lsdValidator_lte?: InputMaybe<Scalars['String']>;
  lsdValidator_in?: InputMaybe<Array<Scalars['String']>>;
  lsdValidator_not_in?: InputMaybe<Array<Scalars['String']>>;
  lsdValidator_contains?: InputMaybe<Scalars['String']>;
  lsdValidator_contains_nocase?: InputMaybe<Scalars['String']>;
  lsdValidator_not_contains?: InputMaybe<Scalars['String']>;
  lsdValidator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  lsdValidator_starts_with?: InputMaybe<Scalars['String']>;
  lsdValidator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  lsdValidator_not_starts_with?: InputMaybe<Scalars['String']>;
  lsdValidator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  lsdValidator_ends_with?: InputMaybe<Scalars['String']>;
  lsdValidator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  lsdValidator_not_ends_with?: InputMaybe<Scalars['String']>;
  lsdValidator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  lsdValidator_?: InputMaybe<LSDValidator_filter>;
  listOfLiquidityProviderAddresses?: InputMaybe<Array<Scalars['String']>>;
  listOfLiquidityProviderAddresses_not?: InputMaybe<Array<Scalars['String']>>;
  listOfLiquidityProviderAddresses_contains?: InputMaybe<Array<Scalars['String']>>;
  listOfLiquidityProviderAddresses_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  listOfLiquidityProviderAddresses_not_contains?: InputMaybe<Array<Scalars['String']>>;
  listOfLiquidityProviderAddresses_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  liquidityProviders?: InputMaybe<Array<Scalars['String']>>;
  liquidityProviders_not?: InputMaybe<Array<Scalars['String']>>;
  liquidityProviders_contains?: InputMaybe<Array<Scalars['String']>>;
  liquidityProviders_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  liquidityProviders_not_contains?: InputMaybe<Array<Scalars['String']>>;
  liquidityProviders_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  liquidityProviders_?: InputMaybe<GiantFeesAndMevLiquidityProvider_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FeesAndMevBatch_filter>>>;
  or?: InputMaybe<Array<InputMaybe<FeesAndMevBatch_filter>>>;
};

export type FeesAndMevBatch_orderBy =
  | 'id'
  | 'blsPublicKey'
  | 'vaultLPToken'
  | 'vaultLPToken__id'
  | 'vaultLPToken__blsPublicKey'
  | 'vaultLPToken__minted'
  | 'vaultLPToken__withdrawn'
  | 'vaultLPToken__issuer'
  | 'vaultLPToken__tokenType'
  | 'vaultLPToken__giantPoolBalance'
  | 'vaultLPToken__lifecycleStatus'
  | 'lsdValidator'
  | 'lsdValidator__id'
  | 'lsdValidator__status'
  | 'lsdValidator__isReadyToStake'
  | 'lsdValidator__liquidStakingManager'
  | 'lsdValidator__withdrawn'
  | 'lsdValidator__currentIndex'
  | 'lsdValidator__totalETHStaked'
  | 'lsdValidator__totalETHFundedFromGiantPool'
  | 'lsdValidator__totalETHFromGiantProtectedStakingPool'
  | 'lsdValidator__totalETHFromGiantFeesAndMevPool'
  | 'lsdValidator__giantPoolLastFundedTimestamp'
  | 'lsdValidator__registerInitialsBlockNumber'
  | 'lsdValidator__ethSentToDepositContractBlockNumber'
  | 'lsdValidator__derivativesMintedBlockNumber'
  | 'listOfLiquidityProviderAddresses'
  | 'liquidityProviders';

export type FeesAndMevDeposit = {
  id: Scalars['ID'];
  liquidStakingNetwork: LiquidStakingNetwork;
  validator: LSDValidator;
  token: Scalars['String'];
  depositor: Scalars['String'];
  totalDeposit: Scalars['BigInt'];
};

export type FeesAndMevDeposit_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  liquidStakingNetwork?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_not?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_gt?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_lt?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_gte?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_lte?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_in?: InputMaybe<Array<Scalars['String']>>;
  liquidStakingNetwork_not_in?: InputMaybe<Array<Scalars['String']>>;
  liquidStakingNetwork_contains?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_contains_nocase?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_not_contains?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_not_contains_nocase?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_starts_with?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_starts_with_nocase?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_not_starts_with?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_ends_with?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_ends_with_nocase?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_not_ends_with?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_?: InputMaybe<LiquidStakingNetwork_filter>;
  validator?: InputMaybe<Scalars['String']>;
  validator_not?: InputMaybe<Scalars['String']>;
  validator_gt?: InputMaybe<Scalars['String']>;
  validator_lt?: InputMaybe<Scalars['String']>;
  validator_gte?: InputMaybe<Scalars['String']>;
  validator_lte?: InputMaybe<Scalars['String']>;
  validator_in?: InputMaybe<Array<Scalars['String']>>;
  validator_not_in?: InputMaybe<Array<Scalars['String']>>;
  validator_contains?: InputMaybe<Scalars['String']>;
  validator_contains_nocase?: InputMaybe<Scalars['String']>;
  validator_not_contains?: InputMaybe<Scalars['String']>;
  validator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  validator_starts_with?: InputMaybe<Scalars['String']>;
  validator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  validator_not_starts_with?: InputMaybe<Scalars['String']>;
  validator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  validator_ends_with?: InputMaybe<Scalars['String']>;
  validator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  validator_not_ends_with?: InputMaybe<Scalars['String']>;
  validator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  validator_?: InputMaybe<LSDValidator_filter>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  depositor?: InputMaybe<Scalars['String']>;
  depositor_not?: InputMaybe<Scalars['String']>;
  depositor_gt?: InputMaybe<Scalars['String']>;
  depositor_lt?: InputMaybe<Scalars['String']>;
  depositor_gte?: InputMaybe<Scalars['String']>;
  depositor_lte?: InputMaybe<Scalars['String']>;
  depositor_in?: InputMaybe<Array<Scalars['String']>>;
  depositor_not_in?: InputMaybe<Array<Scalars['String']>>;
  depositor_contains?: InputMaybe<Scalars['String']>;
  depositor_contains_nocase?: InputMaybe<Scalars['String']>;
  depositor_not_contains?: InputMaybe<Scalars['String']>;
  depositor_not_contains_nocase?: InputMaybe<Scalars['String']>;
  depositor_starts_with?: InputMaybe<Scalars['String']>;
  depositor_starts_with_nocase?: InputMaybe<Scalars['String']>;
  depositor_not_starts_with?: InputMaybe<Scalars['String']>;
  depositor_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  depositor_ends_with?: InputMaybe<Scalars['String']>;
  depositor_ends_with_nocase?: InputMaybe<Scalars['String']>;
  depositor_not_ends_with?: InputMaybe<Scalars['String']>;
  depositor_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  totalDeposit?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_not?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_gt?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_lt?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_gte?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_lte?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FeesAndMevDeposit_filter>>>;
  or?: InputMaybe<Array<InputMaybe<FeesAndMevDeposit_filter>>>;
};

export type FeesAndMevDeposit_orderBy =
  | 'id'
  | 'liquidStakingNetwork'
  | 'liquidStakingNetwork__id'
  | 'liquidStakingNetwork__liquidStakingManager'
  | 'liquidStakingNetwork__dao'
  | 'liquidStakingNetwork__feeRecipientAndSyndicate'
  | 'liquidStakingNetwork__savETHPool'
  | 'liquidStakingNetwork__feesAndMevPool'
  | 'liquidStakingNetwork__stakehouseAddress'
  | 'liquidStakingNetwork__optionalGatekeeper'
  | 'liquidStakingNetwork__lsdIndex'
  | 'liquidStakingNetwork__ticker'
  | 'liquidStakingNetwork__commission'
  | 'liquidStakingNetwork__isNodeRunningBehindGatekeeper'
  | 'liquidStakingNetwork__firstKnot'
  | 'liquidStakingNetwork__numberOfValidatorsBeingPrepared'
  | 'liquidStakingNetwork__numberOfStakedValidators'
  | 'liquidStakingNetwork__numberOfKnotsThatHaveMintedDerivatives'
  | 'validator'
  | 'validator__id'
  | 'validator__status'
  | 'validator__isReadyToStake'
  | 'validator__liquidStakingManager'
  | 'validator__withdrawn'
  | 'validator__currentIndex'
  | 'validator__totalETHStaked'
  | 'validator__totalETHFundedFromGiantPool'
  | 'validator__totalETHFromGiantProtectedStakingPool'
  | 'validator__totalETHFromGiantFeesAndMevPool'
  | 'validator__giantPoolLastFundedTimestamp'
  | 'validator__registerInitialsBlockNumber'
  | 'validator__ethSentToDepositContractBlockNumber'
  | 'validator__derivativesMintedBlockNumber'
  | 'token'
  | 'depositor'
  | 'totalDeposit';

export type GiantFeesAndMevLiquidityProvider = {
  id: Scalars['ID'];
  lpAddress: Scalars['String'];
  amount: Scalars['BigInt'];
  batch: Scalars['BigInt'];
  contractAddress: Scalars['String'];
  withdrawn: Scalars['BigInt'];
};

export type GiantFeesAndMevLiquidityProvider_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  lpAddress?: InputMaybe<Scalars['String']>;
  lpAddress_not?: InputMaybe<Scalars['String']>;
  lpAddress_gt?: InputMaybe<Scalars['String']>;
  lpAddress_lt?: InputMaybe<Scalars['String']>;
  lpAddress_gte?: InputMaybe<Scalars['String']>;
  lpAddress_lte?: InputMaybe<Scalars['String']>;
  lpAddress_in?: InputMaybe<Array<Scalars['String']>>;
  lpAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  lpAddress_contains?: InputMaybe<Scalars['String']>;
  lpAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  lpAddress_not_contains?: InputMaybe<Scalars['String']>;
  lpAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  lpAddress_starts_with?: InputMaybe<Scalars['String']>;
  lpAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  lpAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  lpAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  lpAddress_ends_with?: InputMaybe<Scalars['String']>;
  lpAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  lpAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  lpAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  batch?: InputMaybe<Scalars['BigInt']>;
  batch_not?: InputMaybe<Scalars['BigInt']>;
  batch_gt?: InputMaybe<Scalars['BigInt']>;
  batch_lt?: InputMaybe<Scalars['BigInt']>;
  batch_gte?: InputMaybe<Scalars['BigInt']>;
  batch_lte?: InputMaybe<Scalars['BigInt']>;
  batch_in?: InputMaybe<Array<Scalars['BigInt']>>;
  batch_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  contractAddress?: InputMaybe<Scalars['String']>;
  contractAddress_not?: InputMaybe<Scalars['String']>;
  contractAddress_gt?: InputMaybe<Scalars['String']>;
  contractAddress_lt?: InputMaybe<Scalars['String']>;
  contractAddress_gte?: InputMaybe<Scalars['String']>;
  contractAddress_lte?: InputMaybe<Scalars['String']>;
  contractAddress_in?: InputMaybe<Array<Scalars['String']>>;
  contractAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  contractAddress_contains?: InputMaybe<Scalars['String']>;
  contractAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  contractAddress_not_contains?: InputMaybe<Scalars['String']>;
  contractAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  contractAddress_starts_with?: InputMaybe<Scalars['String']>;
  contractAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contractAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  contractAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contractAddress_ends_with?: InputMaybe<Scalars['String']>;
  contractAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contractAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  contractAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  withdrawn?: InputMaybe<Scalars['BigInt']>;
  withdrawn_not?: InputMaybe<Scalars['BigInt']>;
  withdrawn_gt?: InputMaybe<Scalars['BigInt']>;
  withdrawn_lt?: InputMaybe<Scalars['BigInt']>;
  withdrawn_gte?: InputMaybe<Scalars['BigInt']>;
  withdrawn_lte?: InputMaybe<Scalars['BigInt']>;
  withdrawn_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawn_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GiantFeesAndMevLiquidityProvider_filter>>>;
  or?: InputMaybe<Array<InputMaybe<GiantFeesAndMevLiquidityProvider_filter>>>;
};

export type GiantFeesAndMevLiquidityProvider_orderBy =
  | 'id'
  | 'lpAddress'
  | 'amount'
  | 'batch'
  | 'contractAddress'
  | 'withdrawn';

export type GiantFeesAndMevPool = {
  id: Scalars['ID'];
  contractAddress: Scalars['String'];
  availableToStake: Scalars['BigInt'];
  sentToLiquidStakingNetworks: Scalars['BigInt'];
  giantLPToken: Scalars['String'];
};

export type GiantFeesAndMevPool_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  contractAddress?: InputMaybe<Scalars['String']>;
  contractAddress_not?: InputMaybe<Scalars['String']>;
  contractAddress_gt?: InputMaybe<Scalars['String']>;
  contractAddress_lt?: InputMaybe<Scalars['String']>;
  contractAddress_gte?: InputMaybe<Scalars['String']>;
  contractAddress_lte?: InputMaybe<Scalars['String']>;
  contractAddress_in?: InputMaybe<Array<Scalars['String']>>;
  contractAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  contractAddress_contains?: InputMaybe<Scalars['String']>;
  contractAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  contractAddress_not_contains?: InputMaybe<Scalars['String']>;
  contractAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  contractAddress_starts_with?: InputMaybe<Scalars['String']>;
  contractAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contractAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  contractAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contractAddress_ends_with?: InputMaybe<Scalars['String']>;
  contractAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contractAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  contractAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  availableToStake?: InputMaybe<Scalars['BigInt']>;
  availableToStake_not?: InputMaybe<Scalars['BigInt']>;
  availableToStake_gt?: InputMaybe<Scalars['BigInt']>;
  availableToStake_lt?: InputMaybe<Scalars['BigInt']>;
  availableToStake_gte?: InputMaybe<Scalars['BigInt']>;
  availableToStake_lte?: InputMaybe<Scalars['BigInt']>;
  availableToStake_in?: InputMaybe<Array<Scalars['BigInt']>>;
  availableToStake_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sentToLiquidStakingNetworks?: InputMaybe<Scalars['BigInt']>;
  sentToLiquidStakingNetworks_not?: InputMaybe<Scalars['BigInt']>;
  sentToLiquidStakingNetworks_gt?: InputMaybe<Scalars['BigInt']>;
  sentToLiquidStakingNetworks_lt?: InputMaybe<Scalars['BigInt']>;
  sentToLiquidStakingNetworks_gte?: InputMaybe<Scalars['BigInt']>;
  sentToLiquidStakingNetworks_lte?: InputMaybe<Scalars['BigInt']>;
  sentToLiquidStakingNetworks_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sentToLiquidStakingNetworks_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  giantLPToken?: InputMaybe<Scalars['String']>;
  giantLPToken_not?: InputMaybe<Scalars['String']>;
  giantLPToken_gt?: InputMaybe<Scalars['String']>;
  giantLPToken_lt?: InputMaybe<Scalars['String']>;
  giantLPToken_gte?: InputMaybe<Scalars['String']>;
  giantLPToken_lte?: InputMaybe<Scalars['String']>;
  giantLPToken_in?: InputMaybe<Array<Scalars['String']>>;
  giantLPToken_not_in?: InputMaybe<Array<Scalars['String']>>;
  giantLPToken_contains?: InputMaybe<Scalars['String']>;
  giantLPToken_contains_nocase?: InputMaybe<Scalars['String']>;
  giantLPToken_not_contains?: InputMaybe<Scalars['String']>;
  giantLPToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  giantLPToken_starts_with?: InputMaybe<Scalars['String']>;
  giantLPToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  giantLPToken_not_starts_with?: InputMaybe<Scalars['String']>;
  giantLPToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  giantLPToken_ends_with?: InputMaybe<Scalars['String']>;
  giantLPToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  giantLPToken_not_ends_with?: InputMaybe<Scalars['String']>;
  giantLPToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GiantFeesAndMevPool_filter>>>;
  or?: InputMaybe<Array<InputMaybe<GiantFeesAndMevPool_filter>>>;
};

export type GiantFeesAndMevPool_orderBy =
  | 'id'
  | 'contractAddress'
  | 'availableToStake'
  | 'sentToLiquidStakingNetworks'
  | 'giantLPToken';

export type GiantLiquidityProvider = {
  id: Scalars['ID'];
  lpAddress: Scalars['String'];
  amount: Scalars['BigInt'];
  batch: Scalars['BigInt'];
  contractAddress: Scalars['String'];
  withdrawn: Scalars['BigInt'];
};

export type GiantLiquidityProvider_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  lpAddress?: InputMaybe<Scalars['String']>;
  lpAddress_not?: InputMaybe<Scalars['String']>;
  lpAddress_gt?: InputMaybe<Scalars['String']>;
  lpAddress_lt?: InputMaybe<Scalars['String']>;
  lpAddress_gte?: InputMaybe<Scalars['String']>;
  lpAddress_lte?: InputMaybe<Scalars['String']>;
  lpAddress_in?: InputMaybe<Array<Scalars['String']>>;
  lpAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  lpAddress_contains?: InputMaybe<Scalars['String']>;
  lpAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  lpAddress_not_contains?: InputMaybe<Scalars['String']>;
  lpAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  lpAddress_starts_with?: InputMaybe<Scalars['String']>;
  lpAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  lpAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  lpAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  lpAddress_ends_with?: InputMaybe<Scalars['String']>;
  lpAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  lpAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  lpAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  batch?: InputMaybe<Scalars['BigInt']>;
  batch_not?: InputMaybe<Scalars['BigInt']>;
  batch_gt?: InputMaybe<Scalars['BigInt']>;
  batch_lt?: InputMaybe<Scalars['BigInt']>;
  batch_gte?: InputMaybe<Scalars['BigInt']>;
  batch_lte?: InputMaybe<Scalars['BigInt']>;
  batch_in?: InputMaybe<Array<Scalars['BigInt']>>;
  batch_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  contractAddress?: InputMaybe<Scalars['String']>;
  contractAddress_not?: InputMaybe<Scalars['String']>;
  contractAddress_gt?: InputMaybe<Scalars['String']>;
  contractAddress_lt?: InputMaybe<Scalars['String']>;
  contractAddress_gte?: InputMaybe<Scalars['String']>;
  contractAddress_lte?: InputMaybe<Scalars['String']>;
  contractAddress_in?: InputMaybe<Array<Scalars['String']>>;
  contractAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  contractAddress_contains?: InputMaybe<Scalars['String']>;
  contractAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  contractAddress_not_contains?: InputMaybe<Scalars['String']>;
  contractAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  contractAddress_starts_with?: InputMaybe<Scalars['String']>;
  contractAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contractAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  contractAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contractAddress_ends_with?: InputMaybe<Scalars['String']>;
  contractAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contractAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  contractAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  withdrawn?: InputMaybe<Scalars['BigInt']>;
  withdrawn_not?: InputMaybe<Scalars['BigInt']>;
  withdrawn_gt?: InputMaybe<Scalars['BigInt']>;
  withdrawn_lt?: InputMaybe<Scalars['BigInt']>;
  withdrawn_gte?: InputMaybe<Scalars['BigInt']>;
  withdrawn_lte?: InputMaybe<Scalars['BigInt']>;
  withdrawn_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawn_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GiantLiquidityProvider_filter>>>;
  or?: InputMaybe<Array<InputMaybe<GiantLiquidityProvider_filter>>>;
};

export type GiantLiquidityProvider_orderBy =
  | 'id'
  | 'lpAddress'
  | 'amount'
  | 'batch'
  | 'contractAddress'
  | 'withdrawn';

export type GiantSavETHPool = {
  id: Scalars['ID'];
  contractAddress: Scalars['String'];
  availableToStake: Scalars['BigInt'];
  sentToLiquidStakingNetworks: Scalars['BigInt'];
  giantLPToken: Scalars['String'];
};

export type GiantSavETHPool_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  contractAddress?: InputMaybe<Scalars['String']>;
  contractAddress_not?: InputMaybe<Scalars['String']>;
  contractAddress_gt?: InputMaybe<Scalars['String']>;
  contractAddress_lt?: InputMaybe<Scalars['String']>;
  contractAddress_gte?: InputMaybe<Scalars['String']>;
  contractAddress_lte?: InputMaybe<Scalars['String']>;
  contractAddress_in?: InputMaybe<Array<Scalars['String']>>;
  contractAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  contractAddress_contains?: InputMaybe<Scalars['String']>;
  contractAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  contractAddress_not_contains?: InputMaybe<Scalars['String']>;
  contractAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  contractAddress_starts_with?: InputMaybe<Scalars['String']>;
  contractAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contractAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  contractAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contractAddress_ends_with?: InputMaybe<Scalars['String']>;
  contractAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contractAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  contractAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  availableToStake?: InputMaybe<Scalars['BigInt']>;
  availableToStake_not?: InputMaybe<Scalars['BigInt']>;
  availableToStake_gt?: InputMaybe<Scalars['BigInt']>;
  availableToStake_lt?: InputMaybe<Scalars['BigInt']>;
  availableToStake_gte?: InputMaybe<Scalars['BigInt']>;
  availableToStake_lte?: InputMaybe<Scalars['BigInt']>;
  availableToStake_in?: InputMaybe<Array<Scalars['BigInt']>>;
  availableToStake_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sentToLiquidStakingNetworks?: InputMaybe<Scalars['BigInt']>;
  sentToLiquidStakingNetworks_not?: InputMaybe<Scalars['BigInt']>;
  sentToLiquidStakingNetworks_gt?: InputMaybe<Scalars['BigInt']>;
  sentToLiquidStakingNetworks_lt?: InputMaybe<Scalars['BigInt']>;
  sentToLiquidStakingNetworks_gte?: InputMaybe<Scalars['BigInt']>;
  sentToLiquidStakingNetworks_lte?: InputMaybe<Scalars['BigInt']>;
  sentToLiquidStakingNetworks_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sentToLiquidStakingNetworks_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  giantLPToken?: InputMaybe<Scalars['String']>;
  giantLPToken_not?: InputMaybe<Scalars['String']>;
  giantLPToken_gt?: InputMaybe<Scalars['String']>;
  giantLPToken_lt?: InputMaybe<Scalars['String']>;
  giantLPToken_gte?: InputMaybe<Scalars['String']>;
  giantLPToken_lte?: InputMaybe<Scalars['String']>;
  giantLPToken_in?: InputMaybe<Array<Scalars['String']>>;
  giantLPToken_not_in?: InputMaybe<Array<Scalars['String']>>;
  giantLPToken_contains?: InputMaybe<Scalars['String']>;
  giantLPToken_contains_nocase?: InputMaybe<Scalars['String']>;
  giantLPToken_not_contains?: InputMaybe<Scalars['String']>;
  giantLPToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  giantLPToken_starts_with?: InputMaybe<Scalars['String']>;
  giantLPToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  giantLPToken_not_starts_with?: InputMaybe<Scalars['String']>;
  giantLPToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  giantLPToken_ends_with?: InputMaybe<Scalars['String']>;
  giantLPToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  giantLPToken_not_ends_with?: InputMaybe<Scalars['String']>;
  giantLPToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GiantSavETHPool_filter>>>;
  or?: InputMaybe<Array<InputMaybe<GiantSavETHPool_filter>>>;
};

export type GiantSavETHPool_orderBy =
  | 'id'
  | 'contractAddress'
  | 'availableToStake'
  | 'sentToLiquidStakingNetworks'
  | 'giantLPToken';

export type LPToken = {
  id: Scalars['ID'];
  blsPublicKey: Scalars['String'];
  minted: Scalars['BigInt'];
  withdrawn: Scalars['BigInt'];
  liquidStakingNetwork: LiquidStakingNetwork;
  issuer: Scalars['String'];
  tokenType: Scalars['String'];
  giantPoolBalance: Scalars['BigInt'];
  lifecycleStatus: Scalars['String'];
  protectedBatch?: Maybe<ProtectedBatch>;
  feesAndMevBatch?: Maybe<FeesAndMevBatch>;
  liquidityProviders: Array<Depositor>;
};


export type LPTokenliquidityProvidersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Depositor_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Depositor_filter>;
};

export type LPToken_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  blsPublicKey?: InputMaybe<Scalars['String']>;
  blsPublicKey_not?: InputMaybe<Scalars['String']>;
  blsPublicKey_gt?: InputMaybe<Scalars['String']>;
  blsPublicKey_lt?: InputMaybe<Scalars['String']>;
  blsPublicKey_gte?: InputMaybe<Scalars['String']>;
  blsPublicKey_lte?: InputMaybe<Scalars['String']>;
  blsPublicKey_in?: InputMaybe<Array<Scalars['String']>>;
  blsPublicKey_not_in?: InputMaybe<Array<Scalars['String']>>;
  blsPublicKey_contains?: InputMaybe<Scalars['String']>;
  blsPublicKey_contains_nocase?: InputMaybe<Scalars['String']>;
  blsPublicKey_not_contains?: InputMaybe<Scalars['String']>;
  blsPublicKey_not_contains_nocase?: InputMaybe<Scalars['String']>;
  blsPublicKey_starts_with?: InputMaybe<Scalars['String']>;
  blsPublicKey_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blsPublicKey_not_starts_with?: InputMaybe<Scalars['String']>;
  blsPublicKey_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blsPublicKey_ends_with?: InputMaybe<Scalars['String']>;
  blsPublicKey_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blsPublicKey_not_ends_with?: InputMaybe<Scalars['String']>;
  blsPublicKey_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  minted?: InputMaybe<Scalars['BigInt']>;
  minted_not?: InputMaybe<Scalars['BigInt']>;
  minted_gt?: InputMaybe<Scalars['BigInt']>;
  minted_lt?: InputMaybe<Scalars['BigInt']>;
  minted_gte?: InputMaybe<Scalars['BigInt']>;
  minted_lte?: InputMaybe<Scalars['BigInt']>;
  minted_in?: InputMaybe<Array<Scalars['BigInt']>>;
  minted_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawn?: InputMaybe<Scalars['BigInt']>;
  withdrawn_not?: InputMaybe<Scalars['BigInt']>;
  withdrawn_gt?: InputMaybe<Scalars['BigInt']>;
  withdrawn_lt?: InputMaybe<Scalars['BigInt']>;
  withdrawn_gte?: InputMaybe<Scalars['BigInt']>;
  withdrawn_lte?: InputMaybe<Scalars['BigInt']>;
  withdrawn_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawn_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidStakingNetwork?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_not?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_gt?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_lt?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_gte?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_lte?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_in?: InputMaybe<Array<Scalars['String']>>;
  liquidStakingNetwork_not_in?: InputMaybe<Array<Scalars['String']>>;
  liquidStakingNetwork_contains?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_contains_nocase?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_not_contains?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_not_contains_nocase?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_starts_with?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_starts_with_nocase?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_not_starts_with?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_ends_with?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_ends_with_nocase?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_not_ends_with?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_?: InputMaybe<LiquidStakingNetwork_filter>;
  issuer?: InputMaybe<Scalars['String']>;
  issuer_not?: InputMaybe<Scalars['String']>;
  issuer_gt?: InputMaybe<Scalars['String']>;
  issuer_lt?: InputMaybe<Scalars['String']>;
  issuer_gte?: InputMaybe<Scalars['String']>;
  issuer_lte?: InputMaybe<Scalars['String']>;
  issuer_in?: InputMaybe<Array<Scalars['String']>>;
  issuer_not_in?: InputMaybe<Array<Scalars['String']>>;
  issuer_contains?: InputMaybe<Scalars['String']>;
  issuer_contains_nocase?: InputMaybe<Scalars['String']>;
  issuer_not_contains?: InputMaybe<Scalars['String']>;
  issuer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  issuer_starts_with?: InputMaybe<Scalars['String']>;
  issuer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  issuer_not_starts_with?: InputMaybe<Scalars['String']>;
  issuer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  issuer_ends_with?: InputMaybe<Scalars['String']>;
  issuer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  issuer_not_ends_with?: InputMaybe<Scalars['String']>;
  issuer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenType?: InputMaybe<Scalars['String']>;
  tokenType_not?: InputMaybe<Scalars['String']>;
  tokenType_gt?: InputMaybe<Scalars['String']>;
  tokenType_lt?: InputMaybe<Scalars['String']>;
  tokenType_gte?: InputMaybe<Scalars['String']>;
  tokenType_lte?: InputMaybe<Scalars['String']>;
  tokenType_in?: InputMaybe<Array<Scalars['String']>>;
  tokenType_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenType_contains?: InputMaybe<Scalars['String']>;
  tokenType_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenType_not_contains?: InputMaybe<Scalars['String']>;
  tokenType_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenType_starts_with?: InputMaybe<Scalars['String']>;
  tokenType_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenType_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenType_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenType_ends_with?: InputMaybe<Scalars['String']>;
  tokenType_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenType_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenType_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  giantPoolBalance?: InputMaybe<Scalars['BigInt']>;
  giantPoolBalance_not?: InputMaybe<Scalars['BigInt']>;
  giantPoolBalance_gt?: InputMaybe<Scalars['BigInt']>;
  giantPoolBalance_lt?: InputMaybe<Scalars['BigInt']>;
  giantPoolBalance_gte?: InputMaybe<Scalars['BigInt']>;
  giantPoolBalance_lte?: InputMaybe<Scalars['BigInt']>;
  giantPoolBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  giantPoolBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifecycleStatus?: InputMaybe<Scalars['String']>;
  lifecycleStatus_not?: InputMaybe<Scalars['String']>;
  lifecycleStatus_gt?: InputMaybe<Scalars['String']>;
  lifecycleStatus_lt?: InputMaybe<Scalars['String']>;
  lifecycleStatus_gte?: InputMaybe<Scalars['String']>;
  lifecycleStatus_lte?: InputMaybe<Scalars['String']>;
  lifecycleStatus_in?: InputMaybe<Array<Scalars['String']>>;
  lifecycleStatus_not_in?: InputMaybe<Array<Scalars['String']>>;
  lifecycleStatus_contains?: InputMaybe<Scalars['String']>;
  lifecycleStatus_contains_nocase?: InputMaybe<Scalars['String']>;
  lifecycleStatus_not_contains?: InputMaybe<Scalars['String']>;
  lifecycleStatus_not_contains_nocase?: InputMaybe<Scalars['String']>;
  lifecycleStatus_starts_with?: InputMaybe<Scalars['String']>;
  lifecycleStatus_starts_with_nocase?: InputMaybe<Scalars['String']>;
  lifecycleStatus_not_starts_with?: InputMaybe<Scalars['String']>;
  lifecycleStatus_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  lifecycleStatus_ends_with?: InputMaybe<Scalars['String']>;
  lifecycleStatus_ends_with_nocase?: InputMaybe<Scalars['String']>;
  lifecycleStatus_not_ends_with?: InputMaybe<Scalars['String']>;
  lifecycleStatus_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protectedBatch?: InputMaybe<Scalars['String']>;
  protectedBatch_not?: InputMaybe<Scalars['String']>;
  protectedBatch_gt?: InputMaybe<Scalars['String']>;
  protectedBatch_lt?: InputMaybe<Scalars['String']>;
  protectedBatch_gte?: InputMaybe<Scalars['String']>;
  protectedBatch_lte?: InputMaybe<Scalars['String']>;
  protectedBatch_in?: InputMaybe<Array<Scalars['String']>>;
  protectedBatch_not_in?: InputMaybe<Array<Scalars['String']>>;
  protectedBatch_contains?: InputMaybe<Scalars['String']>;
  protectedBatch_contains_nocase?: InputMaybe<Scalars['String']>;
  protectedBatch_not_contains?: InputMaybe<Scalars['String']>;
  protectedBatch_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protectedBatch_starts_with?: InputMaybe<Scalars['String']>;
  protectedBatch_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protectedBatch_not_starts_with?: InputMaybe<Scalars['String']>;
  protectedBatch_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protectedBatch_ends_with?: InputMaybe<Scalars['String']>;
  protectedBatch_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protectedBatch_not_ends_with?: InputMaybe<Scalars['String']>;
  protectedBatch_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protectedBatch_?: InputMaybe<ProtectedBatch_filter>;
  feesAndMevBatch?: InputMaybe<Scalars['String']>;
  feesAndMevBatch_not?: InputMaybe<Scalars['String']>;
  feesAndMevBatch_gt?: InputMaybe<Scalars['String']>;
  feesAndMevBatch_lt?: InputMaybe<Scalars['String']>;
  feesAndMevBatch_gte?: InputMaybe<Scalars['String']>;
  feesAndMevBatch_lte?: InputMaybe<Scalars['String']>;
  feesAndMevBatch_in?: InputMaybe<Array<Scalars['String']>>;
  feesAndMevBatch_not_in?: InputMaybe<Array<Scalars['String']>>;
  feesAndMevBatch_contains?: InputMaybe<Scalars['String']>;
  feesAndMevBatch_contains_nocase?: InputMaybe<Scalars['String']>;
  feesAndMevBatch_not_contains?: InputMaybe<Scalars['String']>;
  feesAndMevBatch_not_contains_nocase?: InputMaybe<Scalars['String']>;
  feesAndMevBatch_starts_with?: InputMaybe<Scalars['String']>;
  feesAndMevBatch_starts_with_nocase?: InputMaybe<Scalars['String']>;
  feesAndMevBatch_not_starts_with?: InputMaybe<Scalars['String']>;
  feesAndMevBatch_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  feesAndMevBatch_ends_with?: InputMaybe<Scalars['String']>;
  feesAndMevBatch_ends_with_nocase?: InputMaybe<Scalars['String']>;
  feesAndMevBatch_not_ends_with?: InputMaybe<Scalars['String']>;
  feesAndMevBatch_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  feesAndMevBatch_?: InputMaybe<FeesAndMevBatch_filter>;
  liquidityProviders?: InputMaybe<Array<Scalars['String']>>;
  liquidityProviders_not?: InputMaybe<Array<Scalars['String']>>;
  liquidityProviders_contains?: InputMaybe<Array<Scalars['String']>>;
  liquidityProviders_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  liquidityProviders_not_contains?: InputMaybe<Array<Scalars['String']>>;
  liquidityProviders_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  liquidityProviders_?: InputMaybe<Depositor_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LPToken_filter>>>;
  or?: InputMaybe<Array<InputMaybe<LPToken_filter>>>;
};

export type LPToken_orderBy =
  | 'id'
  | 'blsPublicKey'
  | 'minted'
  | 'withdrawn'
  | 'liquidStakingNetwork'
  | 'liquidStakingNetwork__id'
  | 'liquidStakingNetwork__liquidStakingManager'
  | 'liquidStakingNetwork__dao'
  | 'liquidStakingNetwork__feeRecipientAndSyndicate'
  | 'liquidStakingNetwork__savETHPool'
  | 'liquidStakingNetwork__feesAndMevPool'
  | 'liquidStakingNetwork__stakehouseAddress'
  | 'liquidStakingNetwork__optionalGatekeeper'
  | 'liquidStakingNetwork__lsdIndex'
  | 'liquidStakingNetwork__ticker'
  | 'liquidStakingNetwork__commission'
  | 'liquidStakingNetwork__isNodeRunningBehindGatekeeper'
  | 'liquidStakingNetwork__firstKnot'
  | 'liquidStakingNetwork__numberOfValidatorsBeingPrepared'
  | 'liquidStakingNetwork__numberOfStakedValidators'
  | 'liquidStakingNetwork__numberOfKnotsThatHaveMintedDerivatives'
  | 'issuer'
  | 'tokenType'
  | 'giantPoolBalance'
  | 'lifecycleStatus'
  | 'protectedBatch'
  | 'protectedBatch__id'
  | 'protectedBatch__blsPublicKey'
  | 'feesAndMevBatch'
  | 'feesAndMevBatch__id'
  | 'feesAndMevBatch__blsPublicKey'
  | 'liquidityProviders';

export type LSDValidator = {
  id: Scalars['ID'];
  smartWallet: SmartWallet;
  status: Scalars['String'];
  isReadyToStake: Scalars['Boolean'];
  liquidStakingManager: Scalars['String'];
  withdrawn: Scalars['Boolean'];
  currentIndex?: Maybe<Scalars['BigInt']>;
  totalETHStaked: Scalars['BigInt'];
  totalETHFundedFromGiantPool: Scalars['BigInt'];
  totalETHFromGiantProtectedStakingPool: Scalars['BigInt'];
  totalETHFromGiantFeesAndMevPool: Scalars['BigInt'];
  giantPoolLastFundedTimestamp: Scalars['BigInt'];
  registerInitialsBlockNumber: Scalars['BigInt'];
  ethSentToDepositContractBlockNumber: Scalars['BigInt'];
  derivativesMintedBlockNumber: Scalars['BigInt'];
};

export type LSDValidator_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  smartWallet?: InputMaybe<Scalars['String']>;
  smartWallet_not?: InputMaybe<Scalars['String']>;
  smartWallet_gt?: InputMaybe<Scalars['String']>;
  smartWallet_lt?: InputMaybe<Scalars['String']>;
  smartWallet_gte?: InputMaybe<Scalars['String']>;
  smartWallet_lte?: InputMaybe<Scalars['String']>;
  smartWallet_in?: InputMaybe<Array<Scalars['String']>>;
  smartWallet_not_in?: InputMaybe<Array<Scalars['String']>>;
  smartWallet_contains?: InputMaybe<Scalars['String']>;
  smartWallet_contains_nocase?: InputMaybe<Scalars['String']>;
  smartWallet_not_contains?: InputMaybe<Scalars['String']>;
  smartWallet_not_contains_nocase?: InputMaybe<Scalars['String']>;
  smartWallet_starts_with?: InputMaybe<Scalars['String']>;
  smartWallet_starts_with_nocase?: InputMaybe<Scalars['String']>;
  smartWallet_not_starts_with?: InputMaybe<Scalars['String']>;
  smartWallet_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  smartWallet_ends_with?: InputMaybe<Scalars['String']>;
  smartWallet_ends_with_nocase?: InputMaybe<Scalars['String']>;
  smartWallet_not_ends_with?: InputMaybe<Scalars['String']>;
  smartWallet_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  smartWallet_?: InputMaybe<SmartWallet_filter>;
  status?: InputMaybe<Scalars['String']>;
  status_not?: InputMaybe<Scalars['String']>;
  status_gt?: InputMaybe<Scalars['String']>;
  status_lt?: InputMaybe<Scalars['String']>;
  status_gte?: InputMaybe<Scalars['String']>;
  status_lte?: InputMaybe<Scalars['String']>;
  status_in?: InputMaybe<Array<Scalars['String']>>;
  status_not_in?: InputMaybe<Array<Scalars['String']>>;
  status_contains?: InputMaybe<Scalars['String']>;
  status_contains_nocase?: InputMaybe<Scalars['String']>;
  status_not_contains?: InputMaybe<Scalars['String']>;
  status_not_contains_nocase?: InputMaybe<Scalars['String']>;
  status_starts_with?: InputMaybe<Scalars['String']>;
  status_starts_with_nocase?: InputMaybe<Scalars['String']>;
  status_not_starts_with?: InputMaybe<Scalars['String']>;
  status_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  status_ends_with?: InputMaybe<Scalars['String']>;
  status_ends_with_nocase?: InputMaybe<Scalars['String']>;
  status_not_ends_with?: InputMaybe<Scalars['String']>;
  status_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  isReadyToStake?: InputMaybe<Scalars['Boolean']>;
  isReadyToStake_not?: InputMaybe<Scalars['Boolean']>;
  isReadyToStake_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isReadyToStake_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  liquidStakingManager?: InputMaybe<Scalars['String']>;
  liquidStakingManager_not?: InputMaybe<Scalars['String']>;
  liquidStakingManager_gt?: InputMaybe<Scalars['String']>;
  liquidStakingManager_lt?: InputMaybe<Scalars['String']>;
  liquidStakingManager_gte?: InputMaybe<Scalars['String']>;
  liquidStakingManager_lte?: InputMaybe<Scalars['String']>;
  liquidStakingManager_in?: InputMaybe<Array<Scalars['String']>>;
  liquidStakingManager_not_in?: InputMaybe<Array<Scalars['String']>>;
  liquidStakingManager_contains?: InputMaybe<Scalars['String']>;
  liquidStakingManager_contains_nocase?: InputMaybe<Scalars['String']>;
  liquidStakingManager_not_contains?: InputMaybe<Scalars['String']>;
  liquidStakingManager_not_contains_nocase?: InputMaybe<Scalars['String']>;
  liquidStakingManager_starts_with?: InputMaybe<Scalars['String']>;
  liquidStakingManager_starts_with_nocase?: InputMaybe<Scalars['String']>;
  liquidStakingManager_not_starts_with?: InputMaybe<Scalars['String']>;
  liquidStakingManager_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  liquidStakingManager_ends_with?: InputMaybe<Scalars['String']>;
  liquidStakingManager_ends_with_nocase?: InputMaybe<Scalars['String']>;
  liquidStakingManager_not_ends_with?: InputMaybe<Scalars['String']>;
  liquidStakingManager_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  withdrawn?: InputMaybe<Scalars['Boolean']>;
  withdrawn_not?: InputMaybe<Scalars['Boolean']>;
  withdrawn_in?: InputMaybe<Array<Scalars['Boolean']>>;
  withdrawn_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  currentIndex?: InputMaybe<Scalars['BigInt']>;
  currentIndex_not?: InputMaybe<Scalars['BigInt']>;
  currentIndex_gt?: InputMaybe<Scalars['BigInt']>;
  currentIndex_lt?: InputMaybe<Scalars['BigInt']>;
  currentIndex_gte?: InputMaybe<Scalars['BigInt']>;
  currentIndex_lte?: InputMaybe<Scalars['BigInt']>;
  currentIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalETHStaked?: InputMaybe<Scalars['BigInt']>;
  totalETHStaked_not?: InputMaybe<Scalars['BigInt']>;
  totalETHStaked_gt?: InputMaybe<Scalars['BigInt']>;
  totalETHStaked_lt?: InputMaybe<Scalars['BigInt']>;
  totalETHStaked_gte?: InputMaybe<Scalars['BigInt']>;
  totalETHStaked_lte?: InputMaybe<Scalars['BigInt']>;
  totalETHStaked_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalETHStaked_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalETHFundedFromGiantPool?: InputMaybe<Scalars['BigInt']>;
  totalETHFundedFromGiantPool_not?: InputMaybe<Scalars['BigInt']>;
  totalETHFundedFromGiantPool_gt?: InputMaybe<Scalars['BigInt']>;
  totalETHFundedFromGiantPool_lt?: InputMaybe<Scalars['BigInt']>;
  totalETHFundedFromGiantPool_gte?: InputMaybe<Scalars['BigInt']>;
  totalETHFundedFromGiantPool_lte?: InputMaybe<Scalars['BigInt']>;
  totalETHFundedFromGiantPool_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalETHFundedFromGiantPool_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalETHFromGiantProtectedStakingPool?: InputMaybe<Scalars['BigInt']>;
  totalETHFromGiantProtectedStakingPool_not?: InputMaybe<Scalars['BigInt']>;
  totalETHFromGiantProtectedStakingPool_gt?: InputMaybe<Scalars['BigInt']>;
  totalETHFromGiantProtectedStakingPool_lt?: InputMaybe<Scalars['BigInt']>;
  totalETHFromGiantProtectedStakingPool_gte?: InputMaybe<Scalars['BigInt']>;
  totalETHFromGiantProtectedStakingPool_lte?: InputMaybe<Scalars['BigInt']>;
  totalETHFromGiantProtectedStakingPool_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalETHFromGiantProtectedStakingPool_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalETHFromGiantFeesAndMevPool?: InputMaybe<Scalars['BigInt']>;
  totalETHFromGiantFeesAndMevPool_not?: InputMaybe<Scalars['BigInt']>;
  totalETHFromGiantFeesAndMevPool_gt?: InputMaybe<Scalars['BigInt']>;
  totalETHFromGiantFeesAndMevPool_lt?: InputMaybe<Scalars['BigInt']>;
  totalETHFromGiantFeesAndMevPool_gte?: InputMaybe<Scalars['BigInt']>;
  totalETHFromGiantFeesAndMevPool_lte?: InputMaybe<Scalars['BigInt']>;
  totalETHFromGiantFeesAndMevPool_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalETHFromGiantFeesAndMevPool_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  giantPoolLastFundedTimestamp?: InputMaybe<Scalars['BigInt']>;
  giantPoolLastFundedTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  giantPoolLastFundedTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  giantPoolLastFundedTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  giantPoolLastFundedTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  giantPoolLastFundedTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  giantPoolLastFundedTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  giantPoolLastFundedTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  registerInitialsBlockNumber?: InputMaybe<Scalars['BigInt']>;
  registerInitialsBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  registerInitialsBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  registerInitialsBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  registerInitialsBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  registerInitialsBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  registerInitialsBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  registerInitialsBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ethSentToDepositContractBlockNumber?: InputMaybe<Scalars['BigInt']>;
  ethSentToDepositContractBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  ethSentToDepositContractBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  ethSentToDepositContractBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  ethSentToDepositContractBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  ethSentToDepositContractBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  ethSentToDepositContractBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ethSentToDepositContractBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  derivativesMintedBlockNumber?: InputMaybe<Scalars['BigInt']>;
  derivativesMintedBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  derivativesMintedBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  derivativesMintedBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  derivativesMintedBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  derivativesMintedBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  derivativesMintedBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  derivativesMintedBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LSDValidator_filter>>>;
  or?: InputMaybe<Array<InputMaybe<LSDValidator_filter>>>;
};

export type LSDValidator_orderBy =
  | 'id'
  | 'smartWallet'
  | 'smartWallet__id'
  | 'smartWallet__availableToStake'
  | 'smartWallet__inProcessOfAwaitingActivation'
  | 'status'
  | 'isReadyToStake'
  | 'liquidStakingManager'
  | 'withdrawn'
  | 'currentIndex'
  | 'totalETHStaked'
  | 'totalETHFundedFromGiantPool'
  | 'totalETHFromGiantProtectedStakingPool'
  | 'totalETHFromGiantFeesAndMevPool'
  | 'giantPoolLastFundedTimestamp'
  | 'registerInitialsBlockNumber'
  | 'ethSentToDepositContractBlockNumber'
  | 'derivativesMintedBlockNumber';

export type LiquidStakingNetwork = {
  id: Scalars['ID'];
  liquidStakingManager: Scalars['Bytes'];
  dao: Scalars['Bytes'];
  feeRecipientAndSyndicate: Scalars['Bytes'];
  savETHPool: Scalars['Bytes'];
  feesAndMevPool: Scalars['Bytes'];
  stakehouseAddress?: Maybe<Scalars['Bytes']>;
  optionalGatekeeper?: Maybe<Scalars['Bytes']>;
  lsdIndex: Scalars['BigInt'];
  ticker: Scalars['String'];
  commission: Scalars['BigInt'];
  isNodeRunningBehindGatekeeper: Scalars['Boolean'];
  firstKnot?: Maybe<Scalars['String']>;
  numberOfValidatorsBeingPrepared: Scalars['BigInt'];
  numberOfStakedValidators: Scalars['BigInt'];
  numberOfKnotsThatHaveMintedDerivatives: Scalars['BigInt'];
};

export type LiquidStakingNetwork_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  liquidStakingManager?: InputMaybe<Scalars['Bytes']>;
  liquidStakingManager_not?: InputMaybe<Scalars['Bytes']>;
  liquidStakingManager_gt?: InputMaybe<Scalars['Bytes']>;
  liquidStakingManager_lt?: InputMaybe<Scalars['Bytes']>;
  liquidStakingManager_gte?: InputMaybe<Scalars['Bytes']>;
  liquidStakingManager_lte?: InputMaybe<Scalars['Bytes']>;
  liquidStakingManager_in?: InputMaybe<Array<Scalars['Bytes']>>;
  liquidStakingManager_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  liquidStakingManager_contains?: InputMaybe<Scalars['Bytes']>;
  liquidStakingManager_not_contains?: InputMaybe<Scalars['Bytes']>;
  dao?: InputMaybe<Scalars['Bytes']>;
  dao_not?: InputMaybe<Scalars['Bytes']>;
  dao_gt?: InputMaybe<Scalars['Bytes']>;
  dao_lt?: InputMaybe<Scalars['Bytes']>;
  dao_gte?: InputMaybe<Scalars['Bytes']>;
  dao_lte?: InputMaybe<Scalars['Bytes']>;
  dao_in?: InputMaybe<Array<Scalars['Bytes']>>;
  dao_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  dao_contains?: InputMaybe<Scalars['Bytes']>;
  dao_not_contains?: InputMaybe<Scalars['Bytes']>;
  feeRecipientAndSyndicate?: InputMaybe<Scalars['Bytes']>;
  feeRecipientAndSyndicate_not?: InputMaybe<Scalars['Bytes']>;
  feeRecipientAndSyndicate_gt?: InputMaybe<Scalars['Bytes']>;
  feeRecipientAndSyndicate_lt?: InputMaybe<Scalars['Bytes']>;
  feeRecipientAndSyndicate_gte?: InputMaybe<Scalars['Bytes']>;
  feeRecipientAndSyndicate_lte?: InputMaybe<Scalars['Bytes']>;
  feeRecipientAndSyndicate_in?: InputMaybe<Array<Scalars['Bytes']>>;
  feeRecipientAndSyndicate_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  feeRecipientAndSyndicate_contains?: InputMaybe<Scalars['Bytes']>;
  feeRecipientAndSyndicate_not_contains?: InputMaybe<Scalars['Bytes']>;
  savETHPool?: InputMaybe<Scalars['Bytes']>;
  savETHPool_not?: InputMaybe<Scalars['Bytes']>;
  savETHPool_gt?: InputMaybe<Scalars['Bytes']>;
  savETHPool_lt?: InputMaybe<Scalars['Bytes']>;
  savETHPool_gte?: InputMaybe<Scalars['Bytes']>;
  savETHPool_lte?: InputMaybe<Scalars['Bytes']>;
  savETHPool_in?: InputMaybe<Array<Scalars['Bytes']>>;
  savETHPool_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  savETHPool_contains?: InputMaybe<Scalars['Bytes']>;
  savETHPool_not_contains?: InputMaybe<Scalars['Bytes']>;
  feesAndMevPool?: InputMaybe<Scalars['Bytes']>;
  feesAndMevPool_not?: InputMaybe<Scalars['Bytes']>;
  feesAndMevPool_gt?: InputMaybe<Scalars['Bytes']>;
  feesAndMevPool_lt?: InputMaybe<Scalars['Bytes']>;
  feesAndMevPool_gte?: InputMaybe<Scalars['Bytes']>;
  feesAndMevPool_lte?: InputMaybe<Scalars['Bytes']>;
  feesAndMevPool_in?: InputMaybe<Array<Scalars['Bytes']>>;
  feesAndMevPool_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  feesAndMevPool_contains?: InputMaybe<Scalars['Bytes']>;
  feesAndMevPool_not_contains?: InputMaybe<Scalars['Bytes']>;
  stakehouseAddress?: InputMaybe<Scalars['Bytes']>;
  stakehouseAddress_not?: InputMaybe<Scalars['Bytes']>;
  stakehouseAddress_gt?: InputMaybe<Scalars['Bytes']>;
  stakehouseAddress_lt?: InputMaybe<Scalars['Bytes']>;
  stakehouseAddress_gte?: InputMaybe<Scalars['Bytes']>;
  stakehouseAddress_lte?: InputMaybe<Scalars['Bytes']>;
  stakehouseAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  stakehouseAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  stakehouseAddress_contains?: InputMaybe<Scalars['Bytes']>;
  stakehouseAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  optionalGatekeeper?: InputMaybe<Scalars['Bytes']>;
  optionalGatekeeper_not?: InputMaybe<Scalars['Bytes']>;
  optionalGatekeeper_gt?: InputMaybe<Scalars['Bytes']>;
  optionalGatekeeper_lt?: InputMaybe<Scalars['Bytes']>;
  optionalGatekeeper_gte?: InputMaybe<Scalars['Bytes']>;
  optionalGatekeeper_lte?: InputMaybe<Scalars['Bytes']>;
  optionalGatekeeper_in?: InputMaybe<Array<Scalars['Bytes']>>;
  optionalGatekeeper_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  optionalGatekeeper_contains?: InputMaybe<Scalars['Bytes']>;
  optionalGatekeeper_not_contains?: InputMaybe<Scalars['Bytes']>;
  lsdIndex?: InputMaybe<Scalars['BigInt']>;
  lsdIndex_not?: InputMaybe<Scalars['BigInt']>;
  lsdIndex_gt?: InputMaybe<Scalars['BigInt']>;
  lsdIndex_lt?: InputMaybe<Scalars['BigInt']>;
  lsdIndex_gte?: InputMaybe<Scalars['BigInt']>;
  lsdIndex_lte?: InputMaybe<Scalars['BigInt']>;
  lsdIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lsdIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ticker?: InputMaybe<Scalars['String']>;
  ticker_not?: InputMaybe<Scalars['String']>;
  ticker_gt?: InputMaybe<Scalars['String']>;
  ticker_lt?: InputMaybe<Scalars['String']>;
  ticker_gte?: InputMaybe<Scalars['String']>;
  ticker_lte?: InputMaybe<Scalars['String']>;
  ticker_in?: InputMaybe<Array<Scalars['String']>>;
  ticker_not_in?: InputMaybe<Array<Scalars['String']>>;
  ticker_contains?: InputMaybe<Scalars['String']>;
  ticker_contains_nocase?: InputMaybe<Scalars['String']>;
  ticker_not_contains?: InputMaybe<Scalars['String']>;
  ticker_not_contains_nocase?: InputMaybe<Scalars['String']>;
  ticker_starts_with?: InputMaybe<Scalars['String']>;
  ticker_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ticker_not_starts_with?: InputMaybe<Scalars['String']>;
  ticker_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ticker_ends_with?: InputMaybe<Scalars['String']>;
  ticker_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ticker_not_ends_with?: InputMaybe<Scalars['String']>;
  ticker_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  commission?: InputMaybe<Scalars['BigInt']>;
  commission_not?: InputMaybe<Scalars['BigInt']>;
  commission_gt?: InputMaybe<Scalars['BigInt']>;
  commission_lt?: InputMaybe<Scalars['BigInt']>;
  commission_gte?: InputMaybe<Scalars['BigInt']>;
  commission_lte?: InputMaybe<Scalars['BigInt']>;
  commission_in?: InputMaybe<Array<Scalars['BigInt']>>;
  commission_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  isNodeRunningBehindGatekeeper?: InputMaybe<Scalars['Boolean']>;
  isNodeRunningBehindGatekeeper_not?: InputMaybe<Scalars['Boolean']>;
  isNodeRunningBehindGatekeeper_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isNodeRunningBehindGatekeeper_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  firstKnot?: InputMaybe<Scalars['String']>;
  firstKnot_not?: InputMaybe<Scalars['String']>;
  firstKnot_gt?: InputMaybe<Scalars['String']>;
  firstKnot_lt?: InputMaybe<Scalars['String']>;
  firstKnot_gte?: InputMaybe<Scalars['String']>;
  firstKnot_lte?: InputMaybe<Scalars['String']>;
  firstKnot_in?: InputMaybe<Array<Scalars['String']>>;
  firstKnot_not_in?: InputMaybe<Array<Scalars['String']>>;
  firstKnot_contains?: InputMaybe<Scalars['String']>;
  firstKnot_contains_nocase?: InputMaybe<Scalars['String']>;
  firstKnot_not_contains?: InputMaybe<Scalars['String']>;
  firstKnot_not_contains_nocase?: InputMaybe<Scalars['String']>;
  firstKnot_starts_with?: InputMaybe<Scalars['String']>;
  firstKnot_starts_with_nocase?: InputMaybe<Scalars['String']>;
  firstKnot_not_starts_with?: InputMaybe<Scalars['String']>;
  firstKnot_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  firstKnot_ends_with?: InputMaybe<Scalars['String']>;
  firstKnot_ends_with_nocase?: InputMaybe<Scalars['String']>;
  firstKnot_not_ends_with?: InputMaybe<Scalars['String']>;
  firstKnot_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  numberOfValidatorsBeingPrepared?: InputMaybe<Scalars['BigInt']>;
  numberOfValidatorsBeingPrepared_not?: InputMaybe<Scalars['BigInt']>;
  numberOfValidatorsBeingPrepared_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfValidatorsBeingPrepared_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfValidatorsBeingPrepared_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfValidatorsBeingPrepared_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfValidatorsBeingPrepared_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfValidatorsBeingPrepared_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfStakedValidators?: InputMaybe<Scalars['BigInt']>;
  numberOfStakedValidators_not?: InputMaybe<Scalars['BigInt']>;
  numberOfStakedValidators_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfStakedValidators_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfStakedValidators_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfStakedValidators_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfStakedValidators_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfStakedValidators_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfKnotsThatHaveMintedDerivatives?: InputMaybe<Scalars['BigInt']>;
  numberOfKnotsThatHaveMintedDerivatives_not?: InputMaybe<Scalars['BigInt']>;
  numberOfKnotsThatHaveMintedDerivatives_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfKnotsThatHaveMintedDerivatives_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfKnotsThatHaveMintedDerivatives_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfKnotsThatHaveMintedDerivatives_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfKnotsThatHaveMintedDerivatives_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfKnotsThatHaveMintedDerivatives_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LiquidStakingNetwork_filter>>>;
  or?: InputMaybe<Array<InputMaybe<LiquidStakingNetwork_filter>>>;
};

export type LiquidStakingNetwork_orderBy =
  | 'id'
  | 'liquidStakingManager'
  | 'dao'
  | 'feeRecipientAndSyndicate'
  | 'savETHPool'
  | 'feesAndMevPool'
  | 'stakehouseAddress'
  | 'optionalGatekeeper'
  | 'lsdIndex'
  | 'ticker'
  | 'commission'
  | 'isNodeRunningBehindGatekeeper'
  | 'firstKnot'
  | 'numberOfValidatorsBeingPrepared'
  | 'numberOfStakedValidators'
  | 'numberOfKnotsThatHaveMintedDerivatives';

export type NodeRunner = {
  id: Scalars['ID'];
  name: Scalars['String'];
  smartWallets: Array<SmartWallet>;
  liquidStakingNetworks: Array<LiquidStakingNetwork>;
  validators: Array<LSDValidator>;
};


export type NodeRunnersmartWalletsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SmartWallet_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SmartWallet_filter>;
};


export type NodeRunnerliquidStakingNetworksArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidStakingNetwork_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidStakingNetwork_filter>;
};


export type NodeRunnervalidatorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LSDValidator_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LSDValidator_filter>;
};

export type NodeRunner_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  smartWallets?: InputMaybe<Array<Scalars['String']>>;
  smartWallets_not?: InputMaybe<Array<Scalars['String']>>;
  smartWallets_contains?: InputMaybe<Array<Scalars['String']>>;
  smartWallets_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  smartWallets_not_contains?: InputMaybe<Array<Scalars['String']>>;
  smartWallets_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  smartWallets_?: InputMaybe<SmartWallet_filter>;
  liquidStakingNetworks?: InputMaybe<Array<Scalars['String']>>;
  liquidStakingNetworks_not?: InputMaybe<Array<Scalars['String']>>;
  liquidStakingNetworks_contains?: InputMaybe<Array<Scalars['String']>>;
  liquidStakingNetworks_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  liquidStakingNetworks_not_contains?: InputMaybe<Array<Scalars['String']>>;
  liquidStakingNetworks_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  liquidStakingNetworks_?: InputMaybe<LiquidStakingNetwork_filter>;
  validators?: InputMaybe<Array<Scalars['String']>>;
  validators_not?: InputMaybe<Array<Scalars['String']>>;
  validators_contains?: InputMaybe<Array<Scalars['String']>>;
  validators_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  validators_not_contains?: InputMaybe<Array<Scalars['String']>>;
  validators_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  validators_?: InputMaybe<LSDValidator_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<NodeRunner_filter>>>;
  or?: InputMaybe<Array<InputMaybe<NodeRunner_filter>>>;
};

export type NodeRunner_orderBy =
  | 'id'
  | 'name'
  | 'smartWallets'
  | 'liquidStakingNetworks'
  | 'validators';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Payout = {
  id: Scalars['ID'];
  user: Scalars['String'];
  amount: Scalars['BigInt'];
  recipient: Scalars['String'];
  blsPublicKey?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  timestamp: Scalars['BigInt'];
};

export type Payout_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  user?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  recipient?: InputMaybe<Scalars['String']>;
  recipient_not?: InputMaybe<Scalars['String']>;
  recipient_gt?: InputMaybe<Scalars['String']>;
  recipient_lt?: InputMaybe<Scalars['String']>;
  recipient_gte?: InputMaybe<Scalars['String']>;
  recipient_lte?: InputMaybe<Scalars['String']>;
  recipient_in?: InputMaybe<Array<Scalars['String']>>;
  recipient_not_in?: InputMaybe<Array<Scalars['String']>>;
  recipient_contains?: InputMaybe<Scalars['String']>;
  recipient_contains_nocase?: InputMaybe<Scalars['String']>;
  recipient_not_contains?: InputMaybe<Scalars['String']>;
  recipient_not_contains_nocase?: InputMaybe<Scalars['String']>;
  recipient_starts_with?: InputMaybe<Scalars['String']>;
  recipient_starts_with_nocase?: InputMaybe<Scalars['String']>;
  recipient_not_starts_with?: InputMaybe<Scalars['String']>;
  recipient_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  recipient_ends_with?: InputMaybe<Scalars['String']>;
  recipient_ends_with_nocase?: InputMaybe<Scalars['String']>;
  recipient_not_ends_with?: InputMaybe<Scalars['String']>;
  recipient_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blsPublicKey?: InputMaybe<Scalars['String']>;
  blsPublicKey_not?: InputMaybe<Scalars['String']>;
  blsPublicKey_gt?: InputMaybe<Scalars['String']>;
  blsPublicKey_lt?: InputMaybe<Scalars['String']>;
  blsPublicKey_gte?: InputMaybe<Scalars['String']>;
  blsPublicKey_lte?: InputMaybe<Scalars['String']>;
  blsPublicKey_in?: InputMaybe<Array<Scalars['String']>>;
  blsPublicKey_not_in?: InputMaybe<Array<Scalars['String']>>;
  blsPublicKey_contains?: InputMaybe<Scalars['String']>;
  blsPublicKey_contains_nocase?: InputMaybe<Scalars['String']>;
  blsPublicKey_not_contains?: InputMaybe<Scalars['String']>;
  blsPublicKey_not_contains_nocase?: InputMaybe<Scalars['String']>;
  blsPublicKey_starts_with?: InputMaybe<Scalars['String']>;
  blsPublicKey_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blsPublicKey_not_starts_with?: InputMaybe<Scalars['String']>;
  blsPublicKey_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blsPublicKey_ends_with?: InputMaybe<Scalars['String']>;
  blsPublicKey_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blsPublicKey_not_ends_with?: InputMaybe<Scalars['String']>;
  blsPublicKey_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  type_not?: InputMaybe<Scalars['String']>;
  type_gt?: InputMaybe<Scalars['String']>;
  type_lt?: InputMaybe<Scalars['String']>;
  type_gte?: InputMaybe<Scalars['String']>;
  type_lte?: InputMaybe<Scalars['String']>;
  type_in?: InputMaybe<Array<Scalars['String']>>;
  type_not_in?: InputMaybe<Array<Scalars['String']>>;
  type_contains?: InputMaybe<Scalars['String']>;
  type_contains_nocase?: InputMaybe<Scalars['String']>;
  type_not_contains?: InputMaybe<Scalars['String']>;
  type_not_contains_nocase?: InputMaybe<Scalars['String']>;
  type_starts_with?: InputMaybe<Scalars['String']>;
  type_starts_with_nocase?: InputMaybe<Scalars['String']>;
  type_not_starts_with?: InputMaybe<Scalars['String']>;
  type_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  type_ends_with?: InputMaybe<Scalars['String']>;
  type_ends_with_nocase?: InputMaybe<Scalars['String']>;
  type_not_ends_with?: InputMaybe<Scalars['String']>;
  type_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Payout_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Payout_filter>>>;
};

export type Payout_orderBy =
  | 'id'
  | 'user'
  | 'amount'
  | 'recipient'
  | 'blsPublicKey'
  | 'type'
  | 'timestamp';

export type ProtectedBatch = {
  id: Scalars['ID'];
  blsPublicKey?: Maybe<Scalars['String']>;
  vaultLPToken?: Maybe<LPToken>;
  lsdValidator?: Maybe<LSDValidator>;
  listOfLiquidityProviderAddresses: Array<Scalars['String']>;
  liquidityProviders: Array<GiantLiquidityProvider>;
};


export type ProtectedBatchliquidityProvidersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GiantLiquidityProvider_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GiantLiquidityProvider_filter>;
};

export type ProtectedBatch_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  blsPublicKey?: InputMaybe<Scalars['String']>;
  blsPublicKey_not?: InputMaybe<Scalars['String']>;
  blsPublicKey_gt?: InputMaybe<Scalars['String']>;
  blsPublicKey_lt?: InputMaybe<Scalars['String']>;
  blsPublicKey_gte?: InputMaybe<Scalars['String']>;
  blsPublicKey_lte?: InputMaybe<Scalars['String']>;
  blsPublicKey_in?: InputMaybe<Array<Scalars['String']>>;
  blsPublicKey_not_in?: InputMaybe<Array<Scalars['String']>>;
  blsPublicKey_contains?: InputMaybe<Scalars['String']>;
  blsPublicKey_contains_nocase?: InputMaybe<Scalars['String']>;
  blsPublicKey_not_contains?: InputMaybe<Scalars['String']>;
  blsPublicKey_not_contains_nocase?: InputMaybe<Scalars['String']>;
  blsPublicKey_starts_with?: InputMaybe<Scalars['String']>;
  blsPublicKey_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blsPublicKey_not_starts_with?: InputMaybe<Scalars['String']>;
  blsPublicKey_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blsPublicKey_ends_with?: InputMaybe<Scalars['String']>;
  blsPublicKey_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blsPublicKey_not_ends_with?: InputMaybe<Scalars['String']>;
  blsPublicKey_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  vaultLPToken_?: InputMaybe<LPToken_filter>;
  lsdValidator?: InputMaybe<Scalars['String']>;
  lsdValidator_not?: InputMaybe<Scalars['String']>;
  lsdValidator_gt?: InputMaybe<Scalars['String']>;
  lsdValidator_lt?: InputMaybe<Scalars['String']>;
  lsdValidator_gte?: InputMaybe<Scalars['String']>;
  lsdValidator_lte?: InputMaybe<Scalars['String']>;
  lsdValidator_in?: InputMaybe<Array<Scalars['String']>>;
  lsdValidator_not_in?: InputMaybe<Array<Scalars['String']>>;
  lsdValidator_contains?: InputMaybe<Scalars['String']>;
  lsdValidator_contains_nocase?: InputMaybe<Scalars['String']>;
  lsdValidator_not_contains?: InputMaybe<Scalars['String']>;
  lsdValidator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  lsdValidator_starts_with?: InputMaybe<Scalars['String']>;
  lsdValidator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  lsdValidator_not_starts_with?: InputMaybe<Scalars['String']>;
  lsdValidator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  lsdValidator_ends_with?: InputMaybe<Scalars['String']>;
  lsdValidator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  lsdValidator_not_ends_with?: InputMaybe<Scalars['String']>;
  lsdValidator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  lsdValidator_?: InputMaybe<LSDValidator_filter>;
  listOfLiquidityProviderAddresses?: InputMaybe<Array<Scalars['String']>>;
  listOfLiquidityProviderAddresses_not?: InputMaybe<Array<Scalars['String']>>;
  listOfLiquidityProviderAddresses_contains?: InputMaybe<Array<Scalars['String']>>;
  listOfLiquidityProviderAddresses_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  listOfLiquidityProviderAddresses_not_contains?: InputMaybe<Array<Scalars['String']>>;
  listOfLiquidityProviderAddresses_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  liquidityProviders?: InputMaybe<Array<Scalars['String']>>;
  liquidityProviders_not?: InputMaybe<Array<Scalars['String']>>;
  liquidityProviders_contains?: InputMaybe<Array<Scalars['String']>>;
  liquidityProviders_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  liquidityProviders_not_contains?: InputMaybe<Array<Scalars['String']>>;
  liquidityProviders_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  liquidityProviders_?: InputMaybe<GiantLiquidityProvider_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ProtectedBatch_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ProtectedBatch_filter>>>;
};

export type ProtectedBatch_orderBy =
  | 'id'
  | 'blsPublicKey'
  | 'vaultLPToken'
  | 'vaultLPToken__id'
  | 'vaultLPToken__blsPublicKey'
  | 'vaultLPToken__minted'
  | 'vaultLPToken__withdrawn'
  | 'vaultLPToken__issuer'
  | 'vaultLPToken__tokenType'
  | 'vaultLPToken__giantPoolBalance'
  | 'vaultLPToken__lifecycleStatus'
  | 'lsdValidator'
  | 'lsdValidator__id'
  | 'lsdValidator__status'
  | 'lsdValidator__isReadyToStake'
  | 'lsdValidator__liquidStakingManager'
  | 'lsdValidator__withdrawn'
  | 'lsdValidator__currentIndex'
  | 'lsdValidator__totalETHStaked'
  | 'lsdValidator__totalETHFundedFromGiantPool'
  | 'lsdValidator__totalETHFromGiantProtectedStakingPool'
  | 'lsdValidator__totalETHFromGiantFeesAndMevPool'
  | 'lsdValidator__giantPoolLastFundedTimestamp'
  | 'lsdValidator__registerInitialsBlockNumber'
  | 'lsdValidator__ethSentToDepositContractBlockNumber'
  | 'lsdValidator__derivativesMintedBlockNumber'
  | 'listOfLiquidityProviderAddresses'
  | 'liquidityProviders';

export type ProtectedDeposit = {
  id: Scalars['ID'];
  liquidStakingNetwork: LiquidStakingNetwork;
  validator: LSDValidator;
  token: Scalars['String'];
  depositor: Scalars['String'];
  totalDeposit: Scalars['BigInt'];
};

export type ProtectedDeposit_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  liquidStakingNetwork?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_not?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_gt?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_lt?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_gte?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_lte?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_in?: InputMaybe<Array<Scalars['String']>>;
  liquidStakingNetwork_not_in?: InputMaybe<Array<Scalars['String']>>;
  liquidStakingNetwork_contains?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_contains_nocase?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_not_contains?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_not_contains_nocase?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_starts_with?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_starts_with_nocase?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_not_starts_with?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_ends_with?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_ends_with_nocase?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_not_ends_with?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_?: InputMaybe<LiquidStakingNetwork_filter>;
  validator?: InputMaybe<Scalars['String']>;
  validator_not?: InputMaybe<Scalars['String']>;
  validator_gt?: InputMaybe<Scalars['String']>;
  validator_lt?: InputMaybe<Scalars['String']>;
  validator_gte?: InputMaybe<Scalars['String']>;
  validator_lte?: InputMaybe<Scalars['String']>;
  validator_in?: InputMaybe<Array<Scalars['String']>>;
  validator_not_in?: InputMaybe<Array<Scalars['String']>>;
  validator_contains?: InputMaybe<Scalars['String']>;
  validator_contains_nocase?: InputMaybe<Scalars['String']>;
  validator_not_contains?: InputMaybe<Scalars['String']>;
  validator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  validator_starts_with?: InputMaybe<Scalars['String']>;
  validator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  validator_not_starts_with?: InputMaybe<Scalars['String']>;
  validator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  validator_ends_with?: InputMaybe<Scalars['String']>;
  validator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  validator_not_ends_with?: InputMaybe<Scalars['String']>;
  validator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  validator_?: InputMaybe<LSDValidator_filter>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  depositor?: InputMaybe<Scalars['String']>;
  depositor_not?: InputMaybe<Scalars['String']>;
  depositor_gt?: InputMaybe<Scalars['String']>;
  depositor_lt?: InputMaybe<Scalars['String']>;
  depositor_gte?: InputMaybe<Scalars['String']>;
  depositor_lte?: InputMaybe<Scalars['String']>;
  depositor_in?: InputMaybe<Array<Scalars['String']>>;
  depositor_not_in?: InputMaybe<Array<Scalars['String']>>;
  depositor_contains?: InputMaybe<Scalars['String']>;
  depositor_contains_nocase?: InputMaybe<Scalars['String']>;
  depositor_not_contains?: InputMaybe<Scalars['String']>;
  depositor_not_contains_nocase?: InputMaybe<Scalars['String']>;
  depositor_starts_with?: InputMaybe<Scalars['String']>;
  depositor_starts_with_nocase?: InputMaybe<Scalars['String']>;
  depositor_not_starts_with?: InputMaybe<Scalars['String']>;
  depositor_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  depositor_ends_with?: InputMaybe<Scalars['String']>;
  depositor_ends_with_nocase?: InputMaybe<Scalars['String']>;
  depositor_not_ends_with?: InputMaybe<Scalars['String']>;
  depositor_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  totalDeposit?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_not?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_gt?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_lt?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_gte?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_lte?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ProtectedDeposit_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ProtectedDeposit_filter>>>;
};

export type ProtectedDeposit_orderBy =
  | 'id'
  | 'liquidStakingNetwork'
  | 'liquidStakingNetwork__id'
  | 'liquidStakingNetwork__liquidStakingManager'
  | 'liquidStakingNetwork__dao'
  | 'liquidStakingNetwork__feeRecipientAndSyndicate'
  | 'liquidStakingNetwork__savETHPool'
  | 'liquidStakingNetwork__feesAndMevPool'
  | 'liquidStakingNetwork__stakehouseAddress'
  | 'liquidStakingNetwork__optionalGatekeeper'
  | 'liquidStakingNetwork__lsdIndex'
  | 'liquidStakingNetwork__ticker'
  | 'liquidStakingNetwork__commission'
  | 'liquidStakingNetwork__isNodeRunningBehindGatekeeper'
  | 'liquidStakingNetwork__firstKnot'
  | 'liquidStakingNetwork__numberOfValidatorsBeingPrepared'
  | 'liquidStakingNetwork__numberOfStakedValidators'
  | 'liquidStakingNetwork__numberOfKnotsThatHaveMintedDerivatives'
  | 'validator'
  | 'validator__id'
  | 'validator__status'
  | 'validator__isReadyToStake'
  | 'validator__liquidStakingManager'
  | 'validator__withdrawn'
  | 'validator__currentIndex'
  | 'validator__totalETHStaked'
  | 'validator__totalETHFundedFromGiantPool'
  | 'validator__totalETHFromGiantProtectedStakingPool'
  | 'validator__totalETHFromGiantFeesAndMevPool'
  | 'validator__giantPoolLastFundedTimestamp'
  | 'validator__registerInitialsBlockNumber'
  | 'validator__ethSentToDepositContractBlockNumber'
  | 'validator__derivativesMintedBlockNumber'
  | 'token'
  | 'depositor'
  | 'totalDeposit';

export type Query = {
  liquidStakingNetwork?: Maybe<LiquidStakingNetwork>;
  liquidStakingNetworks: Array<LiquidStakingNetwork>;
  nodeRunner?: Maybe<NodeRunner>;
  nodeRunners: Array<NodeRunner>;
  smartWallet?: Maybe<SmartWallet>;
  smartWallets: Array<SmartWallet>;
  lsdvalidator?: Maybe<LSDValidator>;
  lsdvalidators: Array<LSDValidator>;
  protectedDeposit?: Maybe<ProtectedDeposit>;
  protectedDeposits: Array<ProtectedDeposit>;
  feesAndMevDeposit?: Maybe<FeesAndMevDeposit>;
  feesAndMevDeposits: Array<FeesAndMevDeposit>;
  giantSavETHPool?: Maybe<GiantSavETHPool>;
  giantSavETHPools: Array<GiantSavETHPool>;
  giantFeesAndMevPool?: Maybe<GiantFeesAndMevPool>;
  giantFeesAndMevPools: Array<GiantFeesAndMevPool>;
  event?: Maybe<Event>;
  events: Array<Event>;
  lptoken?: Maybe<LPToken>;
  lptokens: Array<LPToken>;
  protectedBatch?: Maybe<ProtectedBatch>;
  protectedBatches: Array<ProtectedBatch>;
  feesAndMevBatch?: Maybe<FeesAndMevBatch>;
  feesAndMevBatches: Array<FeesAndMevBatch>;
  giantLiquidityProvider?: Maybe<GiantLiquidityProvider>;
  giantLiquidityProviders: Array<GiantLiquidityProvider>;
  giantFeesAndMevLiquidityProvider?: Maybe<GiantFeesAndMevLiquidityProvider>;
  giantFeesAndMevLiquidityProviders: Array<GiantFeesAndMevLiquidityProvider>;
  depositor?: Maybe<Depositor>;
  depositors: Array<Depositor>;
  syndicate?: Maybe<Syndicate>;
  syndicates: Array<Syndicate>;
  payout?: Maybe<Payout>;
  payouts: Array<Payout>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryliquidStakingNetworkArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidStakingNetworksArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidStakingNetwork_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidStakingNetwork_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynodeRunnerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynodeRunnersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NodeRunner_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NodeRunner_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysmartWalletArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysmartWalletsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SmartWallet_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SmartWallet_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerylsdvalidatorArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerylsdvalidatorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LSDValidator_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LSDValidator_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprotectedDepositArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprotectedDepositsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProtectedDeposit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProtectedDeposit_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfeesAndMevDepositArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfeesAndMevDepositsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FeesAndMevDeposit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FeesAndMevDeposit_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerygiantSavETHPoolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerygiantSavETHPoolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GiantSavETHPool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GiantSavETHPool_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerygiantFeesAndMevPoolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerygiantFeesAndMevPoolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GiantFeesAndMevPool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GiantFeesAndMevPool_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryeventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryeventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Event_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Event_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerylptokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerylptokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LPToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LPToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprotectedBatchArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprotectedBatchesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProtectedBatch_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProtectedBatch_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfeesAndMevBatchArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfeesAndMevBatchesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FeesAndMevBatch_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FeesAndMevBatch_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerygiantLiquidityProviderArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerygiantLiquidityProvidersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GiantLiquidityProvider_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GiantLiquidityProvider_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerygiantFeesAndMevLiquidityProviderArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerygiantFeesAndMevLiquidityProvidersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GiantFeesAndMevLiquidityProvider_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GiantFeesAndMevLiquidityProvider_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydepositorArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydepositorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Depositor_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Depositor_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysyndicateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysyndicatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Syndicate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Syndicate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypayoutArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypayoutsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Payout_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Payout_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type SmartWallet = {
  id: Scalars['ID'];
  liquidStakingNetwork: LiquidStakingNetwork;
  nodeRunner: NodeRunner;
  availableToStake: Scalars['BigInt'];
  inProcessOfAwaitingActivation: Scalars['BigInt'];
};

export type SmartWallet_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  liquidStakingNetwork?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_not?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_gt?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_lt?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_gte?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_lte?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_in?: InputMaybe<Array<Scalars['String']>>;
  liquidStakingNetwork_not_in?: InputMaybe<Array<Scalars['String']>>;
  liquidStakingNetwork_contains?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_contains_nocase?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_not_contains?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_not_contains_nocase?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_starts_with?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_starts_with_nocase?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_not_starts_with?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_ends_with?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_ends_with_nocase?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_not_ends_with?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_?: InputMaybe<LiquidStakingNetwork_filter>;
  nodeRunner?: InputMaybe<Scalars['String']>;
  nodeRunner_not?: InputMaybe<Scalars['String']>;
  nodeRunner_gt?: InputMaybe<Scalars['String']>;
  nodeRunner_lt?: InputMaybe<Scalars['String']>;
  nodeRunner_gte?: InputMaybe<Scalars['String']>;
  nodeRunner_lte?: InputMaybe<Scalars['String']>;
  nodeRunner_in?: InputMaybe<Array<Scalars['String']>>;
  nodeRunner_not_in?: InputMaybe<Array<Scalars['String']>>;
  nodeRunner_contains?: InputMaybe<Scalars['String']>;
  nodeRunner_contains_nocase?: InputMaybe<Scalars['String']>;
  nodeRunner_not_contains?: InputMaybe<Scalars['String']>;
  nodeRunner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  nodeRunner_starts_with?: InputMaybe<Scalars['String']>;
  nodeRunner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nodeRunner_not_starts_with?: InputMaybe<Scalars['String']>;
  nodeRunner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nodeRunner_ends_with?: InputMaybe<Scalars['String']>;
  nodeRunner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nodeRunner_not_ends_with?: InputMaybe<Scalars['String']>;
  nodeRunner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nodeRunner_?: InputMaybe<NodeRunner_filter>;
  availableToStake?: InputMaybe<Scalars['BigInt']>;
  availableToStake_not?: InputMaybe<Scalars['BigInt']>;
  availableToStake_gt?: InputMaybe<Scalars['BigInt']>;
  availableToStake_lt?: InputMaybe<Scalars['BigInt']>;
  availableToStake_gte?: InputMaybe<Scalars['BigInt']>;
  availableToStake_lte?: InputMaybe<Scalars['BigInt']>;
  availableToStake_in?: InputMaybe<Array<Scalars['BigInt']>>;
  availableToStake_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  inProcessOfAwaitingActivation?: InputMaybe<Scalars['BigInt']>;
  inProcessOfAwaitingActivation_not?: InputMaybe<Scalars['BigInt']>;
  inProcessOfAwaitingActivation_gt?: InputMaybe<Scalars['BigInt']>;
  inProcessOfAwaitingActivation_lt?: InputMaybe<Scalars['BigInt']>;
  inProcessOfAwaitingActivation_gte?: InputMaybe<Scalars['BigInt']>;
  inProcessOfAwaitingActivation_lte?: InputMaybe<Scalars['BigInt']>;
  inProcessOfAwaitingActivation_in?: InputMaybe<Array<Scalars['BigInt']>>;
  inProcessOfAwaitingActivation_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SmartWallet_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SmartWallet_filter>>>;
};

export type SmartWallet_orderBy =
  | 'id'
  | 'liquidStakingNetwork'
  | 'liquidStakingNetwork__id'
  | 'liquidStakingNetwork__liquidStakingManager'
  | 'liquidStakingNetwork__dao'
  | 'liquidStakingNetwork__feeRecipientAndSyndicate'
  | 'liquidStakingNetwork__savETHPool'
  | 'liquidStakingNetwork__feesAndMevPool'
  | 'liquidStakingNetwork__stakehouseAddress'
  | 'liquidStakingNetwork__optionalGatekeeper'
  | 'liquidStakingNetwork__lsdIndex'
  | 'liquidStakingNetwork__ticker'
  | 'liquidStakingNetwork__commission'
  | 'liquidStakingNetwork__isNodeRunningBehindGatekeeper'
  | 'liquidStakingNetwork__firstKnot'
  | 'liquidStakingNetwork__numberOfValidatorsBeingPrepared'
  | 'liquidStakingNetwork__numberOfStakedValidators'
  | 'liquidStakingNetwork__numberOfKnotsThatHaveMintedDerivatives'
  | 'nodeRunner'
  | 'nodeRunner__id'
  | 'nodeRunner__name'
  | 'availableToStake'
  | 'inProcessOfAwaitingActivation';

export type Subscription = {
  liquidStakingNetwork?: Maybe<LiquidStakingNetwork>;
  liquidStakingNetworks: Array<LiquidStakingNetwork>;
  nodeRunner?: Maybe<NodeRunner>;
  nodeRunners: Array<NodeRunner>;
  smartWallet?: Maybe<SmartWallet>;
  smartWallets: Array<SmartWallet>;
  lsdvalidator?: Maybe<LSDValidator>;
  lsdvalidators: Array<LSDValidator>;
  protectedDeposit?: Maybe<ProtectedDeposit>;
  protectedDeposits: Array<ProtectedDeposit>;
  feesAndMevDeposit?: Maybe<FeesAndMevDeposit>;
  feesAndMevDeposits: Array<FeesAndMevDeposit>;
  giantSavETHPool?: Maybe<GiantSavETHPool>;
  giantSavETHPools: Array<GiantSavETHPool>;
  giantFeesAndMevPool?: Maybe<GiantFeesAndMevPool>;
  giantFeesAndMevPools: Array<GiantFeesAndMevPool>;
  event?: Maybe<Event>;
  events: Array<Event>;
  lptoken?: Maybe<LPToken>;
  lptokens: Array<LPToken>;
  protectedBatch?: Maybe<ProtectedBatch>;
  protectedBatches: Array<ProtectedBatch>;
  feesAndMevBatch?: Maybe<FeesAndMevBatch>;
  feesAndMevBatches: Array<FeesAndMevBatch>;
  giantLiquidityProvider?: Maybe<GiantLiquidityProvider>;
  giantLiquidityProviders: Array<GiantLiquidityProvider>;
  giantFeesAndMevLiquidityProvider?: Maybe<GiantFeesAndMevLiquidityProvider>;
  giantFeesAndMevLiquidityProviders: Array<GiantFeesAndMevLiquidityProvider>;
  depositor?: Maybe<Depositor>;
  depositors: Array<Depositor>;
  syndicate?: Maybe<Syndicate>;
  syndicates: Array<Syndicate>;
  payout?: Maybe<Payout>;
  payouts: Array<Payout>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionliquidStakingNetworkArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidStakingNetworksArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidStakingNetwork_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidStakingNetwork_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnodeRunnerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnodeRunnersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NodeRunner_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NodeRunner_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsmartWalletArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsmartWalletsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SmartWallet_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SmartWallet_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionlsdvalidatorArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionlsdvalidatorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LSDValidator_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LSDValidator_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprotectedDepositArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprotectedDepositsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProtectedDeposit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProtectedDeposit_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfeesAndMevDepositArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfeesAndMevDepositsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FeesAndMevDeposit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FeesAndMevDeposit_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiongiantSavETHPoolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiongiantSavETHPoolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GiantSavETHPool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GiantSavETHPool_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiongiantFeesAndMevPoolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiongiantFeesAndMevPoolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GiantFeesAndMevPool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GiantFeesAndMevPool_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioneventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioneventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Event_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Event_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionlptokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionlptokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LPToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LPToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprotectedBatchArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprotectedBatchesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProtectedBatch_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProtectedBatch_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfeesAndMevBatchArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfeesAndMevBatchesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FeesAndMevBatch_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FeesAndMevBatch_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiongiantLiquidityProviderArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiongiantLiquidityProvidersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GiantLiquidityProvider_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GiantLiquidityProvider_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiongiantFeesAndMevLiquidityProviderArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiongiantFeesAndMevLiquidityProvidersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GiantFeesAndMevLiquidityProvider_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GiantFeesAndMevLiquidityProvider_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondepositorArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondepositorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Depositor_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Depositor_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsyndicateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsyndicatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Syndicate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Syndicate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpayoutArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpayoutsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Payout_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Payout_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Syndicate = {
  id: Scalars['ID'];
  liquidStakingNetwork: LiquidStakingNetwork;
  totalPayout: Scalars['BigInt'];
  payouts: Array<Payout>;
  totalNodeOperatorPayout: Scalars['BigInt'];
  totalFeesAndMevPayout: Scalars['BigInt'];
};


export type SyndicatepayoutsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Payout_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Payout_filter>;
};

export type Syndicate_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  liquidStakingNetwork?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_not?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_gt?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_lt?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_gte?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_lte?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_in?: InputMaybe<Array<Scalars['String']>>;
  liquidStakingNetwork_not_in?: InputMaybe<Array<Scalars['String']>>;
  liquidStakingNetwork_contains?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_contains_nocase?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_not_contains?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_not_contains_nocase?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_starts_with?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_starts_with_nocase?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_not_starts_with?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_ends_with?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_ends_with_nocase?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_not_ends_with?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  liquidStakingNetwork_?: InputMaybe<LiquidStakingNetwork_filter>;
  totalPayout?: InputMaybe<Scalars['BigInt']>;
  totalPayout_not?: InputMaybe<Scalars['BigInt']>;
  totalPayout_gt?: InputMaybe<Scalars['BigInt']>;
  totalPayout_lt?: InputMaybe<Scalars['BigInt']>;
  totalPayout_gte?: InputMaybe<Scalars['BigInt']>;
  totalPayout_lte?: InputMaybe<Scalars['BigInt']>;
  totalPayout_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalPayout_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  payouts?: InputMaybe<Array<Scalars['String']>>;
  payouts_not?: InputMaybe<Array<Scalars['String']>>;
  payouts_contains?: InputMaybe<Array<Scalars['String']>>;
  payouts_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  payouts_not_contains?: InputMaybe<Array<Scalars['String']>>;
  payouts_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  payouts_?: InputMaybe<Payout_filter>;
  totalNodeOperatorPayout?: InputMaybe<Scalars['BigInt']>;
  totalNodeOperatorPayout_not?: InputMaybe<Scalars['BigInt']>;
  totalNodeOperatorPayout_gt?: InputMaybe<Scalars['BigInt']>;
  totalNodeOperatorPayout_lt?: InputMaybe<Scalars['BigInt']>;
  totalNodeOperatorPayout_gte?: InputMaybe<Scalars['BigInt']>;
  totalNodeOperatorPayout_lte?: InputMaybe<Scalars['BigInt']>;
  totalNodeOperatorPayout_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalNodeOperatorPayout_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalFeesAndMevPayout?: InputMaybe<Scalars['BigInt']>;
  totalFeesAndMevPayout_not?: InputMaybe<Scalars['BigInt']>;
  totalFeesAndMevPayout_gt?: InputMaybe<Scalars['BigInt']>;
  totalFeesAndMevPayout_lt?: InputMaybe<Scalars['BigInt']>;
  totalFeesAndMevPayout_gte?: InputMaybe<Scalars['BigInt']>;
  totalFeesAndMevPayout_lte?: InputMaybe<Scalars['BigInt']>;
  totalFeesAndMevPayout_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalFeesAndMevPayout_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Syndicate_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Syndicate_filter>>>;
};

export type Syndicate_orderBy =
  | 'id'
  | 'liquidStakingNetwork'
  | 'liquidStakingNetwork__id'
  | 'liquidStakingNetwork__liquidStakingManager'
  | 'liquidStakingNetwork__dao'
  | 'liquidStakingNetwork__feeRecipientAndSyndicate'
  | 'liquidStakingNetwork__savETHPool'
  | 'liquidStakingNetwork__feesAndMevPool'
  | 'liquidStakingNetwork__stakehouseAddress'
  | 'liquidStakingNetwork__optionalGatekeeper'
  | 'liquidStakingNetwork__lsdIndex'
  | 'liquidStakingNetwork__ticker'
  | 'liquidStakingNetwork__commission'
  | 'liquidStakingNetwork__isNodeRunningBehindGatekeeper'
  | 'liquidStakingNetwork__firstKnot'
  | 'liquidStakingNetwork__numberOfValidatorsBeingPrepared'
  | 'liquidStakingNetwork__numberOfStakedValidators'
  | 'liquidStakingNetwork__numberOfKnotsThatHaveMintedDerivatives'
  | 'totalPayout'
  | 'payouts'
  | 'totalNodeOperatorPayout'
  | 'totalFeesAndMevPayout';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
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
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  liquidStakingNetwork: InContextSdkMethod<Query['liquidStakingNetwork'], QueryliquidStakingNetworkArgs, MeshContext>,
  /** null **/
  liquidStakingNetworks: InContextSdkMethod<Query['liquidStakingNetworks'], QueryliquidStakingNetworksArgs, MeshContext>,
  /** null **/
  nodeRunner: InContextSdkMethod<Query['nodeRunner'], QuerynodeRunnerArgs, MeshContext>,
  /** null **/
  nodeRunners: InContextSdkMethod<Query['nodeRunners'], QuerynodeRunnersArgs, MeshContext>,
  /** null **/
  smartWallet: InContextSdkMethod<Query['smartWallet'], QuerysmartWalletArgs, MeshContext>,
  /** null **/
  smartWallets: InContextSdkMethod<Query['smartWallets'], QuerysmartWalletsArgs, MeshContext>,
  /** null **/
  lsdvalidator: InContextSdkMethod<Query['lsdvalidator'], QuerylsdvalidatorArgs, MeshContext>,
  /** null **/
  lsdvalidators: InContextSdkMethod<Query['lsdvalidators'], QuerylsdvalidatorsArgs, MeshContext>,
  /** null **/
  protectedDeposit: InContextSdkMethod<Query['protectedDeposit'], QueryprotectedDepositArgs, MeshContext>,
  /** null **/
  protectedDeposits: InContextSdkMethod<Query['protectedDeposits'], QueryprotectedDepositsArgs, MeshContext>,
  /** null **/
  feesAndMevDeposit: InContextSdkMethod<Query['feesAndMevDeposit'], QueryfeesAndMevDepositArgs, MeshContext>,
  /** null **/
  feesAndMevDeposits: InContextSdkMethod<Query['feesAndMevDeposits'], QueryfeesAndMevDepositsArgs, MeshContext>,
  /** null **/
  giantSavETHPool: InContextSdkMethod<Query['giantSavETHPool'], QuerygiantSavETHPoolArgs, MeshContext>,
  /** null **/
  giantSavETHPools: InContextSdkMethod<Query['giantSavETHPools'], QuerygiantSavETHPoolsArgs, MeshContext>,
  /** null **/
  giantFeesAndMevPool: InContextSdkMethod<Query['giantFeesAndMevPool'], QuerygiantFeesAndMevPoolArgs, MeshContext>,
  /** null **/
  giantFeesAndMevPools: InContextSdkMethod<Query['giantFeesAndMevPools'], QuerygiantFeesAndMevPoolsArgs, MeshContext>,
  /** null **/
  event: InContextSdkMethod<Query['event'], QueryeventArgs, MeshContext>,
  /** null **/
  events: InContextSdkMethod<Query['events'], QueryeventsArgs, MeshContext>,
  /** null **/
  lptoken: InContextSdkMethod<Query['lptoken'], QuerylptokenArgs, MeshContext>,
  /** null **/
  lptokens: InContextSdkMethod<Query['lptokens'], QuerylptokensArgs, MeshContext>,
  /** null **/
  protectedBatch: InContextSdkMethod<Query['protectedBatch'], QueryprotectedBatchArgs, MeshContext>,
  /** null **/
  protectedBatches: InContextSdkMethod<Query['protectedBatches'], QueryprotectedBatchesArgs, MeshContext>,
  /** null **/
  feesAndMevBatch: InContextSdkMethod<Query['feesAndMevBatch'], QueryfeesAndMevBatchArgs, MeshContext>,
  /** null **/
  feesAndMevBatches: InContextSdkMethod<Query['feesAndMevBatches'], QueryfeesAndMevBatchesArgs, MeshContext>,
  /** null **/
  giantLiquidityProvider: InContextSdkMethod<Query['giantLiquidityProvider'], QuerygiantLiquidityProviderArgs, MeshContext>,
  /** null **/
  giantLiquidityProviders: InContextSdkMethod<Query['giantLiquidityProviders'], QuerygiantLiquidityProvidersArgs, MeshContext>,
  /** null **/
  giantFeesAndMevLiquidityProvider: InContextSdkMethod<Query['giantFeesAndMevLiquidityProvider'], QuerygiantFeesAndMevLiquidityProviderArgs, MeshContext>,
  /** null **/
  giantFeesAndMevLiquidityProviders: InContextSdkMethod<Query['giantFeesAndMevLiquidityProviders'], QuerygiantFeesAndMevLiquidityProvidersArgs, MeshContext>,
  /** null **/
  depositor: InContextSdkMethod<Query['depositor'], QuerydepositorArgs, MeshContext>,
  /** null **/
  depositors: InContextSdkMethod<Query['depositors'], QuerydepositorsArgs, MeshContext>,
  /** null **/
  syndicate: InContextSdkMethod<Query['syndicate'], QuerysyndicateArgs, MeshContext>,
  /** null **/
  syndicates: InContextSdkMethod<Query['syndicates'], QuerysyndicatesArgs, MeshContext>,
  /** null **/
  payout: InContextSdkMethod<Query['payout'], QuerypayoutArgs, MeshContext>,
  /** null **/
  payouts: InContextSdkMethod<Query['payouts'], QuerypayoutsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  liquidStakingNetwork: InContextSdkMethod<Subscription['liquidStakingNetwork'], SubscriptionliquidStakingNetworkArgs, MeshContext>,
  /** null **/
  liquidStakingNetworks: InContextSdkMethod<Subscription['liquidStakingNetworks'], SubscriptionliquidStakingNetworksArgs, MeshContext>,
  /** null **/
  nodeRunner: InContextSdkMethod<Subscription['nodeRunner'], SubscriptionnodeRunnerArgs, MeshContext>,
  /** null **/
  nodeRunners: InContextSdkMethod<Subscription['nodeRunners'], SubscriptionnodeRunnersArgs, MeshContext>,
  /** null **/
  smartWallet: InContextSdkMethod<Subscription['smartWallet'], SubscriptionsmartWalletArgs, MeshContext>,
  /** null **/
  smartWallets: InContextSdkMethod<Subscription['smartWallets'], SubscriptionsmartWalletsArgs, MeshContext>,
  /** null **/
  lsdvalidator: InContextSdkMethod<Subscription['lsdvalidator'], SubscriptionlsdvalidatorArgs, MeshContext>,
  /** null **/
  lsdvalidators: InContextSdkMethod<Subscription['lsdvalidators'], SubscriptionlsdvalidatorsArgs, MeshContext>,
  /** null **/
  protectedDeposit: InContextSdkMethod<Subscription['protectedDeposit'], SubscriptionprotectedDepositArgs, MeshContext>,
  /** null **/
  protectedDeposits: InContextSdkMethod<Subscription['protectedDeposits'], SubscriptionprotectedDepositsArgs, MeshContext>,
  /** null **/
  feesAndMevDeposit: InContextSdkMethod<Subscription['feesAndMevDeposit'], SubscriptionfeesAndMevDepositArgs, MeshContext>,
  /** null **/
  feesAndMevDeposits: InContextSdkMethod<Subscription['feesAndMevDeposits'], SubscriptionfeesAndMevDepositsArgs, MeshContext>,
  /** null **/
  giantSavETHPool: InContextSdkMethod<Subscription['giantSavETHPool'], SubscriptiongiantSavETHPoolArgs, MeshContext>,
  /** null **/
  giantSavETHPools: InContextSdkMethod<Subscription['giantSavETHPools'], SubscriptiongiantSavETHPoolsArgs, MeshContext>,
  /** null **/
  giantFeesAndMevPool: InContextSdkMethod<Subscription['giantFeesAndMevPool'], SubscriptiongiantFeesAndMevPoolArgs, MeshContext>,
  /** null **/
  giantFeesAndMevPools: InContextSdkMethod<Subscription['giantFeesAndMevPools'], SubscriptiongiantFeesAndMevPoolsArgs, MeshContext>,
  /** null **/
  event: InContextSdkMethod<Subscription['event'], SubscriptioneventArgs, MeshContext>,
  /** null **/
  events: InContextSdkMethod<Subscription['events'], SubscriptioneventsArgs, MeshContext>,
  /** null **/
  lptoken: InContextSdkMethod<Subscription['lptoken'], SubscriptionlptokenArgs, MeshContext>,
  /** null **/
  lptokens: InContextSdkMethod<Subscription['lptokens'], SubscriptionlptokensArgs, MeshContext>,
  /** null **/
  protectedBatch: InContextSdkMethod<Subscription['protectedBatch'], SubscriptionprotectedBatchArgs, MeshContext>,
  /** null **/
  protectedBatches: InContextSdkMethod<Subscription['protectedBatches'], SubscriptionprotectedBatchesArgs, MeshContext>,
  /** null **/
  feesAndMevBatch: InContextSdkMethod<Subscription['feesAndMevBatch'], SubscriptionfeesAndMevBatchArgs, MeshContext>,
  /** null **/
  feesAndMevBatches: InContextSdkMethod<Subscription['feesAndMevBatches'], SubscriptionfeesAndMevBatchesArgs, MeshContext>,
  /** null **/
  giantLiquidityProvider: InContextSdkMethod<Subscription['giantLiquidityProvider'], SubscriptiongiantLiquidityProviderArgs, MeshContext>,
  /** null **/
  giantLiquidityProviders: InContextSdkMethod<Subscription['giantLiquidityProviders'], SubscriptiongiantLiquidityProvidersArgs, MeshContext>,
  /** null **/
  giantFeesAndMevLiquidityProvider: InContextSdkMethod<Subscription['giantFeesAndMevLiquidityProvider'], SubscriptiongiantFeesAndMevLiquidityProviderArgs, MeshContext>,
  /** null **/
  giantFeesAndMevLiquidityProviders: InContextSdkMethod<Subscription['giantFeesAndMevLiquidityProviders'], SubscriptiongiantFeesAndMevLiquidityProvidersArgs, MeshContext>,
  /** null **/
  depositor: InContextSdkMethod<Subscription['depositor'], SubscriptiondepositorArgs, MeshContext>,
  /** null **/
  depositors: InContextSdkMethod<Subscription['depositors'], SubscriptiondepositorsArgs, MeshContext>,
  /** null **/
  syndicate: InContextSdkMethod<Subscription['syndicate'], SubscriptionsyndicateArgs, MeshContext>,
  /** null **/
  syndicates: InContextSdkMethod<Subscription['syndicates'], SubscriptionsyndicatesArgs, MeshContext>,
  /** null **/
  payout: InContextSdkMethod<Subscription['payout'], SubscriptionpayoutArgs, MeshContext>,
  /** null **/
  payouts: InContextSdkMethod<Subscription['payouts'], SubscriptionpayoutsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["liquid-staking-derivative"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
