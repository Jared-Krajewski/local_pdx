{
Records:
search bar,
on delete confirmation,
records get moved to "trash can",
trash can can be accessed via admin auth for perm deletion,
filter by preset category: {

    }

{
“id”: number,
"name" : "string",
"category" : {
"main": [“array”],
“sub” : [“array”],
“modified”: {
“localpdx”: "boolean",
“user_name”: “string”,
“date”: “date”
},
},
“creator”: {
“localpdx”: "boolean",
“user_name”: “string”,
“date”: “date”
},
“status”: {
“active” : "boolean"
“modified”: {
“localpdx”: "boolean",
“user_name”: “string”,
“date”: “date”
}
},
“address” :{
“street1” : “string”,
“street2” : “string”,
“zip” : “int”,
“city” : “string”, // write filter by zips
“neighborhood” : “string”,
“state”: “string”,
“modified”: {
“localpdx”: "boolean",
“user_name”: “string”,
“date”: “date”
}
},
“business_details” : {
“hours” : {
“open_time” : ‘int”,
“close_time” : “int”,
“modified”: {
“localpdx”: "boolean",
“user_name”: “string”,
“date”: “date”
}
},
“contact_details” : {
“displayed_to_users”: {
“website”:”string”,
“email”:”string”,
“phone”:”string”,
“socials” : {
“facebook” : “string”,
“instagram” : “string”,
“tiktok” : “string”,
“twitter” : “string”
},
“modified”: {
“localpdx”: "boolean",
“user_name”: “string”,
“date”: “date”
}
},
“displayed_to_admin”{
“owner”: “string”,
“manager”: “string”
“phone”: “string”,
“notes” : “string”,
“modified”: {
“localpdx”: "boolean",
“user_name”: “string”,
“date”: “date”
}
}
},

“amenities” : {
“pets_allowed” : “boolean”,
“wifi” : “boolean”,
“parking” : {
“street” : “boolean”,
“parking_lot” : “boolean”
},
“outdoor_seating” : “boolean”,
“specialties” : “string”,
“modified”: {
“localpdx”: "boolean",
“user_name”: “string”,
“date”: “date”
}
}
‘’description”: {
“them” : “link”
“us” :“link”
“interview”: “link”} // put these in a separate structure
}
“toppick”:{
“active”:”boolean”;
“rank”:”number”,
“date_added”:”date”,
“reason”: “string”,
“legacy”:{
“date_added”:”date”,
“date_removed”:”date”,
“rank”: “number”,
“reason”:”string”
“modified”: {
“localpdx”: "boolean",
“user_name”: “string”,
“date”: “date”
},
“modified”: {
“localpdx”: "boolean",
“user_name”: “string”,
“date”: “date”
}
}
}
