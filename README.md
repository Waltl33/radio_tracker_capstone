# Radio Tracker

This app was inspired and created out of a need a to radio technician keep track of radios more accurately, and also help his job of tracking become more efficient.
In this app the user will be ablt to 
* Signup with a profile
* View all the radios
* Edit the Deputy's  location
* Delete the Deputy
* Update the Deputy's location

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

When the user first goes get logged in they will be able to see a list of all radios, and be able to see if the radio is rented or not rented.  You will be able to see which Deputy has rented the radio, and be able to create a radio and also create a Deputy.  If the Deputy is attached to a radio you will be able to edit the work location of the Deputy and the attached radio will follow.  Also there are 2 locations, jail and courts, which will only show the deputies assigned to those locations.  There also functionality to delete the Deputy in which his rented radio will be deleted with him.

### ```Login.js```

The Login component includes a form to enter the user's username and password.  When the form is submitted, the username and password are compared to the users localhost:3000/users database.  If a match is found, the user is redirected to the homepage.

### ```Signup.js```

The Signup component includes a form with all of the signup fields, including name,  email, password.  When the form is submitted,it is checked if all the validations are passed and then POST to localhost:3000/users database.  If the validations aren't passed, an alert would let the user know that it isn't a valid SignUp.  Once a successful signup form is submitted, the user is redirected to HomeList.js.

### '```RadioPage.js```
This component is the top level component of the page


### ```RadioListItems.js```

Html and code for the radios

### ```RadioList.js```

The page that displays the radio data to the page.


### ```RadioForm.js```
The form to create a radio


### ```DeputyListItem.js```

Html and code for the deputies


### ```DeputyList.js```

Render the Deputy informatin to the page 


### ```DeputyForm.js```

code to create a new Deputy

### ```EditDeputyForm.js```

Form created to edit the location of the Deputy 

### ```CourtListItems.js```

Html and code to display only deputies and radios with a courts location 

### ```CourtsList.js```

Displays the courts list to the page 

### ```JailListItems.js```

Html and code to display only deputies and radios with the jails location 

### ```NavBar.js```

This contains routes to the different pages of the website. 