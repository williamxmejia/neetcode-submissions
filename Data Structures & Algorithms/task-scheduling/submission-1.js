class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const taskCounts = {};
        for (const task of tasks) {
            taskCounts[task] = (taskCounts[task] ?? 0) + 1;
        }
        const counts = Object.values(taskCounts);
        const maxHeap = new MaxPriorityQueue();
        for (const count of counts) {
            maxHeap.enqueue(Number(count));
        }

        let time = 0;
        const cooldownQueue = [];

        while (maxHeap.size() > 0 || cooldownQueue.length > 0) {
            time++;

            if (maxHeap.size() > 0) {
                const max = maxHeap.dequeue();
                if (max - 1 !== 0) {
                    cooldownQueue.push([max - 1, time + n]);
                }
            }

            if (cooldownQueue.length > 0 && cooldownQueue[0][1] === time) {
                const top = cooldownQueue.shift();
                maxHeap.enqueue(top[0]);
            }
        }

        return time;

    }
}
