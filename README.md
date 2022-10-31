# Help! 

[Help!](https://help-y.herokuapp.com/) is a clone inspired by Yelp, focusing on viewing and creating restaurants and leaving reviews and ratings. 

## Wiki Links
- [Database Schema](https://github.com/Fpalacios153/Yelp-clone-capstone/wiki/Database-Schema)
- [API Documentation](https://github.com/Fpalacios153/Yelp-clone-capstone/wiki/API-Documentation)
- [Feature List](https://github.com/Fpalacios153/Yelp-clone-capstone/wiki/Feature-List)
- [User Stories](https://github.com/Fpalacios153/Yelp-clone-capstone/wiki/User-Stories)
- [Wireframes](https://github.com/Fpalacios153/Yelp-clone-capstone/wiki/Wireframes)

## Technologies 
### Frontend
- [![React][React.js]][React-url]
- Redux
- Javascript
- CSS
- HTML

### Backend
- Python
- Flask

### Hosting
- Heroku

## Website Walkthrough

### Splash Page
- From the splash page a user can either login or sign up by clicking on the buttons in the left navigation bar 
- The footer contains infomation about Help! as well as about links.
![Screen Shot 2022-10-07 at 12 43 05 PM](https://user-images.githubusercontent.com/101391912/194641319-af2949ee-ed14-4f88-a35d-5aa2313cd726.png)

## Login Page
- If you are a returning user, you can enter your credentials and log in to acess the full website
- Alternatively, if you do not have an account, you can log in as a Demo user by pressing the 'Demo User' button. 

![Screen Shot 2022-10-07 at 12 44 26 PM](https://user-images.githubusercontent.com/101391912/194641501-1c5baf02-bc10-431f-a7f0-b727d5d30baa.png)
## Sign Up Page
- To become a user, you can simply fill out the sign up form with valid inputs and clicking "Sign Up" button. 

![Screen Shot 2022-10-07 at 12 51 43 PM](https://user-images.githubusercontent.com/101391912/194642531-6e9a13f4-0e43-493b-9c2a-64a9b4127e6b.png)

## Landing Page
- After log in or signing up, the user is redirected to the landing page. The landing page shows all the businesses available to the user. 
- The User can click on a business to get more details about the business.
- The can Create a New Business by clicking on the "Create New Business" button on the top right. 
- The can press their user profile on the right side to reveal a dropdown menu to log out. 

![Screen Shot 2022-10-07 at 1 57 45 PM](https://user-images.githubusercontent.com/101391912/194651342-2e2071c0-0d49-4a0b-877c-1ff0b5a6b5c6.png)


## Business Feature

### Business Details Page
- After clicking on a business, the user is directed to the the business details page. They can see a more indepth look at the business, its location, contact information and its description. 
- User can also see all the reviews left for that business on this page.
- If they are not the owner of the business, they can leave a write by clicking the "Write a review" button. 
![Screen Shot 2022-10-07 at 1 58 47 PM](https://user-images.githubusercontent.com/101391912/194651489-16e1ef0d-aed2-4d17-a8ef-c230abccbade.png)

![Screen Shot 2022-10-07 at 1 00 09 PM](https://user-images.githubusercontent.com/101391912/194643683-039c7a1a-7dcc-41c6-a12c-d916c2ee2187.png)

- If the user is the owner of the business, they will be able to see the Update and Delete business button.

- When the "Delete Business" button is pressed, the business will be deleted 

![Screen Shot 2022-10-07 at 1 13 52 PM](https://user-images.githubusercontent.com/101391912/194645636-853f4851-d064-4ce2-8ec0-2f6749ae97ce.png)

### Create Business Modal
- When the "Create New Business" button, on the top right corner is pressed,
  a modal with a form to create a new business pops up 
- A user can then fill out the information and if the inputs are all valid, a new business is created, and the user is redirected to that new business.
- If the cancel button is pressed then the modal will close.

![Screen Shot 2022-10-07 at 1 59 20 PM](https://user-images.githubusercontent.com/101391912/194651551-547aa4c4-73d1-420a-93f7-91c3ffa83e82.png)

### Update Business Modal
- When the "Update Business" button is pressed, a modal with the busineses input fields will pop up and allow edited to the business to be made. 
- If the cancel button is pressed then the modal will closes.

![Screen Shot 2022-10-07 at 1 39 16 PM](https://user-images.githubusercontent.com/101391912/194648997-fe2ca41a-0293-493b-910c-1eb8f5eb6c27.png)

## Review Feature

### Create a Review
- When on a business's detail page, and the business does not belong to the user, the user can click on the ""Write a review" to open a modal with a form to submit a review. 
- The user can select a rating by hovering over the boxed stars and clicking to make a selection. 
- The use can then type their review about the business in the text area and should be able to submit it as long it is less than 1000 characters
- If the user decides they do not want to submit a review, they can press the cancel button.
![Screen Shot 2022-10-07 at 2 18 32 PM](https://user-images.githubusercontent.com/101391912/194654125-128d79a0-8248-4a73-b27d-37f4912fa2e9.png)
![Screen Shot 2022-10-07 at 2 35 37 PM](https://user-images.githubusercontent.com/101391912/194661336-29cfa59f-fdb2-4d20-9d38-5f86df879165.png)



### Update a Review
- If the user wants to update a review they previously posted, they can click on the "pencil" edit button found on the review. 
![Screen Shot 2022-10-07 at 2 44 52 PM](https://user-images.githubusercontent.com/101391912/194664533-3543cbb3-279d-4305-a97f-8324c351113c.png)
- After the user presses the edit button, a modal with a form to update the review will pop up, prepopulated with the current information. 
- The user can make changes to either the rating or reivew or both. After submitting the form the modal will close and the review/rating will be updated.
- If the user wishes to cancel the edit they can press the cancel button to close the modal. 
![Screen Shot 2022-10-07 at 3 00 14 PM](https://user-images.githubusercontent.com/101391912/194668699-28b65b31-326d-4c4e-813e-d2e8b3c5aeb6.png)

## Delete a Review
- If the user wants to delete a review they previously posted, they can click on the "trash can" button 
![Screen Shot 2022-10-07 at 2 44 52 PM](https://user-images.githubusercontent.com/101391912/194664533-3543cbb3-279d-4305-a97f-8324c351113c.png)

## Futuure Implementaion Goals
- I plan to add a favorites feature that will let you favorite businesses, and have them show on  users profile page in a favorites tab.
- I also plan to add a friends feature that will allow you to add friends and have their recent activitites on the website appear on the users friends tab.
- I aslo plan to add a search feature to search througth the businesses by name. This feature will also let you write a review by searching for the business. 
- I also plan to add a maps feature that will show where the businesses are on a map displayed on the side of the main logged in page. 

## Local Installation

To run this application locally, you will need Python and NPM. This root folder contains a backend (app) and frontend (react-app) directory. 

### Step 1: Download
Clone the project repository 
```shell
git@github.com:Fpalacios153/Yelp-clone-capstone.git
```

### Step 2: Backend Setup
-  Inside of the root directory, run the following command in the terminal to set up the necessary Python dependencies for running the backend server and database. 
   ```shell
   pipenv install -r requirements.txt
   ```
-  Create a .env file in the root of the project with the following variables: 
   ```shell
   SECRET_KEY=<<SECRET_KEY>>
   DATABASE_URL=sqlite:///dev.db
   ```
- Get into your pipenv, migrate your database, seed your database, and run your Flask app

   ```shell
   pipenv shell
   ```
   ```shell
   flask db upgrade
   ```
   ```shell
   flask seed all
   ```
   ```shell
   flask run
   ```

### Step 3: Frontend Setup
- Open another terminal 
- Navigate to the /react-app directory, run the following command to set up the necessary Node.js dependencies and then start the server.
```shell
npm install
npm start
```

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
