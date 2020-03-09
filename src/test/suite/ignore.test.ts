import * as assert from 'assert';
import { workspace } from 'vscode';
import { ExtensionTest } from './extension-test';

const workspaceFolder = workspace.workspaceFolders![0].uri;

suite('ignore', function() {
  test('it does not format file', async () => {
    const { result, source } = await ExtensionTest.format('fileToIgnore.js', workspaceFolder);
    assert.strictEqual(result, source);
  });

  test('it does not format subfolder/*', async () => {
    const { result, source } = await ExtensionTest.format('ignore-me-2/index.js', workspaceFolder);
    assert.strictEqual(result, source);
  });

  test('it does not format sub-subfolder', async () => {
    const { result, source } = await ExtensionTest.format('ignore-me/subdir/index.js', workspaceFolder);
    assert.strictEqual(result, source);
  });
});
