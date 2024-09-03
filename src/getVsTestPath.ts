import * as core from '@actions/core';
import * as path from 'path';

export function getVsTestPath(): string {
  const vstestLocationMethod = core.getInput('vstestLocationMethod');
  if(vstestLocationMethod && vstestLocationMethod.toUpperCase() === "LOCATION") {
    return `"${core.getInput('vstestLocation')}"`;
  }

  const vsTestVersion = core.getInput('vsTestVersion');
  if(vsTestVersion && vsTestVersion === "14.0") {
    return path.join(__dirname, 'win-x64/VsTest/v140/vstest.console.exe');
  }

  if(vsTestVersion && vsTestVersion === "15.0") {
    return path.join(__dirname, 'win-x64/VsTest/v150/Common7/IDE/Extensions/TestPlatform/vstest.console.exe');
  }

  if(vsTestVersion && vsTestVersion === "16.0") {
    return path.join(__dirname, 'win-x64/VsTest/v160/Common7/IDE/Extensions/TestPlatform/vstest.console.exe');
  }

  // Assume its in the path
  return 'vstest.console.exe';
}
