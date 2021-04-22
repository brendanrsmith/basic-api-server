'use strict';

class ClothesModel {
  constructor() {
    // init id# and in-mem database
    this.id = 0;
    this.db = [];
  }

  create(obj) {
    // save the new object to 'db' here
    let record = {
      id: ++this.id,
      record: obj
    }
    this.db.push(record);
    return record;
  }

  read(id) {
    // read object from 'db' given its id
    if(id) {
      return this.db.find(record => record.id === id); // TODO review this syntax...
    } else {
      return this.db;
    }
  }

  update(id, obj) {
    // update an item in the 'db' with a whole new item
    if(id) {
      let recordToUpdate = this.db.find(record => record.id === id);
      let idx = this.db.indexOf(recordToUpdate);
      
      let newRecord = {
        id: recordToUpdate.id,
        record: obj
      }
      
      this.db[idx] = newRecord;
      return (newRecord);
    }
  }
  delete(id) {
    // given an id, remove that item from the 'db'
    if(id) {
      let record = this.db.find(record => record.id === id);
      this.db.splice(id - 1, 1);
      return(record);
    }
  }
}

module.exports = ClothesModel;