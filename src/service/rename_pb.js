// source: rename.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.dfproto.RenameBuildingIn', null, global);
goog.exportSymbol('proto.dfproto.RenameSquadIn', null, global);
goog.exportSymbol('proto.dfproto.RenameUnitIn', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dfproto.RenameSquadIn = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dfproto.RenameSquadIn, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dfproto.RenameSquadIn.displayName = 'proto.dfproto.RenameSquadIn';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dfproto.RenameUnitIn = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dfproto.RenameUnitIn, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dfproto.RenameUnitIn.displayName = 'proto.dfproto.RenameUnitIn';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dfproto.RenameBuildingIn = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dfproto.RenameBuildingIn, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dfproto.RenameBuildingIn.displayName = 'proto.dfproto.RenameBuildingIn';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dfproto.RenameSquadIn.prototype.toObject = function(opt_includeInstance) {
  return proto.dfproto.RenameSquadIn.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dfproto.RenameSquadIn} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dfproto.RenameSquadIn.toObject = function(includeInstance, msg) {
  var f, obj = {
    squadId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    nickname: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    alias: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dfproto.RenameSquadIn}
 */
proto.dfproto.RenameSquadIn.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dfproto.RenameSquadIn;
  return proto.dfproto.RenameSquadIn.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dfproto.RenameSquadIn} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dfproto.RenameSquadIn}
 */
proto.dfproto.RenameSquadIn.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSquadId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNickname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAlias(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dfproto.RenameSquadIn.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dfproto.RenameSquadIn.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dfproto.RenameSquadIn} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dfproto.RenameSquadIn.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * required int32 squad_id = 1;
 * @return {number}
 */
proto.dfproto.RenameSquadIn.prototype.getSquadId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.dfproto.RenameSquadIn.prototype.setSquadId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 */
proto.dfproto.RenameSquadIn.prototype.clearSquadId = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dfproto.RenameSquadIn.prototype.hasSquadId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string nickname = 2;
 * @return {string}
 */
proto.dfproto.RenameSquadIn.prototype.getNickname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.dfproto.RenameSquadIn.prototype.setNickname = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 */
proto.dfproto.RenameSquadIn.prototype.clearNickname = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dfproto.RenameSquadIn.prototype.hasNickname = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string alias = 3;
 * @return {string}
 */
proto.dfproto.RenameSquadIn.prototype.getAlias = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.dfproto.RenameSquadIn.prototype.setAlias = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 */
proto.dfproto.RenameSquadIn.prototype.clearAlias = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dfproto.RenameSquadIn.prototype.hasAlias = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dfproto.RenameUnitIn.prototype.toObject = function(opt_includeInstance) {
  return proto.dfproto.RenameUnitIn.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dfproto.RenameUnitIn} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dfproto.RenameUnitIn.toObject = function(includeInstance, msg) {
  var f, obj = {
    unitId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    nickname: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    profession: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dfproto.RenameUnitIn}
 */
proto.dfproto.RenameUnitIn.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dfproto.RenameUnitIn;
  return proto.dfproto.RenameUnitIn.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dfproto.RenameUnitIn} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dfproto.RenameUnitIn}
 */
proto.dfproto.RenameUnitIn.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUnitId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNickname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setProfession(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dfproto.RenameUnitIn.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dfproto.RenameUnitIn.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dfproto.RenameUnitIn} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dfproto.RenameUnitIn.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * required int32 unit_id = 1;
 * @return {number}
 */
proto.dfproto.RenameUnitIn.prototype.getUnitId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.dfproto.RenameUnitIn.prototype.setUnitId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 */
proto.dfproto.RenameUnitIn.prototype.clearUnitId = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dfproto.RenameUnitIn.prototype.hasUnitId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string nickname = 2;
 * @return {string}
 */
proto.dfproto.RenameUnitIn.prototype.getNickname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.dfproto.RenameUnitIn.prototype.setNickname = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 */
proto.dfproto.RenameUnitIn.prototype.clearNickname = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dfproto.RenameUnitIn.prototype.hasNickname = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string profession = 3;
 * @return {string}
 */
proto.dfproto.RenameUnitIn.prototype.getProfession = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.dfproto.RenameUnitIn.prototype.setProfession = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 */
proto.dfproto.RenameUnitIn.prototype.clearProfession = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dfproto.RenameUnitIn.prototype.hasProfession = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dfproto.RenameBuildingIn.prototype.toObject = function(opt_includeInstance) {
  return proto.dfproto.RenameBuildingIn.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dfproto.RenameBuildingIn} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dfproto.RenameBuildingIn.toObject = function(includeInstance, msg) {
  var f, obj = {
    buildingId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    name: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dfproto.RenameBuildingIn}
 */
proto.dfproto.RenameBuildingIn.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dfproto.RenameBuildingIn;
  return proto.dfproto.RenameBuildingIn.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dfproto.RenameBuildingIn} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dfproto.RenameBuildingIn}
 */
proto.dfproto.RenameBuildingIn.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBuildingId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dfproto.RenameBuildingIn.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dfproto.RenameBuildingIn.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dfproto.RenameBuildingIn} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dfproto.RenameBuildingIn.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * required int32 building_id = 1;
 * @return {number}
 */
proto.dfproto.RenameBuildingIn.prototype.getBuildingId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.dfproto.RenameBuildingIn.prototype.setBuildingId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 */
proto.dfproto.RenameBuildingIn.prototype.clearBuildingId = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dfproto.RenameBuildingIn.prototype.hasBuildingId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.dfproto.RenameBuildingIn.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.dfproto.RenameBuildingIn.prototype.setName = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 */
proto.dfproto.RenameBuildingIn.prototype.clearName = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dfproto.RenameBuildingIn.prototype.hasName = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.dfproto);