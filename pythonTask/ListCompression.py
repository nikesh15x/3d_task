def even_squared(n):
    try:
        if not isinstance(n, int):
            raise TypeError("input must be an integer")
        sq_list = [i**2 for i in range(1, n + 1) if i % 2 == 0]
        return sq_list
    except Exception as e:
        return e


print(even_squared(12))
