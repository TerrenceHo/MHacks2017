# NutritionIQ
NutritionIQ is a machine-learning based receipt scanner with nutritional information about food items in the receipt. It was made in a team of 4 with Terrence Ho, David Lu, Rut Patel, and Ryan Kim for MHacks X (2017).

Built using the Google Cloud Platform (Storage, Machine-learning, Cloud Vision), Expo.io (React-Native), Node.js, Heroku, and NutritionIX.

![Alt text](./iqimg.jpg?raw=true "NutritionIQ")

## Inspiration
We wanted to utilize machine learning in order to get nutritional information from a grocery receipt. We needed an easy way to get relevant nutritional facts about our grocery shopping trips, without having to look everything up individually.
## What it does
NutritionIQ uses Google Cloud Platform tools to get smart-data about items on a grocery receipt. No matter how long the grocery list, precise nutritional details are displayed for every food item in order to help us make smart, conscious decisions about our daily nutrition.
## How I built it
To build it, we used Expo.io (React-Native) to offer cross-platform mobile support. We used the Google Cloud Platform tools for our machine learning and part of our backend, and used Heroku with Node.js for the rest of our backend. NutritionIX API was used for up-to-date nutritional info.
## Challenges I ran into
Some challenges we faced included:
1. Grocery receipts were not standardized amoung any grocery stores so we needed a way to parse the receipts in a way so that results were still consistent amoung different sellers. Also, a lot of items are abbreviated in grocery receipts so searching up the exact item was hard.
2. Not everyone on the team was familiar with the stack we used, so it was difficult learning a new language/framework while trying to work with it to use the APIs.
3. The data we received from the API's we used would not always be consistent due to the nature of our product. We had to come up with algorithms and implementations that were robust enough to handle errors due to inconsistencies from certain API calls.
## Accomplishments that I'm proud of
We are proud that we integrated each part that we worked on into one big, working product. We worked with technologies that were not all familiar to us but we read through enough docs and examples to learn what we needed to succeed.
## What I learned
Since we all had different experiences, we specialized in certain tasks, depending on our background. Even so, we learned a lot of things from using the APIs, integrating each component of our project into one working product, and working with new technologies.
## What's next for NutritionIQ
We would love to add support for recipe recommendations based on the ingredients that were parsed from the receipt. Also, we could extend our app to be a health-tracker with users' food and nutritional data stored on the server. We could also recommend what foods to buy in order to meet our daily nutritional requirements.
