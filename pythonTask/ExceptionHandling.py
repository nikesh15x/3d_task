def safe_divide(a, b):
    try:
        if not isinstance(a, (float, int)):
            raise ValueError("only float and int")
        return a / b
    except ZeroDivisionError:
        return "Division by zero not allowed!!!!"
    except Exception as e:
        return e


print(safe_divide(0,0))
