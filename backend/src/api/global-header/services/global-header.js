'use strict';

/**
 * global-header service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::global-header.global-header');
