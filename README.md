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
