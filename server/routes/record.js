const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// This section will help you get a list of all the records.
recordRoutes.route("/record").get(function (req, res) {
  let db_connect = dbo.getDb("local_pdx");
  db_connect
    .collection("business_list")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single record by id
recordRoutes.route("/record/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect
    .collection("business_list")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you create a new record.
recordRoutes.route("/record/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let business = {
    name: req.body.name,
    address: req.body.address,
    category: req.body.category,
    business_details: req.body.business_details,
    //   “address” :{
    //     “street1” : “string”,
    //     “street2” : “string”,
    //     “zip” : “int”,
    //     “city” : “string”,   // write filter by zips
    //     “neighborhood” : “string”,
    //     “state”: “string”,
    //     “modified”: {
    //     “localpdx”: "boolean",
    //     “user_name”: “string”,
    //     “date”: “date”
    //   }
    // {
    //   “internal_id”: number,
    //   "name" : "string",
    //   "category" : {
    //     "main": [“array”],
    //     “sub” : [“array”],
    //   “modified”: {
    //     “localpdx”: "boolean",
    //     “user_name”: “string”,
    //     “date”: “date”
    //   },
    //   },
    //   “creator”: {
    //     “localpdx”: "boolean",
    //   “user_name”: “string”,
    //   “date”: “date”
    //   },
    //   “status”: {
    //     “active” : "boolean"
    //     “modified”: {
    //     “localpdx”: "boolean",
    //     “user_name”: “string”,
    //     “date”: “date”
    //   }
    //   },

    //   },
    //   “business_details” : {
    //   “hours”	 : {
    //   “open_time” : ‘int”,
    //     “close_time” : “int”,
    //   “modified”: {
    //     “localpdx”: "boolean",
    //     “user_name”: “string”,
    //     “date”: “date”
    //   }
    //   },
    //   “contact_details” : {
    //     “displayed_to_users”: {
    //   “website”:”string”,
    //   “email”:”string”,
    //       “phone”:”string”,
    //       “socials” : {
    //         “facebook” : “string”,
    //         “instagram” : “string”,
    //         “tiktok” : “string”,
    //         “twitter” : “string”
    //   },
    //   “modified”: {
    //       “localpdx”: "boolean",
    //       “user_name”: “string”,
    //       “date”: “date”
    //   }
    //   },
    //   “displayed_to_admin”{
    //     “owner”: “string”,
    //     “manager”: “string”
    //     “phone”: “string”,
    //     “notes” : “string”,
    //     “modified”: {
    //       “localpdx”: "boolean",
    //       “user_name”: “string”,
    //       “date”: “date”
    //   }
    //   }
    //   },

    //   “amenities” : {
    //   “pets_allowed” : “boolean”,
    //   “wifi” : “boolean”,
    //   “parking” : {
    //      “street” : “boolean”,
    //     “parking_lot” : “boolean”
    //   },
    //   “outdoor_seating” : “boolean”,
    //   “specialties” : “string”,
    //   “modified”: {
    //     “localpdx”: "boolean",
    //     “user_name”: “string”,
    //     “date”: “date”
    //   }
    //   }
    //   ‘’description”: {
    //    “them” : “link”
    //   “us” :“link”
    //   “interview”: “link”} // put these in a separate structure
    //   }
    //   “toppick”:{
    //     “active”:”boolean”;
    //     “rank”:”number”,
    //     “date_added”:”date”,
    //     “reason”: “string”,
    //     “legacy”:{
    //   “date_added”:”date”,
    //   “date_removed”:”date”,
    //   “rank”: “number”,
    //   “reason”:”string”
    //   “modified”: {
    //     “localpdx”: "boolean",
    //     “user_name”: “string”,
    //     “date”: “date”
    //   }
    //   },
    //   “modified”: {
    //     “localpdx”: "boolean",
    //     “user_name”: “string”,
    //     “date”: “date”
    //   }
    //   }
  };
  db_connect
    .collection("business_list")
    .insertOne(business, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
});

// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      name: req.body.name,
      address: req.body.address,
      category: req.body.category,
    },
  };
  db_connect
    .collection("business_list")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a record
recordRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect
    .collection("business_list")
    .deleteOne(myquery, function (err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
      response.json(obj);
    });
});

module.exports = recordRoutes;
