/*
abstract class class_one {
    fun_one(): any {
        return "Hello_1";
    }
    abstract fun_two(): any;
};

class class_two extends class_one {
    fun_two(): any {
        return "Hello2"
    };
};

let obj: class_two = new class_two();
console.log(obj.fun_one(), obj.fun_two()); // Hello_1 Hello2

*/

/*
//Multi level inheritance

abstract class class_one {
    abstract var_one: any;
}

abstract class class_two extends class_one {
    var_one: any = "Hello1";
    abstract var_two: any;
}
class class_three extends class_two {
    var_two: any = "Hello2";
}

let obj: class_three = new class_three();
console.log(obj.var_one, obj.var_two); //Hello1 Hello2
*/

interface interface1 {
    fun_one(): any;
}

abstract class class_one implements interface1 {
    fun_one(): any {
        return "hello1";
    }
    abstract fun_two(): any;
}

class class_two extends class_one {
    fun_two(): any {
        return "Hello_2";
    }
}

let obj: class_two = new class_two();
console.log(obj.fun_one(), obj.fun_two()); //hello1 Hello_2