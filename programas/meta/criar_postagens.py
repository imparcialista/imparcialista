from tkinter.filedialog import askdirectory
import pyautogui as gui
import time
import os

# pasta = f'D:/Organizar/Tudo/A Pasta Geral/arrumar/ETP1 LUCAS/imagens/sem_fundo'

prefixo = 'cri-'
# extensao_arquivo = '.png'
extensao_arquivo = {
    '.png': 'Extensão Png'
    }

pasta_origem = askdirectory(title='Pasta origem')
pasta_destino = askdirectory(title='Pasta destino')
lista_append = []

lista_arquivos = os.listdir(pasta_origem)
# print(lista_arquivos) # listar itens da pasta de origem

for nome_arquivo in lista_arquivos:
    for chave in extensao_arquivo.keys():
        if chave in nome_arquivo:
            lista_append.append(nome_arquivo)
            #print(lista_append)

print(lista_append)


clicar_na_imagem = 961, 557
selecionar_troca_imagem = 1709, 541
clicar_subs_imagem = 1579, 689
clicar_pasta_sem_fundo = 100, 209
fechar_subs_imagem = 1659, 508
editar_nome_arquivo = 51, 140
clicar_em_exportar = 1862, 163
pasta_post_redes = 80, 187
clicar_em_salvar = 1749, 996

contador = 0
gui.PAUSE = 1
# gui.alert('O progama foi inciado, solte o mouse e teclado')
time.sleep(1)

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


def prgm(sku):
    time.sleep(0.75)
    gui.PAUSE = 1
    clicar(clicar_na_imagem)
    clicar(selecionar_troca_imagem)
    clicar(clicar_subs_imagem)
    time.sleep(0.5)
    clicar(clicar_pasta_sem_fundo)
    tab()
    tab()
    gui.write(f'{sku}.png')
    gui.press('enter')
    clicar(fechar_subs_imagem)
    clicar_duas_vezes(editar_nome_arquivo)
    gui.write(f'cri-{sku}')
    gui.press('enter')
    exportar()
    time.sleep(0.5)
    clicar(clicar_em_exportar)
    time.sleep(1.5)
    clicar(pasta_post_redes)
    time.sleep(0.5)
    clicar(clicar_em_salvar)
    time.sleep(1)
    print(f'{sku} feito')


'''
for lista in range(1):
    #prgm()
    contador = contador + 1
    #gui.alert('{} atualizados'.format(contador))
    print('{} atualizados'.format(contador))
    
    
def teste(sku):
    print(f'{sku} feito')


# clicar(clicar_na_imagem)


for item in lista:
    # teste(lista)
    prgm(lista)
    pass

print(len(lista_inativos))


# print(pasta)
#gui.hotkey('win', 'd')
#gui.hotkey('alt', 'tab')
'''