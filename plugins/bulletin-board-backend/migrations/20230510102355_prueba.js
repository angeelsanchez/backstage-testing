/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }

 */

exports.up = function (knex) {
  return knex.schema.table('bulletins', function (table) {
    table.text('bulletin_comment').comment('Comment to learn');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = function (knex) {
  return knex.schema.table('bulletins', function (table) {
    table.dropColumn('bulletin_comment');
  });
};
