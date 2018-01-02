
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('daily_goals').del()
    .then(function () {
      // Inserts seed entries
      return knex('daily_goals').insert([
        {
          goal: 'Go to the gym'
        },
        {
          goal: 'Read for 30 minutes'
        },
        {
          goal: 'Do a codewars kata'
        },
        {
          goal: 'Submit at least 1 job application'
        }
      ]);
    });
};
