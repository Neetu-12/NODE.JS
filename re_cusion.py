# # multipal...
# user=int(input("enter your no:-"))
# def num(a,b):# a=1,b=0,a=2,b=3,a=3,a=4,b=6,a=5,b=10
#     b*=a #b=1,b=3,b=6,b=10,b=15
#     if a==user: # f,f,f,f
#         print(b) #15
#     else:
#         num(a+1,b) #a=2,b=1, a=3,b=3,b=6,a=4,b=6,a=5,b=10
# num(1,1)


a=[1,2,99,3,15]
max=0
def num(b):
    print(max)
    # if b+1==len(a):
    # if a[b]%3==0:
    if a[b]>max:
        max=a[b]
        # return
    else:
        num(b+1)
num(0)