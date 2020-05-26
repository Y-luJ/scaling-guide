with open('dataset_3363_4.txt', 'r') as file:
    a=file.read()
    list = [[i for i in j.split(';')] for j in a.split('\n')]
    del list[-1]
    sum = 0
    for j in list:
        for i in j:
            if i.isdigit():
                sum += int(i)
        print(sum / ((len(j) - 1)))
        sum = 0
    j = 0
    i = 1
    while i < (len(list[j])):
        while j < (len(list)):
            sum += int(list[j][i])
            j+=1
        print(sum / len(list), end=' ')
        i += 1
        j = 0
        sum = 0

    