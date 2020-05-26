my = (open('Line.txt', 'a'))
f=str(my)
i=2
if f[i].isdigit():
    my.writelines(f[0]*int(f[i]))
else:
    my.writelines(f[1:-1])
text_for_file = 'a5v14s2'
my.close()