module.exports = {
    dataSchema: {
    "type": "object",
    "properties": {
      "firstName": {
        "type": "string",
        "faker": "name.firstName"
      },
      "lastName": {
        "type": "string",
        "faker": "name.lastName"
      }
    },
    required: ["firstName", "lastName"]
  // "properties": {
  //   "users": {
  //     "type": "array",
  //     "minItems": 3,
  //     "maxItems": 5,
  //     "items": {
  //       "type": "object",
  //       "properties": {
  //         "Id": {
  //           "type": "integer",
  //           "unique": true,
  //           "minimum": 1
  //         },
  //         "Name": {
  //           "type": "string",
  //           "faker": "name.firstName"
  //         },
  //         "FullName": {
  //           "type": "string"
  //         },
  //         "Password": {
  //           "type": "string",
  //           "faker": "name.lastName"
  //         }
  //       },
  //       required: ["Id", "Name", "FullName", "Password"]
  //     }
  //   }
  // },
  // required: ["users"]
  }
};
