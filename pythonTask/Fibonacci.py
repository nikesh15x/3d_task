def fibonacci(n):
    try:
        if not isinstance(n, int):
            raise ValueError("Error -> n must be an integer")
        a = 0
        b = 1
        print("First", n, "Numbers")
        fib_list = []
        for i in range(n):
            fib_list.append(a)
            c = a + b
            a, b = b, c
        return fib_list
    except Exception as e:
        return e


print(fibonacci(12))
