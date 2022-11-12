'use strict';

/**
 * global-header router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::global-header.global-header');
