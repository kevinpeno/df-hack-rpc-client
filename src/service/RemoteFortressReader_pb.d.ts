// package: RemoteFortressReader
// file: RemoteFortressReader.proto

import * as jspb from "google-protobuf";
import * as ItemdefInstrument_pb from "./ItemdefInstrument_pb";

export class Coord extends jspb.Message {
  hasX(): boolean;
  clearX(): void;
  getX(): number | undefined;
  setX(value: number): void;

  hasY(): boolean;
  clearY(): void;
  getY(): number | undefined;
  setY(value: number): void;

  hasZ(): boolean;
  clearZ(): void;
  getZ(): number | undefined;
  setZ(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Coord.AsObject;
  static toObject(includeInstance: boolean, msg: Coord): Coord.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Coord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Coord;
  static deserializeBinaryFromReader(message: Coord, reader: jspb.BinaryReader): Coord;
}

export namespace Coord {
  export type AsObject = {
    x?: number,
    y?: number,
    z?: number,
  }
}

export class Tiletype extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): number | undefined;
  setId(value: number): void;

  hasName(): boolean;
  clearName(): void;
  getName(): string | undefined;
  setName(value: string): void;

  hasCaption(): boolean;
  clearCaption(): void;
  getCaption(): string | undefined;
  setCaption(value: string): void;

  hasShape(): boolean;
  clearShape(): void;
  getShape(): TiletypeShapeMap[keyof TiletypeShapeMap] | undefined;
  setShape(value: TiletypeShapeMap[keyof TiletypeShapeMap]): void;

  hasSpecial(): boolean;
  clearSpecial(): void;
  getSpecial(): TiletypeSpecialMap[keyof TiletypeSpecialMap] | undefined;
  setSpecial(value: TiletypeSpecialMap[keyof TiletypeSpecialMap]): void;

  hasMaterial(): boolean;
  clearMaterial(): void;
  getMaterial(): TiletypeMaterialMap[keyof TiletypeMaterialMap] | undefined;
  setMaterial(value: TiletypeMaterialMap[keyof TiletypeMaterialMap]): void;

  hasVariant(): boolean;
  clearVariant(): void;
  getVariant(): TiletypeVariantMap[keyof TiletypeVariantMap] | undefined;
  setVariant(value: TiletypeVariantMap[keyof TiletypeVariantMap]): void;

  hasDirection(): boolean;
  clearDirection(): void;
  getDirection(): string | undefined;
  setDirection(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tiletype.AsObject;
  static toObject(includeInstance: boolean, msg: Tiletype): Tiletype.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Tiletype, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tiletype;
  static deserializeBinaryFromReader(message: Tiletype, reader: jspb.BinaryReader): Tiletype;
}

export namespace Tiletype {
  export type AsObject = {
    id?: number,
    name?: string,
    caption?: string,
    shape?: TiletypeShapeMap[keyof TiletypeShapeMap],
    special?: TiletypeSpecialMap[keyof TiletypeSpecialMap],
    material?: TiletypeMaterialMap[keyof TiletypeMaterialMap],
    variant?: TiletypeVariantMap[keyof TiletypeVariantMap],
    direction?: string,
  }
}

export class TiletypeList extends jspb.Message {
  clearTiletypeListList(): void;
  getTiletypeListList(): Array<Tiletype>;
  setTiletypeListList(value: Array<Tiletype>): void;
  addTiletypeList(value?: Tiletype, index?: number): Tiletype;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TiletypeList.AsObject;
  static toObject(includeInstance: boolean, msg: TiletypeList): TiletypeList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TiletypeList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TiletypeList;
  static deserializeBinaryFromReader(message: TiletypeList, reader: jspb.BinaryReader): TiletypeList;
}

export namespace TiletypeList {
  export type AsObject = {
    tiletypeListList: Array<Tiletype.AsObject>,
  }
}

export class BuildingExtents extends jspb.Message {
  hasPosX(): boolean;
  clearPosX(): void;
  getPosX(): number | undefined;
  setPosX(value: number): void;

  hasPosY(): boolean;
  clearPosY(): void;
  getPosY(): number | undefined;
  setPosY(value: number): void;

  hasWidth(): boolean;
  clearWidth(): void;
  getWidth(): number | undefined;
  setWidth(value: number): void;

  hasHeight(): boolean;
  clearHeight(): void;
  getHeight(): number | undefined;
  setHeight(value: number): void;

  clearExtentsList(): void;
  getExtentsList(): Array<number>;
  setExtentsList(value: Array<number>): void;
  addExtents(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildingExtents.AsObject;
  static toObject(includeInstance: boolean, msg: BuildingExtents): BuildingExtents.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuildingExtents, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildingExtents;
  static deserializeBinaryFromReader(message: BuildingExtents, reader: jspb.BinaryReader): BuildingExtents;
}

export namespace BuildingExtents {
  export type AsObject = {
    posX?: number,
    posY?: number,
    width?: number,
    height?: number,
    extentsList: Array<number>,
  }
}

export class BuildingItem extends jspb.Message {
  hasItem(): boolean;
  clearItem(): void;
  getItem(): Item | undefined;
  setItem(value?: Item): void;

  hasMode(): boolean;
  clearMode(): void;
  getMode(): number | undefined;
  setMode(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildingItem.AsObject;
  static toObject(includeInstance: boolean, msg: BuildingItem): BuildingItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuildingItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildingItem;
  static deserializeBinaryFromReader(message: BuildingItem, reader: jspb.BinaryReader): BuildingItem;
}

export namespace BuildingItem {
  export type AsObject = {
    item?: Item.AsObject,
    mode?: number,
  }
}

export class BuildingInstance extends jspb.Message {
  hasIndex(): boolean;
  clearIndex(): void;
  getIndex(): number | undefined;
  setIndex(value: number): void;

  hasPosXMin(): boolean;
  clearPosXMin(): void;
  getPosXMin(): number | undefined;
  setPosXMin(value: number): void;

  hasPosYMin(): boolean;
  clearPosYMin(): void;
  getPosYMin(): number | undefined;
  setPosYMin(value: number): void;

  hasPosZMin(): boolean;
  clearPosZMin(): void;
  getPosZMin(): number | undefined;
  setPosZMin(value: number): void;

  hasPosXMax(): boolean;
  clearPosXMax(): void;
  getPosXMax(): number | undefined;
  setPosXMax(value: number): void;

  hasPosYMax(): boolean;
  clearPosYMax(): void;
  getPosYMax(): number | undefined;
  setPosYMax(value: number): void;

  hasPosZMax(): boolean;
  clearPosZMax(): void;
  getPosZMax(): number | undefined;
  setPosZMax(value: number): void;

  hasBuildingType(): boolean;
  clearBuildingType(): void;
  getBuildingType(): BuildingType | undefined;
  setBuildingType(value?: BuildingType): void;

  hasMaterial(): boolean;
  clearMaterial(): void;
  getMaterial(): MatPair | undefined;
  setMaterial(value?: MatPair): void;

  hasBuildingFlags(): boolean;
  clearBuildingFlags(): void;
  getBuildingFlags(): number | undefined;
  setBuildingFlags(value: number): void;

  hasIsRoom(): boolean;
  clearIsRoom(): void;
  getIsRoom(): boolean | undefined;
  setIsRoom(value: boolean): void;

  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): BuildingExtents | undefined;
  setRoom(value?: BuildingExtents): void;

  hasDirection(): boolean;
  clearDirection(): void;
  getDirection(): BuildingDirectionMap[keyof BuildingDirectionMap] | undefined;
  setDirection(value: BuildingDirectionMap[keyof BuildingDirectionMap]): void;

  clearItemsList(): void;
  getItemsList(): Array<BuildingItem>;
  setItemsList(value: Array<BuildingItem>): void;
  addItems(value?: BuildingItem, index?: number): BuildingItem;

  hasActive(): boolean;
  clearActive(): void;
  getActive(): number | undefined;
  setActive(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildingInstance.AsObject;
  static toObject(includeInstance: boolean, msg: BuildingInstance): BuildingInstance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuildingInstance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildingInstance;
  static deserializeBinaryFromReader(message: BuildingInstance, reader: jspb.BinaryReader): BuildingInstance;
}

export namespace BuildingInstance {
  export type AsObject = {
    index?: number,
    posXMin?: number,
    posYMin?: number,
    posZMin?: number,
    posXMax?: number,
    posYMax?: number,
    posZMax?: number,
    buildingType?: BuildingType.AsObject,
    material?: MatPair.AsObject,
    buildingFlags?: number,
    isRoom?: boolean,
    room?: BuildingExtents.AsObject,
    direction?: BuildingDirectionMap[keyof BuildingDirectionMap],
    itemsList: Array<BuildingItem.AsObject>,
    active?: number,
  }
}

export class RiverEdge extends jspb.Message {
  hasMinPos(): boolean;
  clearMinPos(): void;
  getMinPos(): number | undefined;
  setMinPos(value: number): void;

  hasMaxPos(): boolean;
  clearMaxPos(): void;
  getMaxPos(): number | undefined;
  setMaxPos(value: number): void;

  hasActive(): boolean;
  clearActive(): void;
  getActive(): number | undefined;
  setActive(value: number): void;

  hasElevation(): boolean;
  clearElevation(): void;
  getElevation(): number | undefined;
  setElevation(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RiverEdge.AsObject;
  static toObject(includeInstance: boolean, msg: RiverEdge): RiverEdge.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RiverEdge, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RiverEdge;
  static deserializeBinaryFromReader(message: RiverEdge, reader: jspb.BinaryReader): RiverEdge;
}

export namespace RiverEdge {
  export type AsObject = {
    minPos?: number,
    maxPos?: number,
    active?: number,
    elevation?: number,
  }
}

export class RiverTile extends jspb.Message {
  hasNorth(): boolean;
  clearNorth(): void;
  getNorth(): RiverEdge | undefined;
  setNorth(value?: RiverEdge): void;

  hasSouth(): boolean;
  clearSouth(): void;
  getSouth(): RiverEdge | undefined;
  setSouth(value?: RiverEdge): void;

  hasEast(): boolean;
  clearEast(): void;
  getEast(): RiverEdge | undefined;
  setEast(value?: RiverEdge): void;

  hasWest(): boolean;
  clearWest(): void;
  getWest(): RiverEdge | undefined;
  setWest(value?: RiverEdge): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RiverTile.AsObject;
  static toObject(includeInstance: boolean, msg: RiverTile): RiverTile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RiverTile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RiverTile;
  static deserializeBinaryFromReader(message: RiverTile, reader: jspb.BinaryReader): RiverTile;
}

export namespace RiverTile {
  export type AsObject = {
    north?: RiverEdge.AsObject,
    south?: RiverEdge.AsObject,
    east?: RiverEdge.AsObject,
    west?: RiverEdge.AsObject,
  }
}

export class Spatter extends jspb.Message {
  hasMaterial(): boolean;
  clearMaterial(): void;
  getMaterial(): MatPair | undefined;
  setMaterial(value?: MatPair): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): number | undefined;
  setAmount(value: number): void;

  hasState(): boolean;
  clearState(): void;
  getState(): MatterStateMap[keyof MatterStateMap] | undefined;
  setState(value: MatterStateMap[keyof MatterStateMap]): void;

  hasItem(): boolean;
  clearItem(): void;
  getItem(): MatPair | undefined;
  setItem(value?: MatPair): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Spatter.AsObject;
  static toObject(includeInstance: boolean, msg: Spatter): Spatter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Spatter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Spatter;
  static deserializeBinaryFromReader(message: Spatter, reader: jspb.BinaryReader): Spatter;
}

export namespace Spatter {
  export type AsObject = {
    material?: MatPair.AsObject,
    amount?: number,
    state?: MatterStateMap[keyof MatterStateMap],
    item?: MatPair.AsObject,
  }
}

export class SpatterPile extends jspb.Message {
  clearSpattersList(): void;
  getSpattersList(): Array<Spatter>;
  setSpattersList(value: Array<Spatter>): void;
  addSpatters(value?: Spatter, index?: number): Spatter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpatterPile.AsObject;
  static toObject(includeInstance: boolean, msg: SpatterPile): SpatterPile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpatterPile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpatterPile;
  static deserializeBinaryFromReader(message: SpatterPile, reader: jspb.BinaryReader): SpatterPile;
}

export namespace SpatterPile {
  export type AsObject = {
    spattersList: Array<Spatter.AsObject>,
  }
}

export class Item extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): number | undefined;
  setId(value: number): void;

  hasPos(): boolean;
  clearPos(): void;
  getPos(): Coord | undefined;
  setPos(value?: Coord): void;

  hasFlags1(): boolean;
  clearFlags1(): void;
  getFlags1(): number | undefined;
  setFlags1(value: number): void;

  hasFlags2(): boolean;
  clearFlags2(): void;
  getFlags2(): number | undefined;
  setFlags2(value: number): void;

  hasType(): boolean;
  clearType(): void;
  getType(): MatPair | undefined;
  setType(value?: MatPair): void;

  hasMaterial(): boolean;
  clearMaterial(): void;
  getMaterial(): MatPair | undefined;
  setMaterial(value?: MatPair): void;

  hasDye(): boolean;
  clearDye(): void;
  getDye(): ColorDefinition | undefined;
  setDye(value?: ColorDefinition): void;

  hasStackSize(): boolean;
  clearStackSize(): void;
  getStackSize(): number | undefined;
  setStackSize(value: number): void;

  hasSubposX(): boolean;
  clearSubposX(): void;
  getSubposX(): number | undefined;
  setSubposX(value: number): void;

  hasSubposY(): boolean;
  clearSubposY(): void;
  getSubposY(): number | undefined;
  setSubposY(value: number): void;

  hasSubposZ(): boolean;
  clearSubposZ(): void;
  getSubposZ(): number | undefined;
  setSubposZ(value: number): void;

  hasProjectile(): boolean;
  clearProjectile(): void;
  getProjectile(): boolean | undefined;
  setProjectile(value: boolean): void;

  hasVelocityX(): boolean;
  clearVelocityX(): void;
  getVelocityX(): number | undefined;
  setVelocityX(value: number): void;

  hasVelocityY(): boolean;
  clearVelocityY(): void;
  getVelocityY(): number | undefined;
  setVelocityY(value: number): void;

  hasVelocityZ(): boolean;
  clearVelocityZ(): void;
  getVelocityZ(): number | undefined;
  setVelocityZ(value: number): void;

  hasVolume(): boolean;
  clearVolume(): void;
  getVolume(): number | undefined;
  setVolume(value: number): void;

  clearImprovementsList(): void;
  getImprovementsList(): Array<ItemImprovement>;
  setImprovementsList(value: Array<ItemImprovement>): void;
  addImprovements(value?: ItemImprovement, index?: number): ItemImprovement;

