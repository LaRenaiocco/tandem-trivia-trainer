# <img src="https://github.com/LaRenaiocco/tandem-trivia-trainer/blob/master/static/images/banner.png" alt="Tandem Trivia Trainer">

## About the Developer
Before attending Hackbright Academy, LaRena spent most of her adult life clowning around in the circus (yes, you read that right).  She studied Theatre in college and then honed her circus and clowning skills at the San Francisco Clown Conservatory.  LaRena spent 8 years touring full time in the US, Mexico and Japan with Ringling Bros. and Barnum & Bailey as well as Kinoshita Circus. Despite her passion for travel, being on the road 52 weeks a year can wear out even the most seasoned traveller.  Looking to live in one place and ready for the next step in her career, coupled with massive amounts of time in the current pandemic, LaRena discovered a love for software development and has enjoyed putting her previously unused math and logic skills to good use and learning to code.

## Contents
* [Tech Stack](#tech-stack)
* [Features](#features)
* [Future Features](#future)
* [Installation](#installation)
* [License](#license)

## <a name="tech-stack"></a>Technologies
* Python
* Flask
* Jinja2
* JavaScript
* jQuery
* HTML
* CSS
* Bootstrap


## <a name="features"></a>Features
As the user you will get a randomly generated set of 10 questions to test your general trivia knowledge.  When ready to start, simply press the start button and the multiple choice questions will be generated one at time.  Choose your best guess and the trivia trainer will let you know if you are correct or incorrect.  If you are wrong, the correct answer will be revealed so that you can learn!  At the end of your round of 10 questions you will receive your score.


## <a name="future"></a>The Future of Tandem Trivia Trainer
I have a lot of ideas to continue expanding this program as a portfolio piece:
* Allow the user to play a second game with the other questions in the provided data set.
* Expand the dataset
* Add a SQL database so that users can log-in and track their score over time.
* Allow user to compare scores with other users.

## <a name="installation"></a>Installation
To run Tandem Trivia Trainer on your own machine:

Clone or fork this repo:
```
https://github.com/LaRenaiocco/tandem-trivia-trainer
```

Create and activate a virtual environment inside your Trivia Trainer directory:
```
virtualenv env
source env/bin/activate
```

Install the dependencies:
```
pip install -r requirements.txt
```

Run the app:
```

python3.6 server.py
```

You can now navigate to 'localhost:5000/' to access your Tandem Trivia Trainer.

## <a name="license"></a>License
The MIT License (MIT) Copyright (c) 2016 Agne Klimaite

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.