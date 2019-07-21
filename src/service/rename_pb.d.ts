// package: dfproto
// file: rename.proto

import * as jspb from "google-protobuf";

export class RenameSquadIn extends jspb.Message {
  hasSquadId(): boolean;
  clearSquadId(): void;
  getSquadId(): number | undefined;
  setSquadId(value: number): void;

  hasNickname(): boolean;
  clearNickname(): void;
  getNickname(): string | undefined;
  setNickname(value: string): void;

  hasAlias(): boolean;
  clearAlias(): void;
  getAlias(): string | undefined;
  setAlias(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RenameSquadIn.AsObject;
  static toObject(includeInstance: boolean, msg: RenameSquadIn): RenameSquadIn.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RenameSquadIn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RenameSquadIn;
  static deserializeBinaryFromReader(message: RenameSquadIn, reader: jspb.BinaryReader): RenameSquadIn;
}

export namespace RenameSquadIn {
  export type AsObject = {
    squadId?: number,
    nickname?: string,
    alias?: string,
  }
}

export class RenameUnitIn extends jspb.Message {
  hasUnitId(): boolean;
  clearUnitId(): void;
  getUnitId(): number | undefined;
  setUnitId(value: number): void;

  hasNickname(): boolean;
  clearNickname(): void;
  getNickname(): string | undefined;
  setNickname(value: string): void;

  hasProfession(): boolean;
  clearProfession(): void;
  getProfession(): string | undefined;
  setProfession(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RenameUnitIn.AsObject;
  static toObject(includeInstance: boolean, msg: RenameUnitIn): RenameUnitIn.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RenameUnitIn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RenameUnitIn;
  static deserializeBinaryFromReader(message: RenameUnitIn, reader: jspb.BinaryReader): RenameUnitIn;
}

export namespace RenameUnitIn {
  export type AsObject = {
    unitId?: number,
    nickname?: string,
    profession?: string,
  }
}

export class RenameBuildingIn extends jspb.Message {
  hasBuildingId(): boolean;
  clearBuildingId(): void;
  getBuildingId(): number | undefined;
  setBuildingId(value: number): void;

  hasName(): boolean;
  clearName(): void;
  getName(): string | undefined;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RenameBuildingIn.AsObject;
  static toObject(includeInstance: boolean, msg: RenameBuildingIn): RenameBuildingIn.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RenameBuildingIn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RenameBuildingIn;
  static deserializeBinaryFromReader(message: RenameBuildingIn, reader: jspb.BinaryReader): RenameBuildingIn;
}

export namespace RenameBuildingIn {
  export type AsObject = {
    buildingId?: number,
    name?: string,
  }
}

