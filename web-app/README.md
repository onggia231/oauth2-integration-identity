# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Các bước cài để lấy client id
1. Truy cập: https://console.cloud.google.com/welcome?_ga=2.131647823.1729457257.1722487233-718716992.1722487127&project=booming-premise-337208 (Nơi tạo project làm việc với Google)
2. Tạo 1 project có tên Devteria và vào mục APIs & Services
3. Chọn Credentials ( Đây là nơi làm việc với OAuth 2.0)
4. Chọn CREATE CREDENTIALS và chọn tiếp OAuth client ID ( Tạo client Id)
5. Chọn Configure consent screen -> Tích
   External -> Creat
6. Điền mục App name, User support email, Developer contact information -> SAVE AND CONTINUE liên tục
7. OAuth consent screen -> PUBLISH APP
8. Quay lại mục Credentials ( có thể tạo được 1 Credentials mới )
9. Credentials -> CREATE CREDENTIALS -> OAuth client ID
   -> Application type (chọn Web application), Name (Devteria web-app)
   -> Authorized JavaScript origins (http://localhost:3000) # Điền url ban đầu và có thể thêm nhiều url ở mục này
   -> Authorized redirect URIs (http://localhost:3000/authenticate) # Nó sẽ redirect khi login được, cũng có thể khai nhiều url mục này
10. Chọn Create để tạo, n sẽ sinh ra Dialog OAuth client created có thông tin Client ID, Client secret ( 2 thông tin này quan trọng không để public)

