import * as mongoose from 'mongoose';

const EmailSchema = new mongoose.Schema({
	name: String,
	age: Number,
	breed: String,
});
export default EmailSchema;;
