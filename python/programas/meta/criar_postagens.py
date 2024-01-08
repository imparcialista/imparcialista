from tkinter.filedialog import askdirectory
import pyautogui as gui
import time
import os

# gui.FAILSAFE = True

prefixo = 'cri-'
# extensao_arquivo = '.png'
extensao_arquivo = {
    '.png': 'Extensão Png'
    }

pasta_origem = askdirectory(title='Pasta de origem')
pasta_destino = askdirectory(title='Pasta de destino')
lista_arquivos = os.listdir(pasta_origem)
lista = []

# print(lista_arquivos) # listar itens da pasta de origem

for nome_arquivo in lista_arquivos:
    for chave in extensao_arquivo.keys():
        if chave in nome_arquivo:
            lista.append(nome_arquivo)
            # print(lista)

print(lista)

'''
# print(lista)
lista_imagem_gerada = []
lista_nao_feitos = []
lista_feitos = []

for item in lista:
    if item in lista_imagem_gerada:
        lista_feitos.append(item)
    else:
        lista_nao_feitos.append(item)

lista = []
lista = lista_nao_feitos
'''

# monitor 1360 x 768
clicar_na_imagem = 678, 422
selecionar_troca_imagem = 1143, 545
clicar_subs_imagem = 1000, 432
clicar_caminho_da_pasta = 1000, 60
clicar_nome_do_arquivo = 1000, 700
editar_nome_arquivo = 389, 114
clicar_em_exportar = 1307, 165
pasta_post_redes = 80, 187

contador = 0
gui.PAUSE = 1
gui.alert('O progama foi inciado, solte o mouse e o teclado')
time.sleep(2)


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


def exportar():
    gui.hotkey('ctrl', 'shift', 'e')


def enter():
    gui.press('enter')


def ir_para_pasta(caminho):
    clicar(clicar_caminho_da_pasta)
    time.sleep(0.5)
    gui.write(caminho)
    enter()
    time.sleep(0.75)



def prgm(sku):
    # time.sleep(0.75)
    # time.sleep(0.5)
    gui.PAUSE = 0.5
    clicar(clicar_na_imagem)
    clicar(selecionar_troca_imagem)
    clicar(clicar_subs_imagem)
    time.sleep(0.25)
    ir_para_pasta(pasta_origem)
    clicar(clicar_nome_do_arquivo)
    gui.write(f'{sku}')
    time.sleep(0.25)
    #time.sleep(0.5)
    gui.hotkey('alt', 'a')
    #time.sleep(0.5)
    clicar_duas_vezes(editar_nome_arquivo)
    gui.write(f'SKU-{sku}')
    time.sleep(0.25)
    gui.press('backspace', presses=4)
    time.sleep(0.25)
    enter()
    exportar()
    time.sleep(0.75)
    clicar(clicar_em_exportar)
    time.sleep(0.75)
    ir_para_pasta(pasta_destino)
    #time.sleep(0.5)
    gui.hotkey('alt', 'l')
    time.sleep(0.5)
    print(f'{sku} feito')


def teste(sku):
    print(f'{sku} feito')


for item in lista:
    # teste(item)
    prgm(item)
    contador += 1
    # print(f'SKU-{item}')
    # print(item)


print(f'{contador} imagens criadas')

# print(len(lista_inativos))
# clicar(clicar_na_imagem)
# clicar(selecionar_troca_imagem)
# print(pasta)
#gui.hotkey('win', 'd')
#gui.hotkey('alt', 'tab')
