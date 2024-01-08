# print('Olá mundo!')

def main():
    custo = 44.75
    lucroDesejado = 30 / 100  # 30%
    novocusto = custo + (lucroDesejado * custo)
    lucro_real = novocusto - custo
    frete = 0

    # print('CUSTO R$ {:.2f} + {}% = NOVO CUSTO R$ {:.2f}'.format(custo, lucroDesejado, novocusto))

    if novocusto <= 58.18:
        frete = frete + 5
        novocusto = novocusto + frete
        aumento = 25 / 100
        novocusto = novocusto + (aumento * novocusto)
        print('CUSTO R$ {:.2f} + FRETE R$ {:.2f} + AUMENTO {}% = NOVO PREÇO R$ {:.2f}'.format(custo, frete, aumento,
                                                                                              novocusto))
        subtrair = 20 / 100  # 20%
        sobra = novocusto - (novocusto * subtrair)
        prova = ((sobra) - lucro_real) - custo - frete
        print('PROVA {:.2f} '.format(prova))
        if novocusto > 79:
            print('ERRO NO PROGRAMA')
    else:
        print('\nCLIENTE PAGA O FRETE')
        frete = frete + 15
        novocusto = novocusto + frete
        aumento = 25 / 100
        novocusto = novocusto + (aumento * novocusto)
        print('CUSTO R$ {:.2f} + FRETE R$ {:.2f} + AUMENTO {}% = NOVO PREÇO R$ {:.2f}'.format(custo, frete, aumento,
                                                                                              novocusto))
        subtrair = 20 / 100  # 20%
        sobra = novocusto - (novocusto * subtrair)
        prova = ((sobra) - lucro_real) - custo - frete
        print('PROVA {:.2f} '.format(prova))
        if novocusto >= 80:
            print('FRETE GRÁTIS')
        else:
            print('ERRO NO PROGRAMA')

    # print('\nLUCRO REAL R$ {:.2f} | VALOR DO FRETE R${:.2f}'.format(lucro_real,frete)) #print('O novo custo é \nR$ {:.2f}'.format(novocusto)) #print('O lucro real deve ser R$ {:.2f}'.format(lucro_real)) #print('Valor do frete R$',frete)


if __name__ == "__main__":
    main()
