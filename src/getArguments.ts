import * as core from '@actions/core';

export function getArguments(): string {
  const args: string[] = [];

  const testFiltercriteria = core.getInput('testFiltercriteria');
  if(testFiltercriteria) {
    args.push(`/TestCaseFilter:${testFiltercriteria}`);
  }

  const runSettingsFile = core.getInput('runSettingsFile');
  if(runSettingsFile) {
    args.push(`/Settings:${runSettingsFile}`);
  }

  const pathToCustomTestAdapters = core.getInput('pathToCustomTestAdapters');
  if(pathToCustomTestAdapters) {
    args.push(`/TestAdapterPath:${pathToCustomTestAdapters}`);
  }

  const runInParallel = core.getInput('runInParallel');
  if(runInParallel && runInParallel.toUpperCase() === "TRUE") {
    args.push(`/Parallel`);
  }

  const runTestsInIsolation = core.getInput('runTestsInIsolation');
  if(runTestsInIsolation && runTestsInIsolation.toUpperCase() === "TRUE") {
    args.push(`/InIsolation`);
  }

  const codeCoverageEnabled = core.getInput('codeCoverageEnabled');
  if(codeCoverageEnabled && codeCoverageEnabled.toUpperCase() === "TRUE") {
    args.push(`/EnableCodeCoverage`);
  }

  const platform = core.getInput('platform');
  if(platform && (platform === "x86" || platform === "x64" || platform === "ARM")) {
    args.push(`/Platform:${platform}`);
  }

  const otherConsoleOptions = core.getInput('otherConsoleOptions');
  if(otherConsoleOptions) {
    args.push(`${otherConsoleOptions}`);
  }

  return args.join(' ');
}

