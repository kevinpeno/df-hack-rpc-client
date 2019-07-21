// package: isoworldremote
// file: isoworldremote.proto

import * as jspb from "google-protobuf";

export class ColorDefinition extends jspb.Message {
  hasRed(): boolean;
  clearRed(): void;
  getRed(): number | undefined;
  setRed(value: number): void;

  hasGreen(): boolean;
  clearGreen(): void;
  getGreen(): number | undefined;
  setGreen(value: number): void;

  hasBlue(): boolean;
  clearBlue(): void;
  getBlue(): number | undefined;
  setBlue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ColorDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: ColorDefinition): ColorDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ColorDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ColorDefinition;
  static deserializeBinaryFromReader(message: ColorDefinition, reader: jspb.BinaryReader): ColorDefinition;
}

export namespace ColorDefinition {
  export type AsObject = {
    red?: number,
    green?: number,
    blue?: number,
  }
}

export class EmbarkTileLayer extends jspb.Message {
  clearMatTypeTableList(): void;
  getMatTypeTableList(): Array<BasicMaterialMap[keyof BasicMaterialMap]>;
  setMatTypeTableList(value: Array<BasicMaterialMap[keyof BasicMaterialMap]>): void;
  addMatTypeTable(value: BasicMaterialMap[keyof BasicMaterialMap], index?: number): BasicMaterialMap[keyof BasicMaterialMap];

  clearMatSubtypeTableList(): void;
  getMatSubtypeTableList(): Array<number>;
  setMatSubtypeTableList(value: Array<number>): void;
  addMatSubtypeTable(value: number, index?: number): number;

  clearTileShapeTableList(): void;
  getTileShapeTableList(): Array<BasicShapeMap[keyof BasicShapeMap]>;
  setTileShapeTableList(value: Array<BasicShapeMap[keyof BasicShapeMap]>): void;
  addTileShapeTable(value: BasicShapeMap[keyof BasicShapeMap], index?: number): BasicShapeMap[keyof BasicShapeMap];

  clearTileColorTableList(): void;
  getTileColorTableList(): Array<ColorDefinition>;
  setTileColorTableList(value: Array<ColorDefinition>): void;
  addTileColorTable(value?: ColorDefinition, index?: number): ColorDefinition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmbarkTileLayer.AsObject;
  static toObject(includeInstance: boolean, msg: EmbarkTileLayer): EmbarkTileLayer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmbarkTileLayer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmbarkTileLayer;
  static deserializeBinaryFromReader(message: EmbarkTileLayer, reader: jspb.BinaryReader): EmbarkTileLayer;
}

export namespace EmbarkTileLayer {
  export type AsObject = {
    matTypeTableList: Array<BasicMaterialMap[keyof BasicMaterialMap]>,
    matSubtypeTableList: Array<number>,
    tileShapeTableList: Array<BasicShapeMap[keyof BasicShapeMap]>,
    tileColorTableList: Array<ColorDefinition.AsObject>,
  }
}

export class EmbarkTile extends jspb.Message {
  hasWorldX(): boolean;
  clearWorldX(): void;
  getWorldX(): number | undefined;
  setWorldX(value: number): void;

  hasWorldY(): boolean;
  clearWorldY(): void;
  getWorldY(): number | undefined;
  setWorldY(value: number): void;

  hasWorldZ(): boolean;
  clearWorldZ(): void;
  getWorldZ(): number | undefined;
  setWorldZ(value: number): void;

  clearTileLayerList(): void;
  getTileLayerList(): Array<EmbarkTileLayer>;
  setTileLayerList(value: Array<EmbarkTileLayer>): void;
  addTileLayer(value?: EmbarkTileLayer, index?: number): EmbarkTileLayer;

  hasCurrentYear(): boolean;
  clearCurrentYear(): void;
  getCurrentYear(): number | undefined;
  setCurrentYear(value: number): void;

  hasCurrentSeason(): boolean;
  clearCurrentSeason(): void;
  getCurrentSeason(): number | undefined;
  setCurrentSeason(value: number): void;

