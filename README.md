# [GUESS INDIAN SIGN LANGUAGE ALPHABET](https://robizman.github.io/guess-indian-sign-lang-alphabet)

[![GitHub commit activity](https://img.shields.io/github/commit-activity/t/RoBizMan/guess-indian-sign-lang-alphabet)](https://github.com/RoBizMan/guess-indian-sign-lang-alphabet/commits/main)
[![GitHub last commit](https://img.shields.io/github/last-commit/RoBizMan/guess-indian-sign-lang-alphabet)](https://github.com/RoBizMan/guess-indian-sign-lang-alphabet/commits/main)
[![GitHub repo size](https://img.shields.io/github/repo-size/RoBizMan/guess-indian-sign-lang-alphabet)](https://github.com/RoBizMan/guess-indian-sign-lang-alphabet)

### Introduction

Participate in our interactive quiz game to improve your skills with the ISL fingerspelling alphabet. Through interactive and challenging quizzes, you can improve your understanding and fluency in ISL fingerspelling, promoting inclusivity and accessibility in communication.

This project aims to develop an interactive online quiz game for learning and practising the Indian Sign Language (ISL) fingerspelling alphabet. It aims to ensure ISL learning is accessible and enjoyable while also promoting inclusivity and community communication. Through gamification, the project seeks to enhance users' retention and understanding of ISL fingerspelling, ultimately contributing to their language proficiency. Also, this is part of the second portfolio project of the Code Institute course.

#### Target Audience ⁤

Our main target audience consists of people who want to learn ISL, including students, educators, interpreters, and friends or family members who use ISL. If you are interested in language learning and inclusivity or just want a fun and educational challenge, the game is for you.

#### Value Proposition ⁤

Discover a fun and interactive way to master the ISL fingerspelling alphabet through our unique quiz game. We enhance engagement and effectiveness by gamifying the learning process. Regardless of your skill level, our game is a valuable tool for improving your ISL fingerspelling abilities.

![screenshot](documentation/amiresponsive.png)

[Click here to view the Live website](https://robizman.github.io/guess-indian-sign-lang-alphabet)

## Table of contents

1. [Introduction](#introduction)
1. [UX](#ux)
    1. [Five Planes of User Experience](#five-planes-of-user-experience)
        * [The Strategy Plane](#the-strategy-plane)
        * [The Scope Plane](#the-scope-plane)
        * [The Structure Plane](#the-structure-plane)
        * [The Skeleton Plane](#the-skeleton-plane)
        * [The Surface Plane](#the-surface-plane)
    1. [Colour Scheme](#colour-scheme)
    1. [Typography](#typography)
1. [User Stories](#user-stories)
    1. [New Site Users](#new-site-users)
    1. [Returning Site Users](#returning-site-users)
1. [Wireframes](#wireframes)
    1. [Mobile wireframe](#mobile-wireframes)
    1. [Tablet wireframe](#tablet-wireframes)
    1. [Desktop wireframe](#desktop-wireframes)
1. [Features](#features)
    1. [Existing Features](#existing-features)
    1. [Future Features](#future-features)
1. [Tools & Technologies Used](#tools--technologies-used)
1. [Testing](#testing)
1. [Deployment](#deployment)
    1. [Local Deployment](#local-deployment)
        * [Cloning](#cloning)
        * [Forking](#forking)
    1. [Local vs Deployment](#local-vs-deployment)
1. [Credits](#credits)
    1. [Content](#content)
    1. [Media](#media)
    1. [Acknowledgements](#acknowledgements)
***

## UX

In this project, I follow the Five Planes of User Experience model invented by Jesse James Garrett.

### Five Planes of User Experience

This model aids in transforming from abstract ideas, such as creating objectives of the project and identifying the user needs, to concrete concepts, such as assembling visual elements together to produce the visual design of the idea to meet the project's objectives and users' needs.

#### The Strategy Plane

Indian Sign Language (ISL) has recently been brought to the attention of people in India. The Prime Minister of India, Narendra Modi, made it part of the school curriculum. Also, Narendra Modi launched the first official ISL dictionary, which consists of 4,000 signs. They have launched the third edition of ISL, bringing the total number of signs to 10,000 so far.

Users may look for ISL gamification. Therefore, the main objective of this project is to create a gamification website that encourages users to learn and practice ISL fingerspelling alphabet as a first step in learning ISL. Also, a gamification website includes an external resource for users to learn ISL further. Thus, this project aims to meet the business and the user's needs.

#### The Scope Plane

Based on the main objective and goals set out in the Strategy Plane, these requirements for developing the website are broken down into two categories:

##### Content requirements:
- Gamification ISL fingerspelling alphabet
- Facts about ISL
- External resources to learn ISL further

##### Functionality requirements:
- Easy and interactive gamification
- Easy to navigate the gamification website
- Provide an external link to get more resources for learning ISL

#### The Structure Plane

The requirements outlined in the Scope Plane were then used to create a structure for the website. A site map below shows how users can navigate the website easily.

![screenshot](documentation/structure_plane.png)

#### The Skeleton Plane

Please refer to the [Wireframes](#Wireframes) section for more detailed wireframing.

#### The Surface Plane

[Click here to view the live site.](https://robizman.github.io/guess-indian-sign-lang-alphabet)

### Colour Scheme

I used [Color Hunt](https://colorhunt.co/palette/f9a37b06038dfafafa1a4223#justCreated) to generate my colour palette

![screenshot](documentation/colour_palette.png)

The colour palette represents the flag of India. However, it was crucial for the colour palette to pass the minimum colour contrast set by the Web Content Accessibility Guide (WCAG). The colour palette was tested using [Coolors' Color Contrast Checker](https://coolors.co/contrast-checker/). The result below shows that these colours passed the minimum WCAG contrast ratio.

<details>
<summary>Color Contrast Checker</summary>

![screenshot](documentation/orange_black.png)
![screenshot](documentation/blue_white.png)
![screenshot](documentation/blue_yellow.png)
![screenshot](documentation/green_white.png)
</details>

<br>
I have used CSS `:root` variables to easily update the global colour scheme by changing only one value, instead of everywhere in the CSS file.

```css
:root {
    --saffron: #F9A37B;
    --white: #FAFAFA;
    --green: #1A4223;
    --navy: #06038D;
    --black: #191919;
}
```

### Typography

Laila was chosen as the main font for the whole website. The font was imported from Google Fonts. The font makes the website look and feel cartoony and fun.

Arial and sans-serif were used as step-back fonts if Hind Vadodara failed to load on the website.