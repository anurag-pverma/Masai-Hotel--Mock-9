### `Instructions`

- Read entire question carefully for at-least 15 mins, understand it and then code it.
- Don’t jump directly into code.
- Commit your code every hour with proper commit message to your repository (we will monitor every commit)
- Use HTML, CSS and React to solve this question.
- **Use redux for network requests and state management (mandatory)**
- Use only Chakra UI as CSS library (mandatory)

## Problem Statement:

- Build a restaurant app where user can login, see all available restaurants, add items into cart and place order.
- This app should have Navbar with following pages
    - Login Page
    - Restaurant page
- Restaurant page should be private route, only logged in users can visit.

## Login Page:

- User should login using [https://reqres.in/](https://reqres.in/)
- Use Redux to dispatch API request.
- After successful login move user to **Restaurant page.**
- Also display your token in Restaurant page.

## Restaurant Page:

- In this page, you should have Navbar with following pages
    - Restaurant page (default)
    - Cart page
- Also display token in this page which you have fetched during Login with reqres.
- Fetch all restaurants from this API - [https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants](https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants) and populate on UI in form of cards.
- Refer to some online food delivery apps for UI.
- Use postman to check response and check all available params
- You can find documentation here
    - Refer to **`GET`  Get all restaurants with their details**
    
    ```jsx
    https://documenter.getpostman.com/view/9952810/VUjQmjcF
    ```
    
- Note that API has total of 100 restaurants and total of 20 pages, each page has 5 restaurants data.
- Apply pagination such that each page should have only 20 restaurants, and you should have total of 5 pages (you can use limit param)
- Use Postman to check response.
- This page should also have `filter,sort` functionality
    - Filter by type
    - Sort by Rating
    - Sort by Price
- Note that filter and sort functionality should work together.
    - User should be able to sort according to filtered data.
- Note that filter and pagination functionality should work together.
    - Pages should change dynamically according to filtered data.
- Each card should also have `add to cart` button
    - On clicking, add that particular item into Cart page.
    - Use Redux to manage state

## Cart Page:

- Display all products which are added to cart in form of table.
- Each item should also have an option to increase/decrease quantity.
- Price should change dynamically according to quantity.
- User should be able to delete items from Cart page as well.
- Also display total price of items including 18% GST.
- On clicking on Place order, user should confirm his order by entering OTP.
- Create an OTP component in form of Modal, which will have a submit button too.
- When user starts typing any number, user should be able to type in the first box and it should move the user to the next box.
- You can use Chakra UI OTP component for this.

![pin.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/130cec5d-1e14-4708-8b47-a5f829db310e/pin.gif)

- Take dummy OTP as 1234, when user types in 1234 and after clicking on submit, show an alert “Order placed successfully“.
- If user types wrong OTP, alert as wrong OTP.
- After entering successful OTP, generate a bill which includes all items and total price in form of modal.

## Note:

- Maintain flow of app as mentioned.
- Error messages should be shown
- Use loaders.
- Good designs will fetch bonus marks.
- Submitting local host links for mock server will lead to disqualification.

## Submission

- Please submit deployed link and Github link of code.
- **Push your code into `masai-repo`, don’t submit personal repo links (submitting personal repo links will lead to disqualification)**
- Please double check if deployed version works or not (run deployed version on your laptop and then submit it).
- Any issues in deployed link, will be considered null and void.
- Please verify your submissions are correct.
- Make sure you follow all instructions carefully.
- Submit before deadline.

### Rubrics / Criteria to be judged upon

- HTML, CSS,JSON server, React, **Redux**
- Filtering, sorting.
- Usage of Chakra UI (Mandatory).
- Code cleanliness.
- Component structure and ****Good Git Hygiene.****

| Rubric | Score |
| --- | --- |
| Was able to implement Private route for Restaurant page | 0.5 |
| Was able to login using reqres.in and able to display token | 1 |
| Was able to fetch all restaurants without pagination | 0.5 |
| Was able to fetch all restaurants with pagination and 20 restaurant’s per page | 1.5 |
| Was able to filter by type | 0.5 |
| Was able to implement filter and sort by price simultaneously | 1 |
| Was able to implement filter and sort by rating simultaneously | 1 |
| Was able to add items to cart and display items in cart | 1 |
| Was able to increase/decrease quantity of items and also price should change dynamically according to quantity. | 0.5 |
| Was able to implement PIN component on clicking on place order and able to validate otp | 0.5 |
| Was able to generate bill with all items and total price | 0.5 |
| Tick this if UI was too good | 0.5 |
| Tick this if student has less than 6 commits | -1 |
| Tick this if overall flow is good with clean code and good folder structure | 1 |