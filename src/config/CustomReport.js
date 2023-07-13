import { Stats } from '@skilbourn/playwright-report-summary'

function all(stats) {
  return `\`🧪\` All: ${stats.testsInSuite}`;
}

function passed(stats) {
  return `\`✅\` Passed: ${stats.expectedResults}`;
}

function failed(stats) {
  console.log('failures', stats.unexpectedResults);
  return `\`❌\` Failed: ${stats.unexpectedResults}`;
}

function flaky(stats) {
  return `\`🔆\` Flaky: ${stats.flakyTests}`;
}

function skipped(stats) {
  return `\`⏭️\` Skipped: ${stats.testMarkedSkipped}`;
}

function duration(stats) {
  return `\`⏳\` Duration: ${roundToOneDecimalPlace(stats.durationSuite/1000/60)}m`;
}

function roundToOneDecimalPlace(n) {
  return Math.round(n * 10) / 10;
}

function dashes(n) {
  return '-'.repeat(n+2);
}

function customReport(stats) {
  return `| ${all(stats)} | ${passed(stats)} | ${failed(stats)} | ${flaky(stats)} | ${skipped(stats)} | ${duration(stats)} |\n|${dashes(all(stats).length)}|${dashes(passed(stats).length)}|${dashes(failed(stats).length)}|${dashes(flaky(stats).length)}|${dashes(skipped(stats).length)}|${dashes(duration(stats).length)}|`
}

export default customReport
