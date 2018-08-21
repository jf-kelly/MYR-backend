let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let LessonSchema = new Schema({
	'lessonNumber': Number,
	'name': String,
	'prompt': String,
	'code': String,
	'categories': Array,
	'next': Number,
	'previous': Number
});

module.exports = mongoose.model('Lesson', LessonSchema);
