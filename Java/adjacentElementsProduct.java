class adjacentElements {
  int adjacentElementsProduct(int[] inputArray) {
    int largest = inputArray[0] * inputArray[1];
    for (int i = 0; i < inputArray.length - 1; i++) {
      int temp = inputArray[i] * inputArray[i + 1];
      if (temp > largest) {
        largest = temp;
      }
    }
    return largest;
  }
}