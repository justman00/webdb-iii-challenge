exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("cohorts")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cohorts").insert([
        { name: "test 1" },
        { name: "test 2" },
        { name: "test 3" }
      ]);
    });
};
