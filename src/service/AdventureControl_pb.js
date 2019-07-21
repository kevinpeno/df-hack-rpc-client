// source: AdventureControl.proto
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

var RemoteFortressReader_pb = require('./RemoteFortressReader_pb.js');
goog.object.extend(proto, RemoteFortressReader_pb);
goog.exportSymbol('proto.AdventureControl.AdvmodeMenu', null, global);
goog.exportSymbol('proto.AdventureControl.CarefulMovementType', null, global);
goog.exportSymbol('proto.AdventureControl.MenuContents', null, global);
goog.exportSymbol('proto.AdventureControl.MiscMoveParams', null, global);
goog.exportSymbol('proto.AdventureControl.MiscMoveType', null, global);
goog.exportSymbol('proto.AdventureControl.MoveCommandParams', null, global);
goog.exportSymbol('proto.AdventureControl.MovementOption', null, global);
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
proto.AdventureControl.MoveCommandParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AdventureControl.MoveCommandParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AdventureControl.MoveCommandParams.displayName = 'proto.AdventureControl.MoveCommandParams';
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
proto.AdventureControl.MovementOption = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AdventureControl.MovementOption, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AdventureControl.MovementOption.displayName = 'proto.AdventureControl.MovementOption';
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
proto.AdventureControl.MenuContents = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.AdventureControl.MenuContents.repeatedFields_, null);
};
goog.inherits(proto.AdventureControl.MenuContents, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AdventureControl.MenuContents.displayName = 'proto.AdventureControl.MenuContents';
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
proto.AdventureControl.MiscMoveParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AdventureControl.MiscMoveParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AdventureControl.MiscMoveParams.displayName = 'proto.AdventureControl.MiscMoveParams';
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
proto.AdventureControl.MoveCommandParams.prototype.toObject = function(opt_includeInstance) {
  return proto.AdventureControl.MoveCommandParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AdventureControl.MoveCommandParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AdventureControl.MoveCommandParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    direction: (f = msg.getDirection()) && RemoteFortressReader_pb.Coord.toObject(includeInstance, f)
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
 * @return {!proto.AdventureControl.MoveCommandParams}
 */
proto.AdventureControl.MoveCommandParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AdventureControl.MoveCommandParams;
  return proto.AdventureControl.MoveCommandParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AdventureControl.MoveCommandParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AdventureControl.MoveCommandParams}
 */
proto.AdventureControl.MoveCommandParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new RemoteFortressReader_pb.Coord;
      reader.readMessage(value,RemoteFortressReader_pb.Coord.deserializeBinaryFromReader);
      msg.setDirection(value);
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
proto.AdventureControl.MoveCommandParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AdventureControl.MoveCommandParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AdventureControl.MoveCommandParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AdventureControl.MoveCommandParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDirection();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      RemoteFortressReader_pb.Coord.serializeBinaryToWriter
    );
  }
};


/**
 * optional RemoteFortressReader.Coord direction = 1;
 * @return {?proto.RemoteFortressReader.Coord}
 */
proto.AdventureControl.MoveCommandParams.prototype.getDirection = function() {
  return /** @type{?proto.RemoteFortressReader.Coord} */ (
    jspb.Message.getWrapperField(this, RemoteFortressReader_pb.Coord, 1));
};


/** @param {?proto.RemoteFortressReader.Coord|undefined} value */
proto.AdventureControl.MoveCommandParams.prototype.setDirection = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.AdventureControl.MoveCommandParams.prototype.clearDirection = function() {
  this.setDirection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AdventureControl.MoveCommandParams.prototype.hasDirection = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.AdventureControl.MovementOption.prototype.toObject = function(opt_includeInstance) {
  return proto.AdventureControl.MovementOption.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AdventureControl.MovementOption} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AdventureControl.MovementOption.toObject = function(includeInstance, msg) {
  var f, obj = {
    dest: (f = msg.getDest()) && RemoteFortressReader_pb.Coord.toObject(includeInstance, f),
    source: (f = msg.getSource()) && RemoteFortressReader_pb.Coord.toObject(includeInstance, f),
    grab: (f = msg.getGrab()) && RemoteFortressReader_pb.Coord.toObject(includeInstance, f),
    movementType: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.AdventureControl.MovementOption}
 */
proto.AdventureControl.MovementOption.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AdventureControl.MovementOption;
  return proto.AdventureControl.MovementOption.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AdventureControl.MovementOption} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AdventureControl.MovementOption}
 */
