export default {
    default: {
      require: ['./step_definitions/*.js'], // Path to step definitions
      format: ['html:reports/cucumber-report.html'], // Optional: HTML report
      paths: ['./features/*.feature'], // Path to feature files
    },
}
