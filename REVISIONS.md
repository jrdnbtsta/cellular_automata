# Roadmap

1. Fix es6 styled imports
- As described in the `README.md`, the es6-styled import in my `answerFinalProblem.js` script is currently broken.

2. Write unit tests for each helper function
- Given the time constraints, I was only able to scaffold out the unit tests for for the `getNeighbors` helper function.
- Ideally, each function would have a set of unit tests to cover edge cases, error handling and accuracy

3. Remove unnecessary node packages
- In trying to debug my es6 import issues, I saved several node modules in `package.json` that may  not be needed

4. Make my solution more general
- Since the business requirements defined the First Generation as a 10 x 10 2d array, I coded this solution to take that as fact.
- I think a better approach would be allow the user to pass in variable generations and variable data grids.

5. Improve Error Handling
- This first iteration assumes that data is a 10 x 10 grid of numbers. Each helper function should throw errors and/or log any data issues to better-mirror a real user's data

# Very Distant Roadmap

1. Create Github hooks to block PR merges if any tests fail
