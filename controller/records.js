// Dependencies
import slugFn from 'slug';
import Record from '../model/record';

export function createRecord(artist, mix, song, year, callback) {
  // Creating a new vinly record...
  const newRecord = new Record({
    artist,
    mix,
    song,
    year
  });

  // Adding the record author...
  newRecord.addAuthor('squirm');

  // Saving the record into the database...
  newRecord.save(error => {
    if (error) {
      console.log(error);
      callback(error, true);
    }
    console.log('Record saved correctly!');
    callback(newRecord);
  });
}
// Updating a record...
export function updateRecord(slug, artist, mix, song, year, callback) {
  const updatedRecord = {
    artist,
    mix,
    song,
    slug: slugFn(`${artist}-${song}-${mix}`, { lower: 'on' }),
    year
  };

  Record.update(updatedRecord, (error, affected) => {
    if (error) {
      console.log(error);
      callback(error, true);
    }
    console.log('Record updated correctly!');
    callback(affected);
  });
}

// Removing a record by slug...
export function removeRecord(slug, callback) {
  Record.remove({ slug }, error => {
    if (error) {
      console.log(error);
      callback(error, true);
    }
    console.log('Record removed correctly!');
    callback(true);
  });
}

// Find all record...
export function findAllRecords(callback) {
  Record.find({}, (error, record) => {
    if (error) {
      console.log(error);
      return false;
    }
    console.log(record);
    callback(record);
  });
}

// Find a single record by slug...
export function findBySlug(slug, callback) {
  Record.find({ slug }, (error, record) => {
    if (error) {
      console.log(error);
      return false;
    }
    console.log(record);
    callback(record);
  });
}
