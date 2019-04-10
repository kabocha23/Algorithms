class AlmostIncreasingSequence {
  boolean almostIncreasingSequence(int[] sequence) {
    int ooo = 0;
    for (int i = 1; i < sequence.length; i++) {
      if (sequence[i] <= sequence[i - 1]) {
        ooo++;
        if (i >= 2 && i < sequence.length - 1) {
          if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1])
            ooo++;
        }
      }
    }
    return ooo <= 1;
  }
}