min=0
max=100
n=0
import random
x=random.randint(min,max)
print(x)
while n<6:
  guess=(min+max)//2
  if guess==x:
    print(guess, 'found out!')
    break
  elif guess>x:
    max=guess
  else:
    min=guess
  n+=1
if n>5:
  print(x, 'havent been found')