# Radio Tracker

This app was inspired and created out of a need a to radio technician keep track of radios more accurately, and also help his job of tracking become more efficient.
In this app the user will be ablt to 
* Signup with a profile
* View all the radios
* Rent radio's to Deputies
* Edit the Deputies and radio's location
* Delete the Deputies
* Edit their reviews

## Technologies

### Frontend

Using React, Radio Tracker is a single-page application and App.js as the main parent component




### Backend

The backend was created with Rails.   




## Get Started running the app

To use our app, first go into the frontend client.  Then, run ```npm install && npm start```.

```
npm install
npm start
```

To set up the backend, run the following commands on another terminal
```
bundle install
```

```
rails server
```

## How Radio Tracker works

When the user first goes get logged in they will be able to see a list of all radios.  From that list the user will be able to assign a radio to a Deputy. Once that radio is assigned to the Deputy it will be attached to the Deputy.  If the Deputies starting location is ever change the user will be able to edit the Deputies status change to the new location which will transfer the Deputy and radio.  Upon the a Deputy returning the radio the Deputy will be removed the system and the radio will be removed from the assigned radio location.

### ```Login.js```

The Login component includes a form to enter the user's username and password.  When the form is submitted, the username and password are compared to the users localhost:3000/users database.  If a match is found, the user is redirected to the homepage.

### ```Signup.js```

The Signup component includes a form with all of the signup fields, including name, username, email, password.  When the form is submitted,it is checked if all the validations are passed and then POST to localhost:3000/users database.  If the validations aren't passed, an alert would let the user know that it isn't a valid SignUp.  Once a successful signup form is submitted, the user is redirected to HomeList.js.

### ```RadioList.js```

This component will serve as the main inventory list where a user can see all of the radios.
### ```SingleRadio.js```

This will let the user pull up a single radio and its details.
### ```RentedRadio.js```

This component will show a Deputies and the radios that they rented


### ```Locations.js```

User will be able to pull up a list of rented radio's by location


### ```SingleRentedRadios.js```

User will be able to pull up a single rented radio



### ```NavBar.js```

This contains routes to the different pages of the website. 