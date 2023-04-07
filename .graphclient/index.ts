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
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { StakehouseProtocolTypes } from './sources/stakehouse-protocol/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



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

export type BrandCentralGlobal = {
  id: Scalars['ID'];
  numberOfTickers: Scalars['BigInt'];
  numberOfGoodieBags: Scalars['BigInt'];
  numberOfGoodieItems: Scalars['BigInt'];
  BrandCentral: Scalars['Bytes'];
  BrandNFT: Scalars['Bytes'];
  skLootFactory: Scalars['Bytes'];
  skLoot: Scalars['Bytes'];
  claimAuction: Scalars['Bytes'];
};

export type BrandCentralGlobal_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  numberOfTickers?: InputMaybe<Scalars['BigInt']>;
  numberOfTickers_not?: InputMaybe<Scalars['BigInt']>;
  numberOfTickers_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfTickers_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfTickers_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfTickers_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfTickers_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfTickers_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfGoodieBags?: InputMaybe<Scalars['BigInt']>;
  numberOfGoodieBags_not?: InputMaybe<Scalars['BigInt']>;
  numberOfGoodieBags_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfGoodieBags_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfGoodieBags_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfGoodieBags_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfGoodieBags_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfGoodieBags_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfGoodieItems?: InputMaybe<Scalars['BigInt']>;
  numberOfGoodieItems_not?: InputMaybe<Scalars['BigInt']>;
  numberOfGoodieItems_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfGoodieItems_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfGoodieItems_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfGoodieItems_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfGoodieItems_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfGoodieItems_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  BrandCentral?: InputMaybe<Scalars['Bytes']>;
  BrandCentral_not?: InputMaybe<Scalars['Bytes']>;
  BrandCentral_gt?: InputMaybe<Scalars['Bytes']>;
  BrandCentral_lt?: InputMaybe<Scalars['Bytes']>;
  BrandCentral_gte?: InputMaybe<Scalars['Bytes']>;
  BrandCentral_lte?: InputMaybe<Scalars['Bytes']>;
  BrandCentral_in?: InputMaybe<Array<Scalars['Bytes']>>;
  BrandCentral_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  BrandCentral_contains?: InputMaybe<Scalars['Bytes']>;
  BrandCentral_not_contains?: InputMaybe<Scalars['Bytes']>;
  BrandNFT?: InputMaybe<Scalars['Bytes']>;
  BrandNFT_not?: InputMaybe<Scalars['Bytes']>;
  BrandNFT_gt?: InputMaybe<Scalars['Bytes']>;
  BrandNFT_lt?: InputMaybe<Scalars['Bytes']>;
  BrandNFT_gte?: InputMaybe<Scalars['Bytes']>;
  BrandNFT_lte?: InputMaybe<Scalars['Bytes']>;
  BrandNFT_in?: InputMaybe<Array<Scalars['Bytes']>>;
  BrandNFT_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  BrandNFT_contains?: InputMaybe<Scalars['Bytes']>;
  BrandNFT_not_contains?: InputMaybe<Scalars['Bytes']>;
  skLootFactory?: InputMaybe<Scalars['Bytes']>;
  skLootFactory_not?: InputMaybe<Scalars['Bytes']>;
  skLootFactory_gt?: InputMaybe<Scalars['Bytes']>;
  skLootFactory_lt?: InputMaybe<Scalars['Bytes']>;
  skLootFactory_gte?: InputMaybe<Scalars['Bytes']>;
  skLootFactory_lte?: InputMaybe<Scalars['Bytes']>;
  skLootFactory_in?: InputMaybe<Array<Scalars['Bytes']>>;
  skLootFactory_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  skLootFactory_contains?: InputMaybe<Scalars['Bytes']>;
  skLootFactory_not_contains?: InputMaybe<Scalars['Bytes']>;
  skLoot?: InputMaybe<Scalars['Bytes']>;
  skLoot_not?: InputMaybe<Scalars['Bytes']>;
  skLoot_gt?: InputMaybe<Scalars['Bytes']>;
  skLoot_lt?: InputMaybe<Scalars['Bytes']>;
  skLoot_gte?: InputMaybe<Scalars['Bytes']>;
  skLoot_lte?: InputMaybe<Scalars['Bytes']>;
  skLoot_in?: InputMaybe<Array<Scalars['Bytes']>>;
  skLoot_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  skLoot_contains?: InputMaybe<Scalars['Bytes']>;
  skLoot_not_contains?: InputMaybe<Scalars['Bytes']>;
  claimAuction?: InputMaybe<Scalars['Bytes']>;
  claimAuction_not?: InputMaybe<Scalars['Bytes']>;
  claimAuction_gt?: InputMaybe<Scalars['Bytes']>;
  claimAuction_lt?: InputMaybe<Scalars['Bytes']>;
  claimAuction_gte?: InputMaybe<Scalars['Bytes']>;
  claimAuction_lte?: InputMaybe<Scalars['Bytes']>;
  claimAuction_in?: InputMaybe<Array<Scalars['Bytes']>>;
  claimAuction_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  claimAuction_contains?: InputMaybe<Scalars['Bytes']>;
  claimAuction_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BrandCentralGlobal_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BrandCentralGlobal_filter>>>;
};

export type BrandCentralGlobal_orderBy =
  | 'id'
  | 'numberOfTickers'
  | 'numberOfGoodieBags'
  | 'numberOfGoodieItems'
  | 'BrandCentral'
  | 'BrandNFT'
  | 'skLootFactory'
  | 'skLoot'
  | 'claimAuction';

export type BrandNft = {
  id: Scalars['ID'];
  ticker: Scalars['String'];
  tokenURI: Scalars['String'];
  registeredBuildingTypeId: Scalars['BigInt'];
  registeredBuildingTypeName: Scalars['String'];
  numberOfSlotAssociatedWithBrand: Scalars['BigInt'];
  numberOfLootBags: Scalars['BigInt'];
  numberOfLootItems: Scalars['BigInt'];
};

export type BrandNft_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
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
  tokenURI?: InputMaybe<Scalars['String']>;
  tokenURI_not?: InputMaybe<Scalars['String']>;
  tokenURI_gt?: InputMaybe<Scalars['String']>;
  tokenURI_lt?: InputMaybe<Scalars['String']>;
  tokenURI_gte?: InputMaybe<Scalars['String']>;
  tokenURI_lte?: InputMaybe<Scalars['String']>;
  tokenURI_in?: InputMaybe<Array<Scalars['String']>>;
  tokenURI_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenURI_contains?: InputMaybe<Scalars['String']>;
  tokenURI_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_not_contains?: InputMaybe<Scalars['String']>;
  tokenURI_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_starts_with?: InputMaybe<Scalars['String']>;
  tokenURI_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenURI_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_ends_with?: InputMaybe<Scalars['String']>;
  tokenURI_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenURI_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registeredBuildingTypeId?: InputMaybe<Scalars['BigInt']>;
  registeredBuildingTypeId_not?: InputMaybe<Scalars['BigInt']>;
  registeredBuildingTypeId_gt?: InputMaybe<Scalars['BigInt']>;
  registeredBuildingTypeId_lt?: InputMaybe<Scalars['BigInt']>;
  registeredBuildingTypeId_gte?: InputMaybe<Scalars['BigInt']>;
  registeredBuildingTypeId_lte?: InputMaybe<Scalars['BigInt']>;
  registeredBuildingTypeId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  registeredBuildingTypeId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  registeredBuildingTypeName?: InputMaybe<Scalars['String']>;
  registeredBuildingTypeName_not?: InputMaybe<Scalars['String']>;
  registeredBuildingTypeName_gt?: InputMaybe<Scalars['String']>;
  registeredBuildingTypeName_lt?: InputMaybe<Scalars['String']>;
  registeredBuildingTypeName_gte?: InputMaybe<Scalars['String']>;
  registeredBuildingTypeName_lte?: InputMaybe<Scalars['String']>;
  registeredBuildingTypeName_in?: InputMaybe<Array<Scalars['String']>>;
  registeredBuildingTypeName_not_in?: InputMaybe<Array<Scalars['String']>>;
  registeredBuildingTypeName_contains?: InputMaybe<Scalars['String']>;
  registeredBuildingTypeName_contains_nocase?: InputMaybe<Scalars['String']>;
  registeredBuildingTypeName_not_contains?: InputMaybe<Scalars['String']>;
  registeredBuildingTypeName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  registeredBuildingTypeName_starts_with?: InputMaybe<Scalars['String']>;
  registeredBuildingTypeName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registeredBuildingTypeName_not_starts_with?: InputMaybe<Scalars['String']>;
  registeredBuildingTypeName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registeredBuildingTypeName_ends_with?: InputMaybe<Scalars['String']>;
  registeredBuildingTypeName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registeredBuildingTypeName_not_ends_with?: InputMaybe<Scalars['String']>;
  registeredBuildingTypeName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  numberOfSlotAssociatedWithBrand?: InputMaybe<Scalars['BigInt']>;
  numberOfSlotAssociatedWithBrand_not?: InputMaybe<Scalars['BigInt']>;
  numberOfSlotAssociatedWithBrand_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfSlotAssociatedWithBrand_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfSlotAssociatedWithBrand_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfSlotAssociatedWithBrand_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfSlotAssociatedWithBrand_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfSlotAssociatedWithBrand_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfLootBags?: InputMaybe<Scalars['BigInt']>;
  numberOfLootBags_not?: InputMaybe<Scalars['BigInt']>;
  numberOfLootBags_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfLootBags_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfLootBags_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfLootBags_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfLootBags_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfLootBags_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfLootItems?: InputMaybe<Scalars['BigInt']>;
  numberOfLootItems_not?: InputMaybe<Scalars['BigInt']>;
  numberOfLootItems_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfLootItems_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfLootItems_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfLootItems_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfLootItems_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfLootItems_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BrandNft_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BrandNft_filter>>>;
};

export type BrandNft_orderBy =
  | 'id'
  | 'ticker'
  | 'tokenURI'
  | 'registeredBuildingTypeId'
  | 'registeredBuildingTypeName'
  | 'numberOfSlotAssociatedWithBrand'
  | 'numberOfLootBags'
  | 'numberOfLootItems';

export type CollateralizedKnotOwner = {
  id: Scalars['ID'];
  sETHContractAddress: Scalars['String'];
  stakehouseAddress: Scalars['String'];
  blsPubKey: Scalars['String'];
  owner: Scalars['String'];
  SLOT: Scalars['BigInt'];
};

export type CollateralizedKnotOwner_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  sETHContractAddress?: InputMaybe<Scalars['String']>;
  sETHContractAddress_not?: InputMaybe<Scalars['String']>;
  sETHContractAddress_gt?: InputMaybe<Scalars['String']>;
  sETHContractAddress_lt?: InputMaybe<Scalars['String']>;
  sETHContractAddress_gte?: InputMaybe<Scalars['String']>;
  sETHContractAddress_lte?: InputMaybe<Scalars['String']>;
  sETHContractAddress_in?: InputMaybe<Array<Scalars['String']>>;
  sETHContractAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  sETHContractAddress_contains?: InputMaybe<Scalars['String']>;
  sETHContractAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  sETHContractAddress_not_contains?: InputMaybe<Scalars['String']>;
  sETHContractAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  sETHContractAddress_starts_with?: InputMaybe<Scalars['String']>;
  sETHContractAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sETHContractAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  sETHContractAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sETHContractAddress_ends_with?: InputMaybe<Scalars['String']>;
  sETHContractAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sETHContractAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  sETHContractAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stakehouseAddress?: InputMaybe<Scalars['String']>;
  stakehouseAddress_not?: InputMaybe<Scalars['String']>;
  stakehouseAddress_gt?: InputMaybe<Scalars['String']>;
  stakehouseAddress_lt?: InputMaybe<Scalars['String']>;
  stakehouseAddress_gte?: InputMaybe<Scalars['String']>;
  stakehouseAddress_lte?: InputMaybe<Scalars['String']>;
  stakehouseAddress_in?: InputMaybe<Array<Scalars['String']>>;
  stakehouseAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  stakehouseAddress_contains?: InputMaybe<Scalars['String']>;
  stakehouseAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  stakehouseAddress_not_contains?: InputMaybe<Scalars['String']>;
  stakehouseAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  stakehouseAddress_starts_with?: InputMaybe<Scalars['String']>;
  stakehouseAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stakehouseAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  stakehouseAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stakehouseAddress_ends_with?: InputMaybe<Scalars['String']>;
  stakehouseAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stakehouseAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  stakehouseAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blsPubKey?: InputMaybe<Scalars['String']>;
  blsPubKey_not?: InputMaybe<Scalars['String']>;
  blsPubKey_gt?: InputMaybe<Scalars['String']>;
  blsPubKey_lt?: InputMaybe<Scalars['String']>;
  blsPubKey_gte?: InputMaybe<Scalars['String']>;
  blsPubKey_lte?: InputMaybe<Scalars['String']>;
  blsPubKey_in?: InputMaybe<Array<Scalars['String']>>;
  blsPubKey_not_in?: InputMaybe<Array<Scalars['String']>>;
  blsPubKey_contains?: InputMaybe<Scalars['String']>;
  blsPubKey_contains_nocase?: InputMaybe<Scalars['String']>;
  blsPubKey_not_contains?: InputMaybe<Scalars['String']>;
  blsPubKey_not_contains_nocase?: InputMaybe<Scalars['String']>;
  blsPubKey_starts_with?: InputMaybe<Scalars['String']>;
  blsPubKey_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blsPubKey_not_starts_with?: InputMaybe<Scalars['String']>;
  blsPubKey_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blsPubKey_ends_with?: InputMaybe<Scalars['String']>;
  blsPubKey_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blsPubKey_not_ends_with?: InputMaybe<Scalars['String']>;
  blsPubKey_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  SLOT?: InputMaybe<Scalars['BigInt']>;
  SLOT_not?: InputMaybe<Scalars['BigInt']>;
  SLOT_gt?: InputMaybe<Scalars['BigInt']>;
  SLOT_lt?: InputMaybe<Scalars['BigInt']>;
  SLOT_gte?: InputMaybe<Scalars['BigInt']>;
  SLOT_lte?: InputMaybe<Scalars['BigInt']>;
  SLOT_in?: InputMaybe<Array<Scalars['BigInt']>>;
  SLOT_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CollateralizedKnotOwner_filter>>>;
  or?: InputMaybe<Array<InputMaybe<CollateralizedKnotOwner_filter>>>;
};

export type CollateralizedKnotOwner_orderBy =
  | 'id'
  | 'sETHContractAddress'
  | 'stakehouseAddress'
  | 'blsPubKey'
  | 'owner'
  | 'SLOT';

export type DecryptionPiece = {
  id: Scalars['ID'];
  guardian: Scalars['Bytes'];
  recipientAesKey: Scalars['Bytes'];
  blsPublicKey: Scalars['Bytes'];
  ciphertext: Scalars['Bytes'];
  zkProof: Scalars['Bytes'];
  nonce: Scalars['BigInt'];
};

export type DecryptionPiece_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  guardian?: InputMaybe<Scalars['Bytes']>;
  guardian_not?: InputMaybe<Scalars['Bytes']>;
  guardian_gt?: InputMaybe<Scalars['Bytes']>;
  guardian_lt?: InputMaybe<Scalars['Bytes']>;
  guardian_gte?: InputMaybe<Scalars['Bytes']>;
  guardian_lte?: InputMaybe<Scalars['Bytes']>;
  guardian_in?: InputMaybe<Array<Scalars['Bytes']>>;
  guardian_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  guardian_contains?: InputMaybe<Scalars['Bytes']>;
  guardian_not_contains?: InputMaybe<Scalars['Bytes']>;
  recipientAesKey?: InputMaybe<Scalars['Bytes']>;
  recipientAesKey_not?: InputMaybe<Scalars['Bytes']>;
  recipientAesKey_gt?: InputMaybe<Scalars['Bytes']>;
  recipientAesKey_lt?: InputMaybe<Scalars['Bytes']>;
  recipientAesKey_gte?: InputMaybe<Scalars['Bytes']>;
  recipientAesKey_lte?: InputMaybe<Scalars['Bytes']>;
  recipientAesKey_in?: InputMaybe<Array<Scalars['Bytes']>>;
  recipientAesKey_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  recipientAesKey_contains?: InputMaybe<Scalars['Bytes']>;
  recipientAesKey_not_contains?: InputMaybe<Scalars['Bytes']>;
  blsPublicKey?: InputMaybe<Scalars['Bytes']>;
  blsPublicKey_not?: InputMaybe<Scalars['Bytes']>;
  blsPublicKey_gt?: InputMaybe<Scalars['Bytes']>;
  blsPublicKey_lt?: InputMaybe<Scalars['Bytes']>;
  blsPublicKey_gte?: InputMaybe<Scalars['Bytes']>;
  blsPublicKey_lte?: InputMaybe<Scalars['Bytes']>;
  blsPublicKey_in?: InputMaybe<Array<Scalars['Bytes']>>;
  blsPublicKey_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  blsPublicKey_contains?: InputMaybe<Scalars['Bytes']>;
  blsPublicKey_not_contains?: InputMaybe<Scalars['Bytes']>;
  ciphertext?: InputMaybe<Scalars['Bytes']>;
  ciphertext_not?: InputMaybe<Scalars['Bytes']>;
  ciphertext_gt?: InputMaybe<Scalars['Bytes']>;
  ciphertext_lt?: InputMaybe<Scalars['Bytes']>;
  ciphertext_gte?: InputMaybe<Scalars['Bytes']>;
  ciphertext_lte?: InputMaybe<Scalars['Bytes']>;
  ciphertext_in?: InputMaybe<Array<Scalars['Bytes']>>;
  ciphertext_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  ciphertext_contains?: InputMaybe<Scalars['Bytes']>;
  ciphertext_not_contains?: InputMaybe<Scalars['Bytes']>;
  zkProof?: InputMaybe<Scalars['Bytes']>;
  zkProof_not?: InputMaybe<Scalars['Bytes']>;
  zkProof_gt?: InputMaybe<Scalars['Bytes']>;
  zkProof_lt?: InputMaybe<Scalars['Bytes']>;
  zkProof_gte?: InputMaybe<Scalars['Bytes']>;
  zkProof_lte?: InputMaybe<Scalars['Bytes']>;
  zkProof_in?: InputMaybe<Array<Scalars['Bytes']>>;
  zkProof_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  zkProof_contains?: InputMaybe<Scalars['Bytes']>;
  zkProof_not_contains?: InputMaybe<Scalars['Bytes']>;
  nonce?: InputMaybe<Scalars['BigInt']>;
  nonce_not?: InputMaybe<Scalars['BigInt']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']>;
  nonce_lt?: InputMaybe<Scalars['BigInt']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DecryptionPiece_filter>>>;
  or?: InputMaybe<Array<InputMaybe<DecryptionPiece_filter>>>;
};

export type DecryptionPiece_orderBy =
  | 'id'
  | 'guardian'
  | 'recipientAesKey'
  | 'blsPublicKey'
  | 'ciphertext'
  | 'zkProof'
  | 'nonce';

export type DecryptionRequest = {
  id: Scalars['ID'];
  requesters: Array<Scalars['Bytes']>;
  stakeHouse: Scalars['Bytes'];
  blsPublicKey: Scalars['Bytes'];
  nonce: Scalars['BigInt'];
  recipientAesKey: Scalars['Bytes'];
  totalNumberOfPiecesReceived: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
};