  hasImage(): boolean;
  clearImage(): void;
  getImage(): ArtImage | undefined;
  setImage(value?: ArtImage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Item.AsObject;
  static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Item;
  static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
}

export namespace Item {
  export type AsObject = {
    id?: number,
    pos?: Coord.AsObject,
    flags1?: number,
    flags2?: number,
    type?: MatPair.AsObject,
    material?: MatPair.AsObject,
    dye?: ColorDefinition.AsObject,
    stackSize?: number,
    subposX?: number,
    subposY?: number,
    subposZ?: number,
    projectile?: boolean,
    velocityX?: number,
    velocityY?: number,
    velocityZ?: number,
    volume?: number,
    improvementsList: Array<ItemImprovement.AsObject>,
    image?: ArtImage.AsObject,
  }
}

export class MapBlock extends jspb.Message {
  hasMapX(): boolean;
  clearMapX(): void;
  getMapX(): number | undefined;
  setMapX(value: number): void;

  hasMapY(): boolean;
  clearMapY(): void;
  getMapY(): number | undefined;
  setMapY(value: number): void;

  hasMapZ(): boolean;
  clearMapZ(): void;
  getMapZ(): number | undefined;
  setMapZ(value: number): void;

  clearTilesList(): void;
  getTilesList(): Array<number>;
  setTilesList(value: Array<number>): void;
  addTiles(value: number, index?: number): number;

  clearMaterialsList(): void;
  getMaterialsList(): Array<MatPair>;
  setMaterialsList(value: Array<MatPair>): void;
  addMaterials(value?: MatPair, index?: number): MatPair;

  clearLayerMaterialsList(): void;
  getLayerMaterialsList(): Array<MatPair>;
  setLayerMaterialsList(value: Array<MatPair>): void;
  addLayerMaterials(value?: MatPair, index?: number): MatPair;

  clearVeinMaterialsList(): void;
  getVeinMaterialsList(): Array<MatPair>;
  setVeinMaterialsList(value: Array<MatPair>): void;
  addVeinMaterials(value?: MatPair, index?: number): MatPair;

  clearBaseMaterialsList(): void;
  getBaseMaterialsList(): Array<MatPair>;
  setBaseMaterialsList(value: Array<MatPair>): void;
  addBaseMaterials(value?: MatPair, index?: number): MatPair;

  clearMagmaList(): void;
  getMagmaList(): Array<number>;
  setMagmaList(value: Array<number>): void;
  addMagma(value: number, index?: number): number;

  clearWaterList(): void;
  getWaterList(): Array<number>;
  setWaterList(value: Array<number>): void;
  addWater(value: number, index?: number): number;

  clearHiddenList(): void;
  getHiddenList(): Array<boolean>;
  setHiddenList(value: Array<boolean>): void;
  addHidden(value: boolean, index?: number): boolean;

  clearLightList(): void;
  getLightList(): Array<boolean>;
  setLightList(value: Array<boolean>): void;
  addLight(value: boolean, index?: number): boolean;

  clearSubterraneanList(): void;
  getSubterraneanList(): Array<boolean>;
  setSubterraneanList(value: Array<boolean>): void;
  addSubterranean(value: boolean, index?: number): boolean;

  clearOutsideList(): void;
  getOutsideList(): Array<boolean>;
  setOutsideList(value: Array<boolean>): void;
  addOutside(value: boolean, index?: number): boolean;

  clearAquiferList(): void;
  getAquiferList(): Array<boolean>;
  setAquiferList(value: Array<boolean>): void;
  addAquifer(value: boolean, index?: number): boolean;

  clearWaterStagnantList(): void;
  getWaterStagnantList(): Array<boolean>;
  setWaterStagnantList(value: Array<boolean>): void;
  addWaterStagnant(value: boolean, index?: number): boolean;

  clearWaterSaltList(): void;
  getWaterSaltList(): Array<boolean>;
  setWaterSaltList(value: Array<boolean>): void;
  addWaterSalt(value: boolean, index?: number): boolean;

  clearConstructionItemsList(): void;
  getConstructionItemsList(): Array<MatPair>;
  setConstructionItemsList(value: Array<MatPair>): void;
  addConstructionItems(value?: MatPair, index?: number): MatPair;

  clearBuildingsList(): void;
  getBuildingsList(): Array<BuildingInstance>;
  setBuildingsList(value: Array<BuildingInstance>): void;
  addBuildings(value?: BuildingInstance, index?: number): BuildingInstance;

  clearTreePercentList(): void;
  getTreePercentList(): Array<number>;
  setTreePercentList(value: Array<number>): void;
  addTreePercent(value: number, index?: number): number;

  clearTreeXList(): void;
  getTreeXList(): Array<number>;
  setTreeXList(value: Array<number>): void;
  addTreeX(value: number, index?: number): number;

  clearTreeYList(): void;
  getTreeYList(): Array<number>;
  setTreeYList(value: Array<number>): void;
  addTreeY(value: number, index?: number): number;

  clearTreeZList(): void;
  getTreeZList(): Array<number>;
  setTreeZList(value: Array<number>): void;
  addTreeZ(value: number, index?: number): number;

  clearTileDigDesignationList(): void;
  getTileDigDesignationList(): Array<TileDigDesignationMap[keyof TileDigDesignationMap]>;
  setTileDigDesignationList(value: Array<TileDigDesignationMap[keyof TileDigDesignationMap]>): void;
  addTileDigDesignation(value: TileDigDesignationMap[keyof TileDigDesignationMap], index?: number): TileDigDesignationMap[keyof TileDigDesignationMap];

  clearSpatterpileList(): void;
  getSpatterpileList(): Array<SpatterPile>;
  setSpatterpileList(value: Array<SpatterPile>): void;
  addSpatterpile(value?: SpatterPile, index?: number): SpatterPile;

  clearItemsList(): void;
  getItemsList(): Array<Item>;
  setItemsList(value: Array<Item>): void;
  addItems(value?: Item, index?: number): Item;

  clearTileDigDesignationMarkerList(): void;
  getTileDigDesignationMarkerList(): Array<boolean>;
  setTileDigDesignationMarkerList(value: Array<boolean>): void;
  addTileDigDesignationMarker(value: boolean, index?: number): boolean;

  clearTileDigDesignationAutoList(): void;
  getTileDigDesignationAutoList(): Array<boolean>;
  setTileDigDesignationAutoList(value: Array<boolean>): void;
  addTileDigDesignationAuto(value: boolean, index?: number): boolean;

  clearGrassPercentList(): void;
  getGrassPercentList(): Array<number>;
  setGrassPercentList(value: Array<number>): void;
  addGrassPercent(value: number, index?: number): number;

  clearFlowsList(): void;
  getFlowsList(): Array<FlowInfo>;
  setFlowsList(value: Array<FlowInfo>): void;
  addFlows(value?: FlowInfo, index?: number): FlowInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MapBlock.AsObject;
  static toObject(includeInstance: boolean, msg: MapBlock): MapBlock.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MapBlock, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MapBlock;
  static deserializeBinaryFromReader(message: MapBlock, reader: jspb.BinaryReader): MapBlock;
}

export namespace MapBlock {
  export type AsObject = {
    mapX?: number,
    mapY?: number,
    mapZ?: number,
    tilesList: Array<number>,
    materialsList: Array<MatPair.AsObject>,
    layerMaterialsList: Array<MatPair.AsObject>,
    veinMaterialsList: Array<MatPair.AsObject>,
    baseMaterialsList: Array<MatPair.AsObject>,
    magmaList: Array<number>,
    waterList: Array<number>,
    hiddenList: Array<boolean>,
    lightList: Array<boolean>,
    subterraneanList: Array<boolean>,
    outsideList: Array<boolean>,
    aquiferList: Array<boolean>,
    waterStagnantList: Array<boolean>,
    waterSaltList: Array<boolean>,
    constructionItemsList: Array<MatPair.AsObject>,
    buildingsList: Array<BuildingInstance.AsObject>,
    treePercentList: Array<number>,
    treeXList: Array<number>,
    treeYList: Array<number>,
    treeZList: Array<number>,
    tileDigDesignationList: Array<TileDigDesignationMap[keyof TileDigDesignationMap]>,
    spatterpileList: Array<SpatterPile.AsObject>,
    itemsList: Array<Item.AsObject>,
    tileDigDesignationMarkerList: Array<boolean>,
    tileDigDesignationAutoList: Array<boolean>,
    grassPercentList: Array<number>,
    flowsList: Array<FlowInfo.AsObject>,
  }
}

export class MatPair extends jspb.Message {
  hasMatType(): boolean;
  clearMatType(): void;
  getMatType(): number | undefined;
  setMatType(value: number): void;

  hasMatIndex(): boolean;
  clearMatIndex(): void;
  getMatIndex(): number | undefined;
  setMatIndex(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MatPair.AsObject;
  static toObject(includeInstance: boolean, msg: MatPair): MatPair.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MatPair, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MatPair;
  static deserializeBinaryFromReader(message: MatPair, reader: jspb.BinaryReader): MatPair;
}

export namespace MatPair {
  export type AsObject = {
    matType?: number,
    matIndex?: number,
  }
}

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

export class MaterialDefinition extends jspb.Message {
  hasMatPair(): boolean;
  clearMatPair(): void;
  getMatPair(): MatPair;
  setMatPair(value?: MatPair): void;

  hasId(): boolean;
  clearId(): void;
  getId(): string | undefined;
  setId(value: string): void;

  hasName(): boolean;
  clearName(): void;
  getName(): string | undefined;
  setName(value: string): void;

  hasStateColor(): boolean;
  clearStateColor(): void;
  getStateColor(): ColorDefinition | undefined;
  setStateColor(value?: ColorDefinition): void;

  hasInstrument(): boolean;
  clearInstrument(): void;
  getInstrument(): ItemdefInstrument_pb.InstrumentDef | undefined;
  setInstrument(value?: ItemdefInstrument_pb.InstrumentDef): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MaterialDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: MaterialDefinition): MaterialDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MaterialDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MaterialDefinition;
  static deserializeBinaryFromReader(message: MaterialDefinition, reader: jspb.BinaryReader): MaterialDefinition;
}

export namespace MaterialDefinition {
  export type AsObject = {
    matPair: MatPair.AsObject,
    id?: string,
    name?: string,
    stateColor?: ColorDefinition.AsObject,
    instrument?: ItemdefInstrument_pb.InstrumentDef.AsObject,
  }
}

export class BuildingType extends jspb.Message {
  hasBuildingType(): boolean;
  clearBuildingType(): void;
  getBuildingType(): number | undefined;
  setBuildingType(value: number): void;

  hasBuildingSubtype(): boolean;
  clearBuildingSubtype(): void;
  getBuildingSubtype(): number | undefined;
  setBuildingSubtype(value: number): void;

  hasBuildingCustom(): boolean;
  clearBuildingCustom(): void;
  getBuildingCustom(): number | undefined;
  setBuildingCustom(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildingType.AsObject;
  static toObject(includeInstance: boolean, msg: BuildingType): BuildingType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuildingType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildingType;
  static deserializeBinaryFromReader(message: BuildingType, reader: jspb.BinaryReader): BuildingType;
}

export namespace BuildingType {
  export type AsObject = {
    buildingType?: number,
    buildingSubtype?: number,
    buildingCustom?: number,
  }
}

export class BuildingDefinition extends jspb.Message {
  hasBuildingType(): boolean;
  clearBuildingType(): void;
  getBuildingType(): BuildingType;
  setBuildingType(value?: BuildingType): void;

  hasId(): boolean;
  clearId(): void;
  getId(): string | undefined;
  setId(value: string): void;

  hasName(): boolean;
  clearName(): void;
  getName(): string | undefined;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildingDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: BuildingDefinition): BuildingDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuildingDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildingDefinition;
  static deserializeBinaryFromReader(message: BuildingDefinition, reader: jspb.BinaryReader): BuildingDefinition;
}

export namespace BuildingDefinition {
  export type AsObject = {
    buildingType: BuildingType.AsObject,
    id?: string,
    name?: string,
  }
}

export class BuildingList extends jspb.Message {
  clearBuildingListList(): void;
  getBuildingListList(): Array<BuildingDefinition>;
  setBuildingListList(value: Array<BuildingDefinition>): void;
  addBuildingList(value?: BuildingDefinition, index?: number): BuildingDefinition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildingList.AsObject;
  static toObject(includeInstance: boolean, msg: BuildingList): BuildingList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuildingList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildingList;
  static deserializeBinaryFromReader(message: BuildingList, reader: jspb.BinaryReader): BuildingList;
}

export namespace BuildingList {
  export type AsObject = {
    buildingListList: Array<BuildingDefinition.AsObject>,
  }
}

export class MaterialList extends jspb.Message {
  clearMaterialListList(): void;
  getMaterialListList(): Array<MaterialDefinition>;
  setMaterialListList(value: Array<MaterialDefinition>): void;
  addMaterialList(value?: MaterialDefinition, index?: number): MaterialDefinition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MaterialList.AsObject;
  static toObject(includeInstance: boolean, msg: MaterialList): MaterialList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MaterialList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MaterialList;
  static deserializeBinaryFromReader(message: MaterialList, reader: jspb.BinaryReader): MaterialList;
}

export namespace MaterialList {
  export type AsObject = {
    materialListList: Array<MaterialDefinition.AsObject>,
  }
}

export class Hair extends jspb.Message {
  hasLength(): boolean;
  clearLength(): void;
  getLength(): number | undefined;
  setLength(value: number): void;

