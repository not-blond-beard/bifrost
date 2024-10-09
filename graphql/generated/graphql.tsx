import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Address: { input: any; output: any; }
  BencodexValue: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  BlockHash: { input: any; output: any; }
  Byte: { input: any; output: any; }
  ByteString: { input: any; output: any; }
  DateTimeOffset: { input: any; output: any; }
  Decimal: { input: any; output: any; }
  EvidenceId: { input: any; output: any; }
  Guid: { input: any; output: any; }
  HashDigestSHA1: { input: any; output: any; }
  HashDigestSHA256: { input: any; output: any; }
  HashDigest_SHA256: { input: any; output: any; }
  KeyBytes: { input: any; output: any; }
  Long: { input: number; output: number; }
  PublicKey: { input: any; output: any; }
  TxId: { input: string; output: string; }
  VoteFlag: { input: any; output: any; }
};

/** Represents a raw account state.  This is meant to represent a raw storage state void of any application layer context and/or logic.  In particular, this does not deal with currency or fungible asset value directly, which requires additional information on currency such as its ticker and possible minters, etc. while interpreting the data retrieved with the provided contextual information. The same is true for validator sets. */
export type AccountState = {
  __typename?: 'AccountState';
  /**
   * Balance at given address and currency hash pair.
   * @deprecated Does not work post block protocol version 7.
   */
  balance?: Maybe<IValue>;
  /**
   * Balances at given addresses and currency hash pair.
   * @deprecated Does not work post block protocol version 7.
   */
  balances: Array<Maybe<IValue>>;
  /** The state at given address. */
  state?: Maybe<IValue>;
  /** The state root hash associated with this account state. */
  stateRootHash: Scalars['HashDigestSHA256']['output'];
  /** The states at given addresses. */
  states: Array<Maybe<IValue>>;
  /**
   * Total supply in circulation, if recorded, for given currency hash.
   * @deprecated Does not work post block protocol version 7.
   */
  totalSupply?: Maybe<IValue>;
  /**
   * The validator set.
   * @deprecated Does not work post block protocol version 6.
   */
  validatorSet?: Maybe<IValue>;
};


/** Represents a raw account state.  This is meant to represent a raw storage state void of any application layer context and/or logic.  In particular, this does not deal with currency or fungible asset value directly, which requires additional information on currency such as its ticker and possible minters, etc. while interpreting the data retrieved with the provided contextual information. The same is true for validator sets. */
export type AccountStateBalanceArgs = {
  address: Scalars['Address']['input'];
  currencyHash: Scalars['HashDigestSHA1']['input'];
};


/** Represents a raw account state.  This is meant to represent a raw storage state void of any application layer context and/or logic.  In particular, this does not deal with currency or fungible asset value directly, which requires additional information on currency such as its ticker and possible minters, etc. while interpreting the data retrieved with the provided contextual information. The same is true for validator sets. */
export type AccountStateBalancesArgs = {
  addresses: Array<Scalars['Address']['input']>;
  currencyHash: Scalars['HashDigestSHA1']['input'];
};


/** Represents a raw account state.  This is meant to represent a raw storage state void of any application layer context and/or logic.  In particular, this does not deal with currency or fungible asset value directly, which requires additional information on currency such as its ticker and possible minters, etc. while interpreting the data retrieved with the provided contextual information. The same is true for validator sets. */
export type AccountStateStateArgs = {
  address: Scalars['Address']['input'];
};


/** Represents a raw account state.  This is meant to represent a raw storage state void of any application layer context and/or logic.  In particular, this does not deal with currency or fungible asset value directly, which requires additional information on currency such as its ticker and possible minters, etc. while interpreting the data retrieved with the provided contextual information. The same is true for validator sets. */
export type AccountStateStatesArgs = {
  addresses: Array<Scalars['Address']['input']>;
};


/** Represents a raw account state.  This is meant to represent a raw storage state void of any application layer context and/or logic.  In particular, this does not deal with currency or fungible asset value directly, which requires additional information on currency such as its ticker and possible minters, etc. while interpreting the data retrieved with the provided contextual information. The same is true for validator sets. */
export type AccountStateTotalSupplyArgs = {
  currencyHash: Scalars['HashDigestSHA1']['input'];
};

export type Action = {
  __typename?: 'Action';
  /** A readable representation for debugging. */
  inspection: Scalars['String']['output'];
  /** A JSON representation of action data */
  json: Scalars['String']['output'];
  /** Raw Action data ('hex' or 'base64' encoding available.) */
  raw: Scalars['String']['output'];
};


export type ActionRawArgs = {
  encode?: InputMaybe<Scalars['String']['input']>;
};

export type ActionMutation = {
  __typename?: 'ActionMutation';
  /** Charge Action Points using Material. */
  chargeActionPoint: Scalars['TxId']['output'];
  /** Combine new Consumable. */
  combinationConsumable: Scalars['TxId']['output'];
  /** Combine new equipment. */
  combinationEquipment: Scalars['TxId']['output'];
  /** Create new avatar. */
  createAvatar: Scalars['TxId']['output'];
  /** Get daily reward. */
  dailyReward: Scalars['TxId']['output'];
  /** Start stage to get material. */
  hackAndSlash: Scalars['TxId']['output'];
  /** Upgrade equipment. */
  itemEnhancement: Scalars['TxId']['output'];
};


export type ActionMutationChargeActionPointArgs = {
  avatarAddress: Scalars['Address']['input'];
};


export type ActionMutationCombinationConsumableArgs = {
  avatarAddress: Scalars['Address']['input'];
  recipeId: Scalars['Int']['input'];
  slotIndex: Scalars['Int']['input'];
};


export type ActionMutationCombinationEquipmentArgs = {
  avatarAddress: Scalars['Address']['input'];
  recipeId: Scalars['Int']['input'];
  slotIndex: Scalars['Int']['input'];
  subRecipeId?: InputMaybe<Scalars['Int']['input']>;
};


export type ActionMutationCreateAvatarArgs = {
  avatarIndex: Scalars['Int']['input'];
  avatarName: Scalars['String']['input'];
  earIndex: Scalars['Int']['input'];
  hairIndex: Scalars['Int']['input'];
  lensIndex: Scalars['Int']['input'];
  tailIndex: Scalars['Int']['input'];
};


export type ActionMutationDailyRewardArgs = {
  avatarAddress: Scalars['Address']['input'];
};


export type ActionMutationHackAndSlashArgs = {
  avatarAddress: Scalars['Address']['input'];
  consumableIds?: InputMaybe<Array<InputMaybe<Scalars['Guid']['input']>>>;
  costumeIds?: InputMaybe<Array<InputMaybe<Scalars['Guid']['input']>>>;
  equipmentIds?: InputMaybe<Array<InputMaybe<Scalars['Guid']['input']>>>;
  runeSlotInfos?: InputMaybe<Array<RuneSlotInfoInputType>>;
  stageId: Scalars['Int']['input'];
  worldId: Scalars['Int']['input'];
};


export type ActionMutationItemEnhancementArgs = {
  avatarAddress: Scalars['Address']['input'];
  itemId: Scalars['Guid']['input'];
  materialIds: Array<Scalars['Guid']['input']>;
  slotIndex: Scalars['Int']['input'];
};

export type ActionQuery = {
  __typename?: 'ActionQuery';
  /** @deprecated Since NCIP-15, it doesn't care account activation. */
  activateAccount: Scalars['ByteString']['output'];
  approvePledge: Scalars['ByteString']['output'];
  auraSummon: Scalars['ByteString']['output'];
  claimItems: Scalars['ByteString']['output'];
  claimRaidReward: Scalars['ByteString']['output'];
  claimStakeReward?: Maybe<Scalars['ByteString']['output']>;
  claimWorldBossKillReward: Scalars['ByteString']['output'];
  combinationConsumable: Scalars['ByteString']['output'];
  combinationEquipment: Scalars['ByteString']['output'];
  /** Query to craft/enhance items/foods */
  craftQuery: CraftQuery;
  createAvatar: Scalars['ByteString']['output'];
  createPledge: Scalars['ByteString']['output'];
  dailyReward: Scalars['ByteString']['output'];
  deliverToOthersGarages: Scalars['ByteString']['output'];
  endPledge: Scalars['ByteString']['output'];
  grinding?: Maybe<Scalars['ByteString']['output']>;
  hackAndSlash: Scalars['ByteString']['output'];
  hackAndSlashSweep: Scalars['ByteString']['output'];
  itemEnhancement: Scalars['ByteString']['output'];
  loadIntoMyGarages: Scalars['ByteString']['output'];
  migrateMonsterCollection: Scalars['ByteString']['output'];
  patchTableSheet: Scalars['ByteString']['output'];
  prepareRewardAssets: Scalars['ByteString']['output'];
  raid: Scalars['ByteString']['output'];
  rapidCombination: Scalars['ByteString']['output'];
  requestPledge: Scalars['ByteString']['output'];
  retrieveAvatarAssets: Scalars['ByteString']['output'];
  runeEnhancement: Scalars['ByteString']['output'];
  runeSummon: Scalars['ByteString']['output'];
  stake?: Maybe<Scalars['ByteString']['output']>;
  transferAsset?: Maybe<Scalars['ByteString']['output']>;
  transferAssets: Scalars['ByteString']['output'];
  unloadFromMyGarages: Scalars['ByteString']['output'];
  unlockEquipmentRecipe?: Maybe<Scalars['ByteString']['output']>;
  unlockWorld?: Maybe<Scalars['ByteString']['output']>;
};


export type ActionQueryActivateAccountArgs = {
  activationCode: Scalars['String']['input'];
};


export type ActionQueryApprovePledgeArgs = {
  patronAddress: Scalars['Address']['input'];
};


export type ActionQueryAuraSummonArgs = {
  avatarAddress: Scalars['Address']['input'];
  groupId: Scalars['Int']['input'];
  summonCount: Scalars['Int']['input'];
};


export type ActionQueryClaimItemsArgs = {
  claimData: Array<ClaimDataInputType>;
  memo?: InputMaybe<Scalars['String']['input']>;
};


export type ActionQueryClaimRaidRewardArgs = {
  avatarAddress: Scalars['Address']['input'];
};


export type ActionQueryClaimStakeRewardArgs = {
  avatarAddress?: InputMaybe<Scalars['Address']['input']>;
};


export type ActionQueryClaimWorldBossKillRewardArgs = {
  avatarAddress: Scalars['Address']['input'];
};


export type ActionQueryCombinationConsumableArgs = {
  avatarAddress: Scalars['Address']['input'];
  recipeId: Scalars['Int']['input'];
  slotIndex: Scalars['Int']['input'];
};


