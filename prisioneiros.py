import random

# o enigma dos 100 prisioneiros

print('''
O diretor de uma prisão oferece a 100 presos no corredor da morte, que são numerados de 1 a 100, uma última chance.
Uma sala contém um armário com 100 gavetas. O diretor coloca aleatoriamente o número de um prisioneiro em cada
gaveta fechada. Os prisioneiros entram na sala, um após o outro. Cada prisioneiro pode abrir e examinar 50 gavetas
em qualquer ordem. As gavetas são fechadas novamente depois. Se, durante esta busca, cada preso encontrar seu número
em uma das gavetas, todos os presos são perdoados. Se apenas um prisioneiro não encontrar seu número, todos os 
prisioneiros morrem. Antes que o primeiro prisioneiro entre na sala, os prisioneiros podem discutir a estratégia,
mas não podem se comunicar uma vez que o primeiro prisioneiro entra para olhar nas gavetas. Qual é a melhor
estratégia dos prisioneiros? Se cada prisioneiro selecionar 50 gavetas ao acaso, a probabilidade de que um único
prisioneiro encontre seu número é de 50%. Portanto, a probabilidade de que todos os prisioneiros encontrem seus
números é o produto das probabilidades individuais, que é (1/2)100 ≈ 0,0000000000000000000000000000008, um número
muito pequeno. A situação parece desesperadora.
''')

teste = int(input('Nós podemos resolver esse problema, ou podemos fazer o nosso próprio, o que você prefere?'
                  '\n[1] Fazer o nosso próprio problema'
                  '\n[2] Resolver o problema original\n\n'))


def jogo():
    gavetas = []
    numero_prisioneiro = []
    cartao = 0

    prisioneiros = int(input('Quantos prisioneiros nós temos? Atenção, só pode um ser número par!\n'))

    while prisioneiros < 10:
        print('Este é um número muito baixo, tem que começar pelo menos com 10')
        prisioneiros = int(input('Quantos prisioneiros nós temos? Atenção, só pode um ser número par!\n'))

    while (prisioneiros % 2) != 0:
        print("Esse é um número ímpar, tente novamente")
        prisioneiros = int(input('Quantos prisioneiros nós temos? Atenção, só pode um ser número par!\n'))

    tentativas = prisioneiros / 2
    tentativas = int(tentativas)

    for num in range(prisioneiros):
        cartao += 1
        gavetas.append(cartao)
        numero_prisioneiro.append(cartao)

    random.shuffle(gavetas)  # sorteia o valor das gavetas
    random.shuffle(numero_prisioneiro)  # o número que cada prisioneiro deve carregar
    #   prisioneiros = gavetas

    print(f'{numero_prisioneiro}\n{gavetas}\n')  # essa informação vai ser oculta depois
    print(f'\nTemos um total de {len(numero_prisioneiro)} prisioneiros e {len(gavetas)} gavetas\n'
          f'\nCada prisioneiro pode abrir {tentativas} gavetas. Sendo assim, caso ele não consiga'
          f'\nachar seu próprio número depois de {tentativas} tentativas, todos morrem. :D')


def original():
    pass


if teste == 1:
    print('Entrou na primeira')
    jogo()
elif teste == 2:
    print('Entrou na segunda')
    # original()
else:
    print('Entrou na terceira')
    # faz um loop e volta para a pergunta
