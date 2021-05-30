"use strict";
const slugify = require("slugify");

module.exports = {
  lifecycles: {
    beforeCreate: async function (data) {
      if (data.name) {
        data.slug = slugify(data.name, { lower: true });
      }
    },
    beforeUpdate: async function (data) {
      if (data.name) {
        data.slug = slugify(data.name, { lower: true });
      }
    },
  },
};
