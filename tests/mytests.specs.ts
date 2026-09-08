import { test, expect} from '@playwright/test';

test('Амжилттай нэвтрэх', async({page}) => {
    // saucedemo site g neeh
    await page.goto('https://www.saucedemo.com');

    //username password oruulah
    await page.getByPlaceholder('Username').fill('standart_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    //login hiine
    await page.getByRole('button',{name: 'Login'}).click();

    await expect(page.getByText('Products')).toBeVisible();
    //logout hiih
    await page.getByRole('button', {name: 'Open Menu'}).click();
    await page.getByText('Logout').click();

});

