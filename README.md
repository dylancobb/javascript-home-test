# OakNorth JavaScript Home Test

Hello there! I took the liberty of recording a Loom video of my completion of this challenge in case you're interested in seeing how I reasoned my way through things step by step.

Video link: https://www.loom.com/share/d92884d2579b4fedad1dc031d0541091 📹

Below, I'll detail my general process, and fill in the blanks as to what changes were made between the end of the loom video and the final commit. I also added some things I'd do differently next time.

## The process 🛠️

It seemed reasonable initially to divide the comparison cases up as follows:

- Cases where types differ
- Cases with primitive types
- Arrays
 - Cases where the array lengths differ
 - The function should be able to handle arrays which contain nested arrays or objects
- Objects
 - Cases where objects have differing numbers of properties
 - Cases where some property names differ
 - Cases where some property values differ

In general, I created failing tests for each case and then wrote enough code to pass each test before writing the next test. After creating and testing a working function, I identified a few edge cases I hadn't thought of:

- What happens if one or both arguments are missing?
- What happens if one or both arguments are `null`?
- What happens if one or both arguments are `NaN`?

I was also unsure whether or not it's actually desirable behaviour for assertEquals to return true if both arguments are `undefined`. I decided to leave this behaviour for now, but feel free to let me know if it would be better to throw an error in such cases in practice—presumably TypeScript makes it slightly harder for edge cases like this to even occur to begin with though!

I tested and supplied relevant code to handle the other identified edge cases, and tidied my code up slightly.

## What I'd do differently next time 📝

I'm still learning how to make the best use of Jest, and could probably have outlined tests that need to be written ahead of schedule using `.todo` and structured my work a bit further into the future that way. This might also have avoided the couple of times I realised my code was doing something I hadn't set up a test for yet and had to comment it out and make sure a failing test was ready before continuing.

I also noticed that my use of `describe` was veering a bit towards "nesting hell". I could probably have saved an indentation-level or two, and kept the test blocks a line or two shorter, by using a single describe for *all* of a given group of tests that throws or doesn't throw an error, and then named the individual cases with `it` instead of nesting a second `describe` with its own `it` inside.

I enjoyed this challenge: learning about Jest was already on my immediate todo list and, as a big believer in the [Feynman technique](https://todoist.com/inspiration/feynman-technique), an opportunity to explain the things I've been learning is always appreciated! 😁

I look forward to hearing from you, and to the pairing exercise!