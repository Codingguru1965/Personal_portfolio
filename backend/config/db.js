import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      throw new Error('MONGODB_URI environment variable is not defined');
    }

    const conn = await mongoose.connect(mongoUri);
    console.log(`[MongoDB] Connected successfully: ${conn.connection.host}`);
  } catch (error) {
    console.error(`[MongoDB Connection Error]: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
