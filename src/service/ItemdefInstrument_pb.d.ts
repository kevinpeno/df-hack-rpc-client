// package: ItemdefInstrument
// file: ItemdefInstrument.proto

import * as jspb from "google-protobuf";

export class InstrumentFlags extends jspb.Message {
  hasIndefinitePitch(): boolean;
  clearIndefinitePitch(): void;
  getIndefinitePitch(): boolean | undefined;
  setIndefinitePitch(value: boolean): void;

  hasPlacedAsBuilding(): boolean;
  clearPlacedAsBuilding(): void;
  getPlacedAsBuilding(): boolean | undefined;
  setPlacedAsBuilding(value: boolean): void;

  hasMetalMat(): boolean;
  clearMetalMat(): void;
  getMetalMat(): boolean | undefined;
  setMetalMat(value: boolean): void;

  hasStoneMat(): boolean;
  clearStoneMat(): void;
  getStoneMat(): boolean | undefined;
  setStoneMat(value: boolean): void;

  hasWoodMat(): boolean;
  clearWoodMat(): void;
  getWoodMat(): boolean | undefined;
  setWoodMat(value: boolean): void;

  hasGlassMat(): boolean;
  clearGlassMat(): void;
  getGlassMat(): boolean | undefined;
  setGlassMat(value: boolean): void;

  hasCeramicMat(): boolean;
  clearCeramicMat(): void;
  getCeramicMat(): boolean | undefined;
  setCeramicMat(value: boolean): void;

  hasShellMat(): boolean;
  clearShellMat(): void;
  getShellMat(): boolean | undefined;
  setShellMat(value: boolean): void;

  hasBoneMat(): boolean;
  clearBoneMat(): void;
  getBoneMat(): boolean | undefined;
  setBoneMat(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstrumentFlags.AsObject;
  static toObject(includeInstance: boolean, msg: InstrumentFlags): InstrumentFlags.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InstrumentFlags, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstrumentFlags;
  static deserializeBinaryFromReader(message: InstrumentFlags, reader: jspb.BinaryReader): InstrumentFlags;
}

export namespace InstrumentFlags {
  export type AsObject = {
    indefinitePitch?: boolean,
    placedAsBuilding?: boolean,
    metalMat?: boolean,
    stoneMat?: boolean,
    woodMat?: boolean,
    glassMat?: boolean,
    ceramicMat?: boolean,
    shellMat?: boolean,
    boneMat?: boolean,
  }
}

export class InstrumentPiece extends jspb.Message {
  hasType(): boolean;
  clearType(): void;
  getType(): string | undefined;
  setType(value: string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): string | undefined;
  setId(value: string): void;

  hasName(): boolean;
  clearName(): void;
  getName(): string | undefined;
  setName(value: string): void;

  hasNamePlural(): boolean;
  clearNamePlural(): void;
  getNamePlural(): string | undefined;
  setNamePlural(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstrumentPiece.AsObject;
  static toObject(includeInstance: boolean, msg: InstrumentPiece): InstrumentPiece.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InstrumentPiece, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstrumentPiece;
  static deserializeBinaryFromReader(message: InstrumentPiece, reader: jspb.BinaryReader): InstrumentPiece;
}

export namespace InstrumentPiece {
  export type AsObject = {
    type?: string,
    id?: string,
    name?: string,
    namePlural?: string,
  }
}

export class InstrumentRegister extends jspb.Message {
  hasPitchRangeMin(): boolean;
  clearPitchRangeMin(): void;
  getPitchRangeMin(): number | undefined;
  setPitchRangeMin(value: number): void;

  hasPitchRangeMax(): boolean;
  clearPitchRangeMax(): void;
  getPitchRangeMax(): number | undefined;
  setPitchRangeMax(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstrumentRegister.AsObject;
  static toObject(includeInstance: boolean, msg: InstrumentRegister): InstrumentRegister.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InstrumentRegister, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstrumentRegister;
  static deserializeBinaryFromReader(message: InstrumentRegister, reader: jspb.BinaryReader): InstrumentRegister;
}

export namespace InstrumentRegister {
  export type AsObject = {
    pitchRangeMin?: number,
    pitchRangeMax?: number,
  }
}

export class InstrumentDef extends jspb.Message {
  hasFlags(): boolean;
  clearFlags(): void;
  getFlags(): InstrumentFlags | undefined;
  setFlags(value?: InstrumentFlags): void;

  hasSize(): boolean;
  clearSize(): void;
  getSize(): number | undefined;
  setSize(value: number): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): number | undefined;
  setValue(value: number): void;

  hasMaterialSize(): boolean;
  clearMaterialSize(): void;
  getMaterialSize(): number | undefined;
  setMaterialSize(value: number): void;

  clearPiecesList(): void;
  getPiecesList(): Array<InstrumentPiece>;
  setPiecesList(value: Array<InstrumentPiece>): void;
  addPieces(value?: InstrumentPiece, index?: number): InstrumentPiece;

  hasPitchRangeMin(): boolean;
  clearPitchRangeMin(): void;
  getPitchRangeMin(): number | undefined;
  setPitchRangeMin(value: number): void;

  hasPitchRangeMax(): boolean;
  clearPitchRangeMax(): void;
  getPitchRangeMax(): number | undefined;
  setPitchRangeMax(value: number): void;

  hasVolumeMbMin(): boolean;
  clearVolumeMbMin(): void;
  getVolumeMbMin(): number | undefined;
  setVolumeMbMin(value: number): void;

  hasVolumeMbMax(): boolean;
  clearVolumeMbMax(): void;
  getVolumeMbMax(): number | undefined;
  setVolumeMbMax(value: number): void;

