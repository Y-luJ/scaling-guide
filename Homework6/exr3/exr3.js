
function deepequal(a, b) {
    if (typeof(a)===typeof(b)==='object' && typeof(a)==='object' && a!=null, b!=null && Object.keys(a).length===Object.keys(b).length) {
        let check=true;
        for (key in a) { 
            if (b.hasOwnProperty(key)) {
                if (typeof(a[key])!='object') {
                    if (a[key]!=b[key]) {
                    check=false;
                }
            } else {
                deepequal(a[key], b[key]);
            }
            } else {
                check=false;
            }  
        }
        return check;
    }   else {
            return a===b;
    }
}
