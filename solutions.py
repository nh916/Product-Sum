# o(n) time
# o (d) space
def product_sum(array, multiplier=1):
    # initially set to 0
    sum = 0
    for element in array:
        # can check if its a list by either type() or isinstance ()
        if isinstance(element, list):
            sum = sum + product_sum(element, multiplier + 1)
        else:
            sum += element

    return sum * multiplier


my_array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]
results = product_sum(my_array)

print(results)
