import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  timeout: 30000,
  webServer: {
    command: 'npm run start',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    stdout: 'ignore',
    stderr: 'pipe',
  },
  use: {
    headless: true,
  },
  projects: [
    {
      name: "msedge",
      use: { browserName: "chromium", channel: "msedge" },
    },
  ],
});
