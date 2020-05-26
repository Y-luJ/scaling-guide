s=input()
letters=[]
amount=[]
n=''
for i in s:
    while i.isdigit():
        n+=i
    amount+=n
print(amount)