with open('data.txt', 'r') as file:
    n=int(file.readline())
    k=file.read()
    b=[[int(i) for i in j.split(' ')] for j in k.split('\n')]
    '''
a=[]
for i in range(n):
    a.append([0] * n)
print(a)'''
temp=0
for j in range(n):
    for i in range(n):
        if j>i:
            temp=b[j][i]
            b[j][i]=b[i][j]
            b[i][j]=temp
with open('data1.txt','w') as file:
    file.write(str([[b[j][i] for i in range(n)] for j in range(n)]))
print(b)

