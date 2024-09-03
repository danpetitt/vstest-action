import * as core from '@actions/core';
import {Inputs, NoFileOptions} from './constants';
import {UploadInputs} from './upload-inputs';

/**
 * Helper to get all the inputs for the action
 */
export function getInputs(): UploadInputs {
  const name = core.getInput(Inputs.Name);
  const path = 'TestResults';

  const ifNoFilesFound: string = core.getInput(Inputs.IfNoFilesFound);
  const noFileBehavior: NoFileOptions = NoFileOptions[ifNoFilesFound as keyof typeof NoFileOptions];

  if (!noFileBehavior) {
    core.setFailed(
      `Unrecognized ${
        Inputs.IfNoFilesFound
      } input. Provided: ${ifNoFilesFound}. Available options: ${Object.keys(
        NoFileOptions
      )}`
    );
  }

  const inputs = {
    artifactName: name,
    searchPath: path,
    ifNoFilesFound: noFileBehavior
  } as UploadInputs;

  const retentionDaysStr = core.getInput(Inputs.RetentionDays);

  if (retentionDaysStr) {
    inputs.retentionDays = parseInt(retentionDaysStr)
    if (isNaN(inputs.retentionDays)) {
      core.setFailed('Invalid retention-days');
    }
  }

  return inputs;
}
