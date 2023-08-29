def is_palindrome(s):
    try:
        if not isinstance(s, str):
            raise TypeError("Error -> Input should be string")
        i = len(s) - 1
        reverseStr = ""
        while i >= 0:
            reverseStr = reverseStr + s[i]
            i = i - 1
        return reverseStr == s
    except Exception as e:
        return e

inputVal = input("Enter a string: ")
print(is_palindrome(inputVal))
