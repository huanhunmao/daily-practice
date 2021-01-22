package main

import "fmt"

var num = 666
func main(){
	var test = 777
	fmt.Println(num,test) // 666,777 
	test()
}

func test(){
	fmt.Println(num,test)  //cannot call non-function test (type int)
}