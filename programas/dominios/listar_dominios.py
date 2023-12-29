arq = open("dominios.txt")
linhas = arq.readlines()

lista_de_dominios = []
caminhos = []
vogais = ['a', 'e', 'i', 'o', 'u']
numeros = str([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])

lista_legal = []

lista_com_numeros = []
lista_sem_numeros = []

lista_6 = []
lista_5 = []
lista_4 = []
lista_3 = []
lista_2 = []
lista_1 = []


for linha in linhas:

    ponto = linha.find('.')
    # print(ponto)                  # verificar os a posição onde estão os primeiros pontos

    if ponto > 0:                   # caso não encontre o ponto, não será adicionado na lista
        if ponto <= 6:
            if numeros in linha:
                lista_com_numeros.append(linha)
            else:
                lista_sem_numeros.append(linha)
                if ponto == 6:
                    lista_6.append(linha)
                elif ponto == 5:
                    lista_5.append(linha)
                elif ponto == 4:
                    lista_4.append(linha)
                elif ponto == 3:
                    lista_3.append(linha)
                elif ponto == 2:
                    lista_2.append(linha)
                else:
                    lista_1.append(linha)

    else:
        pass

print(lista_sem_numeros)

todas_listas = {'lista 1' : [len(lista_1), lista_1], 'lista 2' : [len(lista_2), lista_2], 'lista 3' : [len(lista_3), lista_3],
                'lista 4' : [len(lista_4), lista_4], 'lista 5' : [len(lista_5), lista_5], 'lista 6' : [len(lista_6), lista_6]}

for linha in todas_listas['lista 6'][1]:

    # print(linha[0:ponto])
    if vogais[0] and vogais[1] and vogais[2] in linha:

        ponto = linha.find('.')
    else:
        pass
        # print(linha)



#print(lista)

comeca_a = []
comeca_e = []
comeca_i = []
comeca_o = []
comeca_u = []

nao_comeca = []

for linha in lista_de_dominios:
    if vogais[0] in linha[0]:
        comeca_a.append(linha)
    elif vogais[1] in linha[0]:
        comeca_e.append(linha)
    elif vogais[2] in linha[0]:
        comeca_i.append(linha)
    elif vogais[3] in linha[0]:
        comeca_o.append(linha)
    elif vogais[4] in linha[0]:
        comeca_u.append(linha)
    else:
        nao_comeca.append(linha)

'''
print(comeca_a)
print(comeca_e)
print(comeca_i)
print(comeca_o)
print(comeca_u)
print(nao_comeca)


print(caminhos)



for linha in lista_de_dominios:
    ponto = linha.find('.')
    print(f'{linha[0:ponto]} | {len(linha[0:ponto])}')

print(lista_6)
print(lista_5)
print(lista_4)
print(lista_3)
print(lista_2)
print(lista_1)

print(len(lista_6))
print(len(lista_5))
print(len(lista_4))
print(len(lista_3))
print(len(lista_2))
print(len(lista_1))

'''