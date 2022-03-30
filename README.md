# playwright-experiments

### Goal

Reviewing playwright's ability to test different web features.

Using https://the-internet.herokuapp.com as a training ground, I'll be creating playwright in 3 different stages:

1. a first pass test > all code in 1 one, no smart/abstraction/page objects
2. a refined test > storing properties in variables + utilising hooks
3. a future proof test > refine with playwright + test automation best practices

Chrome will be used for these tests.

### Why

This intention is to capture:

- time needed to create a test when using the different methods abvoe
- test duration of each test
- overall ease of use of playwright using ts
- also, it's my first time using playwright

### Test areas

I've chosen the below interactions to cover basic functions to typically more complicated actions. 

I've purposefully excluded things focusing on page navigation, clicking, input text as that's bread & butter nowawdays.

- https://the-internet.herokuapp.com/checkboxes
- https://the-internet.herokuapp.com/disappearing_elements
- https://the-internet.herokuapp.com/drag_and_drop
- https://the-internet.herokuapp.com/entry_ad
- https://the-internet.herokuapp.com/frames
- https://the-internet.herokuapp.com/tables
- https://the-internet.herokuapp.com/upload
- https://the-internet.herokuapp.com/download


### Running

`npm install`

Includes GitHub Actions, because it's cool. 