export type DecryptionRequest_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  requesters?: InputMaybe<Array<Scalars['Bytes']>>;
  requesters_not?: InputMaybe<Array<Scalars['Bytes']>>;
  requesters_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  requesters_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  requesters_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  requesters_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  stakeHouse?: InputMaybe<Scalars['Bytes']>;
  stakeHouse_not?: InputMaybe<Scalars['Bytes']>;
  stakeHouse_gt?: InputMaybe<Scalars['Bytes']>;
  stakeHouse_lt?: InputMaybe<Scalars['Bytes']>;
  stakeHouse_gte?: InputMaybe<Scalars['Bytes']>;
  stakeHouse_lte?: InputMaybe<Scalars['Bytes']>;
  stakeHouse_in?: InputMaybe<Array<Scalars['Bytes']>>;
  stakeHouse_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  stakeHouse_contains?: InputMaybe<Scalars['Bytes']>;
  stakeHouse_not_contains?: InputMaybe<Scalars['Bytes']>;
  blsPublicKey?: InputMaybe<Scalars['Bytes']>;
  blsPublicKey_not?: InputMaybe<Scalars['Bytes']>;
  blsPublicKey_gt?: InputMaybe<Scalars['Bytes']>;
  blsPublicKey_lt?: InputMaybe<Scalars['Bytes']>;
  blsPublicKey_gte?: InputMaybe<Scalars['Bytes']>;
  blsPublicKey_lte?: InputMaybe<Scalars['Bytes']>;
  blsPublicKey_in?: InputMaybe<Array<Scalars['Bytes']>>;
  blsPublicKey_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  blsPublicKey_contains?: InputMaybe<Scalars['Bytes']>;
  blsPublicKey_not_contains?: InputMaybe<Scalars['Bytes']>;
  nonce?: InputMaybe<Scalars['BigInt']>;
  nonce_not?: InputMaybe<Scalars['BigInt']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']>;
  nonce_lt?: InputMaybe<Scalars['BigInt']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  recipientAesKey?: InputMaybe<Scalars['Bytes']>;
  recipientAesKey_not?: InputMaybe<Scalars['Bytes']>;
  recipientAesKey_gt?: InputMaybe<Scalars['Bytes']>;
  recipientAesKey_lt?: InputMaybe<Scalars['Bytes']>;
  recipientAesKey_gte?: InputMaybe<Scalars['Bytes']>;
  recipientAesKey_lte?: InputMaybe<Scalars['Bytes']>;
  recipientAesKey_in?: InputMaybe<Array<Scalars['Bytes']>>;
  recipientAesKey_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  recipientAesKey_contains?: InputMaybe<Scalars['Bytes']>;
  recipientAesKey_not_contains?: InputMaybe<Scalars['Bytes']>;
  totalNumberOfPiecesReceived?: InputMaybe<Scalars['BigInt']>;
  totalNumberOfPiecesReceived_not?: InputMaybe<Scalars['BigInt']>;
  totalNumberOfPiecesReceived_gt?: InputMaybe<Scalars['BigInt']>;
  totalNumberOfPiecesReceived_lt?: InputMaybe<Scalars['BigInt']>;
  totalNumberOfPiecesReceived_gte?: InputMaybe<Scalars['BigInt']>;
  totalNumberOfPiecesReceived_lte?: InputMaybe<Scalars['BigInt']>;
  totalNumberOfPiecesReceived_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalNumberOfPiecesReceived_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DecryptionRequest_filter>>>;
  or?: InputMaybe<Array<InputMaybe<DecryptionRequest_filter>>>;
};

export type DecryptionRequest_orderBy =
  | 'id'
  | 'requesters'
  | 'stakeHouse'
  | 'blsPublicKey'
  | 'nonce'
  | 'recipientAesKey'
  | 'totalNumberOfPiecesReceived'
  | 'blockNumber';

export type EFDeposit = {
  id: Scalars['ID'];
  blsPubKey: Scalars['String'];
  withdrawalCredentials: Scalars['String'];
  blsSignature: Scalars['String'];
  merkleRoot: Scalars['String'];
  depositCount: Scalars['BigInt'];
  amount: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
};

export type EFDepositContractEvent = {
  id: Scalars['ID'];
  blsPubKey: Scalars['String'];
  amount: Scalars['BigInt'];
  signature: Scalars['String'];
  withdrawalCredentials: Scalars['String'];
};

export type EFDepositContractEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  blsPubKey?: InputMaybe<Scalars['String']>;
  blsPubKey_not?: InputMaybe<Scalars['String']>;
  blsPubKey_gt?: InputMaybe<Scalars['String']>;
  blsPubKey_lt?: InputMaybe<Scalars['String']>;
  blsPubKey_gte?: InputMaybe<Scalars['String']>;
  blsPubKey_lte?: InputMaybe<Scalars['String']>;
  blsPubKey_in?: InputMaybe<Array<Scalars['String']>>;
  blsPubKey_not_in?: InputMaybe<Array<Scalars['String']>>;
  blsPubKey_contains?: InputMaybe<Scalars['String']>;
  blsPubKey_contains_nocase?: InputMaybe<Scalars['String']>;
  blsPubKey_not_contains?: InputMaybe<Scalars['String']>;
  blsPubKey_not_contains_nocase?: InputMaybe<Scalars['String']>;
  blsPubKey_starts_with?: InputMaybe<Scalars['String']>;
  blsPubKey_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blsPubKey_not_starts_with?: InputMaybe<Scalars['String']>;
  blsPubKey_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blsPubKey_ends_with?: InputMaybe<Scalars['String']>;
  blsPubKey_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blsPubKey_not_ends_with?: InputMaybe<Scalars['String']>;
  blsPubKey_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signature?: InputMaybe<Scalars['String']>;
  signature_not?: InputMaybe<Scalars['String']>;
  signature_gt?: InputMaybe<Scalars['String']>;
  signature_lt?: InputMaybe<Scalars['String']>;
  signature_gte?: InputMaybe<Scalars['String']>;
  signature_lte?: InputMaybe<Scalars['String']>;
  signature_in?: InputMaybe<Array<Scalars['String']>>;
  signature_not_in?: InputMaybe<Array<Scalars['String']>>;
  signature_contains?: InputMaybe<Scalars['String']>;
  signature_contains_nocase?: InputMaybe<Scalars['String']>;
  signature_not_contains?: InputMaybe<Scalars['String']>;
  signature_not_contains_nocase?: InputMaybe<Scalars['String']>;
  signature_starts_with?: InputMaybe<Scalars['String']>;
  signature_starts_with_nocase?: InputMaybe<Scalars['String']>;
  signature_not_starts_with?: InputMaybe<Scalars['String']>;
  signature_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  signature_ends_with?: InputMaybe<Scalars['String']>;
  signature_ends_with_nocase?: InputMaybe<Scalars['String']>;
  signature_not_ends_with?: InputMaybe<Scalars['String']>;
  signature_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  withdrawalCredentials?: InputMaybe<Scalars['String']>;
  withdrawalCredentials_not?: InputMaybe<Scalars['String']>;
  withdrawalCredentials_gt?: InputMaybe<Scalars['String']>;
  withdrawalCredentials_lt?: InputMaybe<Scalars['String']>;
  withdrawalCredentials_gte?: InputMaybe<Scalars['String']>;
  withdrawalCredentials_lte?: InputMaybe<Scalars['String']>;
  withdrawalCredentials_in?: InputMaybe<Array<Scalars['String']>>;
  withdrawalCredentials_not_in?: InputMaybe<Array<Scalars['String']>>;
  withdrawalCredentials_contains?: InputMaybe<Scalars['String']>;
  withdrawalCredentials_contains_nocase?: InputMaybe<Scalars['String']>;
  withdrawalCredentials_not_contains?: InputMaybe<Scalars['String']>;
  withdrawalCredentials_not_contains_nocase?: InputMaybe<Scalars['String']>;
  withdrawalCredentials_starts_with?: InputMaybe<Scalars['String']>;
  withdrawalCredentials_starts_with_nocase?: InputMaybe<Scalars['String']>;
  withdrawalCredentials_not_starts_with?: InputMaybe<Scalars['String']>;
  withdrawalCredentials_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  withdrawalCredentials_ends_with?: InputMaybe<Scalars['String']>;
  withdrawalCredentials_ends_with_nocase?: InputMaybe<Scalars['String']>;
  withdrawalCredentials_not_ends_with?: InputMaybe<Scalars['String']>;
  withdrawalCredentials_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EFDepositContractEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<EFDepositContractEvent_filter>>>;
};

export type EFDepositContractEvent_orderBy =
  | 'id'
  | 'blsPubKey'
  | 'amount'
  | 'signature'
  | 'withdrawalCredentials';

export type EFDeposit_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  blsPubKey?: InputMaybe<Scalars['String']>;
  blsPubKey_not?: InputMaybe<Scalars['String']>;
  blsPubKey_gt?: InputMaybe<Scalars['String']>;
  blsPubKey_lt?: InputMaybe<Scalars['String']>;
  blsPubKey_gte?: InputMaybe<Scalars['String']>;
  blsPubKey_lte?: InputMaybe<Scalars['String']>;
  blsPubKey_in?: InputMaybe<Array<Scalars['String']>>;
  blsPubKey_not_in?: InputMaybe<Array<Scalars['String']>>;
  blsPubKey_contains?: InputMaybe<Scalars['String']>;
  blsPubKey_contains_nocase?: InputMaybe<Scalars['String']>;
  blsPubKey_not_contains?: InputMaybe<Scalars['String']>;
  blsPubKey_not_contains_nocase?: InputMaybe<Scalars['String']>;
  blsPubKey_starts_with?: InputMaybe<Scalars['String']>;
  blsPubKey_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blsPubKey_not_starts_with?: InputMaybe<Scalars['String']>;
  blsPubKey_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blsPubKey_ends_with?: InputMaybe<Scalars['String']>;
  blsPubKey_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blsPubKey_not_ends_with?: InputMaybe<Scalars['String']>;
  blsPubKey_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  withdrawalCredentials?: InputMaybe<Scalars['String']>;
  withdrawalCredentials_not?: InputMaybe<Scalars['String']>;
  withdrawalCredentials_gt?: InputMaybe<Scalars['String']>;
  withdrawalCredentials_lt?: InputMaybe<Scalars['String']>;
  withdrawalCredentials_gte?: InputMaybe<Scalars['String']>;
  withdrawalCredentials_lte?: InputMaybe<Scalars['String']>;
  withdrawalCredentials_in?: InputMaybe<Array<Scalars['String']>>;
  withdrawalCredentials_not_in?: InputMaybe<Array<Scalars['String']>>;
  withdrawalCredentials_contains?: InputMaybe<Scalars['String']>;
  withdrawalCredentials_contains_nocase?: InputMaybe<Scalars['String']>;
  withdrawalCredentials_not_contains?: InputMaybe<Scalars['String']>;
  withdrawalCredentials_not_contains_nocase?: InputMaybe<Scalars['String']>;
  withdrawalCredentials_starts_with?: InputMaybe<Scalars['String']>;
  withdrawalCredentials_starts_with_nocase?: InputMaybe<Scalars['String']>;
  withdrawalCredentials_not_starts_with?: InputMaybe<Scalars['String']>;
  withdrawalCredentials_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  withdrawalCredentials_ends_with?: InputMaybe<Scalars['String']>;
  withdrawalCredentials_ends_with_nocase?: InputMaybe<Scalars['String']>;
  withdrawalCredentials_not_ends_with?: InputMaybe<Scalars['String']>;
  withdrawalCredentials_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blsSignature?: InputMaybe<Scalars['String']>;
  blsSignature_not?: InputMaybe<Scalars['String']>;
  blsSignature_gt?: InputMaybe<Scalars['String']>;
  blsSignature_lt?: InputMaybe<Scalars['String']>;
  blsSignature_gte?: InputMaybe<Scalars['String']>;
  blsSignature_lte?: InputMaybe<Scalars['String']>;
  blsSignature_in?: InputMaybe<Array<Scalars['String']>>;
  blsSignature_not_in?: InputMaybe<Array<Scalars['String']>>;
  blsSignature_contains?: InputMaybe<Scalars['String']>;
  blsSignature_contains_nocase?: InputMaybe<Scalars['String']>;
  blsSignature_not_contains?: InputMaybe<Scalars['String']>;
  blsSignature_not_contains_nocase?: InputMaybe<Scalars['String']>;
  blsSignature_starts_with?: InputMaybe<Scalars['String']>;
  blsSignature_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blsSignature_not_starts_with?: InputMaybe<Scalars['String']>;
  blsSignature_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blsSignature_ends_with?: InputMaybe<Scalars['String']>;
  blsSignature_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blsSignature_not_ends_with?: InputMaybe<Scalars['String']>;
  blsSignature_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  merkleRoot?: InputMaybe<Scalars['String']>;
  merkleRoot_not?: InputMaybe<Scalars['String']>;
  merkleRoot_gt?: InputMaybe<Scalars['String']>;
  merkleRoot_lt?: InputMaybe<Scalars['String']>;
  merkleRoot_gte?: InputMaybe<Scalars['String']>;
  merkleRoot_lte?: InputMaybe<Scalars['String']>;
  merkleRoot_in?: InputMaybe<Array<Scalars['String']>>;
  merkleRoot_not_in?: InputMaybe<Array<Scalars['String']>>;
  merkleRoot_contains?: InputMaybe<Scalars['String']>;
  merkleRoot_contains_nocase?: InputMaybe<Scalars['String']>;
  merkleRoot_not_contains?: InputMaybe<Scalars['String']>;
  merkleRoot_not_contains_nocase?: InputMaybe<Scalars['String']>;
  merkleRoot_starts_with?: InputMaybe<Scalars['String']>;
  merkleRoot_starts_with_nocase?: InputMaybe<Scalars['String']>;
  merkleRoot_not_starts_with?: InputMaybe<Scalars['String']>;
  merkleRoot_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  merkleRoot_ends_with?: InputMaybe<Scalars['String']>;
  merkleRoot_ends_with_nocase?: InputMaybe<Scalars['String']>;
  merkleRoot_not_ends_with?: InputMaybe<Scalars['String']>;
  merkleRoot_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  depositCount?: InputMaybe<Scalars['BigInt']>;
  depositCount_not?: InputMaybe<Scalars['BigInt']>;
  depositCount_gt?: InputMaybe<Scalars['BigInt']>;
  depositCount_lt?: InputMaybe<Scalars['BigInt']>;
  depositCount_gte?: InputMaybe<Scalars['BigInt']>;
  depositCount_lte?: InputMaybe<Scalars['BigInt']>;
  depositCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  depositCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EFDeposit_filter>>>;
  or?: InputMaybe<Array<InputMaybe<EFDeposit_filter>>>;
};

export type EFDeposit_orderBy =
  | 'id'
  | 'blsPubKey'
  | 'withdrawalCredentials'
  | 'blsSignature'
  | 'merkleRoot'
  | 'depositCount'
  | 'amount'
  | 'blockNumber';

export type Event = {
  id: Scalars['ID'];
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
  | 'from'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'blsPubKeyForKnot'
  | 'key'
  | 'value'
  | 'value2';

export type GoodieBagItem = {
  id: Scalars['ID'];
  name: Scalars['String'];
  type: Scalars['String'];
  brandTokenId: Scalars['BigInt'];
  tokenURI: Scalars['String'];
};

export type GoodieBagItem_filter = {
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
  brandTokenId?: InputMaybe<Scalars['BigInt']>;
  brandTokenId_not?: InputMaybe<Scalars['BigInt']>;
  brandTokenId_gt?: InputMaybe<Scalars['BigInt']>;
  brandTokenId_lt?: InputMaybe<Scalars['BigInt']>;
  brandTokenId_gte?: InputMaybe<Scalars['BigInt']>;
  brandTokenId_lte?: InputMaybe<Scalars['BigInt']>;
  brandTokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  brandTokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenURI?: InputMaybe<Scalars['String']>;
  tokenURI_not?: InputMaybe<Scalars['String']>;
  tokenURI_gt?: InputMaybe<Scalars['String']>;
  tokenURI_lt?: InputMaybe<Scalars['String']>;
  tokenURI_gte?: InputMaybe<Scalars['String']>;
  tokenURI_lte?: InputMaybe<Scalars['String']>;
  tokenURI_in?: InputMaybe<Array<Scalars['String']>>;
  tokenURI_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenURI_contains?: InputMaybe<Scalars['String']>;
  tokenURI_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_not_contains?: InputMaybe<Scalars['String']>;
  tokenURI_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_starts_with?: InputMaybe<Scalars['String']>;
  tokenURI_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenURI_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_ends_with?: InputMaybe<Scalars['String']>;
  tokenURI_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenURI_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GoodieBagItem_filter>>>;
  or?: InputMaybe<Array<InputMaybe<GoodieBagItem_filter>>>;
};

export type GoodieBagItem_orderBy =
  | 'id'
  | 'name'
  | 'type'
  | 'brandTokenId'
  | 'tokenURI';

export type Guardian = {
  id: Scalars['ID'];
  aesPublicKey: Scalars['Bytes'];
  guardianIndexPointer: Scalars['BigInt'];
  sharedPublicKey: Scalars['String'];
};

export type Guardian_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  aesPublicKey?: InputMaybe<Scalars['Bytes']>;
  aesPublicKey_not?: InputMaybe<Scalars['Bytes']>;
  aesPublicKey_gt?: InputMaybe<Scalars['Bytes']>;
  aesPublicKey_lt?: InputMaybe<Scalars['Bytes']>;
  aesPublicKey_gte?: InputMaybe<Scalars['Bytes']>;
  aesPublicKey_lte?: InputMaybe<Scalars['Bytes']>;
  aesPublicKey_in?: InputMaybe<Array<Scalars['Bytes']>>;
  aesPublicKey_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  aesPublicKey_contains?: InputMaybe<Scalars['Bytes']>;
  aesPublicKey_not_contains?: InputMaybe<Scalars['Bytes']>;
  guardianIndexPointer?: InputMaybe<Scalars['BigInt']>;
  guardianIndexPointer_not?: InputMaybe<Scalars['BigInt']>;
  guardianIndexPointer_gt?: InputMaybe<Scalars['BigInt']>;
  guardianIndexPointer_lt?: InputMaybe<Scalars['BigInt']>;
  guardianIndexPointer_gte?: InputMaybe<Scalars['BigInt']>;
  guardianIndexPointer_lte?: InputMaybe<Scalars['BigInt']>;
  guardianIndexPointer_in?: InputMaybe<Array<Scalars['BigInt']>>;
  guardianIndexPointer_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sharedPublicKey?: InputMaybe<Scalars['String']>;
  sharedPublicKey_not?: InputMaybe<Scalars['String']>;
  sharedPublicKey_gt?: InputMaybe<Scalars['String']>;
  sharedPublicKey_lt?: InputMaybe<Scalars['String']>;
  sharedPublicKey_gte?: InputMaybe<Scalars['String']>;
  sharedPublicKey_lte?: InputMaybe<Scalars['String']>;
  sharedPublicKey_in?: InputMaybe<Array<Scalars['String']>>;
  sharedPublicKey_not_in?: InputMaybe<Array<Scalars['String']>>;
  sharedPublicKey_contains?: InputMaybe<Scalars['String']>;
  sharedPublicKey_contains_nocase?: InputMaybe<Scalars['String']>;
  sharedPublicKey_not_contains?: InputMaybe<Scalars['String']>;
  sharedPublicKey_not_contains_nocase?: InputMaybe<Scalars['String']>;
  sharedPublicKey_starts_with?: InputMaybe<Scalars['String']>;
  sharedPublicKey_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sharedPublicKey_not_starts_with?: InputMaybe<Scalars['String']>;
  sharedPublicKey_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sharedPublicKey_ends_with?: InputMaybe<Scalars['String']>;
  sharedPublicKey_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sharedPublicKey_not_ends_with?: InputMaybe<Scalars['String']>;
  sharedPublicKey_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Guardian_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Guardian_filter>>>;
};

export type Guardian_orderBy =
  | 'id'
  | 'aesPublicKey'
  | 'guardianIndexPointer'
  | 'sharedPublicKey';

export type HouseGoodieBag = {
  id: Scalars['ID'];
  brandTokenId: Scalars['BigInt'];
  associatedKnot: Scalars['Bytes'];
  landXCoordinate: Scalars['BigInt'];
  landYCoordinate: Scalars['BigInt'];
  landRemoved: Scalars['Boolean'];
  building: Scalars['String'];
  buildingRemoved: Scalars['Boolean'];
  character: Scalars['String'];
  characterRemoved: Scalars['Boolean'];
  tokenURI: Scalars['String'];
};

