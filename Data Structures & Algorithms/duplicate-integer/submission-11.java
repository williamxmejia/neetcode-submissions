class Solution {
    public boolean hasDuplicate(int[] nums) {
        HashMap<Integer, Boolean> map = new HashMap<>();
        for (Integer num : nums) {
            if (map.containsKey(num)) {
                return true;
            }
            map.put(num, true);
        }
        return false;
    }
}