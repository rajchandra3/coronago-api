# Go Corona App Backend


## API Resources
- [crowd sourced database](https://spreadsheets.google.com/feeds/cells/1UIV4RkOx8KJK2zQYig0klH5_f8FCOdwIWV8YF2VyF8I/2/public/values?alt=json) - updates every 5 minutes
- App Url - [corona-go.info](https://corona-go.info)  
- Frontend Github Link - [rajchandra3/fight-corona](https://github.com/rajchandra3/fight-corona)  

## Components
- Indian Stats API
- News API
- Twitter Bot

## Contributors
- [@ravithesun02](https://github.com/ravithesun02)
    - News API

- [@Dev-Aman7](https://github.com/Dev-Aman7)
    - Twitter Bot

## How to?

- Install dependencies  
    >`npm i`

- Run app
    - Make a `.env` file from `.env.sample` in root folder  
        >`touch .env`

    - Install dependencies  
        >`npm i`
    - Run node app  
        >`node ./bin/www` or `npm start`
    - The app runs on port `3000` by default, you can change it in `.env` file by changing the value of `PORT`
    - The app will be accessible in your browser `http://localhost:<port>`, you will get the following response
        ```
        {  
		    code: 0,  
		    message: "Welcome to corona-go app!"  
	    }
        ```

## Endpoints

### Indian Stats API

### News API

### Twitter Bot