  hasStyle(): boolean;
  clearStyle(): void;
  getStyle(): HairStyleMap[keyof HairStyleMap] | undefined;
  setStyle(value: HairStyleMap[keyof HairStyleMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Hair.AsObject;
  static toObject(includeInstance: boolean, msg: Hair): Hair.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Hair, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Hair;
  static deserializeBinaryFromReader(message: Hair, reader: jspb.BinaryReader): Hair;
}

export namespace Hair {
  export type AsObject = {
    length?: number,
    style?: HairStyleMap[keyof HairStyleMap],
  }
}

export class BodySizeInfo extends jspb.Message {
  hasSizeCur(): boolean;
  clearSizeCur(): void;
  getSizeCur(): number | undefined;
  setSizeCur(value: number): void;

  hasSizeBase(): boolean;
  clearSizeBase(): void;
  getSizeBase(): number | undefined;
  setSizeBase(value: number): void;

  hasAreaCur(): boolean;
  clearAreaCur(): void;
  getAreaCur(): number | undefined;
  setAreaCur(value: number): void;

  hasAreaBase(): boolean;
  clearAreaBase(): void;
  getAreaBase(): number | undefined;
  setAreaBase(value: number): void;

  hasLengthCur(): boolean;
  clearLengthCur(): void;
  getLengthCur(): number | undefined;
  setLengthCur(value: number): void;

  hasLengthBase(): boolean;
  clearLengthBase(): void;
  getLengthBase(): number | undefined;
  setLengthBase(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BodySizeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: BodySizeInfo): BodySizeInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BodySizeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BodySizeInfo;
  static deserializeBinaryFromReader(message: BodySizeInfo, reader: jspb.BinaryReader): BodySizeInfo;
}

export namespace BodySizeInfo {
  export type AsObject = {
    sizeCur?: number,
    sizeBase?: number,
    areaCur?: number,
    areaBase?: number,
    lengthCur?: number,
    lengthBase?: number,
  }
}

export class UnitAppearance extends jspb.Message {
  clearBodyModifiersList(): void;
  getBodyModifiersList(): Array<number>;
  setBodyModifiersList(value: Array<number>): void;
  addBodyModifiers(value: number, index?: number): number;

  clearBpModifiersList(): void;
  getBpModifiersList(): Array<number>;
  setBpModifiersList(value: Array<number>): void;
  addBpModifiers(value: number, index?: number): number;

  hasSizeModifier(): boolean;
  clearSizeModifier(): void;
  getSizeModifier(): number | undefined;
  setSizeModifier(value: number): void;

  clearColorsList(): void;
  getColorsList(): Array<number>;
  setColorsList(value: Array<number>): void;
  addColors(value: number, index?: number): number;

  hasHair(): boolean;
  clearHair(): void;
  getHair(): Hair | undefined;
  setHair(value?: Hair): void;

  hasBeard(): boolean;
  clearBeard(): void;
  getBeard(): Hair | undefined;
  setBeard(value?: Hair): void;

  hasMoustache(): boolean;
  clearMoustache(): void;
  getMoustache(): Hair | undefined;
  setMoustache(value?: Hair): void;

  hasSideburns(): boolean;
  clearSideburns(): void;
  getSideburns(): Hair | undefined;
  setSideburns(value?: Hair): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnitAppearance.AsObject;
  static toObject(includeInstance: boolean, msg: UnitAppearance): UnitAppearance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnitAppearance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnitAppearance;
  static deserializeBinaryFromReader(message: UnitAppearance, reader: jspb.BinaryReader): UnitAppearance;
}

export namespace UnitAppearance {
  export type AsObject = {
    bodyModifiersList: Array<number>,
    bpModifiersList: Array<number>,
    sizeModifier?: number,
    colorsList: Array<number>,
    hair?: Hair.AsObject,
    beard?: Hair.AsObject,
    moustache?: Hair.AsObject,
    sideburns?: Hair.AsObject,
  }
}

export class InventoryItem extends jspb.Message {
  hasMode(): boolean;
  clearMode(): void;
  getMode(): InventoryModeMap[keyof InventoryModeMap] | undefined;
  setMode(value: InventoryModeMap[keyof InventoryModeMap]): void;

  hasItem(): boolean;
  clearItem(): void;
  getItem(): Item | undefined;
  setItem(value?: Item): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InventoryItem.AsObject;
  static toObject(includeInstance: boolean, msg: InventoryItem): InventoryItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InventoryItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InventoryItem;
  static deserializeBinaryFromReader(message: InventoryItem, reader: jspb.BinaryReader): InventoryItem;
}

export namespace InventoryItem {
  export type AsObject = {
    mode?: InventoryModeMap[keyof InventoryModeMap],
    item?: Item.AsObject,
  }
}

export class UnitDefinition extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): number | undefined;
  setId(value: number): void;

  hasIsvalid(): boolean;
  clearIsvalid(): void;
  getIsvalid(): boolean | undefined;
  setIsvalid(value: boolean): void;

  hasPosX(): boolean;
  clearPosX(): void;
  getPosX(): number | undefined;
  setPosX(value: number): void;

  hasPosY(): boolean;
  clearPosY(): void;
  getPosY(): number | undefined;
  setPosY(value: number): void;

  hasPosZ(): boolean;
  clearPosZ(): void;
  getPosZ(): number | undefined;
  setPosZ(value: number): void;

  hasRace(): boolean;
  clearRace(): void;
  getRace(): MatPair | undefined;
  setRace(value?: MatPair): void;

  hasProfessionColor(): boolean;
  clearProfessionColor(): void;
  getProfessionColor(): ColorDefinition | undefined;
  setProfessionColor(value?: ColorDefinition): void;

  hasFlags1(): boolean;
  clearFlags1(): void;
  getFlags1(): number | undefined;
  setFlags1(value: number): void;

  hasFlags2(): boolean;
  clearFlags2(): void;
  getFlags2(): number | undefined;
  setFlags2(value: number): void;

  hasFlags3(): boolean;
  clearFlags3(): void;
  getFlags3(): number | undefined;
  setFlags3(value: number): void;

  hasIsSoldier(): boolean;
  clearIsSoldier(): void;
  getIsSoldier(): boolean | undefined;
  setIsSoldier(value: boolean): void;

  hasSizeInfo(): boolean;
  clearSizeInfo(): void;
  getSizeInfo(): BodySizeInfo | undefined;
  setSizeInfo(value?: BodySizeInfo): void;

  hasName(): boolean;
  clearName(): void;
  getName(): string | undefined;
  setName(value: string): void;

  hasBloodMax(): boolean;
  clearBloodMax(): void;
  getBloodMax(): number | undefined;
  setBloodMax(value: number): void;

  hasBloodCount(): boolean;
  clearBloodCount(): void;
  getBloodCount(): number | undefined;
  setBloodCount(value: number): void;

  hasAppearance(): boolean;
  clearAppearance(): void;
  getAppearance(): UnitAppearance | undefined;
  setAppearance(value?: UnitAppearance): void;

  hasProfessionId(): boolean;
  clearProfessionId(): void;
  getProfessionId(): number | undefined;
  setProfessionId(value: number): void;

  clearNoblePositionsList(): void;
  getNoblePositionsList(): Array<string>;
  setNoblePositionsList(value: Array<string>): void;
  addNoblePositions(value: string, index?: number): string;

  hasRiderId(): boolean;
  clearRiderId(): void;
  getRiderId(): number | undefined;
  setRiderId(value: number): void;

  clearInventoryList(): void;
  getInventoryList(): Array<InventoryItem>;
  setInventoryList(value: Array<InventoryItem>): void;
  addInventory(value?: InventoryItem, index?: number): InventoryItem;

  hasSubposX(): boolean;
  clearSubposX(): void;
  getSubposX(): number | undefined;
  setSubposX(value: number): void;

  hasSubposY(): boolean;
  clearSubposY(): void;
  getSubposY(): number | undefined;
  setSubposY(value: number): void;

  hasSubposZ(): boolean;
  clearSubposZ(): void;
  getSubposZ(): number | undefined;
  setSubposZ(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnitDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: UnitDefinition): UnitDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnitDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnitDefinition;
  static deserializeBinaryFromReader(message: UnitDefinition, reader: jspb.BinaryReader): UnitDefinition;
}

export namespace UnitDefinition {
  export type AsObject = {
    id?: number,
    isvalid?: boolean,
    posX?: number,
    posY?: number,
    posZ?: number,
    race?: MatPair.AsObject,
    professionColor?: ColorDefinition.AsObject,
    flags1?: number,
    flags2?: number,
    flags3?: number,
    isSoldier?: boolean,
    sizeInfo?: BodySizeInfo.AsObject,
    name?: string,
    bloodMax?: number,
    bloodCount?: number,
    appearance?: UnitAppearance.AsObject,
    professionId?: number,
    noblePositionsList: Array<string>,
    riderId?: number,
    inventoryList: Array<InventoryItem.AsObject>,
    subposX?: number,
    subposY?: number,
    subposZ?: number,
  }
}

export class UnitList extends jspb.Message {
  clearCreatureListList(): void;
  getCreatureListList(): Array<UnitDefinition>;
  setCreatureListList(value: Array<UnitDefinition>): void;
  addCreatureList(value?: UnitDefinition, index?: number): UnitDefinition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnitList.AsObject;
  static toObject(includeInstance: boolean, msg: UnitList): UnitList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnitList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnitList;
  static deserializeBinaryFromReader(message: UnitList, reader: jspb.BinaryReader): UnitList;
}

export namespace UnitList {
  export type AsObject = {
    creatureListList: Array<UnitDefinition.AsObject>,
  }
}

export class BlockRequest extends jspb.Message {
  hasBlocksNeeded(): boolean;
  clearBlocksNeeded(): void;
  getBlocksNeeded(): number | undefined;
  setBlocksNeeded(value: number): void;

  hasMinX(): boolean;
  clearMinX(): void;
  getMinX(): number | undefined;
  setMinX(value: number): void;

  hasMaxX(): boolean;
  clearMaxX(): void;
  getMaxX(): number | undefined;
  setMaxX(value: number): void;

  hasMinY(): boolean;
  clearMinY(): void;
  getMinY(): number | undefined;
  setMinY(value: number): void;

  hasMaxY(): boolean;
  clearMaxY(): void;
  getMaxY(): number | undefined;
  setMaxY(value: number): void;

  hasMinZ(): boolean;
  clearMinZ(): void;
  getMinZ(): number | undefined;
  setMinZ(value: number): void;

  hasMaxZ(): boolean;
  clearMaxZ(): void;
  getMaxZ(): number | undefined;
  setMaxZ(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BlockRequest): BlockRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlockRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockRequest;
  static deserializeBinaryFromReader(message: BlockRequest, reader: jspb.BinaryReader): BlockRequest;
}

export namespace BlockRequest {
  export type AsObject = {
    blocksNeeded?: number,
    minX?: number,
    maxX?: number,
    minY?: number,
    maxY?: number,
    minZ?: number,
    maxZ?: number,
  }
}

export class BlockList extends jspb.Message {
  clearMapBlocksList(): void;
  getMapBlocksList(): Array<MapBlock>;
  setMapBlocksList(value: Array<MapBlock>): void;
  addMapBlocks(value?: MapBlock, index?: number): MapBlock;

  hasMapX(): boolean;
  clearMapX(): void;
  getMapX(): number | undefined;
  setMapX(value: number): void;

  hasMapY(): boolean;
  clearMapY(): void;
  getMapY(): number | undefined;
  setMapY(value: number): void;

  clearEngravingsList(): void;
  getEngravingsList(): Array<Engraving>;
  setEngravingsList(value: Array<Engraving>): void;
  addEngravings(value?: Engraving, index?: number): Engraving;

  clearOceanWavesList(): void;
  getOceanWavesList(): Array<Wave>;
  setOceanWavesList(value: Array<Wave>): void;
  addOceanWaves(value?: Wave, index?: number): Wave;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockList.AsObject;
  static toObject(includeInstance: boolean, msg: BlockList): BlockList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlockList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockList;
  static deserializeBinaryFromReader(message: BlockList, reader: jspb.BinaryReader): BlockList;
}

export namespace BlockList {
  export type AsObject = {
    mapBlocksList: Array<MapBlock.AsObject>,
    mapX?: number,
    mapY?: number,
    engravingsList: Array<Engraving.AsObject>,
    oceanWavesList: Array<Wave.AsObject>,
  }
}

export class PlantDef extends jspb.Message {
  hasPosX(): boolean;
  clearPosX(): void;
  getPosX(): number | undefined;
  setPosX(value: number): void;

  hasPosY(): boolean;
  clearPosY(): void;
  getPosY(): number | undefined;
  setPosY(value: number): void;

  hasPosZ(): boolean;
  clearPosZ(): void;
  getPosZ(): number | undefined;
  setPosZ(value: number): void;

  hasIndex(): boolean;
  clearIndex(): void;
  getIndex(): number | undefined;
  setIndex(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlantDef.AsObject;
  static toObject(includeInstance: boolean, msg: PlantDef): PlantDef.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlantDef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlantDef;
  static deserializeBinaryFromReader(message: PlantDef, reader: jspb.BinaryReader): PlantDef;
}

export namespace PlantDef {
  export type AsObject = {
    posX?: number,
    posY?: number,
    posZ?: number,
    index?: number,
  }
}

export class PlantList extends jspb.Message {
  clearPlantListList(): void;
  getPlantListList(): Array<PlantDef>;
  setPlantListList(value: Array<PlantDef>): void;
  addPlantList(value?: PlantDef, index?: number): PlantDef;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlantList.AsObject;
  static toObject(includeInstance: boolean, msg: PlantList): PlantList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlantList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlantList;
  static deserializeBinaryFromReader(message: PlantList, reader: jspb.BinaryReader): PlantList;
}

export namespace PlantList {
  export type AsObject = {
    plantListList: Array<PlantDef.AsObject>,
  }
}

export class ViewInfo extends jspb.Message {
  hasViewPosX(): boolean;
  clearViewPosX(): void;
  getViewPosX(): number | undefined;
  setViewPosX(value: number): void;

  hasViewPosY(): boolean;
  clearViewPosY(): void;
  getViewPosY(): number | undefined;
  setViewPosY(value: number): void;

  hasViewPosZ(): boolean;
  clearViewPosZ(): void;
  getViewPosZ(): number | undefined;
  setViewPosZ(value: number): void;

  hasViewSizeX(): boolean;
  clearViewSizeX(): void;
  getViewSizeX(): number | undefined;
  setViewSizeX(value: number): void;

  hasViewSizeY(): boolean;
  clearViewSizeY(): void;
  getViewSizeY(): number | undefined;
  setViewSizeY(value: number): void;

  hasCursorPosX(): boolean;
  clearCursorPosX(): void;
  getCursorPosX(): number | undefined;
  setCursorPosX(value: number): void;

  hasCursorPosY(): boolean;
  clearCursorPosY(): void;
  getCursorPosY(): number | undefined;
  setCursorPosY(value: number): void;

  hasCursorPosZ(): boolean;
  clearCursorPosZ(): void;
  getCursorPosZ(): number | undefined;
  setCursorPosZ(value: number): void;

  hasFollowUnitId(): boolean;
  clearFollowUnitId(): void;
  getFollowUnitId(): number | undefined;
  setFollowUnitId(value: number): void;

  hasFollowItemId(): boolean;
  clearFollowItemId(): void;
  getFollowItemId(): number | undefined;
  setFollowItemId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ViewInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ViewInfo): ViewInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ViewInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ViewInfo;
  static deserializeBinaryFromReader(message: ViewInfo, reader: jspb.BinaryReader): ViewInfo;
}

export namespace ViewInfo {
  export type AsObject = {
    viewPosX?: number,
    viewPosY?: number,
    viewPosZ?: number,
    viewSizeX?: number,
    viewSizeY?: number,
    cursorPosX?: number,
    cursorPosY?: number,
    cursorPosZ?: number,
    followUnitId?: number,
    followItemId?: number,
  }
}

export class MapInfo extends jspb.Message {
  hasBlockSizeX(): boolean;
  clearBlockSizeX(): void;
  getBlockSizeX(): number | undefined;
  setBlockSizeX(value: number): void;

  hasBlockSizeY(): boolean;
  clearBlockSizeY(): void;
  getBlockSizeY(): number | undefined;
  setBlockSizeY(value: number): void;

