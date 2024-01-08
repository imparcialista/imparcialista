from python.ferramentas import *
import time

list_sku = []
list_products = []
list_prices = []
lista = []
# list_geral = []

contador = 0
gui.PAUSE = 0.03

pasta_com_fotos = selecionar_pasta(f'Pasta com as imagens')

# monitor 1360 x 768
clicar_na_imagem = 678, 422
selecionar_troca_imagem = 1143, 545
clicar_subs_imagem = 1000, 432
clicar_caminho_da_pasta = 1000, 60
clicar_nome_do_arquivo = 1000, 700


def tratrar_sku(sku):
    sku_tratado = [sku.split(' ')]
    lista.append(sku_tratado[0][0])


def contagem(valor):
    for indice in range(valor, (valor + 4)):
        texto = str(list_products[indice])
        pyperclip.copy(texto)
        gui.PAUSE = 0.25
        gui.hotkey('ctrl', 'v')
        tab()

    for indice in range(valor, (valor + 4)):
        valor_preco = str(list_prices[indice])
        pyperclip.copy(valor_preco)
        gui.PAUSE = 0.25
        gui.hotkey('ctrl', 'v')
        tab()


def prgm(sku):
    gui.PAUSE = 1
    clicar(selecionar_troca_imagem)
    clicar(clicar_subs_imagem)
    time.sleep(0.5)
    ir_para_pasta(clicar_caminho_da_pasta, pasta_com_fotos)
    time.sleep(0.5)
    clicar(clicar_nome_do_arquivo)
    time.sleep(0.5)
    gui.write(f'{sku}.png')
    time.sleep(0.25)
    gui.hotkey('alt', 'a')
    print(f'{sku} feito')
    time.sleep(0.5)
    esc()
    time.sleep(0.5)
    tab()
    time.sleep(0.5)


alerta('Início do programa',
       'Coloque o programa no primeiro item para copiar os dados')

pausa(5,
      'Clique em prosseguir, e em seguida clique na primeira linha para copiar')

valor_de_linhas = gui.prompt(text='Quantidade de linhas',
                             title='Quantidade de linhas' ,
                             default='4')

valor_de_colunas = gui.prompt(text='Quantidade de colunas',
                              title='Quantidade de colunas' ,
                              default='4')

pausa(5,
      'Deseja pausar o programa?')

for i in range(16):
    copiar()
    sku = copiar_e_colar()
    list_sku.append(sku)
    gui.press('right')
    produto = copiar_e_colar()
    list_products.append(produto)
    gui.press('right')
    preco = copiar_e_colar()
    list_prices.append(preco)
    gui.press('left')
    gui.press('left')
    gui.press('down')

for item in list_sku:
    tratrar_sku(item)

print('--------Imagens---------')
pausa(5,
      'clique na primeira imagem para ser alterada')

for item in lista:
    prgm(item)
    contador += 1

# print('--------Descrição---------')
pausa(5,
      'coloque o programa no figma e aperte enter no texto para entrar na edição')

contagem(0)
contagem(4)
contagem(8)
contagem(12)

alerta('Fim do programa',
       'O programa foi parado com sucesso')
