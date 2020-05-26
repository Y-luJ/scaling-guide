with open('regions.txt', 'r+', encoding="utf-8") as file:
    a=file.read()
    print(len(a))
    list=[i for i in a.split('\n')]
    b=[]
    for i in list:
        b.append(i[3:])
    print(b)
    for i in b:
        file.write(str(i)+'\n')