proto.AdventureControl.MovementOption.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new RemoteFortressReader_pb.Coord;
      reader.readMessage(value,RemoteFortressReader_pb.Coord.deserializeBinaryFromReader);
      msg.setDest(value);
      break;
    case 2:
      var value = new RemoteFortressReader_pb.Coord;
      reader.readMessage(value,RemoteFortressReader_pb.Coord.deserializeBinaryFromReader);
      msg.setSource(value);
      break;
    case 3:
      var value = new RemoteFortressReader_pb.Coord;
      reader.readMessage(value,RemoteFortressReader_pb.Coord.deserializeBinaryFromReader);
      msg.setGrab(value);
      break;
    case 4:
      var value = /** @type {!proto.AdventureControl.CarefulMovementType} */ (reader.readEnum());
      msg.setMovementType(value);
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
proto.AdventureControl.MovementOption.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AdventureControl.MovementOption.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AdventureControl.MovementOption} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AdventureControl.MovementOption.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      RemoteFortressReader_pb.Coord.serializeBinaryToWriter
    );
  }
  f = message.getSource();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      RemoteFortressReader_pb.Coord.serializeBinaryToWriter
    );
  }
  f = message.getGrab();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      RemoteFortressReader_pb.Coord.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.AdventureControl.CarefulMovementType} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional RemoteFortressReader.Coord dest = 1;
 * @return {?proto.RemoteFortressReader.Coord}
 */
proto.AdventureControl.MovementOption.prototype.getDest = function() {
  return /** @type{?proto.RemoteFortressReader.Coord} */ (
    jspb.Message.getWrapperField(this, RemoteFortressReader_pb.Coord, 1));
};


/** @param {?proto.RemoteFortressReader.Coord|undefined} value */
proto.AdventureControl.MovementOption.prototype.setDest = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.AdventureControl.MovementOption.prototype.clearDest = function() {
  this.setDest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AdventureControl.MovementOption.prototype.hasDest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional RemoteFortressReader.Coord source = 2;
 * @return {?proto.RemoteFortressReader.Coord}
 */
proto.AdventureControl.MovementOption.prototype.getSource = function() {
  return /** @type{?proto.RemoteFortressReader.Coord} */ (
    jspb.Message.getWrapperField(this, RemoteFortressReader_pb.Coord, 2));
};


/** @param {?proto.RemoteFortressReader.Coord|undefined} value */
proto.AdventureControl.MovementOption.prototype.setSource = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.AdventureControl.MovementOption.prototype.clearSource = function() {
  this.setSource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AdventureControl.MovementOption.prototype.hasSource = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional RemoteFortressReader.Coord grab = 3;
 * @return {?proto.RemoteFortressReader.Coord}
 */
proto.AdventureControl.MovementOption.prototype.getGrab = function() {
  return /** @type{?proto.RemoteFortressReader.Coord} */ (
    jspb.Message.getWrapperField(this, RemoteFortressReader_pb.Coord, 3));
};


/** @param {?proto.RemoteFortressReader.Coord|undefined} value */
proto.AdventureControl.MovementOption.prototype.setGrab = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.AdventureControl.MovementOption.prototype.clearGrab = function() {
  this.setGrab(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AdventureControl.MovementOption.prototype.hasGrab = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional CarefulMovementType movement_type = 4;
 * @return {!proto.AdventureControl.CarefulMovementType}
 */
proto.AdventureControl.MovementOption.prototype.getMovementType = function() {
  return /** @type {!proto.AdventureControl.CarefulMovementType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {!proto.AdventureControl.CarefulMovementType} value */
proto.AdventureControl.MovementOption.prototype.setMovementType = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 */
proto.AdventureControl.MovementOption.prototype.clearMovementType = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AdventureControl.MovementOption.prototype.hasMovementType = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.AdventureControl.MenuContents.repeatedFields_ = [2];



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
proto.AdventureControl.MenuContents.prototype.toObject = function(opt_includeInstance) {
  return proto.AdventureControl.MenuContents.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AdventureControl.MenuContents} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AdventureControl.MenuContents.toObject = function(includeInstance, msg) {
  var f, obj = {
    currentMenu: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    movementsList: jspb.Message.toObjectList(msg.getMovementsList(),
    proto.AdventureControl.MovementOption.toObject, includeInstance)
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
 * @return {!proto.AdventureControl.MenuContents}
 */
proto.AdventureControl.MenuContents.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AdventureControl.MenuContents;
  return proto.AdventureControl.MenuContents.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AdventureControl.MenuContents} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AdventureControl.MenuContents}
 */
proto.AdventureControl.MenuContents.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.AdventureControl.AdvmodeMenu} */ (reader.readEnum());
      msg.setCurrentMenu(value);
      break;
    case 2:
      var value = new proto.AdventureControl.MovementOption;
      reader.readMessage(value,proto.AdventureControl.MovementOption.deserializeBinaryFromReader);
      msg.addMovements(value);
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
proto.AdventureControl.MenuContents.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AdventureControl.MenuContents.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AdventureControl.MenuContents} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AdventureControl.MenuContents.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.AdventureControl.AdvmodeMenu} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMovementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.AdventureControl.MovementOption.serializeBinaryToWriter
    );
  }
};


/**
 * optional AdvmodeMenu current_menu = 1;
 * @return {!proto.AdventureControl.AdvmodeMenu}
 */
