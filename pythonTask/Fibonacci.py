def fibonacci(n):
  a = 0
  b = 1
  print("First",n ,"Numbers")
  fib_list = []
  for i in range(n):
    fib_list.append(a)
    c = a + b
    a,b = b,c 
     
  return fib_list


print(fibonacci(10))
