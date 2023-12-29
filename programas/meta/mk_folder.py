import pyautogui as gui
import time
import pyperclip
import sys

list_sku = []
list_products = []
list_prices = []
# list_geral = []

contador = 0
gui.PAUSE = 0.03


def copiar():
    gui.hotkey('ctrl', 'c')


def colar():
    return str(pyperclip.paste())


def copiar_e_colar():
    copiar()
    retorno = colar()
    return retorno


def tab():
    gui.PAUSE = 0.25
    gui.press('tab')
    gui.PAUSE = 1


def clicar(posicao):
    gui.PAUSE = 0.25
    gui.moveTo(posicao)
    gui.click(posicao)
    gui.PAUSE = 1


def clicar_duas_vezes(posicao):
    gui.PAUSE = 0.25
    gui.moveTo(posicao)
    gui.doubleClick(posicao)
    gui.PAUSE = 1


def alerta(titulo, mensagem):
    gui.alert(text=f'{mensagem}',
              title=f'{titulo}',
              button='OK')


def pausa(tempo, mensagem):
    teste = gui.confirm(f'{mensagem}',
                        'Programa LRC',
                        buttons=['Prosseguir', 'Parar'])
    if teste == 'Parar':
        alerta('O programa foi parado com sucesso', 'Fim do programa')
        sys.exit()

    time.sleep(tempo)


alerta('Início do programa',
       'Coloque o programa no primeiro item para copiar os dados')
pausa(5, 'Clique em prosseguir, e em seguida '
         'clique na primeira linha para copiar')

valor_de_linhas = gui.prompt(text='Quantidade de linhas',
                             title='Quantidade de linhas' ,
                             default='4')

valor_de_colunas = gui.prompt(text='Quantidade de colunas',
                              title='Quantidade de colunas' ,
                              default='4')

print(valor_de_colunas, valor_de_linhas)
pausa(5,' parar')


for i in range(16):
    # print(i)
    copiar()


    sku = copiar_e_colar()
    list_sku.append(sku)
    # list_geral.append(sku)
    gui.press('right')

    produto = copiar_e_colar()
    list_products.append(produto)
    # list_geral.append(produto)
    gui.press('right')

    preco = copiar_e_colar()
    list_prices.append(preco)
    # list_geral.append(preco)
    gui.press('left')
    gui.press('left')
    gui.press('down')


print('\n-----------------')

pausa(5, 'coloque o programa no figma, '
         'e aperte enter no texto para entrar na edição')


def contagem(valor):
    for indice in range(valor, (valor + 4)):
        # print(i)
        texto = str(list_products[indice])
        pyperclip.copy(texto)
        gui.PAUSE = 0.25
        gui.hotkey('ctrl', 'v')
        tab()
        # print(list_sku[indice], list_products[indice])

    for indice in range(valor, (valor + 4)):
        # print(i)
        valor_preco = str(list_prices[indice])
        pyperclip.copy(valor_preco)
        gui.PAUSE = 0.25
        gui.hotkey('ctrl', 'v')
        tab()
        # print(list_sku[indice], list_prices[indice])


contagem(0)
contagem(4)
contagem(8)
contagem(12)

alerta('O programa foi parado com sucesso', 'Fim do programa')
