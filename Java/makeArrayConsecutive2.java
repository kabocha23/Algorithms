class MakeArrayConsecutive2 {
  int makeArrayConsecutive2(int[] statues) {
    int counter = 0;
    Arrays.sort(statues);
    for (int i = 1; i < statues.length; i++) {
      System.out.println(statues[i]);
      if (statues[i] - statues[i - 1] != 1) {
        counter += statues[i] - statues[i - 1] - 1;
      }
    }
    return counter;
  }
}
