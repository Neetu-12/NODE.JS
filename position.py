# list1 = [] #Create an empty list
# print("How many numbers do you want to enter in the list: ")
# maximum = int(input())
# print("Enter a list of numbers: ")
# for i in range(0,maximum):
#  n = int(input())
#  list1.append(n) #append numbers to the list
# num = int(input("Enter the number to be searched: "))
# position = -1
# for i in range (0, 1):
#     if list1[i] == num: #number is present
#         position = i+1 #save the position of number
#     if position == -1 :
#         print("Number",num,"is not present in the list")
#     else:
#         print("Number",num,"is present at",position + 1, "position")

list1 = [] #Create an empty list
print("How many numbers do you want to enter in the list: ")
maximum = int(input())
print("Enter a list of numbers: ")
for i in range(0,maximum):
    n = int(input())
    list1.append(n) #append numbers to the list
num = int(input("Enter the number to be searched: "))
position = -1
for i in range (0, 1):
    if list1[i] == num: #number is present
        position = i+1 #save the position of number
    if position == -1 :
        print("Number",num,"is not present in the list")
    else:
        print("Number",num,"is present at",position + 1, "position") 