# GoWish test case

### Install Dependencies:
```
yarn install
```

### How to Run the GoWish test:
Open Cypress
```
yarn open
```

Headed mode
```
yarn test
```

Headless mode:
```
yarn headleass
```

## Test Cases for User Accounts

### Admin Account:
1. Test Case 1 (Positive): Verify that the Admin account can create a new Brand.
2. Test Case 2 (Positive): Ensure that the Admin account can manage (grant permissions) to User Accounts.
3. Test Case 3 (Positive): Confirm that the Admin account has access to manage Product Lists.

### Brand Admin Account:
1. Test Case 1 (Positive): Validate that the Brand Admin account can create a new Product List within their Brand.
2. Test Case 2 (Positive): Ensure that the Brand Admin account can manage the Brand they are connected to.
3. Test Case 3 (Negative): Try to create a new Brand with a Brand Admin account and ensure that it is restricted.

### User Account:
1. Test Case 1 (Positive): Verify that the User account has read-only permissions on all entities.
2. Test Case 2 (Negative): Create a new Product List with a User account and ensure that it is not permitted.