  hasBlockSizeZ(): boolean;
  clearBlockSizeZ(): void;
  getBlockSizeZ(): number | undefined;
  setBlockSizeZ(value: number): void;

  hasBlockPosX(): boolean;
  clearBlockPosX(): void;
  getBlockPosX(): number | undefined;
  setBlockPosX(value: number): void;

  hasBlockPosY(): boolean;
  clearBlockPosY(): void;
  getBlockPosY(): number | undefined;
  setBlockPosY(value: number): void;

  hasBlockPosZ(): boolean;
  clearBlockPosZ(): void;
  getBlockPosZ(): number | undefined;
  setBlockPosZ(value: number): void;

  hasWorldName(): boolean;
  clearWorldName(): void;
  getWorldName(): string | undefined;
  setWorldName(value: string): void;

  hasWorldNameEnglish(): boolean;
  clearWorldNameEnglish(): void;
  getWorldNameEnglish(): string | undefined;
  setWorldNameEnglish(value: string): void;

  hasSaveName(): boolean;
  clearSaveName(): void;
  getSaveName(): string | undefined;
  setSaveName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MapInfo.AsObject;
  static toObject(includeInstance: boolean, msg: MapInfo): MapInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MapInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MapInfo;
  static deserializeBinaryFromReader(message: MapInfo, reader: jspb.BinaryReader): MapInfo;
}

export namespace MapInfo {
  export type AsObject = {
    blockSizeX?: number,
    blockSizeY?: number,
    blockSizeZ?: number,
    blockPosX?: number,
    blockPosY?: number,
    blockPosZ?: number,
    worldName?: string,
    worldNameEnglish?: string,
    saveName?: string,
  }
}

export class Cloud extends jspb.Message {
  hasFront(): boolean;
  clearFront(): void;
  getFront(): FrontTypeMap[keyof FrontTypeMap] | undefined;
  setFront(value: FrontTypeMap[keyof FrontTypeMap]): void;

  hasCumulus(): boolean;
  clearCumulus(): void;
  getCumulus(): CumulusTypeMap[keyof CumulusTypeMap] | undefined;
  setCumulus(value: CumulusTypeMap[keyof CumulusTypeMap]): void;

  hasCirrus(): boolean;
  clearCirrus(): void;
  getCirrus(): boolean | undefined;
  setCirrus(value: boolean): void;

  hasStratus(): boolean;
  clearStratus(): void;
  getStratus(): StratusTypeMap[keyof StratusTypeMap] | undefined;
  setStratus(value: StratusTypeMap[keyof StratusTypeMap]): void;

