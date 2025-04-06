//  Hashing

class Hashing{
    public int[] count(int[] arr,int[] val){
        int[] hash = new int[10];
        for (int i=0;i<10;i++){
            hash[i] = 0;
        }
        for (int x:arr){
            hash[x]++;
        }
        int[] ans = new int[val.length];
        for (int i=0;i<val.length;i++){
            ans[i] = hash[val[i]];
        }
        return ans;
    }
}

public class Demo{
    public static void main(String[] args) {
        Hashing hs = new Hashing();
        int[] arr = {1,2,3,5,4,1,2,5,4,5,3,1,8};
        int[] target = {1,2,3,4,5,9};
        int[] ans = hs.count(arr,target);
        System.out.println("Number of element is :-");
        for (int x:ans){
            System.out.print(x+" ");
        }
    }
}