export type HouseGoodieBag_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  brandTokenId?: InputMaybe<Scalars['BigInt']>;
  brandTokenId_not?: InputMaybe<Scalars['BigInt']>;
  brandTokenId_gt?: InputMaybe<Scalars['BigInt']>;
  brandTokenId_lt?: InputMaybe<Scalars['BigInt']>;
  brandTokenId_gte?: InputMaybe<Scalars['BigInt']>;
  brandTokenId_lte?: InputMaybe<Scalars['BigInt']>;
  brandTokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  brandTokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  associatedKnot?: InputMaybe<Scalars['Bytes']>;
  associatedKnot_not?: InputMaybe<Scalars['Bytes']>;
  associatedKnot_gt?: InputMaybe<Scalars['Bytes']>;
  associatedKnot_lt?: InputMaybe<Scalars['Bytes']>;
  associatedKnot_gte?: InputMaybe<Scalars['Bytes']>;
  associatedKnot_lte?: InputMaybe<Scalars['Bytes']>;
  associatedKnot_in?: InputMaybe<Array<Scalars['Bytes']>>;
  associatedKnot_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  associatedKnot_contains?: InputMaybe<Scalars['Bytes']>;
  associatedKnot_not_contains?: InputMaybe<Scalars['Bytes']>;
  landXCoordinate?: InputMaybe<Scalars['BigInt']>;
  landXCoordinate_not?: InputMaybe<Scalars['BigInt']>;
  landXCoordinate_gt?: InputMaybe<Scalars['BigInt']>;
  landXCoordinate_lt?: InputMaybe<Scalars['BigInt']>;
  landXCoordinate_gte?: InputMaybe<Scalars['BigInt']>;
  landXCoordinate_lte?: InputMaybe<Scalars['BigInt']>;
  landXCoordinate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  landXCoordinate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  landYCoordinate?: InputMaybe<Scalars['BigInt']>;
  landYCoordinate_not?: InputMaybe<Scalars['BigInt']>;
  landYCoordinate_gt?: InputMaybe<Scalars['BigInt']>;
  landYCoordinate_lt?: InputMaybe<Scalars['BigInt']>;
  landYCoordinate_gte?: InputMaybe<Scalars['BigInt']>;
  landYCoordinate_lte?: InputMaybe<Scalars['BigInt']>;
  landYCoordinate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  landYCoordinate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  landRemoved?: InputMaybe<Scalars['Boolean']>;
  landRemoved_not?: InputMaybe<Scalars['Boolean']>;
  landRemoved_in?: InputMaybe<Array<Scalars['Boolean']>>;
  landRemoved_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  building?: InputMaybe<Scalars['String']>;
  building_not?: InputMaybe<Scalars['String']>;
  building_gt?: InputMaybe<Scalars['String']>;
  building_lt?: InputMaybe<Scalars['String']>;
  building_gte?: InputMaybe<Scalars['String']>;
  building_lte?: InputMaybe<Scalars['String']>;
  building_in?: InputMaybe<Array<Scalars['String']>>;
  building_not_in?: InputMaybe<Array<Scalars['String']>>;
  building_contains?: InputMaybe<Scalars['String']>;
  building_contains_nocase?: InputMaybe<Scalars['String']>;
  building_not_contains?: InputMaybe<Scalars['String']>;
  building_not_contains_nocase?: InputMaybe<Scalars['String']>;
  building_starts_with?: InputMaybe<Scalars['String']>;
  building_starts_with_nocase?: InputMaybe<Scalars['String']>;
  building_not_starts_with?: InputMaybe<Scalars['String']>;
  building_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  building_ends_with?: InputMaybe<Scalars['String']>;
  building_ends_with_nocase?: InputMaybe<Scalars['String']>;
  building_not_ends_with?: InputMaybe<Scalars['String']>;
  building_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  buildingRemoved?: InputMaybe<Scalars['Boolean']>;
  buildingRemoved_not?: InputMaybe<Scalars['Boolean']>;
  buildingRemoved_in?: InputMaybe<Array<Scalars['Boolean']>>;
  buildingRemoved_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  character?: InputMaybe<Scalars['String']>;
  character_not?: InputMaybe<Scalars['String']>;
  character_gt?: InputMaybe<Scalars['String']>;
  character_lt?: InputMaybe<Scalars['String']>;
  character_gte?: InputMaybe<Scalars['String']>;
  character_lte?: InputMaybe<Scalars['String']>;
  character_in?: InputMaybe<Array<Scalars['String']>>;
  character_not_in?: InputMaybe<Array<Scalars['String']>>;
  character_contains?: InputMaybe<Scalars['String']>;
  character_contains_nocase?: InputMaybe<Scalars['String']>;
  character_not_contains?: InputMaybe<Scalars['String']>;
  character_not_contains_nocase?: InputMaybe<Scalars['String']>;
  character_starts_with?: InputMaybe<Scalars['String']>;
  character_starts_with_nocase?: InputMaybe<Scalars['String']>;
  character_not_starts_with?: InputMaybe<Scalars['String']>;
  character_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  character_ends_with?: InputMaybe<Scalars['String']>;
  character_ends_with_nocase?: InputMaybe<Scalars['String']>;
  character_not_ends_with?: InputMaybe<Scalars['String']>;
  character_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  characterRemoved?: InputMaybe<Scalars['Boolean']>;
  characterRemoved_not?: InputMaybe<Scalars['Boolean']>;
  characterRemoved_in?: InputMaybe<Array<Scalars['Boolean']>>;
  characterRemoved_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  tokenURI?: InputMaybe<Scalars['String']>;
  tokenURI_not?: InputMaybe<Scalars['String']>;
  tokenURI_gt?: InputMaybe<Scalars['String']>;
  tokenURI_lt?: InputMaybe<Scalars['String']>;
  tokenURI_gte?: InputMaybe<Scalars['String']>;
  tokenURI_lte?: InputMaybe<Scalars['String']>;
  tokenURI_in?: InputMaybe<Array<Scalars['String']>>;
  tokenURI_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenURI_contains?: InputMaybe<Scalars['String']>;
  tokenURI_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_not_contains?: InputMaybe<Scalars['String']>;
  tokenURI_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_starts_with?: InputMaybe<Scalars['String']>;
  tokenURI_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenURI_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_ends_with?: InputMaybe<Scalars['String']>;
  tokenURI_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenURI_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<HouseGoodieBag_filter>>>;
  or?: InputMaybe<Array<InputMaybe<HouseGoodieBag_filter>>>;
};

export type HouseGoodieBag_orderBy =
  | 'id'
  | 'brandTokenId'
  | 'associatedKnot'
  | 'landXCoordinate'
  | 'landYCoordinate'
  | 'landRemoved'
  | 'building'
  | 'buildingRemoved'
  | 'character'
  | 'characterRemoved'
  | 'tokenURI';

export type KNOT = {
  id: Scalars['ID'];
  active: Scalars['Boolean'];
  addedSinceBlockNumber: Scalars['BigInt'];
  rageQuit: Scalars['Boolean'];
  rageQuitBlockNumber: Scalars['BigInt'];
  kicked: Scalars['Boolean'];
  kickBlockNumber: Scalars['BigInt'];
  coordinates: Scalars['String'];
  knotIndex: Scalars['BigInt'];
  houseIndex: Scalars['BigInt'];
  stakeHouse: Scalars['Bytes'];
  stakeHouseMetadata: StakeHouse;
  depositor: Scalars['Bytes'];
  isPartOfIndex: Scalars['Boolean'];
  totalDETHRewardsReceived: Scalars['BigInt'];
  dETHPerBlock: Scalars['BigDecimal'];
  dETHPerYear: Scalars['BigDecimal'];
  reportedYield: Scalars['BigDecimal'];
  savETHIndexId: Scalars['BigInt'];
  isolatedDETH: Scalars['BigInt'];
  historicallySlashed: Scalars['BigInt'];
  currentSlashedAmount: Scalars['BigInt'];
  collateralizedSlotOwners: Array<CollateralizedKnotOwner>;
  specialExitFee: Scalars['BigInt'];
  associatedBrandTokenId: Scalars['BigInt'];
};


export type KNOTcollateralizedSlotOwnersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CollateralizedKnotOwner_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CollateralizedKnotOwner_filter>;
};

export type KNOT_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  active?: InputMaybe<Scalars['Boolean']>;
  active_not?: InputMaybe<Scalars['Boolean']>;
  active_in?: InputMaybe<Array<Scalars['Boolean']>>;
  active_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  addedSinceBlockNumber?: InputMaybe<Scalars['BigInt']>;
  addedSinceBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  addedSinceBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  addedSinceBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  addedSinceBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  addedSinceBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  addedSinceBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  addedSinceBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rageQuit?: InputMaybe<Scalars['Boolean']>;
  rageQuit_not?: InputMaybe<Scalars['Boolean']>;
  rageQuit_in?: InputMaybe<Array<Scalars['Boolean']>>;
  rageQuit_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  rageQuitBlockNumber?: InputMaybe<Scalars['BigInt']>;
  rageQuitBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  rageQuitBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  rageQuitBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  rageQuitBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  rageQuitBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  rageQuitBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rageQuitBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  kicked?: InputMaybe<Scalars['Boolean']>;
  kicked_not?: InputMaybe<Scalars['Boolean']>;
  kicked_in?: InputMaybe<Array<Scalars['Boolean']>>;
  kicked_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  kickBlockNumber?: InputMaybe<Scalars['BigInt']>;
  kickBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  kickBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  kickBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  kickBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  kickBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  kickBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  kickBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  coordinates?: InputMaybe<Scalars['String']>;
  coordinates_not?: InputMaybe<Scalars['String']>;
  coordinates_gt?: InputMaybe<Scalars['String']>;
  coordinates_lt?: InputMaybe<Scalars['String']>;
  coordinates_gte?: InputMaybe<Scalars['String']>;
  coordinates_lte?: InputMaybe<Scalars['String']>;
  coordinates_in?: InputMaybe<Array<Scalars['String']>>;
  coordinates_not_in?: InputMaybe<Array<Scalars['String']>>;
  coordinates_contains?: InputMaybe<Scalars['String']>;
  coordinates_contains_nocase?: InputMaybe<Scalars['String']>;
  coordinates_not_contains?: InputMaybe<Scalars['String']>;
  coordinates_not_contains_nocase?: InputMaybe<Scalars['String']>;
  coordinates_starts_with?: InputMaybe<Scalars['String']>;
  coordinates_starts_with_nocase?: InputMaybe<Scalars['String']>;
  coordinates_not_starts_with?: InputMaybe<Scalars['String']>;
  coordinates_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  coordinates_ends_with?: InputMaybe<Scalars['String']>;
  coordinates_ends_with_nocase?: InputMaybe<Scalars['String']>;
  coordinates_not_ends_with?: InputMaybe<Scalars['String']>;
  coordinates_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  knotIndex?: InputMaybe<Scalars['BigInt']>;
  knotIndex_not?: InputMaybe<Scalars['BigInt']>;
  knotIndex_gt?: InputMaybe<Scalars['BigInt']>;
  knotIndex_lt?: InputMaybe<Scalars['BigInt']>;
  knotIndex_gte?: InputMaybe<Scalars['BigInt']>;
  knotIndex_lte?: InputMaybe<Scalars['BigInt']>;
  knotIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  knotIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  houseIndex?: InputMaybe<Scalars['BigInt']>;
  houseIndex_not?: InputMaybe<Scalars['BigInt']>;
  houseIndex_gt?: InputMaybe<Scalars['BigInt']>;
  houseIndex_lt?: InputMaybe<Scalars['BigInt']>;
  houseIndex_gte?: InputMaybe<Scalars['BigInt']>;
  houseIndex_lte?: InputMaybe<Scalars['BigInt']>;
  houseIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  houseIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakeHouse?: InputMaybe<Scalars['Bytes']>;
  stakeHouse_not?: InputMaybe<Scalars['Bytes']>;
  stakeHouse_gt?: InputMaybe<Scalars['Bytes']>;
  stakeHouse_lt?: InputMaybe<Scalars['Bytes']>;
  stakeHouse_gte?: InputMaybe<Scalars['Bytes']>;
  stakeHouse_lte?: InputMaybe<Scalars['Bytes']>;
  stakeHouse_in?: InputMaybe<Array<Scalars['Bytes']>>;
  stakeHouse_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  stakeHouse_contains?: InputMaybe<Scalars['Bytes']>;
  stakeHouse_not_contains?: InputMaybe<Scalars['Bytes']>;
  stakeHouseMetadata?: InputMaybe<Scalars['String']>;
  stakeHouseMetadata_not?: InputMaybe<Scalars['String']>;
  stakeHouseMetadata_gt?: InputMaybe<Scalars['String']>;
  stakeHouseMetadata_lt?: InputMaybe<Scalars['String']>;
  stakeHouseMetadata_gte?: InputMaybe<Scalars['String']>;
  stakeHouseMetadata_lte?: InputMaybe<Scalars['String']>;
  stakeHouseMetadata_in?: InputMaybe<Array<Scalars['String']>>;
  stakeHouseMetadata_not_in?: InputMaybe<Array<Scalars['String']>>;
  stakeHouseMetadata_contains?: InputMaybe<Scalars['String']>;
  stakeHouseMetadata_contains_nocase?: InputMaybe<Scalars['String']>;
  stakeHouseMetadata_not_contains?: InputMaybe<Scalars['String']>;
  stakeHouseMetadata_not_contains_nocase?: InputMaybe<Scalars['String']>;
  stakeHouseMetadata_starts_with?: InputMaybe<Scalars['String']>;
  stakeHouseMetadata_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stakeHouseMetadata_not_starts_with?: InputMaybe<Scalars['String']>;
  stakeHouseMetadata_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stakeHouseMetadata_ends_with?: InputMaybe<Scalars['String']>;
  stakeHouseMetadata_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stakeHouseMetadata_not_ends_with?: InputMaybe<Scalars['String']>;
  stakeHouseMetadata_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stakeHouseMetadata_?: InputMaybe<StakeHouse_filter>;
  depositor?: InputMaybe<Scalars['Bytes']>;
  depositor_not?: InputMaybe<Scalars['Bytes']>;
  depositor_gt?: InputMaybe<Scalars['Bytes']>;
  depositor_lt?: InputMaybe<Scalars['Bytes']>;
  depositor_gte?: InputMaybe<Scalars['Bytes']>;
  depositor_lte?: InputMaybe<Scalars['Bytes']>;
  depositor_in?: InputMaybe<Array<Scalars['Bytes']>>;
  depositor_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  depositor_contains?: InputMaybe<Scalars['Bytes']>;
  depositor_not_contains?: InputMaybe<Scalars['Bytes']>;
  isPartOfIndex?: InputMaybe<Scalars['Boolean']>;
  isPartOfIndex_not?: InputMaybe<Scalars['Boolean']>;
  isPartOfIndex_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isPartOfIndex_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  totalDETHRewardsReceived?: InputMaybe<Scalars['BigInt']>;
  totalDETHRewardsReceived_not?: InputMaybe<Scalars['BigInt']>;
  totalDETHRewardsReceived_gt?: InputMaybe<Scalars['BigInt']>;
  totalDETHRewardsReceived_lt?: InputMaybe<Scalars['BigInt']>;
  totalDETHRewardsReceived_gte?: InputMaybe<Scalars['BigInt']>;
  totalDETHRewardsReceived_lte?: InputMaybe<Scalars['BigInt']>;
  totalDETHRewardsReceived_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDETHRewardsReceived_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dETHPerBlock?: InputMaybe<Scalars['BigDecimal']>;
  dETHPerBlock_not?: InputMaybe<Scalars['BigDecimal']>;
  dETHPerBlock_gt?: InputMaybe<Scalars['BigDecimal']>;
  dETHPerBlock_lt?: InputMaybe<Scalars['BigDecimal']>;
  dETHPerBlock_gte?: InputMaybe<Scalars['BigDecimal']>;
  dETHPerBlock_lte?: InputMaybe<Scalars['BigDecimal']>;
  dETHPerBlock_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dETHPerBlock_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dETHPerYear?: InputMaybe<Scalars['BigDecimal']>;
  dETHPerYear_not?: InputMaybe<Scalars['BigDecimal']>;
  dETHPerYear_gt?: InputMaybe<Scalars['BigDecimal']>;
  dETHPerYear_lt?: InputMaybe<Scalars['BigDecimal']>;
  dETHPerYear_gte?: InputMaybe<Scalars['BigDecimal']>;
  dETHPerYear_lte?: InputMaybe<Scalars['BigDecimal']>;
  dETHPerYear_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dETHPerYear_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reportedYield?: InputMaybe<Scalars['BigDecimal']>;
  reportedYield_not?: InputMaybe<Scalars['BigDecimal']>;
  reportedYield_gt?: InputMaybe<Scalars['BigDecimal']>;
  reportedYield_lt?: InputMaybe<Scalars['BigDecimal']>;
  reportedYield_gte?: InputMaybe<Scalars['BigDecimal']>;
  reportedYield_lte?: InputMaybe<Scalars['BigDecimal']>;
  reportedYield_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reportedYield_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  savETHIndexId?: InputMaybe<Scalars['BigInt']>;
  savETHIndexId_not?: InputMaybe<Scalars['BigInt']>;
  savETHIndexId_gt?: InputMaybe<Scalars['BigInt']>;
  savETHIndexId_lt?: InputMaybe<Scalars['BigInt']>;
  savETHIndexId_gte?: InputMaybe<Scalars['BigInt']>;
  savETHIndexId_lte?: InputMaybe<Scalars['BigInt']>;
  savETHIndexId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  savETHIndexId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  isolatedDETH?: InputMaybe<Scalars['BigInt']>;
  isolatedDETH_not?: InputMaybe<Scalars['BigInt']>;
  isolatedDETH_gt?: InputMaybe<Scalars['BigInt']>;
  isolatedDETH_lt?: InputMaybe<Scalars['BigInt']>;
  isolatedDETH_gte?: InputMaybe<Scalars['BigInt']>;
  isolatedDETH_lte?: InputMaybe<Scalars['BigInt']>;
  isolatedDETH_in?: InputMaybe<Array<Scalars['BigInt']>>;
  isolatedDETH_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  historicallySlashed?: InputMaybe<Scalars['BigInt']>;
  historicallySlashed_not?: InputMaybe<Scalars['BigInt']>;
  historicallySlashed_gt?: InputMaybe<Scalars['BigInt']>;
  historicallySlashed_lt?: InputMaybe<Scalars['BigInt']>;
  historicallySlashed_gte?: InputMaybe<Scalars['BigInt']>;
  historicallySlashed_lte?: InputMaybe<Scalars['BigInt']>;
  historicallySlashed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  historicallySlashed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentSlashedAmount?: InputMaybe<Scalars['BigInt']>;
  currentSlashedAmount_not?: InputMaybe<Scalars['BigInt']>;
  currentSlashedAmount_gt?: InputMaybe<Scalars['BigInt']>;
  currentSlashedAmount_lt?: InputMaybe<Scalars['BigInt']>;
  currentSlashedAmount_gte?: InputMaybe<Scalars['BigInt']>;
  currentSlashedAmount_lte?: InputMaybe<Scalars['BigInt']>;
  currentSlashedAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentSlashedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  collateralizedSlotOwners?: InputMaybe<Array<Scalars['String']>>;
  collateralizedSlotOwners_not?: InputMaybe<Array<Scalars['String']>>;
  collateralizedSlotOwners_contains?: InputMaybe<Array<Scalars['String']>>;
  collateralizedSlotOwners_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  collateralizedSlotOwners_not_contains?: InputMaybe<Array<Scalars['String']>>;
  collateralizedSlotOwners_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  collateralizedSlotOwners_?: InputMaybe<CollateralizedKnotOwner_filter>;
  specialExitFee?: InputMaybe<Scalars['BigInt']>;
  specialExitFee_not?: InputMaybe<Scalars['BigInt']>;
  specialExitFee_gt?: InputMaybe<Scalars['BigInt']>;
  specialExitFee_lt?: InputMaybe<Scalars['BigInt']>;
  specialExitFee_gte?: InputMaybe<Scalars['BigInt']>;
  specialExitFee_lte?: InputMaybe<Scalars['BigInt']>;
  specialExitFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  specialExitFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  associatedBrandTokenId?: InputMaybe<Scalars['BigInt']>;
  associatedBrandTokenId_not?: InputMaybe<Scalars['BigInt']>;
  associatedBrandTokenId_gt?: InputMaybe<Scalars['BigInt']>;
  associatedBrandTokenId_lt?: InputMaybe<Scalars['BigInt']>;
  associatedBrandTokenId_gte?: InputMaybe<Scalars['BigInt']>;
  associatedBrandTokenId_lte?: InputMaybe<Scalars['BigInt']>;
  associatedBrandTokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  associatedBrandTokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<KNOT_filter>>>;
  or?: InputMaybe<Array<InputMaybe<KNOT_filter>>>;
};

