class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        let stack = [];

        for (const asteroid of asteroids) {
            if (asteroid > 0) {
                stack.push(asteroid);
                continue;
            }

            // While top of stack is positive, we must do collisions
            let last = 0;
            while (stack.at(-1) > 0) {
                if (Math.abs(asteroid) === stack.at(-1)) {
                    last = stack.pop();
                    break;
                } else if (Math.abs(asteroid) > stack.at(-1)) {
                    last = stack.pop();
                } else {
                    last = stack.at(-1);
                    break;
                }
            }

            if (Math.abs(asteroid) > last) {
                stack.push(asteroid);
            }
        }

        return stack;

        // loop through the array
        // once we encounter a negative number,
        // we start a while loop to calculate what we must do
        // while i > 0 and asteroids[i - 1] > 0:
        //     calculate what we must do
        //     if asteroid === negativeAsteroid:
        //         break both, else winner is whoever is larger

        // for (let i = 0; i < asteroids.length; i++) {
        //     // Asteroid is negative.
        //     while (asteroids[i] < 0 && i > 0 && asteroids[i - 1] > 0) {
        //             console.log('hit')
        //             // Asteroid is not at the left most position and the previous asteroid is positive
        //             let prev = asteroids[i - 1];
        //             let cur = Math.abs(asteroids[i]);
        //             if (prev > cur) {
        //                 asteroids.splice(i, 1);
        //                 i--;
        //             } else if (prev < cur) {
        //                 asteroids.splice(i - 1, 1);
        //                 i--;
        //             } else {
        //                 asteroids.splice(i - 1, 2);
        //                 i -= 2;
        //             }
        //     }
        // }

        // return asteroids;
    }
}
