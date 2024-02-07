# Prime Number Visualization
link to pages https://samuelkodehode.github.io/Polar-Visualization-of-Primes/

This TypeScript project visualizes prime numbers on an HTML canvas using polar coordinates.

## How it Works

The application leverages polar coordinates and the Sieve of Eratosthenes algorithm to generate and visualize prime numbers. Here's a brief overview:

- **Polar to Cartesian Conversion:**
  - The function `polarToCartesian` converts polar coordinates (radius and angle) to Cartesian coordinates (x and y).

- **Prime Number Check:**
  - The `isPrime` function checks whether a given number is prime using a basic primality check algorithm.

- **Visualization on Canvas:**
  - The `main` function generates prime numbers up to the user-specified value.
  - Each prime number is converted to Cartesian coordinates and drawn on an HTML canvas.

## Mathematical Concepts

- **Sieve of Eratosthenes:**
  - The algorithm efficiently finds all prime numbers up to a given limit.
  - In this project, it is used implicitly in the `isPrime` function to count the number of primes.

- **Polar Coordinates:**
  - Polar coordinates represent a point in a plane by its distance from a reference point and the angle made with a reference axis.
  - The `polarToCartesian` function converts polar coordinates to Cartesian coordinates for visualization.


## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/your-project.git
   ```

2. **Navigate to Project Directory:**
   ```bash
   cd your-project
   ```

3. **Install Dependencies:**
   ```bash
   npm install
   ```

4. **Install Prettier:**
   ```bash
   npm install --save-dev prettier
   ```

## Usage

1. **Run TypeScript Compiler (tsc):**
    - To compile TypeScript files, run:
      ```bash
      npx tsc
      ```

2. **Watch Mode:**
    - To run TypeScript Compiler in watch mode, use:
      ```bash
      npx tsc --watch
      ```