export type KNOT_orderBy =
  | 'id'
  | 'active'
  | 'addedSinceBlockNumber'
  | 'rageQuit'
  | 'rageQuitBlockNumber'
  | 'kicked'
  | 'kickBlockNumber'
  | 'coordinates'
  | 'knotIndex'
  | 'houseIndex'
  | 'stakeHouse'
  | 'stakeHouseMetadata'
  | 'stakeHouseMetadata__id'
  | 'stakeHouseMetadata__index'
  | 'stakeHouseMetadata__sETH'
  | 'stakeHouseMetadata__sETHExchangeRate'
  | 'stakeHouseMetadata__sETHExchangeRateFormatted'
  | 'stakeHouseMetadata__sETHRedemptionRate'
  | 'stakeHouseMetadata__sETHRedemptionRateFormatted'
  | 'stakeHouseMetadata__sETHPayoffRate'
  | 'stakeHouseMetadata__sETHPayoffRateFormatted'
  | 'stakeHouseMetadata__totalAmountOfSlotSlashed'
  | 'stakeHouseMetadata__numberOfKnots'
  | 'stakeHouseMetadata__numberOfRageQuitKnots'
  | 'stakeHouseMetadata__dETHMintedWithinHouse'
  | 'stakeHouseMetadata__foundedBrandId'
  | 'stakeHouseMetadata__sETHTicker'
  | 'depositor'
  | 'isPartOfIndex'
  | 'totalDETHRewardsReceived'
  | 'dETHPerBlock'
  | 'dETHPerYear'
  | 'reportedYield'
  | 'savETHIndexId'
  | 'isolatedDETH'
  | 'historicallySlashed'
  | 'currentSlashedAmount'
  | 'collateralizedSlotOwners'
  | 'specialExitFee'
  | 'associatedBrandTokenId';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Query = {
  universeGlobalValue?: Maybe<UniverseGlobalValue>;
  universeGlobalValues: Array<UniverseGlobalValue>;
  uniqueDepositor?: Maybe<UniqueDepositor>;
  uniqueDepositors: Array<UniqueDepositor>;
  uniqueRegisteredUser?: Maybe<UniqueRegisteredUser>;
  uniqueRegisteredUsers: Array<UniqueRegisteredUser>;
  event?: Maybe<Event>;
  events: Array<Event>;
  collateralizedKnotOwner?: Maybe<CollateralizedKnotOwner>;
  collateralizedKnotOwners: Array<CollateralizedKnotOwner>;
  knot?: Maybe<KNOT>;
  knots: Array<KNOT>;
  savETHIndex?: Maybe<savETHIndex>;
  savETHIndexes: Array<savETHIndex>;
  savETHIndexGlobal?: Maybe<savETHIndexGlobal>;
  savETHIndexGlobals: Array<savETHIndexGlobal>;
  brandCentralGlobal?: Maybe<BrandCentralGlobal>;
  brandCentralGlobals: Array<BrandCentralGlobal>;
  brandNft?: Maybe<BrandNft>;
  brandNfts: Array<BrandNft>;
  houseGoodieBag?: Maybe<HouseGoodieBag>;
  houseGoodieBags: Array<HouseGoodieBag>;
  goodieBagItem?: Maybe<GoodieBagItem>;
  goodieBagItems: Array<GoodieBagItem>;
  stakeHouse?: Maybe<StakeHouse>;
  stakeHouses: Array<StakeHouse>;
  efdepositContractEvent?: Maybe<EFDepositContractEvent>;
  efdepositContractEvents: Array<EFDepositContractEvent>;
  efdeposit?: Maybe<EFDeposit>;
  efdeposits: Array<EFDeposit>;
  stakehouseAccount?: Maybe<StakehouseAccount>;
  stakehouseAccounts: Array<StakehouseAccount>;
  decryptionPiece?: Maybe<DecryptionPiece>;
  decryptionPieces: Array<DecryptionPiece>;
  decryptionRequest?: Maybe<DecryptionRequest>;
  decryptionRequests: Array<DecryptionRequest>;
  guardian?: Maybe<Guardian>;
  guardians: Array<Guardian>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryuniverseGlobalValueArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuniverseGlobalValuesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UniverseGlobalValue_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UniverseGlobalValue_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuniqueDepositorArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuniqueDepositorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UniqueDepositor_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UniqueDepositor_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuniqueRegisteredUserArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuniqueRegisteredUsersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UniqueRegisteredUser_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UniqueRegisteredUser_filter>;
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


export type QuerycollateralizedKnotOwnerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycollateralizedKnotOwnersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CollateralizedKnotOwner_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CollateralizedKnotOwner_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryknotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryknotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<KNOT_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<KNOT_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysavETHIndexArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysavETHIndexesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<savETHIndex_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<savETHIndex_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysavETHIndexGlobalArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysavETHIndexGlobalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<savETHIndexGlobal_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<savETHIndexGlobal_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybrandCentralGlobalArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybrandCentralGlobalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BrandCentralGlobal_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BrandCentralGlobal_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybrandNftArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybrandNftsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BrandNft_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BrandNft_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryhouseGoodieBagArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryhouseGoodieBagsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<HouseGoodieBag_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HouseGoodieBag_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerygoodieBagItemArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerygoodieBagItemsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GoodieBagItem_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GoodieBagItem_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystakeHouseArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystakeHousesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StakeHouse_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StakeHouse_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryefdepositContractEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryefdepositContractEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<EFDepositContractEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<EFDepositContractEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryefdepositArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryefdepositsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<EFDeposit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<EFDeposit_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystakehouseAccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystakehouseAccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StakehouseAccount_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StakehouseAccount_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydecryptionPieceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydecryptionPiecesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DecryptionPiece_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DecryptionPiece_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydecryptionRequestArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydecryptionRequestsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DecryptionRequest_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DecryptionRequest_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryguardianArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryguardiansArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Guardian_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Guardian_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type StakeHouse = {
  id: Scalars['ID'];
  index: Scalars['BigInt'];
  sETH: Scalars['Bytes'];
  sETHExchangeRate: Scalars['BigInt'];
  sETHExchangeRateFormatted: Scalars['BigDecimal'];
  sETHRedemptionRate: Scalars['BigInt'];
  sETHRedemptionRateFormatted: Scalars['BigDecimal'];
  sETHPayoffRate: Scalars['BigDecimal'];
  sETHPayoffRateFormatted: Scalars['BigDecimal'];
  totalAmountOfSlotSlashed: Scalars['BigInt'];
  numberOfKnots: Scalars['BigInt'];
  numberOfRageQuitKnots: Scalars['BigInt'];
  dETHMintedWithinHouse: Scalars['BigInt'];
  foundedBrandId: Scalars['BigInt'];
  sETHTicker: Scalars['String'];
};

export type StakeHouse_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  index?: InputMaybe<Scalars['BigInt']>;
  index_not?: InputMaybe<Scalars['BigInt']>;
  index_gt?: InputMaybe<Scalars['BigInt']>;
  index_lt?: InputMaybe<Scalars['BigInt']>;
  index_gte?: InputMaybe<Scalars['BigInt']>;
  index_lte?: InputMaybe<Scalars['BigInt']>;
  index_in?: InputMaybe<Array<Scalars['BigInt']>>;
  index_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sETH?: InputMaybe<Scalars['Bytes']>;
  sETH_not?: InputMaybe<Scalars['Bytes']>;
  sETH_gt?: InputMaybe<Scalars['Bytes']>;
  sETH_lt?: InputMaybe<Scalars['Bytes']>;
  sETH_gte?: InputMaybe<Scalars['Bytes']>;
  sETH_lte?: InputMaybe<Scalars['Bytes']>;
  sETH_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sETH_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sETH_contains?: InputMaybe<Scalars['Bytes']>;
  sETH_not_contains?: InputMaybe<Scalars['Bytes']>;
  sETHExchangeRate?: InputMaybe<Scalars['BigInt']>;
  sETHExchangeRate_not?: InputMaybe<Scalars['BigInt']>;
  sETHExchangeRate_gt?: InputMaybe<Scalars['BigInt']>;
  sETHExchangeRate_lt?: InputMaybe<Scalars['BigInt']>;
  sETHExchangeRate_gte?: InputMaybe<Scalars['BigInt']>;
  sETHExchangeRate_lte?: InputMaybe<Scalars['BigInt']>;
  sETHExchangeRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sETHExchangeRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sETHExchangeRateFormatted?: InputMaybe<Scalars['BigDecimal']>;
  sETHExchangeRateFormatted_not?: InputMaybe<Scalars['BigDecimal']>;
  sETHExchangeRateFormatted_gt?: InputMaybe<Scalars['BigDecimal']>;
  sETHExchangeRateFormatted_lt?: InputMaybe<Scalars['BigDecimal']>;
  sETHExchangeRateFormatted_gte?: InputMaybe<Scalars['BigDecimal']>;
  sETHExchangeRateFormatted_lte?: InputMaybe<Scalars['BigDecimal']>;
  sETHExchangeRateFormatted_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sETHExchangeRateFormatted_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sETHRedemptionRate?: InputMaybe<Scalars['BigInt']>;
  sETHRedemptionRate_not?: InputMaybe<Scalars['BigInt']>;
  sETHRedemptionRate_gt?: InputMaybe<Scalars['BigInt']>;
  sETHRedemptionRate_lt?: InputMaybe<Scalars['BigInt']>;
  sETHRedemptionRate_gte?: InputMaybe<Scalars['BigInt']>;
  sETHRedemptionRate_lte?: InputMaybe<Scalars['BigInt']>;
  sETHRedemptionRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sETHRedemptionRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sETHRedemptionRateFormatted?: InputMaybe<Scalars['BigDecimal']>;
  sETHRedemptionRateFormatted_not?: InputMaybe<Scalars['BigDecimal']>;
  sETHRedemptionRateFormatted_gt?: InputMaybe<Scalars['BigDecimal']>;
  sETHRedemptionRateFormatted_lt?: InputMaybe<Scalars['BigDecimal']>;
  sETHRedemptionRateFormatted_gte?: InputMaybe<Scalars['BigDecimal']>;
  sETHRedemptionRateFormatted_lte?: InputMaybe<Scalars['BigDecimal']>;
  sETHRedemptionRateFormatted_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sETHRedemptionRateFormatted_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sETHPayoffRate?: InputMaybe<Scalars['BigDecimal']>;
  sETHPayoffRate_not?: InputMaybe<Scalars['BigDecimal']>;
  sETHPayoffRate_gt?: InputMaybe<Scalars['BigDecimal']>;
  sETHPayoffRate_lt?: InputMaybe<Scalars['BigDecimal']>;
  sETHPayoffRate_gte?: InputMaybe<Scalars['BigDecimal']>;
  sETHPayoffRate_lte?: InputMaybe<Scalars['BigDecimal']>;
  sETHPayoffRate_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sETHPayoffRate_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sETHPayoffRateFormatted?: InputMaybe<Scalars['BigDecimal']>;
  sETHPayoffRateFormatted_not?: InputMaybe<Scalars['BigDecimal']>;
  sETHPayoffRateFormatted_gt?: InputMaybe<Scalars['BigDecimal']>;
  sETHPayoffRateFormatted_lt?: InputMaybe<Scalars['BigDecimal']>;
  sETHPayoffRateFormatted_gte?: InputMaybe<Scalars['BigDecimal']>;
  sETHPayoffRateFormatted_lte?: InputMaybe<Scalars['BigDecimal']>;
  sETHPayoffRateFormatted_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sETHPayoffRateFormatted_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalAmountOfSlotSlashed?: InputMaybe<Scalars['BigInt']>;
  totalAmountOfSlotSlashed_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountOfSlotSlashed_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountOfSlotSlashed_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountOfSlotSlashed_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountOfSlotSlashed_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountOfSlotSlashed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountOfSlotSlashed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfKnots?: InputMaybe<Scalars['BigInt']>;
  numberOfKnots_not?: InputMaybe<Scalars['BigInt']>;
  numberOfKnots_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfKnots_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfKnots_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfKnots_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfKnots_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfKnots_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfRageQuitKnots?: InputMaybe<Scalars['BigInt']>;
  numberOfRageQuitKnots_not?: InputMaybe<Scalars['BigInt']>;
  numberOfRageQuitKnots_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfRageQuitKnots_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfRageQuitKnots_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfRageQuitKnots_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfRageQuitKnots_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfRageQuitKnots_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dETHMintedWithinHouse?: InputMaybe<Scalars['BigInt']>;
  dETHMintedWithinHouse_not?: InputMaybe<Scalars['BigInt']>;
  dETHMintedWithinHouse_gt?: InputMaybe<Scalars['BigInt']>;
  dETHMintedWithinHouse_lt?: InputMaybe<Scalars['BigInt']>;
  dETHMintedWithinHouse_gte?: InputMaybe<Scalars['BigInt']>;
  dETHMintedWithinHouse_lte?: InputMaybe<Scalars['BigInt']>;
  dETHMintedWithinHouse_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dETHMintedWithinHouse_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  foundedBrandId?: InputMaybe<Scalars['BigInt']>;
  foundedBrandId_not?: InputMaybe<Scalars['BigInt']>;
  foundedBrandId_gt?: InputMaybe<Scalars['BigInt']>;
  foundedBrandId_lt?: InputMaybe<Scalars['BigInt']>;
  foundedBrandId_gte?: InputMaybe<Scalars['BigInt']>;
  foundedBrandId_lte?: InputMaybe<Scalars['BigInt']>;
  foundedBrandId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  foundedBrandId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sETHTicker?: InputMaybe<Scalars['String']>;
  sETHTicker_not?: InputMaybe<Scalars['String']>;
  sETHTicker_gt?: InputMaybe<Scalars['String']>;
  sETHTicker_lt?: InputMaybe<Scalars['String']>;
  sETHTicker_gte?: InputMaybe<Scalars['String']>;
  sETHTicker_lte?: InputMaybe<Scalars['String']>;
  sETHTicker_in?: InputMaybe<Array<Scalars['String']>>;
  sETHTicker_not_in?: InputMaybe<Array<Scalars['String']>>;
  sETHTicker_contains?: InputMaybe<Scalars['String']>;
  sETHTicker_contains_nocase?: InputMaybe<Scalars['String']>;
  sETHTicker_not_contains?: InputMaybe<Scalars['String']>;
  sETHTicker_not_contains_nocase?: InputMaybe<Scalars['String']>;
  sETHTicker_starts_with?: InputMaybe<Scalars['String']>;
  sETHTicker_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sETHTicker_not_starts_with?: InputMaybe<Scalars['String']>;
  sETHTicker_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sETHTicker_ends_with?: InputMaybe<Scalars['String']>;
  sETHTicker_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sETHTicker_not_ends_with?: InputMaybe<Scalars['String']>;
  sETHTicker_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<StakeHouse_filter>>>;
  or?: InputMaybe<Array<InputMaybe<StakeHouse_filter>>>;
};

export type StakeHouse_orderBy =
  | 'id'
  | 'index'
  | 'sETH'
  | 'sETHExchangeRate'
  | 'sETHExchangeRateFormatted'
  | 'sETHRedemptionRate'
  | 'sETHRedemptionRateFormatted'
  | 'sETHPayoffRate'
  | 'sETHPayoffRateFormatted'
  | 'totalAmountOfSlotSlashed'
  | 'numberOfKnots'
  | 'numberOfRageQuitKnots'
  | 'dETHMintedWithinHouse'
  | 'foundedBrandId'
  | 'sETHTicker';

export type StakehouseAccount = {
  id: Scalars['ID'];
  accountId: Scalars['BigInt'];
  lifecycleStatus: Scalars['BigInt'];
  depositor: Scalars['Bytes'];
  totalETHForSLOTInQueue: Scalars['BigInt'];
  totalETHForSLOTSentToDepositContract: Scalars['BigInt'];
  totalDETHMinted: Scalars['BigInt'];
  sETHMinted: Scalars['BigInt'];
  totalSLOT: Scalars['BigInt'];
  sETHCollateralizedAtMinting: Scalars['BigInt'];
  totalCollateralizedSLOTInVault: Scalars['BigInt'];
  totalDETHMintedFormatted: Scalars['BigDecimal'];
  sETHMintedFormatted: Scalars['BigDecimal'];
  totalSLOTFormatted: Scalars['BigDecimal'];
  sETHCollateralizedAtMintingFormatted: Scalars['BigDecimal'];
  totalCollateralizedSLOTInVaultFormatted: Scalars['BigDecimal'];
  mintFromBlockNumber?: Maybe<Scalars['BigInt']>;
  stakeHouse: Scalars['String'];
  stakeHouseMetadata?: Maybe<StakeHouse>;
  depositorCreatedHouse: Scalars['Boolean'];
  knotMetadata?: Maybe<KNOT>;
  initialsRegisteredBlockNumber: Scalars['BigInt'];
  registerValidatorBlockNumber: Scalars['BigInt'];
  tokensMintedBlockNumber: Scalars['BigInt'];
  blsPubKeyDeposits: Array<EFDeposit>;
  depositTxHash: Scalars['String'];
  totalETHTopUps: Scalars['BigInt'];
  numberOfDeposits: Scalars['BigInt'];
  lastDepositBlock: Scalars['BigInt'];
  lastDepositDepositCount: Scalars['BigInt'];
  blsSigningKeyCipherText: Scalars['String'];
};


export type StakehouseAccountblsPubKeyDepositsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<EFDeposit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<EFDeposit_filter>;
};

