// Dependencies
import mongoose, { Schema } from 'mongoose';
import slug from 'slug';

// Defining the post schema...
const recordSchema = new Schema({
  artist: String,
  createdAt: Date,
  mix: { type: String, unique: true },
  slug: String,
  song: { type: String, required: true },
  year: { type: Number, required: true }
});

// Adding a custom method...
recordSchema.methods.addAuthor = function(author) {
  this.author = author;
  return this.author;
};

//Before save we create the slug and we add the current date...
recordSchema.pre('save', function(next) {
  this.slug = slug(`${this.artist}-${this.song}-${this.mix}`, { lower: 'on' });
  this.createdAt = Date.now();
  next();
});

// Creating our Model...
const Record = mongoose.model('Record', recordSchema);

export default Record;
