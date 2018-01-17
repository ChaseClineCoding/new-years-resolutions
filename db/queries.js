const db = require('./knex')

module.exports = {
  listGoals: function() {
    return db('daily_goals').select()
  },
  addGoal: function(goal) {
    return db('daily_goals').insert(goal)
  }
}
