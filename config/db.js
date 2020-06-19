const mongoose = require('mongoose')

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(
			'mongodb+srv://armen1234:armen1234@cluster0-0amgv.mongodb.net/buglogger?retryWrites=true&w=majority',
			{
				useNewUrlParser: true,
				useCreateIndex: true,
				useUnifiedTopology: true,
			}
		)
		console.log('MongoDB connected')
	} catch (err) {
		console.log(err)
		process.exit(1)
	}
}

module.exports = connectDB
