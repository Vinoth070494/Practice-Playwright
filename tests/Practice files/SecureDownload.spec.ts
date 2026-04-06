import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

test('Secure download with auth', async ({ browser }) => {

  const context = await browser.newContext({
    httpCredentials: {
      username: 'practice',
      password: 'SuperSecretPassword!'
    },
    acceptDownloads: true
  });

  const page = await context.newPage();
  await page.goto('https://practice.expandtesting.com/download-secure');

  // ✅ Correct download handling
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('link', { name: 'Download' }).first().click()
  ]);

  // ✅ Ensure downloads folder exists
  const downloadDir = path.join(process.cwd(), 'downloads');
  if (!fs.existsSync(downloadDir)) {
    fs.mkdirSync(downloadDir);
  }

  const filePath = path.join(downloadDir, await download.suggestedFilename());
  await download.saveAs(filePath);

  expect(fs.existsSync(filePath)).toBeTruthy();
});