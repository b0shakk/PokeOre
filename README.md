
# PokeOre

**PokeOre** is a CTF platform where you can assess your soft skills by brainstorming through levels of puzzles and ciphers with an interesting story-line and compare yourself with other quiz takers. \
Just login and play. \
All the best.

## Built With

**Frameworks used:**

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=green)

**Languages used:**

![Pyhton](https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue)

![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

![html](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

![css](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

![json](https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white)

## Getting Started

We must have a virtual environment activated to be able to install Django. \
Let’s create a virtual environment and activate it:
```
pip install pipenv
pipenv shell
```
```
pip install django
```
Run migrations:
```
python manage.py makemigrations
python manage.py migrate
```
Create superuser:
```
python manage.py createsuperuser
```
Run server:
```
python manage.py runserver
```
Put in APIs:
```
pip install djangorestframework django-cors-headers
pip install crispy-bootstrap5
pip install django-crispy-forms
```

For frontend, build npm:
```
npm run build
```
## Usage

**Website**

Sign up:

Login:

'Home' page:

button for continuing from the last level you reached \
continue hunt -->

'Play' for starting from Level 1:

'Score' page for seeing live **leaderboard** and **softskill rating**:

'Restart' for resetting score and restarting quest:

button for logging out \
am afraid, bye 

**Admin Dashboard**

Users:

Players:


### Soft Skill Measure
**Logic:**
```
softskill_rating = (player.current_score / 100) - (0.25 * player.wrong_attempts) + (0.15 * player.current_level)
```

### Answers and Deadends

**Answers**
```
answers {
  level1 : "bubble",
  level2 : "bhubaneswar",  
  level3 : "fifteen",
  level4 : "four",
  level5 : "underwater",
  level6 : "phscale",
  level7 : "naoh",
  level8 : "pokemon",
  level9 : "0139"
}
```

**Deadends** \
level2 : if answer == "kolkata" --> deadend1 \
level7 : if answer == "basic" --> deadend2

## Requirements CheckList

**Feature List**
- [x] Anyone with an email address can create an Id and password to participate in the game
- [x] The puzzle must contain
  - [x] Minimum 5 clues
  - [x] Minimum 2 dead-ends
  - [x] Minimum 1 solution
- [x] All the progress / user data depending on your puzzle requirements should be stored for every user
- [x] On refreshing, from either browser or website, the puzzle should start from the same step or give the user an option to restart
- [x] A dashboard for the admin where the progress of all the users can be tracked & analyzed

**Additional Requirements**
- [x] User analytics depending on your puzzle should be stored and shown in the admin dashboard
- [ ] Data analysis using different graphs or tables
- [x] User Leaderboard