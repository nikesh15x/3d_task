class Rectangle:
    def __init__(self, length, width):
        if not isinstance(length, (int, float)) or not isinstance(width, (int, float)):
            raise ValueError("dimension must be float or int")
        self.length = length
        self.width = width

    def calArea(self):
        return self.length * self.width

    def calPerimeter(self):
        return 2 * (self.length + self.width)


react = Rectangle(8.5, "6.8")

print("Area of Rectangle is :", react.calArea())
print("Perimeter of Rectangle is :", react.calPerimeter())
