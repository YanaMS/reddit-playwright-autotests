import { test, expect } from '@playwright/test';

test('Page "Where to Buy"', async ({ page }) => {
  
  // Navigate to the main page
  await page.goto('');


  //Search for gaming subReddit
let l1 = page.locator("reddit-search-large");
let tt = await l1.textContent();
console.log(tt);
await l1.click();
await l1.locator("input").fill("gaming");
let t2 = await l1.locator("[class='text-neutral-content']").all();
for (const element of t2)
  console.log(await element.innerText());
  //Open subReddit

  //
console.log("End");  
});