  clearSoundProductionList(): void;
  getSoundProductionList(): Array<SoundProductionTypeMap[keyof SoundProductionTypeMap]>;
  setSoundProductionList(value: Array<SoundProductionTypeMap[keyof SoundProductionTypeMap]>): void;
  addSoundProduction(value: SoundProductionTypeMap[keyof SoundProductionTypeMap], index?: number): SoundProductionTypeMap[keyof SoundProductionTypeMap];

  clearSoundProductionParm1List(): void;
  getSoundProductionParm1List(): Array<string>;
  setSoundProductionParm1List(value: Array<string>): void;
  addSoundProductionParm1(value: string, index?: number): string;

  clearSoundProductionParm2List(): void;
  getSoundProductionParm2List(): Array<string>;
  setSoundProductionParm2List(value: Array<string>): void;
  addSoundProductionParm2(value: string, index?: number): string;

  clearPitchChoiceList(): void;
  getPitchChoiceList(): Array<PitchChoiceTypeMap[keyof PitchChoiceTypeMap]>;
  setPitchChoiceList(value: Array<PitchChoiceTypeMap[keyof PitchChoiceTypeMap]>): void;
  addPitchChoice(value: PitchChoiceTypeMap[keyof PitchChoiceTypeMap], index?: number): PitchChoiceTypeMap[keyof PitchChoiceTypeMap];

  clearPitchChoiceParm1List(): void;
  getPitchChoiceParm1List(): Array<string>;
  setPitchChoiceParm1List(value: Array<string>): void;
  addPitchChoiceParm1(value: string, index?: number): string;

  clearPitchChoiceParm2List(): void;
  getPitchChoiceParm2List(): Array<string>;
  setPitchChoiceParm2List(value: Array<string>): void;
  addPitchChoiceParm2(value: string, index?: number): string;

  clearTuningList(): void;
  getTuningList(): Array<TuningTypeMap[keyof TuningTypeMap]>;
  setTuningList(value: Array<TuningTypeMap[keyof TuningTypeMap]>): void;
  addTuning(value: TuningTypeMap[keyof TuningTypeMap], index?: number): TuningTypeMap[keyof TuningTypeMap];

  clearTuningParmList(): void;
  getTuningParmList(): Array<string>;
  setTuningParmList(value: Array<string>): void;
  addTuningParm(value: string, index?: number): string;

  clearRegistersList(): void;
  getRegistersList(): Array<InstrumentRegister>;
  setRegistersList(value: Array<InstrumentRegister>): void;
  addRegisters(value?: InstrumentRegister, index?: number): InstrumentRegister;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string | undefined;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstrumentDef.AsObject;
  static toObject(includeInstance: boolean, msg: InstrumentDef): InstrumentDef.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InstrumentDef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstrumentDef;
  static deserializeBinaryFromReader(message: InstrumentDef, reader: jspb.BinaryReader): InstrumentDef;
}

export namespace InstrumentDef {
  export type AsObject = {
    flags?: InstrumentFlags.AsObject,
    size?: number,
    value?: number,
    materialSize?: number,
    piecesList: Array<InstrumentPiece.AsObject>,
    pitchRangeMin?: number,
    pitchRangeMax?: number,
    volumeMbMin?: number,
    volumeMbMax?: number,
    soundProductionList: Array<SoundProductionTypeMap[keyof SoundProductionTypeMap]>,
    soundProductionParm1List: Array<string>,
    soundProductionParm2List: Array<string>,
    pitchChoiceList: Array<PitchChoiceTypeMap[keyof PitchChoiceTypeMap]>,
    pitchChoiceParm1List: Array<string>,
    pitchChoiceParm2List: Array<string>,
    tuningList: Array<TuningTypeMap[keyof TuningTypeMap]>,
    tuningParmList: Array<string>,
    registersList: Array<InstrumentRegister.AsObject>,
    description?: string,
  }
}

export interface PitchChoiceTypeMap {
  MEMBRANE_POSITION: 0;
  SUBPART_CHOICE: 1;
  KEYBOARD: 2;
  STOPPING_FRET: 3;
  STOPPING_AGAINST_BODY: 4;
  STOPPING_HOLE: 5;
  STOPPING_HOLE_KEY: 6;
  SLIDE: 7;
  HARMONIC_SERIES: 8;
  VALVE_ROUTES_AIR: 9;
  BP_IN_BELL: 10;
  FOOT_PEDALS: 11;
}

export const PitchChoiceType: PitchChoiceTypeMap;

export interface SoundProductionTypeMap {
  PLUCKED_BY_BP: 0;
  PLUCKED: 1;
  BOWED: 2;
  STRUCK_BY_BP: 3;
  STRUCK: 4;
  VIBRATE_BP_AGAINST_OPENING: 5;
  BLOW_AGAINST_FIPPLE: 6;
  BLOW_OVER_OPENING_SIDE: 7;
  BLOW_OVER_OPENING_END: 8;
  BLOW_OVER_SINGLE_REED: 9;
  BLOW_OVER_DOUBLE_REED: 10;
  BLOW_OVER_FREE_REED: 11;
  STRUCK_TOGETHER: 12;
  SHAKEN: 13;
  SCRAPED: 14;
  FRICTION: 15;
  RESONATOR: 16;
  BAG_OVER_REED: 17;
  AIR_OVER_REED: 18;
  AIR_OVER_FREE_REED: 19;
  AIR_AGAINST_FIPPLE: 20;
}

export const SoundProductionType: SoundProductionTypeMap;

export interface TuningTypeMap {
  PEGS: 0;
  ADJUSTABLE_BRIDGES: 1;
  CROOKS: 2;
  TIGHTENING: 3;
  LEVERS: 4;
}

export const TuningType: TuningTypeMap;

