'use strict';

/**
 * constructor controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::constructor.constructor');
