# Q-1))))..........
# user=input("enter char:")
# a=user.lower()
# b=a[-1::-1]
# if a==b:
#     print("pailin")
# else:
#     print("not pailin")

# # 2))))
# i=1
# r=[]
# while i<=4:
#     user=int(input("enter no:-"))
#     r.append(user)
#     i=i+1
# # print(r)
# j=0
# max=0
# while j<len(r):
#     if r[j]>max:
#         max=r[j]
#     j=j+1
# print(max)
# min=max
# k=0
# while k<len(r):
#     if r[k]<min:
#         min=r[k]
#     k=k+1
# print(min,max)

a= [[1,2,3],[3,2,1]]
s=0
i=0
while i<len(a):
    j=0
    while j<len(a[i]):
        s=s+a[i][j]
        j= j+1
    print(s)

    i=i+1


# sum in recursion...!!!

b=0
def num(a):
    b=b+a
    num(a+1)
num(1)