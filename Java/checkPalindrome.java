class CheckPalindrome {
  boolean checkPalindrome(String str) {
    int mid = str.length()/2;
    String str1 = str.substring(0,mid);
    str1 = new StringBuilder(str1).reverse().toString();
    String str2 = str.length() % 2 == 0 ? str.substring(mid,str.length()) : str.substring(mid+1,str.length());
    
    if(str.length() == 1){
        return true;
    }else {
        return str1.equals(str2);   
    }
  }
}  
