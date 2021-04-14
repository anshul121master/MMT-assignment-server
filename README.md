This application contains :
- adminapp => through which admin can see all bookings.
- userapp => through which users can see available properties.
- server => dummy server to host all required data and api's.

How to execute?

First create one directory and clone all sub apps into that. 

Then

-Step 1:

- Move to server directory => cd server
- Install node packages => npm install
- Start the Server => npm start

Step 2:

- Move to userapp directory => cd userapp
- Install node packages => npm install
- Start userapp => npm start

Step 3:

- Make some dummy bookings by clicking on Request To Book => Make Payment.

Step 4:

- Move to adminapp directory => cd adminapp
- Install node packages => npm install
- Refresh the adminapp to see all booking details.

NOTE: All api's are dummy and there is no database involved. The data is maintained in json file inside :
server => data