proto.AdventureControl.MenuContents.prototype.getCurrentMenu = function() {
  return /** @type {!proto.AdventureControl.AdvmodeMenu} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.AdventureControl.AdvmodeMenu} value */
proto.AdventureControl.MenuContents.prototype.setCurrentMenu = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 */
proto.AdventureControl.MenuContents.prototype.clearCurrentMenu = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AdventureControl.MenuContents.prototype.hasCurrentMenu = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated MovementOption movements = 2;
 * @return {!Array<!proto.AdventureControl.MovementOption>}
 */
proto.AdventureControl.MenuContents.prototype.getMovementsList = function() {
  return /** @type{!Array<!proto.AdventureControl.MovementOption>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.AdventureControl.MovementOption, 2));
};


/** @param {!Array<!proto.AdventureControl.MovementOption>} value */
proto.AdventureControl.MenuContents.prototype.setMovementsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.AdventureControl.MovementOption=} opt_value
 * @param {number=} opt_index
 * @return {!proto.AdventureControl.MovementOption}
 */
proto.AdventureControl.MenuContents.prototype.addMovements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.AdventureControl.MovementOption, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.AdventureControl.MenuContents.prototype.clearMovementsList = function() {
  this.setMovementsList([]);
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
proto.AdventureControl.MiscMoveParams.prototype.toObject = function(opt_includeInstance) {
  return proto.AdventureControl.MiscMoveParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AdventureControl.MiscMoveParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AdventureControl.MiscMoveParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.AdventureControl.MiscMoveParams}
 */
proto.AdventureControl.MiscMoveParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AdventureControl.MiscMoveParams;
  return proto.AdventureControl.MiscMoveParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AdventureControl.MiscMoveParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AdventureControl.MiscMoveParams}
 */
proto.AdventureControl.MiscMoveParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.AdventureControl.MiscMoveType} */ (reader.readEnum());
      msg.setType(value);
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
proto.AdventureControl.MiscMoveParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AdventureControl.MiscMoveParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AdventureControl.MiscMoveParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AdventureControl.MiscMoveParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.AdventureControl.MiscMoveType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional MiscMoveType type = 1;
 * @return {!proto.AdventureControl.MiscMoveType}
 */
proto.AdventureControl.MiscMoveParams.prototype.getType = function() {
  return /** @type {!proto.AdventureControl.MiscMoveType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.AdventureControl.MiscMoveType} value */
proto.AdventureControl.MiscMoveParams.prototype.setType = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 */
proto.AdventureControl.MiscMoveParams.prototype.clearType = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AdventureControl.MiscMoveParams.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * @enum {number}
 */
proto.AdventureControl.AdvmodeMenu = {
  DEFAULT: 0,
  LOOK: 1,
  CONVERSATIONADDRESS: 2,
  CONVERSATIONSELECT: 3,
  CONVERSATIONSPEAK: 4,
  INVENTORY: 5,
  DROP: 6,
  THROWITEM: 7,
  WEAR: 8,
  REMOVE: 9,
  INTERACT: 10,
  PUT: 11,
  PUTCONTAINER: 12,
  EAT: 13,
  THROWAIM: 14,
  FIRE: 15,
  GET: 16,
  UNK17: 17,
  COMBATPREFS: 18,
  COMPANIONS: 19,
  MOVEMENTPREFS: 20,
  SPEEDPREFS: 21,
  INTERACTACTION: 22,
  MOVECAREFULLY: 23,
  ANNOUNCEMENTS: 24,
  USEBUILDING: 25,
  TRAVEL: 26,
  UNK27: 27,
  UNK28: 28,
  SLEEPCONFIRM: 29,
  SELECTINTERACTIONTARGET: 30,
  UNK31: 31,
  UNK32: 32,
  FALLACTION: 33,
  VIEWTRACKS: 34,
  JUMP: 35,
  UNK36: 36,
  ATTACKCONFIRM: 37,
  ATTACKTYPE: 38,
  ATTACKBODYPART: 39,
  ATTACKSTRIKE: 40,
  UNK41: 41,
  UNK42: 42,
  DODGEDIRECTION: 43,
  UNK44: 44,
  UNK45: 45,
  BUILD: 46
};

/**
 * @enum {number}
 */
proto.AdventureControl.CarefulMovementType = {
  DEFAULT_MOVEMENT: 0,
  RELEASE_ITEM_HOLD: 1,
  RELEASE_TILE_HOLD: 2,
  ATTACK_CREATURE: 3,
  HOLD_TILE: 4,
  MOVE: 5,
  CLIMB: 6,
  HOLD_ITEM: 7,
  BUILDING_INTERACT: 8,
  ITEM_INTERACT: 9,
  ITEM_INTERACT_GUIDE: 10,
  ITEM_INTERACT_RIDE: 11,
  ITEM_INTERACT_PUSH: 12
};

/**
 * @enum {number}
 */
proto.AdventureControl.MiscMoveType = {
  SET_CLIMB: 0,
  SET_STAND: 1,
  SET_CANCEL: 2
};

goog.object.extend(exports, proto.AdventureControl);