export type StakehouseAccount_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  accountId?: InputMaybe<Scalars['BigInt']>;
  accountId_not?: InputMaybe<Scalars['BigInt']>;
  accountId_gt?: InputMaybe<Scalars['BigInt']>;
  accountId_lt?: InputMaybe<Scalars['BigInt']>;
  accountId_gte?: InputMaybe<Scalars['BigInt']>;
  accountId_lte?: InputMaybe<Scalars['BigInt']>;
  accountId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  accountId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifecycleStatus?: InputMaybe<Scalars['BigInt']>;
  lifecycleStatus_not?: InputMaybe<Scalars['BigInt']>;
  lifecycleStatus_gt?: InputMaybe<Scalars['BigInt']>;
  lifecycleStatus_lt?: InputMaybe<Scalars['BigInt']>;
  lifecycleStatus_gte?: InputMaybe<Scalars['BigInt']>;
  lifecycleStatus_lte?: InputMaybe<Scalars['BigInt']>;
  lifecycleStatus_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lifecycleStatus_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  depositor?: InputMaybe<Scalars['Bytes']>;
  depositor_not?: InputMaybe<Scalars['Bytes']>;
  depositor_gt?: InputMaybe<Scalars['Bytes']>;
  depositor_lt?: InputMaybe<Scalars['Bytes']>;
  depositor_gte?: InputMaybe<Scalars['Bytes']>;
  depositor_lte?: InputMaybe<Scalars['Bytes']>;
  depositor_in?: InputMaybe<Array<Scalars['Bytes']>>;
  depositor_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  depositor_contains?: InputMaybe<Scalars['Bytes']>;
  depositor_not_contains?: InputMaybe<Scalars['Bytes']>;
  totalETHForSLOTInQueue?: InputMaybe<Scalars['BigInt']>;
  totalETHForSLOTInQueue_not?: InputMaybe<Scalars['BigInt']>;
  totalETHForSLOTInQueue_gt?: InputMaybe<Scalars['BigInt']>;
  totalETHForSLOTInQueue_lt?: InputMaybe<Scalars['BigInt']>;
  totalETHForSLOTInQueue_gte?: InputMaybe<Scalars['BigInt']>;
  totalETHForSLOTInQueue_lte?: InputMaybe<Scalars['BigInt']>;
  totalETHForSLOTInQueue_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalETHForSLOTInQueue_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalETHForSLOTSentToDepositContract?: InputMaybe<Scalars['BigInt']>;
  totalETHForSLOTSentToDepositContract_not?: InputMaybe<Scalars['BigInt']>;
  totalETHForSLOTSentToDepositContract_gt?: InputMaybe<Scalars['BigInt']>;
  totalETHForSLOTSentToDepositContract_lt?: InputMaybe<Scalars['BigInt']>;
  totalETHForSLOTSentToDepositContract_gte?: InputMaybe<Scalars['BigInt']>;
  totalETHForSLOTSentToDepositContract_lte?: InputMaybe<Scalars['BigInt']>;
  totalETHForSLOTSentToDepositContract_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalETHForSLOTSentToDepositContract_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDETHMinted?: InputMaybe<Scalars['BigInt']>;
  totalDETHMinted_not?: InputMaybe<Scalars['BigInt']>;
  totalDETHMinted_gt?: InputMaybe<Scalars['BigInt']>;
  totalDETHMinted_lt?: InputMaybe<Scalars['BigInt']>;
  totalDETHMinted_gte?: InputMaybe<Scalars['BigInt']>;
  totalDETHMinted_lte?: InputMaybe<Scalars['BigInt']>;
  totalDETHMinted_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDETHMinted_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sETHMinted?: InputMaybe<Scalars['BigInt']>;
  sETHMinted_not?: InputMaybe<Scalars['BigInt']>;
  sETHMinted_gt?: InputMaybe<Scalars['BigInt']>;
  sETHMinted_lt?: InputMaybe<Scalars['BigInt']>;
  sETHMinted_gte?: InputMaybe<Scalars['BigInt']>;
  sETHMinted_lte?: InputMaybe<Scalars['BigInt']>;
  sETHMinted_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sETHMinted_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSLOT?: InputMaybe<Scalars['BigInt']>;
  totalSLOT_not?: InputMaybe<Scalars['BigInt']>;
  totalSLOT_gt?: InputMaybe<Scalars['BigInt']>;
  totalSLOT_lt?: InputMaybe<Scalars['BigInt']>;
  totalSLOT_gte?: InputMaybe<Scalars['BigInt']>;
  totalSLOT_lte?: InputMaybe<Scalars['BigInt']>;
  totalSLOT_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSLOT_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sETHCollateralizedAtMinting?: InputMaybe<Scalars['BigInt']>;
  sETHCollateralizedAtMinting_not?: InputMaybe<Scalars['BigInt']>;
  sETHCollateralizedAtMinting_gt?: InputMaybe<Scalars['BigInt']>;
  sETHCollateralizedAtMinting_lt?: InputMaybe<Scalars['BigInt']>;
  sETHCollateralizedAtMinting_gte?: InputMaybe<Scalars['BigInt']>;
  sETHCollateralizedAtMinting_lte?: InputMaybe<Scalars['BigInt']>;
  sETHCollateralizedAtMinting_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sETHCollateralizedAtMinting_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCollateralizedSLOTInVault?: InputMaybe<Scalars['BigInt']>;
  totalCollateralizedSLOTInVault_not?: InputMaybe<Scalars['BigInt']>;
  totalCollateralizedSLOTInVault_gt?: InputMaybe<Scalars['BigInt']>;
  totalCollateralizedSLOTInVault_lt?: InputMaybe<Scalars['BigInt']>;
  totalCollateralizedSLOTInVault_gte?: InputMaybe<Scalars['BigInt']>;
  totalCollateralizedSLOTInVault_lte?: InputMaybe<Scalars['BigInt']>;
  totalCollateralizedSLOTInVault_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCollateralizedSLOTInVault_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDETHMintedFormatted?: InputMaybe<Scalars['BigDecimal']>;
  totalDETHMintedFormatted_not?: InputMaybe<Scalars['BigDecimal']>;
  totalDETHMintedFormatted_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalDETHMintedFormatted_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalDETHMintedFormatted_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalDETHMintedFormatted_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalDETHMintedFormatted_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalDETHMintedFormatted_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sETHMintedFormatted?: InputMaybe<Scalars['BigDecimal']>;
  sETHMintedFormatted_not?: InputMaybe<Scalars['BigDecimal']>;
  sETHMintedFormatted_gt?: InputMaybe<Scalars['BigDecimal']>;
  sETHMintedFormatted_lt?: InputMaybe<Scalars['BigDecimal']>;
  sETHMintedFormatted_gte?: InputMaybe<Scalars['BigDecimal']>;
  sETHMintedFormatted_lte?: InputMaybe<Scalars['BigDecimal']>;
  sETHMintedFormatted_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sETHMintedFormatted_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalSLOTFormatted?: InputMaybe<Scalars['BigDecimal']>;
  totalSLOTFormatted_not?: InputMaybe<Scalars['BigDecimal']>;
  totalSLOTFormatted_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalSLOTFormatted_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalSLOTFormatted_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalSLOTFormatted_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalSLOTFormatted_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalSLOTFormatted_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sETHCollateralizedAtMintingFormatted?: InputMaybe<Scalars['BigDecimal']>;
  sETHCollateralizedAtMintingFormatted_not?: InputMaybe<Scalars['BigDecimal']>;
  sETHCollateralizedAtMintingFormatted_gt?: InputMaybe<Scalars['BigDecimal']>;
  sETHCollateralizedAtMintingFormatted_lt?: InputMaybe<Scalars['BigDecimal']>;
  sETHCollateralizedAtMintingFormatted_gte?: InputMaybe<Scalars['BigDecimal']>;
  sETHCollateralizedAtMintingFormatted_lte?: InputMaybe<Scalars['BigDecimal']>;
  sETHCollateralizedAtMintingFormatted_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sETHCollateralizedAtMintingFormatted_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalCollateralizedSLOTInVaultFormatted?: InputMaybe<Scalars['BigDecimal']>;
  totalCollateralizedSLOTInVaultFormatted_not?: InputMaybe<Scalars['BigDecimal']>;
  totalCollateralizedSLOTInVaultFormatted_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalCollateralizedSLOTInVaultFormatted_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalCollateralizedSLOTInVaultFormatted_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalCollateralizedSLOTInVaultFormatted_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalCollateralizedSLOTInVaultFormatted_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalCollateralizedSLOTInVaultFormatted_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  mintFromBlockNumber?: InputMaybe<Scalars['BigInt']>;
  mintFromBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  mintFromBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  mintFromBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  mintFromBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  mintFromBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  mintFromBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  mintFromBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakeHouse?: InputMaybe<Scalars['String']>;
  stakeHouse_not?: InputMaybe<Scalars['String']>;
  stakeHouse_gt?: InputMaybe<Scalars['String']>;
  stakeHouse_lt?: InputMaybe<Scalars['String']>;
  stakeHouse_gte?: InputMaybe<Scalars['String']>;
  stakeHouse_lte?: InputMaybe<Scalars['String']>;
  stakeHouse_in?: InputMaybe<Array<Scalars['String']>>;
  stakeHouse_not_in?: InputMaybe<Array<Scalars['String']>>;
  stakeHouse_contains?: InputMaybe<Scalars['String']>;
  stakeHouse_contains_nocase?: InputMaybe<Scalars['String']>;
  stakeHouse_not_contains?: InputMaybe<Scalars['String']>;
  stakeHouse_not_contains_nocase?: InputMaybe<Scalars['String']>;
  stakeHouse_starts_with?: InputMaybe<Scalars['String']>;
  stakeHouse_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stakeHouse_not_starts_with?: InputMaybe<Scalars['String']>;
  stakeHouse_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stakeHouse_ends_with?: InputMaybe<Scalars['String']>;
  stakeHouse_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stakeHouse_not_ends_with?: InputMaybe<Scalars['String']>;
  stakeHouse_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stakeHouseMetadata?: InputMaybe<Scalars['String']>;
  stakeHouseMetadata_not?: InputMaybe<Scalars['String']>;
  stakeHouseMetadata_gt?: InputMaybe<Scalars['String']>;
  stakeHouseMetadata_lt?: InputMaybe<Scalars['String']>;
  stakeHouseMetadata_gte?: InputMaybe<Scalars['String']>;
  stakeHouseMetadata_lte?: InputMaybe<Scalars['String']>;
  stakeHouseMetadata_in?: InputMaybe<Array<Scalars['String']>>;
  stakeHouseMetadata_not_in?: InputMaybe<Array<Scalars['String']>>;
  stakeHouseMetadata_contains?: InputMaybe<Scalars['String']>;
  stakeHouseMetadata_contains_nocase?: InputMaybe<Scalars['String']>;
  stakeHouseMetadata_not_contains?: InputMaybe<Scalars['String']>;
  stakeHouseMetadata_not_contains_nocase?: InputMaybe<Scalars['String']>;
  stakeHouseMetadata_starts_with?: InputMaybe<Scalars['String']>;
  stakeHouseMetadata_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stakeHouseMetadata_not_starts_with?: InputMaybe<Scalars['String']>;
  stakeHouseMetadata_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stakeHouseMetadata_ends_with?: InputMaybe<Scalars['String']>;
  stakeHouseMetadata_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stakeHouseMetadata_not_ends_with?: InputMaybe<Scalars['String']>;
  stakeHouseMetadata_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stakeHouseMetadata_?: InputMaybe<StakeHouse_filter>;
  depositorCreatedHouse?: InputMaybe<Scalars['Boolean']>;
  depositorCreatedHouse_not?: InputMaybe<Scalars['Boolean']>;
  depositorCreatedHouse_in?: InputMaybe<Array<Scalars['Boolean']>>;
  depositorCreatedHouse_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  knotMetadata?: InputMaybe<Scalars['String']>;
  knotMetadata_not?: InputMaybe<Scalars['String']>;
  knotMetadata_gt?: InputMaybe<Scalars['String']>;
  knotMetadata_lt?: InputMaybe<Scalars['String']>;
  knotMetadata_gte?: InputMaybe<Scalars['String']>;
  knotMetadata_lte?: InputMaybe<Scalars['String']>;
  knotMetadata_in?: InputMaybe<Array<Scalars['String']>>;
  knotMetadata_not_in?: InputMaybe<Array<Scalars['String']>>;
  knotMetadata_contains?: InputMaybe<Scalars['String']>;
  knotMetadata_contains_nocase?: InputMaybe<Scalars['String']>;
  knotMetadata_not_contains?: InputMaybe<Scalars['String']>;
  knotMetadata_not_contains_nocase?: InputMaybe<Scalars['String']>;
  knotMetadata_starts_with?: InputMaybe<Scalars['String']>;
  knotMetadata_starts_with_nocase?: InputMaybe<Scalars['String']>;
  knotMetadata_not_starts_with?: InputMaybe<Scalars['String']>;
  knotMetadata_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  knotMetadata_ends_with?: InputMaybe<Scalars['String']>;
  knotMetadata_ends_with_nocase?: InputMaybe<Scalars['String']>;
  knotMetadata_not_ends_with?: InputMaybe<Scalars['String']>;
  knotMetadata_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  knotMetadata_?: InputMaybe<KNOT_filter>;
  initialsRegisteredBlockNumber?: InputMaybe<Scalars['BigInt']>;
  initialsRegisteredBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  initialsRegisteredBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  initialsRegisteredBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  initialsRegisteredBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  initialsRegisteredBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  initialsRegisteredBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  initialsRegisteredBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  registerValidatorBlockNumber?: InputMaybe<Scalars['BigInt']>;
  registerValidatorBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  registerValidatorBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  registerValidatorBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  registerValidatorBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  registerValidatorBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  registerValidatorBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  registerValidatorBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokensMintedBlockNumber?: InputMaybe<Scalars['BigInt']>;
  tokensMintedBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  tokensMintedBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  tokensMintedBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  tokensMintedBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  tokensMintedBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  tokensMintedBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokensMintedBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blsPubKeyDeposits?: InputMaybe<Array<Scalars['String']>>;
  blsPubKeyDeposits_not?: InputMaybe<Array<Scalars['String']>>;
  blsPubKeyDeposits_contains?: InputMaybe<Array<Scalars['String']>>;
  blsPubKeyDeposits_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  blsPubKeyDeposits_not_contains?: InputMaybe<Array<Scalars['String']>>;
  blsPubKeyDeposits_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  blsPubKeyDeposits_?: InputMaybe<EFDeposit_filter>;
  depositTxHash?: InputMaybe<Scalars['String']>;
  depositTxHash_not?: InputMaybe<Scalars['String']>;
  depositTxHash_gt?: InputMaybe<Scalars['String']>;
  depositTxHash_lt?: InputMaybe<Scalars['String']>;
  depositTxHash_gte?: InputMaybe<Scalars['String']>;
  depositTxHash_lte?: InputMaybe<Scalars['String']>;
  depositTxHash_in?: InputMaybe<Array<Scalars['String']>>;
  depositTxHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  depositTxHash_contains?: InputMaybe<Scalars['String']>;
  depositTxHash_contains_nocase?: InputMaybe<Scalars['String']>;
  depositTxHash_not_contains?: InputMaybe<Scalars['String']>;
  depositTxHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  depositTxHash_starts_with?: InputMaybe<Scalars['String']>;
  depositTxHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  depositTxHash_not_starts_with?: InputMaybe<Scalars['String']>;
  depositTxHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  depositTxHash_ends_with?: InputMaybe<Scalars['String']>;
  depositTxHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  depositTxHash_not_ends_with?: InputMaybe<Scalars['String']>;
  depositTxHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  totalETHTopUps?: InputMaybe<Scalars['BigInt']>;
  totalETHTopUps_not?: InputMaybe<Scalars['BigInt']>;
  totalETHTopUps_gt?: InputMaybe<Scalars['BigInt']>;
  totalETHTopUps_lt?: InputMaybe<Scalars['BigInt']>;
  totalETHTopUps_gte?: InputMaybe<Scalars['BigInt']>;
  totalETHTopUps_lte?: InputMaybe<Scalars['BigInt']>;
  totalETHTopUps_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalETHTopUps_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfDeposits?: InputMaybe<Scalars['BigInt']>;
  numberOfDeposits_not?: InputMaybe<Scalars['BigInt']>;
  numberOfDeposits_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfDeposits_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfDeposits_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfDeposits_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfDeposits_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfDeposits_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastDepositBlock?: InputMaybe<Scalars['BigInt']>;
  lastDepositBlock_not?: InputMaybe<Scalars['BigInt']>;
  lastDepositBlock_gt?: InputMaybe<Scalars['BigInt']>;
  lastDepositBlock_lt?: InputMaybe<Scalars['BigInt']>;
  lastDepositBlock_gte?: InputMaybe<Scalars['BigInt']>;
  lastDepositBlock_lte?: InputMaybe<Scalars['BigInt']>;
  lastDepositBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastDepositBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastDepositDepositCount?: InputMaybe<Scalars['BigInt']>;
  lastDepositDepositCount_not?: InputMaybe<Scalars['BigInt']>;
  lastDepositDepositCount_gt?: InputMaybe<Scalars['BigInt']>;
  lastDepositDepositCount_lt?: InputMaybe<Scalars['BigInt']>;
  lastDepositDepositCount_gte?: InputMaybe<Scalars['BigInt']>;
  lastDepositDepositCount_lte?: InputMaybe<Scalars['BigInt']>;
  lastDepositDepositCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastDepositDepositCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blsSigningKeyCipherText?: InputMaybe<Scalars['String']>;
  blsSigningKeyCipherText_not?: InputMaybe<Scalars['String']>;
  blsSigningKeyCipherText_gt?: InputMaybe<Scalars['String']>;
  blsSigningKeyCipherText_lt?: InputMaybe<Scalars['String']>;
  blsSigningKeyCipherText_gte?: InputMaybe<Scalars['String']>;
  blsSigningKeyCipherText_lte?: InputMaybe<Scalars['String']>;
  blsSigningKeyCipherText_in?: InputMaybe<Array<Scalars['String']>>;
  blsSigningKeyCipherText_not_in?: InputMaybe<Array<Scalars['String']>>;
  blsSigningKeyCipherText_contains?: InputMaybe<Scalars['String']>;
  blsSigningKeyCipherText_contains_nocase?: InputMaybe<Scalars['String']>;
  blsSigningKeyCipherText_not_contains?: InputMaybe<Scalars['String']>;
  blsSigningKeyCipherText_not_contains_nocase?: InputMaybe<Scalars['String']>;
  blsSigningKeyCipherText_starts_with?: InputMaybe<Scalars['String']>;
  blsSigningKeyCipherText_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blsSigningKeyCipherText_not_starts_with?: InputMaybe<Scalars['String']>;
  blsSigningKeyCipherText_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blsSigningKeyCipherText_ends_with?: InputMaybe<Scalars['String']>;
  blsSigningKeyCipherText_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blsSigningKeyCipherText_not_ends_with?: InputMaybe<Scalars['String']>;
  blsSigningKeyCipherText_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<StakehouseAccount_filter>>>;
  or?: InputMaybe<Array<InputMaybe<StakehouseAccount_filter>>>;
};

export type StakehouseAccount_orderBy =
  | 'id'
  | 'accountId'
  | 'lifecycleStatus'
  | 'depositor'
  | 'totalETHForSLOTInQueue'
  | 'totalETHForSLOTSentToDepositContract'
  | 'totalDETHMinted'
  | 'sETHMinted'
  | 'totalSLOT'
  | 'sETHCollateralizedAtMinting'
  | 'totalCollateralizedSLOTInVault'
  | 'totalDETHMintedFormatted'
  | 'sETHMintedFormatted'
  | 'totalSLOTFormatted'
  | 'sETHCollateralizedAtMintingFormatted'
  | 'totalCollateralizedSLOTInVaultFormatted'
  | 'mintFromBlockNumber'
  | 'stakeHouse'
  | 'stakeHouseMetadata'
  | 'stakeHouseMetadata__id'
  | 'stakeHouseMetadata__index'
  | 'stakeHouseMetadata__sETH'
  | 'stakeHouseMetadata__sETHExchangeRate'
  | 'stakeHouseMetadata__sETHExchangeRateFormatted'
  | 'stakeHouseMetadata__sETHRedemptionRate'
  | 'stakeHouseMetadata__sETHRedemptionRateFormatted'
  | 'stakeHouseMetadata__sETHPayoffRate'
  | 'stakeHouseMetadata__sETHPayoffRateFormatted'
  | 'stakeHouseMetadata__totalAmountOfSlotSlashed'
  | 'stakeHouseMetadata__numberOfKnots'
  | 'stakeHouseMetadata__numberOfRageQuitKnots'
  | 'stakeHouseMetadata__dETHMintedWithinHouse'
  | 'stakeHouseMetadata__foundedBrandId'
  | 'stakeHouseMetadata__sETHTicker'
  | 'depositorCreatedHouse'
  | 'knotMetadata'
  | 'knotMetadata__id'
  | 'knotMetadata__active'
  | 'knotMetadata__addedSinceBlockNumber'
  | 'knotMetadata__rageQuit'
  | 'knotMetadata__rageQuitBlockNumber'
  | 'knotMetadata__kicked'
  | 'knotMetadata__kickBlockNumber'
  | 'knotMetadata__coordinates'
  | 'knotMetadata__knotIndex'
  | 'knotMetadata__houseIndex'
  | 'knotMetadata__stakeHouse'
  | 'knotMetadata__depositor'
  | 'knotMetadata__isPartOfIndex'
  | 'knotMetadata__totalDETHRewardsReceived'
  | 'knotMetadata__dETHPerBlock'
  | 'knotMetadata__dETHPerYear'
  | 'knotMetadata__reportedYield'
  | 'knotMetadata__savETHIndexId'
  | 'knotMetadata__isolatedDETH'
  | 'knotMetadata__historicallySlashed'
  | 'knotMetadata__currentSlashedAmount'
  | 'knotMetadata__specialExitFee'
  | 'knotMetadata__associatedBrandTokenId'
  | 'initialsRegisteredBlockNumber'
  | 'registerValidatorBlockNumber'
  | 'tokensMintedBlockNumber'
  | 'blsPubKeyDeposits'
  | 'depositTxHash'
  | 'totalETHTopUps'
  | 'numberOfDeposits'
  | 'lastDepositBlock'
  | 'lastDepositDepositCount'
  | 'blsSigningKeyCipherText';

export type Subscription = {
  universeGlobalValue?: Maybe<UniverseGlobalValue>;
  universeGlobalValues: Array<UniverseGlobalValue>;
  uniqueDepositor?: Maybe<UniqueDepositor>;
  uniqueDepositors: Array<UniqueDepositor>;
  uniqueRegisteredUser?: Maybe<UniqueRegisteredUser>;
  uniqueRegisteredUsers: Array<UniqueRegisteredUser>;
  event?: Maybe<Event>;
  events: Array<Event>;
  collateralizedKnotOwner?: Maybe<CollateralizedKnotOwner>;
  collateralizedKnotOwners: Array<CollateralizedKnotOwner>;
  knot?: Maybe<KNOT>;
  knots: Array<KNOT>;
  savETHIndex?: Maybe<savETHIndex>;
  savETHIndexes: Array<savETHIndex>;
  savETHIndexGlobal?: Maybe<savETHIndexGlobal>;
  savETHIndexGlobals: Array<savETHIndexGlobal>;
  brandCentralGlobal?: Maybe<BrandCentralGlobal>;
  brandCentralGlobals: Array<BrandCentralGlobal>;
  brandNft?: Maybe<BrandNft>;
  brandNfts: Array<BrandNft>;
  houseGoodieBag?: Maybe<HouseGoodieBag>;
  houseGoodieBags: Array<HouseGoodieBag>;
  goodieBagItem?: Maybe<GoodieBagItem>;
  goodieBagItems: Array<GoodieBagItem>;
  stakeHouse?: Maybe<StakeHouse>;
  stakeHouses: Array<StakeHouse>;
  efdepositContractEvent?: Maybe<EFDepositContractEvent>;
  efdepositContractEvents: Array<EFDepositContractEvent>;
  efdeposit?: Maybe<EFDeposit>;
  efdeposits: Array<EFDeposit>;
  stakehouseAccount?: Maybe<StakehouseAccount>;
  stakehouseAccounts: Array<StakehouseAccount>;
  decryptionPiece?: Maybe<DecryptionPiece>;
  decryptionPieces: Array<DecryptionPiece>;
  decryptionRequest?: Maybe<DecryptionRequest>;
  decryptionRequests: Array<DecryptionRequest>;
  guardian?: Maybe<Guardian>;
  guardians: Array<Guardian>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionuniverseGlobalValueArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuniverseGlobalValuesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UniverseGlobalValue_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UniverseGlobalValue_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuniqueDepositorArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuniqueDepositorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UniqueDepositor_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UniqueDepositor_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuniqueRegisteredUserArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuniqueRegisteredUsersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UniqueRegisteredUser_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UniqueRegisteredUser_filter>;
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


export type SubscriptioncollateralizedKnotOwnerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncollateralizedKnotOwnersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CollateralizedKnotOwner_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CollateralizedKnotOwner_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionknotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionknotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<KNOT_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<KNOT_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsavETHIndexArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsavETHIndexesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<savETHIndex_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<savETHIndex_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsavETHIndexGlobalArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsavETHIndexGlobalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<savETHIndexGlobal_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<savETHIndexGlobal_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbrandCentralGlobalArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbrandCentralGlobalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BrandCentralGlobal_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BrandCentralGlobal_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbrandNftArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbrandNftsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BrandNft_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BrandNft_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionhouseGoodieBagArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionhouseGoodieBagsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<HouseGoodieBag_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HouseGoodieBag_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiongoodieBagItemArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiongoodieBagItemsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GoodieBagItem_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GoodieBagItem_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstakeHouseArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstakeHousesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StakeHouse_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StakeHouse_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionefdepositContractEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionefdepositContractEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<EFDepositContractEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<EFDepositContractEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionefdepositArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionefdepositsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<EFDeposit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<EFDeposit_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstakehouseAccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstakehouseAccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StakehouseAccount_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StakehouseAccount_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondecryptionPieceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondecryptionPiecesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DecryptionPiece_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DecryptionPiece_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondecryptionRequestArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondecryptionRequestsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DecryptionRequest_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DecryptionRequest_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionguardianArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionguardiansArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Guardian_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Guardian_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type UniqueDepositor = {
  id: Scalars['ID'];
};

export type UniqueDepositor_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UniqueDepositor_filter>>>;
  or?: InputMaybe<Array<InputMaybe<UniqueDepositor_filter>>>;
};

