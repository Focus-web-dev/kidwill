'use strict';

/**
 * constructor service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::constructor.constructor');
