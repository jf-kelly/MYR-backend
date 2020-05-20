let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let SceneSchema = new Schema({
    'name': String,
    'uid': mongoose.Types.ObjectId | String,
    'code': String,
    'settings': {
        'skyColor': String,
        'showFloor': Boolean,
        'floorColor': String,
        'showCoordHelper': Boolean,
        'camPositon': String,
        'camConfig': Number,
        'canFly': Boolean,
        'viewOnly': Boolean,
        'collection': Schema.Types.ObjectId
    },
    'createTime': Date,
    'updateTime': Date
});

module.exports = mongoose.model('Scene', SceneSchema);