public class MethodOver {
    static int pluseMethod(int x,int y){
            return x+y;
    }
    static double pluseMethod(double x,double y){
        return x+y;
    }
    public static void main(String[] args) {
        int mynum=pluseMethod(50,50);
        double mynum1=pluseMethod(8.9, 9.1);
        System.out.println(mynum);
        System.out.println(mynum1);
    
    }
}
