from tkinter.filedialog import askdirectory
import pyautogui as gui
import time
import os

# gui.FAILSAFE = True

extensao_arquivo = {
    '.png': 'Extensão Png'
    }

pasta_origem = askdirectory(title='Pasta de origem')
lista_arquivos = os.listdir(pasta_origem)
lista = []

for nome_arquivo in lista_arquivos:
    for chave in extensao_arquivo.keys():
        if chave in nome_arquivo:
            lista.append(nome_arquivo)

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
buscar_sku = 547, 218
produto = 415, 344
aba_imagens = 154, 545
adicionar_arquivos = 552, 690
clicar_em_anexar = 923, 354
salvar_produto = 1011, 236


def esperar(tempo):
    time.sleep(tempo)


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


# comando do figma
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


def apagar(vezes):
    gui.press('backspace', presses=vezes)


def deletar(vezes):
    gui.press('delete', presses=vezes)


def escrever(texto):
    gui.write(f'{texto}')


def esc():
    gui.press('esc')


def selecionar_tudo():
    gui.hotkey('ctrl', 'a')


def colar():
    gui.hotkey('ctrl', 'v')

lista_nova = []
for item in lista:
    lista_nova.append(item.split('-'))

lista_nova_2 = []
for prefixo, nome in lista_nova:
    lista_nova_2.append(nome)

lista_nova = []
for item in lista_nova_2:
    lista_nova.append(item.split('.'))


lista_skus = []
for nome, sufixo in lista_nova:
    lista_skus.append(nome)


print(lista_skus)


def programa(sku):
    gui.PAUSE = 0.5
    clicar(buscar_sku)
    selecionar_tudo()
    #sku.split()
    colar()
    enter()
    esperar(1.5)
    clicar(produto)
    esperar(1.5)
    clicar(aba_imagens)
    clicar(adicionar_arquivos)
    esperar(1)
    escrever(f'{sku}')
    enter()
    esperar(1)
    clicar(clicar_em_anexar)
    esperar(0.5)
    esc()
    clicar(salvar_produto)
    esperar(2)
    print(f'{sku} feito')


contador = 0
gui.PAUSE = 1
gui.alert('O progama foi inciado, solte o mouse e o teclado')
time.sleep(5)

for item in lista:
    programa(item)
    contador += 1
    # print(f'SKU-{item}')
    # print(item)

print(f'{contador} itens feitos')
