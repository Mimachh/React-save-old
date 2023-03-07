#!/usr/bin/env python3

n = int(input('Entrer un nombre : '))

if n < 0:
    raise ValueError('Vous devez saisir un nombre positif')

fact = 1
i = 2
while i <= n:
    fact *= i
    i += 1

print(fact)