def even_squared(n):
    sq_list = [i**2 for i in range(1,n+1) if i % 2 == 0]
    print(sq_list)
    
even_squared(20)