export type UniqueDepositor_orderBy =
  | 'id';

export type UniqueRegisteredUser = {
  id: Scalars['ID'];
};

export type UniqueRegisteredUser_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UniqueRegisteredUser_filter>>>;
  or?: InputMaybe<Array<InputMaybe<UniqueRegisteredUser_filter>>>;
};

export type UniqueRegisteredUser_orderBy =
  | 'id';

export type UniverseGlobalValue = {
  id: Scalars['ID'];
  StakeHouseUniverse: Scalars['Bytes'];
  AccessControls: Scalars['Bytes'];
  AccountManager: Scalars['Bytes'];
  TransactionRouter: Scalars['Bytes'];
  SlotRegistry: Scalars['Bytes'];
  savETHRegistry: Scalars['Bytes'];
  savETHTransactionRouter: Scalars['Bytes'];
  savETHBatchRouter: Scalars['Bytes'];
  dETH: Scalars['Bytes'];
  savETH: Scalars['Bytes'];
  DepositContract: Scalars['Bytes'];
  WithdrawalCredentials: Scalars['Bytes'];
  numberOfUniqueRegisteredUsers: Scalars['BigInt'];
  numberOfUniqueDepositors: Scalars['BigInt'];
  numberOfStakeHouses: Scalars['BigInt'];
  numberOfKnots: Scalars['BigInt'];
  numberOfRegisteredValidators: Scalars['BigInt'];
  numberOfRageQuitKnots: Scalars['BigInt'];
  PCV: Scalars['BigInt'];
  POA: Scalars['BigInt'];
  ETHSentToEFDepositContractViaStakehouseProtocol: Scalars['BigInt'];
  dETHMinted: Scalars['BigInt'];
  SLOTMinted: Scalars['BigInt'];
};

export type UniverseGlobalValue_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  StakeHouseUniverse?: InputMaybe<Scalars['Bytes']>;
  StakeHouseUniverse_not?: InputMaybe<Scalars['Bytes']>;
  StakeHouseUniverse_gt?: InputMaybe<Scalars['Bytes']>;
  StakeHouseUniverse_lt?: InputMaybe<Scalars['Bytes']>;
  StakeHouseUniverse_gte?: InputMaybe<Scalars['Bytes']>;
  StakeHouseUniverse_lte?: InputMaybe<Scalars['Bytes']>;
  StakeHouseUniverse_in?: InputMaybe<Array<Scalars['Bytes']>>;
  StakeHouseUniverse_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  StakeHouseUniverse_contains?: InputMaybe<Scalars['Bytes']>;
  StakeHouseUniverse_not_contains?: InputMaybe<Scalars['Bytes']>;
  AccessControls?: InputMaybe<Scalars['Bytes']>;
  AccessControls_not?: InputMaybe<Scalars['Bytes']>;
  AccessControls_gt?: InputMaybe<Scalars['Bytes']>;
  AccessControls_lt?: InputMaybe<Scalars['Bytes']>;
  AccessControls_gte?: InputMaybe<Scalars['Bytes']>;
  AccessControls_lte?: InputMaybe<Scalars['Bytes']>;
  AccessControls_in?: InputMaybe<Array<Scalars['Bytes']>>;
  AccessControls_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  AccessControls_contains?: InputMaybe<Scalars['Bytes']>;
  AccessControls_not_contains?: InputMaybe<Scalars['Bytes']>;
  AccountManager?: InputMaybe<Scalars['Bytes']>;
  AccountManager_not?: InputMaybe<Scalars['Bytes']>;
  AccountManager_gt?: InputMaybe<Scalars['Bytes']>;
  AccountManager_lt?: InputMaybe<Scalars['Bytes']>;
  AccountManager_gte?: InputMaybe<Scalars['Bytes']>;
  AccountManager_lte?: InputMaybe<Scalars['Bytes']>;
  AccountManager_in?: InputMaybe<Array<Scalars['Bytes']>>;
  AccountManager_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  AccountManager_contains?: InputMaybe<Scalars['Bytes']>;
  AccountManager_not_contains?: InputMaybe<Scalars['Bytes']>;
  TransactionRouter?: InputMaybe<Scalars['Bytes']>;
  TransactionRouter_not?: InputMaybe<Scalars['Bytes']>;
  TransactionRouter_gt?: InputMaybe<Scalars['Bytes']>;
  TransactionRouter_lt?: InputMaybe<Scalars['Bytes']>;
  TransactionRouter_gte?: InputMaybe<Scalars['Bytes']>;
  TransactionRouter_lte?: InputMaybe<Scalars['Bytes']>;
  TransactionRouter_in?: InputMaybe<Array<Scalars['Bytes']>>;
  TransactionRouter_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  TransactionRouter_contains?: InputMaybe<Scalars['Bytes']>;
  TransactionRouter_not_contains?: InputMaybe<Scalars['Bytes']>;
  SlotRegistry?: InputMaybe<Scalars['Bytes']>;
  SlotRegistry_not?: InputMaybe<Scalars['Bytes']>;
  SlotRegistry_gt?: InputMaybe<Scalars['Bytes']>;
  SlotRegistry_lt?: InputMaybe<Scalars['Bytes']>;
  SlotRegistry_gte?: InputMaybe<Scalars['Bytes']>;
  SlotRegistry_lte?: InputMaybe<Scalars['Bytes']>;
  SlotRegistry_in?: InputMaybe<Array<Scalars['Bytes']>>;
  SlotRegistry_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  SlotRegistry_contains?: InputMaybe<Scalars['Bytes']>;
  SlotRegistry_not_contains?: InputMaybe<Scalars['Bytes']>;
  savETHRegistry?: InputMaybe<Scalars['Bytes']>;
  savETHRegistry_not?: InputMaybe<Scalars['Bytes']>;
  savETHRegistry_gt?: InputMaybe<Scalars['Bytes']>;
  savETHRegistry_lt?: InputMaybe<Scalars['Bytes']>;
  savETHRegistry_gte?: InputMaybe<Scalars['Bytes']>;
  savETHRegistry_lte?: InputMaybe<Scalars['Bytes']>;
  savETHRegistry_in?: InputMaybe<Array<Scalars['Bytes']>>;
  savETHRegistry_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  savETHRegistry_contains?: InputMaybe<Scalars['Bytes']>;
  savETHRegistry_not_contains?: InputMaybe<Scalars['Bytes']>;
  savETHTransactionRouter?: InputMaybe<Scalars['Bytes']>;
  savETHTransactionRouter_not?: InputMaybe<Scalars['Bytes']>;
  savETHTransactionRouter_gt?: InputMaybe<Scalars['Bytes']>;
  savETHTransactionRouter_lt?: InputMaybe<Scalars['Bytes']>;
  savETHTransactionRouter_gte?: InputMaybe<Scalars['Bytes']>;
  savETHTransactionRouter_lte?: InputMaybe<Scalars['Bytes']>;
  savETHTransactionRouter_in?: InputMaybe<Array<Scalars['Bytes']>>;
  savETHTransactionRouter_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  savETHTransactionRouter_contains?: InputMaybe<Scalars['Bytes']>;
  savETHTransactionRouter_not_contains?: InputMaybe<Scalars['Bytes']>;
  savETHBatchRouter?: InputMaybe<Scalars['Bytes']>;
  savETHBatchRouter_not?: InputMaybe<Scalars['Bytes']>;
  savETHBatchRouter_gt?: InputMaybe<Scalars['Bytes']>;
  savETHBatchRouter_lt?: InputMaybe<Scalars['Bytes']>;
  savETHBatchRouter_gte?: InputMaybe<Scalars['Bytes']>;
  savETHBatchRouter_lte?: InputMaybe<Scalars['Bytes']>;
  savETHBatchRouter_in?: InputMaybe<Array<Scalars['Bytes']>>;
  savETHBatchRouter_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  savETHBatchRouter_contains?: InputMaybe<Scalars['Bytes']>;
  savETHBatchRouter_not_contains?: InputMaybe<Scalars['Bytes']>;
  dETH?: InputMaybe<Scalars['Bytes']>;
  dETH_not?: InputMaybe<Scalars['Bytes']>;
  dETH_gt?: InputMaybe<Scalars['Bytes']>;
  dETH_lt?: InputMaybe<Scalars['Bytes']>;
  dETH_gte?: InputMaybe<Scalars['Bytes']>;
  dETH_lte?: InputMaybe<Scalars['Bytes']>;
  dETH_in?: InputMaybe<Array<Scalars['Bytes']>>;
  dETH_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  dETH_contains?: InputMaybe<Scalars['Bytes']>;
  dETH_not_contains?: InputMaybe<Scalars['Bytes']>;
  savETH?: InputMaybe<Scalars['Bytes']>;
  savETH_not?: InputMaybe<Scalars['Bytes']>;
  savETH_gt?: InputMaybe<Scalars['Bytes']>;
  savETH_lt?: InputMaybe<Scalars['Bytes']>;
  savETH_gte?: InputMaybe<Scalars['Bytes']>;
  savETH_lte?: InputMaybe<Scalars['Bytes']>;
  savETH_in?: InputMaybe<Array<Scalars['Bytes']>>;
  savETH_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  savETH_contains?: InputMaybe<Scalars['Bytes']>;
  savETH_not_contains?: InputMaybe<Scalars['Bytes']>;
  DepositContract?: InputMaybe<Scalars['Bytes']>;
  DepositContract_not?: InputMaybe<Scalars['Bytes']>;
  DepositContract_gt?: InputMaybe<Scalars['Bytes']>;
  DepositContract_lt?: InputMaybe<Scalars['Bytes']>;
  DepositContract_gte?: InputMaybe<Scalars['Bytes']>;
  DepositContract_lte?: InputMaybe<Scalars['Bytes']>;
  DepositContract_in?: InputMaybe<Array<Scalars['Bytes']>>;
  DepositContract_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  DepositContract_contains?: InputMaybe<Scalars['Bytes']>;
  DepositContract_not_contains?: InputMaybe<Scalars['Bytes']>;
  WithdrawalCredentials?: InputMaybe<Scalars['Bytes']>;
  WithdrawalCredentials_not?: InputMaybe<Scalars['Bytes']>;
  WithdrawalCredentials_gt?: InputMaybe<Scalars['Bytes']>;
  WithdrawalCredentials_lt?: InputMaybe<Scalars['Bytes']>;
  WithdrawalCredentials_gte?: InputMaybe<Scalars['Bytes']>;
  WithdrawalCredentials_lte?: InputMaybe<Scalars['Bytes']>;
  WithdrawalCredentials_in?: InputMaybe<Array<Scalars['Bytes']>>;
  WithdrawalCredentials_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  WithdrawalCredentials_contains?: InputMaybe<Scalars['Bytes']>;
  WithdrawalCredentials_not_contains?: InputMaybe<Scalars['Bytes']>;
  numberOfUniqueRegisteredUsers?: InputMaybe<Scalars['BigInt']>;
  numberOfUniqueRegisteredUsers_not?: InputMaybe<Scalars['BigInt']>;
  numberOfUniqueRegisteredUsers_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfUniqueRegisteredUsers_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfUniqueRegisteredUsers_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfUniqueRegisteredUsers_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfUniqueRegisteredUsers_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfUniqueRegisteredUsers_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfUniqueDepositors?: InputMaybe<Scalars['BigInt']>;
  numberOfUniqueDepositors_not?: InputMaybe<Scalars['BigInt']>;
  numberOfUniqueDepositors_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfUniqueDepositors_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfUniqueDepositors_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfUniqueDepositors_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfUniqueDepositors_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfUniqueDepositors_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfStakeHouses?: InputMaybe<Scalars['BigInt']>;
  numberOfStakeHouses_not?: InputMaybe<Scalars['BigInt']>;
  numberOfStakeHouses_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfStakeHouses_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfStakeHouses_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfStakeHouses_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfStakeHouses_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfStakeHouses_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfKnots?: InputMaybe<Scalars['BigInt']>;
  numberOfKnots_not?: InputMaybe<Scalars['BigInt']>;
  numberOfKnots_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfKnots_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfKnots_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfKnots_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfKnots_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfKnots_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfRegisteredValidators?: InputMaybe<Scalars['BigInt']>;
  numberOfRegisteredValidators_not?: InputMaybe<Scalars['BigInt']>;
  numberOfRegisteredValidators_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfRegisteredValidators_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfRegisteredValidators_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfRegisteredValidators_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfRegisteredValidators_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfRegisteredValidators_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfRageQuitKnots?: InputMaybe<Scalars['BigInt']>;
  numberOfRageQuitKnots_not?: InputMaybe<Scalars['BigInt']>;
  numberOfRageQuitKnots_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfRageQuitKnots_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfRageQuitKnots_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfRageQuitKnots_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfRageQuitKnots_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfRageQuitKnots_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  PCV?: InputMaybe<Scalars['BigInt']>;
  PCV_not?: InputMaybe<Scalars['BigInt']>;
  PCV_gt?: InputMaybe<Scalars['BigInt']>;
  PCV_lt?: InputMaybe<Scalars['BigInt']>;
  PCV_gte?: InputMaybe<Scalars['BigInt']>;
  PCV_lte?: InputMaybe<Scalars['BigInt']>;
  PCV_in?: InputMaybe<Array<Scalars['BigInt']>>;
  PCV_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  POA?: InputMaybe<Scalars['BigInt']>;
  POA_not?: InputMaybe<Scalars['BigInt']>;
  POA_gt?: InputMaybe<Scalars['BigInt']>;
  POA_lt?: InputMaybe<Scalars['BigInt']>;
  POA_gte?: InputMaybe<Scalars['BigInt']>;
  POA_lte?: InputMaybe<Scalars['BigInt']>;
  POA_in?: InputMaybe<Array<Scalars['BigInt']>>;
  POA_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ETHSentToEFDepositContractViaStakehouseProtocol?: InputMaybe<Scalars['BigInt']>;
  ETHSentToEFDepositContractViaStakehouseProtocol_not?: InputMaybe<Scalars['BigInt']>;
  ETHSentToEFDepositContractViaStakehouseProtocol_gt?: InputMaybe<Scalars['BigInt']>;
  ETHSentToEFDepositContractViaStakehouseProtocol_lt?: InputMaybe<Scalars['BigInt']>;
  ETHSentToEFDepositContractViaStakehouseProtocol_gte?: InputMaybe<Scalars['BigInt']>;
  ETHSentToEFDepositContractViaStakehouseProtocol_lte?: InputMaybe<Scalars['BigInt']>;
  ETHSentToEFDepositContractViaStakehouseProtocol_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ETHSentToEFDepositContractViaStakehouseProtocol_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dETHMinted?: InputMaybe<Scalars['BigInt']>;
  dETHMinted_not?: InputMaybe<Scalars['BigInt']>;
  dETHMinted_gt?: InputMaybe<Scalars['BigInt']>;
  dETHMinted_lt?: InputMaybe<Scalars['BigInt']>;
  dETHMinted_gte?: InputMaybe<Scalars['BigInt']>;
  dETHMinted_lte?: InputMaybe<Scalars['BigInt']>;
  dETHMinted_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dETHMinted_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  SLOTMinted?: InputMaybe<Scalars['BigInt']>;
  SLOTMinted_not?: InputMaybe<Scalars['BigInt']>;
  SLOTMinted_gt?: InputMaybe<Scalars['BigInt']>;
  SLOTMinted_lt?: InputMaybe<Scalars['BigInt']>;
  SLOTMinted_gte?: InputMaybe<Scalars['BigInt']>;
  SLOTMinted_lte?: InputMaybe<Scalars['BigInt']>;
  SLOTMinted_in?: InputMaybe<Array<Scalars['BigInt']>>;
  SLOTMinted_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UniverseGlobalValue_filter>>>;
  or?: InputMaybe<Array<InputMaybe<UniverseGlobalValue_filter>>>;
};

export type UniverseGlobalValue_orderBy =
  | 'id'
  | 'StakeHouseUniverse'
  | 'AccessControls'
  | 'AccountManager'
  | 'TransactionRouter'
  | 'SlotRegistry'
  | 'savETHRegistry'
  | 'savETHTransactionRouter'
  | 'savETHBatchRouter'
  | 'dETH'
  | 'savETH'
  | 'DepositContract'
  | 'WithdrawalCredentials'
  | 'numberOfUniqueRegisteredUsers'
  | 'numberOfUniqueDepositors'
  | 'numberOfStakeHouses'
  | 'numberOfKnots'
  | 'numberOfRegisteredValidators'
  | 'numberOfRageQuitKnots'
  | 'PCV'
  | 'POA'
  | 'ETHSentToEFDepositContractViaStakehouseProtocol'
  | 'dETHMinted'
  | 'SLOTMinted';

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

export type savETHIndex = {
  id: Scalars['ID'];
  indexId: Scalars['BigInt'];
  indexOwner: Scalars['Bytes'];
  label: Scalars['String'];
  numberOfKnots: Scalars['BigInt'];
  dETHTotal: Scalars['BigInt'];
  dETHTotalRewards: Scalars['BigInt'];
  savETHTotal: Scalars['BigInt'];
  dETHPerBlock: Scalars['BigDecimal'];
  dETHPerYear: Scalars['BigDecimal'];
  reportedYield: Scalars['BigDecimal'];
  isolationExchangeRate: Scalars['BigDecimal'];
};

export type savETHIndexGlobal = {
  id: Scalars['ID'];
  numberOfKnotsInIndexes: Scalars['BigInt'];
  numberOfIndexes: Scalars['BigInt'];
  dETHPerBlock: Scalars['BigDecimal'];
  dETHPerYear: Scalars['BigDecimal'];
  reportedYield: Scalars['BigDecimal'];
};

export type savETHIndexGlobal_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  numberOfKnotsInIndexes?: InputMaybe<Scalars['BigInt']>;
  numberOfKnotsInIndexes_not?: InputMaybe<Scalars['BigInt']>;
  numberOfKnotsInIndexes_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfKnotsInIndexes_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfKnotsInIndexes_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfKnotsInIndexes_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfKnotsInIndexes_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfKnotsInIndexes_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfIndexes?: InputMaybe<Scalars['BigInt']>;
  numberOfIndexes_not?: InputMaybe<Scalars['BigInt']>;
  numberOfIndexes_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfIndexes_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfIndexes_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfIndexes_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfIndexes_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfIndexes_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dETHPerBlock?: InputMaybe<Scalars['BigDecimal']>;
  dETHPerBlock_not?: InputMaybe<Scalars['BigDecimal']>;
  dETHPerBlock_gt?: InputMaybe<Scalars['BigDecimal']>;
  dETHPerBlock_lt?: InputMaybe<Scalars['BigDecimal']>;
  dETHPerBlock_gte?: InputMaybe<Scalars['BigDecimal']>;
  dETHPerBlock_lte?: InputMaybe<Scalars['BigDecimal']>;
  dETHPerBlock_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dETHPerBlock_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dETHPerYear?: InputMaybe<Scalars['BigDecimal']>;
  dETHPerYear_not?: InputMaybe<Scalars['BigDecimal']>;
  dETHPerYear_gt?: InputMaybe<Scalars['BigDecimal']>;
  dETHPerYear_lt?: InputMaybe<Scalars['BigDecimal']>;
  dETHPerYear_gte?: InputMaybe<Scalars['BigDecimal']>;
  dETHPerYear_lte?: InputMaybe<Scalars['BigDecimal']>;
  dETHPerYear_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dETHPerYear_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reportedYield?: InputMaybe<Scalars['BigDecimal']>;
  reportedYield_not?: InputMaybe<Scalars['BigDecimal']>;
  reportedYield_gt?: InputMaybe<Scalars['BigDecimal']>;
  reportedYield_lt?: InputMaybe<Scalars['BigDecimal']>;
  reportedYield_gte?: InputMaybe<Scalars['BigDecimal']>;
  reportedYield_lte?: InputMaybe<Scalars['BigDecimal']>;
  reportedYield_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reportedYield_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<savETHIndexGlobal_filter>>>;
  or?: InputMaybe<Array<InputMaybe<savETHIndexGlobal_filter>>>;
};

