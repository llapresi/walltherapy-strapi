'use strict';

/**
 * Mural.js controller
 *
 * @description: A set of functions called "actions" for managing `Mural`.
 */

module.exports = {

  /**
   * Retrieve mural records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.mural.search(ctx.query);
    } else {
      return strapi.services.mural.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a mural record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.mural.fetch(ctx.params);
  },

  /**
   * Count mural records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.mural.count(ctx.query);
  },

  /**
   * Create a/an mural record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.mural.add(ctx.request.body);
  },

  /**
   * Update a/an mural record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.mural.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an mural record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.mural.remove(ctx.params);
  }
};
