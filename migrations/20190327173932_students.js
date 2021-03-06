exports.up = function(knex, Promise) {
  return knex.schema.createTable("students", tbl => {
    tbl.increments();

    tbl.string("name").notNullable();
    tbl
      .integer("cohort_id")
      .unsigned()
      .references()
      .inTable("cohorts")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    tbl.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("students");
};
