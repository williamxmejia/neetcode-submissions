class Solution {
    asteroidCollision(asteroids) {
        const stack = [];

        for (const asteroid of asteroids) {
            if (asteroid > 0) {
                stack.push(asteroid);
                continue;
            }

            let shouldPush = true;

            while (stack.length > 0 && stack.at(-1) > 0) {
                const top = stack.at(-1);

                if (top < -asteroid) {
                    stack.pop();          // positive asteroid destroyed
                    continue;
                }

                if (top === -asteroid) {
                    stack.pop();          // both destroyed
                }

                shouldPush = false;       // negative asteroid destroyed
                break;
            }

            if (shouldPush) {
                stack.push(asteroid);
            }
        }

        return stack;
    }
}