  hasFog(): boolean;
  clearFog(): void;
  getFog(): FogTypeMap[keyof FogTypeMap] | undefined;
  setFog(value: FogTypeMap[keyof FogTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Cloud.AsObject;
  static toObject(includeInstance: boolean, msg: Cloud): Cloud.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Cloud, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Cloud;
  static deserializeBinaryFromReader(message: Cloud, reader: jspb.BinaryReader): Cloud;
}

export namespace Cloud {
  export type AsObject = {
    front?: FrontTypeMap[keyof FrontTypeMap],
    cumulus?: CumulusTypeMap[keyof CumulusTypeMap],
    cirrus?: boolean,
    stratus?: StratusTypeMap[keyof StratusTypeMap],
    fog?: FogTypeMap[keyof FogTypeMap],
  }
}

export class WorldMap extends jspb.Message {
  hasWorldWidth(): boolean;
  clearWorldWidth(): void;
  getWorldWidth(): number | undefined;
  setWorldWidth(value: number): void;

  hasWorldHeight(): boolean;
  clearWorldHeight(): void;
  getWorldHeight(): number | undefined;
  setWorldHeight(value: number): void;

  hasName(): boolean;
  clearName(): void;
  getName(): string | undefined;
  setName(value: string): void;

  hasNameEnglish(): boolean;
  clearNameEnglish(): void;
  getNameEnglish(): string | undefined;
  setNameEnglish(value: string): void;

  clearElevationList(): void;
  getElevationList(): Array<number>;
  setElevationList(value: Array<number>): void;
  addElevation(value: number, index?: number): number;

  clearRainfallList(): void;
  getRainfallList(): Array<number>;
  setRainfallList(value: Array<number>): void;
  addRainfall(value: number, index?: number): number;

  clearVegetationList(): void;
  getVegetationList(): Array<number>;
  setVegetationList(value: Array<number>): void;
  addVegetation(value: number, index?: number): number;

  clearTemperatureList(): void;
  getTemperatureList(): Array<number>;
  setTemperatureList(value: Array<number>): void;
  addTemperature(value: number, index?: number): number;

  clearEvilnessList(): void;
  getEvilnessList(): Array<number>;
  setEvilnessList(value: Array<number>): void;
  addEvilness(value: number, index?: number): number;

  clearDrainageList(): void;
  getDrainageList(): Array<number>;
  setDrainageList(value: Array<number>): void;
  addDrainage(value: number, index?: number): number;

  clearVolcanismList(): void;
  getVolcanismList(): Array<number>;
  setVolcanismList(value: Array<number>): void;
  addVolcanism(value: number, index?: number): number;

  clearSavageryList(): void;
  getSavageryList(): Array<number>;
  setSavageryList(value: Array<number>): void;
  addSavagery(value: number, index?: number): number;

  clearCloudsList(): void;
  getCloudsList(): Array<Cloud>;
  setCloudsList(value: Array<Cloud>): void;
  addClouds(value?: Cloud, index?: number): Cloud;

  clearSalinityList(): void;
  getSalinityList(): Array<number>;
  setSalinityList(value: Array<number>): void;
  addSalinity(value: number, index?: number): number;

  hasMapX(): boolean;
  clearMapX(): void;
  getMapX(): number | undefined;
  setMapX(value: number): void;

  hasMapY(): boolean;
  clearMapY(): void;
  getMapY(): number | undefined;
  setMapY(value: number): void;

  hasCenterX(): boolean;
  clearCenterX(): void;
  getCenterX(): number | undefined;
  setCenterX(value: number): void;

  hasCenterY(): boolean;
  clearCenterY(): void;
  getCenterY(): number | undefined;
  setCenterY(value: number): void;

  hasCenterZ(): boolean;
  clearCenterZ(): void;
  getCenterZ(): number | undefined;
  setCenterZ(value: number): void;

  hasCurYear(): boolean;
  clearCurYear(): void;
  getCurYear(): number | undefined;
  setCurYear(value: number): void;

  hasCurYearTick(): boolean;
  clearCurYearTick(): void;
  getCurYearTick(): number | undefined;
  setCurYearTick(value: number): void;

  hasWorldPoles(): boolean;
  clearWorldPoles(): void;
  getWorldPoles(): WorldPolesMap[keyof WorldPolesMap] | undefined;
  setWorldPoles(value: WorldPolesMap[keyof WorldPolesMap]): void;

  clearRiverTilesList(): void;
  getRiverTilesList(): Array<RiverTile>;
  setRiverTilesList(value: Array<RiverTile>): void;
  addRiverTiles(value?: RiverTile, index?: number): RiverTile;

  clearWaterElevationList(): void;
  getWaterElevationList(): Array<number>;
  setWaterElevationList(value: Array<number>): void;
  addWaterElevation(value: number, index?: number): number;

  clearRegionTilesList(): void;
  getRegionTilesList(): Array<RegionTile>;
  setRegionTilesList(value: Array<RegionTile>): void;
  addRegionTiles(value?: RegionTile, index?: number): RegionTile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorldMap.AsObject;
  static toObject(includeInstance: boolean, msg: WorldMap): WorldMap.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorldMap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorldMap;
  static deserializeBinaryFromReader(message: WorldMap, reader: jspb.BinaryReader): WorldMap;
}

export namespace WorldMap {
  export type AsObject = {
    worldWidth?: number,
    worldHeight?: number,
    name?: string,
    nameEnglish?: string,
    elevationList: Array<number>,
    rainfallList: Array<number>,
    vegetationList: Array<number>,
    temperatureList: Array<number>,
    evilnessList: Array<number>,
    drainageList: Array<number>,
    volcanismList: Array<number>,
    savageryList: Array<number>,
    cloudsList: Array<Cloud.AsObject>,
    salinityList: Array<number>,
    mapX?: number,
    mapY?: number,
    centerX?: number,
    centerY?: number,
    centerZ?: number,
    curYear?: number,
    curYearTick?: number,
    worldPoles?: WorldPolesMap[keyof WorldPolesMap],
    riverTilesList: Array<RiverTile.AsObject>,
    waterElevationList: Array<number>,
    regionTilesList: Array<RegionTile.AsObject>,
  }
}

export class SiteRealizationBuildingWall extends jspb.Message {
  hasStartX(): boolean;
  clearStartX(): void;
  getStartX(): number | undefined;
  setStartX(value: number): void;

  hasStartY(): boolean;
  clearStartY(): void;
  getStartY(): number | undefined;
  setStartY(value: number): void;

  hasStartZ(): boolean;
  clearStartZ(): void;
  getStartZ(): number | undefined;
  setStartZ(value: number): void;

  hasEndX(): boolean;
  clearEndX(): void;
  getEndX(): number | undefined;
  setEndX(value: number): void;

  hasEndY(): boolean;
  clearEndY(): void;
  getEndY(): number | undefined;
  setEndY(value: number): void;

  hasEndZ(): boolean;
  clearEndZ(): void;
  getEndZ(): number | undefined;
  setEndZ(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SiteRealizationBuildingWall.AsObject;
  static toObject(includeInstance: boolean, msg: SiteRealizationBuildingWall): SiteRealizationBuildingWall.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SiteRealizationBuildingWall, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SiteRealizationBuildingWall;
  static deserializeBinaryFromReader(message: SiteRealizationBuildingWall, reader: jspb.BinaryReader): SiteRealizationBuildingWall;
}

export namespace SiteRealizationBuildingWall {
  export type AsObject = {
    startX?: number,
    startY?: number,
    startZ?: number,
    endX?: number,
    endY?: number,
    endZ?: number,
  }
}

export class SiteRealizationBuildingTower extends jspb.Message {
  hasRoofZ(): boolean;
  clearRoofZ(): void;
  getRoofZ(): number | undefined;
  setRoofZ(value: number): void;

  hasRound(): boolean;
  clearRound(): void;
  getRound(): boolean | undefined;
  setRound(value: boolean): void;

  hasGoblin(): boolean;
  clearGoblin(): void;
  getGoblin(): boolean | undefined;
  setGoblin(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SiteRealizationBuildingTower.AsObject;
  static toObject(includeInstance: boolean, msg: SiteRealizationBuildingTower): SiteRealizationBuildingTower.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SiteRealizationBuildingTower, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SiteRealizationBuildingTower;
  static deserializeBinaryFromReader(message: SiteRealizationBuildingTower, reader: jspb.BinaryReader): SiteRealizationBuildingTower;
}

export namespace SiteRealizationBuildingTower {
  export type AsObject = {
    roofZ?: number,
    round?: boolean,
    goblin?: boolean,
  }
}

export class TrenchSpoke extends jspb.Message {
  hasMoundStart(): boolean;
  clearMoundStart(): void;
  getMoundStart(): number | undefined;
  setMoundStart(value: number): void;

  hasTrenchStart(): boolean;
  clearTrenchStart(): void;
  getTrenchStart(): number | undefined;
  setTrenchStart(value: number): void;

  hasTrenchEnd(): boolean;
  clearTrenchEnd(): void;
  getTrenchEnd(): number | undefined;
  setTrenchEnd(value: number): void;

  hasMoundEnd(): boolean;
  clearMoundEnd(): void;
  getMoundEnd(): number | undefined;
  setMoundEnd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrenchSpoke.AsObject;
  static toObject(includeInstance: boolean, msg: TrenchSpoke): TrenchSpoke.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TrenchSpoke, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrenchSpoke;
  static deserializeBinaryFromReader(message: TrenchSpoke, reader: jspb.BinaryReader): TrenchSpoke;
}

export namespace TrenchSpoke {
  export type AsObject = {
    moundStart?: number,
    trenchStart?: number,
    trenchEnd?: number,
    moundEnd?: number,
  }
}

export class SiteRealizationBuildingTrenches extends jspb.Message {
  clearSpokesList(): void;
  getSpokesList(): Array<TrenchSpoke>;
  setSpokesList(value: Array<TrenchSpoke>): void;
  addSpokes(value?: TrenchSpoke, index?: number): TrenchSpoke;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SiteRealizationBuildingTrenches.AsObject;
  static toObject(includeInstance: boolean, msg: SiteRealizationBuildingTrenches): SiteRealizationBuildingTrenches.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SiteRealizationBuildingTrenches, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SiteRealizationBuildingTrenches;
  static deserializeBinaryFromReader(message: SiteRealizationBuildingTrenches, reader: jspb.BinaryReader): SiteRealizationBuildingTrenches;
}

export namespace SiteRealizationBuildingTrenches {
  export type AsObject = {
    spokesList: Array<TrenchSpoke.AsObject>,
  }
}

export class SiteRealizationBuilding extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): number | undefined;
  setId(value: number): void;

  hasType(): boolean;
  clearType(): void;
  getType(): SiteRealizationBuildingTypeMap[keyof SiteRealizationBuildingTypeMap] | undefined;
  setType(value: SiteRealizationBuildingTypeMap[keyof SiteRealizationBuildingTypeMap]): void;

  hasMinX(): boolean;
  clearMinX(): void;
  getMinX(): number | undefined;
  setMinX(value: number): void;

  hasMinY(): boolean;
  clearMinY(): void;
  getMinY(): number | undefined;
  setMinY(value: number): void;

  hasMaxX(): boolean;
  clearMaxX(): void;
  getMaxX(): number | undefined;
  setMaxX(value: number): void;

  hasMaxY(): boolean;
  clearMaxY(): void;
  getMaxY(): number | undefined;
  setMaxY(value: number): void;

  hasMaterial(): boolean;
  clearMaterial(): void;
  getMaterial(): MatPair | undefined;
  setMaterial(value?: MatPair): void;

  hasWallInfo(): boolean;
  clearWallInfo(): void;
  getWallInfo(): SiteRealizationBuildingWall | undefined;
  setWallInfo(value?: SiteRealizationBuildingWall): void;

  hasTowerInfo(): boolean;
  clearTowerInfo(): void;
  getTowerInfo(): SiteRealizationBuildingTower | undefined;
  setTowerInfo(value?: SiteRealizationBuildingTower): void;

  hasTrenchInfo(): boolean;
  clearTrenchInfo(): void;
  getTrenchInfo(): SiteRealizationBuildingTrenches | undefined;
  setTrenchInfo(value?: SiteRealizationBuildingTrenches): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SiteRealizationBuilding.AsObject;
  static toObject(includeInstance: boolean, msg: SiteRealizationBuilding): SiteRealizationBuilding.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SiteRealizationBuilding, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SiteRealizationBuilding;
  static deserializeBinaryFromReader(message: SiteRealizationBuilding, reader: jspb.BinaryReader): SiteRealizationBuilding;
}

export namespace SiteRealizationBuilding {
  export type AsObject = {
    id?: number,
    type?: SiteRealizationBuildingTypeMap[keyof SiteRealizationBuildingTypeMap],
    minX?: number,
    minY?: number,
    maxX?: number,
    maxY?: number,
    material?: MatPair.AsObject,
    wallInfo?: SiteRealizationBuildingWall.AsObject,
    towerInfo?: SiteRealizationBuildingTower.AsObject,
    trenchInfo?: SiteRealizationBuildingTrenches.AsObject,
  }
}

export class RegionTile extends jspb.Message {
  hasElevation(): boolean;
  clearElevation(): void;
  getElevation(): number | undefined;
  setElevation(value: number): void;

  hasRainfall(): boolean;
  clearRainfall(): void;
  getRainfall(): number | undefined;
  setRainfall(value: number): void;

  hasVegetation(): boolean;
  clearVegetation(): void;
  getVegetation(): number | undefined;
  setVegetation(value: number): void;

  hasTemperature(): boolean;
  clearTemperature(): void;
  getTemperature(): number | undefined;
  setTemperature(value: number): void;

  hasEvilness(): boolean;
  clearEvilness(): void;
  getEvilness(): number | undefined;
  setEvilness(value: number): void;

  hasDrainage(): boolean;
  clearDrainage(): void;
  getDrainage(): number | undefined;
  setDrainage(value: number): void;

  hasVolcanism(): boolean;
  clearVolcanism(): void;
  getVolcanism(): number | undefined;
  setVolcanism(value: number): void;

  hasSavagery(): boolean;
  clearSavagery(): void;
  getSavagery(): number | undefined;
  setSavagery(value: number): void;

  hasSalinity(): boolean;
  clearSalinity(): void;
  getSalinity(): number | undefined;
  setSalinity(value: number): void;

  hasRiverTiles(): boolean;
  clearRiverTiles(): void;
  getRiverTiles(): RiverTile | undefined;
  setRiverTiles(value?: RiverTile): void;

  hasWaterElevation(): boolean;
  clearWaterElevation(): void;
  getWaterElevation(): number | undefined;
  setWaterElevation(value: number): void;

  hasSurfaceMaterial(): boolean;
  clearSurfaceMaterial(): void;
  getSurfaceMaterial(): MatPair | undefined;
  setSurfaceMaterial(value?: MatPair): void;

  clearPlantMaterialsList(): void;
  getPlantMaterialsList(): Array<MatPair>;
  setPlantMaterialsList(value: Array<MatPair>): void;
  addPlantMaterials(value?: MatPair, index?: number): MatPair;

  clearBuildingsList(): void;
  getBuildingsList(): Array<SiteRealizationBuilding>;
  setBuildingsList(value: Array<SiteRealizationBuilding>): void;
  addBuildings(value?: SiteRealizationBuilding, index?: number): SiteRealizationBuilding;

  clearStoneMaterialsList(): void;
  getStoneMaterialsList(): Array<MatPair>;
  setStoneMaterialsList(value: Array<MatPair>): void;
  addStoneMaterials(value?: MatPair, index?: number): MatPair;

  clearTreeMaterialsList(): void;
  getTreeMaterialsList(): Array<MatPair>;
  setTreeMaterialsList(value: Array<MatPair>): void;
  addTreeMaterials(value?: MatPair, index?: number): MatPair;

  hasSnow(): boolean;
  clearSnow(): void;
  getSnow(): number | undefined;
  setSnow(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegionTile.AsObject;
  static toObject(includeInstance: boolean, msg: RegionTile): RegionTile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegionTile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegionTile;
  static deserializeBinaryFromReader(message: RegionTile, reader: jspb.BinaryReader): RegionTile;
}

export namespace RegionTile {
  export type AsObject = {
    elevation?: number,
    rainfall?: number,
    vegetation?: number,
    temperature?: number,
    evilness?: number,
    drainage?: number,
    volcanism?: number,
    savagery?: number,
    salinity?: number,
    riverTiles?: RiverTile.AsObject,
    waterElevation?: number,
    surfaceMaterial?: MatPair.AsObject,
    plantMaterialsList: Array<MatPair.AsObject>,
    buildingsList: Array<SiteRealizationBuilding.AsObject>,
    stoneMaterialsList: Array<MatPair.AsObject>,
    treeMaterialsList: Array<MatPair.AsObject>,
    snow?: number,
  }
}

export class RegionMap extends jspb.Message {
  hasMapX(): boolean;
  clearMapX(): void;
  getMapX(): number | undefined;
  setMapX(value: number): void;

  hasMapY(): boolean;
  clearMapY(): void;
  getMapY(): number | undefined;
  setMapY(value: number): void;

  hasName(): boolean;
  clearName(): void;
  getName(): string | undefined;
  setName(value: string): void;

  hasNameEnglish(): boolean;
  clearNameEnglish(): void;
  getNameEnglish(): string | undefined;
  setNameEnglish(value: string): void;

  clearTilesList(): void;
  getTilesList(): Array<RegionTile>;
  setTilesList(value: Array<RegionTile>): void;
  addTiles(value?: RegionTile, index?: number): RegionTile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegionMap.AsObject;
  static toObject(includeInstance: boolean, msg: RegionMap): RegionMap.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegionMap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegionMap;
  static deserializeBinaryFromReader(message: RegionMap, reader: jspb.BinaryReader): RegionMap;
}

export namespace RegionMap {
  export type AsObject = {
    mapX?: number,
    mapY?: number,
    name?: string,
    nameEnglish?: string,
    tilesList: Array<RegionTile.AsObject>,
  }
}

export class RegionMaps extends jspb.Message {
  clearWorldMapsList(): void;
  getWorldMapsList(): Array<WorldMap>;
  setWorldMapsList(value: Array<WorldMap>): void;
  addWorldMaps(value?: WorldMap, index?: number): WorldMap;

  clearRegionMapsList(): void;
  getRegionMapsList(): Array<RegionMap>;
  setRegionMapsList(value: Array<RegionMap>): void;
  addRegionMaps(value?: RegionMap, index?: number): RegionMap;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegionMaps.AsObject;
  static toObject(includeInstance: boolean, msg: RegionMaps): RegionMaps.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegionMaps, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegionMaps;
  static deserializeBinaryFromReader(message: RegionMaps, reader: jspb.BinaryReader): RegionMaps;
}

export namespace RegionMaps {
  export type AsObject = {
    worldMapsList: Array<WorldMap.AsObject>,
    regionMapsList: Array<RegionMap.AsObject>,
  }
}

export class PatternDescriptor extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): string | undefined;
  setId(value: string): void;

  clearColorsList(): void;
  getColorsList(): Array<ColorDefinition>;
  setColorsList(value: Array<ColorDefinition>): void;
  addColors(value?: ColorDefinition, index?: number): ColorDefinition;

  hasPattern(): boolean;
  clearPattern(): void;
  getPattern(): PatternTypeMap[keyof PatternTypeMap] | undefined;
  setPattern(value: PatternTypeMap[keyof PatternTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatternDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: PatternDescriptor): PatternDescriptor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PatternDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatternDescriptor;
  static deserializeBinaryFromReader(message: PatternDescriptor, reader: jspb.BinaryReader): PatternDescriptor;
}

export namespace PatternDescriptor {
  export type AsObject = {
    id?: string,
    colorsList: Array<ColorDefinition.AsObject>,
    pattern?: PatternTypeMap[keyof PatternTypeMap],
  }
}

export class ColorModifierRaw extends jspb.Message {
  clearPatternsList(): void;
  getPatternsList(): Array<PatternDescriptor>;
  setPatternsList(value: Array<PatternDescriptor>): void;
  addPatterns(value?: PatternDescriptor, index?: number): PatternDescriptor;

  clearBodyPartIdList(): void;
  getBodyPartIdList(): Array<number>;
  setBodyPartIdList(value: Array<number>): void;
  addBodyPartId(value: number, index?: number): number;

  clearTissueLayerIdList(): void;
  getTissueLayerIdList(): Array<number>;
  setTissueLayerIdList(value: Array<number>): void;
  addTissueLayerId(value: number, index?: number): number;

  hasStartDate(): boolean;
  clearStartDate(): void;
  getStartDate(): number | undefined;
  setStartDate(value: number): void;

  hasEndDate(): boolean;
  clearEndDate(): void;
  getEndDate(): number | undefined;
  setEndDate(value: number): void;

  hasPart(): boolean;
  clearPart(): void;
  getPart(): string | undefined;
  setPart(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ColorModifierRaw.AsObject;
  static toObject(includeInstance: boolean, msg: ColorModifierRaw): ColorModifierRaw.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ColorModifierRaw, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ColorModifierRaw;
  static deserializeBinaryFromReader(message: ColorModifierRaw, reader: jspb.BinaryReader): ColorModifierRaw;
}

export namespace ColorModifierRaw {
  export type AsObject = {
    patternsList: Array<PatternDescriptor.AsObject>,
    bodyPartIdList: Array<number>,
    tissueLayerIdList: Array<number>,
    startDate?: number,
    endDate?: number,
    part?: string,
  }
}

export class BodyPartLayerRaw extends jspb.Message {
  hasLayerName(): boolean;
  clearLayerName(): void;
  getLayerName(): string | undefined;
  setLayerName(value: string): void;

  hasTissueId(): boolean;
  clearTissueId(): void;
  getTissueId(): number | undefined;
  setTissueId(value: number): void;

  hasLayerDepth(): boolean;
  clearLayerDepth(): void;
  getLayerDepth(): number | undefined;
  setLayerDepth(value: number): void;

  clearBpModifiersList(): void;
  getBpModifiersList(): Array<number>;
  setBpModifiersList(value: Array<number>): void;
  addBpModifiers(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BodyPartLayerRaw.AsObject;
  static toObject(includeInstance: boolean, msg: BodyPartLayerRaw): BodyPartLayerRaw.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BodyPartLayerRaw, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BodyPartLayerRaw;
  static deserializeBinaryFromReader(message: BodyPartLayerRaw, reader: jspb.BinaryReader): BodyPartLayerRaw;
}

export namespace BodyPartLayerRaw {
  export type AsObject = {
    layerName?: string,
    tissueId?: number,
    layerDepth?: number,
    bpModifiersList: Array<number>,
  }
}

export class BodyPartRaw extends jspb.Message {
  hasToken(): boolean;
  clearToken(): void;
  getToken(): string | undefined;
  setToken(value: string): void;

  hasCategory(): boolean;
  clearCategory(): void;
  getCategory(): string | undefined;
  setCategory(value: string): void;

  hasParent(): boolean;
  clearParent(): void;
  getParent(): number | undefined;
  setParent(value: number): void;

  clearFlagsList(): void;
  getFlagsList(): Array<boolean>;
  setFlagsList(value: Array<boolean>): void;
  addFlags(value: boolean, index?: number): boolean;

  clearLayersList(): void;
  getLayersList(): Array<BodyPartLayerRaw>;
  setLayersList(value: Array<BodyPartLayerRaw>): void;
  addLayers(value?: BodyPartLayerRaw, index?: number): BodyPartLayerRaw;

  hasRelsize(): boolean;
  clearRelsize(): void;
  getRelsize(): number | undefined;
  setRelsize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BodyPartRaw.AsObject;
  static toObject(includeInstance: boolean, msg: BodyPartRaw): BodyPartRaw.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BodyPartRaw, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BodyPartRaw;
  static deserializeBinaryFromReader(message: BodyPartRaw, reader: jspb.BinaryReader): BodyPartRaw;
}

export namespace BodyPartRaw {
  export type AsObject = {
    token?: string,
    category?: string,
    parent?: number,
    flagsList: Array<boolean>,
    layersList: Array<BodyPartLayerRaw.AsObject>,
    relsize?: number,
  }
}

export class BpAppearanceModifier extends jspb.Message {
  hasType(): boolean;
  clearType(): void;
  getType(): string | undefined;
  setType(value: string): void;

  hasModMin(): boolean;
  clearModMin(): void;
  getModMin(): number | undefined;
  setModMin(value: number): void;

  hasModMax(): boolean;
  clearModMax(): void;
  getModMax(): number | undefined;
  setModMax(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BpAppearanceModifier.AsObject;
  static toObject(includeInstance: boolean, msg: BpAppearanceModifier): BpAppearanceModifier.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BpAppearanceModifier, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BpAppearanceModifier;
  static deserializeBinaryFromReader(message: BpAppearanceModifier, reader: jspb.BinaryReader): BpAppearanceModifier;
}

export namespace BpAppearanceModifier {
  export type AsObject = {
    type?: string,
    modMin?: number,
    modMax?: number,
  }
}

export class TissueRaw extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): string | undefined;
  setId(value: string): void;

  hasName(): boolean;
  clearName(): void;
  getName(): string | undefined;
  setName(value: string): void;

  hasMaterial(): boolean;
  clearMaterial(): void;
  getMaterial(): MatPair | undefined;
  setMaterial(value?: MatPair): void;

  hasSubordinateToTissue(): boolean;
  clearSubordinateToTissue(): void;
  getSubordinateToTissue(): string | undefined;
  setSubordinateToTissue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TissueRaw.AsObject;
  static toObject(includeInstance: boolean, msg: TissueRaw): TissueRaw.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TissueRaw, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TissueRaw;
  static deserializeBinaryFromReader(message: TissueRaw, reader: jspb.BinaryReader): TissueRaw;
}

export namespace TissueRaw {
  export type AsObject = {
    id?: string,
    name?: string,
    material?: MatPair.AsObject,
    subordinateToTissue?: string,
  }
}

export class CasteRaw extends jspb.Message {
  hasIndex(): boolean;
  clearIndex(): void;
  getIndex(): number | undefined;
  setIndex(value: number): void;

  hasCasteId(): boolean;
  clearCasteId(): void;
  getCasteId(): string | undefined;
  setCasteId(value: string): void;

  clearCasteNameList(): void;
  getCasteNameList(): Array<string>;
  setCasteNameList(value: Array<string>): void;
  addCasteName(value: string, index?: number): string;

  clearBabyNameList(): void;
  getBabyNameList(): Array<string>;
  setBabyNameList(value: Array<string>): void;
  addBabyName(value: string, index?: number): string;

  clearChildNameList(): void;
  getChildNameList(): Array<string>;
  setChildNameList(value: Array<string>): void;
  addChildName(value: string, index?: number): string;

  hasGender(): boolean;
  clearGender(): void;
  getGender(): number | undefined;
  setGender(value: number): void;

  clearBodyPartsList(): void;
  getBodyPartsList(): Array<BodyPartRaw>;
  setBodyPartsList(value: Array<BodyPartRaw>): void;
  addBodyParts(value?: BodyPartRaw, index?: number): BodyPartRaw;

  hasTotalRelsize(): boolean;
  clearTotalRelsize(): void;
  getTotalRelsize(): number | undefined;
  setTotalRelsize(value: number): void;

  clearModifiersList(): void;
  getModifiersList(): Array<BpAppearanceModifier>;
  setModifiersList(value: Array<BpAppearanceModifier>): void;
  addModifiers(value?: BpAppearanceModifier, index?: number): BpAppearanceModifier;

  clearModifierIdxList(): void;
  getModifierIdxList(): Array<number>;
  setModifierIdxList(value: Array<number>): void;
  addModifierIdx(value: number, index?: number): number;

  clearPartIdxList(): void;
  getPartIdxList(): Array<number>;
  setPartIdxList(value: Array<number>): void;
  addPartIdx(value: number, index?: number): number;

  clearLayerIdxList(): void;
  getLayerIdxList(): Array<number>;
  setLayerIdxList(value: Array<number>): void;
  addLayerIdx(value: number, index?: number): number;

  clearBodyAppearanceModifiersList(): void;
  getBodyAppearanceModifiersList(): Array<BpAppearanceModifier>;
  setBodyAppearanceModifiersList(value: Array<BpAppearanceModifier>): void;
  addBodyAppearanceModifiers(value?: BpAppearanceModifier, index?: number): BpAppearanceModifier;

  clearColorModifiersList(): void;
  getColorModifiersList(): Array<ColorModifierRaw>;
  setColorModifiersList(value: Array<ColorModifierRaw>): void;
  addColorModifiers(value?: ColorModifierRaw, index?: number): ColorModifierRaw;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string | undefined;
  setDescription(value: string): void;

  hasAdultSize(): boolean;
  clearAdultSize(): void;
  getAdultSize(): number | undefined;
  setAdultSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CasteRaw.AsObject;
  static toObject(includeInstance: boolean, msg: CasteRaw): CasteRaw.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CasteRaw, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CasteRaw;
  static deserializeBinaryFromReader(message: CasteRaw, reader: jspb.BinaryReader): CasteRaw;
}

export namespace CasteRaw {
  export type AsObject = {
    index?: number,
    casteId?: string,
    casteNameList: Array<string>,
    babyNameList: Array<string>,
    childNameList: Array<string>,
    gender?: number,
    bodyPartsList: Array<BodyPartRaw.AsObject>,
    totalRelsize?: number,
    modifiersList: Array<BpAppearanceModifier.AsObject>,
    modifierIdxList: Array<number>,
    partIdxList: Array<number>,
    layerIdxList: Array<number>,
    bodyAppearanceModifiersList: Array<BpAppearanceModifier.AsObject>,
    colorModifiersList: Array<ColorModifierRaw.AsObject>,
    description?: string,
    adultSize?: number,
  }
}

export class CreatureRaw extends jspb.Message {
  hasIndex(): boolean;
  clearIndex(): void;
  getIndex(): number | undefined;
  setIndex(value: number): void;

  hasCreatureId(): boolean;
  clearCreatureId(): void;
  getCreatureId(): string | undefined;
  setCreatureId(value: string): void;

  clearNameList(): void;
  getNameList(): Array<string>;
  setNameList(value: Array<string>): void;
  addName(value: string, index?: number): string;

  clearGeneralBabyNameList(): void;
  getGeneralBabyNameList(): Array<string>;
  setGeneralBabyNameList(value: Array<string>): void;
  addGeneralBabyName(value: string, index?: number): string;

  clearGeneralChildNameList(): void;
  getGeneralChildNameList(): Array<string>;
  setGeneralChildNameList(value: Array<string>): void;
  addGeneralChildName(value: string, index?: number): string;

  hasCreatureTile(): boolean;
  clearCreatureTile(): void;
  getCreatureTile(): number | undefined;
  setCreatureTile(value: number): void;

  hasCreatureSoldierTile(): boolean;
  clearCreatureSoldierTile(): void;
  getCreatureSoldierTile(): number | undefined;
  setCreatureSoldierTile(value: number): void;

  hasColor(): boolean;
  clearColor(): void;
  getColor(): ColorDefinition | undefined;
  setColor(value?: ColorDefinition): void;

  hasAdultsize(): boolean;
  clearAdultsize(): void;
  getAdultsize(): number | undefined;
  setAdultsize(value: number): void;

  clearCasteList(): void;
  getCasteList(): Array<CasteRaw>;
  setCasteList(value: Array<CasteRaw>): void;
  addCaste(value?: CasteRaw, index?: number): CasteRaw;

  clearTissuesList(): void;
  getTissuesList(): Array<TissueRaw>;
  setTissuesList(value: Array<TissueRaw>): void;
  addTissues(value?: TissueRaw, index?: number): TissueRaw;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatureRaw.AsObject;
  static toObject(includeInstance: boolean, msg: CreatureRaw): CreatureRaw.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreatureRaw, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatureRaw;
  static deserializeBinaryFromReader(message: CreatureRaw, reader: jspb.BinaryReader): CreatureRaw;
}

export namespace CreatureRaw {
  export type AsObject = {
    index?: number,
    creatureId?: string,
    nameList: Array<string>,
    generalBabyNameList: Array<string>,
    generalChildNameList: Array<string>,
    creatureTile?: number,
    creatureSoldierTile?: number,
    color?: ColorDefinition.AsObject,
    adultsize?: number,
    casteList: Array<CasteRaw.AsObject>,
    tissuesList: Array<TissueRaw.AsObject>,
  }
}

export class CreatureRawList extends jspb.Message {
  clearCreatureRawsList(): void;
  getCreatureRawsList(): Array<CreatureRaw>;
  setCreatureRawsList(value: Array<CreatureRaw>): void;
  addCreatureRaws(value?: CreatureRaw, index?: number): CreatureRaw;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatureRawList.AsObject;
  static toObject(includeInstance: boolean, msg: CreatureRawList): CreatureRawList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreatureRawList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatureRawList;
  static deserializeBinaryFromReader(message: CreatureRawList, reader: jspb.BinaryReader): CreatureRawList;
}

export namespace CreatureRawList {
  export type AsObject = {
    creatureRawsList: Array<CreatureRaw.AsObject>,
  }
}

export class Army extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): number | undefined;
  setId(value: number): void;

  hasPosX(): boolean;
  clearPosX(): void;
  getPosX(): number | undefined;
  setPosX(value: number): void;

  hasPosY(): boolean;
  clearPosY(): void;
  getPosY(): number | undefined;
  setPosY(value: number): void;

  hasPosZ(): boolean;
  clearPosZ(): void;
  getPosZ(): number | undefined;
  setPosZ(value: number): void;

  hasLeader(): boolean;
  clearLeader(): void;
  getLeader(): UnitDefinition | undefined;
  setLeader(value?: UnitDefinition): void;

  clearMembersList(): void;
  getMembersList(): Array<UnitDefinition>;
  setMembersList(value: Array<UnitDefinition>): void;
  addMembers(value?: UnitDefinition, index?: number): UnitDefinition;

  hasFlags(): boolean;
  clearFlags(): void;
  getFlags(): number | undefined;
  setFlags(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Army.AsObject;
  static toObject(includeInstance: boolean, msg: Army): Army.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Army, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Army;
  static deserializeBinaryFromReader(message: Army, reader: jspb.BinaryReader): Army;
}

export namespace Army {
  export type AsObject = {
    id?: number,
    posX?: number,
    posY?: number,
    posZ?: number,
    leader?: UnitDefinition.AsObject,
    membersList: Array<UnitDefinition.AsObject>,
    flags?: number,
  }
}

export class ArmyList extends jspb.Message {
  clearArmiesList(): void;
  getArmiesList(): Array<Army>;
  setArmiesList(value: Array<Army>): void;
  addArmies(value?: Army, index?: number): Army;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArmyList.AsObject;
  static toObject(includeInstance: boolean, msg: ArmyList): ArmyList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArmyList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArmyList;
  static deserializeBinaryFromReader(message: ArmyList, reader: jspb.BinaryReader): ArmyList;
}

export namespace ArmyList {
  export type AsObject = {
    armiesList: Array<Army.AsObject>,
  }
}

export class GrowthPrint extends jspb.Message {
  hasPriority(): boolean;
  clearPriority(): void;
  getPriority(): number | undefined;
  setPriority(value: number): void;

  hasColor(): boolean;
  clearColor(): void;
  getColor(): number | undefined;
  setColor(value: number): void;

  hasTimingStart(): boolean;
  clearTimingStart(): void;
  getTimingStart(): number | undefined;
  setTimingStart(value: number): void;

  hasTimingEnd(): boolean;
  clearTimingEnd(): void;
  getTimingEnd(): number | undefined;
  setTimingEnd(value: number): void;

  hasTile(): boolean;
  clearTile(): void;
  getTile(): number | undefined;
  setTile(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GrowthPrint.AsObject;
  static toObject(includeInstance: boolean, msg: GrowthPrint): GrowthPrint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GrowthPrint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GrowthPrint;
  static deserializeBinaryFromReader(message: GrowthPrint, reader: jspb.BinaryReader): GrowthPrint;
}

export namespace GrowthPrint {
  export type AsObject = {
    priority?: number,
    color?: number,
    timingStart?: number,
    timingEnd?: number,
    tile?: number,
  }
}

export class TreeGrowth extends jspb.Message {
  hasIndex(): boolean;
  clearIndex(): void;
  getIndex(): number | undefined;
  setIndex(value: number): void;

  hasId(): boolean;
  clearId(): void;
  getId(): string | undefined;
  setId(value: string): void;

  hasName(): boolean;
  clearName(): void;
  getName(): string | undefined;
  setName(value: string): void;

  hasMat(): boolean;
  clearMat(): void;
  getMat(): MatPair | undefined;
  setMat(value?: MatPair): void;

  clearPrintsList(): void;
  getPrintsList(): Array<GrowthPrint>;
  setPrintsList(value: Array<GrowthPrint>): void;
  addPrints(value?: GrowthPrint, index?: number): GrowthPrint;

  hasTimingStart(): boolean;
  clearTimingStart(): void;
  getTimingStart(): number | undefined;
  setTimingStart(value: number): void;

  hasTimingEnd(): boolean;
  clearTimingEnd(): void;
  getTimingEnd(): number | undefined;
  setTimingEnd(value: number): void;

  hasTwigs(): boolean;
  clearTwigs(): void;
  getTwigs(): boolean | undefined;
  setTwigs(value: boolean): void;

  hasLightBranches(): boolean;
  clearLightBranches(): void;
  getLightBranches(): boolean | undefined;
  setLightBranches(value: boolean): void;

  hasHeavyBranches(): boolean;
  clearHeavyBranches(): void;
  getHeavyBranches(): boolean | undefined;
  setHeavyBranches(value: boolean): void;

  hasTrunk(): boolean;
  clearTrunk(): void;
  getTrunk(): boolean | undefined;
  setTrunk(value: boolean): void;

  hasRoots(): boolean;
  clearRoots(): void;
  getRoots(): boolean | undefined;
  setRoots(value: boolean): void;

  hasCap(): boolean;
  clearCap(): void;
  getCap(): boolean | undefined;
  setCap(value: boolean): void;

  hasSapling(): boolean;
  clearSapling(): void;
  getSapling(): boolean | undefined;
  setSapling(value: boolean): void;

  hasTrunkHeightStart(): boolean;
  clearTrunkHeightStart(): void;
  getTrunkHeightStart(): number | undefined;
  setTrunkHeightStart(value: number): void;

  hasTrunkHeightEnd(): boolean;
  clearTrunkHeightEnd(): void;
  getTrunkHeightEnd(): number | undefined;
  setTrunkHeightEnd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TreeGrowth.AsObject;
  static toObject(includeInstance: boolean, msg: TreeGrowth): TreeGrowth.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TreeGrowth, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TreeGrowth;
  static deserializeBinaryFromReader(message: TreeGrowth, reader: jspb.BinaryReader): TreeGrowth;
}

export namespace TreeGrowth {
  export type AsObject = {
    index?: number,
    id?: string,
    name?: string,
    mat?: MatPair.AsObject,
    printsList: Array<GrowthPrint.AsObject>,
    timingStart?: number,
    timingEnd?: number,
    twigs?: boolean,
    lightBranches?: boolean,
    heavyBranches?: boolean,
    trunk?: boolean,
    roots?: boolean,
    cap?: boolean,
    sapling?: boolean,
    trunkHeightStart?: number,
    trunkHeightEnd?: number,
  }
}

export class PlantRaw extends jspb.Message {
  hasIndex(): boolean;
  clearIndex(): void;
  getIndex(): number | undefined;
  setIndex(value: number): void;

  hasId(): boolean;
  clearId(): void;
  getId(): string | undefined;
  setId(value: string): void;

  hasName(): boolean;
  clearName(): void;
  getName(): string | undefined;
  setName(value: string): void;

  clearGrowthsList(): void;
  getGrowthsList(): Array<TreeGrowth>;
  setGrowthsList(value: Array<TreeGrowth>): void;
  addGrowths(value?: TreeGrowth, index?: number): TreeGrowth;

  hasTile(): boolean;
  clearTile(): void;
  getTile(): number | undefined;
  setTile(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlantRaw.AsObject;
  static toObject(includeInstance: boolean, msg: PlantRaw): PlantRaw.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlantRaw, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlantRaw;
  static deserializeBinaryFromReader(message: PlantRaw, reader: jspb.BinaryReader): PlantRaw;
}

export namespace PlantRaw {
  export type AsObject = {
    index?: number,
    id?: string,
    name?: string,
    growthsList: Array<TreeGrowth.AsObject>,
    tile?: number,
  }
}

export class PlantRawList extends jspb.Message {
  clearPlantRawsList(): void;
  getPlantRawsList(): Array<PlantRaw>;
  setPlantRawsList(value: Array<PlantRaw>): void;
  addPlantRaws(value?: PlantRaw, index?: number): PlantRaw;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlantRawList.AsObject;
  static toObject(includeInstance: boolean, msg: PlantRawList): PlantRawList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlantRawList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlantRawList;
  static deserializeBinaryFromReader(message: PlantRawList, reader: jspb.BinaryReader): PlantRawList;
}

export namespace PlantRawList {
  export type AsObject = {
    plantRawsList: Array<PlantRaw.AsObject>,
  }
}

export class ScreenTile extends jspb.Message {
  hasCharacter(): boolean;
  clearCharacter(): void;
  getCharacter(): number | undefined;
  setCharacter(value: number): void;

  hasForeground(): boolean;
  clearForeground(): void;
  getForeground(): number | undefined;
  setForeground(value: number): void;

  hasBackground(): boolean;
  clearBackground(): void;
  getBackground(): number | undefined;
  setBackground(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScreenTile.AsObject;
  static toObject(includeInstance: boolean, msg: ScreenTile): ScreenTile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScreenTile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScreenTile;
  static deserializeBinaryFromReader(message: ScreenTile, reader: jspb.BinaryReader): ScreenTile;
}

export namespace ScreenTile {
  export type AsObject = {
    character?: number,
    foreground?: number,
    background?: number,
  }
}

export class ScreenCapture extends jspb.Message {
  hasWidth(): boolean;
  clearWidth(): void;
  getWidth(): number | undefined;
  setWidth(value: number): void;

  hasHeight(): boolean;
  clearHeight(): void;
  getHeight(): number | undefined;
  setHeight(value: number): void;

  clearTilesList(): void;
  getTilesList(): Array<ScreenTile>;
  setTilesList(value: Array<ScreenTile>): void;
  addTiles(value?: ScreenTile, index?: number): ScreenTile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScreenCapture.AsObject;
  static toObject(includeInstance: boolean, msg: ScreenCapture): ScreenCapture.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScreenCapture, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScreenCapture;
  static deserializeBinaryFromReader(message: ScreenCapture, reader: jspb.BinaryReader): ScreenCapture;
}

export namespace ScreenCapture {
  export type AsObject = {
    width?: number,
    height?: number,
    tilesList: Array<ScreenTile.AsObject>,
  }
}

export class KeyboardEvent extends jspb.Message {
  hasType(): boolean;
  clearType(): void;
  getType(): number | undefined;
  setType(value: number): void;

  hasWhich(): boolean;
  clearWhich(): void;
  getWhich(): number | undefined;
  setWhich(value: number): void;

  hasState(): boolean;
  clearState(): void;
  getState(): number | undefined;
  setState(value: number): void;

  hasScancode(): boolean;
  clearScancode(): void;
  getScancode(): number | undefined;
  setScancode(value: number): void;

  hasSym(): boolean;
  clearSym(): void;
  getSym(): number | undefined;
  setSym(value: number): void;

  hasMod(): boolean;
  clearMod(): void;
  getMod(): number | undefined;
  setMod(value: number): void;

  hasUnicode(): boolean;
  clearUnicode(): void;
  getUnicode(): number | undefined;
  setUnicode(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeyboardEvent.AsObject;
  static toObject(includeInstance: boolean, msg: KeyboardEvent): KeyboardEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeyboardEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeyboardEvent;
  static deserializeBinaryFromReader(message: KeyboardEvent, reader: jspb.BinaryReader): KeyboardEvent;
}

export namespace KeyboardEvent {
  export type AsObject = {
    type?: number,
    which?: number,
    state?: number,
    scancode?: number,
    sym?: number,
    mod?: number,
    unicode?: number,
  }
}

export class DigCommand extends jspb.Message {
  hasDesignation(): boolean;
  clearDesignation(): void;
  getDesignation(): TileDigDesignationMap[keyof TileDigDesignationMap] | undefined;
  setDesignation(value: TileDigDesignationMap[keyof TileDigDesignationMap]): void;

  clearLocationsList(): void;
  getLocationsList(): Array<Coord>;
  setLocationsList(value: Array<Coord>): void;
  addLocations(value?: Coord, index?: number): Coord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DigCommand.AsObject;
  static toObject(includeInstance: boolean, msg: DigCommand): DigCommand.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DigCommand, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DigCommand;
  static deserializeBinaryFromReader(message: DigCommand, reader: jspb.BinaryReader): DigCommand;
}

export namespace DigCommand {
  export type AsObject = {
    designation?: TileDigDesignationMap[keyof TileDigDesignationMap],
    locationsList: Array<Coord.AsObject>,
  }
}

export class SingleBool extends jspb.Message {
  hasValue(): boolean;
  clearValue(): void;
  getValue(): boolean | undefined;
  setValue(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleBool.AsObject;
  static toObject(includeInstance: boolean, msg: SingleBool): SingleBool.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SingleBool, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleBool;
  static deserializeBinaryFromReader(message: SingleBool, reader: jspb.BinaryReader): SingleBool;
}

export namespace SingleBool {
  export type AsObject = {
    value?: boolean,
  }
}

export class VersionInfo extends jspb.Message {
  hasDwarfFortressVersion(): boolean;
  clearDwarfFortressVersion(): void;
  getDwarfFortressVersion(): string | undefined;
  setDwarfFortressVersion(value: string): void;

  hasDfhackVersion(): boolean;
  clearDfhackVersion(): void;
  getDfhackVersion(): string | undefined;
  setDfhackVersion(value: string): void;

  hasRemoteFortressReaderVersion(): boolean;
  clearRemoteFortressReaderVersion(): void;
  getRemoteFortressReaderVersion(): string | undefined;
  setRemoteFortressReaderVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VersionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: VersionInfo): VersionInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VersionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VersionInfo;
  static deserializeBinaryFromReader(message: VersionInfo, reader: jspb.BinaryReader): VersionInfo;
}

export namespace VersionInfo {
  export type AsObject = {
    dwarfFortressVersion?: string,
    dfhackVersion?: string,
    remoteFortressReaderVersion?: string,
  }
}

export class ListRequest extends jspb.Message {
  hasListStart(): boolean;
  clearListStart(): void;
  getListStart(): number | undefined;
  setListStart(value: number): void;

  hasListEnd(): boolean;
  clearListEnd(): void;
  getListEnd(): number | undefined;
  setListEnd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRequest): ListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRequest;
  static deserializeBinaryFromReader(message: ListRequest, reader: jspb.BinaryReader): ListRequest;
}

export namespace ListRequest {
  export type AsObject = {
    listStart?: number,
    listEnd?: number,
  }
}

export class Report extends jspb.Message {
  hasType(): boolean;
  clearType(): void;
  getType(): number | undefined;
  setType(value: number): void;

  hasText(): boolean;
  clearText(): void;
  getText(): string | undefined;
  setText(value: string): void;

  hasColor(): boolean;
  clearColor(): void;
  getColor(): ColorDefinition | undefined;
  setColor(value?: ColorDefinition): void;

  hasDuration(): boolean;
  clearDuration(): void;
  getDuration(): number | undefined;
  setDuration(value: number): void;

  hasContinuation(): boolean;
  clearContinuation(): void;
  getContinuation(): boolean | undefined;
  setContinuation(value: boolean): void;

  hasUnconscious(): boolean;
  clearUnconscious(): void;
  getUnconscious(): boolean | undefined;
  setUnconscious(value: boolean): void;

  hasAnnouncement(): boolean;
  clearAnnouncement(): void;
  getAnnouncement(): boolean | undefined;
  setAnnouncement(value: boolean): void;

  hasRepeatCount(): boolean;
  clearRepeatCount(): void;
  getRepeatCount(): number | undefined;
  setRepeatCount(value: number): void;

  hasPos(): boolean;
  clearPos(): void;
  getPos(): Coord | undefined;
  setPos(value?: Coord): void;

  hasId(): boolean;
  clearId(): void;
  getId(): number | undefined;
  setId(value: number): void;

  hasYear(): boolean;
  clearYear(): void;
  getYear(): number | undefined;
  setYear(value: number): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): number | undefined;
  setTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Report.AsObject;
  static toObject(includeInstance: boolean, msg: Report): Report.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Report, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Report;
  static deserializeBinaryFromReader(message: Report, reader: jspb.BinaryReader): Report;
}

export namespace Report {
  export type AsObject = {
    type?: number,
    text?: string,
    color?: ColorDefinition.AsObject,
    duration?: number,
    continuation?: boolean,
    unconscious?: boolean,
    announcement?: boolean,
    repeatCount?: number,
    pos?: Coord.AsObject,
    id?: number,
    year?: number,
    time?: number,
  }
}

export class Status extends jspb.Message {
  clearReportsList(): void;
  getReportsList(): Array<Report>;
  setReportsList(value: Array<Report>): void;
  addReports(value?: Report, index?: number): Report;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Status.AsObject;
  static toObject(includeInstance: boolean, msg: Status): Status.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Status, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Status;
  static deserializeBinaryFromReader(message: Status, reader: jspb.BinaryReader): Status;
}

export namespace Status {
  export type AsObject = {
    reportsList: Array<Report.AsObject>,
  }
}

export class ShapeDescriptior extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): string | undefined;
  setId(value: string): void;

  hasTile(): boolean;
  clearTile(): void;
  getTile(): number | undefined;
  setTile(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShapeDescriptior.AsObject;
  static toObject(includeInstance: boolean, msg: ShapeDescriptior): ShapeDescriptior.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShapeDescriptior, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShapeDescriptior;
  static deserializeBinaryFromReader(message: ShapeDescriptior, reader: jspb.BinaryReader): ShapeDescriptior;
}

export namespace ShapeDescriptior {
  export type AsObject = {
    id?: string,
    tile?: number,
  }
}

export class Language extends jspb.Message {
  clearShapesList(): void;
  getShapesList(): Array<ShapeDescriptior>;
  setShapesList(value: Array<ShapeDescriptior>): void;
  addShapes(value?: ShapeDescriptior, index?: number): ShapeDescriptior;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Language.AsObject;
  static toObject(includeInstance: boolean, msg: Language): Language.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Language, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Language;
  static deserializeBinaryFromReader(message: Language, reader: jspb.BinaryReader): Language;
}

export namespace Language {
  export type AsObject = {
    shapesList: Array<ShapeDescriptior.AsObject>,
  }
}

export class ItemImprovement extends jspb.Message {
  hasMaterial(): boolean;
  clearMaterial(): void;
  getMaterial(): MatPair | undefined;
  setMaterial(value?: MatPair): void;

  hasType(): boolean;
  clearType(): void;
  getType(): ImprovementTypeMap[keyof ImprovementTypeMap] | undefined;
  setType(value: ImprovementTypeMap[keyof ImprovementTypeMap]): void;

  hasShape(): boolean;
  clearShape(): void;
  getShape(): number | undefined;
  setShape(value: number): void;

  hasSpecificType(): boolean;
  clearSpecificType(): void;
  getSpecificType(): number | undefined;
  setSpecificType(value: number): void;

  hasImage(): boolean;
  clearImage(): void;
  getImage(): ArtImage | undefined;
  setImage(value?: ArtImage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ItemImprovement.AsObject;
  static toObject(includeInstance: boolean, msg: ItemImprovement): ItemImprovement.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ItemImprovement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ItemImprovement;
  static deserializeBinaryFromReader(message: ItemImprovement, reader: jspb.BinaryReader): ItemImprovement;
}

export namespace ItemImprovement {
  export type AsObject = {
    material?: MatPair.AsObject,
    type?: ImprovementTypeMap[keyof ImprovementTypeMap],
    shape?: number,
    specificType?: number,
    image?: ArtImage.AsObject,
  }
}

export class ArtImageElement extends jspb.Message {
  hasCount(): boolean;
  clearCount(): void;
  getCount(): number | undefined;
  setCount(value: number): void;

  hasType(): boolean;
  clearType(): void;
  getType(): ArtImageElementTypeMap[keyof ArtImageElementTypeMap] | undefined;
  setType(value: ArtImageElementTypeMap[keyof ArtImageElementTypeMap]): void;

  hasCreatureItem(): boolean;
  clearCreatureItem(): void;
  getCreatureItem(): MatPair | undefined;
  setCreatureItem(value?: MatPair): void;

  hasMaterial(): boolean;
  clearMaterial(): void;
  getMaterial(): MatPair | undefined;
  setMaterial(value?: MatPair): void;

  hasId(): boolean;
  clearId(): void;
  getId(): number | undefined;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArtImageElement.AsObject;
  static toObject(includeInstance: boolean, msg: ArtImageElement): ArtImageElement.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArtImageElement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArtImageElement;
  static deserializeBinaryFromReader(message: ArtImageElement, reader: jspb.BinaryReader): ArtImageElement;
}

export namespace ArtImageElement {
  export type AsObject = {
    count?: number,
    type?: ArtImageElementTypeMap[keyof ArtImageElementTypeMap],
    creatureItem?: MatPair.AsObject,
    material?: MatPair.AsObject,
    id?: number,
  }
}

export class ArtImageProperty extends jspb.Message {
  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): number | undefined;
  setSubject(value: number): void;

  hasObject(): boolean;
  clearObject(): void;
  getObject(): number | undefined;
  setObject(value: number): void;

  hasVerb(): boolean;
  clearVerb(): void;
  getVerb(): ArtImageVerbMap[keyof ArtImageVerbMap] | undefined;
  setVerb(value: ArtImageVerbMap[keyof ArtImageVerbMap]): void;

  hasType(): boolean;
  clearType(): void;
  getType(): ArtImagePropertyTypeMap[keyof ArtImagePropertyTypeMap] | undefined;
  setType(value: ArtImagePropertyTypeMap[keyof ArtImagePropertyTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArtImageProperty.AsObject;
  static toObject(includeInstance: boolean, msg: ArtImageProperty): ArtImageProperty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArtImageProperty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArtImageProperty;
  static deserializeBinaryFromReader(message: ArtImageProperty, reader: jspb.BinaryReader): ArtImageProperty;
}

export namespace ArtImageProperty {
  export type AsObject = {
    subject?: number,
    object?: number,
    verb?: ArtImageVerbMap[keyof ArtImageVerbMap],
    type?: ArtImagePropertyTypeMap[keyof ArtImagePropertyTypeMap],
  }
}

export class ArtImage extends jspb.Message {
  clearElementsList(): void;
  getElementsList(): Array<ArtImageElement>;
  setElementsList(value: Array<ArtImageElement>): void;
  addElements(value?: ArtImageElement, index?: number): ArtImageElement;

  hasId(): boolean;
  clearId(): void;
  getId(): MatPair | undefined;
  setId(value?: MatPair): void;

  clearPropertiesList(): void;
  getPropertiesList(): Array<ArtImageProperty>;
  setPropertiesList(value: Array<ArtImageProperty>): void;
  addProperties(value?: ArtImageProperty, index?: number): ArtImageProperty;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArtImage.AsObject;
  static toObject(includeInstance: boolean, msg: ArtImage): ArtImage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArtImage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArtImage;
  static deserializeBinaryFromReader(message: ArtImage, reader: jspb.BinaryReader): ArtImage;
}

export namespace ArtImage {
  export type AsObject = {
    elementsList: Array<ArtImageElement.AsObject>,
    id?: MatPair.AsObject,
    propertiesList: Array<ArtImageProperty.AsObject>,
  }
}

export class Engraving extends jspb.Message {
  hasPos(): boolean;
  clearPos(): void;
  getPos(): Coord | undefined;
  setPos(value?: Coord): void;

  hasQuality(): boolean;
  clearQuality(): void;
  getQuality(): number | undefined;
  setQuality(value: number): void;

  hasTile(): boolean;
  clearTile(): void;
  getTile(): number | undefined;
  setTile(value: number): void;

  hasImage(): boolean;
  clearImage(): void;
  getImage(): ArtImage | undefined;
  setImage(value?: ArtImage): void;

  hasFloor(): boolean;
  clearFloor(): void;
  getFloor(): boolean | undefined;
  setFloor(value: boolean): void;

  hasWest(): boolean;
  clearWest(): void;
  getWest(): boolean | undefined;
  setWest(value: boolean): void;

  hasEast(): boolean;
  clearEast(): void;
  getEast(): boolean | undefined;
  setEast(value: boolean): void;

  hasNorth(): boolean;
  clearNorth(): void;
  getNorth(): boolean | undefined;
  setNorth(value: boolean): void;

  hasSouth(): boolean;
  clearSouth(): void;
  getSouth(): boolean | undefined;
  setSouth(value: boolean): void;

  hasHidden(): boolean;
  clearHidden(): void;
  getHidden(): boolean | undefined;
  setHidden(value: boolean): void;

  hasNorthwest(): boolean;
  clearNorthwest(): void;
  getNorthwest(): boolean | undefined;
  setNorthwest(value: boolean): void;

  hasNortheast(): boolean;
  clearNortheast(): void;
  getNortheast(): boolean | undefined;
  setNortheast(value: boolean): void;

  hasSouthwest(): boolean;
  clearSouthwest(): void;
  getSouthwest(): boolean | undefined;
  setSouthwest(value: boolean): void;

  hasSoutheast(): boolean;
  clearSoutheast(): void;
  getSoutheast(): boolean | undefined;
  setSoutheast(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Engraving.AsObject;
  static toObject(includeInstance: boolean, msg: Engraving): Engraving.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Engraving, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Engraving;
  static deserializeBinaryFromReader(message: Engraving, reader: jspb.BinaryReader): Engraving;
}

export namespace Engraving {
  export type AsObject = {
    pos?: Coord.AsObject,
    quality?: number,
    tile?: number,
    image?: ArtImage.AsObject,
    floor?: boolean,
    west?: boolean,
    east?: boolean,
    north?: boolean,
    south?: boolean,
    hidden?: boolean,
    northwest?: boolean,
    northeast?: boolean,
    southwest?: boolean,
    southeast?: boolean,
  }
}

export class FlowInfo extends jspb.Message {
  hasIndex(): boolean;
  clearIndex(): void;
  getIndex(): number | undefined;
  setIndex(value: number): void;

  hasType(): boolean;
  clearType(): void;
  getType(): FlowTypeMap[keyof FlowTypeMap] | undefined;
  setType(value: FlowTypeMap[keyof FlowTypeMap]): void;

  hasDensity(): boolean;
  clearDensity(): void;
  getDensity(): number | undefined;
  setDensity(value: number): void;

  hasPos(): boolean;
  clearPos(): void;
  getPos(): Coord | undefined;
  setPos(value?: Coord): void;

  hasDest(): boolean;
  clearDest(): void;
  getDest(): Coord | undefined;
  setDest(value?: Coord): void;

  hasExpanding(): boolean;
  clearExpanding(): void;
  getExpanding(): boolean | undefined;
  setExpanding(value: boolean): void;

  hasReuse(): boolean;
  clearReuse(): void;
  getReuse(): boolean | undefined;
  setReuse(value: boolean): void;

  hasGuideId(): boolean;
  clearGuideId(): void;
  getGuideId(): number | undefined;
  setGuideId(value: number): void;

  hasMaterial(): boolean;
  clearMaterial(): void;
  getMaterial(): MatPair | undefined;
  setMaterial(value?: MatPair): void;

  hasItem(): boolean;
  clearItem(): void;
  getItem(): MatPair | undefined;
  setItem(value?: MatPair): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlowInfo.AsObject;
  static toObject(includeInstance: boolean, msg: FlowInfo): FlowInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FlowInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlowInfo;
  static deserializeBinaryFromReader(message: FlowInfo, reader: jspb.BinaryReader): FlowInfo;
}

export namespace FlowInfo {
  export type AsObject = {
    index?: number,
    type?: FlowTypeMap[keyof FlowTypeMap],
    density?: number,
    pos?: Coord.AsObject,
    dest?: Coord.AsObject,
    expanding?: boolean,
    reuse?: boolean,
    guideId?: number,
    material?: MatPair.AsObject,
    item?: MatPair.AsObject,
  }
}

export class Wave extends jspb.Message {
  hasDest(): boolean;
  clearDest(): void;
  getDest(): Coord | undefined;
  setDest(value?: Coord): void;

  hasPos(): boolean;
  clearPos(): void;
  getPos(): Coord | undefined;
  setPos(value?: Coord): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Wave.AsObject;
  static toObject(includeInstance: boolean, msg: Wave): Wave.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Wave, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Wave;
  static deserializeBinaryFromReader(message: Wave, reader: jspb.BinaryReader): Wave;
}

export namespace Wave {
  export type AsObject = {
    dest?: Coord.AsObject,
    pos?: Coord.AsObject,
  }
}

export interface TiletypeShapeMap {
  NO_SHAPE: -1;
  EMPTY: 0;
  FLOOR: 1;
  BOULDER: 2;
  PEBBLES: 3;
  WALL: 4;
  FORTIFICATION: 5;
  STAIR_UP: 6;
  STAIR_DOWN: 7;
  STAIR_UPDOWN: 8;
  RAMP: 9;
  RAMP_TOP: 10;
  BROOK_BED: 11;
  BROOK_TOP: 12;
  TREE_SHAPE: 13;
  SAPLING: 14;
  SHRUB: 15;
  ENDLESS_PIT: 16;
  BRANCH: 17;
  TRUNK_BRANCH: 18;
  TWIG: 19;
}

export const TiletypeShape: TiletypeShapeMap;

export interface TiletypeSpecialMap {
  NO_SPECIAL: -1;
  NORMAL: 0;
  RIVER_SOURCE: 1;
  WATERFALL: 2;
  SMOOTH: 3;
  FURROWED: 4;
  WET: 5;
  DEAD: 6;
  WORN_1: 7;
  WORN_2: 8;
  WORN_3: 9;
  TRACK: 10;
  SMOOTH_DEAD: 11;
}

export const TiletypeSpecial: TiletypeSpecialMap;

export interface TiletypeMaterialMap {
  NO_MATERIAL: -1;
  AIR: 0;
  SOIL: 1;
  STONE: 2;
  FEATURE: 3;
  LAVA_STONE: 4;
  MINERAL: 5;
  FROZEN_LIQUID: 6;
  CONSTRUCTION: 7;
  GRASS_LIGHT: 8;
  GRASS_DARK: 9;
  GRASS_DRY: 10;
  GRASS_DEAD: 11;
  PLANT: 12;
  HFS: 13;
  CAMPFIRE: 14;
  FIRE: 15;
  ASHES: 16;
  MAGMA: 17;
  DRIFTWOOD: 18;
  POOL: 19;
  BROOK: 20;
  RIVER: 21;
  ROOT: 22;
  TREE_MATERIAL: 23;
  MUSHROOM: 24;
  UNDERWORLD_GATE: 25;
}

export const TiletypeMaterial: TiletypeMaterialMap;

export interface TiletypeVariantMap {
  NO_VARIANT: -1;
  VAR_1: 0;
  VAR_2: 1;
  VAR_3: 2;
  VAR_4: 3;
}

export const TiletypeVariant: TiletypeVariantMap;

export interface WorldPolesMap {
  NO_POLES: 0;
  NORTH_POLE: 1;
  SOUTH_POLE: 2;
  BOTH_POLES: 3;
}

export const WorldPoles: WorldPolesMap;

export interface BuildingDirectionMap {
  NORTH: 0;
  EAST: 1;
  SOUTH: 2;
  WEST: 3;
  NONE: 4;
}

export const BuildingDirection: BuildingDirectionMap;

export interface TileDigDesignationMap {
  NO_DIG: 0;
  DEFAULT_DIG: 1;
  UP_DOWN_STAIR_DIG: 2;
  CHANNEL_DIG: 3;
  RAMP_DIG: 4;
  DOWN_STAIR_DIG: 5;
  UP_STAIR_DIG: 6;
}

export const TileDigDesignation: TileDigDesignationMap;

export interface HairStyleMap {
  UNKEMPT: -1;
  NEATLY_COMBED: 0;
  BRAIDED: 1;
  DOUBLE_BRAID: 2;
  PONY_TAILS: 3;
  CLEAN_SHAVEN: 4;
}

export const HairStyle: HairStyleMap;

export interface InventoryModeMap {
  HAULED: 0;
  WEAPON: 1;
  WORN: 2;
  PIERCING: 3;
  FLASK: 4;
  WRAPPEDAROUND: 5;
  STUCKIN: 6;
  INMOUTH: 7;
  PET: 8;
  SEWNINTO: 9;
  STRAPPED: 10;
}

export const InventoryMode: InventoryModeMap;

export interface MatterStateMap {
  SOLID: 0;
  LIQUID: 1;
  GAS: 2;
  POWDER: 3;
  PASTE: 4;
  PRESSED: 5;
}

export const MatterState: MatterStateMap;

export interface FrontTypeMap {
  FRONT_NONE: 0;
  FRONT_WARM: 1;
  FRONT_COLD: 2;
  FRONT_OCCLUDED: 3;
}

export const FrontType: FrontTypeMap;

export interface CumulusTypeMap {
  CUMULUS_NONE: 0;
  CUMULUS_MEDIUM: 1;
  CUMULUS_MULTI: 2;
  CUMULUS_NIMBUS: 3;
}

export const CumulusType: CumulusTypeMap;

export interface StratusTypeMap {
  STRATUS_NONE: 0;
  STRATUS_ALTO: 1;
  STRATUS_PROPER: 2;
  STRATUS_NIMBUS: 3;
}

export const StratusType: StratusTypeMap;

export interface FogTypeMap {
  FOG_NONE: 0;
  FOG_MIST: 1;
  FOG_NORMAL: 2;
  F0G_THICK: 3;
}

export const FogType: FogTypeMap;

export interface SiteRealizationBuildingTypeMap {
  COTTAGE_PLOT: 0;
  CASTLE_WALL: 1;
  CASTLE_TOWER: 2;
  CASTLE_COURTYARD: 3;
  HOUSE: 4;
  TEMPLE: 5;
  TOMB: 6;
  SHOP_HOUSE: 7;
  WAREHOUSE: 8;
  MARKET_SQUARE: 9;
  PASTURE: 10;
  WASTE: 11;
  COURTYARD: 12;
  WELL: 13;
  VAULT: 14;
  GREAT_TOWER: 15;
  TRENCHES: 16;
  TREE_HOUSE: 17;
  HILLOCK_HOUSE: 18;
  MEAD_HALL: 19;
  FORTRESS_ENTRANCE: 20;
  LIBRARY: 21;
  TAVERN: 22;
}

export const SiteRealizationBuildingType: SiteRealizationBuildingTypeMap;

export interface PatternTypeMap {
  MONOTONE: 0;
  STRIPES: 1;
  IRIS_EYE: 2;
  SPOTS: 3;
  PUPIL_EYE: 4;
  MOTTLED: 5;
}

export const PatternType: PatternTypeMap;

export interface ImprovementTypeMap {
  ART_IMAGE: 0;
  COVERED: 1;
  RINGS_HANGING: 2;
  BANDS: 3;
  SPIKES: 4;
  ITEMSPECIFIC: 5;
  THREAD: 6;
  CLOTH: 7;
  SEWN_IMAGE: 8;
  PAGES: 9;
  ILLUSTRATION: 10;
  INSTRUMENT_PIECE: 11;
  WRITING: 12;
}

export const ImprovementType: ImprovementTypeMap;

export interface ArtImageElementTypeMap {
  IMAGE_CREATURE: 0;
  IMAGE_PLANT: 1;
  IMAGE_TREE: 2;
  IMAGE_SHAPE: 3;
  IMAGE_ITEM: 4;
}

export const ArtImageElementType: ArtImageElementTypeMap;

export interface ArtImagePropertyTypeMap {
  TRANSITIVE_VERB: 0;
  INTRANSITIVE_VERB: 1;
}

export const ArtImagePropertyType: ArtImagePropertyTypeMap;

export interface ArtImageVerbMap {
  VERB_WITHERING: 0;
  VERB_SURROUNDEDBY: 1;
  VERB_MASSACRING: 2;
  VERB_FIGHTING: 3;
  VERB_LABORING: 4;
  VERB_GREETING: 5;
  VERB_REFUSING: 6;
  VERB_SPEAKING: 7;
  VERB_EMBRACING: 8;
  VERB_STRIKINGDOWN: 9;
  VERB_MENACINGPOSE: 10;
  VERB_TRAVELING: 11;
  VERB_RAISING: 12;
  VERB_HIDING: 13;
  VERB_LOOKINGCONFUSED: 14;
  VERB_LOOKINGTERRIFIED: 15;
  VERB_DEVOURING: 16;
  VERB_ADMIRING: 17;
  VERB_BURNING: 18;
  VERB_WEEPING: 19;
  VERB_LOOKINGDEJECTED: 20;
  VERB_CRINGING: 21;
  VERB_SCREAMING: 22;
  VERB_SUBMISSIVEGESTURE: 23;
  VERB_FETALPOSITION: 24;
  VERB_SMEAREDINTOSPIRAL: 25;
  VERB_FALLING: 26;
  VERB_DEAD: 27;
  VERB_LAUGHING: 28;
  VERB_LOOKINGOFFENDED: 29;
  VERB_BEINGSHOT: 30;
  VERB_PLAINTIVEGESTURE: 31;
  VERB_MELTING: 32;
  VERB_SHOOTING: 33;
  VERB_TORTURING: 34;
  VERB_COMMITTINGDEPRAVEDACT: 35;
  VERB_PRAYING: 36;
  VERB_CONTEMPLATING: 37;
  VERB_COOKING: 38;
  VERB_ENGRAVING: 39;
  VERB_PROSTRATING: 40;
  VERB_SUFFERING: 41;
  VERB_BEINGIMPALED: 42;
  VERB_BEINGCONTORTED: 43;
  VERB_BEINGFLAYED: 44;
  VERB_HANGINGFROM: 45;
  VERB_BEINGMUTILATED: 46;
  VERB_TRIUMPHANTPOSE: 47;
}

export const ArtImageVerb: ArtImageVerbMap;

export interface FlowTypeMap {
  MIASMA: 0;
  STEAM: 1;
  MIST: 2;
  MATERIALDUST: 3;
  MAGMAMIST: 4;
  SMOKE: 5;
  DRAGONFIRE: 6;
  FIRE: 7;
  WEB: 8;
  MATERIALGAS: 9;
  MATERIALVAPOR: 10;
  OCEANWAVE: 11;
  SEAFOAM: 12;
  ITEMCLOUD: 13;
  CAMPFIRE: -1;
}

export const FlowType: FlowTypeMap;

