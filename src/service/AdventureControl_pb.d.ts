// package: AdventureControl
// file: AdventureControl.proto

import * as jspb from "google-protobuf";
import * as RemoteFortressReader_pb from "./RemoteFortressReader_pb";

export class MoveCommandParams extends jspb.Message {
  hasDirection(): boolean;
  clearDirection(): void;
  getDirection(): RemoteFortressReader_pb.Coord | undefined;
  setDirection(value?: RemoteFortressReader_pb.Coord): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoveCommandParams.AsObject;
  static toObject(includeInstance: boolean, msg: MoveCommandParams): MoveCommandParams.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MoveCommandParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoveCommandParams;
  static deserializeBinaryFromReader(message: MoveCommandParams, reader: jspb.BinaryReader): MoveCommandParams;
}

export namespace MoveCommandParams {
  export type AsObject = {
    direction?: RemoteFortressReader_pb.Coord.AsObject,
  }
}

export class MovementOption extends jspb.Message {
  hasDest(): boolean;
  clearDest(): void;
  getDest(): RemoteFortressReader_pb.Coord | undefined;
  setDest(value?: RemoteFortressReader_pb.Coord): void;

  hasSource(): boolean;
  clearSource(): void;
  getSource(): RemoteFortressReader_pb.Coord | undefined;
  setSource(value?: RemoteFortressReader_pb.Coord): void;

  hasGrab(): boolean;
  clearGrab(): void;
  getGrab(): RemoteFortressReader_pb.Coord | undefined;
  setGrab(value?: RemoteFortressReader_pb.Coord): void;

  hasMovementType(): boolean;
  clearMovementType(): void;
  getMovementType(): CarefulMovementTypeMap[keyof CarefulMovementTypeMap] | undefined;
  setMovementType(value: CarefulMovementTypeMap[keyof CarefulMovementTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MovementOption.AsObject;
  static toObject(includeInstance: boolean, msg: MovementOption): MovementOption.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MovementOption, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MovementOption;
  static deserializeBinaryFromReader(message: MovementOption, reader: jspb.BinaryReader): MovementOption;
}

export namespace MovementOption {
  export type AsObject = {
    dest?: RemoteFortressReader_pb.Coord.AsObject,
    source?: RemoteFortressReader_pb.Coord.AsObject,
    grab?: RemoteFortressReader_pb.Coord.AsObject,
    movementType?: CarefulMovementTypeMap[keyof CarefulMovementTypeMap],
  }
}

export class MenuContents extends jspb.Message {
  hasCurrentMenu(): boolean;
  clearCurrentMenu(): void;
  getCurrentMenu(): AdvmodeMenuMap[keyof AdvmodeMenuMap] | undefined;
  setCurrentMenu(value: AdvmodeMenuMap[keyof AdvmodeMenuMap]): void;

  clearMovementsList(): void;
  getMovementsList(): Array<MovementOption>;
  setMovementsList(value: Array<MovementOption>): void;
  addMovements(value?: MovementOption, index?: number): MovementOption;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MenuContents.AsObject;
  static toObject(includeInstance: boolean, msg: MenuContents): MenuContents.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MenuContents, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MenuContents;
  static deserializeBinaryFromReader(message: MenuContents, reader: jspb.BinaryReader): MenuContents;
}

export namespace MenuContents {
  export type AsObject = {
    currentMenu?: AdvmodeMenuMap[keyof AdvmodeMenuMap],
    movementsList: Array<MovementOption.AsObject>,
  }
}

export class MiscMoveParams extends jspb.Message {
  hasType(): boolean;
  clearType(): void;
  getType(): MiscMoveTypeMap[keyof MiscMoveTypeMap] | undefined;
  setType(value: MiscMoveTypeMap[keyof MiscMoveTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MiscMoveParams.AsObject;
  static toObject(includeInstance: boolean, msg: MiscMoveParams): MiscMoveParams.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MiscMoveParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MiscMoveParams;
  static deserializeBinaryFromReader(message: MiscMoveParams, reader: jspb.BinaryReader): MiscMoveParams;
}

export namespace MiscMoveParams {
  export type AsObject = {
    type?: MiscMoveTypeMap[keyof MiscMoveTypeMap],
  }
}

export interface AdvmodeMenuMap {
  DEFAULT: 0;
  LOOK: 1;
  CONVERSATIONADDRESS: 2;
  CONVERSATIONSELECT: 3;
  CONVERSATIONSPEAK: 4;
  INVENTORY: 5;
  DROP: 6;
  THROWITEM: 7;
  WEAR: 8;
  REMOVE: 9;
  INTERACT: 10;
  PUT: 11;
  PUTCONTAINER: 12;
  EAT: 13;
  THROWAIM: 14;
  FIRE: 15;
  GET: 16;
  UNK17: 17;
  COMBATPREFS: 18;
  COMPANIONS: 19;
  MOVEMENTPREFS: 20;
  SPEEDPREFS: 21;
  INTERACTACTION: 22;
  MOVECAREFULLY: 23;
  ANNOUNCEMENTS: 24;
  USEBUILDING: 25;
  TRAVEL: 26;
  UNK27: 27;
  UNK28: 28;
  SLEEPCONFIRM: 29;
  SELECTINTERACTIONTARGET: 30;
  UNK31: 31;
  UNK32: 32;
  FALLACTION: 33;
  VIEWTRACKS: 34;
  JUMP: 35;
  UNK36: 36;
  ATTACKCONFIRM: 37;
  ATTACKTYPE: 38;
  ATTACKBODYPART: 39;
  ATTACKSTRIKE: 40;
  UNK41: 41;
  UNK42: 42;
  DODGEDIRECTION: 43;
  UNK44: 44;
  UNK45: 45;
  BUILD: 46;
}

export const AdvmodeMenu: AdvmodeMenuMap;

export interface CarefulMovementTypeMap {
  DEFAULT_MOVEMENT: 0;
  RELEASE_ITEM_HOLD: 1;
  RELEASE_TILE_HOLD: 2;
  ATTACK_CREATURE: 3;
  HOLD_TILE: 4;
  MOVE: 5;
  CLIMB: 6;
  HOLD_ITEM: 7;
  BUILDING_INTERACT: 8;
  ITEM_INTERACT: 9;
  ITEM_INTERACT_GUIDE: 10;
  ITEM_INTERACT_RIDE: 11;
  ITEM_INTERACT_PUSH: 12;
}

export const CarefulMovementType: CarefulMovementTypeMap;

export interface MiscMoveTypeMap {
  SET_CLIMB: 0;
  SET_STAND: 1;
  SET_CANCEL: 2;
}

export const MiscMoveType: MiscMoveTypeMap;

