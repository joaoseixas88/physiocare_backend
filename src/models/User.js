const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

const Schema = mongoose.Schema;


const homeCareServices = new Schema({
	name: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	created_at: {
		type: Date,
		default: Date.now
	},
	updated_at: {
		type: Date,
		default: Date.now
	}
});

const user = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true,
		lowercase: true,
	},
	password: {
		type: String,
		required: true,
		select: false
	},
	isDeleted: {
		type: Boolean,
		default: false
	},
	homeCareServices: [homeCareServices],
	created_at: {
		type: Date,
		default: Date.now
	}
});

user.pre("save", async function(next) {
	if ( this.password && this.isModified("password") ) {
		this.password = await bcryptjs.hashSync(this.password, 10);
	}
	next();

});



const User = mongoose.model("Users", user);

module.exports = { User };
