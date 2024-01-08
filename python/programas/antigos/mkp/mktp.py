# print('Olá mundo!')

def main():
    imposto = float(input('Bem vindo!\n'
                          'Qual a porcentagem que você paga de imposto?\n>'))
    imposto = imposto / 100.0

    q1 = int(input('\nEscolha um Marketplace\n\n[1] Mercado Livre\n[2] Shopee\n>'))
    if q1 == 1:
        taxa_marketplace = 11
        taxa_marketplace = taxa_marketplace / 100.0
        q2 = int(input('\nComissão do Mercado Livre = {:.0f}. O valor está correto?\n'
                       '[1] Sim, quero continuar\n'
                       '[2] Não, quero mudar\n'
                       '\n>'.format(taxa_marketplace * 100)))
        if q2 == 2:
            taxa_marketplace = float(input('\nDigite a comissão do marketplace\n>'))
            taxa_marketplace = taxa_marketplace / 100.0
            print('\nComissão alterada para = {:.0f}'
                  .format(taxa_marketplace * 100))

        taxa_final = (taxa_marketplace * 100) + (imposto * 100)
        print('Taxa {:.0f}% + Imposto {:.0f}% = Taxa final {:.0f}%'
              .format(taxa_marketplace, imposto, taxa_final))

        taxa_final = taxa_marketplace + imposto
        print('Taxa {:.0f}% + Imposto {:.0f}% = Taxa final {:.0f}%'
              .format(taxa_marketplace, imposto, taxa_final))

        custo = float(input('Digite o custo do produto R$ '))
        lucro_desejado = float(input('Digite o lucro desejado '))
        lucro_desejado = lucro_desejado / 100.0
        novo_custo = custo + (lucro_desejado * custo)
        lucro_real = custo - novo_custo

        if novo_custo <= 58.18:
            frete = 5
            novo_custo = novo_custo + frete
            adicional = float(input('Digite a porcentagem adicional desejada '))
            adicional = adicional / 100.0
            novo_custo = novo_custo + (adicional * novo_custo)

            print('Custo do produto R$ {:.2f} '
                  '\n+ frete R$ {:.2f} '
                  '\n+ aumento {:.0f}% '
                  '\n= novo preço R$ {:.2f}'
                  .format(custo, frete, adicional * 100, novo_custo))
        else:
            print('Erro')
            frete = 15
            novo_custo = novo_custo + frete
            adicional = float(input('Digite a porcentagem adicional desejada '))
            adicional = adicional / 100.0
            novo_custo = novo_custo + (adicional * novo_custo)
            print('Custo do produto R$ {:.2f} '
              '\n+ frete R$ {:.2f} '
              '\n+ aumento {:.0f}% '
              '\n= novo preço R$ {:.2f}'
              .format(custo, frete, adicional * 100, novo_custo))

    elif q1 ==2:
        print('shopee')
    else:
        main()

'''
        imposto = float(input('Qual a porcentagem que você paga de imposto? '))
        imposto = imposto / 100.0
        taxa_marketplace = float(input('Digite a comissão do marketplace '))
        taxa_marketplace = taxa_marketplace / 100.0
        taxa_final = taxa_marketplace + imposto
        restante = novo_custo - (novo_custo * taxa_final)
        prova = restante - lucro_real - frete - custo
'''

main()