export type savETHIndexGlobal_orderBy =
  | 'id'
  | 'numberOfKnotsInIndexes'
  | 'numberOfIndexes'
  | 'dETHPerBlock'
  | 'dETHPerYear'
  | 'reportedYield';

export type savETHIndex_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  indexId?: InputMaybe<Scalars['BigInt']>;
  indexId_not?: InputMaybe<Scalars['BigInt']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']>;
  indexId_lt?: InputMaybe<Scalars['BigInt']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexOwner?: InputMaybe<Scalars['Bytes']>;
  indexOwner_not?: InputMaybe<Scalars['Bytes']>;
  indexOwner_gt?: InputMaybe<Scalars['Bytes']>;
  indexOwner_lt?: InputMaybe<Scalars['Bytes']>;
  indexOwner_gte?: InputMaybe<Scalars['Bytes']>;
  indexOwner_lte?: InputMaybe<Scalars['Bytes']>;
  indexOwner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  indexOwner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  indexOwner_contains?: InputMaybe<Scalars['Bytes']>;
  indexOwner_not_contains?: InputMaybe<Scalars['Bytes']>;
  label?: InputMaybe<Scalars['String']>;
  label_not?: InputMaybe<Scalars['String']>;
  label_gt?: InputMaybe<Scalars['String']>;
  label_lt?: InputMaybe<Scalars['String']>;
  label_gte?: InputMaybe<Scalars['String']>;
  label_lte?: InputMaybe<Scalars['String']>;
  label_in?: InputMaybe<Array<Scalars['String']>>;
  label_not_in?: InputMaybe<Array<Scalars['String']>>;
  label_contains?: InputMaybe<Scalars['String']>;
  label_contains_nocase?: InputMaybe<Scalars['String']>;
  label_not_contains?: InputMaybe<Scalars['String']>;
  label_not_contains_nocase?: InputMaybe<Scalars['String']>;
  label_starts_with?: InputMaybe<Scalars['String']>;
  label_starts_with_nocase?: InputMaybe<Scalars['String']>;
  label_not_starts_with?: InputMaybe<Scalars['String']>;
  label_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  label_ends_with?: InputMaybe<Scalars['String']>;
  label_ends_with_nocase?: InputMaybe<Scalars['String']>;
  label_not_ends_with?: InputMaybe<Scalars['String']>;
  label_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  numberOfKnots?: InputMaybe<Scalars['BigInt']>;
  numberOfKnots_not?: InputMaybe<Scalars['BigInt']>;
  numberOfKnots_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfKnots_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfKnots_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfKnots_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfKnots_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfKnots_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dETHTotal?: InputMaybe<Scalars['BigInt']>;
  dETHTotal_not?: InputMaybe<Scalars['BigInt']>;
  dETHTotal_gt?: InputMaybe<Scalars['BigInt']>;
  dETHTotal_lt?: InputMaybe<Scalars['BigInt']>;
  dETHTotal_gte?: InputMaybe<Scalars['BigInt']>;
  dETHTotal_lte?: InputMaybe<Scalars['BigInt']>;
  dETHTotal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dETHTotal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dETHTotalRewards?: InputMaybe<Scalars['BigInt']>;
  dETHTotalRewards_not?: InputMaybe<Scalars['BigInt']>;
  dETHTotalRewards_gt?: InputMaybe<Scalars['BigInt']>;
  dETHTotalRewards_lt?: InputMaybe<Scalars['BigInt']>;
  dETHTotalRewards_gte?: InputMaybe<Scalars['BigInt']>;
  dETHTotalRewards_lte?: InputMaybe<Scalars['BigInt']>;
  dETHTotalRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dETHTotalRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  savETHTotal?: InputMaybe<Scalars['BigInt']>;
  savETHTotal_not?: InputMaybe<Scalars['BigInt']>;
  savETHTotal_gt?: InputMaybe<Scalars['BigInt']>;
  savETHTotal_lt?: InputMaybe<Scalars['BigInt']>;
  savETHTotal_gte?: InputMaybe<Scalars['BigInt']>;
  savETHTotal_lte?: InputMaybe<Scalars['BigInt']>;
  savETHTotal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  savETHTotal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dETHPerBlock?: InputMaybe<Scalars['BigDecimal']>;
  dETHPerBlock_not?: InputMaybe<Scalars['BigDecimal']>;
  dETHPerBlock_gt?: InputMaybe<Scalars['BigDecimal']>;
  dETHPerBlock_lt?: InputMaybe<Scalars['BigDecimal']>;
  dETHPerBlock_gte?: InputMaybe<Scalars['BigDecimal']>;
  dETHPerBlock_lte?: InputMaybe<Scalars['BigDecimal']>;
  dETHPerBlock_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dETHPerBlock_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dETHPerYear?: InputMaybe<Scalars['BigDecimal']>;
  dETHPerYear_not?: InputMaybe<Scalars['BigDecimal']>;
  dETHPerYear_gt?: InputMaybe<Scalars['BigDecimal']>;
  dETHPerYear_lt?: InputMaybe<Scalars['BigDecimal']>;
  dETHPerYear_gte?: InputMaybe<Scalars['BigDecimal']>;
  dETHPerYear_lte?: InputMaybe<Scalars['BigDecimal']>;
  dETHPerYear_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dETHPerYear_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reportedYield?: InputMaybe<Scalars['BigDecimal']>;
  reportedYield_not?: InputMaybe<Scalars['BigDecimal']>;
  reportedYield_gt?: InputMaybe<Scalars['BigDecimal']>;
  reportedYield_lt?: InputMaybe<Scalars['BigDecimal']>;
  reportedYield_gte?: InputMaybe<Scalars['BigDecimal']>;
  reportedYield_lte?: InputMaybe<Scalars['BigDecimal']>;
  reportedYield_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reportedYield_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  isolationExchangeRate?: InputMaybe<Scalars['BigDecimal']>;
  isolationExchangeRate_not?: InputMaybe<Scalars['BigDecimal']>;
  isolationExchangeRate_gt?: InputMaybe<Scalars['BigDecimal']>;
  isolationExchangeRate_lt?: InputMaybe<Scalars['BigDecimal']>;
  isolationExchangeRate_gte?: InputMaybe<Scalars['BigDecimal']>;
  isolationExchangeRate_lte?: InputMaybe<Scalars['BigDecimal']>;
  isolationExchangeRate_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  isolationExchangeRate_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<savETHIndex_filter>>>;
  or?: InputMaybe<Array<InputMaybe<savETHIndex_filter>>>;
};

export type savETHIndex_orderBy =
  | 'id'
  | 'indexId'
  | 'indexOwner'
  | 'label'
  | 'numberOfKnots'
  | 'dETHTotal'
  | 'dETHTotalRewards'
  | 'savETHTotal'
  | 'dETHPerBlock'
  | 'dETHPerYear'
  | 'reportedYield'
  | 'isolationExchangeRate';

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
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  BrandCentralGlobal: ResolverTypeWrapper<BrandCentralGlobal>;
  BrandCentralGlobal_filter: BrandCentralGlobal_filter;
  BrandCentralGlobal_orderBy: BrandCentralGlobal_orderBy;
  BrandNft: ResolverTypeWrapper<BrandNft>;
  BrandNft_filter: BrandNft_filter;
  BrandNft_orderBy: BrandNft_orderBy;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']>;
  CollateralizedKnotOwner: ResolverTypeWrapper<CollateralizedKnotOwner>;
  CollateralizedKnotOwner_filter: CollateralizedKnotOwner_filter;
  CollateralizedKnotOwner_orderBy: CollateralizedKnotOwner_orderBy;
  DecryptionPiece: ResolverTypeWrapper<DecryptionPiece>;
  DecryptionPiece_filter: DecryptionPiece_filter;
  DecryptionPiece_orderBy: DecryptionPiece_orderBy;
  DecryptionRequest: ResolverTypeWrapper<DecryptionRequest>;
  DecryptionRequest_filter: DecryptionRequest_filter;
  DecryptionRequest_orderBy: DecryptionRequest_orderBy;
  EFDeposit: ResolverTypeWrapper<EFDeposit>;
  EFDepositContractEvent: ResolverTypeWrapper<EFDepositContractEvent>;
  EFDepositContractEvent_filter: EFDepositContractEvent_filter;
  EFDepositContractEvent_orderBy: EFDepositContractEvent_orderBy;
  EFDeposit_filter: EFDeposit_filter;
  EFDeposit_orderBy: EFDeposit_orderBy;
  Event: ResolverTypeWrapper<Event>;
  Event_filter: Event_filter;
  Event_orderBy: Event_orderBy;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  GoodieBagItem: ResolverTypeWrapper<GoodieBagItem>;
  GoodieBagItem_filter: GoodieBagItem_filter;
  GoodieBagItem_orderBy: GoodieBagItem_orderBy;
  Guardian: ResolverTypeWrapper<Guardian>;
  Guardian_filter: Guardian_filter;
  Guardian_orderBy: Guardian_orderBy;
  HouseGoodieBag: ResolverTypeWrapper<HouseGoodieBag>;
  HouseGoodieBag_filter: HouseGoodieBag_filter;
  HouseGoodieBag_orderBy: HouseGoodieBag_orderBy;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  KNOT: ResolverTypeWrapper<KNOT>;
  KNOT_filter: KNOT_filter;
  KNOT_orderBy: KNOT_orderBy;
  OrderDirection: OrderDirection;
  Query: ResolverTypeWrapper<{}>;
  StakeHouse: ResolverTypeWrapper<StakeHouse>;
  StakeHouse_filter: StakeHouse_filter;
  StakeHouse_orderBy: StakeHouse_orderBy;
  StakehouseAccount: ResolverTypeWrapper<StakehouseAccount>;
  StakehouseAccount_filter: StakehouseAccount_filter;
  StakehouseAccount_orderBy: StakehouseAccount_orderBy;
  String: ResolverTypeWrapper<Scalars['String']>;
  Subscription: ResolverTypeWrapper<{}>;
  UniqueDepositor: ResolverTypeWrapper<UniqueDepositor>;
  UniqueDepositor_filter: UniqueDepositor_filter;
  UniqueDepositor_orderBy: UniqueDepositor_orderBy;
  UniqueRegisteredUser: ResolverTypeWrapper<UniqueRegisteredUser>;
  UniqueRegisteredUser_filter: UniqueRegisteredUser_filter;
  UniqueRegisteredUser_orderBy: UniqueRegisteredUser_orderBy;
  UniverseGlobalValue: ResolverTypeWrapper<UniverseGlobalValue>;
  UniverseGlobalValue_filter: UniverseGlobalValue_filter;
  UniverseGlobalValue_orderBy: UniverseGlobalValue_orderBy;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
  savETHIndex: ResolverTypeWrapper<savETHIndex>;
  savETHIndexGlobal: ResolverTypeWrapper<savETHIndexGlobal>;
  savETHIndexGlobal_filter: savETHIndexGlobal_filter;
  savETHIndexGlobal_orderBy: savETHIndexGlobal_orderBy;
  savETHIndex_filter: savETHIndex_filter;
  savETHIndex_orderBy: savETHIndex_orderBy;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  BigDecimal: Scalars['BigDecimal'];
  BigInt: Scalars['BigInt'];
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: Scalars['Boolean'];
  BrandCentralGlobal: BrandCentralGlobal;
  BrandCentralGlobal_filter: BrandCentralGlobal_filter;
  BrandNft: BrandNft;
  BrandNft_filter: BrandNft_filter;
  Bytes: Scalars['Bytes'];
  CollateralizedKnotOwner: CollateralizedKnotOwner;
  CollateralizedKnotOwner_filter: CollateralizedKnotOwner_filter;
  DecryptionPiece: DecryptionPiece;
  DecryptionPiece_filter: DecryptionPiece_filter;
  DecryptionRequest: DecryptionRequest;
  DecryptionRequest_filter: DecryptionRequest_filter;
  EFDeposit: EFDeposit;
  EFDepositContractEvent: EFDepositContractEvent;
  EFDepositContractEvent_filter: EFDepositContractEvent_filter;
  EFDeposit_filter: EFDeposit_filter;
  Event: Event;
  Event_filter: Event_filter;
  Float: Scalars['Float'];
  GoodieBagItem: GoodieBagItem;
  GoodieBagItem_filter: GoodieBagItem_filter;
  Guardian: Guardian;
  Guardian_filter: Guardian_filter;
  HouseGoodieBag: HouseGoodieBag;
  HouseGoodieBag_filter: HouseGoodieBag_filter;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  KNOT: KNOT;
  KNOT_filter: KNOT_filter;
  Query: {};
  StakeHouse: StakeHouse;
  StakeHouse_filter: StakeHouse_filter;
  StakehouseAccount: StakehouseAccount;
  StakehouseAccount_filter: StakehouseAccount_filter;
  String: Scalars['String'];
  Subscription: {};
  UniqueDepositor: UniqueDepositor;
  UniqueDepositor_filter: UniqueDepositor_filter;
  UniqueRegisteredUser: UniqueRegisteredUser;
  UniqueRegisteredUser_filter: UniqueRegisteredUser_filter;
  UniverseGlobalValue: UniverseGlobalValue;
  UniverseGlobalValue_filter: UniverseGlobalValue_filter;
  _Block_: _Block_;
  _Meta_: _Meta_;
  savETHIndex: savETHIndex;
  savETHIndexGlobal: savETHIndexGlobal;
  savETHIndexGlobal_filter: savETHIndexGlobal_filter;
  savETHIndex_filter: savETHIndex_filter;
}>;

export type entityDirectiveArgs = { };

export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type subgraphIdDirectiveArgs = {
  id: Scalars['String'];
};

export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type derivedFromDirectiveArgs = {
  field: Scalars['String'];
};

export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export type BrandCentralGlobalResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BrandCentralGlobal'] = ResolversParentTypes['BrandCentralGlobal']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  numberOfTickers?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  numberOfGoodieBags?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  numberOfGoodieItems?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  BrandCentral?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  BrandNFT?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  skLootFactory?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  skLoot?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  claimAuction?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BrandNftResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BrandNft'] = ResolversParentTypes['BrandNft']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  ticker?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tokenURI?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  registeredBuildingTypeId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  registeredBuildingTypeName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  numberOfSlotAssociatedWithBrand?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  numberOfLootBags?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  numberOfLootItems?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type CollateralizedKnotOwnerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CollateralizedKnotOwner'] = ResolversParentTypes['CollateralizedKnotOwner']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  sETHContractAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stakehouseAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  blsPubKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  SLOT?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DecryptionPieceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DecryptionPiece'] = ResolversParentTypes['DecryptionPiece']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  guardian?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  recipientAesKey?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blsPublicKey?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  ciphertext?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  zkProof?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  nonce?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DecryptionRequestResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DecryptionRequest'] = ResolversParentTypes['DecryptionRequest']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  requesters?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
  stakeHouse?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blsPublicKey?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  nonce?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  recipientAesKey?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  totalNumberOfPiecesReceived?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EFDepositResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EFDeposit'] = ResolversParentTypes['EFDeposit']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  blsPubKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  withdrawalCredentials?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  blsSignature?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  merkleRoot?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  depositCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EFDepositContractEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EFDepositContractEvent'] = ResolversParentTypes['EFDepositContractEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  blsPubKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  signature?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  withdrawalCredentials?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blsPubKeyForKnot?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GoodieBagItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GoodieBagItem'] = ResolversParentTypes['GoodieBagItem']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  brandTokenId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tokenURI?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GuardianResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Guardian'] = ResolversParentTypes['Guardian']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  aesPublicKey?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  guardianIndexPointer?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  sharedPublicKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HouseGoodieBagResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['HouseGoodieBag'] = ResolversParentTypes['HouseGoodieBag']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  brandTokenId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  associatedKnot?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  landXCoordinate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  landYCoordinate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  landRemoved?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  building?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  buildingRemoved?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  character?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  characterRemoved?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  tokenURI?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type KNOTResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['KNOT'] = ResolversParentTypes['KNOT']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  addedSinceBlockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  rageQuit?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  rageQuitBlockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  kicked?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kickBlockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  coordinates?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  knotIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  houseIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  stakeHouse?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  stakeHouseMetadata?: Resolver<ResolversTypes['StakeHouse'], ParentType, ContextType>;
  depositor?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  isPartOfIndex?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  totalDETHRewardsReceived?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  dETHPerBlock?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dETHPerYear?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  reportedYield?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  savETHIndexId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  isolatedDETH?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  historicallySlashed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  currentSlashedAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  collateralizedSlotOwners?: Resolver<Array<ResolversTypes['CollateralizedKnotOwner']>, ParentType, ContextType, RequireFields<KNOTcollateralizedSlotOwnersArgs, 'skip' | 'first'>>;
  specialExitFee?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  associatedBrandTokenId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  universeGlobalValue?: Resolver<Maybe<ResolversTypes['UniverseGlobalValue']>, ParentType, ContextType, RequireFields<QueryuniverseGlobalValueArgs, 'id' | 'subgraphError'>>;
  universeGlobalValues?: Resolver<Array<ResolversTypes['UniverseGlobalValue']>, ParentType, ContextType, RequireFields<QueryuniverseGlobalValuesArgs, 'skip' | 'first' | 'subgraphError'>>;
  uniqueDepositor?: Resolver<Maybe<ResolversTypes['UniqueDepositor']>, ParentType, ContextType, RequireFields<QueryuniqueDepositorArgs, 'id' | 'subgraphError'>>;
  uniqueDepositors?: Resolver<Array<ResolversTypes['UniqueDepositor']>, ParentType, ContextType, RequireFields<QueryuniqueDepositorsArgs, 'skip' | 'first' | 'subgraphError'>>;
  uniqueRegisteredUser?: Resolver<Maybe<ResolversTypes['UniqueRegisteredUser']>, ParentType, ContextType, RequireFields<QueryuniqueRegisteredUserArgs, 'id' | 'subgraphError'>>;
  uniqueRegisteredUsers?: Resolver<Array<ResolversTypes['UniqueRegisteredUser']>, ParentType, ContextType, RequireFields<QueryuniqueRegisteredUsersArgs, 'skip' | 'first' | 'subgraphError'>>;
  event?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<QueryeventArgs, 'id' | 'subgraphError'>>;
  events?: Resolver<Array<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<QueryeventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  collateralizedKnotOwner?: Resolver<Maybe<ResolversTypes['CollateralizedKnotOwner']>, ParentType, ContextType, RequireFields<QuerycollateralizedKnotOwnerArgs, 'id' | 'subgraphError'>>;
  collateralizedKnotOwners?: Resolver<Array<ResolversTypes['CollateralizedKnotOwner']>, ParentType, ContextType, RequireFields<QuerycollateralizedKnotOwnersArgs, 'skip' | 'first' | 'subgraphError'>>;
  knot?: Resolver<Maybe<ResolversTypes['KNOT']>, ParentType, ContextType, RequireFields<QueryknotArgs, 'id' | 'subgraphError'>>;
  knots?: Resolver<Array<ResolversTypes['KNOT']>, ParentType, ContextType, RequireFields<QueryknotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  savETHIndex?: Resolver<Maybe<ResolversTypes['savETHIndex']>, ParentType, ContextType, RequireFields<QuerysavETHIndexArgs, 'id' | 'subgraphError'>>;
  savETHIndexes?: Resolver<Array<ResolversTypes['savETHIndex']>, ParentType, ContextType, RequireFields<QuerysavETHIndexesArgs, 'skip' | 'first' | 'subgraphError'>>;
  savETHIndexGlobal?: Resolver<Maybe<ResolversTypes['savETHIndexGlobal']>, ParentType, ContextType, RequireFields<QuerysavETHIndexGlobalArgs, 'id' | 'subgraphError'>>;
  savETHIndexGlobals?: Resolver<Array<ResolversTypes['savETHIndexGlobal']>, ParentType, ContextType, RequireFields<QuerysavETHIndexGlobalsArgs, 'skip' | 'first' | 'subgraphError'>>;
  brandCentralGlobal?: Resolver<Maybe<ResolversTypes['BrandCentralGlobal']>, ParentType, ContextType, RequireFields<QuerybrandCentralGlobalArgs, 'id' | 'subgraphError'>>;
  brandCentralGlobals?: Resolver<Array<ResolversTypes['BrandCentralGlobal']>, ParentType, ContextType, RequireFields<QuerybrandCentralGlobalsArgs, 'skip' | 'first' | 'subgraphError'>>;
  brandNft?: Resolver<Maybe<ResolversTypes['BrandNft']>, ParentType, ContextType, RequireFields<QuerybrandNftArgs, 'id' | 'subgraphError'>>;
  brandNfts?: Resolver<Array<ResolversTypes['BrandNft']>, ParentType, ContextType, RequireFields<QuerybrandNftsArgs, 'skip' | 'first' | 'subgraphError'>>;
  houseGoodieBag?: Resolver<Maybe<ResolversTypes['HouseGoodieBag']>, ParentType, ContextType, RequireFields<QueryhouseGoodieBagArgs, 'id' | 'subgraphError'>>;
  houseGoodieBags?: Resolver<Array<ResolversTypes['HouseGoodieBag']>, ParentType, ContextType, RequireFields<QueryhouseGoodieBagsArgs, 'skip' | 'first' | 'subgraphError'>>;
  goodieBagItem?: Resolver<Maybe<ResolversTypes['GoodieBagItem']>, ParentType, ContextType, RequireFields<QuerygoodieBagItemArgs, 'id' | 'subgraphError'>>;
  goodieBagItems?: Resolver<Array<ResolversTypes['GoodieBagItem']>, ParentType, ContextType, RequireFields<QuerygoodieBagItemsArgs, 'skip' | 'first' | 'subgraphError'>>;
  stakeHouse?: Resolver<Maybe<ResolversTypes['StakeHouse']>, ParentType, ContextType, RequireFields<QuerystakeHouseArgs, 'id' | 'subgraphError'>>;
  stakeHouses?: Resolver<Array<ResolversTypes['StakeHouse']>, ParentType, ContextType, RequireFields<QuerystakeHousesArgs, 'skip' | 'first' | 'subgraphError'>>;
  efdepositContractEvent?: Resolver<Maybe<ResolversTypes['EFDepositContractEvent']>, ParentType, ContextType, RequireFields<QueryefdepositContractEventArgs, 'id' | 'subgraphError'>>;
  efdepositContractEvents?: Resolver<Array<ResolversTypes['EFDepositContractEvent']>, ParentType, ContextType, RequireFields<QueryefdepositContractEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  efdeposit?: Resolver<Maybe<ResolversTypes['EFDeposit']>, ParentType, ContextType, RequireFields<QueryefdepositArgs, 'id' | 'subgraphError'>>;
  efdeposits?: Resolver<Array<ResolversTypes['EFDeposit']>, ParentType, ContextType, RequireFields<QueryefdepositsArgs, 'skip' | 'first' | 'subgraphError'>>;
  stakehouseAccount?: Resolver<Maybe<ResolversTypes['StakehouseAccount']>, ParentType, ContextType, RequireFields<QuerystakehouseAccountArgs, 'id' | 'subgraphError'>>;
  stakehouseAccounts?: Resolver<Array<ResolversTypes['StakehouseAccount']>, ParentType, ContextType, RequireFields<QuerystakehouseAccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  decryptionPiece?: Resolver<Maybe<ResolversTypes['DecryptionPiece']>, ParentType, ContextType, RequireFields<QuerydecryptionPieceArgs, 'id' | 'subgraphError'>>;
  decryptionPieces?: Resolver<Array<ResolversTypes['DecryptionPiece']>, ParentType, ContextType, RequireFields<QuerydecryptionPiecesArgs, 'skip' | 'first' | 'subgraphError'>>;
  decryptionRequest?: Resolver<Maybe<ResolversTypes['DecryptionRequest']>, ParentType, ContextType, RequireFields<QuerydecryptionRequestArgs, 'id' | 'subgraphError'>>;
  decryptionRequests?: Resolver<Array<ResolversTypes['DecryptionRequest']>, ParentType, ContextType, RequireFields<QuerydecryptionRequestsArgs, 'skip' | 'first' | 'subgraphError'>>;
  guardian?: Resolver<Maybe<ResolversTypes['Guardian']>, ParentType, ContextType, RequireFields<QueryguardianArgs, 'id' | 'subgraphError'>>;
  guardians?: Resolver<Array<ResolversTypes['Guardian']>, ParentType, ContextType, RequireFields<QueryguardiansArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
}>;