  hasIsValid(): boolean;
  clearIsValid(): void;
  getIsValid(): boolean | undefined;
  setIsValid(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmbarkTile.AsObject;
  static toObject(includeInstance: boolean, msg: EmbarkTile): EmbarkTile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmbarkTile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmbarkTile;
  static deserializeBinaryFromReader(message: EmbarkTile, reader: jspb.BinaryReader): EmbarkTile;
}

export namespace EmbarkTile {
  export type AsObject = {
    worldX?: number,
    worldY?: number,
    worldZ?: number,
    tileLayerList: Array<EmbarkTileLayer.AsObject>,
    currentYear?: number,
    currentSeason?: number,
    isValid?: boolean,
  }
}

export class TileRequest extends jspb.Message {
  hasWantX(): boolean;
  clearWantX(): void;
  getWantX(): number | undefined;
  setWantX(value: number): void;

  hasWantY(): boolean;
  clearWantY(): void;
  getWantY(): number | undefined;
  setWantY(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TileRequest): TileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TileRequest;
  static deserializeBinaryFromReader(message: TileRequest, reader: jspb.BinaryReader): TileRequest;
}

export namespace TileRequest {
  export type AsObject = {
    wantX?: number,
    wantY?: number,
  }
}

export class MapRequest extends jspb.Message {
  hasSaveFolder(): boolean;
  clearSaveFolder(): void;
  getSaveFolder(): string | undefined;
  setSaveFolder(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MapRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MapRequest): MapRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MapRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MapRequest;
  static deserializeBinaryFromReader(message: MapRequest, reader: jspb.BinaryReader): MapRequest;
}

export namespace MapRequest {
  export type AsObject = {
    saveFolder?: string,
  }
}

export class MapReply extends jspb.Message {
  hasAvailable(): boolean;
  clearAvailable(): void;
  getAvailable(): boolean | undefined;
  setAvailable(value: boolean): void;

  hasRegionX(): boolean;
  clearRegionX(): void;
  getRegionX(): number | undefined;
  setRegionX(value: number): void;

  hasRegionY(): boolean;
  clearRegionY(): void;
  getRegionY(): number | undefined;
  setRegionY(value: number): void;

  hasRegionSizeX(): boolean;
  clearRegionSizeX(): void;
  getRegionSizeX(): number | undefined;
  setRegionSizeX(value: number): void;

  hasRegionSizeY(): boolean;
  clearRegionSizeY(): void;
  getRegionSizeY(): number | undefined;
  setRegionSizeY(value: number): void;

  hasCurrentYear(): boolean;
  clearCurrentYear(): void;
  getCurrentYear(): number | undefined;
  setCurrentYear(value: number): void;

  hasCurrentSeason(): boolean;
  clearCurrentSeason(): void;
  getCurrentSeason(): number | undefined;
  setCurrentSeason(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MapReply.AsObject;
  static toObject(includeInstance: boolean, msg: MapReply): MapReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MapReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MapReply;
  static deserializeBinaryFromReader(message: MapReply, reader: jspb.BinaryReader): MapReply;
}

export namespace MapReply {
  export type AsObject = {
    available?: boolean,
    regionX?: number,
    regionY?: number,
    regionSizeX?: number,
    regionSizeY?: number,
    currentYear?: number,
    currentSeason?: number,
  }
}

export class RawNames extends jspb.Message {
  hasAvailable(): boolean;
  clearAvailable(): void;
  getAvailable(): boolean | undefined;
  setAvailable(value: boolean): void;

  clearInorganicList(): void;
  getInorganicList(): Array<string>;
  setInorganicList(value: Array<string>): void;
  addInorganic(value: string, index?: number): string;

  clearOrganicList(): void;
  getOrganicList(): Array<string>;
  setOrganicList(value: Array<string>): void;
  addOrganic(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RawNames.AsObject;
  static toObject(includeInstance: boolean, msg: RawNames): RawNames.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RawNames, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RawNames;
  static deserializeBinaryFromReader(message: RawNames, reader: jspb.BinaryReader): RawNames;
}

export namespace RawNames {
  export type AsObject = {
    available?: boolean,
    inorganicList: Array<string>,
    organicList: Array<string>,
  }
}

export interface BasicMaterialMap {
  AIR: 0;
  OTHER: 1;
  INORGANIC: 2;
  LIQUID: 3;
  PLANT: 4;
  WOOD: 5;
}

export const BasicMaterial: BasicMaterialMap;

export interface LiquidTypeMap {
  ICE: 0;
  WATER: 1;
  MAGMA: 2;
}

export const LiquidType: LiquidTypeMap;

export interface BasicShapeMap {
  NONE: 0;
  OPEN: 1;
  WALL: 3;
  FLOOR: 4;
  RAMP_UP: 5;
  RAMP_DOWN: 6;
}

export const BasicShape: BasicShapeMap;

