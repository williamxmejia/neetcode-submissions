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
            while (stack.length > 0 && stack.at(-1) > 0) {
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
    }
}
