```javascript
//Correct usage of $inc operator with error handling
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{field:value}}, {upsert:true});
//or to handle non-existence gracefully
db.collection('myCollection').findOneAndUpdate({"_id":ObjectId("someId")},{$inc:{field:value}},{upsert:true,returnOriginal:false})
```