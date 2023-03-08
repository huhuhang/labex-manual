# Python Style and Consistency Guidelines

To ensure consistency in the style of Python experiments and challenges, LabEx has established the following guidelines for reference.

**First, you need to be familiar with the [general guidelines](/basic/formatting-guide).** The following guidelines are based on the general guidelines.

## Basics

### Coding Environment

- The current experiments and challenges support Python 3.10 environment.

### Coding Style

- Use **4 spaces** for indentation, not `Tabs`.
- Use lowercase letters with underscores to separate words in variable, function, and method names (also known as "snake case").
- Use TitleCase to name classes (also known as "Camel Case").
- Use meaningful English words to name variables, functions, and methods for easy understanding.
- Do not use single-letter variable names outside of lambda. This includes loop variables and comprehensions.
- Provide detailed code comments.

## Experiments

- Reference template: [python/lab-for-loop](https://github.com/labex-labs/templates/tree/master/python/lab-for-loop)

## Challenges

- Reference template: [python/challenge-arithmetic-games](https://github.com/labex-labs/templates/tree/master/python/challenge-arithmetic-games)

<div className="steps-container">

### Basic Code File

1. Provide users with basic code files as much as possible, instead of letting users create files themselves. Exceptions apply.
2. Named in lowercase with underscores to separate words, such as: `sum_of_cubes.py`.
3. The writing specifications of function names, variable names, class names, etc. in the basic code file should include Type Hints and Docstrings.
4. The parts that need to be filled in by users are marked with `# TODO:` and briefly summarized.
5. For Python challenges, avoid using Shell to write tests directly in `verify.sh`. Instead, write standard unit tests using `unittest`.
6. Functions in basic code files should preferably use `return` to return results for easy testing with standard unit tests using `unittest`.
7. When standard unit tests are available, `"showstderr": true` can be configured to display detailed error messages when the test fails, making it easier for users to debug.
8. Basic code files are stored in the `assets` directory and are copied to the environment user directory by configuring the [`assets` field](/basic/how-to-start#assets-configuration) in `index.json`.

### Unit Test Cases

1. Please use `unittest` to write standard unit tests, which can be learned and referenced from [exercism/python](https://github.com/exercism/python/tree/main/exercises/practice).
2. The unit test case file corresponds one-to-one with the basic code file, ending in `_test`.
3. Named in lowercase with underscores to separate words, such as: `sum_of_cubes_test.py`.
4. The unit test case file is stored in the `assets` directory and is copied to the `/tmp` directory by configuring the [`assets` field](/basic/how-to-start#assets-configuration) in `index.json` for invisible testing.

### Challenge Reference Solution

1. The reference solution file is stored in the `solution` directory with the same name as the basic code file, such as: `sum_of_cubes.py`.

</div>
