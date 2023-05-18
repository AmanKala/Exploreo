# Exploreo


## Description:
**Exploreo** is platform for all the explorers out there, which gives you an insight about different places in the world. Here the users can create their respective accounts and share the image of the place they have been to along with the location and a short description about the place. The users can always delete or edit the places they have shared if they want. It's just like `LinkedIn for Explorers`.

### Technical Description For Developers :
- **Exploreo** is a `MERN Stack based Web Application`, which comes along with all the `CRUD operations`.
- It contains a frontend of `React.js`, a backend of `Node.js` along with the `Express.js` framework, `MongoDB` is used for the database operations and `Mongoose` is used for `Object Data Modeling (ODM)` in it.
- It consists of an `Authentication System` for registration and login functionalities.
- Errors are shown under the respective fields if the user violetes the rules during registration and login. 
- After a successful login/register the user is redirected to the `Home page`.
- Only after a succesfull login/registration the user will be able to `Create`, `Edit` or `Delete` the place the user has created.
- **The Backend:**
  - It contains three `Models` i.e. for  `Users`, `Places`, and the `http-errors`, which represent their repective schema.
  - A couple of `Middlewares` are provided, namely `check-auth` and `file-upload` to ensure a desired data format.
  - There are two files for `Routes`, one is for the users and the other is for the places.
  - In order to reduce the load on our database we are storing the images locally in the `Uploades` folder.
  - `REST APIs` are used to connect the frontend and the backend.
- **The Fontend:**
  - Different `Hooks` are used to perform the different functionalities.
  - `useState` and `useEffect` hooks is used in several components for state management and data fetching and consuming data from a server API.
  - `useContext` hook is used to eliminate the complexity of auth related data transmission to the various levels in the hierarchy through props.
  - `useRef` has been used to to persist values between renders and to access a DOM element directly.
  - To ensure that our webapp do not get stuck into an infinite loop while using the useEffect logics, we have used `useCallback` hook which returns a memoized callback function.
  - `React-Router-DOM` and `useHistory` hook has been used for navigation with the help of history instances.
  - Coustom validators are used to validate the data on different interfaces whose logic is ther in the `validators.js` file.
  - Three coustom hooks are used i.e. `auth-hook` for the authentication process, `form-hook` for all the form related logic and `http-hook` for all the `http requests`.
  - `Fetch API` has been ussed for the http requests. 
  - Coustom CSS stylings have been used throughout.
  - Separate components have been used for the logics of `Loading Spinner` and `Overlay effect` (for pop-up windows).

##  Screenshots of Different Windows in the WebApp:
1. **Home Page Without User Login:**
![image](https://github.com/AmanKala/Exploreo/assets/73444046/e0ed60a7-4be4-436e-b34b-42d832ef3278)

2. **Home Page With User Login:**
![image](https://github.com/AmanKala/Exploreo/assets/73444046/486bda3c-984b-4ecc-97d6-6be4824c4219)

3. **Places' Listing Page Without User Login:**
![image](https://github.com/AmanKala/Exploreo/assets/73444046/e7edbb2c-1632-4827-b427-d8b543c04c5a)

4. **Places' Listing Page With User Login:**
![image](https://github.com/AmanKala/Exploreo/assets/73444046/bab77822-2f36-4ab4-9415-c9c926f36f0f)

5. **Login Page:**
![image](https://github.com/AmanKala/Exploreo/assets/73444046/798ee85a-3e25-4aff-b5ca-0b48606cc29e)

6. **Register Page:**
![image](https://github.com/AmanKala/Exploreo/assets/73444046/2a3261bb-2297-41c4-bf93-2231d11cfa01)

7. **Edit Screen:**
![image](https://github.com/AmanKala/Exploreo/assets/73444046/692c097f-6960-41c8-a633-9e0bf912986b)

8. **Add Place Screen:**
![image](https://github.com/AmanKala/Exploreo/assets/73444046/d03e4b87-04f8-4ab7-b610-64741e3f33bf)

<hr/>

## Resources Referred:
- **Udemy:**  React, NodeJS, Express & MongoDB - The MERN Fullstack Guide <br/>
  https://www.udemy.com/share/102fVS3@Vb78kl7kl5lORQI2gIq-hMJRn2U_ZelMimB60xdbBn1v1kqrnr_FmbWXhziTgF1ELg==/

- **W3School:** Node.js Tutorial <br/>
  https://www.w3schools.com/nodejs/
  
- **Youtube:** Complete Node.js Playlist <br/>
  https://youtube.com/playlist?list=PLwGdqUZWnOp00IbeN0OtL9dmnasipZ9x8
  
- **React.js Official Documentation:** React Quick Start <br/>
  https://react.dev/learn
  
- **W3School:** MongoDB Tutorial <br/>
  https://www.w3schools.com/mongodb/
  
<hr/>

# ----- Happy Coding...... -----
