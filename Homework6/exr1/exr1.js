function isEven(n) {
    if (Math.abs(n)<2) {
        if (Math.abs(n)==0) {
            return (Math.abs(n)%2==0);
        }
        else {
            if (Math.abs(n)==1) {
                return (Math.abs(n)%2==0);
            }
        }
    }
    else {
        return isEven(Math.abs(n)-2);
    }
}
console.log(isEven(-65));