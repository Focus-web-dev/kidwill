'use strict';

/**
 * constructor router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::constructor.constructor');
