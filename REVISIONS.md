# Roadmap

1. Make my solution more general
- Since the business requirements defined the First Generation as a 10 x 10 2d array, I coded this solution to take that as fact.
- I think a better approach would be allow the user to pass in variable generations and variable data grids.

2. Improve Error Handling
- This first iteration assumes that data is a 10 x 10 grid of numbers. Each helper function should throw errors and/or log any data issues to better-mirror a real user's data

# Very Distant Roadmap

1. Create Github hooks to block PR merges if any tests fail
