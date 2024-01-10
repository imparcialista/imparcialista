from python.ferramentas import *

itens_por_linha = gui.prompt(text='São quantos itens por linha?',
                             title='Quantidade de itens por linha',
                             default='4')

itens_por_linha_2 = entrada_usuario('São quantos itens por linha?',
                                    'Quantidade de itens por linha',
                                    '4')

copiar_preco = gui.confirm(f'Copiar coluna preço?',
                           'Coluna preço',
                           buttons=['Sim', 'Não'])


copiar_preco_2 = confirmar('Copiar coluna preço?',
                         'Coluna preço',
                         'Sim', 'Não')

copiar_preco_3 = confirmar_verdadeiro_ou_falso('Copiar coluna preço?',
                         'Coluna preço',
                         'Sim', 'Não')

print(itens_por_linha)
print(itens_por_linha_2)
# itens_por_linha_3 = int(itens_por_linha_2)

print(type(itens_por_linha))
print(type(itens_por_linha_2))
# print(type(itens_por_linha_3))

print(copiar_preco)
print(type(copiar_preco))

print(copiar_preco_2)
print(type(copiar_preco_2))
print(copiar_preco == copiar_preco_2)


print(copiar_preco_3)
print(type(copiar_preco_3))
