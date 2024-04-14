@everyone

**TASK #3** (These passed strings are moves (for example, Rock Paper Scissors or Rock Paper Scissors Lizard Spock or 1 2 3 4 5 6 7 8 9))

For those who have already sent #1 and #2.

Using the language of your choice—from the Java/C#/PHP/JavaScript/TypeScript/Ruby/Python set, please—to write a script that implements a **generalized** rock-paper-scissors game (with the supports of arbitrary odd number of arbitrary combinations). Of course, it's recommended to use the language of your "specialization", but it's not required.

When launched with **_command line parameters_** (arguments to the main or Main method in the case of Java or C#, sys.argv in Python, process.argv in Node.js, etc.) it accepts an odd number ≥ 3 non-repeating strings (if the arguments are incorrect, you must display a neat error message—what exactly is wrong and an example of how to do it right). All messages should be in English. These passed strings are moves (for example, Rock Paper Scissors or Rock Paper Scissors Lizard Spock or 1 2 3 4 5 6 7 8 9).

Important: **_moves are passed as command line arguments_**, you don't parse them from the input stream (for example, a move may contain a space, but it shouldn't matter to your code).

The victory is defined as follows—half of the next moves in the circle wins, half of the previous moves in the circle lose (the semantics of the strings-moves is not important, he plays by the rules build upon the moves order the user used, even if the stone loses to scissors in its order—the contents of the strings-moves are not important for you).

The script generates a **_cryptographically strong random key_** (SecureRandom, RandomNumberGenerator, etc. - **mandatory**) with a length of **_at least 256 bits_**, makes own (computer's) move, calculates HMAC (based on SHA2 or SHA3) from the own move as a message with the generated key, displays the HMAC to the user. After that the user gets "menu" 1 - Stone, 2 - Scissors, ...., 0 - Exit. The user makes his choice (in case of incorrect input, the "menu" is displayed again). The script shows who won, the move of the computer and the original key.

Re-read the paragraph above, the sequence is critical (it simply doesn't make sense to do it differently, for example, showing the key before the user's turn or HMAC instead of the key).

Thus the user can check that the computer plays fair (did not change its move after the user's move).

When you select the "help" option in the terminal, you need to display a table (ASCII-graphic) that determines which move wins.

The table generation should be in a separate class, the definition of the "rules" who won should be in a separate class, the key generation and HMAC functions should be in a separate class (at least 4 classes in total). You should use the core class libraries and third-party libraries to the maximum, and not reinvent the wheel. Help should be formatted as an N + 1 by N + 1 table, where N is the number of moves (determined by the number of arguments passed to the script). +1 to add a title for the rows and a title for the columns (contain the title of the move). Cells can contain Win/Lose/Draw.

THE NUMBER OF MOVES CAN BE ARBITRARY (odd and > 1, depending on the passed parameters), it is not hardwired into the code.

To submit the solution you need to send to **p.lebedev@itransition.com**:

1. link to a video demonstrating launch with 3 and 7 parameters, launch with incorrect parameters (repeated or even number, one or no), help table generation (on 5 parameters), choice of the user move, output of results;
2. link to Github public repository.

And as an explanation: when calculating HMAC, the key is the same secret key that you generated. And the message is a move string. After own move the user obtains a key and the computer's move& And the user will be able to calculate the HMAC and compare with the HMAC that was shown before the user's move. It's not very difficult 🙂

A common mistake is trying to invent your "HMAC" as a hash of a random "key". This will not work. If you show the same lines before the move and after the move, the user does not receive new information after the move and, accordingly, you do not prove anything to him. It is necessary to generate a key (with a secure generator), make a computer move, calculate HMAC (by a standard algorithm) from a computer move (message) and a key (key), show HMAC, get a user move, show a key. Re-read this paragraph until the total comprehension.

The example of the "correct" order (although the user may use a different order and play a game of scissors defeating rock; or play a game of MOVE1 MOVE2 MOVE3): STONE PAPER SCISSORS or STONE SPOCK PAPER LIZARD SCISSORS.

What is this task for? You need to understand hash function a little bit deeper, understand whay they are for, add HMAC idea, learn to think how the exact sequence of steps can give you some kind of prove or contract, work with external libraries, touch some basics of OOP and a few other things.

DEADLINE for this and the rest of the tasks is the same—before the project start (you can check the schedule).

# Task #3 Process files, calculate checksums, follow the instruction, etc.

## Language Options

Choose any of the following languages to complete the task:

- C#
- JavaScript
- TypeScript
- Ruby
- PHP
- Python
- Java
- or any other language of your preference

## Task Description

1. Calculate the SHA3-256 hash for each file from the provided archive.
2. The files are binary, so encoding is not required. Ensure not to perform any encoding-decoding activity.
3. Convert each hash to 64 hex digits in lowercase.
4. Sort the hashes in ascending order as strings.
5. Concatenate the sorted hashes without any separator.
6. Append your email address in lowercase to the concatenated string.
7. Calculate the SHA3-256 hash of the resulting string.

## Submission Instructions

- Once you obtain the 64 hex digits in lowercase, submit them to the Discord channel using the command:

## Additional Hints

- Ensure the correct usage of SHA3-256.
- Confirm processing exactly 256 required files.
- Concatenate strings without separators.
- Ensure the email address is lowercase and placed at the end of the resulting string.
- Calculate separate hash for every file.

## Deadline

Next Friday

Note: Do not edit binary files in text editors; redownload if necessary.

## Task1: Longest Common Substring

### Problem Statement

Write a JavaScript code that prints the longest common substring of passed arguments. The code will be running under Node.js, and arguments will be passed via the command line. If the longest common substring is empty (no arguments are passed or arguments have no common substrings), print a single newline. If there are several solutions, print any single one of them.

### Limits

- Single string length: ≤ 256
- Number of strings: ≤ 64
- Strings contain only English letters and digits
- Time limit per test: 5 seconds

### Requirements

- Output should not contain any excess characters (error or debug messages, additional newlines, etc.).
- The solution is accepted if all tests are passed.
- Result is calculated based on JavaScript file size (the smaller the better). So, no comments, no long names, no indents, etc.
- You cannot use any external packages or imports.
- You cannot access "external world", e.g., read files, open network connections, etc.
- Your solution should be in the lcs.js file.
- You have to use only command-line arguments (no readline, no process.stdin, etc.; ONLY process.argv).
- When called without arguments, your script should not fail.
- If any test is failed, your grade for this task is zero.

**Task #1 (ALL GROUPS)**

**How to submit task #1:**
You have to drag and drop a script with the solution into the #task1 channel. And type (in the same message, not a separate one) the following line:

```
!task1 email.used@for.registration.here
```

**You have to use the email specified during course enrollment.**

Submitted solutions are checked by a script, do not add descriptions or instructions.

If something went wrong, just describe the situation via email to p.lebedev@itransition.com.
