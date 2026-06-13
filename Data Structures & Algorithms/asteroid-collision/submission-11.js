class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        let stack = [];

        for (let asteroid of asteroids) {
            while (stack.length > 0 && asteroid < 0 && stack.at(-1) > 0) {
                const diff = asteroid + stack.at(-1);
                if (diff < 0) {
                    // Negative number wins, pop from top
                    stack.pop();
                } else if (diff > 0) {
                    // Positive number wins, do not add asteroid to the stack
                    asteroid = 0;
                    // Essentially break and then signal to not add to the asteroid.
                } else {
                    asteroid = 0;
                    stack.pop();
                }

            }

            if (asteroid !== 0) {
                stack.push(asteroid);
            }

            // if (asteroid > 0) {
            //     stack.push(asteroid);
            //     continue;
            // }

            // // While top of stack is positive, we must do collisions
            // let last = 0;
            // while (stack.length > 0 && stack.at(-1) > 0) {
            //     if (Math.abs(asteroid) === stack.at(-1)) {
            //         last = stack.pop();
            //         break;
            //     } else if (Math.abs(asteroid) > stack.at(-1)) {
            //         last = stack.pop();
            //     } else {
            //         last = stack.at(-1);
            //         break;
            //     }
            // }

            // if (Math.abs(asteroid) > last) {
            //     stack.push(asteroid);
            // }
        }

        return stack;
    }
}