export type StakeHouseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StakeHouse'] = ResolversParentTypes['StakeHouse']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  index?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  sETH?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  sETHExchangeRate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  sETHExchangeRateFormatted?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  sETHRedemptionRate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  sETHRedemptionRateFormatted?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  sETHPayoffRate?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  sETHPayoffRateFormatted?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalAmountOfSlotSlashed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  numberOfKnots?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  numberOfRageQuitKnots?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  dETHMintedWithinHouse?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  foundedBrandId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  sETHTicker?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StakehouseAccountResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StakehouseAccount'] = ResolversParentTypes['StakehouseAccount']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  accountId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lifecycleStatus?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  depositor?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  totalETHForSLOTInQueue?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalETHForSLOTSentToDepositContract?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalDETHMinted?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  sETHMinted?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalSLOT?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  sETHCollateralizedAtMinting?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalCollateralizedSLOTInVault?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalDETHMintedFormatted?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  sETHMintedFormatted?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalSLOTFormatted?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  sETHCollateralizedAtMintingFormatted?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalCollateralizedSLOTInVaultFormatted?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  mintFromBlockNumber?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  stakeHouse?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stakeHouseMetadata?: Resolver<Maybe<ResolversTypes['StakeHouse']>, ParentType, ContextType>;
  depositorCreatedHouse?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  knotMetadata?: Resolver<Maybe<ResolversTypes['KNOT']>, ParentType, ContextType>;
  initialsRegisteredBlockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  registerValidatorBlockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tokensMintedBlockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blsPubKeyDeposits?: Resolver<Array<ResolversTypes['EFDeposit']>, ParentType, ContextType, RequireFields<StakehouseAccountblsPubKeyDepositsArgs, 'skip' | 'first'>>;
  depositTxHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalETHTopUps?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  numberOfDeposits?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lastDepositBlock?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lastDepositDepositCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blsSigningKeyCipherText?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  universeGlobalValue?: SubscriptionResolver<Maybe<ResolversTypes['UniverseGlobalValue']>, "universeGlobalValue", ParentType, ContextType, RequireFields<SubscriptionuniverseGlobalValueArgs, 'id' | 'subgraphError'>>;
  universeGlobalValues?: SubscriptionResolver<Array<ResolversTypes['UniverseGlobalValue']>, "universeGlobalValues", ParentType, ContextType, RequireFields<SubscriptionuniverseGlobalValuesArgs, 'skip' | 'first' | 'subgraphError'>>;
  uniqueDepositor?: SubscriptionResolver<Maybe<ResolversTypes['UniqueDepositor']>, "uniqueDepositor", ParentType, ContextType, RequireFields<SubscriptionuniqueDepositorArgs, 'id' | 'subgraphError'>>;
  uniqueDepositors?: SubscriptionResolver<Array<ResolversTypes['UniqueDepositor']>, "uniqueDepositors", ParentType, ContextType, RequireFields<SubscriptionuniqueDepositorsArgs, 'skip' | 'first' | 'subgraphError'>>;
  uniqueRegisteredUser?: SubscriptionResolver<Maybe<ResolversTypes['UniqueRegisteredUser']>, "uniqueRegisteredUser", ParentType, ContextType, RequireFields<SubscriptionuniqueRegisteredUserArgs, 'id' | 'subgraphError'>>;
  uniqueRegisteredUsers?: SubscriptionResolver<Array<ResolversTypes['UniqueRegisteredUser']>, "uniqueRegisteredUsers", ParentType, ContextType, RequireFields<SubscriptionuniqueRegisteredUsersArgs, 'skip' | 'first' | 'subgraphError'>>;
  event?: SubscriptionResolver<Maybe<ResolversTypes['Event']>, "event", ParentType, ContextType, RequireFields<SubscriptioneventArgs, 'id' | 'subgraphError'>>;
  events?: SubscriptionResolver<Array<ResolversTypes['Event']>, "events", ParentType, ContextType, RequireFields<SubscriptioneventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  collateralizedKnotOwner?: SubscriptionResolver<Maybe<ResolversTypes['CollateralizedKnotOwner']>, "collateralizedKnotOwner", ParentType, ContextType, RequireFields<SubscriptioncollateralizedKnotOwnerArgs, 'id' | 'subgraphError'>>;
  collateralizedKnotOwners?: SubscriptionResolver<Array<ResolversTypes['CollateralizedKnotOwner']>, "collateralizedKnotOwners", ParentType, ContextType, RequireFields<SubscriptioncollateralizedKnotOwnersArgs, 'skip' | 'first' | 'subgraphError'>>;
  knot?: SubscriptionResolver<Maybe<ResolversTypes['KNOT']>, "knot", ParentType, ContextType, RequireFields<SubscriptionknotArgs, 'id' | 'subgraphError'>>;
  knots?: SubscriptionResolver<Array<ResolversTypes['KNOT']>, "knots", ParentType, ContextType, RequireFields<SubscriptionknotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  savETHIndex?: SubscriptionResolver<Maybe<ResolversTypes['savETHIndex']>, "savETHIndex", ParentType, ContextType, RequireFields<SubscriptionsavETHIndexArgs, 'id' | 'subgraphError'>>;
  savETHIndexes?: SubscriptionResolver<Array<ResolversTypes['savETHIndex']>, "savETHIndexes", ParentType, ContextType, RequireFields<SubscriptionsavETHIndexesArgs, 'skip' | 'first' | 'subgraphError'>>;
  savETHIndexGlobal?: SubscriptionResolver<Maybe<ResolversTypes['savETHIndexGlobal']>, "savETHIndexGlobal", ParentType, ContextType, RequireFields<SubscriptionsavETHIndexGlobalArgs, 'id' | 'subgraphError'>>;
  savETHIndexGlobals?: SubscriptionResolver<Array<ResolversTypes['savETHIndexGlobal']>, "savETHIndexGlobals", ParentType, ContextType, RequireFields<SubscriptionsavETHIndexGlobalsArgs, 'skip' | 'first' | 'subgraphError'>>;
  brandCentralGlobal?: SubscriptionResolver<Maybe<ResolversTypes['BrandCentralGlobal']>, "brandCentralGlobal", ParentType, ContextType, RequireFields<SubscriptionbrandCentralGlobalArgs, 'id' | 'subgraphError'>>;
  brandCentralGlobals?: SubscriptionResolver<Array<ResolversTypes['BrandCentralGlobal']>, "brandCentralGlobals", ParentType, ContextType, RequireFields<SubscriptionbrandCentralGlobalsArgs, 'skip' | 'first' | 'subgraphError'>>;
  brandNft?: SubscriptionResolver<Maybe<ResolversTypes['BrandNft']>, "brandNft", ParentType, ContextType, RequireFields<SubscriptionbrandNftArgs, 'id' | 'subgraphError'>>;
  brandNfts?: SubscriptionResolver<Array<ResolversTypes['BrandNft']>, "brandNfts", ParentType, ContextType, RequireFields<SubscriptionbrandNftsArgs, 'skip' | 'first' | 'subgraphError'>>;
  houseGoodieBag?: SubscriptionResolver<Maybe<ResolversTypes['HouseGoodieBag']>, "houseGoodieBag", ParentType, ContextType, RequireFields<SubscriptionhouseGoodieBagArgs, 'id' | 'subgraphError'>>;
  houseGoodieBags?: SubscriptionResolver<Array<ResolversTypes['HouseGoodieBag']>, "houseGoodieBags", ParentType, ContextType, RequireFields<SubscriptionhouseGoodieBagsArgs, 'skip' | 'first' | 'subgraphError'>>;
  goodieBagItem?: SubscriptionResolver<Maybe<ResolversTypes['GoodieBagItem']>, "goodieBagItem", ParentType, ContextType, RequireFields<SubscriptiongoodieBagItemArgs, 'id' | 'subgraphError'>>;
  goodieBagItems?: SubscriptionResolver<Array<ResolversTypes['GoodieBagItem']>, "goodieBagItems", ParentType, ContextType, RequireFields<SubscriptiongoodieBagItemsArgs, 'skip' | 'first' | 'subgraphError'>>;
  stakeHouse?: SubscriptionResolver<Maybe<ResolversTypes['StakeHouse']>, "stakeHouse", ParentType, ContextType, RequireFields<SubscriptionstakeHouseArgs, 'id' | 'subgraphError'>>;
  stakeHouses?: SubscriptionResolver<Array<ResolversTypes['StakeHouse']>, "stakeHouses", ParentType, ContextType, RequireFields<SubscriptionstakeHousesArgs, 'skip' | 'first' | 'subgraphError'>>;
  efdepositContractEvent?: SubscriptionResolver<Maybe<ResolversTypes['EFDepositContractEvent']>, "efdepositContractEvent", ParentType, ContextType, RequireFields<SubscriptionefdepositContractEventArgs, 'id' | 'subgraphError'>>;
  efdepositContractEvents?: SubscriptionResolver<Array<ResolversTypes['EFDepositContractEvent']>, "efdepositContractEvents", ParentType, ContextType, RequireFields<SubscriptionefdepositContractEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  efdeposit?: SubscriptionResolver<Maybe<ResolversTypes['EFDeposit']>, "efdeposit", ParentType, ContextType, RequireFields<SubscriptionefdepositArgs, 'id' | 'subgraphError'>>;
  efdeposits?: SubscriptionResolver<Array<ResolversTypes['EFDeposit']>, "efdeposits", ParentType, ContextType, RequireFields<SubscriptionefdepositsArgs, 'skip' | 'first' | 'subgraphError'>>;
  stakehouseAccount?: SubscriptionResolver<Maybe<ResolversTypes['StakehouseAccount']>, "stakehouseAccount", ParentType, ContextType, RequireFields<SubscriptionstakehouseAccountArgs, 'id' | 'subgraphError'>>;
  stakehouseAccounts?: SubscriptionResolver<Array<ResolversTypes['StakehouseAccount']>, "stakehouseAccounts", ParentType, ContextType, RequireFields<SubscriptionstakehouseAccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  decryptionPiece?: SubscriptionResolver<Maybe<ResolversTypes['DecryptionPiece']>, "decryptionPiece", ParentType, ContextType, RequireFields<SubscriptiondecryptionPieceArgs, 'id' | 'subgraphError'>>;
  decryptionPieces?: SubscriptionResolver<Array<ResolversTypes['DecryptionPiece']>, "decryptionPieces", ParentType, ContextType, RequireFields<SubscriptiondecryptionPiecesArgs, 'skip' | 'first' | 'subgraphError'>>;
  decryptionRequest?: SubscriptionResolver<Maybe<ResolversTypes['DecryptionRequest']>, "decryptionRequest", ParentType, ContextType, RequireFields<SubscriptiondecryptionRequestArgs, 'id' | 'subgraphError'>>;
  decryptionRequests?: SubscriptionResolver<Array<ResolversTypes['DecryptionRequest']>, "decryptionRequests", ParentType, ContextType, RequireFields<SubscriptiondecryptionRequestsArgs, 'skip' | 'first' | 'subgraphError'>>;
  guardian?: SubscriptionResolver<Maybe<ResolversTypes['Guardian']>, "guardian", ParentType, ContextType, RequireFields<SubscriptionguardianArgs, 'id' | 'subgraphError'>>;
  guardians?: SubscriptionResolver<Array<ResolversTypes['Guardian']>, "guardians", ParentType, ContextType, RequireFields<SubscriptionguardiansArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
}>;

export type UniqueDepositorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UniqueDepositor'] = ResolversParentTypes['UniqueDepositor']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UniqueRegisteredUserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UniqueRegisteredUser'] = ResolversParentTypes['UniqueRegisteredUser']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UniverseGlobalValueResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UniverseGlobalValue'] = ResolversParentTypes['UniverseGlobalValue']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  StakeHouseUniverse?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  AccessControls?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  AccountManager?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  TransactionRouter?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  SlotRegistry?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  savETHRegistry?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  savETHTransactionRouter?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  savETHBatchRouter?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  dETH?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  savETH?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  DepositContract?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  WithdrawalCredentials?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  numberOfUniqueRegisteredUsers?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  numberOfUniqueDepositors?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  numberOfStakeHouses?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  numberOfKnots?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  numberOfRegisteredValidators?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  numberOfRageQuitKnots?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  PCV?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  POA?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  ETHSentToEFDepositContractViaStakehouseProtocol?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  dETHMinted?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  SLOTMinted?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type savETHIndexResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['savETHIndex'] = ResolversParentTypes['savETHIndex']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  indexId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  indexOwner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  numberOfKnots?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  dETHTotal?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  dETHTotalRewards?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  savETHTotal?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  dETHPerBlock?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dETHPerYear?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  reportedYield?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  isolationExchangeRate?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type savETHIndexGlobalResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['savETHIndexGlobal'] = ResolversParentTypes['savETHIndexGlobal']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  numberOfKnotsInIndexes?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  numberOfIndexes?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  dETHPerBlock?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dETHPerYear?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  reportedYield?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  BrandCentralGlobal?: BrandCentralGlobalResolvers<ContextType>;
  BrandNft?: BrandNftResolvers<ContextType>;
  Bytes?: GraphQLScalarType;
  CollateralizedKnotOwner?: CollateralizedKnotOwnerResolvers<ContextType>;
  DecryptionPiece?: DecryptionPieceResolvers<ContextType>;
  DecryptionRequest?: DecryptionRequestResolvers<ContextType>;
  EFDeposit?: EFDepositResolvers<ContextType>;
  EFDepositContractEvent?: EFDepositContractEventResolvers<ContextType>;
  Event?: EventResolvers<ContextType>;
  GoodieBagItem?: GoodieBagItemResolvers<ContextType>;
  Guardian?: GuardianResolvers<ContextType>;
  HouseGoodieBag?: HouseGoodieBagResolvers<ContextType>;
  KNOT?: KNOTResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  StakeHouse?: StakeHouseResolvers<ContextType>;
  StakehouseAccount?: StakehouseAccountResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  UniqueDepositor?: UniqueDepositorResolvers<ContextType>;
  UniqueRegisteredUser?: UniqueRegisteredUserResolvers<ContextType>;
  UniverseGlobalValue?: UniverseGlobalValueResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
  savETHIndex?: savETHIndexResolvers<ContextType>;
  savETHIndexGlobal?: savETHIndexGlobalResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = StakehouseProtocolTypes.Context & BaseMeshContext;


import { fileURLToPath } from '@graphql-mesh/utils';
const baseDir = pathModule.join(pathModule.dirname(fileURLToPath(import.meta.url)), '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".graphclient/sources/stakehouse-protocol/introspectionSchema":
      return import("./sources/stakehouse-protocol/introspectionSchema") as T;
    
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
const stakehouseProtocolTransforms = [];
const additionalTypeDefs = [] as any[];
const stakehouseProtocolHandler = new GraphqlHandler({
              name: "stakehouse-protocol",
              config: {"endpoint":"https://api.thegraph.com/subgraphs/name/bswap-eng/stakehouse-protocol"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("stakehouse-protocol"),
              logger: logger.child("stakehouse-protocol"),
              importFn,
            });
sources[0] = {
          name: 'stakehouse-protocol',
          handler: stakehouseProtocolHandler,
          transforms: stakehouseProtocolTransforms
        }
const additionalResolvers = [] as any[]
const merger = new(BareMerger as any)({
        cache,
        pubsub,
        logger: logger.child('bareMerger'),
        store: rootStore.child('bareMerger')
      })

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
        document: StakeHousesQueryDocument,
        get rawSDL() {
          return printWithCache(StakeHousesQueryDocument);
        },
        location: 'StakeHousesQueryDocument.graphql'
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

export function getBuiltGraphClient(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
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
export type StakeHousesQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type StakeHousesQueryQuery = { stakeHouses: Array<Pick<StakeHouse, 'dETHMintedWithinHouse' | 'numberOfKnots' | 'numberOfRageQuitKnots' | 'foundedBrandId' | 'id' | 'index' | 'sETH' | 'totalAmountOfSlotSlashed' | 'sETHTicker'>> };


export const StakeHousesQueryDocument = gql`
    query StakeHousesQuery {
  stakeHouses {
    dETHMintedWithinHouse
    numberOfKnots
    numberOfRageQuitKnots
    foundedBrandId
    id
    index
    sETH
    totalAmountOfSlotSlashed
    sETHTicker
  }
}
    ` as unknown as DocumentNode<StakeHousesQueryQuery, StakeHousesQueryQueryVariables>;


export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    StakeHousesQuery(variables?: StakeHousesQueryQueryVariables, options?: C): Promise<StakeHousesQueryQuery> {
      return requester<StakeHousesQueryQuery, StakeHousesQueryQueryVariables>(StakeHousesQueryDocument, variables, options) as Promise<StakeHousesQueryQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;