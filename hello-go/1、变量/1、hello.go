package main

import "fmt"

func main(){
	fmt.Println("hello world")
	//第一种表达
	// var age int = 22
	// var name string = "test"

	// 第二种表达可省略类型 也是可以的
	// var age  = 22
	// var name  = "test"

	// 第三种表达 
	age := 22
	name := 23

	age,name = name,age  // 两个数字交换 不需要 临时变量
	fmt.Println(age,name) //  22 test 
}