export type ActionQueryCombinationEquipmentArgs = {
  avatarAddress: Scalars['Address']['input'];
  payByCrystal?: InputMaybe<Scalars['Boolean']['input']>;
  recipeId: Scalars['Int']['input'];
  slotIndex: Scalars['Int']['input'];
  subRecipeId?: InputMaybe<Scalars['Int']['input']>;
  useHammerPoint?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ActionQueryCreateAvatarArgs = {
  ear?: InputMaybe<Scalars['Int']['input']>;
  hair?: InputMaybe<Scalars['Int']['input']>;
  index: Scalars['Int']['input'];
  lens?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  tail?: InputMaybe<Scalars['Int']['input']>;
};


export type ActionQueryCreatePledgeArgs = {
  agentAddresses: Array<Scalars['Address']['input']>;
  mead?: InputMaybe<Scalars['Int']['input']>;
  patronAddress: Scalars['Address']['input'];
};


export type ActionQueryDailyRewardArgs = {
  avatarAddress: Scalars['Address']['input'];
};


export type ActionQueryDeliverToOthersGaragesArgs = {
  fungibleAssetValues?: InputMaybe<Array<SimplifyFungibleAssetValueInput>>;
  fungibleIdAndCounts?: InputMaybe<Array<FungibleIdAndCountInput>>;
  memo?: InputMaybe<Scalars['String']['input']>;
  recipientAgentAddr: Scalars['Address']['input'];
};


export type ActionQueryEndPledgeArgs = {
  agentAddress: Scalars['Address']['input'];
};


export type ActionQueryGrindingArgs = {
  avatarAddress: Scalars['Address']['input'];
  chargeAp?: InputMaybe<Scalars['Boolean']['input']>;
  equipmentIds: Array<InputMaybe<Scalars['Guid']['input']>>;
};


export type ActionQueryHackAndSlashArgs = {
  avatarAddress: Scalars['Address']['input'];
  consumableIds?: InputMaybe<Array<InputMaybe<Scalars['Guid']['input']>>>;
  costumeIds?: InputMaybe<Array<InputMaybe<Scalars['Guid']['input']>>>;
  equipmentIds?: InputMaybe<Array<InputMaybe<Scalars['Guid']['input']>>>;
  runeSlotInfos?: InputMaybe<Array<RuneSlotInfoInputType>>;
  stageBuffId?: InputMaybe<Scalars['Int']['input']>;
  stageId: Scalars['Int']['input'];
  worldId: Scalars['Int']['input'];
};


export type ActionQueryHackAndSlashSweepArgs = {
  actionPoint: Scalars['Int']['input'];
  apStoneCount?: InputMaybe<Scalars['Int']['input']>;
  avatarAddress: Scalars['Address']['input'];
  costumeIds?: InputMaybe<Array<InputMaybe<Scalars['Guid']['input']>>>;
  equipmentIds?: InputMaybe<Array<InputMaybe<Scalars['Guid']['input']>>>;
  runeSlotInfos?: InputMaybe<Array<RuneSlotInfoInputType>>;
  stageId: Scalars['Int']['input'];
  worldId: Scalars['Int']['input'];
};


export type ActionQueryItemEnhancementArgs = {
  avatarAddress: Scalars['Address']['input'];
  itemId: Scalars['Guid']['input'];
  materialIds: Array<Scalars['Guid']['input']>;
  slotIndex: Scalars['Int']['input'];
};


export type ActionQueryLoadIntoMyGaragesArgs = {
  fungibleAssetValues?: InputMaybe<Array<BalanceInput>>;
  fungibleIdAndCounts?: InputMaybe<Array<FungibleIdAndCountInput>>;
  inventoryAddr?: InputMaybe<Scalars['Address']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
};


export type ActionQueryMigrateMonsterCollectionArgs = {
  avatarAddress?: InputMaybe<Scalars['Address']['input']>;
};


export type ActionQueryPatchTableSheetArgs = {
  tableCsv: Scalars['String']['input'];
  tableName: Scalars['String']['input'];
};


export type ActionQueryPrepareRewardAssetsArgs = {
  assets: Array<FungibleAssetValueInputType>;
  rewardPoolAddress: Scalars['Address']['input'];
};


export type ActionQueryRaidArgs = {
  avatarAddress: Scalars['Address']['input'];
  costumeIds?: InputMaybe<Array<InputMaybe<Scalars['Guid']['input']>>>;
  equipmentIds?: InputMaybe<Array<InputMaybe<Scalars['Guid']['input']>>>;
  foodIds?: InputMaybe<Array<InputMaybe<Scalars['Guid']['input']>>>;
  payNcg?: InputMaybe<Scalars['Boolean']['input']>;
  runeSlotInfos?: InputMaybe<Array<RuneSlotInfoInputType>>;
};


export type ActionQueryRapidCombinationArgs = {
  avatarAddress: Scalars['Address']['input'];
  slotIndex: Scalars['Int']['input'];
};


export type ActionQueryRequestPledgeArgs = {
  agentAddress: Scalars['Address']['input'];
  mead?: InputMaybe<Scalars['Int']['input']>;
};


export type ActionQueryRetrieveAvatarAssetsArgs = {
  avatarAddress: Scalars['Address']['input'];
};


export type ActionQueryRuneEnhancementArgs = {
  avatarAddress: Scalars['Address']['input'];
  runeId: Scalars['Int']['input'];
  tryCount?: InputMaybe<Scalars['Int']['input']>;
};


export type ActionQueryRuneSummonArgs = {
  avatarAddress: Scalars['Address']['input'];
  groupId: Scalars['Int']['input'];
  summonCount: Scalars['Int']['input'];
};


export type ActionQueryStakeArgs = {
  amount?: InputMaybe<Scalars['BigInt']['input']>;
};


export type ActionQueryTransferAssetArgs = {
  amount: Scalars['String']['input'];
  currency?: InputMaybe<CurrencyEnum>;
  memo?: InputMaybe<Scalars['String']['input']>;
  rawCurrency?: InputMaybe<CurrencyInput>;
  recipient: Scalars['Address']['input'];
  sender: Scalars['Address']['input'];
};


export type ActionQueryTransferAssetsArgs = {
  memo?: InputMaybe<Scalars['String']['input']>;
  recipients: Array<RecipientsInputType>;
  sender: Scalars['Address']['input'];
};


export type ActionQueryUnloadFromMyGaragesArgs = {
  fungibleAssetValues?: InputMaybe<Array<BalanceInput>>;
  fungibleIdAndCounts?: InputMaybe<Array<FungibleIdAndCountInput>>;
  memo?: InputMaybe<Scalars['String']['input']>;
  recipientAvatarAddr: Scalars['Address']['input'];
};


export type ActionQueryUnlockEquipmentRecipeArgs = {
  avatarAddress: Scalars['Address']['input'];
  recipeIds: Array<InputMaybe<Scalars['Int']['input']>>;
};


export type ActionQueryUnlockWorldArgs = {
  avatarAddress: Scalars['Address']['input'];
  worldIds: Array<InputMaybe<Scalars['Int']['input']>>;
};

export type ActionTxQuery = {
  __typename?: 'ActionTxQuery';
  /** @deprecated Since NCIP-15, it doesn't care account activation. */
  activateAccount: Scalars['ByteString']['output'];
  approvePledge: Scalars['ByteString']['output'];
  auraSummon: Scalars['ByteString']['output'];
  claimItems: Scalars['ByteString']['output'];
  claimRaidReward: Scalars['ByteString']['output'];
  claimStakeReward?: Maybe<Scalars['ByteString']['output']>;
  claimWorldBossKillReward: Scalars['ByteString']['output'];
  combinationConsumable: Scalars['ByteString']['output'];
  combinationEquipment: Scalars['ByteString']['output'];
  /** Query to craft/enhance items/foods */
  craftQuery: CraftQuery;
  createAvatar: Scalars['ByteString']['output'];
  createPledge: Scalars['ByteString']['output'];
  dailyReward: Scalars['ByteString']['output'];
  deliverToOthersGarages: Scalars['ByteString']['output'];
  endPledge: Scalars['ByteString']['output'];
  grinding?: Maybe<Scalars['ByteString']['output']>;
  hackAndSlash: Scalars['ByteString']['output'];
  hackAndSlashSweep: Scalars['ByteString']['output'];
  itemEnhancement: Scalars['ByteString']['output'];
  loadIntoMyGarages: Scalars['ByteString']['output'];
  migrateMonsterCollection: Scalars['ByteString']['output'];
  patchTableSheet: Scalars['ByteString']['output'];
  prepareRewardAssets: Scalars['ByteString']['output'];
  raid: Scalars['ByteString']['output'];
  rapidCombination: Scalars['ByteString']['output'];
  requestPledge: Scalars['ByteString']['output'];
  retrieveAvatarAssets: Scalars['ByteString']['output'];
  runeEnhancement: Scalars['ByteString']['output'];
  runeSummon: Scalars['ByteString']['output'];
  stake?: Maybe<Scalars['ByteString']['output']>;
  transferAsset?: Maybe<Scalars['ByteString']['output']>;
  transferAssets: Scalars['ByteString']['output'];
  unloadFromMyGarages: Scalars['ByteString']['output'];
  unlockEquipmentRecipe?: Maybe<Scalars['ByteString']['output']>;
  unlockWorld?: Maybe<Scalars['ByteString']['output']>;
};


export type ActionTxQueryActivateAccountArgs = {
  activationCode: Scalars['String']['input'];
};


export type ActionTxQueryApprovePledgeArgs = {
  patronAddress: Scalars['Address']['input'];
};


export type ActionTxQueryAuraSummonArgs = {
  avatarAddress: Scalars['Address']['input'];
  groupId: Scalars['Int']['input'];
  summonCount: Scalars['Int']['input'];
};


export type ActionTxQueryClaimItemsArgs = {
  claimData: Array<ClaimDataInputType>;
  memo?: InputMaybe<Scalars['String']['input']>;
};


export type ActionTxQueryClaimRaidRewardArgs = {
  avatarAddress: Scalars['Address']['input'];
};


export type ActionTxQueryClaimStakeRewardArgs = {
  avatarAddress?: InputMaybe<Scalars['Address']['input']>;
};


export type ActionTxQueryClaimWorldBossKillRewardArgs = {
  avatarAddress: Scalars['Address']['input'];
};


export type ActionTxQueryCombinationConsumableArgs = {
  avatarAddress: Scalars['Address']['input'];
  recipeId: Scalars['Int']['input'];
  slotIndex: Scalars['Int']['input'];
};


export type ActionTxQueryCombinationEquipmentArgs = {
  avatarAddress: Scalars['Address']['input'];
  payByCrystal?: InputMaybe<Scalars['Boolean']['input']>;
  recipeId: Scalars['Int']['input'];
  slotIndex: Scalars['Int']['input'];
  subRecipeId?: InputMaybe<Scalars['Int']['input']>;
  useHammerPoint?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ActionTxQueryCreateAvatarArgs = {
  ear?: InputMaybe<Scalars['Int']['input']>;
  hair?: InputMaybe<Scalars['Int']['input']>;
  index: Scalars['Int']['input'];
  lens?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  tail?: InputMaybe<Scalars['Int']['input']>;
};


export type ActionTxQueryCreatePledgeArgs = {
  agentAddresses: Array<Scalars['Address']['input']>;
  mead?: InputMaybe<Scalars['Int']['input']>;
  patronAddress: Scalars['Address']['input'];
};


export type ActionTxQueryDailyRewardArgs = {
  avatarAddress: Scalars['Address']['input'];
};


export type ActionTxQueryDeliverToOthersGaragesArgs = {
  fungibleAssetValues?: InputMaybe<Array<SimplifyFungibleAssetValueInput>>;
  fungibleIdAndCounts?: InputMaybe<Array<FungibleIdAndCountInput>>;
  memo?: InputMaybe<Scalars['String']['input']>;
  recipientAgentAddr: Scalars['Address']['input'];
};


export type ActionTxQueryEndPledgeArgs = {
  agentAddress: Scalars['Address']['input'];
};


export type ActionTxQueryGrindingArgs = {
  avatarAddress: Scalars['Address']['input'];
  chargeAp?: InputMaybe<Scalars['Boolean']['input']>;
  equipmentIds: Array<InputMaybe<Scalars['Guid']['input']>>;
};


export type ActionTxQueryHackAndSlashArgs = {
  avatarAddress: Scalars['Address']['input'];
  consumableIds?: InputMaybe<Array<InputMaybe<Scalars['Guid']['input']>>>;
  costumeIds?: InputMaybe<Array<InputMaybe<Scalars['Guid']['input']>>>;
  equipmentIds?: InputMaybe<Array<InputMaybe<Scalars['Guid']['input']>>>;
  runeSlotInfos?: InputMaybe<Array<RuneSlotInfoInputType>>;
  stageBuffId?: InputMaybe<Scalars['Int']['input']>;
  stageId: Scalars['Int']['input'];
  worldId: Scalars['Int']['input'];
};


export type ActionTxQueryHackAndSlashSweepArgs = {
  actionPoint: Scalars['Int']['input'];
  apStoneCount?: InputMaybe<Scalars['Int']['input']>;
  avatarAddress: Scalars['Address']['input'];
  costumeIds?: InputMaybe<Array<InputMaybe<Scalars['Guid']['input']>>>;
  equipmentIds?: InputMaybe<Array<InputMaybe<Scalars['Guid']['input']>>>;
  runeSlotInfos?: InputMaybe<Array<RuneSlotInfoInputType>>;
  stageId: Scalars['Int']['input'];
  worldId: Scalars['Int']['input'];
};


export type ActionTxQueryItemEnhancementArgs = {
  avatarAddress: Scalars['Address']['input'];
  itemId: Scalars['Guid']['input'];
  materialIds: Array<Scalars['Guid']['input']>;
  slotIndex: Scalars['Int']['input'];
};


export type ActionTxQueryLoadIntoMyGaragesArgs = {
  fungibleAssetValues?: InputMaybe<Array<BalanceInput>>;
  fungibleIdAndCounts?: InputMaybe<Array<FungibleIdAndCountInput>>;
  inventoryAddr?: InputMaybe<Scalars['Address']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
};


export type ActionTxQueryMigrateMonsterCollectionArgs = {
  avatarAddress?: InputMaybe<Scalars['Address']['input']>;
};


export type ActionTxQueryPatchTableSheetArgs = {
  tableCsv: Scalars['String']['input'];
  tableName: Scalars['String']['input'];
};


export type ActionTxQueryPrepareRewardAssetsArgs = {
  assets: Array<FungibleAssetValueInputType>;
  rewardPoolAddress: Scalars['Address']['input'];
};


export type ActionTxQueryRaidArgs = {
  avatarAddress: Scalars['Address']['input'];
  costumeIds?: InputMaybe<Array<InputMaybe<Scalars['Guid']['input']>>>;
  equipmentIds?: InputMaybe<Array<InputMaybe<Scalars['Guid']['input']>>>;
  foodIds?: InputMaybe<Array<InputMaybe<Scalars['Guid']['input']>>>;
  payNcg?: InputMaybe<Scalars['Boolean']['input']>;
  runeSlotInfos?: InputMaybe<Array<RuneSlotInfoInputType>>;
};


export type ActionTxQueryRapidCombinationArgs = {
  avatarAddress: Scalars['Address']['input'];
  slotIndex: Scalars['Int']['input'];
};


export type ActionTxQueryRequestPledgeArgs = {
  agentAddress: Scalars['Address']['input'];
  mead?: InputMaybe<Scalars['Int']['input']>;
};


export type ActionTxQueryRetrieveAvatarAssetsArgs = {
  avatarAddress: Scalars['Address']['input'];
};


export type ActionTxQueryRuneEnhancementArgs = {
  avatarAddress: Scalars['Address']['input'];
  runeId: Scalars['Int']['input'];
  tryCount?: InputMaybe<Scalars['Int']['input']>;
};


export type ActionTxQueryRuneSummonArgs = {
  avatarAddress: Scalars['Address']['input'];
  groupId: Scalars['Int']['input'];
  summonCount: Scalars['Int']['input'];
};


export type ActionTxQueryStakeArgs = {
  amount?: InputMaybe<Scalars['BigInt']['input']>;
};


export type ActionTxQueryTransferAssetArgs = {
  amount: Scalars['String']['input'];
  currency?: InputMaybe<CurrencyEnum>;
  memo?: InputMaybe<Scalars['String']['input']>;
  rawCurrency?: InputMaybe<CurrencyInput>;
  recipient: Scalars['Address']['input'];
  sender: Scalars['Address']['input'];
};


export type ActionTxQueryTransferAssetsArgs = {
  memo?: InputMaybe<Scalars['String']['input']>;
  recipients: Array<RecipientsInputType>;
  sender: Scalars['Address']['input'];
};


export type ActionTxQueryUnloadFromMyGaragesArgs = {
  fungibleAssetValues?: InputMaybe<Array<BalanceInput>>;
  fungibleIdAndCounts?: InputMaybe<Array<FungibleIdAndCountInput>>;
  memo?: InputMaybe<Scalars['String']['input']>;
  recipientAvatarAddr: Scalars['Address']['input'];
};


export type ActionTxQueryUnlockEquipmentRecipeArgs = {
  avatarAddress: Scalars['Address']['input'];
  recipeIds: Array<InputMaybe<Scalars['Int']['input']>>;
};


export type ActionTxQueryUnlockWorldArgs = {
  avatarAddress: Scalars['Address']['input'];
  worldIds: Array<InputMaybe<Scalars['Int']['input']>>;
};

export type ActivationStatusMutation = {
  __typename?: 'ActivationStatusMutation';
  /** @deprecated Since NCIP-15, it doesn't care account activation. */
  activateAccount: Scalars['Boolean']['output'];
};


export type ActivationStatusMutationActivateAccountArgs = {
  encodedActivationKey: Scalars['String']['input'];
};

export type ActivationStatusQuery = {
  __typename?: 'ActivationStatusQuery';
  /** @deprecated Since NCIP-15, it doesn't care account activation. */
  activated: Scalars['Boolean']['output'];
  /** @deprecated Since NCIP-15, it doesn't care account activation. */
  addressActivated: Scalars['Boolean']['output'];
};


export type ActivationStatusQueryAddressActivatedArgs = {
  address: Scalars['Address']['input'];
};

export type AddressQuery = {
  __typename?: 'AddressQuery';
  /** currency minters address. */
  currencyMintersAddress?: Maybe<Array<Scalars['Address']['output']>>;
  /** pledge information address. */
  pledgeAddress: Scalars['Address']['output'];
  /** user information address by world boss season. */
  raiderAddress: Scalars['Address']['output'];
  /** raider list address by world boss season. */
  raiderListAddress: Scalars['Address']['output'];
  /** boss information address by world boss season. */
  worldBossAddress: Scalars['Address']['output'];
  /** user boss kill reward record address by world boss season. */
  worldBossKillRewardRecordAddress: Scalars['Address']['output'];
};


export type AddressQueryCurrencyMintersAddressArgs = {
  currency: CurrencyEnum;
};


export type AddressQueryPledgeAddressArgs = {
  agentAddress: Scalars['Address']['input'];
};


export type AddressQueryRaiderAddressArgs = {
  avatarAddress: Scalars['Address']['input'];
  raidId: Scalars['Int']['input'];
};


export type AddressQueryRaiderListAddressArgs = {
  raidId: Scalars['Int']['input'];
};


export type AddressQueryWorldBossAddressArgs = {
  raidId: Scalars['Int']['input'];
};


export type AddressQueryWorldBossKillRewardRecordAddressArgs = {
  avatarAddress: Scalars['Address']['input'];
  raidId: Scalars['Int']['input'];
};

export type AgentStateType = {
  __typename?: 'AgentStateType';
  /** Address of agent. */
  address: Scalars['Address']['output'];
  /** List of avatar. */
  avatarStates?: Maybe<Array<AvatarStateType>>;
  /** Current CRYSTAL. */
  crystal: Scalars['String']['output'];
  /** Current NCG. */
  gold: Scalars['String']['output'];
  hasTradedItem: Scalars['Boolean']['output'];
  /** Current monster collection level. */
  monsterCollectionLevel: Scalars['Long']['output'];
  /** Monster collection round of agent. */
  monsterCollectionRound: Scalars['Long']['output'];
  /** mead pledge information. */
  pledge: MeadPledgeType;
};

export type AppProtocolVersionType = {
  __typename?: 'AppProtocolVersionType';
  extra?: Maybe<Scalars['ByteString']['output']>;
  signature: Scalars['ByteString']['output'];
  signer: Scalars['Address']['output'];
  version: Scalars['Int']['output'];
};

export type ArenaInfoType = {
  __typename?: 'ArenaInfoType';
  active: Scalars['Boolean']['output'];
  agentAddress: Scalars['Address']['output'];
  arenaRecord: ArenaRecordType;
  avatarAddress: Scalars['Address']['output'];
  avatarName: Scalars['String']['output'];
  dailyChallengeCount: Scalars['Int']['output'];
  score: Scalars['Int']['output'];
};

export type ArenaInformationType = {
  __typename?: 'ArenaInformationType';
  address: Scalars['Address']['output'];
  avatarAddress: Scalars['Address']['output'];
  lose: Scalars['Int']['output'];
  purchasedTicketCount: Scalars['Int']['output'];
  score: Scalars['Int']['output'];
  ticket: Scalars['Int']['output'];
  ticketResetCount: Scalars['Int']['output'];
  win: Scalars['Int']['output'];
};

export type ArenaParticipantType = {
  __typename?: 'ArenaParticipantType';
  /** Address of avatar. */
  avatarAddr: Scalars['Address']['output'];
  /** Cp of avatar. */
  cp: Scalars['Int']['output'];
  /** Level of avatar. */
  level: Scalars['Int']['output'];
  /** Score for defeat. */
  loseScore: Scalars['Int']['output'];
  /** Name of avatar. */
  nameWithHash: Scalars['String']['output'];
  /** Portrait icon id. */
  portraitId: Scalars['Int']['output'];
  /** Arena rank of avatar. */
  rank: Scalars['Int']['output'];
  /** Arena score of avatar. */
  score: Scalars['Int']['output'];
  /** Score for victory. */
  winScore: Scalars['Int']['output'];
};

export type ArenaRecordType = {
  __typename?: 'ArenaRecordType';
  draw?: Maybe<Scalars['Int']['output']>;
  lose?: Maybe<Scalars['Int']['output']>;
  win?: Maybe<Scalars['Int']['output']>;
};

export type AvatarStateType = {
  __typename?: 'AvatarStateType';
  /** Current ActionPoint. */
  actionPoint: Scalars['Int']['output'];
  /** Address of avatar. */
  address: Scalars['Address']['output'];
  /** Address of agent. */
  agentAddress: Scalars['Address']['output'];
  /** Block index at the latest executed action. */
  blockIndex: Scalars['Int']['output'];
  /** Character ID from CharacterSheet. */
  characterId: Scalars['Int']['output'];
  /** Address list of combination slot. */
  combinationSlotAddresses: Array<Scalars['Address']['output']>;
  /** Combination slots. */
  combinationSlots: Array<CombinationSlotStateType>;
  /** Block index at the DailyReward execution. */
  dailyRewardReceivedIndex: Scalars['Long']['output'];
  /** Index of ear color. */
  ear: Scalars['Int']['output'];
  /** List of quest event ID. */
  eventMap: CollectionMapType;
  /** Avatar total EXP. */
  exp: Scalars['Int']['output'];
  /** Index of hair color. */
  hair: Scalars['Int']['output'];
  /** The index of this avatar state among its agent's avatar addresses. */
  index: Scalars['Int']['output'];
  /** Avatar inventory. */
  inventory: InventoryType;
  /** Avatar inventory address. */
  inventoryAddress: Scalars['Address']['output'];
  /** List of acquired item ID. */
  itemMap: CollectionMapType;
  /** Index of eye color. */
  lens: Scalars['Int']['output'];
  /** Avatar Level. */
  level: Scalars['Int']['output'];
  /** List of mail. */
  mailBox: MailBoxType;
  /** List of defeated monster ID. */
  monsterMap: CollectionMapType;
  /** Avatar name. */
  name: Scalars['String']['output'];
  /** List of quest. */
  questList: QuestListType;
  /** Rune list of avatar */
  runes: Array<RuneStateType>;
  /** List of cleared stage ID. */
  stageMap: CollectionMapType;
  /** Index of tail color. */
  tail: Scalars['Int']['output'];
  /** Block index at the latest executed action. */
  updatedAt: Scalars['Long']['output'];
  /** World & Stage information. */
  worldInformation: WorldInformationType;
};

export type BalanceInput = {
  /** Balance Address. */
  balanceAddr?: InputMaybe<Scalars['Address']['input']>;
  /** Fungible asset value ticker and amount. */
  value?: InputMaybe<SimplifyFungibleAssetValueInput>;
};

export type Block = {
  __typename?: 'Block';
  /**
   * The mining difficulty that the block's nonce has to satisfy.
   * @deprecated Block does not have Difficulty field in PBFT.
   */
  difficulty: Scalars['Long']['output'];
  /** Evidence belonging to the block. */
  evidence: Array<Evidence>;
  /** A block's hash. */
  hash: Scalars['ID']['output'];
  /** The height of the block. */
  index: Scalars['Long']['output'];
  /** The LastCommit of the block. */
  lastCommit?: Maybe<BlockCommit>;
  /** The address of the miner. */
  miner: Scalars['Address']['output'];
  /**
   * The proof-of-work nonce which satisfies the required difficulty.
   * @deprecated Block does not have Nonce field in PBFT.
   */
  nonce: Scalars['ByteString']['output'];
  /** The hash of PreEvaluationBlock. */
  preEvaluationHash: Scalars['ByteString']['output'];
  /** The previous block.  If it's a genesis block (i.e., its index is 0) this must be null. */
  previousBlock?: Maybe<Block>;
  /** The protocol version number of the block. */
  protocolVersion: Scalars['Int']['output'];
  /** The public key of the Miner. */
  publicKey?: Maybe<Scalars['PublicKey']['output']>;
  /** The digital signature of the whole block content (except for hash, which is derived from the signature and other contents) */
  signature?: Maybe<Scalars['ByteString']['output']>;
  /** The hash of the resulting states after evaluating transactions and a block action (if exists) */
  stateRootHash: Scalars['ByteString']['output'];
  timestamp: Scalars['DateTimeOffset']['output'];
  /**
   * The total mining difficulty since the genesis including the block's difficulty.
   * @deprecated Block does not have TotalDifficulty field in PBFT.
   */
  totalDifficulty: Scalars['BigInt']['output'];
  /** Transactions belonging to the block. */
  transactions: Array<Transaction>;
};

export type BlockCommit = {
  __typename?: 'BlockCommit';
  /** The hash of the block which contains block commit. */
  blockHash: Scalars['ID']['output'];
  /** The height of the block commit. */
  height: Scalars['Long']['output'];
  /** The round of the block commit. */
  round: Scalars['Int']['output'];
  /** Total votes of the block commit. */
  votes: Array<Vote>;
};

export type BlockHeader = {
  __typename?: 'BlockHeader';
  hash: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  index: Scalars['Int']['output'];
  miner?: Maybe<Scalars['Address']['output']>;
};

export type BlockQuery = {
  __typename?: 'BlockQuery';
  block?: Maybe<Block>;
  blocks: Array<Block>;
};


export type BlockQueryBlockArgs = {
  hash?: InputMaybe<Scalars['ID']['input']>;
  index?: InputMaybe<Scalars['ID']['input']>;
};


export type BlockQueryBlocksArgs = {
  desc?: Scalars['Boolean']['input'];
  excludeEmptyTxs?: Scalars['Boolean']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  miner?: InputMaybe<Scalars['Address']['input']>;
  offset?: Scalars['Int']['input'];
};

export type BoundPeer = {
  __typename?: 'BoundPeer';
  /** The endpoint of the peer. */
  endPoint: Scalars['String']['output'];
  /** The address of the miner. */
  publicIpAddress?: Maybe<Scalars['String']['output']>;
  /** The public key of the peer. */
  publicKey: Scalars['PublicKey']['output'];
};

export type ClaimDataInputType = {
  avatarAddress: Scalars['Address']['input'];
  fungibleAssetValues: Array<FungibleAssetValueInputType>;
};

export type CollectionMapType = {
  __typename?: 'CollectionMapType';
  count: Scalars['Int']['output'];
  pairs: Array<Array<Maybe<Scalars['Int']['output']>>>;
};

export type CombinationSlotStateType = {
  __typename?: 'CombinationSlotStateType';
  /** Address of combination slot. */
  address: Scalars['Address']['output'];
  /** Pet id used in equipment */
  petId?: Maybe<Scalars['Int']['output']>;
  /** Block index at the combination started. */
  startBlockIndex: Scalars['Long']['output'];
  /** Block index at the combination slot can be usable. */
  unlockBlockIndex: Scalars['Long']['output'];
  /** Stage id at the combination slot unlock. */
  unlockStage: Scalars['Int']['output'];
};

export type ConsumableType = {
  __typename?: 'ConsumableType';
  /** Item elemental. */
  elementalType: ElementalType;
  /** Grade from ItemSheet. */
  grade: Scalars['Int']['output'];
  /** ID from ItemSheet. */
  id: Scalars['Int']['output'];
  itemId: Scalars['Guid']['output'];
  /** Item subcategory. */
  itemSubType: ItemSubType;
  /** Item category. */
  itemType: ItemType;
  mainStat: StatType;
  requiredBlockIndex?: Maybe<Scalars['Long']['output']>;
};

export type CostumeType = {
  __typename?: 'CostumeType';
  /** Item elemental. */
  elementalType: ElementalType;
  /** Status of Avatar equipped. */
  equipped: Scalars['Boolean']['output'];
  /** Grade from ItemSheet. */
  grade: Scalars['Int']['output'];
  /** ID from ItemSheet. */
  id: Scalars['Int']['output'];
  /** Guid of costume. */
  itemId: Scalars['Guid']['output'];
  /** Item subcategory. */
  itemSubType: ItemSubType;
  /** Item category. */
  itemType: ItemType;
  requiredBlockIndex?: Maybe<Scalars['Long']['output']>;
};

export type CraftQuery = {
  __typename?: 'CraftQuery';
  eventConsumableItemCrafts: Scalars['ByteString']['output'];
  eventMaterialItemCrafts: Scalars['ByteString']['output'];
};


export type CraftQueryEventConsumableItemCraftsArgs = {
  avatarAddress: Scalars['Address']['input'];
  eventConsumableItemRecipeId: Scalars['Int']['input'];
  eventScheduleId: Scalars['Int']['input'];
  slotIndex: Scalars['Int']['input'];
};


export type CraftQueryEventMaterialItemCraftsArgs = {
  avatarAddress: Scalars['Address']['input'];
  eventMaterialItemRecipeId: Scalars['Int']['input'];
  eventScheduleId: Scalars['Int']['input'];
  materialsToUse: Array<MaterialsToUseInputType>;
};

export type CrystalMonsterCollectionMultiplierRowType = {
  __typename?: 'CrystalMonsterCollectionMultiplierRowType';
  level: Scalars['Int']['output'];
  multiplier: Scalars['Int']['output'];
};

export type CrystalMonsterCollectionMultiplierSheetType = {
  __typename?: 'CrystalMonsterCollectionMultiplierSheetType';
  orderedList: Array<CrystalMonsterCollectionMultiplierRowType>;
};

export type Currency = {
  __typename?: 'Currency';
  /** The number of digits to treat as minor units (i.e., exponents). */
  decimalPlaces: Scalars['Byte']['output'];
  /** The deterministic hash derived from other fields. */
  hash: Scalars['ByteString']['output'];
  /** The uppermost quantity of currency allowed to exist.  null means unlimited supply. */
  maximumSupply?: Maybe<FungibleAssetValue>;
  /** The addresses who can mint this currency.  If this is null anyone can mint the currency.  On the other hand, unlike null, an empty set means no one can mint the currency. */
  minters?: Maybe<Array<Scalars['Address']['output']>>;
  /** The ticker symbol, e.g., USD. */
  ticker: Scalars['String']['output'];
  /** Whether the total supply of this currency is trackable. */
  totalSupplyTrackable: Scalars['Boolean']['output'];
};

/** The currency type. */
export enum CurrencyEnum {
  Crystal = 'CRYSTAL',
  Garage = 'GARAGE',
  Mead = 'MEAD',
  Ncg = 'NCG'
}

export type CurrencyInput = {
  /** The number of digits to treat as minor units (i.e., exponents). */
  decimalPlaces: Scalars['Byte']['input'];
  maximumSupplyMajorUnit?: InputMaybe<Scalars['BigInt']['input']>;
  maximumSupplyMinorUnit?: InputMaybe<Scalars['BigInt']['input']>;
  /** The addresses who can mint this currency.  If this is null anyone can mint the currency.  On the other hand, unlike null, an empty set means no one can mint the currency. */
  minters?: InputMaybe<Array<Scalars['Address']['input']>>;
  /** The ticker symbol, e.g., USD. */
  ticker: Scalars['String']['input'];
  /** Whether the total supply of this currency is trackable. */
  totalSupplyTrackable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CurrencyType = {
  __typename?: 'CurrencyType';
  decimalPlaces: Scalars['Byte']['output'];
  minters?: Maybe<Array<Maybe<Scalars['Address']['output']>>>;
  ticker: Scalars['String']['output'];
};

export type DecimalStatType = {
  __typename?: 'DecimalStatType';
  additionalValue: Scalars['Decimal']['output'];
  baseValue: Scalars['Decimal']['output'];
  statType: StatType;
  totalValue: Scalars['Decimal']['output'];
};

export type Diff = RootStateDiff | StateDiff;

export type DifferentAppProtocolVersionEncounterType = {
  __typename?: 'DifferentAppProtocolVersionEncounterType';
  localVersion: AppProtocolVersionType;
  peer: Scalars['String']['output'];
  peerVersion: AppProtocolVersionType;
};

export enum ElementalType {
  Fire = 'FIRE',
  Land = 'LAND',
  Normal = 'NORMAL',
  Water = 'WATER',
  Wind = 'WIND'
}

export type EquipmentType = {
  __typename?: 'EquipmentType';
  buffSkills?: Maybe<Array<Maybe<SkillType>>>;
  /** Item elemental. */
  elementalType: ElementalType;
  equipped: Scalars['Boolean']['output'];
  exp: Scalars['Int']['output'];
  /** Grade from ItemSheet. */
  grade: Scalars['Int']['output'];
  /** ID from ItemSheet. */
  id: Scalars['Int']['output'];
  itemId: Scalars['Guid']['output'];
  /** Item subcategory. */
  itemSubType: ItemSubType;
  /** Item category. */
  itemType: ItemType;
  level: Scalars['Int']['output'];
  requiredBlockIndex?: Maybe<Scalars['Long']['output']>;
  setId: Scalars['Int']['output'];
  skills?: Maybe<Array<Maybe<SkillType>>>;
  stat: DecimalStatType;
  statsMap: StatsMapType;
};

export type Evidence = {
  __typename?: 'Evidence';
  /** Indicates the block height that infraction has been occurred. */
  height: Scalars['Long']['output'];
  /** A unique identifier derived from this Evidence content */
  id: Scalars['ID']['output'];
  /** Indicates the address of the target that caused the infraction. */
  targetAddress: Scalars['Address']['output'];
  /** Indicates the timestamp the infraction occurred. */
  timestamp: Scalars['DateTimeOffset']['output'];
  /** Evidence type. */
  type: Scalars['String']['output'];
};

/** Retrieve evidence information. */
export type EvidenceQuery = {
  __typename?: 'EvidenceQuery';
  committedEvidence: Array<Evidence>;
  evidence?: Maybe<Evidence>;
  pendingEvidence: Array<Evidence>;
};


/** Retrieve evidence information. */
export type EvidenceQueryCommittedEvidenceArgs = {
  blockHash?: InputMaybe<Scalars['BlockHash']['input']>;
  desc?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


/** Retrieve evidence information. */
export type EvidenceQueryEvidenceArgs = {
  id?: InputMaybe<Scalars['EvidenceId']['input']>;
};


/** Retrieve evidence information. */
export type EvidenceQueryPendingEvidenceArgs = {
  desc?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type ExplorerQuery = {
  __typename?: 'ExplorerQuery';
  blockQuery?: Maybe<BlockQuery>;
  evidenceQuery?: Maybe<EvidenceQuery>;
  helperQuery?: Maybe<HelperQuery>;
  nodeState: NodeState;
  rawStateQuery?: Maybe<RawStateQuery>;
  stateQuery?: Maybe<LibplanetStateQuery>;
  transactionQuery?: Maybe<TransactionQuery>;
};

/** Holds a fungible asset value which holds its currency together. */
export type FungibleAssetValue = {
  __typename?: 'FungibleAssetValue';
  /** The currency of the fungible asset. */
  currency: Currency;
  majorUnit: Scalars['BigInt']['output'];
  minorUnit: Scalars['BigInt']['output'];
  /** The value quantity without its currency in string, e.g., "123.45". */
  quantity: Scalars['String']['output'];
  /** Gets a number that indicates the sign (-1: negative, 1: positive, or 0: zero) of the value. */
  sign: Scalars['Int']['output'];
  /** The value quantity with its currency in string, e.g., "123.45 ABC". */
  string: Scalars['String']['output'];
};

export type FungibleAssetValueInputType = {
  decimalPlaces: Scalars['Byte']['input'];
  minters?: InputMaybe<Array<Scalars['Address']['input']>>;
  quantity: Scalars['BigInt']['input'];
  ticker: Scalars['String']['input'];
};

export type FungibleAssetValueType = {
  __typename?: 'FungibleAssetValueType';
  currency: Scalars['String']['output'];
  quantity: Scalars['String']['output'];
};

export type FungibleAssetValueWithCurrencyType = {
  __typename?: 'FungibleAssetValueWithCurrencyType';
  currency: CurrencyType;
  quantity: Scalars['String']['output'];
};


export type FungibleAssetValueWithCurrencyTypeQuantityArgs = {
  minerUnit?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FungibleIdAndCountInput = {
  /** Count */
  count: Scalars['Int']['input'];
  /** Fungible ID */
  fungibleId: Scalars['String']['input'];
};

export type FungibleItemGarageWithAddressType = {
  __typename?: 'FungibleItemGarageWithAddressType';
  addr?: Maybe<Scalars['Address']['output']>;
  count?: Maybe<Scalars['Int']['output']>;
  fungibleItemId?: Maybe<Scalars['String']['output']>;
  item?: Maybe<FungibleItemType>;
};

export type FungibleItemType = {
  __typename?: 'FungibleItemType';
  fungibleItemId: Scalars['String']['output'];
  /** Item sub category. */
  itemSubType: ItemSubType;
  /** Item category. */
  itemType: ItemType;
};

export type GaragesType = {
  __typename?: 'GaragesType';
  agentAddr?: Maybe<Scalars['Address']['output']>;
  fungibleItemGarages?: Maybe<Array<Maybe<FungibleItemGarageWithAddressType>>>;
  garageBalances?: Maybe<Array<Maybe<FungibleAssetValue>>>;
  garageBalancesAddr?: Maybe<Scalars['Address']['output']>;
};

/** A number of queries for convenience. */
export type HelperQuery = {
  __typename?: 'HelperQuery';
  /** Decodes hex encoded bencodex value */
  bencodexValue: IValue;
  /** Converts currency info to currency hash. */
  currencyHash: Scalars['HashDigestSHA1']['output'];
  /** Converts string to key hex representation */
  keyHex: Scalars['KeyBytes']['output'];
};


/** A number of queries for convenience. */
export type HelperQueryBencodexValueArgs = {
  hex: Scalars['String']['input'];
};


/** A number of queries for convenience. */
export type HelperQueryCurrencyHashArgs = {
  currency: CurrencyInput;
};


/** A number of queries for convenience. */
export type HelperQueryKeyHexArgs = {
  value: Scalars['String']['input'];
};

export type IValue = {
  __typename?: 'IValue';
  /** A base64 representation of the bencodex value encoded to byte array. */
  base64: Scalars['String']['output'];
  /** A hexadecimal representation of the bencodex value encoded as byte array. */
  hex: Scalars['String']['output'];
  /** A human readable representation of the bencodex value. */
  inspection: Scalars['String']['output'];
  /** A JSON representation of the bencodex value */
  json: Scalars['String']['output'];
};

export type InventoryItemType = {
  __typename?: 'InventoryItemType';
  /** A count of item */
  count: Scalars['Int']['output'];
  fungibleItemId?: Maybe<Scalars['String']['output']>;
  /** An Id of item */
  id: Scalars['Int']['output'];
  /** An ItemType of item */
  itemType: ItemType;
  lockId?: Maybe<Scalars['Guid']['output']>;
  locked: Scalars['Boolean']['output'];
  tradableId?: Maybe<Scalars['Guid']['output']>;
};

export type InventoryType = {
  __typename?: 'InventoryType';
  /** List of Consumables. */
  consumables: Array<ConsumableType>;
  /** List of Costumes. */
  costumes: Array<CostumeType>;
  /** List of Equipments. */
  equipments: Array<EquipmentType>;
  /** List of Inventory Item. */
  items: Array<InventoryItemType>;
  /** List of Materials. */
  materials: Array<MaterialType>;
};


export type InventoryTypeEquipmentsArgs = {
  equipped?: InputMaybe<Scalars['Boolean']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  itemIds?: InputMaybe<Array<Scalars['Guid']['input']>>;
  itemSubType?: InputMaybe<ItemSubType>;
};


export type InventoryTypeItemsArgs = {
  inventoryItemId?: InputMaybe<Scalars['Int']['input']>;
  locked?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum ItemSubType {
  ApStone = 'AP_STONE',
  Armor = 'ARMOR',
  Aura = 'AURA',
  Belt = 'BELT',
  /** @deprecated ItemSubType.Chest has never been used outside the MaterialItemSheet. And we won't use it in the future until we have a specific reason. */
  Chest = 'CHEST',
  EarCostume = 'EAR_COSTUME',
  EquipmentMaterial = 'EQUIPMENT_MATERIAL',
  EyeCostume = 'EYE_COSTUME',
  Food = 'FOOD',
  FoodMaterial = 'FOOD_MATERIAL',
  FullCostume = 'FULL_COSTUME',
  Grimoire = 'GRIMOIRE',
  HairCostume = 'HAIR_COSTUME',
  Hourglass = 'HOURGLASS',
  MonsterPart = 'MONSTER_PART',
  Necklace = 'NECKLACE',
  NormalMaterial = 'NORMAL_MATERIAL',
  Ring = 'RING',
  TailCostume = 'TAIL_COSTUME',
  Title = 'TITLE',
  Weapon = 'WEAPON'
}

export enum ItemType {
  Consumable = 'CONSUMABLE',
  Costume = 'COSTUME',
  Equipment = 'EQUIPMENT',
  Material = 'MATERIAL'
}

export type ItemUsableType = {
  __typename?: 'ItemUsableType';
  /** Item elemental. */
  elementalType: ElementalType;
  /** Grade from ItemSheet. */
  grade: Scalars['Int']['output'];
  /** ID from ItemSheet. */
  id: Scalars['Int']['output'];
  /** Guid of item. */
  itemId: Scalars['Guid']['output'];
  /** Item subcategory. */
  itemSubType: ItemSubType;
  /** Item category. */
  itemType: ItemType;
  requiredBlockIndex?: Maybe<Scalars['Long']['output']>;
};

export type KeyStoreMutation = {
  __typename?: 'KeyStoreMutation';
  createPrivateKey: PrivateKeyType;
  revokePrivateKey: ProtectedPrivateKeyType;
};


export type KeyStoreMutationCreatePrivateKeyArgs = {
  passphrase: Scalars['String']['input'];
  privateKey?: InputMaybe<Scalars['ByteString']['input']>;
};


export type KeyStoreMutationRevokePrivateKeyArgs = {
  address: Scalars['Address']['input'];
};

export type KeyStoreType = {
  __typename?: 'KeyStoreType';
  decryptedPrivateKey: Scalars['ByteString']['output'];
  /** An API to provide conversion to public-key, address. */
  privateKey: PrivateKeyType;
  protectedPrivateKeys: Array<ProtectedPrivateKeyType>;
};


export type KeyStoreTypeDecryptedPrivateKeyArgs = {
  address: Scalars['Address']['input'];
  passphrase: Scalars['String']['input'];
};


export type KeyStoreTypePrivateKeyArgs = {
  hex: Scalars['ByteString']['input'];
};

export type LibplanetStateQuery = {
  __typename?: 'LibplanetStateQuery';
  /** Retrieves balance from the legacy account. */
  balance: FungibleAssetValue;
  /** Retrieves states from the legacy account. */
  states: Array<Maybe<Scalars['BencodexValue']['output']>>;
  /** Retrieves total supply from the legacy account. */
  totalSupply?: Maybe<FungibleAssetValue>;
  /** Retrieves validator set from the legacy account. */
  validators?: Maybe<Array<Validator>>;
  world: WorldState;
};


export type LibplanetStateQueryBalanceArgs = {
  currency: CurrencyInput;
  offsetBlockHash?: InputMaybe<Scalars['ID']['input']>;
  offsetStateRootHash?: InputMaybe<Scalars['HashDigest_SHA256']['input']>;
  owner: Scalars['Address']['input'];
};


export type LibplanetStateQueryStatesArgs = {
  addresses: Array<Scalars['Address']['input']>;
  offsetBlockHash?: InputMaybe<Scalars['ID']['input']>;
  offsetStateRootHash?: InputMaybe<Scalars['HashDigest_SHA256']['input']>;
};


export type LibplanetStateQueryTotalSupplyArgs = {
  currency: CurrencyInput;
  offsetBlockHash?: InputMaybe<Scalars['ID']['input']>;
  offsetStateRootHash?: InputMaybe<Scalars['HashDigest_SHA256']['input']>;
};


export type LibplanetStateQueryValidatorsArgs = {
  offsetBlockHash?: InputMaybe<Scalars['ID']['input']>;
  offsetStateRootHash?: InputMaybe<Scalars['HashDigest_SHA256']['input']>;
};


export type LibplanetStateQueryWorldArgs = {
  blockHash?: InputMaybe<Scalars['BlockHash']['input']>;
  stateRootHash?: InputMaybe<Scalars['HashDigestSHA256']['input']>;
};

export type MailBoxType = {
  __typename?: 'MailBoxType';
  count: Scalars['Int']['output'];
  mails: Array<MailType>;
};

export type MailType = {
  __typename?: 'MailType';
  blockIndex: Scalars['Long']['output'];
  id: Scalars['Guid']['output'];
  requiredBlockIndex: Scalars['Long']['output'];
};

export type MaterialType = {
  __typename?: 'MaterialType';
  /** Item elemental. */
  elementalType: ElementalType;
  /** Grade from ItemSheet. */
  grade: Scalars['Int']['output'];
  /** ID from ItemSheet. */
  id: Scalars['Int']['output'];
  itemId: Scalars['ByteString']['output'];
  /** Item subcategory. */
  itemSubType: ItemSubType;
  /** Item category. */
  itemType: ItemType;
  requiredBlockIndex?: Maybe<Scalars['Long']['output']>;
};

export type MaterialsToUseInputType = {
  /** Material ID to be used. */
  materialId: Scalars['Int']['input'];
  /** Item quantity to be used. */
  quantity: Scalars['Int']['input'];
};

export type MeadPledgeType = {
  __typename?: 'MeadPledgeType';
  approved: Scalars['Boolean']['output'];
  mead: Scalars['Int']['output'];
  patronAddress?: Maybe<Scalars['Address']['output']>;
};

export type MonsterCollectionRewardInfoType = {
  __typename?: 'MonsterCollectionRewardInfoType';
  itemId: Scalars['Int']['output'];
  quantity: Scalars['Int']['output'];
};

export type MonsterCollectionRowType = {
  __typename?: 'MonsterCollectionRowType';
  level: Scalars['Int']['output'];
  requiredGold: Scalars['Int']['output'];
  rewards: Array<Maybe<MonsterCollectionRewardInfoType>>;
};

export type MonsterCollectionSheetType = {
  __typename?: 'MonsterCollectionSheetType';
  orderedList?: Maybe<Array<Maybe<MonsterCollectionRowType>>>;
};

export type MonsterCollectionStateType = {
  __typename?: 'MonsterCollectionStateType';
  address: Scalars['Address']['output'];
  claimableBlockIndex: Scalars['Long']['output'];
  expiredBlockIndex: Scalars['Long']['output'];
  level: Scalars['Long']['output'];
  receivedBlockIndex: Scalars['Long']['output'];
  rewardLevel: Scalars['Long']['output'];
  startedBlockIndex: Scalars['Long']['output'];
};

export type MonsterCollectionStatusType = {
  __typename?: 'MonsterCollectionStatusType';
  fungibleAssetValue: FungibleAssetValueType;
  lockup: Scalars['Boolean']['output'];
  rewardInfos?: Maybe<Array<Maybe<MonsterCollectionRewardInfoType>>>;
  tipIndex: Scalars['Long']['output'];
};

export type MultiAccountInfo = {
  __typename?: 'MultiAccountInfo';
  agents?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  agentsCount?: Maybe<Scalars['Int']['output']>;
  ips?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ipsCount?: Maybe<Scalars['Int']['output']>;
  key: Scalars['String']['output'];
};

export type NodeExceptionType = {
  __typename?: 'NodeExceptionType';
  /** The code of NodeException. */
  code: Scalars['Int']['output'];
  /** The message of NodeException. */
  message: Scalars['String']['output'];
};

export type NodeState = {
  __typename?: 'NodeState';
  peers: Array<BoundPeer>;
  preloaded: Scalars['Boolean']['output'];
  validators: Array<BoundPeer>;
};

export type NodeStatusType = {
  __typename?: 'NodeStatusType';
  appProtocolVersion?: Maybe<AppProtocolVersionType>;
  /** Whether the current libplanet node has ended bootstrapping. */
  bootstrapEnded: Scalars['Boolean']['output'];
  /** Block header of the genesis block from the current chain. */
  genesis: BlockHeader;
  /** A informational version (a.k.a. version suffix) of NineChronicles.Headless */
  informationalVersion?: Maybe<Scalars['String']['output']>;
  /** Whether the current node is mining. */
  isMining: Scalars['Boolean']['output'];
  /** Whether the current libplanet node has ended preloading. */
  preloadEnded: Scalars['Boolean']['output'];
  /** A version of NineChronicles.Headless */
  productVersion?: Maybe<Scalars['String']['output']>;
  /** Ids of staged transactions from the current node. */
  stagedTxIds?: Maybe<Array<Maybe<Scalars['TxId']['output']>>>;
  /** The number of ids of staged transactions from the current node. */
  stagedTxIdsCount?: Maybe<Scalars['Int']['output']>;
  /** A list of subscribers' address */
  subscriberAddresses?: Maybe<Array<Maybe<Scalars['Address']['output']>>>;
  /** The number of a list of subscribers' address */
  subscriberAddressesCount?: Maybe<Scalars['Int']['output']>;
  /** Block header of the tip block from the current canonical chain. */
  tip: BlockHeader;
  /** The topmost blocks from the current node. */
  topmostBlocks: Array<Maybe<BlockHeader>>;
};


export type NodeStatusTypeStagedTxIdsArgs = {
  address?: InputMaybe<Scalars['Address']['input']>;
};


export type NodeStatusTypeTopmostBlocksArgs = {
  limit: Scalars['Int']['input'];
  miner?: InputMaybe<Scalars['Address']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export enum NotificationEnum {
  Buyer = 'BUYER',
  CombinationConsumable = 'COMBINATION_CONSUMABLE',
  CombinationEquipment = 'COMBINATION_EQUIPMENT',
  Has = 'HAS',
  Refill = 'REFILL',
  Seller = 'SELLER'
}

export type NotificationType = {
  __typename?: 'NotificationType';
  /** The message of Notification. */
  message?: Maybe<Scalars['String']['output']>;
  /** The type of Notification. */
  type: NotificationEnum;
};

export type OrderDigestListStateType = {
  __typename?: 'OrderDigestListStateType';
  address?: Maybe<Scalars['Address']['output']>;
  orderDigestList: Array<Maybe<OrderDigestType>>;
};

export type OrderDigestType = {
  __typename?: 'OrderDigestType';
  combatPoint: Scalars['Int']['output'];
  /** Block index order expired. */
  expiredBlockIndex: Scalars['Int']['output'];
  /** Count of item. */
  itemCount: Scalars['Int']['output'];
  /** Id of item. */
  itemId: Scalars['Int']['output'];
  level: Scalars['Int']['output'];
  /** Guid of order. */
  orderId: Scalars['Guid']['output'];
  /** Order price. */
  price: Scalars['String']['output'];
  /** Address of seller agent. */
  sellerAgentAddress: Scalars['Address']['output'];
  /** Block index order started. */
  startedBlockIndex: Scalars['Int']['output'];
  /** Tradable guid of order. */
  tradableId: Scalars['Guid']['output'];
};

export type PeerChainStateQuery = {
  __typename?: 'PeerChainStateQuery';
  /** Summary of other peers connected to this node. It consists of address, chain height, and total difficulty. */
  state: Array<Maybe<Scalars['String']['output']>>;
};

export type PreloadStateExtraType = {
  __typename?: 'PreloadStateExtraType';
  currentCount: Scalars['Long']['output'];
  totalCount: Scalars['Long']['output'];
  type: Scalars['String']['output'];
};

export type PreloadStateType = {
  __typename?: 'PreloadStateType';
  currentPhase: Scalars['Long']['output'];
  extra: PreloadStateExtraType;
  totalPhase: Scalars['Long']['output'];
};

export type PrivateKeyType = {
  __typename?: 'PrivateKeyType';
  /** A representation of private-key with hexadecimal format. */
  hex: Scalars['ByteString']['output'];
  /** A public-key derived from the private-key. */
  publicKey: PublicKeyType;
};

export type ProtectedPrivateKeyType = {
  __typename?: 'ProtectedPrivateKeyType';
  address: Scalars['Address']['output'];
};

export type PublicKeyType = {
  __typename?: 'PublicKeyType';
  /** An address derived from the public-key. */
  address: Scalars['Address']['output'];
  /** A representation of public-key with hexadecimal format. */
  hex: Scalars['ByteString']['output'];
};


export type PublicKeyTypeHexArgs = {
  compress?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QuestListType = {
  __typename?: 'QuestListType';
  completedQuestIds: Array<Scalars['Int']['output']>;
};

export type RaiderStateType = {
  __typename?: 'RaiderStateType';
  /** address of avatar state. */
  avatarAddress: Scalars['Address']['output'];
  /** name of avatar state. */
  avatarName: Scalars['String']['output'];
  /** rank reward claimed block index. */
  claimedBlockIndex: Scalars['Long']['output'];
  /** combat point of avatar state. */
  cp: Scalars['Int']['output'];
  /** season high score. */
  highScore: Scalars['Int']['output'];
  /** icon id for ranking portrait. */
  iconId: Scalars['Int']['output'];
  /** latest challenge boss level. */
  latestBossLevel: Scalars['Int']['output'];
  /** latest reward claimed season rank. */
  latestRewardRank: Scalars['Int']['output'];
  /** level of avatar state. */
  level: Scalars['Int']['output'];
  /** challenge ticket purchase count. */
  purchaseCount: Scalars['Int']['output'];
  /** ticket refilled block index. */
  refillBlockIndex: Scalars['Long']['output'];
  /** remain challenge count before refill. */
  remainChallengeCount: Scalars['Int']['output'];
  /** season total challenge count. */
  totalChallengeCount: Scalars['Int']['output'];
  /** season total score. */
  totalScore: Scalars['Int']['output'];
};

export type RankingInfoType = {
  __typename?: 'RankingInfoType';
  /** Address of agent. */
  agentAddress: Scalars['Address']['output'];
  /** Equipped Armor ID from EquipmentItemSheet. */
  armorId: Scalars['Int']['output'];
  /** Address of avatar. */
  avatarAddress: Scalars['Address']['output'];
  /** Avatar name. */
  avatarName: Scalars['String']['output'];
  /** Avatar total EXP. */
  exp: Scalars['Long']['output'];
  /** Avatar Level. */
  level: Scalars['Int']['output'];
  /** Block index at Latest stage cleared. */
  stageClearedBlockIndex: Scalars['Long']['output'];
  /** Block index at RankingInfo update. */
  updatedAt: Scalars['Long']['output'];
};

export type RankingMapStateType = {
  __typename?: 'RankingMapStateType';
  /** Address of RankingMapState. */
  address: Scalars['Address']['output'];
  /** RankingMapState Capacity. */
  capacity: Scalars['Int']['output'];
  /** List of RankingInfo. */
  rankingInfos: Array<RankingInfoType>;
};

export type RawStateQuery = {
  __typename?: 'RawStateQuery';
  /** Retrieves trie from given state root hash. */
  trie: Trie;
};


export type RawStateQueryTrieArgs = {
  stateRootHash?: InputMaybe<Scalars['HashDigest_SHA256']['input']>;
};

export type RecipientsInputType = {
  amount: FungibleAssetValueInputType;
  recipient: Scalars['Address']['input'];
};

export type RootStateDiff = {
  __typename?: 'RootStateDiff';
  /** List of state differences under this root. */
  diffs: Array<StateDiff>;
  /** The path to the root state difference. */
  path: Scalars['String']['output'];
};

export type RpcInformationQuery = {
  __typename?: 'RpcInformationQuery';
  /** List of address connected to this node. */
  clients: Array<Maybe<Scalars['Address']['output']>>;
  /** clients connected to this node by device. */
  clientsByDevice: Array<Scalars['Address']['output']>;
  /** clients connected to this node grouped by Ip addresses. */
  clientsByIps: Array<Maybe<MultiAccountInfo>>;
  /** clients count connected to this node grouped by Ip addresses. */
  clientsCountByIps: Scalars['Int']['output'];
  /** total count by connected to this node. */
  totalCount: Scalars['Int']['output'];
  /** total count by connected to this node. */
  totalCountByDevice: Scalars['Int']['output'];
};


export type RpcInformationQueryClientsByDeviceArgs = {
  device: Scalars['String']['input'];
};


export type RpcInformationQueryClientsByIpsArgs = {
  minimum: Scalars['Int']['input'];
};


export type RpcInformationQueryClientsCountByIpsArgs = {
  minimum: Scalars['Int']['input'];
};


export type RpcInformationQueryTotalCountByDeviceArgs = {
  device: Scalars['String']['input'];
};

export type RuneSlotInfoInputType = {
  runeId: Scalars['Int']['input'];
  slotIndex: Scalars['Int']['input'];
};

export type RuneStateType = {
  __typename?: 'RuneStateType';
  /** Level of this rune. */
  level: Scalars['Int']['output'];
  /** ID of rune. */
  runeId: Scalars['Int']['output'];
};

export type ShardedShopStateV2Type = {
  __typename?: 'ShardedShopStateV2Type';
  /** Address of sharded shop. */
  address: Scalars['Address']['output'];
  /** List of OrderDigest. */
  orderDigestList: Array<Maybe<OrderDigestType>>;
};


export type ShardedShopStateV2TypeOrderDigestListArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  maximumPrice?: InputMaybe<Scalars['Int']['input']>;
};

export type ShopItemType = {
  __typename?: 'ShopItemType';
  /** Costume information. */
  costume?: Maybe<CostumeType>;
  /** Equipment / Consumable information. */
  itemUsable?: Maybe<ItemUsableType>;
  /** Item price. */
  price: Scalars['String']['output'];
  /** Guid of product registered. */
  productId: Scalars['Guid']['output'];
  /** Address of seller agent. */
  sellerAgentAddress: Scalars['Address']['output'];
  /** Address of seller avatar. */
  sellerAvatarAddress: Scalars['Address']['output'];
};

export type ShopStateType = {
  __typename?: 'ShopStateType';
  /** Address of shop. */
  address: Scalars['Address']['output'];
  /** List of ShopItem. */
  products: Array<Maybe<ShopItemType>>;
};


export type ShopStateTypeProductsArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  itemSubType?: InputMaybe<ItemSubType>;
  maximumPrice?: InputMaybe<Scalars['Int']['input']>;
};

/** A fungible asset value ticker and amount.You can specify either currencyEnum or currencyTicker. */
export type SimplifyFungibleAssetValueInput = {
  /** A currency type to be loaded. */
  currencyEnum?: InputMaybe<CurrencyEnum>;
  /** A currency ticker to be loaded. */
  currencyTicker?: InputMaybe<Scalars['String']['input']>;
  /** A numeric string to parse.  Can consist of digits, plus (+), minus (-), and decimal separator (.). <see cref="FungibleAssetValue.Parse(Currency, string)" /> */
  value: Scalars['String']['input'];
};

export type SkillType = {
  __typename?: 'SkillType';
  chance: Scalars['Int']['output'];
  elementalType: ElementalType;
  id: Scalars['Int']['output'];
  power: Scalars['Int']['output'];
  referencedStatType: StatType;
  statPowerRatio: Scalars['Int']['output'];
};

export type StakeAchievementsType = {
  __typename?: 'StakeAchievementsType';
  /** The address of current state. */
  achievementsByLevel: Scalars['Int']['output'];
};


export type StakeAchievementsTypeAchievementsByLevelArgs = {
  level: Scalars['Int']['input'];
};

export type StakeRegularFixedRewardInfoType = {
  __typename?: 'StakeRegularFixedRewardInfoType';
  count: Scalars['Int']['output'];
  itemId: Scalars['Int']['output'];
};

export type StakeRegularRewardInfoType = {
  __typename?: 'StakeRegularRewardInfoType';
  currencyDecimalPlaces?: Maybe<Scalars['Int']['output']>;
  currencyTicker?: Maybe<Scalars['String']['output']>;
  decimalRate: Scalars['Decimal']['output'];
  itemId: Scalars['Int']['output'];
  rate: Scalars['Int']['output'];
  type: StakeRewardType;
};

export type StakeRegularRewardsType = {
  __typename?: 'StakeRegularRewardsType';
  bonusRewards: Array<StakeRegularFixedRewardInfoType>;
  level: Scalars['Int']['output'];
  requiredGold: Scalars['Long']['output'];
  rewards: Array<StakeRegularRewardInfoType>;
};

export enum StakeRewardType {
  Currency = 'CURRENCY',
  Item = 'ITEM',
  Rune = 'RUNE'
}

export type StakeRewardsType = {
  __typename?: 'StakeRewardsType';
  orderedList: Array<StakeRegularRewardsType>;
};

export type StakeStateType = {
  __typename?: 'StakeStateType';
  /**
   * The staking achievements.
   * @deprecated Since StakeStateV2, the achievement became removed.
   */
  achievements?: Maybe<StakeAchievementsType>;
  /** The address of current state. */
  address: Scalars['Address']['output'];
  /** The block index the user can cancel the staking. */
  cancellableBlockIndex: Scalars['Long']['output'];
  /** The block index the user can claim rewards. */
  claimableBlockIndex: Scalars['Long']['output'];
  /** The staked amount. */
  deposit: Scalars['String']['output'];
  /** The block index the user received rewards. */
  receivedBlockIndex: Scalars['Long']['output'];
  stakeRewards: StakeRewardsType;
  /** The block index the user started to stake. */
  startedBlockIndex: Scalars['Long']['output'];
};

export type StandaloneMutation = {
  __typename?: 'StandaloneMutation';
  action?: Maybe<ActionMutation>;
  /** @deprecated Since NCIP-15, it doesn't care account activation. */
  activationStatus?: Maybe<ActivationStatusMutation>;
  /** @deprecated Use `planet key` command instead.  https://www.npmjs.com/package/@planetarium/cli */
  keyStore?: Maybe<KeyStoreMutation>;
  /** Add a new transaction to staging and return TxId */
  stageTransaction: Scalars['TxId']['output'];
  /** Add a new transaction to staging */
  stageTx: Scalars['Boolean']['output'];
  /**
   * Add a new transaction to staging and return TxId
   * @deprecated API update with action query. use stageTransaction mutation
   */
  stageTxV2: Scalars['TxId']['output'];
  transfer?: Maybe<Scalars['TxId']['output']>;
  /** @deprecated Incorrect remittance may occur when using transferGold() to the same address consecutively. Use transfer() instead. */
  transferGold?: Maybe<Scalars['TxId']['output']>;
};


export type StandaloneMutationStageTransactionArgs = {
  payload: Scalars['String']['input'];
};


export type StandaloneMutationStageTxArgs = {
  payload: Scalars['String']['input'];
};


export type StandaloneMutationStageTxV2Args = {
  payload: Scalars['String']['input'];
};


export type StandaloneMutationTransferArgs = {
  amount: Scalars['String']['input'];
  currencyAddress?: Scalars['String']['input'];
  memo?: InputMaybe<Scalars['String']['input']>;
  recipient: Scalars['Address']['input'];
  txNonce: Scalars['Long']['input'];
};


export type StandaloneMutationTransferGoldArgs = {
  amount: Scalars['String']['input'];
  recipient: Scalars['Address']['input'];
};

export type StandaloneQuery = {
  __typename?: 'StandaloneQuery';
  /** Query to create action transaction. */
  actionQuery: ActionQuery;
  actionTxQuery: ActionTxQuery;
  /** @deprecated Since NCIP-15, it doesn't care account activation. */
  activated: Scalars['Boolean']['output'];
  /** @deprecated Since NCIP-15, it doesn't care account activation. */
  activationKeyNonce: Scalars['String']['output'];
  /**
   * Check if the provided address is activated.
   * @deprecated Since NCIP-15, it doesn't care account activation.
   */
  activationStatus: ActivationStatusQuery;
  /** Query to get derived address. */
  addressQuery: AddressQuery;
  /** @deprecated Use /graphql/explorer */
  chainQuery: ExplorerQuery;
  /** This field allows you to query the diffs between two blocks. `baseIndex` is the reference block index, and changedIndex is the block index from which to check what changes have occurred relative to `baseIndex`. Both indices must not be higher than the current block on the chain nor lower than the genesis block index (0). The difference between the two blocks must be greater than zero for a valid comparison and less than ten for performance reasons. */
  diffs: Array<Diff>;
  /** @deprecated The root query is not the best place for getTx so it was moved. Use transaction.getTx() */
  getTx?: Maybe<TransactionType>;
  goldBalance: Scalars['String']['output'];
  /** @deprecated Use `planet key` command instead.  https://www.npmjs.com/package/@planetarium/cli */
  keyStore?: Maybe<KeyStoreType>;
  /** Address of current node. */
  minerAddress?: Maybe<Scalars['Address']['output']>;
  /** Get monster collection status by address. */
  monsterCollectionStatus?: Maybe<MonsterCollectionStatusType>;
  /** @deprecated The root query is not the best place for nextTxNonce so it was moved. Use transaction.nextTxNonce() */
  nextTxNonce: Scalars['Long']['output'];
  nodeStatus: NodeStatusType;
  /** Get the peer's block chain state */
  peerChainState: PeerChainStateQuery;
  /** Query for rpc mode information. */
  rpcInformation: RpcInformationQuery;
  state?: Maybe<Scalars['ByteString']['output']>;
  stateQuery: StateQuery;
  /** Query for transaction. */
  transaction: TransactionHeadlessQuery;
  transferNCGHistories: Array<TransferNcgHistoryType>;
  /** The validation method provider for Libplanet types. */
  validation: ValidationQuery;
};


export type StandaloneQueryActionTxQueryArgs = {
  maxGasPrice?: InputMaybe<FungibleAssetValueInputType>;
  nonce?: InputMaybe<Scalars['Long']['input']>;
  publicKey: Scalars['String']['input'];
  timestamp?: InputMaybe<Scalars['DateTimeOffset']['input']>;
};


export type StandaloneQueryActivatedArgs = {
  invitationCode: Scalars['String']['input'];
};


export type StandaloneQueryActivationKeyNonceArgs = {
  invitationCode: Scalars['String']['input'];
};


export type StandaloneQueryDiffsArgs = {
  baseIndex: Scalars['Long']['input'];
  changedIndex: Scalars['Long']['input'];
};


export type StandaloneQueryGetTxArgs = {
  txId: Scalars['TxId']['input'];
};


export type StandaloneQueryGoldBalanceArgs = {
  address: Scalars['Address']['input'];
  hash?: InputMaybe<Scalars['ByteString']['input']>;
};


export type StandaloneQueryMonsterCollectionStatusArgs = {
  address?: InputMaybe<Scalars['Address']['input']>;
};


export type StandaloneQueryNextTxNonceArgs = {
  address: Scalars['Address']['input'];
};


export type StandaloneQueryStateArgs = {
  accountAddress: Scalars['Address']['input'];
  address: Scalars['Address']['input'];
  hash?: InputMaybe<Scalars['ByteString']['input']>;
  index?: InputMaybe<Scalars['Long']['input']>;
};


export type StandaloneQueryStateQueryArgs = {
  hash?: InputMaybe<Scalars['ByteString']['input']>;
  index?: InputMaybe<Scalars['Long']['input']>;
};


export type StandaloneQueryTransferNcgHistoriesArgs = {
  blockHash: Scalars['ByteString']['input'];
  recipient?: InputMaybe<Scalars['Address']['input']>;
};

export type StandaloneSubscription = {
  __typename?: 'StandaloneSubscription';
  balanceByAgent: Scalars['String']['output'];
  differentAppProtocolVersionEncounter: DifferentAppProtocolVersionEncounterType;
  nodeException: NodeExceptionType;
  nodeStatus?: Maybe<NodeStatusType>;
  notification: NotificationType;
  preloadProgress?: Maybe<PreloadStateType>;
  tipChanged?: Maybe<TipChanged>;
  tx?: Maybe<TxType>;
};


export type StandaloneSubscriptionBalanceByAgentArgs = {
  address: Scalars['Address']['input'];
};


export type StandaloneSubscriptionTxArgs = {
  actionType: Scalars['String']['input'];
};

export enum StatType {
  ArmorPenetration = 'ARMOR_PENETRATION',
  Atk = 'ATK',
  Cdmg = 'CDMG',
  Cri = 'CRI',
  Def = 'DEF',
  Drr = 'DRR',
  Drv = 'DRV',
  Hit = 'HIT',
  Hp = 'HP',
  None = 'NONE',
  Spd = 'SPD',
  Thorn = 'THORN'
}

export type StateDiff = {
  __typename?: 'StateDiff';
  /** The base state before changes. */
  baseState: Scalars['String']['output'];
  /** The state after changes. */
  changedState?: Maybe<Scalars['String']['output']>;
  /** The path of the state difference. */
  path: Scalars['String']['output'];
};

export type StateQuery = {
  __typename?: 'StateQuery';
  /** State for agent. */
  agent?: Maybe<AgentStateType>;
  /** List of arena information of requested arena and avatar list */
  arenaInformation: Array<ArenaInformationType>;
  arenaParticipants: Array<Maybe<ArenaParticipantType>>;
  /** State for avatar. */
  avatar?: Maybe<AvatarStateType>;
  /** Avatar states having some order as addresses */
  avatars: Array<Maybe<AvatarStateType>>;
  /** asset balance by currency. */
  balance: FungibleAssetValueWithCurrencyType;
  cachedSheet?: Maybe<Scalars['String']['output']>;
  crystalMonsterCollectionMultiplierSheet?: Maybe<CrystalMonsterCollectionMultiplierSheetType>;
  /**
   * Get balances and fungible items in garages.
   * Use either `currencyEnums` or `currencyTickers` to get balances.
   */
  garages?: Maybe<GaragesType>;
  /** The latest stake rewards based on StakePolicySheet. */
  latestStakeRewards?: Maybe<StakeRewardsType>;
  monsterCollectionSheet?: Maybe<MonsterCollectionSheetType>;
  /** State for monster collection. */
  monsterCollectionState?: Maybe<MonsterCollectionStateType>;
  orderDigestList?: Maybe<OrderDigestListStateType>;
  pledge: MeadPledgeType;
  /** world boss season id by block index. */
  raidId: Scalars['Int']['output'];
  /** raider address list by world boss season. */
  raiderList?: Maybe<Array<Scalars['Address']['output']>>;
  /** world boss season user information. */
  raiderState?: Maybe<RaiderStateType>;
  /** State for avatar EXP record. */
  rankingMap?: Maybe<RankingMapStateType>;
  /** State for sharded shop. */
  shardedShop?: Maybe<ShardedShopStateV2Type>;
  /**
   * State for shop.
   * @deprecated Shop is migrated to ShardedShop and not using now. Use shardedShop() instead.
   */
  shop?: Maybe<ShopStateType>;
  /** @deprecated Since stake3, claim_stake_reward9 actions, each stakers have their own contracts. */
  stakeRewards?: Maybe<StakeRewardsType>;
  /** State for staking. */
  stakeState?: Maybe<StakeStateType>;
  /** Staking states having same order as addresses */
  stakeStates: Array<Maybe<StakeStateType>>;
  /** List of unlocked equipment recipe sheet row ids. */
  unlockedRecipeIds?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  /** List of unlocked world sheet row ids. */
  unlockedWorldIds?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  /** State for weekly arena. */
  weeklyArena?: Maybe<WeeklyArenaStateType>;
  /** user boss kill reward record by world boss season. */
  worldBossKillRewardRecord?: Maybe<WorldBossKillRewardRecordType>;
  /** world boss season boss information. */
  worldBossState?: Maybe<WorldBossStateType>;
};


export type StateQueryAgentArgs = {
  address: Scalars['Address']['input'];
};


export type StateQueryArenaInformationArgs = {
  avatarAddresses: Array<Scalars['Address']['input']>;
  championshipId: Scalars['Int']['input'];
  round: Scalars['Int']['input'];
};


export type StateQueryArenaParticipantsArgs = {
  avatarAddress: Scalars['Address']['input'];
  filterBounds?: Scalars['Boolean']['input'];
};


export type StateQueryAvatarArgs = {
  avatarAddress: Scalars['Address']['input'];
};


export type StateQueryAvatarsArgs = {
  addresses: Array<Scalars['Address']['input']>;
};


export type StateQueryBalanceArgs = {
  address: Scalars['Address']['input'];
  currency: CurrencyInput;
};


export type StateQueryCachedSheetArgs = {
  tableName: Scalars['String']['input'];
};


export type StateQueryGaragesArgs = {
  agentAddr: Scalars['Address']['input'];
  currencyEnums?: InputMaybe<Array<CurrencyEnum>>;
  currencyTickers?: InputMaybe<Array<Scalars['String']['input']>>;
  fungibleItemIds?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type StateQueryMonsterCollectionStateArgs = {
  agentAddress: Scalars['Address']['input'];
};


export type StateQueryOrderDigestListArgs = {
  avatarAddress: Scalars['Address']['input'];
};


export type StateQueryPledgeArgs = {
  agentAddress: Scalars['Address']['input'];
};


export type StateQueryRaidIdArgs = {
  blockIndex: Scalars['Long']['input'];
  prev?: InputMaybe<Scalars['Boolean']['input']>;
};


export type StateQueryRaiderListArgs = {
  raiderListAddress: Scalars['Address']['input'];
};


export type StateQueryRaiderStateArgs = {
  raiderAddress: Scalars['Address']['input'];
};


export type StateQueryRankingMapArgs = {
  index: Scalars['Int']['input'];
};


export type StateQueryShardedShopArgs = {
  itemSubType: ItemSubType;
  nonce: Scalars['Int']['input'];
};


export type StateQueryStakeStateArgs = {
  address: Scalars['Address']['input'];
};


export type StateQueryStakeStatesArgs = {
  addresses: Array<InputMaybe<Scalars['Address']['input']>>;
};


export type StateQueryUnlockedRecipeIdsArgs = {
  avatarAddress: Scalars['Address']['input'];
};


export type StateQueryUnlockedWorldIdsArgs = {
  avatarAddress: Scalars['Address']['input'];
};


export type StateQueryWeeklyArenaArgs = {
  index: Scalars['Int']['input'];
};


export type StateQueryWorldBossKillRewardRecordArgs = {
  worldBossKillRewardRecordAddress: Scalars['Address']['input'];
};


export type StateQueryWorldBossStateArgs = {
  bossAddress: Scalars['Address']['input'];
};

export type StatsMapType = {
  __typename?: 'StatsMapType';
  aTK: Scalars['Int']['output'];
  cRI: Scalars['Int']['output'];
  dEF: Scalars['Int']['output'];
  hIT: Scalars['Int']['output'];
  hP: Scalars['Int']['output'];
  sPD: Scalars['Int']['output'];
};

export type TipChanged = {
  __typename?: 'TipChanged';
  hash?: Maybe<Scalars['ByteString']['output']>;
  index: Scalars['Long']['output'];
};

export type Transaction = {
  __typename?: 'Transaction';
  /** A list of actions in this transaction. */
  actions: Array<Action>;
  /** The block including the transaction. */
  blockRef: Block;
  /** A unique identifier derived from this transaction content. */
  id: Scalars['ID']['output'];
  /** The number of previous transactions committed by the signer of this tx. */
  nonce: Scalars['Long']['output'];
  /** A PublicKey of the account who signed this transaction. */
  publicKey: Scalars['ByteString']['output'];
  /** A serialized tx payload in base64 string. */
  serializedPayload: Scalars['String']['output'];
  /** A digital signature of the content of this transaction. */
  signature: Scalars['ByteString']['output'];
  /** An address of the account who signed this transaction. */
  signer: Scalars['Address']['output'];
  /** The time this transaction was created and signed. */
  timestamp: Scalars['DateTimeOffset']['output'];
  /** Addresses whose states were affected by Actions. */
  updatedAddresses: Array<Scalars['Address']['output']>;
};

export type TransactionHeadlessQuery = {
  __typename?: 'TransactionHeadlessQuery';
  /** @deprecated Use signTransaction */
  attachSignature: Scalars['String']['output'];
  /** @deprecated API update with action query. use unsignedTransaction */
  createUnsignedTx: Scalars['String']['output'];
  getTx?: Maybe<TransactionType>;
  ncTransactions?: Maybe<Array<Maybe<TransactionType>>>;
  nextTxNonce: Scalars['Long']['output'];
  signTransaction: Scalars['ByteString']['output'];
  transactionResult: TxResultType;
  transactionResults: Array<Maybe<TxResultType>>;
  unsignedTransaction: Scalars['ByteString']['output'];
};


export type TransactionHeadlessQueryAttachSignatureArgs = {
  signature: Scalars['String']['input'];
  unsignedTransaction: Scalars['String']['input'];
};


export type TransactionHeadlessQueryCreateUnsignedTxArgs = {
  nonce?: InputMaybe<Scalars['Long']['input']>;
  plainValue: Scalars['String']['input'];
  publicKey: Scalars['String']['input'];
};


export type TransactionHeadlessQueryGetTxArgs = {
  txId: Scalars['TxId']['input'];
};


export type TransactionHeadlessQueryNcTransactionsArgs = {
  actionType: Scalars['String']['input'];
  limit: Scalars['Long']['input'];
  startingBlockIndex: Scalars['Long']['input'];
};


export type TransactionHeadlessQueryNextTxNonceArgs = {
  address: Scalars['Address']['input'];
};


export type TransactionHeadlessQuerySignTransactionArgs = {
  signature: Scalars['String']['input'];
  unsignedTransaction: Scalars['String']['input'];
};


export type TransactionHeadlessQueryTransactionResultArgs = {
  txId: Scalars['TxId']['input'];
};


export type TransactionHeadlessQueryTransactionResultsArgs = {
  txIds: Array<InputMaybe<Scalars['TxId']['input']>>;
};


export type TransactionHeadlessQueryUnsignedTransactionArgs = {
  maxGasPrice?: InputMaybe<FungibleAssetValueInputType>;
  nonce?: InputMaybe<Scalars['Long']['input']>;
  plainValue: Scalars['String']['input'];
  publicKey: Scalars['String']['input'];
};

export type TransactionQuery = {
  __typename?: 'TransactionQuery';
  /** Attach the given signature to the given transaction and return tx as hexadecimal */
  bindSignature: Scalars['String']['output'];
  nextNonce: Scalars['Long']['output'];
  stagedTransactions: Array<Transaction>;
  transaction?: Maybe<Transaction>;
  transactionResult: TxResultType;
  transactions: Array<Transaction>;
  unsignedTransaction: Scalars['ByteString']['output'];
};


export type TransactionQueryBindSignatureArgs = {
  signature: Scalars['String']['input'];
  unsignedTransaction: Scalars['String']['input'];
};


export type TransactionQueryNextNonceArgs = {
  address: Scalars['Address']['input'];
};


export type TransactionQueryStagedTransactionsArgs = {
  desc?: InputMaybe<Scalars['Boolean']['input']>;
  involvedAddress?: InputMaybe<Scalars['Address']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  signer?: InputMaybe<Scalars['Address']['input']>;
};


export type TransactionQueryTransactionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type TransactionQueryTransactionResultArgs = {
  txId: Scalars['ID']['input'];
};


export type TransactionQueryTransactionsArgs = {
  desc?: InputMaybe<Scalars['Boolean']['input']>;
  involvedAddress?: InputMaybe<Scalars['Address']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  signer?: InputMaybe<Scalars['Address']['input']>;
};


export type TransactionQueryUnsignedTransactionArgs = {
  nonce?: InputMaybe<Scalars['Long']['input']>;
  plainValue: Scalars['String']['input'];
  publicKey: Scalars['String']['input'];
};

export type TransactionType = {
  __typename?: 'TransactionType';
  /** A list of actions in this transaction. */
  actions: Array<Maybe<Action>>;
  /** A unique identifier derived from this transaction content. */
  id: Scalars['TxId']['output'];
  /** The number of previous transactions committed by the signer of this transaction. */
  nonce: Scalars['Long']['output'];
  /** A PublicKey of the account who signed this transaction. */
  publicKey: PublicKeyType;
  /** A serialized tx payload in base64 string. */
  serializedPayload: Scalars['String']['output'];
  /** A digital signature of the content of this transaction. */
  signature: Scalars['ByteString']['output'];
  /** An address of the account who signed this transaction. */
  signer: Scalars['Address']['output'];
  /** The time this transaction was created and signed. */
  timestamp: Scalars['String']['output'];
  /** Addresses whose states were affected by Actions. */
  updatedAddresses: Array<Maybe<Scalars['Address']['output']>>;
};

export type TransferNcgHistoryType = {
  __typename?: 'TransferNCGHistoryType';
  amount: Scalars['String']['output'];
  blockHash: Scalars['ByteString']['output'];
  memo?: Maybe<Scalars['String']['output']>;
  recipient: Scalars['Address']['output'];
  sender: Scalars['Address']['output'];
  txId: Scalars['ByteString']['output'];
};

export type Trie = {
  __typename?: 'Trie';
  /** Gets the value stored at given key. */
  value?: Maybe<IValue>;
  /** Gets the values stored at given multiple keys. */
  values?: Maybe<IValue>;
};


export type TrieValueArgs = {
  key: Scalars['KeyBytes']['input'];
};


export type TrieValuesArgs = {
  keys: Array<Scalars['KeyBytes']['input']>;
};

export type TxResultType = {
  __typename?: 'TxResultType';
  /** The block hash which the target transaction executed. */
  blockHash?: Maybe<Scalars['String']['output']>;
  /** The block index which the target transaction executed. */
  blockIndex?: Maybe<Scalars['Long']['output']>;
  /** The name of exception. (when only failed) */
  exceptionNames?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The input state's root hash which the target transaction executed. */
  inputState?: Maybe<Scalars['HashDigest_SHA256']['output']>;
  /** The output state's root hash which the target transaction executed. */
  outputState?: Maybe<Scalars['HashDigest_SHA256']['output']>;
  /** The transaction status. */
  txStatus: TxStatus;
};

export enum TxStatus {
  Failure = 'FAILURE',
  Included = 'INCLUDED',
  Invalid = 'INVALID',
  Staging = 'STAGING',
  Success = 'SUCCESS'
}

export type TxType = {
  __typename?: 'TxType';
  transaction: TransactionType;
  txResult?: Maybe<TxResultType>;
};

export type ValidationQuery = {
  __typename?: 'ValidationQuery';
  metadata: Scalars['Boolean']['output'];
  privateKey: Scalars['Boolean']['output'];
  publicKey: Scalars['Boolean']['output'];
};


export type ValidationQueryMetadataArgs = {
  raw: Scalars['String']['input'];
};


export type ValidationQueryPrivateKeyArgs = {
  hex: Scalars['ByteString']['input'];
};


export type ValidationQueryPublicKeyArgs = {
  hex: Scalars['ByteString']['input'];
};

/** A data type holds validator's public key and its voting power. */
export type Validator = {
  __typename?: 'Validator';
  /** Gets the voting power of the validator. */
  power: Scalars['BigInt']['output'];
  /** The public key of the validator. */
  publicKey: Scalars['PublicKey']['output'];
};

export type Vote = {
  __typename?: 'Vote';
  /** Hash of the block voted. */
  blockHash: Scalars['String']['output'];
  /** Flag of the vote */
  flag: Scalars['VoteFlag']['output'];
  /** Height of the consensus voted. */
  height: Scalars['Long']['output'];
  /** Round of the consensus voted. */
  round: Scalars['Int']['output'];
  /** A digital signature of the content of this vote. */
  signature: Scalars['ByteString']['output'];
  /** The time this vote was created and signed. */
  timestamp: Scalars['DateTimeOffset']['output'];
  /** Power of the validator which is subject of the vote. */
  validatorPower?: Maybe<Scalars['BigInt']['output']>;
  /** Public key of the validator which is subject of the vote. */
  validatorPublicKey: Scalars['PublicKey']['output'];
};

export type WeeklyArenaStateType = {
  __typename?: 'WeeklyArenaStateType';
  address: Scalars['Address']['output'];
  ended: Scalars['Boolean']['output'];
  orderedArenaInfos: Array<Maybe<ArenaInfoType>>;
};

export type WorldBossKillRewardRecordMapType = {
  __typename?: 'WorldBossKillRewardRecordMapType';
  bossLevel: Scalars['Int']['output'];
  /** check reward already claimed. if already claimed return true. */
  claimed: Scalars['Boolean']['output'];
};

export type WorldBossKillRewardRecordType = {
  __typename?: 'WorldBossKillRewardRecordType';
  map: Array<WorldBossKillRewardRecordMapType>;
};

export type WorldBossStateType = {
  __typename?: 'WorldBossStateType';
  /** world boss current hp. */
  currentHp: Scalars['BigInt']['output'];
  /** world boss season ended block index. */
  endedBlockIndex: Scalars['Long']['output'];
  /** world boss season id. */
  id: Scalars['Int']['output'];
  /** world boss current level. */
  level: Scalars['Int']['output'];
  /** world boss season started block index. */
  startedBlockIndex: Scalars['Long']['output'];
};

export type WorldInformationType = {
  __typename?: 'WorldInformationType';
  isStageCleared: Scalars['Boolean']['output'];
  isWorldUnlocked: Scalars['Boolean']['output'];
  world: WorldType;
};


export type WorldInformationTypeIsStageClearedArgs = {
  stageId: Scalars['Int']['input'];
};


export type WorldInformationTypeIsWorldUnlockedArgs = {
  worldId: Scalars['Int']['input'];
};


export type WorldInformationTypeWorldArgs = {
  worldId: Scalars['Int']['input'];
};

export type WorldState = {
  __typename?: 'WorldState';
  /** Gets the account associated with given address. */
  account: AccountState;
  /** Gets the accounts associated with given addresses. */
  accounts: Array<AccountState>;
  /** Balance at given address and currency pair. */
  balance: FungibleAssetValue;
  /** The legacy flag of the world state. */
  legacy: Scalars['Boolean']['output'];
  /** The state root hash of the world state. */
  stateRootHash: Scalars['HashDigestSHA256']['output'];
  /** Total supply in circulation for given currency. */
  totalSupply: FungibleAssetValue;
  /** The validator set. */
  validatorSet: IValue;
  /** The version of the bakcing data model. */
  version: Scalars['Int']['output'];
};


export type WorldStateAccountArgs = {
  address: Scalars['Address']['input'];
};


export type WorldStateAccountsArgs = {
  addresses: Array<Scalars['Address']['input']>;
};


export type WorldStateBalanceArgs = {
  address: Scalars['Address']['input'];
  currency: CurrencyInput;
};


export type WorldStateTotalSupplyArgs = {
  currency: CurrencyInput;
};

export type WorldType = {
  __typename?: 'WorldType';
  id: Scalars['Int']['output'];
  isStageCleared: Scalars['Boolean']['output'];
  isUnlocked: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  stageBegin: Scalars['Int']['output'];
  stageClearedBlockIndex: Scalars['Long']['output'];
  stageClearedId: Scalars['Int']['output'];
  stageEnd: Scalars['Int']['output'];
  unlockedBlockIndex: Scalars['Long']['output'];
};

export type GetTipQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTipQuery = { __typename?: 'StandaloneQuery', nodeStatus: { __typename?: 'NodeStatusType', tip: { __typename?: 'BlockHeader', index: number } } };

export type GetAvatarsQueryVariables = Exact<{
  agentAddress: Scalars['Address']['input'];
}>;


export type GetAvatarsQuery = { __typename?: 'StandaloneQuery', stateQuery: { __typename?: 'StateQuery', agent?: { __typename?: 'AgentStateType', avatarStates?: Array<{ __typename?: 'AvatarStateType', address: any, name: string, level: number, actionPoint: number, dailyRewardReceivedIndex: number }> | null } | null } };

export type GetAvatarsWithTipQueryVariables = Exact<{
  agentAddress: Scalars['Address']['input'];
}>;


export type GetAvatarsWithTipQuery = { __typename?: 'StandaloneQuery', nodeStatus: { __typename?: 'NodeStatusType', tip: { __typename?: 'BlockHeader', index: number } }, stateQuery: { __typename?: 'StateQuery', agent?: { __typename?: 'AgentStateType', avatarStates?: Array<{ __typename?: 'AvatarStateType', dailyRewardReceivedIndex: number, address: any, name: string, index: number, actionPoint: number }> | null } | null } };

export type StageTransactionMutationVariables = Exact<{
  tx: Scalars['String']['input'];
}>;


export type StageTransactionMutation = { __typename?: 'StandaloneMutation', stageTransaction: string };



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

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

/** Mapping of union types */
export type ResolversUnionTypes<_RefType extends Record<string, unknown>> = {
  Diff: ( RootStateDiff ) | ( StateDiff );
};


/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AccountState: ResolverTypeWrapper<AccountState>;
  Action: ResolverTypeWrapper<Action>;
  ActionMutation: ResolverTypeWrapper<ActionMutation>;
  ActionQuery: ResolverTypeWrapper<ActionQuery>;
  ActionTxQuery: ResolverTypeWrapper<ActionTxQuery>;
  ActivationStatusMutation: ResolverTypeWrapper<ActivationStatusMutation>;
  ActivationStatusQuery: ResolverTypeWrapper<ActivationStatusQuery>;
  Address: ResolverTypeWrapper<Scalars['Address']['output']>;
  AddressQuery: ResolverTypeWrapper<AddressQuery>;
  AgentStateType: ResolverTypeWrapper<AgentStateType>;
  AppProtocolVersionType: ResolverTypeWrapper<AppProtocolVersionType>;
  ArenaInfoType: ResolverTypeWrapper<ArenaInfoType>;
  ArenaInformationType: ResolverTypeWrapper<ArenaInformationType>;
  ArenaParticipantType: ResolverTypeWrapper<ArenaParticipantType>;
  ArenaRecordType: ResolverTypeWrapper<ArenaRecordType>;
  AvatarStateType: ResolverTypeWrapper<AvatarStateType>;
  BalanceInput: BalanceInput;
  BencodexValue: ResolverTypeWrapper<Scalars['BencodexValue']['output']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']['output']>;
  Block: ResolverTypeWrapper<Block>;
  BlockCommit: ResolverTypeWrapper<BlockCommit>;
  BlockHash: ResolverTypeWrapper<Scalars['BlockHash']['output']>;
  BlockHeader: ResolverTypeWrapper<BlockHeader>;
  BlockQuery: ResolverTypeWrapper<BlockQuery>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  BoundPeer: ResolverTypeWrapper<BoundPeer>;
  Byte: ResolverTypeWrapper<Scalars['Byte']['output']>;
  ByteString: ResolverTypeWrapper<Scalars['ByteString']['output']>;
  ClaimDataInputType: ClaimDataInputType;
  CollectionMapType: ResolverTypeWrapper<CollectionMapType>;
  CombinationSlotStateType: ResolverTypeWrapper<CombinationSlotStateType>;
  ConsumableType: ResolverTypeWrapper<ConsumableType>;
  CostumeType: ResolverTypeWrapper<CostumeType>;
  CraftQuery: ResolverTypeWrapper<CraftQuery>;
  CrystalMonsterCollectionMultiplierRowType: ResolverTypeWrapper<CrystalMonsterCollectionMultiplierRowType>;
  CrystalMonsterCollectionMultiplierSheetType: ResolverTypeWrapper<CrystalMonsterCollectionMultiplierSheetType>;
  Currency: ResolverTypeWrapper<Currency>;
  CurrencyEnum: CurrencyEnum;
  CurrencyInput: CurrencyInput;
  CurrencyType: ResolverTypeWrapper<CurrencyType>;
  DateTimeOffset: ResolverTypeWrapper<Scalars['DateTimeOffset']['output']>;
  Decimal: ResolverTypeWrapper<Scalars['Decimal']['output']>;
  DecimalStatType: ResolverTypeWrapper<DecimalStatType>;
  Diff: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['Diff']>;
  DifferentAppProtocolVersionEncounterType: ResolverTypeWrapper<DifferentAppProtocolVersionEncounterType>;
  ElementalType: ElementalType;
  EquipmentType: ResolverTypeWrapper<EquipmentType>;
  Evidence: ResolverTypeWrapper<Evidence>;
  EvidenceId: ResolverTypeWrapper<Scalars['EvidenceId']['output']>;
  EvidenceQuery: ResolverTypeWrapper<EvidenceQuery>;
  ExplorerQuery: ResolverTypeWrapper<ExplorerQuery>;
  FungibleAssetValue: ResolverTypeWrapper<FungibleAssetValue>;
  FungibleAssetValueInputType: FungibleAssetValueInputType;
  FungibleAssetValueType: ResolverTypeWrapper<FungibleAssetValueType>;
  FungibleAssetValueWithCurrencyType: ResolverTypeWrapper<FungibleAssetValueWithCurrencyType>;
  FungibleIdAndCountInput: FungibleIdAndCountInput;
  FungibleItemGarageWithAddressType: ResolverTypeWrapper<FungibleItemGarageWithAddressType>;
  FungibleItemType: ResolverTypeWrapper<FungibleItemType>;
  GaragesType: ResolverTypeWrapper<GaragesType>;
  Guid: ResolverTypeWrapper<Scalars['Guid']['output']>;
  HashDigestSHA1: ResolverTypeWrapper<Scalars['HashDigestSHA1']['output']>;
  HashDigestSHA256: ResolverTypeWrapper<Scalars['HashDigestSHA256']['output']>;
  HashDigest_SHA256: ResolverTypeWrapper<Scalars['HashDigest_SHA256']['output']>;
  HelperQuery: ResolverTypeWrapper<HelperQuery>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  IValue: ResolverTypeWrapper<IValue>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  InventoryItemType: ResolverTypeWrapper<InventoryItemType>;
  InventoryType: ResolverTypeWrapper<InventoryType>;
  ItemSubType: ItemSubType;
  ItemType: ItemType;
  ItemUsableType: ResolverTypeWrapper<ItemUsableType>;
  KeyBytes: ResolverTypeWrapper<Scalars['KeyBytes']['output']>;
  KeyStoreMutation: ResolverTypeWrapper<KeyStoreMutation>;
  KeyStoreType: ResolverTypeWrapper<KeyStoreType>;
  LibplanetStateQuery: ResolverTypeWrapper<LibplanetStateQuery>;
  Long: ResolverTypeWrapper<Scalars['Long']['output']>;
  MailBoxType: ResolverTypeWrapper<MailBoxType>;
  MailType: ResolverTypeWrapper<MailType>;
  MaterialType: ResolverTypeWrapper<MaterialType>;
  MaterialsToUseInputType: MaterialsToUseInputType;
  MeadPledgeType: ResolverTypeWrapper<MeadPledgeType>;
  MonsterCollectionRewardInfoType: ResolverTypeWrapper<MonsterCollectionRewardInfoType>;
  MonsterCollectionRowType: ResolverTypeWrapper<MonsterCollectionRowType>;
  MonsterCollectionSheetType: ResolverTypeWrapper<MonsterCollectionSheetType>;
  MonsterCollectionStateType: ResolverTypeWrapper<MonsterCollectionStateType>;
  MonsterCollectionStatusType: ResolverTypeWrapper<MonsterCollectionStatusType>;
  MultiAccountInfo: ResolverTypeWrapper<MultiAccountInfo>;
  NodeExceptionType: ResolverTypeWrapper<NodeExceptionType>;
  NodeState: ResolverTypeWrapper<NodeState>;
  NodeStatusType: ResolverTypeWrapper<NodeStatusType>;
  NotificationEnum: NotificationEnum;
  NotificationType: ResolverTypeWrapper<NotificationType>;
  OrderDigestListStateType: ResolverTypeWrapper<OrderDigestListStateType>;
  OrderDigestType: ResolverTypeWrapper<OrderDigestType>;
  PeerChainStateQuery: ResolverTypeWrapper<PeerChainStateQuery>;
  PreloadStateExtraType: ResolverTypeWrapper<PreloadStateExtraType>;
  PreloadStateType: ResolverTypeWrapper<PreloadStateType>;
  PrivateKeyType: ResolverTypeWrapper<PrivateKeyType>;
  ProtectedPrivateKeyType: ResolverTypeWrapper<ProtectedPrivateKeyType>;
  PublicKey: ResolverTypeWrapper<Scalars['PublicKey']['output']>;
  PublicKeyType: ResolverTypeWrapper<PublicKeyType>;
  QuestListType: ResolverTypeWrapper<QuestListType>;
  RaiderStateType: ResolverTypeWrapper<RaiderStateType>;
  RankingInfoType: ResolverTypeWrapper<RankingInfoType>;
  RankingMapStateType: ResolverTypeWrapper<RankingMapStateType>;
  RawStateQuery: ResolverTypeWrapper<RawStateQuery>;
  RecipientsInputType: RecipientsInputType;
  RootStateDiff: ResolverTypeWrapper<RootStateDiff>;
  RpcInformationQuery: ResolverTypeWrapper<RpcInformationQuery>;
  RuneSlotInfoInputType: RuneSlotInfoInputType;
  RuneStateType: ResolverTypeWrapper<RuneStateType>;
  ShardedShopStateV2Type: ResolverTypeWrapper<ShardedShopStateV2Type>;
  ShopItemType: ResolverTypeWrapper<ShopItemType>;
  ShopStateType: ResolverTypeWrapper<ShopStateType>;
  SimplifyFungibleAssetValueInput: SimplifyFungibleAssetValueInput;
  SkillType: ResolverTypeWrapper<SkillType>;
  StakeAchievementsType: ResolverTypeWrapper<StakeAchievementsType>;
  StakeRegularFixedRewardInfoType: ResolverTypeWrapper<StakeRegularFixedRewardInfoType>;
  StakeRegularRewardInfoType: ResolverTypeWrapper<StakeRegularRewardInfoType>;
  StakeRegularRewardsType: ResolverTypeWrapper<StakeRegularRewardsType>;
  StakeRewardType: StakeRewardType;
  StakeRewardsType: ResolverTypeWrapper<StakeRewardsType>;
  StakeStateType: ResolverTypeWrapper<StakeStateType>;
  StandaloneMutation: ResolverTypeWrapper<{}>;
  StandaloneQuery: ResolverTypeWrapper<{}>;
  StandaloneSubscription: ResolverTypeWrapper<{}>;
  StatType: StatType;
  StateDiff: ResolverTypeWrapper<StateDiff>;
  StateQuery: ResolverTypeWrapper<StateQuery>;
  StatsMapType: ResolverTypeWrapper<StatsMapType>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  TipChanged: ResolverTypeWrapper<TipChanged>;
  Transaction: ResolverTypeWrapper<Transaction>;
  TransactionHeadlessQuery: ResolverTypeWrapper<TransactionHeadlessQuery>;
  TransactionQuery: ResolverTypeWrapper<TransactionQuery>;
  TransactionType: ResolverTypeWrapper<TransactionType>;
  TransferNCGHistoryType: ResolverTypeWrapper<TransferNcgHistoryType>;
  Trie: ResolverTypeWrapper<Trie>;
  TxId: ResolverTypeWrapper<Scalars['TxId']['output']>;
  TxResultType: ResolverTypeWrapper<TxResultType>;
  TxStatus: TxStatus;
  TxType: ResolverTypeWrapper<TxType>;
  ValidationQuery: ResolverTypeWrapper<ValidationQuery>;
  Validator: ResolverTypeWrapper<Validator>;
  Vote: ResolverTypeWrapper<Vote>;
  VoteFlag: ResolverTypeWrapper<Scalars['VoteFlag']['output']>;
  WeeklyArenaStateType: ResolverTypeWrapper<WeeklyArenaStateType>;
  WorldBossKillRewardRecordMapType: ResolverTypeWrapper<WorldBossKillRewardRecordMapType>;
  WorldBossKillRewardRecordType: ResolverTypeWrapper<WorldBossKillRewardRecordType>;
  WorldBossStateType: ResolverTypeWrapper<WorldBossStateType>;
  WorldInformationType: ResolverTypeWrapper<WorldInformationType>;
  WorldState: ResolverTypeWrapper<WorldState>;
  WorldType: ResolverTypeWrapper<WorldType>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AccountState: AccountState;
  Action: Action;
  ActionMutation: ActionMutation;
  ActionQuery: ActionQuery;
  ActionTxQuery: ActionTxQuery;
  ActivationStatusMutation: ActivationStatusMutation;
  ActivationStatusQuery: ActivationStatusQuery;
  Address: Scalars['Address']['output'];
  AddressQuery: AddressQuery;
  AgentStateType: AgentStateType;
  AppProtocolVersionType: AppProtocolVersionType;
  ArenaInfoType: ArenaInfoType;
  ArenaInformationType: ArenaInformationType;
  ArenaParticipantType: ArenaParticipantType;
  ArenaRecordType: ArenaRecordType;
  AvatarStateType: AvatarStateType;
  BalanceInput: BalanceInput;
  BencodexValue: Scalars['BencodexValue']['output'];
  BigInt: Scalars['BigInt']['output'];
  Block: Block;
  BlockCommit: BlockCommit;
  BlockHash: Scalars['BlockHash']['output'];
  BlockHeader: BlockHeader;
  BlockQuery: BlockQuery;
  Boolean: Scalars['Boolean']['output'];
  BoundPeer: BoundPeer;
  Byte: Scalars['Byte']['output'];
  ByteString: Scalars['ByteString']['output'];
  ClaimDataInputType: ClaimDataInputType;
  CollectionMapType: CollectionMapType;
  CombinationSlotStateType: CombinationSlotStateType;
  ConsumableType: ConsumableType;
  CostumeType: CostumeType;
  CraftQuery: CraftQuery;
  CrystalMonsterCollectionMultiplierRowType: CrystalMonsterCollectionMultiplierRowType;
  CrystalMonsterCollectionMultiplierSheetType: CrystalMonsterCollectionMultiplierSheetType;
  Currency: Currency;
  CurrencyInput: CurrencyInput;
  CurrencyType: CurrencyType;
  DateTimeOffset: Scalars['DateTimeOffset']['output'];
  Decimal: Scalars['Decimal']['output'];
  DecimalStatType: DecimalStatType;
  Diff: ResolversUnionTypes<ResolversParentTypes>['Diff'];
  DifferentAppProtocolVersionEncounterType: DifferentAppProtocolVersionEncounterType;
  EquipmentType: EquipmentType;
  Evidence: Evidence;
  EvidenceId: Scalars['EvidenceId']['output'];
  EvidenceQuery: EvidenceQuery;
  ExplorerQuery: ExplorerQuery;
  FungibleAssetValue: FungibleAssetValue;
  FungibleAssetValueInputType: FungibleAssetValueInputType;
  FungibleAssetValueType: FungibleAssetValueType;
  FungibleAssetValueWithCurrencyType: FungibleAssetValueWithCurrencyType;
  FungibleIdAndCountInput: FungibleIdAndCountInput;
  FungibleItemGarageWithAddressType: FungibleItemGarageWithAddressType;
  FungibleItemType: FungibleItemType;
  GaragesType: GaragesType;
  Guid: Scalars['Guid']['output'];
  HashDigestSHA1: Scalars['HashDigestSHA1']['output'];
  HashDigestSHA256: Scalars['HashDigestSHA256']['output'];
  HashDigest_SHA256: Scalars['HashDigest_SHA256']['output'];
  HelperQuery: HelperQuery;
  ID: Scalars['ID']['output'];
  IValue: IValue;
  Int: Scalars['Int']['output'];
  InventoryItemType: InventoryItemType;
  InventoryType: InventoryType;
  ItemUsableType: ItemUsableType;
  KeyBytes: Scalars['KeyBytes']['output'];
  KeyStoreMutation: KeyStoreMutation;
  KeyStoreType: KeyStoreType;
  LibplanetStateQuery: LibplanetStateQuery;
  Long: Scalars['Long']['output'];
  MailBoxType: MailBoxType;
  MailType: MailType;
  MaterialType: MaterialType;
  MaterialsToUseInputType: MaterialsToUseInputType;
  MeadPledgeType: MeadPledgeType;
  MonsterCollectionRewardInfoType: MonsterCollectionRewardInfoType;
  MonsterCollectionRowType: MonsterCollectionRowType;
  MonsterCollectionSheetType: MonsterCollectionSheetType;
  MonsterCollectionStateType: MonsterCollectionStateType;
  MonsterCollectionStatusType: MonsterCollectionStatusType;
  MultiAccountInfo: MultiAccountInfo;
  NodeExceptionType: NodeExceptionType;
  NodeState: NodeState;
  NodeStatusType: NodeStatusType;
  NotificationType: NotificationType;
  OrderDigestListStateType: OrderDigestListStateType;
  OrderDigestType: OrderDigestType;
  PeerChainStateQuery: PeerChainStateQuery;
  PreloadStateExtraType: PreloadStateExtraType;
  PreloadStateType: PreloadStateType;
  PrivateKeyType: PrivateKeyType;
  ProtectedPrivateKeyType: ProtectedPrivateKeyType;
  PublicKey: Scalars['PublicKey']['output'];
  PublicKeyType: PublicKeyType;
  QuestListType: QuestListType;
  RaiderStateType: RaiderStateType;
  RankingInfoType: RankingInfoType;
  RankingMapStateType: RankingMapStateType;
  RawStateQuery: RawStateQuery;
  RecipientsInputType: RecipientsInputType;
  RootStateDiff: RootStateDiff;
  RpcInformationQuery: RpcInformationQuery;
  RuneSlotInfoInputType: RuneSlotInfoInputType;
  RuneStateType: RuneStateType;
  ShardedShopStateV2Type: ShardedShopStateV2Type;
  ShopItemType: ShopItemType;
  ShopStateType: ShopStateType;
  SimplifyFungibleAssetValueInput: SimplifyFungibleAssetValueInput;
  SkillType: SkillType;
  StakeAchievementsType: StakeAchievementsType;
  StakeRegularFixedRewardInfoType: StakeRegularFixedRewardInfoType;
  StakeRegularRewardInfoType: StakeRegularRewardInfoType;
  StakeRegularRewardsType: StakeRegularRewardsType;
  StakeRewardsType: StakeRewardsType;
  StakeStateType: StakeStateType;
  StandaloneMutation: {};
  StandaloneQuery: {};
  StandaloneSubscription: {};
  StateDiff: StateDiff;
  StateQuery: StateQuery;
  StatsMapType: StatsMapType;
  String: Scalars['String']['output'];
  TipChanged: TipChanged;
  Transaction: Transaction;
  TransactionHeadlessQuery: TransactionHeadlessQuery;
  TransactionQuery: TransactionQuery;
  TransactionType: TransactionType;
  TransferNCGHistoryType: TransferNcgHistoryType;
  Trie: Trie;
  TxId: Scalars['TxId']['output'];
  TxResultType: TxResultType;
  TxType: TxType;
  ValidationQuery: ValidationQuery;
  Validator: Validator;
  Vote: Vote;
  VoteFlag: Scalars['VoteFlag']['output'];
  WeeklyArenaStateType: WeeklyArenaStateType;
  WorldBossKillRewardRecordMapType: WorldBossKillRewardRecordMapType;
  WorldBossKillRewardRecordType: WorldBossKillRewardRecordType;
  WorldBossStateType: WorldBossStateType;
  WorldInformationType: WorldInformationType;
  WorldState: WorldState;
  WorldType: WorldType;
};

export type AccountStateResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountState'] = ResolversParentTypes['AccountState']> = {
  balance?: Resolver<Maybe<ResolversTypes['IValue']>, ParentType, ContextType, RequireFields<AccountStateBalanceArgs, 'address' | 'currencyHash'>>;
  balances?: Resolver<Array<Maybe<ResolversTypes['IValue']>>, ParentType, ContextType, RequireFields<AccountStateBalancesArgs, 'addresses' | 'currencyHash'>>;
  state?: Resolver<Maybe<ResolversTypes['IValue']>, ParentType, ContextType, RequireFields<AccountStateStateArgs, 'address'>>;
  stateRootHash?: Resolver<ResolversTypes['HashDigestSHA256'], ParentType, ContextType>;
  states?: Resolver<Array<Maybe<ResolversTypes['IValue']>>, ParentType, ContextType, RequireFields<AccountStateStatesArgs, 'addresses'>>;
  totalSupply?: Resolver<Maybe<ResolversTypes['IValue']>, ParentType, ContextType, RequireFields<AccountStateTotalSupplyArgs, 'currencyHash'>>;
  validatorSet?: Resolver<Maybe<ResolversTypes['IValue']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Action'] = ResolversParentTypes['Action']> = {
  inspection?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  json?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  raw?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<ActionRawArgs, 'encode'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActionMutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActionMutation'] = ResolversParentTypes['ActionMutation']> = {
  chargeActionPoint?: Resolver<ResolversTypes['TxId'], ParentType, ContextType, RequireFields<ActionMutationChargeActionPointArgs, 'avatarAddress'>>;
  combinationConsumable?: Resolver<ResolversTypes['TxId'], ParentType, ContextType, RequireFields<ActionMutationCombinationConsumableArgs, 'avatarAddress' | 'recipeId' | 'slotIndex'>>;
  combinationEquipment?: Resolver<ResolversTypes['TxId'], ParentType, ContextType, RequireFields<ActionMutationCombinationEquipmentArgs, 'avatarAddress' | 'recipeId' | 'slotIndex'>>;
  createAvatar?: Resolver<ResolversTypes['TxId'], ParentType, ContextType, RequireFields<ActionMutationCreateAvatarArgs, 'avatarIndex' | 'avatarName' | 'earIndex' | 'hairIndex' | 'lensIndex' | 'tailIndex'>>;
  dailyReward?: Resolver<ResolversTypes['TxId'], ParentType, ContextType, RequireFields<ActionMutationDailyRewardArgs, 'avatarAddress'>>;
  hackAndSlash?: Resolver<ResolversTypes['TxId'], ParentType, ContextType, RequireFields<ActionMutationHackAndSlashArgs, 'avatarAddress' | 'runeSlotInfos' | 'stageId' | 'worldId'>>;
  itemEnhancement?: Resolver<ResolversTypes['TxId'], ParentType, ContextType, RequireFields<ActionMutationItemEnhancementArgs, 'avatarAddress' | 'itemId' | 'materialIds' | 'slotIndex'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActionQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActionQuery'] = ResolversParentTypes['ActionQuery']> = {
  activateAccount?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<ActionQueryActivateAccountArgs, 'activationCode'>>;
  approvePledge?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<ActionQueryApprovePledgeArgs, 'patronAddress'>>;
  auraSummon?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<ActionQueryAuraSummonArgs, 'avatarAddress' | 'groupId' | 'summonCount'>>;
  claimItems?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<ActionQueryClaimItemsArgs, 'claimData'>>;
  claimRaidReward?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<ActionQueryClaimRaidRewardArgs, 'avatarAddress'>>;
  claimStakeReward?: Resolver<Maybe<ResolversTypes['ByteString']>, ParentType, ContextType, Partial<ActionQueryClaimStakeRewardArgs>>;
  claimWorldBossKillReward?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<ActionQueryClaimWorldBossKillRewardArgs, 'avatarAddress'>>;
  combinationConsumable?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<ActionQueryCombinationConsumableArgs, 'avatarAddress' | 'recipeId' | 'slotIndex'>>;
  combinationEquipment?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<ActionQueryCombinationEquipmentArgs, 'avatarAddress' | 'recipeId' | 'slotIndex'>>;
  craftQuery?: Resolver<ResolversTypes['CraftQuery'], ParentType, ContextType>;
  createAvatar?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<ActionQueryCreateAvatarArgs, 'ear' | 'hair' | 'index' | 'lens' | 'name' | 'tail'>>;
  createPledge?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<ActionQueryCreatePledgeArgs, 'agentAddresses' | 'mead' | 'patronAddress'>>;
  dailyReward?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<ActionQueryDailyRewardArgs, 'avatarAddress'>>;
  deliverToOthersGarages?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<ActionQueryDeliverToOthersGaragesArgs, 'recipientAgentAddr'>>;
  endPledge?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<ActionQueryEndPledgeArgs, 'agentAddress'>>;
  grinding?: Resolver<Maybe<ResolversTypes['ByteString']>, ParentType, ContextType, RequireFields<ActionQueryGrindingArgs, 'avatarAddress' | 'equipmentIds'>>;
  hackAndSlash?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<ActionQueryHackAndSlashArgs, 'avatarAddress' | 'runeSlotInfos' | 'stageId' | 'worldId'>>;
  hackAndSlashSweep?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<ActionQueryHackAndSlashSweepArgs, 'actionPoint' | 'avatarAddress' | 'runeSlotInfos' | 'stageId' | 'worldId'>>;
  itemEnhancement?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<ActionQueryItemEnhancementArgs, 'avatarAddress' | 'itemId' | 'materialIds' | 'slotIndex'>>;
  loadIntoMyGarages?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, Partial<ActionQueryLoadIntoMyGaragesArgs>>;
  migrateMonsterCollection?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, Partial<ActionQueryMigrateMonsterCollectionArgs>>;
  patchTableSheet?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<ActionQueryPatchTableSheetArgs, 'tableCsv' | 'tableName'>>;
  prepareRewardAssets?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<ActionQueryPrepareRewardAssetsArgs, 'assets' | 'rewardPoolAddress'>>;
  raid?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<ActionQueryRaidArgs, 'avatarAddress' | 'costumeIds' | 'equipmentIds' | 'foodIds' | 'payNcg' | 'runeSlotInfos'>>;
  rapidCombination?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<ActionQueryRapidCombinationArgs, 'avatarAddress' | 'slotIndex'>>;
  requestPledge?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<ActionQueryRequestPledgeArgs, 'agentAddress' | 'mead'>>;
  retrieveAvatarAssets?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<ActionQueryRetrieveAvatarAssetsArgs, 'avatarAddress'>>;
  runeEnhancement?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<ActionQueryRuneEnhancementArgs, 'avatarAddress' | 'runeId'>>;
  runeSummon?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<ActionQueryRuneSummonArgs, 'avatarAddress' | 'groupId' | 'summonCount'>>;
  stake?: Resolver<Maybe<ResolversTypes['ByteString']>, ParentType, ContextType, Partial<ActionQueryStakeArgs>>;
  transferAsset?: Resolver<Maybe<ResolversTypes['ByteString']>, ParentType, ContextType, RequireFields<ActionQueryTransferAssetArgs, 'amount' | 'recipient' | 'sender'>>;
  transferAssets?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<ActionQueryTransferAssetsArgs, 'recipients' | 'sender'>>;
  unloadFromMyGarages?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<ActionQueryUnloadFromMyGaragesArgs, 'recipientAvatarAddr'>>;
  unlockEquipmentRecipe?: Resolver<Maybe<ResolversTypes['ByteString']>, ParentType, ContextType, RequireFields<ActionQueryUnlockEquipmentRecipeArgs, 'avatarAddress' | 'recipeIds'>>;
  unlockWorld?: Resolver<Maybe<ResolversTypes['ByteString']>, ParentType, ContextType, RequireFields<ActionQueryUnlockWorldArgs, 'avatarAddress' | 'worldIds'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActionTxQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActionTxQuery'] = ResolversParentTypes['ActionTxQuery']> = {
  activateAccount?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<ActionTxQueryActivateAccountArgs, 'activationCode'>>;
  approvePledge?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<ActionTxQueryApprovePledgeArgs, 'patronAddress'>>;
  auraSummon?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<ActionTxQueryAuraSummonArgs, 'avatarAddress' | 'groupId' | 'summonCount'>>;
  claimItems?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<ActionTxQueryClaimItemsArgs, 'claimData'>>;
  claimRaidReward?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<ActionTxQueryClaimRaidRewardArgs, 'avatarAddress'>>;
  claimStakeReward?: Resolver<Maybe<ResolversTypes['ByteString']>, ParentType, ContextType, Partial<ActionTxQueryClaimStakeRewardArgs>>;
  claimWorldBossKillReward?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<ActionTxQueryClaimWorldBossKillRewardArgs, 'avatarAddress'>>;
  combinationConsumable?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<ActionTxQueryCombinationConsumableArgs, 'avatarAddress' | 'recipeId' | 'slotIndex'>>;
  combinationEquipment?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<ActionTxQueryCombinationEquipmentArgs, 'avatarAddress' | 'recipeId' | 'slotIndex'>>;
  craftQuery?: Resolver<ResolversTypes['CraftQuery'], ParentType, ContextType>;
  createAvatar?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<ActionTxQueryCreateAvatarArgs, 'ear' | 'hair' | 'index' | 'lens' | 'name' | 'tail'>>;
  createPledge?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<ActionTxQueryCreatePledgeArgs, 'agentAddresses' | 'mead' | 'patronAddress'>>;
  dailyReward?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<ActionTxQueryDailyRewardArgs, 'avatarAddress'>>;
  deliverToOthersGarages?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<ActionTxQueryDeliverToOthersGaragesArgs, 'recipientAgentAddr'>>;
  endPledge?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<ActionTxQueryEndPledgeArgs, 'agentAddress'>>;
  grinding?: Resolver<Maybe<ResolversTypes['ByteString']>, ParentType, ContextType, RequireFields<ActionTxQueryGrindingArgs, 'avatarAddress' | 'equipmentIds'>>;
  hackAndSlash?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<ActionTxQueryHackAndSlashArgs, 'avatarAddress' | 'runeSlotInfos' | 'stageId' | 'worldId'>>;
  hackAndSlashSweep?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<ActionTxQueryHackAndSlashSweepArgs, 'actionPoint' | 'avatarAddress' | 'runeSlotInfos' | 'stageId' | 'worldId'>>;
  itemEnhancement?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<ActionTxQueryItemEnhancementArgs, 'avatarAddress' | 'itemId' | 'materialIds' | 'slotIndex'>>;
  loadIntoMyGarages?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, Partial<ActionTxQueryLoadIntoMyGaragesArgs>>;
  migrateMonsterCollection?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, Partial<ActionTxQueryMigrateMonsterCollectionArgs>>;
  patchTableSheet?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<ActionTxQueryPatchTableSheetArgs, 'tableCsv' | 'tableName'>>;
  prepareRewardAssets?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<ActionTxQueryPrepareRewardAssetsArgs, 'assets' | 'rewardPoolAddress'>>;
  raid?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<ActionTxQueryRaidArgs, 'avatarAddress' | 'costumeIds' | 'equipmentIds' | 'foodIds' | 'payNcg' | 'runeSlotInfos'>>;
  rapidCombination?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<ActionTxQueryRapidCombinationArgs, 'avatarAddress' | 'slotIndex'>>;
  requestPledge?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<ActionTxQueryRequestPledgeArgs, 'agentAddress' | 'mead'>>;
  retrieveAvatarAssets?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<ActionTxQueryRetrieveAvatarAssetsArgs, 'avatarAddress'>>;
  runeEnhancement?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<ActionTxQueryRuneEnhancementArgs, 'avatarAddress' | 'runeId'>>;
  runeSummon?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<ActionTxQueryRuneSummonArgs, 'avatarAddress' | 'groupId' | 'summonCount'>>;
  stake?: Resolver<Maybe<ResolversTypes['ByteString']>, ParentType, ContextType, Partial<ActionTxQueryStakeArgs>>;
  transferAsset?: Resolver<Maybe<ResolversTypes['ByteString']>, ParentType, ContextType, RequireFields<ActionTxQueryTransferAssetArgs, 'amount' | 'recipient' | 'sender'>>;
  transferAssets?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<ActionTxQueryTransferAssetsArgs, 'recipients' | 'sender'>>;
  unloadFromMyGarages?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<ActionTxQueryUnloadFromMyGaragesArgs, 'recipientAvatarAddr'>>;
  unlockEquipmentRecipe?: Resolver<Maybe<ResolversTypes['ByteString']>, ParentType, ContextType, RequireFields<ActionTxQueryUnlockEquipmentRecipeArgs, 'avatarAddress' | 'recipeIds'>>;
  unlockWorld?: Resolver<Maybe<ResolversTypes['ByteString']>, ParentType, ContextType, RequireFields<ActionTxQueryUnlockWorldArgs, 'avatarAddress' | 'worldIds'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActivationStatusMutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActivationStatusMutation'] = ResolversParentTypes['ActivationStatusMutation']> = {
  activateAccount?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<ActivationStatusMutationActivateAccountArgs, 'encodedActivationKey'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActivationStatusQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActivationStatusQuery'] = ResolversParentTypes['ActivationStatusQuery']> = {
  activated?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  addressActivated?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<ActivationStatusQueryAddressActivatedArgs, 'address'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface AddressScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Address'], any> {
  name: 'Address';
}

export type AddressQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddressQuery'] = ResolversParentTypes['AddressQuery']> = {
  currencyMintersAddress?: Resolver<Maybe<Array<ResolversTypes['Address']>>, ParentType, ContextType, RequireFields<AddressQueryCurrencyMintersAddressArgs, 'currency'>>;
  pledgeAddress?: Resolver<ResolversTypes['Address'], ParentType, ContextType, RequireFields<AddressQueryPledgeAddressArgs, 'agentAddress'>>;
  raiderAddress?: Resolver<ResolversTypes['Address'], ParentType, ContextType, RequireFields<AddressQueryRaiderAddressArgs, 'avatarAddress' | 'raidId'>>;
  raiderListAddress?: Resolver<ResolversTypes['Address'], ParentType, ContextType, RequireFields<AddressQueryRaiderListAddressArgs, 'raidId'>>;
  worldBossAddress?: Resolver<ResolversTypes['Address'], ParentType, ContextType, RequireFields<AddressQueryWorldBossAddressArgs, 'raidId'>>;
  worldBossKillRewardRecordAddress?: Resolver<ResolversTypes['Address'], ParentType, ContextType, RequireFields<AddressQueryWorldBossKillRewardRecordAddressArgs, 'avatarAddress' | 'raidId'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AgentStateTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AgentStateType'] = ResolversParentTypes['AgentStateType']> = {
  address?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  avatarStates?: Resolver<Maybe<Array<ResolversTypes['AvatarStateType']>>, ParentType, ContextType>;
  crystal?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gold?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasTradedItem?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  monsterCollectionLevel?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  monsterCollectionRound?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  pledge?: Resolver<ResolversTypes['MeadPledgeType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AppProtocolVersionTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AppProtocolVersionType'] = ResolversParentTypes['AppProtocolVersionType']> = {
  extra?: Resolver<Maybe<ResolversTypes['ByteString']>, ParentType, ContextType>;
  signature?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType>;
  signer?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArenaInfoTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArenaInfoType'] = ResolversParentTypes['ArenaInfoType']> = {
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  agentAddress?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  arenaRecord?: Resolver<ResolversTypes['ArenaRecordType'], ParentType, ContextType>;
  avatarAddress?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  avatarName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dailyChallengeCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  score?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArenaInformationTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArenaInformationType'] = ResolversParentTypes['ArenaInformationType']> = {
  address?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  avatarAddress?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  lose?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  purchasedTicketCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  score?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ticket?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ticketResetCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  win?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArenaParticipantTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArenaParticipantType'] = ResolversParentTypes['ArenaParticipantType']> = {
  avatarAddr?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  cp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  loseScore?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nameWithHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  portraitId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rank?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  score?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  winScore?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArenaRecordTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArenaRecordType'] = ResolversParentTypes['ArenaRecordType']> = {
  draw?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lose?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  win?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AvatarStateTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AvatarStateType'] = ResolversParentTypes['AvatarStateType']> = {
  actionPoint?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  agentAddress?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  blockIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  characterId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  combinationSlotAddresses?: Resolver<Array<ResolversTypes['Address']>, ParentType, ContextType>;
  combinationSlots?: Resolver<Array<ResolversTypes['CombinationSlotStateType']>, ParentType, ContextType>;
  dailyRewardReceivedIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  ear?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  eventMap?: Resolver<ResolversTypes['CollectionMapType'], ParentType, ContextType>;
  exp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  hair?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  index?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  inventory?: Resolver<ResolversTypes['InventoryType'], ParentType, ContextType>;
  inventoryAddress?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  itemMap?: Resolver<ResolversTypes['CollectionMapType'], ParentType, ContextType>;
  lens?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mailBox?: Resolver<ResolversTypes['MailBoxType'], ParentType, ContextType>;
  monsterMap?: Resolver<ResolversTypes['CollectionMapType'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  questList?: Resolver<ResolversTypes['QuestListType'], ParentType, ContextType>;
  runes?: Resolver<Array<ResolversTypes['RuneStateType']>, ParentType, ContextType>;
  stageMap?: Resolver<ResolversTypes['CollectionMapType'], ParentType, ContextType>;
  tail?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  worldInformation?: Resolver<ResolversTypes['WorldInformationType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface BencodexValueScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BencodexValue'], any> {
  name: 'BencodexValue';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export type BlockResolvers<ContextType = any, ParentType extends ResolversParentTypes['Block'] = ResolversParentTypes['Block']> = {
  difficulty?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  evidence?: Resolver<Array<ResolversTypes['Evidence']>, ParentType, ContextType>;
  hash?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  index?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  lastCommit?: Resolver<Maybe<ResolversTypes['BlockCommit']>, ParentType, ContextType>;
  miner?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  nonce?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType>;
  preEvaluationHash?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType>;
  previousBlock?: Resolver<Maybe<ResolversTypes['Block']>, ParentType, ContextType>;
  protocolVersion?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  publicKey?: Resolver<Maybe<ResolversTypes['PublicKey']>, ParentType, ContextType>;
  signature?: Resolver<Maybe<ResolversTypes['ByteString']>, ParentType, ContextType>;
  stateRootHash?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['DateTimeOffset'], ParentType, ContextType>;
  totalDifficulty?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactions?: Resolver<Array<ResolversTypes['Transaction']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlockCommitResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlockCommit'] = ResolversParentTypes['BlockCommit']> = {
  blockHash?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  height?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  round?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  votes?: Resolver<Array<ResolversTypes['Vote']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface BlockHashScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BlockHash'], any> {
  name: 'BlockHash';
}

export type BlockHeaderResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlockHeader'] = ResolversParentTypes['BlockHeader']> = {
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  index?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  miner?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlockQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlockQuery'] = ResolversParentTypes['BlockQuery']> = {
  block?: Resolver<Maybe<ResolversTypes['Block']>, ParentType, ContextType, Partial<BlockQueryBlockArgs>>;
  blocks?: Resolver<Array<ResolversTypes['Block']>, ParentType, ContextType, RequireFields<BlockQueryBlocksArgs, 'desc' | 'excludeEmptyTxs' | 'offset'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BoundPeerResolvers<ContextType = any, ParentType extends ResolversParentTypes['BoundPeer'] = ResolversParentTypes['BoundPeer']> = {
  endPoint?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  publicIpAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publicKey?: Resolver<ResolversTypes['PublicKey'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface ByteScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Byte'], any> {
  name: 'Byte';
}

export interface ByteStringScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ByteString'], any> {
  name: 'ByteString';
}

export type CollectionMapTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionMapType'] = ResolversParentTypes['CollectionMapType']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pairs?: Resolver<Array<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CombinationSlotStateTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CombinationSlotStateType'] = ResolversParentTypes['CombinationSlotStateType']> = {
  address?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  petId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  startBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  unlockBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  unlockStage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConsumableTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ConsumableType'] = ResolversParentTypes['ConsumableType']> = {
  elementalType?: Resolver<ResolversTypes['ElementalType'], ParentType, ContextType>;
  grade?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes['Guid'], ParentType, ContextType>;
  itemSubType?: Resolver<ResolversTypes['ItemSubType'], ParentType, ContextType>;
  itemType?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType>;
  mainStat?: Resolver<ResolversTypes['StatType'], ParentType, ContextType>;
  requiredBlockIndex?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CostumeTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CostumeType'] = ResolversParentTypes['CostumeType']> = {
  elementalType?: Resolver<ResolversTypes['ElementalType'], ParentType, ContextType>;
  equipped?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  grade?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes['Guid'], ParentType, ContextType>;
  itemSubType?: Resolver<ResolversTypes['ItemSubType'], ParentType, ContextType>;
  itemType?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType>;
  requiredBlockIndex?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CraftQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['CraftQuery'] = ResolversParentTypes['CraftQuery']> = {
  eventConsumableItemCrafts?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<CraftQueryEventConsumableItemCraftsArgs, 'avatarAddress' | 'eventConsumableItemRecipeId' | 'eventScheduleId' | 'slotIndex'>>;
  eventMaterialItemCrafts?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<CraftQueryEventMaterialItemCraftsArgs, 'avatarAddress' | 'eventMaterialItemRecipeId' | 'eventScheduleId' | 'materialsToUse'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CrystalMonsterCollectionMultiplierRowTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CrystalMonsterCollectionMultiplierRowType'] = ResolversParentTypes['CrystalMonsterCollectionMultiplierRowType']> = {
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  multiplier?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CrystalMonsterCollectionMultiplierSheetTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CrystalMonsterCollectionMultiplierSheetType'] = ResolversParentTypes['CrystalMonsterCollectionMultiplierSheetType']> = {
  orderedList?: Resolver<Array<ResolversTypes['CrystalMonsterCollectionMultiplierRowType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CurrencyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Currency'] = ResolversParentTypes['Currency']> = {
  decimalPlaces?: Resolver<ResolversTypes['Byte'], ParentType, ContextType>;
  hash?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType>;
  maximumSupply?: Resolver<Maybe<ResolversTypes['FungibleAssetValue']>, ParentType, ContextType>;
  minters?: Resolver<Maybe<Array<ResolversTypes['Address']>>, ParentType, ContextType>;
  ticker?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalSupplyTrackable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CurrencyTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CurrencyType'] = ResolversParentTypes['CurrencyType']> = {
  decimalPlaces?: Resolver<ResolversTypes['Byte'], ParentType, ContextType>;
  minters?: Resolver<Maybe<Array<Maybe<ResolversTypes['Address']>>>, ParentType, ContextType>;
  ticker?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeOffsetScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTimeOffset'], any> {
  name: 'DateTimeOffset';
}

export interface DecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Decimal'], any> {
  name: 'Decimal';
}

export type DecimalStatTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['DecimalStatType'] = ResolversParentTypes['DecimalStatType']> = {
  additionalValue?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  baseValue?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  statType?: Resolver<ResolversTypes['StatType'], ParentType, ContextType>;
  totalValue?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DiffResolvers<ContextType = any, ParentType extends ResolversParentTypes['Diff'] = ResolversParentTypes['Diff']> = {
  __resolveType: TypeResolveFn<'RootStateDiff' | 'StateDiff', ParentType, ContextType>;
};

export type DifferentAppProtocolVersionEncounterTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['DifferentAppProtocolVersionEncounterType'] = ResolversParentTypes['DifferentAppProtocolVersionEncounterType']> = {
  localVersion?: Resolver<ResolversTypes['AppProtocolVersionType'], ParentType, ContextType>;
  peer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  peerVersion?: Resolver<ResolversTypes['AppProtocolVersionType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EquipmentTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['EquipmentType'] = ResolversParentTypes['EquipmentType']> = {
  buffSkills?: Resolver<Maybe<Array<Maybe<ResolversTypes['SkillType']>>>, ParentType, ContextType>;
  elementalType?: Resolver<ResolversTypes['ElementalType'], ParentType, ContextType>;
  equipped?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  exp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  grade?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes['Guid'], ParentType, ContextType>;
  itemSubType?: Resolver<ResolversTypes['ItemSubType'], ParentType, ContextType>;
  itemType?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType>;
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  requiredBlockIndex?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  setId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skills?: Resolver<Maybe<Array<Maybe<ResolversTypes['SkillType']>>>, ParentType, ContextType>;
  stat?: Resolver<ResolversTypes['DecimalStatType'], ParentType, ContextType>;
  statsMap?: Resolver<ResolversTypes['StatsMapType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EvidenceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Evidence'] = ResolversParentTypes['Evidence']> = {
  height?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  targetAddress?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['DateTimeOffset'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface EvidenceIdScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['EvidenceId'], any> {
  name: 'EvidenceId';
}

export type EvidenceQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['EvidenceQuery'] = ResolversParentTypes['EvidenceQuery']> = {
  committedEvidence?: Resolver<Array<ResolversTypes['Evidence']>, ParentType, ContextType, RequireFields<EvidenceQueryCommittedEvidenceArgs, 'desc' | 'limit' | 'offset'>>;
  evidence?: Resolver<Maybe<ResolversTypes['Evidence']>, ParentType, ContextType, Partial<EvidenceQueryEvidenceArgs>>;
  pendingEvidence?: Resolver<Array<ResolversTypes['Evidence']>, ParentType, ContextType, RequireFields<EvidenceQueryPendingEvidenceArgs, 'desc' | 'limit' | 'offset'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExplorerQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExplorerQuery'] = ResolversParentTypes['ExplorerQuery']> = {
  blockQuery?: Resolver<Maybe<ResolversTypes['BlockQuery']>, ParentType, ContextType>;
  evidenceQuery?: Resolver<Maybe<ResolversTypes['EvidenceQuery']>, ParentType, ContextType>;
  helperQuery?: Resolver<Maybe<ResolversTypes['HelperQuery']>, ParentType, ContextType>;
  nodeState?: Resolver<ResolversTypes['NodeState'], ParentType, ContextType>;
  rawStateQuery?: Resolver<Maybe<ResolversTypes['RawStateQuery']>, ParentType, ContextType>;
  stateQuery?: Resolver<Maybe<ResolversTypes['LibplanetStateQuery']>, ParentType, ContextType>;
  transactionQuery?: Resolver<Maybe<ResolversTypes['TransactionQuery']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FungibleAssetValueResolvers<ContextType = any, ParentType extends ResolversParentTypes['FungibleAssetValue'] = ResolversParentTypes['FungibleAssetValue']> = {
  currency?: Resolver<ResolversTypes['Currency'], ParentType, ContextType>;
  majorUnit?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  minorUnit?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sign?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  string?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FungibleAssetValueTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['FungibleAssetValueType'] = ResolversParentTypes['FungibleAssetValueType']> = {
  currency?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FungibleAssetValueWithCurrencyTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['FungibleAssetValueWithCurrencyType'] = ResolversParentTypes['FungibleAssetValueWithCurrencyType']> = {
  currency?: Resolver<ResolversTypes['CurrencyType'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<FungibleAssetValueWithCurrencyTypeQuantityArgs, 'minerUnit'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FungibleItemGarageWithAddressTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['FungibleItemGarageWithAddressType'] = ResolversParentTypes['FungibleItemGarageWithAddressType']> = {
  addr?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  fungibleItemId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  item?: Resolver<Maybe<ResolversTypes['FungibleItemType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FungibleItemTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['FungibleItemType'] = ResolversParentTypes['FungibleItemType']> = {
  fungibleItemId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  itemSubType?: Resolver<ResolversTypes['ItemSubType'], ParentType, ContextType>;
  itemType?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GaragesTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['GaragesType'] = ResolversParentTypes['GaragesType']> = {
  agentAddr?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>;
  fungibleItemGarages?: Resolver<Maybe<Array<Maybe<ResolversTypes['FungibleItemGarageWithAddressType']>>>, ParentType, ContextType>;
  garageBalances?: Resolver<Maybe<Array<Maybe<ResolversTypes['FungibleAssetValue']>>>, ParentType, ContextType>;
  garageBalancesAddr?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface GuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Guid'], any> {
  name: 'Guid';
}

export interface HashDigestSha1ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['HashDigestSHA1'], any> {
  name: 'HashDigestSHA1';
}

export interface HashDigestSha256ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['HashDigestSHA256'], any> {
  name: 'HashDigestSHA256';
}

export interface HashDigest_Sha256ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['HashDigest_SHA256'], any> {
  name: 'HashDigest_SHA256';
}

export type HelperQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['HelperQuery'] = ResolversParentTypes['HelperQuery']> = {
  bencodexValue?: Resolver<ResolversTypes['IValue'], ParentType, ContextType, RequireFields<HelperQueryBencodexValueArgs, 'hex'>>;
  currencyHash?: Resolver<ResolversTypes['HashDigestSHA1'], ParentType, ContextType, RequireFields<HelperQueryCurrencyHashArgs, 'currency'>>;
  keyHex?: Resolver<ResolversTypes['KeyBytes'], ParentType, ContextType, RequireFields<HelperQueryKeyHexArgs, 'value'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IValueResolvers<ContextType = any, ParentType extends ResolversParentTypes['IValue'] = ResolversParentTypes['IValue']> = {
  base64?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hex?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  inspection?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  json?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InventoryItemTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['InventoryItemType'] = ResolversParentTypes['InventoryItemType']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  fungibleItemId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  itemType?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType>;
  lockId?: Resolver<Maybe<ResolversTypes['Guid']>, ParentType, ContextType>;
  locked?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  tradableId?: Resolver<Maybe<ResolversTypes['Guid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InventoryTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['InventoryType'] = ResolversParentTypes['InventoryType']> = {
  consumables?: Resolver<Array<ResolversTypes['ConsumableType']>, ParentType, ContextType>;
  costumes?: Resolver<Array<ResolversTypes['CostumeType']>, ParentType, ContextType>;
  equipments?: Resolver<Array<ResolversTypes['EquipmentType']>, ParentType, ContextType, Partial<InventoryTypeEquipmentsArgs>>;
  items?: Resolver<Array<ResolversTypes['InventoryItemType']>, ParentType, ContextType, Partial<InventoryTypeItemsArgs>>;
  materials?: Resolver<Array<ResolversTypes['MaterialType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemUsableTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemUsableType'] = ResolversParentTypes['ItemUsableType']> = {
  elementalType?: Resolver<ResolversTypes['ElementalType'], ParentType, ContextType>;
  grade?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes['Guid'], ParentType, ContextType>;
  itemSubType?: Resolver<ResolversTypes['ItemSubType'], ParentType, ContextType>;
  itemType?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType>;
  requiredBlockIndex?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface KeyBytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['KeyBytes'], any> {
  name: 'KeyBytes';
}

export type KeyStoreMutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['KeyStoreMutation'] = ResolversParentTypes['KeyStoreMutation']> = {
  createPrivateKey?: Resolver<ResolversTypes['PrivateKeyType'], ParentType, ContextType, RequireFields<KeyStoreMutationCreatePrivateKeyArgs, 'passphrase'>>;
  revokePrivateKey?: Resolver<ResolversTypes['ProtectedPrivateKeyType'], ParentType, ContextType, RequireFields<KeyStoreMutationRevokePrivateKeyArgs, 'address'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeyStoreTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['KeyStoreType'] = ResolversParentTypes['KeyStoreType']> = {
  decryptedPrivateKey?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<KeyStoreTypeDecryptedPrivateKeyArgs, 'address' | 'passphrase'>>;
  privateKey?: Resolver<ResolversTypes['PrivateKeyType'], ParentType, ContextType, RequireFields<KeyStoreTypePrivateKeyArgs, 'hex'>>;
  protectedPrivateKeys?: Resolver<Array<ResolversTypes['ProtectedPrivateKeyType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LibplanetStateQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['LibplanetStateQuery'] = ResolversParentTypes['LibplanetStateQuery']> = {
  balance?: Resolver<ResolversTypes['FungibleAssetValue'], ParentType, ContextType, RequireFields<LibplanetStateQueryBalanceArgs, 'currency' | 'owner'>>;
  states?: Resolver<Array<Maybe<ResolversTypes['BencodexValue']>>, ParentType, ContextType, RequireFields<LibplanetStateQueryStatesArgs, 'addresses'>>;
  totalSupply?: Resolver<Maybe<ResolversTypes['FungibleAssetValue']>, ParentType, ContextType, RequireFields<LibplanetStateQueryTotalSupplyArgs, 'currency'>>;
  validators?: Resolver<Maybe<Array<ResolversTypes['Validator']>>, ParentType, ContextType, Partial<LibplanetStateQueryValidatorsArgs>>;
  world?: Resolver<ResolversTypes['WorldState'], ParentType, ContextType, Partial<LibplanetStateQueryWorldArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface LongScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Long'], any> {
  name: 'Long';
}

export type MailBoxTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MailBoxType'] = ResolversParentTypes['MailBoxType']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mails?: Resolver<Array<ResolversTypes['MailType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MailTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MailType'] = ResolversParentTypes['MailType']> = {
  blockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Guid'], ParentType, ContextType>;
  requiredBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MaterialTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MaterialType'] = ResolversParentTypes['MaterialType']> = {
  elementalType?: Resolver<ResolversTypes['ElementalType'], ParentType, ContextType>;
  grade?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType>;
  itemSubType?: Resolver<ResolversTypes['ItemSubType'], ParentType, ContextType>;
  itemType?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType>;
  requiredBlockIndex?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MeadPledgeTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MeadPledgeType'] = ResolversParentTypes['MeadPledgeType']> = {
  approved?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  mead?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  patronAddress?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MonsterCollectionRewardInfoTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MonsterCollectionRewardInfoType'] = ResolversParentTypes['MonsterCollectionRewardInfoType']> = {
  itemId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MonsterCollectionRowTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MonsterCollectionRowType'] = ResolversParentTypes['MonsterCollectionRowType']> = {
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  requiredGold?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rewards?: Resolver<Array<Maybe<ResolversTypes['MonsterCollectionRewardInfoType']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MonsterCollectionSheetTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MonsterCollectionSheetType'] = ResolversParentTypes['MonsterCollectionSheetType']> = {
  orderedList?: Resolver<Maybe<Array<Maybe<ResolversTypes['MonsterCollectionRowType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MonsterCollectionStateTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MonsterCollectionStateType'] = ResolversParentTypes['MonsterCollectionStateType']> = {
  address?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  claimableBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  expiredBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  level?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  receivedBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  rewardLevel?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  startedBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MonsterCollectionStatusTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MonsterCollectionStatusType'] = ResolversParentTypes['MonsterCollectionStatusType']> = {
  fungibleAssetValue?: Resolver<ResolversTypes['FungibleAssetValueType'], ParentType, ContextType>;
  lockup?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  rewardInfos?: Resolver<Maybe<Array<Maybe<ResolversTypes['MonsterCollectionRewardInfoType']>>>, ParentType, ContextType>;
  tipIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MultiAccountInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['MultiAccountInfo'] = ResolversParentTypes['MultiAccountInfo']> = {
  agents?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  agentsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ips?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  ipsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NodeExceptionTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['NodeExceptionType'] = ResolversParentTypes['NodeExceptionType']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NodeStateResolvers<ContextType = any, ParentType extends ResolversParentTypes['NodeState'] = ResolversParentTypes['NodeState']> = {
  peers?: Resolver<Array<ResolversTypes['BoundPeer']>, ParentType, ContextType>;
  preloaded?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  validators?: Resolver<Array<ResolversTypes['BoundPeer']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NodeStatusTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['NodeStatusType'] = ResolversParentTypes['NodeStatusType']> = {
  appProtocolVersion?: Resolver<Maybe<ResolversTypes['AppProtocolVersionType']>, ParentType, ContextType>;
  bootstrapEnded?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  genesis?: Resolver<ResolversTypes['BlockHeader'], ParentType, ContextType>;
  informationalVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isMining?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  preloadEnded?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  productVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stagedTxIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['TxId']>>>, ParentType, ContextType, Partial<NodeStatusTypeStagedTxIdsArgs>>;
  stagedTxIdsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  subscriberAddresses?: Resolver<Maybe<Array<Maybe<ResolversTypes['Address']>>>, ParentType, ContextType>;
  subscriberAddressesCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  tip?: Resolver<ResolversTypes['BlockHeader'], ParentType, ContextType>;
  topmostBlocks?: Resolver<Array<Maybe<ResolversTypes['BlockHeader']>>, ParentType, ContextType, RequireFields<NodeStatusTypeTopmostBlocksArgs, 'limit' | 'offset'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NotificationTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['NotificationType'] = ResolversParentTypes['NotificationType']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['NotificationEnum'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderDigestListStateTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderDigestListStateType'] = ResolversParentTypes['OrderDigestListStateType']> = {
  address?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>;
  orderDigestList?: Resolver<Array<Maybe<ResolversTypes['OrderDigestType']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderDigestTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderDigestType'] = ResolversParentTypes['OrderDigestType']> = {
  combatPoint?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  expiredBlockIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  itemCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  orderId?: Resolver<ResolversTypes['Guid'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sellerAgentAddress?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  startedBlockIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tradableId?: Resolver<ResolversTypes['Guid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PeerChainStateQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['PeerChainStateQuery'] = ResolversParentTypes['PeerChainStateQuery']> = {
  state?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PreloadStateExtraTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PreloadStateExtraType'] = ResolversParentTypes['PreloadStateExtraType']> = {
  currentCount?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PreloadStateTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PreloadStateType'] = ResolversParentTypes['PreloadStateType']> = {
  currentPhase?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  extra?: Resolver<ResolversTypes['PreloadStateExtraType'], ParentType, ContextType>;
  totalPhase?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrivateKeyTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PrivateKeyType'] = ResolversParentTypes['PrivateKeyType']> = {
  hex?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType>;
  publicKey?: Resolver<ResolversTypes['PublicKeyType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProtectedPrivateKeyTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProtectedPrivateKeyType'] = ResolversParentTypes['ProtectedPrivateKeyType']> = {
  address?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface PublicKeyScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['PublicKey'], any> {
  name: 'PublicKey';
}

export type PublicKeyTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PublicKeyType'] = ResolversParentTypes['PublicKeyType']> = {
  address?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  hex?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, Partial<PublicKeyTypeHexArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QuestListTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['QuestListType'] = ResolversParentTypes['QuestListType']> = {
  completedQuestIds?: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RaiderStateTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['RaiderStateType'] = ResolversParentTypes['RaiderStateType']> = {
  avatarAddress?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  avatarName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  claimedBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  cp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  highScore?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  iconId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  latestBossLevel?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  latestRewardRank?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  purchaseCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  refillBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  remainChallengeCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalChallengeCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalScore?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RankingInfoTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['RankingInfoType'] = ResolversParentTypes['RankingInfoType']> = {
  agentAddress?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  armorId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  avatarAddress?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  avatarName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  exp?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stageClearedBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RankingMapStateTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['RankingMapStateType'] = ResolversParentTypes['RankingMapStateType']> = {
  address?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  capacity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rankingInfos?: Resolver<Array<ResolversTypes['RankingInfoType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RawStateQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['RawStateQuery'] = ResolversParentTypes['RawStateQuery']> = {
  trie?: Resolver<ResolversTypes['Trie'], ParentType, ContextType, Partial<RawStateQueryTrieArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RootStateDiffResolvers<ContextType = any, ParentType extends ResolversParentTypes['RootStateDiff'] = ResolversParentTypes['RootStateDiff']> = {
  diffs?: Resolver<Array<ResolversTypes['StateDiff']>, ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RpcInformationQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['RpcInformationQuery'] = ResolversParentTypes['RpcInformationQuery']> = {
  clients?: Resolver<Array<Maybe<ResolversTypes['Address']>>, ParentType, ContextType>;
  clientsByDevice?: Resolver<Array<ResolversTypes['Address']>, ParentType, ContextType, RequireFields<RpcInformationQueryClientsByDeviceArgs, 'device'>>;
  clientsByIps?: Resolver<Array<Maybe<ResolversTypes['MultiAccountInfo']>>, ParentType, ContextType, RequireFields<RpcInformationQueryClientsByIpsArgs, 'minimum'>>;
  clientsCountByIps?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<RpcInformationQueryClientsCountByIpsArgs, 'minimum'>>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalCountByDevice?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<RpcInformationQueryTotalCountByDeviceArgs, 'device'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RuneStateTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['RuneStateType'] = ResolversParentTypes['RuneStateType']> = {
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  runeId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShardedShopStateV2TypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShardedShopStateV2Type'] = ResolversParentTypes['ShardedShopStateV2Type']> = {
  address?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  orderDigestList?: Resolver<Array<Maybe<ResolversTypes['OrderDigestType']>>, ParentType, ContextType, Partial<ShardedShopStateV2TypeOrderDigestListArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShopItemTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShopItemType'] = ResolversParentTypes['ShopItemType']> = {
  costume?: Resolver<Maybe<ResolversTypes['CostumeType']>, ParentType, ContextType>;
  itemUsable?: Resolver<Maybe<ResolversTypes['ItemUsableType']>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  productId?: Resolver<ResolversTypes['Guid'], ParentType, ContextType>;
  sellerAgentAddress?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  sellerAvatarAddress?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShopStateTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShopStateType'] = ResolversParentTypes['ShopStateType']> = {
  address?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  products?: Resolver<Array<Maybe<ResolversTypes['ShopItemType']>>, ParentType, ContextType, Partial<ShopStateTypeProductsArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SkillTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SkillType'] = ResolversParentTypes['SkillType']> = {
  chance?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  elementalType?: Resolver<ResolversTypes['ElementalType'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  power?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  referencedStatType?: Resolver<ResolversTypes['StatType'], ParentType, ContextType>;
  statPowerRatio?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StakeAchievementsTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['StakeAchievementsType'] = ResolversParentTypes['StakeAchievementsType']> = {
  achievementsByLevel?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<StakeAchievementsTypeAchievementsByLevelArgs, 'level'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StakeRegularFixedRewardInfoTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['StakeRegularFixedRewardInfoType'] = ResolversParentTypes['StakeRegularFixedRewardInfoType']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StakeRegularRewardInfoTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['StakeRegularRewardInfoType'] = ResolversParentTypes['StakeRegularRewardInfoType']> = {
  currencyDecimalPlaces?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  currencyTicker?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  decimalRate?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['StakeRewardType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StakeRegularRewardsTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['StakeRegularRewardsType'] = ResolversParentTypes['StakeRegularRewardsType']> = {
  bonusRewards?: Resolver<Array<ResolversTypes['StakeRegularFixedRewardInfoType']>, ParentType, ContextType>;
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  requiredGold?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  rewards?: Resolver<Array<ResolversTypes['StakeRegularRewardInfoType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StakeRewardsTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['StakeRewardsType'] = ResolversParentTypes['StakeRewardsType']> = {
  orderedList?: Resolver<Array<ResolversTypes['StakeRegularRewardsType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StakeStateTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['StakeStateType'] = ResolversParentTypes['StakeStateType']> = {
  achievements?: Resolver<Maybe<ResolversTypes['StakeAchievementsType']>, ParentType, ContextType>;
  address?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  cancellableBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  claimableBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  deposit?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  receivedBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  stakeRewards?: Resolver<ResolversTypes['StakeRewardsType'], ParentType, ContextType>;
  startedBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StandaloneMutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['StandaloneMutation'] = ResolversParentTypes['StandaloneMutation']> = {
  action?: Resolver<Maybe<ResolversTypes['ActionMutation']>, ParentType, ContextType>;
  activationStatus?: Resolver<Maybe<ResolversTypes['ActivationStatusMutation']>, ParentType, ContextType>;
  keyStore?: Resolver<Maybe<ResolversTypes['KeyStoreMutation']>, ParentType, ContextType>;
  stageTransaction?: Resolver<ResolversTypes['TxId'], ParentType, ContextType, RequireFields<StandaloneMutationStageTransactionArgs, 'payload'>>;
  stageTx?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<StandaloneMutationStageTxArgs, 'payload'>>;
  stageTxV2?: Resolver<ResolversTypes['TxId'], ParentType, ContextType, RequireFields<StandaloneMutationStageTxV2Args, 'payload'>>;
  transfer?: Resolver<Maybe<ResolversTypes['TxId']>, ParentType, ContextType, RequireFields<StandaloneMutationTransferArgs, 'amount' | 'currencyAddress' | 'recipient' | 'txNonce'>>;
  transferGold?: Resolver<Maybe<ResolversTypes['TxId']>, ParentType, ContextType, RequireFields<StandaloneMutationTransferGoldArgs, 'amount' | 'recipient'>>;
};

export type StandaloneQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['StandaloneQuery'] = ResolversParentTypes['StandaloneQuery']> = {
  actionQuery?: Resolver<ResolversTypes['ActionQuery'], ParentType, ContextType>;
  actionTxQuery?: Resolver<ResolversTypes['ActionTxQuery'], ParentType, ContextType, RequireFields<StandaloneQueryActionTxQueryArgs, 'maxGasPrice' | 'publicKey'>>;
  activated?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<StandaloneQueryActivatedArgs, 'invitationCode'>>;
  activationKeyNonce?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<StandaloneQueryActivationKeyNonceArgs, 'invitationCode'>>;
  activationStatus?: Resolver<ResolversTypes['ActivationStatusQuery'], ParentType, ContextType>;
  addressQuery?: Resolver<ResolversTypes['AddressQuery'], ParentType, ContextType>;
  chainQuery?: Resolver<ResolversTypes['ExplorerQuery'], ParentType, ContextType>;
  diffs?: Resolver<Array<ResolversTypes['Diff']>, ParentType, ContextType, RequireFields<StandaloneQueryDiffsArgs, 'baseIndex' | 'changedIndex'>>;
  getTx?: Resolver<Maybe<ResolversTypes['TransactionType']>, ParentType, ContextType, RequireFields<StandaloneQueryGetTxArgs, 'txId'>>;
  goldBalance?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<StandaloneQueryGoldBalanceArgs, 'address'>>;
  keyStore?: Resolver<Maybe<ResolversTypes['KeyStoreType']>, ParentType, ContextType>;
  minerAddress?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>;
  monsterCollectionStatus?: Resolver<Maybe<ResolversTypes['MonsterCollectionStatusType']>, ParentType, ContextType, Partial<StandaloneQueryMonsterCollectionStatusArgs>>;
  nextTxNonce?: Resolver<ResolversTypes['Long'], ParentType, ContextType, RequireFields<StandaloneQueryNextTxNonceArgs, 'address'>>;
  nodeStatus?: Resolver<ResolversTypes['NodeStatusType'], ParentType, ContextType>;
  peerChainState?: Resolver<ResolversTypes['PeerChainStateQuery'], ParentType, ContextType>;
  rpcInformation?: Resolver<ResolversTypes['RpcInformationQuery'], ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['ByteString']>, ParentType, ContextType, RequireFields<StandaloneQueryStateArgs, 'accountAddress' | 'address'>>;
  stateQuery?: Resolver<ResolversTypes['StateQuery'], ParentType, ContextType, Partial<StandaloneQueryStateQueryArgs>>;
  transaction?: Resolver<ResolversTypes['TransactionHeadlessQuery'], ParentType, ContextType>;
  transferNCGHistories?: Resolver<Array<ResolversTypes['TransferNCGHistoryType']>, ParentType, ContextType, RequireFields<StandaloneQueryTransferNcgHistoriesArgs, 'blockHash'>>;
  validation?: Resolver<ResolversTypes['ValidationQuery'], ParentType, ContextType>;
};

export type StandaloneSubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['StandaloneSubscription'] = ResolversParentTypes['StandaloneSubscription']> = {
  balanceByAgent?: SubscriptionResolver<ResolversTypes['String'], "balanceByAgent", ParentType, ContextType, RequireFields<StandaloneSubscriptionBalanceByAgentArgs, 'address'>>;
  differentAppProtocolVersionEncounter?: SubscriptionResolver<ResolversTypes['DifferentAppProtocolVersionEncounterType'], "differentAppProtocolVersionEncounter", ParentType, ContextType>;
  nodeException?: SubscriptionResolver<ResolversTypes['NodeExceptionType'], "nodeException", ParentType, ContextType>;
  nodeStatus?: SubscriptionResolver<Maybe<ResolversTypes['NodeStatusType']>, "nodeStatus", ParentType, ContextType>;
  notification?: SubscriptionResolver<ResolversTypes['NotificationType'], "notification", ParentType, ContextType>;
  preloadProgress?: SubscriptionResolver<Maybe<ResolversTypes['PreloadStateType']>, "preloadProgress", ParentType, ContextType>;
  tipChanged?: SubscriptionResolver<Maybe<ResolversTypes['TipChanged']>, "tipChanged", ParentType, ContextType>;
  tx?: SubscriptionResolver<Maybe<ResolversTypes['TxType']>, "tx", ParentType, ContextType, RequireFields<StandaloneSubscriptionTxArgs, 'actionType'>>;
};

export type StateDiffResolvers<ContextType = any, ParentType extends ResolversParentTypes['StateDiff'] = ResolversParentTypes['StateDiff']> = {
  baseState?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  changedState?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StateQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['StateQuery'] = ResolversParentTypes['StateQuery']> = {
  agent?: Resolver<Maybe<ResolversTypes['AgentStateType']>, ParentType, ContextType, RequireFields<StateQueryAgentArgs, 'address'>>;
  arenaInformation?: Resolver<Array<ResolversTypes['ArenaInformationType']>, ParentType, ContextType, RequireFields<StateQueryArenaInformationArgs, 'avatarAddresses' | 'championshipId' | 'round'>>;
  arenaParticipants?: Resolver<Array<Maybe<ResolversTypes['ArenaParticipantType']>>, ParentType, ContextType, RequireFields<StateQueryArenaParticipantsArgs, 'avatarAddress' | 'filterBounds'>>;
  avatar?: Resolver<Maybe<ResolversTypes['AvatarStateType']>, ParentType, ContextType, RequireFields<StateQueryAvatarArgs, 'avatarAddress'>>;
  avatars?: Resolver<Array<Maybe<ResolversTypes['AvatarStateType']>>, ParentType, ContextType, RequireFields<StateQueryAvatarsArgs, 'addresses'>>;
  balance?: Resolver<ResolversTypes['FungibleAssetValueWithCurrencyType'], ParentType, ContextType, RequireFields<StateQueryBalanceArgs, 'address' | 'currency'>>;
  cachedSheet?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<StateQueryCachedSheetArgs, 'tableName'>>;
  crystalMonsterCollectionMultiplierSheet?: Resolver<Maybe<ResolversTypes['CrystalMonsterCollectionMultiplierSheetType']>, ParentType, ContextType>;
  garages?: Resolver<Maybe<ResolversTypes['GaragesType']>, ParentType, ContextType, RequireFields<StateQueryGaragesArgs, 'agentAddr'>>;
  latestStakeRewards?: Resolver<Maybe<ResolversTypes['StakeRewardsType']>, ParentType, ContextType>;
  monsterCollectionSheet?: Resolver<Maybe<ResolversTypes['MonsterCollectionSheetType']>, ParentType, ContextType>;
  monsterCollectionState?: Resolver<Maybe<ResolversTypes['MonsterCollectionStateType']>, ParentType, ContextType, RequireFields<StateQueryMonsterCollectionStateArgs, 'agentAddress'>>;
  orderDigestList?: Resolver<Maybe<ResolversTypes['OrderDigestListStateType']>, ParentType, ContextType, RequireFields<StateQueryOrderDigestListArgs, 'avatarAddress'>>;
  pledge?: Resolver<ResolversTypes['MeadPledgeType'], ParentType, ContextType, RequireFields<StateQueryPledgeArgs, 'agentAddress'>>;
  raidId?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<StateQueryRaidIdArgs, 'blockIndex' | 'prev'>>;
  raiderList?: Resolver<Maybe<Array<ResolversTypes['Address']>>, ParentType, ContextType, RequireFields<StateQueryRaiderListArgs, 'raiderListAddress'>>;
  raiderState?: Resolver<Maybe<ResolversTypes['RaiderStateType']>, ParentType, ContextType, RequireFields<StateQueryRaiderStateArgs, 'raiderAddress'>>;
  rankingMap?: Resolver<Maybe<ResolversTypes['RankingMapStateType']>, ParentType, ContextType, RequireFields<StateQueryRankingMapArgs, 'index'>>;
  shardedShop?: Resolver<Maybe<ResolversTypes['ShardedShopStateV2Type']>, ParentType, ContextType, RequireFields<StateQueryShardedShopArgs, 'itemSubType' | 'nonce'>>;
  shop?: Resolver<Maybe<ResolversTypes['ShopStateType']>, ParentType, ContextType>;
  stakeRewards?: Resolver<Maybe<ResolversTypes['StakeRewardsType']>, ParentType, ContextType>;
  stakeState?: Resolver<Maybe<ResolversTypes['StakeStateType']>, ParentType, ContextType, RequireFields<StateQueryStakeStateArgs, 'address'>>;
  stakeStates?: Resolver<Array<Maybe<ResolversTypes['StakeStateType']>>, ParentType, ContextType, RequireFields<StateQueryStakeStatesArgs, 'addresses'>>;
  unlockedRecipeIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType, RequireFields<StateQueryUnlockedRecipeIdsArgs, 'avatarAddress'>>;
  unlockedWorldIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType, RequireFields<StateQueryUnlockedWorldIdsArgs, 'avatarAddress'>>;
  weeklyArena?: Resolver<Maybe<ResolversTypes['WeeklyArenaStateType']>, ParentType, ContextType, RequireFields<StateQueryWeeklyArenaArgs, 'index'>>;
  worldBossKillRewardRecord?: Resolver<Maybe<ResolversTypes['WorldBossKillRewardRecordType']>, ParentType, ContextType, RequireFields<StateQueryWorldBossKillRewardRecordArgs, 'worldBossKillRewardRecordAddress'>>;
  worldBossState?: Resolver<Maybe<ResolversTypes['WorldBossStateType']>, ParentType, ContextType, RequireFields<StateQueryWorldBossStateArgs, 'bossAddress'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StatsMapTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['StatsMapType'] = ResolversParentTypes['StatsMapType']> = {
  aTK?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  cRI?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dEF?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  hIT?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  hP?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  sPD?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TipChangedResolvers<ContextType = any, ParentType extends ResolversParentTypes['TipChanged'] = ResolversParentTypes['TipChanged']> = {
  hash?: Resolver<Maybe<ResolversTypes['ByteString']>, ParentType, ContextType>;
  index?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransactionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Transaction'] = ResolversParentTypes['Transaction']> = {
  actions?: Resolver<Array<ResolversTypes['Action']>, ParentType, ContextType>;
  blockRef?: Resolver<ResolversTypes['Block'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  nonce?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  publicKey?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType>;
  serializedPayload?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  signature?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType>;
  signer?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['DateTimeOffset'], ParentType, ContextType>;
  updatedAddresses?: Resolver<Array<ResolversTypes['Address']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransactionHeadlessQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['TransactionHeadlessQuery'] = ResolversParentTypes['TransactionHeadlessQuery']> = {
  attachSignature?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<TransactionHeadlessQueryAttachSignatureArgs, 'signature' | 'unsignedTransaction'>>;
  createUnsignedTx?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<TransactionHeadlessQueryCreateUnsignedTxArgs, 'plainValue' | 'publicKey'>>;
  getTx?: Resolver<Maybe<ResolversTypes['TransactionType']>, ParentType, ContextType, RequireFields<TransactionHeadlessQueryGetTxArgs, 'txId'>>;
  ncTransactions?: Resolver<Maybe<Array<Maybe<ResolversTypes['TransactionType']>>>, ParentType, ContextType, RequireFields<TransactionHeadlessQueryNcTransactionsArgs, 'actionType' | 'limit' | 'startingBlockIndex'>>;
  nextTxNonce?: Resolver<ResolversTypes['Long'], ParentType, ContextType, RequireFields<TransactionHeadlessQueryNextTxNonceArgs, 'address'>>;
  signTransaction?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<TransactionHeadlessQuerySignTransactionArgs, 'signature' | 'unsignedTransaction'>>;
  transactionResult?: Resolver<ResolversTypes['TxResultType'], ParentType, ContextType, RequireFields<TransactionHeadlessQueryTransactionResultArgs, 'txId'>>;
  transactionResults?: Resolver<Array<Maybe<ResolversTypes['TxResultType']>>, ParentType, ContextType, RequireFields<TransactionHeadlessQueryTransactionResultsArgs, 'txIds'>>;
  unsignedTransaction?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<TransactionHeadlessQueryUnsignedTransactionArgs, 'maxGasPrice' | 'plainValue' | 'publicKey'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransactionQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['TransactionQuery'] = ResolversParentTypes['TransactionQuery']> = {
  bindSignature?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<TransactionQueryBindSignatureArgs, 'signature' | 'unsignedTransaction'>>;
  nextNonce?: Resolver<ResolversTypes['Long'], ParentType, ContextType, RequireFields<TransactionQueryNextNonceArgs, 'address'>>;
  stagedTransactions?: Resolver<Array<ResolversTypes['Transaction']>, ParentType, ContextType, RequireFields<TransactionQueryStagedTransactionsArgs, 'desc' | 'offset'>>;
  transaction?: Resolver<Maybe<ResolversTypes['Transaction']>, ParentType, ContextType, Partial<TransactionQueryTransactionArgs>>;
  transactionResult?: Resolver<ResolversTypes['TxResultType'], ParentType, ContextType, RequireFields<TransactionQueryTransactionResultArgs, 'txId'>>;
  transactions?: Resolver<Array<ResolversTypes['Transaction']>, ParentType, ContextType, RequireFields<TransactionQueryTransactionsArgs, 'desc' | 'offset'>>;
  unsignedTransaction?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType, RequireFields<TransactionQueryUnsignedTransactionArgs, 'plainValue' | 'publicKey'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransactionTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TransactionType'] = ResolversParentTypes['TransactionType']> = {
  actions?: Resolver<Array<Maybe<ResolversTypes['Action']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['TxId'], ParentType, ContextType>;
  nonce?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  publicKey?: Resolver<ResolversTypes['PublicKeyType'], ParentType, ContextType>;
  serializedPayload?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  signature?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType>;
  signer?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAddresses?: Resolver<Array<Maybe<ResolversTypes['Address']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransferNcgHistoryTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TransferNCGHistoryType'] = ResolversParentTypes['TransferNCGHistoryType']> = {
  amount?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  blockHash?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType>;
  memo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recipient?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  sender?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  txId?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TrieResolvers<ContextType = any, ParentType extends ResolversParentTypes['Trie'] = ResolversParentTypes['Trie']> = {
  value?: Resolver<Maybe<ResolversTypes['IValue']>, ParentType, ContextType, RequireFields<TrieValueArgs, 'key'>>;
  values?: Resolver<Maybe<ResolversTypes['IValue']>, ParentType, ContextType, RequireFields<TrieValuesArgs, 'keys'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface TxIdScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['TxId'], any> {
  name: 'TxId';
}

export type TxResultTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TxResultType'] = ResolversParentTypes['TxResultType']> = {
  blockHash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  blockIndex?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  exceptionNames?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  inputState?: Resolver<Maybe<ResolversTypes['HashDigest_SHA256']>, ParentType, ContextType>;
  outputState?: Resolver<Maybe<ResolversTypes['HashDigest_SHA256']>, ParentType, ContextType>;
  txStatus?: Resolver<ResolversTypes['TxStatus'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TxTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TxType'] = ResolversParentTypes['TxType']> = {
  transaction?: Resolver<ResolversTypes['TransactionType'], ParentType, ContextType>;
  txResult?: Resolver<Maybe<ResolversTypes['TxResultType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ValidationQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ValidationQuery'] = ResolversParentTypes['ValidationQuery']> = {
  metadata?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<ValidationQueryMetadataArgs, 'raw'>>;
  privateKey?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<ValidationQueryPrivateKeyArgs, 'hex'>>;
  publicKey?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<ValidationQueryPublicKeyArgs, 'hex'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ValidatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Validator'] = ResolversParentTypes['Validator']> = {
  power?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  publicKey?: Resolver<ResolversTypes['PublicKey'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VoteResolvers<ContextType = any, ParentType extends ResolversParentTypes['Vote'] = ResolversParentTypes['Vote']> = {
  blockHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  flag?: Resolver<ResolversTypes['VoteFlag'], ParentType, ContextType>;
  height?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  round?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  signature?: Resolver<ResolversTypes['ByteString'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['DateTimeOffset'], ParentType, ContextType>;
  validatorPower?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  validatorPublicKey?: Resolver<ResolversTypes['PublicKey'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface VoteFlagScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['VoteFlag'], any> {
  name: 'VoteFlag';
}

export type WeeklyArenaStateTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['WeeklyArenaStateType'] = ResolversParentTypes['WeeklyArenaStateType']> = {
  address?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  ended?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  orderedArenaInfos?: Resolver<Array<Maybe<ResolversTypes['ArenaInfoType']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WorldBossKillRewardRecordMapTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['WorldBossKillRewardRecordMapType'] = ResolversParentTypes['WorldBossKillRewardRecordMapType']> = {
  bossLevel?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  claimed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WorldBossKillRewardRecordTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['WorldBossKillRewardRecordType'] = ResolversParentTypes['WorldBossKillRewardRecordType']> = {
  map?: Resolver<Array<ResolversTypes['WorldBossKillRewardRecordMapType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WorldBossStateTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['WorldBossStateType'] = ResolversParentTypes['WorldBossStateType']> = {
  currentHp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  endedBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  startedBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WorldInformationTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['WorldInformationType'] = ResolversParentTypes['WorldInformationType']> = {
  isStageCleared?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<WorldInformationTypeIsStageClearedArgs, 'stageId'>>;
  isWorldUnlocked?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<WorldInformationTypeIsWorldUnlockedArgs, 'worldId'>>;
  world?: Resolver<ResolversTypes['WorldType'], ParentType, ContextType, RequireFields<WorldInformationTypeWorldArgs, 'worldId'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WorldStateResolvers<ContextType = any, ParentType extends ResolversParentTypes['WorldState'] = ResolversParentTypes['WorldState']> = {
  account?: Resolver<ResolversTypes['AccountState'], ParentType, ContextType, RequireFields<WorldStateAccountArgs, 'address'>>;
  accounts?: Resolver<Array<ResolversTypes['AccountState']>, ParentType, ContextType, RequireFields<WorldStateAccountsArgs, 'addresses'>>;
  balance?: Resolver<ResolversTypes['FungibleAssetValue'], ParentType, ContextType, RequireFields<WorldStateBalanceArgs, 'address' | 'currency'>>;
  legacy?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  stateRootHash?: Resolver<ResolversTypes['HashDigestSHA256'], ParentType, ContextType>;
  totalSupply?: Resolver<ResolversTypes['FungibleAssetValue'], ParentType, ContextType, RequireFields<WorldStateTotalSupplyArgs, 'currency'>>;
  validatorSet?: Resolver<ResolversTypes['IValue'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WorldTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['WorldType'] = ResolversParentTypes['WorldType']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isStageCleared?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isUnlocked?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stageBegin?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stageClearedBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  stageClearedId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stageEnd?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  unlockedBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AccountState?: AccountStateResolvers<ContextType>;
  Action?: ActionResolvers<ContextType>;
  ActionMutation?: ActionMutationResolvers<ContextType>;
  ActionQuery?: ActionQueryResolvers<ContextType>;
  ActionTxQuery?: ActionTxQueryResolvers<ContextType>;
  ActivationStatusMutation?: ActivationStatusMutationResolvers<ContextType>;
  ActivationStatusQuery?: ActivationStatusQueryResolvers<ContextType>;
  Address?: GraphQLScalarType;
  AddressQuery?: AddressQueryResolvers<ContextType>;
  AgentStateType?: AgentStateTypeResolvers<ContextType>;
  AppProtocolVersionType?: AppProtocolVersionTypeResolvers<ContextType>;
  ArenaInfoType?: ArenaInfoTypeResolvers<ContextType>;
  ArenaInformationType?: ArenaInformationTypeResolvers<ContextType>;
  ArenaParticipantType?: ArenaParticipantTypeResolvers<ContextType>;
  ArenaRecordType?: ArenaRecordTypeResolvers<ContextType>;
  AvatarStateType?: AvatarStateTypeResolvers<ContextType>;
  BencodexValue?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Block?: BlockResolvers<ContextType>;
  BlockCommit?: BlockCommitResolvers<ContextType>;
  BlockHash?: GraphQLScalarType;
  BlockHeader?: BlockHeaderResolvers<ContextType>;
  BlockQuery?: BlockQueryResolvers<ContextType>;
  BoundPeer?: BoundPeerResolvers<ContextType>;
  Byte?: GraphQLScalarType;
  ByteString?: GraphQLScalarType;
  CollectionMapType?: CollectionMapTypeResolvers<ContextType>;
  CombinationSlotStateType?: CombinationSlotStateTypeResolvers<ContextType>;
  ConsumableType?: ConsumableTypeResolvers<ContextType>;
  CostumeType?: CostumeTypeResolvers<ContextType>;
  CraftQuery?: CraftQueryResolvers<ContextType>;
  CrystalMonsterCollectionMultiplierRowType?: CrystalMonsterCollectionMultiplierRowTypeResolvers<ContextType>;
  CrystalMonsterCollectionMultiplierSheetType?: CrystalMonsterCollectionMultiplierSheetTypeResolvers<ContextType>;
  Currency?: CurrencyResolvers<ContextType>;
  CurrencyType?: CurrencyTypeResolvers<ContextType>;
  DateTimeOffset?: GraphQLScalarType;
  Decimal?: GraphQLScalarType;
  DecimalStatType?: DecimalStatTypeResolvers<ContextType>;
  Diff?: DiffResolvers<ContextType>;
  DifferentAppProtocolVersionEncounterType?: DifferentAppProtocolVersionEncounterTypeResolvers<ContextType>;
  EquipmentType?: EquipmentTypeResolvers<ContextType>;
  Evidence?: EvidenceResolvers<ContextType>;
  EvidenceId?: GraphQLScalarType;
  EvidenceQuery?: EvidenceQueryResolvers<ContextType>;
  ExplorerQuery?: ExplorerQueryResolvers<ContextType>;
  FungibleAssetValue?: FungibleAssetValueResolvers<ContextType>;
  FungibleAssetValueType?: FungibleAssetValueTypeResolvers<ContextType>;
  FungibleAssetValueWithCurrencyType?: FungibleAssetValueWithCurrencyTypeResolvers<ContextType>;
  FungibleItemGarageWithAddressType?: FungibleItemGarageWithAddressTypeResolvers<ContextType>;
  FungibleItemType?: FungibleItemTypeResolvers<ContextType>;
  GaragesType?: GaragesTypeResolvers<ContextType>;
  Guid?: GraphQLScalarType;
  HashDigestSHA1?: GraphQLScalarType;
  HashDigestSHA256?: GraphQLScalarType;
  HashDigest_SHA256?: GraphQLScalarType;
  HelperQuery?: HelperQueryResolvers<ContextType>;
  IValue?: IValueResolvers<ContextType>;
  InventoryItemType?: InventoryItemTypeResolvers<ContextType>;
  InventoryType?: InventoryTypeResolvers<ContextType>;
  ItemUsableType?: ItemUsableTypeResolvers<ContextType>;
  KeyBytes?: GraphQLScalarType;
  KeyStoreMutation?: KeyStoreMutationResolvers<ContextType>;
  KeyStoreType?: KeyStoreTypeResolvers<ContextType>;
  LibplanetStateQuery?: LibplanetStateQueryResolvers<ContextType>;
  Long?: GraphQLScalarType;
  MailBoxType?: MailBoxTypeResolvers<ContextType>;
  MailType?: MailTypeResolvers<ContextType>;
  MaterialType?: MaterialTypeResolvers<ContextType>;
  MeadPledgeType?: MeadPledgeTypeResolvers<ContextType>;
  MonsterCollectionRewardInfoType?: MonsterCollectionRewardInfoTypeResolvers<ContextType>;
  MonsterCollectionRowType?: MonsterCollectionRowTypeResolvers<ContextType>;
  MonsterCollectionSheetType?: MonsterCollectionSheetTypeResolvers<ContextType>;
  MonsterCollectionStateType?: MonsterCollectionStateTypeResolvers<ContextType>;
  MonsterCollectionStatusType?: MonsterCollectionStatusTypeResolvers<ContextType>;
  MultiAccountInfo?: MultiAccountInfoResolvers<ContextType>;
  NodeExceptionType?: NodeExceptionTypeResolvers<ContextType>;
  NodeState?: NodeStateResolvers<ContextType>;
  NodeStatusType?: NodeStatusTypeResolvers<ContextType>;
  NotificationType?: NotificationTypeResolvers<ContextType>;
  OrderDigestListStateType?: OrderDigestListStateTypeResolvers<ContextType>;
  OrderDigestType?: OrderDigestTypeResolvers<ContextType>;
  PeerChainStateQuery?: PeerChainStateQueryResolvers<ContextType>;
  PreloadStateExtraType?: PreloadStateExtraTypeResolvers<ContextType>;
  PreloadStateType?: PreloadStateTypeResolvers<ContextType>;
  PrivateKeyType?: PrivateKeyTypeResolvers<ContextType>;
  ProtectedPrivateKeyType?: ProtectedPrivateKeyTypeResolvers<ContextType>;
  PublicKey?: GraphQLScalarType;
  PublicKeyType?: PublicKeyTypeResolvers<ContextType>;
  QuestListType?: QuestListTypeResolvers<ContextType>;
  RaiderStateType?: RaiderStateTypeResolvers<ContextType>;
  RankingInfoType?: RankingInfoTypeResolvers<ContextType>;
  RankingMapStateType?: RankingMapStateTypeResolvers<ContextType>;
  RawStateQuery?: RawStateQueryResolvers<ContextType>;
  RootStateDiff?: RootStateDiffResolvers<ContextType>;
  RpcInformationQuery?: RpcInformationQueryResolvers<ContextType>;
  RuneStateType?: RuneStateTypeResolvers<ContextType>;
  ShardedShopStateV2Type?: ShardedShopStateV2TypeResolvers<ContextType>;
  ShopItemType?: ShopItemTypeResolvers<ContextType>;
  ShopStateType?: ShopStateTypeResolvers<ContextType>;
  SkillType?: SkillTypeResolvers<ContextType>;
  StakeAchievementsType?: StakeAchievementsTypeResolvers<ContextType>;
  StakeRegularFixedRewardInfoType?: StakeRegularFixedRewardInfoTypeResolvers<ContextType>;
  StakeRegularRewardInfoType?: StakeRegularRewardInfoTypeResolvers<ContextType>;
  StakeRegularRewardsType?: StakeRegularRewardsTypeResolvers<ContextType>;
  StakeRewardsType?: StakeRewardsTypeResolvers<ContextType>;
  StakeStateType?: StakeStateTypeResolvers<ContextType>;
  StandaloneMutation?: StandaloneMutationResolvers<ContextType>;
  StandaloneQuery?: StandaloneQueryResolvers<ContextType>;
  StandaloneSubscription?: StandaloneSubscriptionResolvers<ContextType>;
  StateDiff?: StateDiffResolvers<ContextType>;
  StateQuery?: StateQueryResolvers<ContextType>;
  StatsMapType?: StatsMapTypeResolvers<ContextType>;
  TipChanged?: TipChangedResolvers<ContextType>;
  Transaction?: TransactionResolvers<ContextType>;
  TransactionHeadlessQuery?: TransactionHeadlessQueryResolvers<ContextType>;
  TransactionQuery?: TransactionQueryResolvers<ContextType>;
  TransactionType?: TransactionTypeResolvers<ContextType>;
  TransferNCGHistoryType?: TransferNcgHistoryTypeResolvers<ContextType>;
  Trie?: TrieResolvers<ContextType>;
  TxId?: GraphQLScalarType;
  TxResultType?: TxResultTypeResolvers<ContextType>;
  TxType?: TxTypeResolvers<ContextType>;
  ValidationQuery?: ValidationQueryResolvers<ContextType>;
  Validator?: ValidatorResolvers<ContextType>;
  Vote?: VoteResolvers<ContextType>;
  VoteFlag?: GraphQLScalarType;
  WeeklyArenaStateType?: WeeklyArenaStateTypeResolvers<ContextType>;
  WorldBossKillRewardRecordMapType?: WorldBossKillRewardRecordMapTypeResolvers<ContextType>;
  WorldBossKillRewardRecordType?: WorldBossKillRewardRecordTypeResolvers<ContextType>;
  WorldBossStateType?: WorldBossStateTypeResolvers<ContextType>;
  WorldInformationType?: WorldInformationTypeResolvers<ContextType>;
  WorldState?: WorldStateResolvers<ContextType>;
  WorldType?: WorldTypeResolvers<ContextType>;
};



export const GetTipDocument = gql`
    query getTip {
  nodeStatus {
    tip {
      index
    }
  }
}
    `;

/**
 * __useGetTipQuery__
 *
 * To run a query within a React component, call `useGetTipQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTipQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTipQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTipQuery(baseOptions?: Apollo.QueryHookOptions<GetTipQuery, GetTipQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTipQuery, GetTipQueryVariables>(GetTipDocument, options);
      }
export function useGetTipLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTipQuery, GetTipQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTipQuery, GetTipQueryVariables>(GetTipDocument, options);
        }
export function useGetTipSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTipQuery, GetTipQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTipQuery, GetTipQueryVariables>(GetTipDocument, options);
        }
export type GetTipQueryHookResult = ReturnType<typeof useGetTipQuery>;
export type GetTipLazyQueryHookResult = ReturnType<typeof useGetTipLazyQuery>;
export type GetTipSuspenseQueryHookResult = ReturnType<typeof useGetTipSuspenseQuery>;
export type GetTipQueryResult = Apollo.QueryResult<GetTipQuery, GetTipQueryVariables>;
export const GetAvatarsDocument = gql`
    query getAvatars($agentAddress: Address!) {
  stateQuery {
    agent(address: $agentAddress) {
      avatarStates {
        address
        name
        level
        actionPoint
        dailyRewardReceivedIndex
      }
    }
  }
}
    `;

/**
 * __useGetAvatarsQuery__
 *
 * To run a query within a React component, call `useGetAvatarsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAvatarsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAvatarsQuery({
 *   variables: {
 *      agentAddress: // value for 'agentAddress'
 *   },
 * });
 */
export function useGetAvatarsQuery(baseOptions: Apollo.QueryHookOptions<GetAvatarsQuery, GetAvatarsQueryVariables> & ({ variables: GetAvatarsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAvatarsQuery, GetAvatarsQueryVariables>(GetAvatarsDocument, options);
      }
export function useGetAvatarsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAvatarsQuery, GetAvatarsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAvatarsQuery, GetAvatarsQueryVariables>(GetAvatarsDocument, options);
        }
export function useGetAvatarsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAvatarsQuery, GetAvatarsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAvatarsQuery, GetAvatarsQueryVariables>(GetAvatarsDocument, options);
        }
export type GetAvatarsQueryHookResult = ReturnType<typeof useGetAvatarsQuery>;
export type GetAvatarsLazyQueryHookResult = ReturnType<typeof useGetAvatarsLazyQuery>;
export type GetAvatarsSuspenseQueryHookResult = ReturnType<typeof useGetAvatarsSuspenseQuery>;
export type GetAvatarsQueryResult = Apollo.QueryResult<GetAvatarsQuery, GetAvatarsQueryVariables>;
export const GetAvatarsWithTipDocument = gql`
    query GetAvatarsWithTip($agentAddress: Address!) {
  nodeStatus {
    tip {
      index
    }
  }
  stateQuery {
    agent(address: $agentAddress) {
      avatarStates {
        dailyRewardReceivedIndex
        address
        name
        index
        actionPoint
      }
    }
  }
}
    `;

/**
 * __useGetAvatarsWithTipQuery__
 *
 * To run a query within a React component, call `useGetAvatarsWithTipQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAvatarsWithTipQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAvatarsWithTipQuery({
 *   variables: {
 *      agentAddress: // value for 'agentAddress'
 *   },
 * });
 */
export function useGetAvatarsWithTipQuery(baseOptions: Apollo.QueryHookOptions<GetAvatarsWithTipQuery, GetAvatarsWithTipQueryVariables> & ({ variables: GetAvatarsWithTipQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAvatarsWithTipQuery, GetAvatarsWithTipQueryVariables>(GetAvatarsWithTipDocument, options);
      }
export function useGetAvatarsWithTipLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAvatarsWithTipQuery, GetAvatarsWithTipQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAvatarsWithTipQuery, GetAvatarsWithTipQueryVariables>(GetAvatarsWithTipDocument, options);
        }
export function useGetAvatarsWithTipSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAvatarsWithTipQuery, GetAvatarsWithTipQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAvatarsWithTipQuery, GetAvatarsWithTipQueryVariables>(GetAvatarsWithTipDocument, options);
        }
export type GetAvatarsWithTipQueryHookResult = ReturnType<typeof useGetAvatarsWithTipQuery>;
export type GetAvatarsWithTipLazyQueryHookResult = ReturnType<typeof useGetAvatarsWithTipLazyQuery>;
export type GetAvatarsWithTipSuspenseQueryHookResult = ReturnType<typeof useGetAvatarsWithTipSuspenseQuery>;
export type GetAvatarsWithTipQueryResult = Apollo.QueryResult<GetAvatarsWithTipQuery, GetAvatarsWithTipQueryVariables>;
export const StageTransactionDocument = gql`
    mutation StageTransaction($tx: String!) {
  stageTransaction(payload: $tx)
}
    `;
export type StageTransactionMutationFn = Apollo.MutationFunction<StageTransactionMutation, StageTransactionMutationVariables>;

/**
 * __useStageTransactionMutation__
 *
 * To run a mutation, you first call `useStageTransactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStageTransactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [stageTransactionMutation, { data, loading, error }] = useStageTransactionMutation({
 *   variables: {
 *      tx: // value for 'tx'
 *   },
 * });
 */
export function useStageTransactionMutation(baseOptions?: Apollo.MutationHookOptions<StageTransactionMutation, StageTransactionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<StageTransactionMutation, StageTransactionMutationVariables>(StageTransactionDocument, options);
      }
export type StageTransactionMutationHookResult = ReturnType<typeof useStageTransactionMutation>;
export type StageTransactionMutationResult = Apollo.MutationResult<StageTransactionMutation>;
export type StageTransactionMutationOptions = Apollo.BaseMutationOptions<StageTransactionMutation, StageTransactionMutationVariables>;