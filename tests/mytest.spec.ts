import { test, expect} from '@playwright/test';

test('Амжилттай нэвтрэх', async({page}) => {
    // saucedemo site g neeh
    await page.goto('https://www.saucedemo.com');

    //username password oruulah
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    //login hiine
    await page.getByRole('button',{name: 'Login'}).click();

    await expect(page.getByText('Products')).toBeVisible();
    //logout hiih
    await page.getByRole('button', {name: 'Open Menu'}).click();
    await page.getByText('Logout').click();

});

test('Амжилтгүй нэвтрэх', async({page}) => {
    // saucedemo site g neeh
    await page.goto('https://www.saucedemo.com');

    //username password oruulah
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('wrong_pass');
    //login hiine
    await page.getByRole('button',{name: 'Login'}).click();
    //aldaani medeelel shalgah
    await expect(page.getByText('Username and password do not match')).toBeVisible();
});

test('Нэвтэрсний дараа бараа сагслах', async({page}) => {
    // saucedemo site g neeh
    await page.goto('https://www.saucedemo.com');

    //username password oruulah
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    //login hiine
    await page.getByRole('button',{name: 'Login'}).click();
    //product page needseng shalgah
    await expect(page.getByText('Products')).toBeVisible();
    //baraag sagsand nemeh
    await page.getByRole('button',{name: 'Add to cart'}).first().click();
    //sagsruu 1 baraa orson eseh iig shalgah
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    await page.getByRole('button', {name: 'Open Menu'}).click();
    await page.getByText('Logout').click();


});