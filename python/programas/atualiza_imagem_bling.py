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

lista_sem_paridade = [
'1321',
'1331',
'1329',
'1327',
'1325',
'1323',
'960 MATRIZ',
'1313',
'1311',
'1307',
'1309',
'1303',
'1301',
'1299',
'1297',
'1295',
'1293',
'1291',
'1289',
'1287',
'1283 MATRIZ',
'1281 MATRIZ',
'1285 MATRIZ',
'1279 MATRIZ',
'1277 MATRIZ',
'1275 MATRIZ',
'1273 MATRIZ',
'1271 MATRIZ',
'1255 MATRIZ',
'1257 MATRIZ',
'1253 MATRIZ',
'1251 MATRIZ',
'1249 MATRIZ',
'1247 MATRIZ',
'1243 MATRIZ',
'1241 MATRIZ',
'1239 MATRIZ',
'1231 MATRIZ',
'1229 MATRIZ',
'1227 MATRIZ',
'1225 MATRIZ',
'1223 MATRIZ',
'1221 MATRIZ',
'1219 MATRIZ',
'1217 MATRIZ',
'1233 MATRIZ',
'1235 MATRIZ',
'1237 MATRIZ',
'1211 MATRIZ',
'1215 MATRIZ',
'1209 MATRIZ',
'1203 MATRIZ',
'1201 MATRIZ',
'1205 MATRIZ',
'1207 MATRIZ',
'1213 MATRIZ',
'1197 MATRIZ',
'1195 MATRIZ',
'1193 MATRIZ',
'1199 MATRIZ',
'1191 MATRIZ',
'1185 MATRIZ',
'1179 MATRIZ',
'1177 MATRIZ',
'1175 MATRIZ',
'1173 MATRIZ',
'1167 MATRIZ',
'1171 MATRIZ',
'1169 MATRIZ',
'1165 MATRIZ',
'1163 MATRIZ',
'1161 MATRIZ',
'1159 MATRIZ',
'1109 MATRIZ',
'941 MATRIZ',
'1105 MATRIZ',
'1107 MATRIZ',
'1101 MATRIZ',
'1099 MATRIZ',
'1141 MATRIZ',
'1157 MATRIZ',
'1155 MATRIZ',
'1153 MATRIZ',
'1151 MATRIZ',
'1147 MATRIZ',
'1149 MATRIZ',
'1145 MATRIZ',
'1143 MATRIZ',
'1091 MATRIZ',
'1093 MATRIZ',
'1095 MATRIZ',
'1097 MATRIZ',
'1085 MATRIZ',
'1083 MATRIZ',
'999 MATRIZ',
'997 MATRIZ',
'995 MATRIZ',
'1023 MATRIZ',
'1021 MATRIZ',
'1019 MATRIZ',
'1017 MATRIZ',
'1015 MATRIZ',
'1013 MATRIZ',
'1011 MATRIZ',
'1009 MATRIZ',
'1007 MATRIZ',
'1005 MATRIZ',
'1003 MATRIZ',
'1001 MATRIZ',
'981 MATRIZ',
'983 MATRIZ',
'985 MATRIZ',
'989 MATRIZ',
'987 MATRIZ',
'991 MATRIZ',
'993 MATRIZ',
'963 MATRIZ',
'967 MATRIZ',
'969 MATRIZ',
'965 MATRIZ',
'979 MATRIZ',
'975 MATRIZ',
'977 MATRIZ',
'971 MATRIZ',
'973 MATRIZ',
'961 MATRIZ',
'959 MATRIZ',
'955 MATRIZ',
'951 MATRIZ',
'949 MATRIZ',
'943 MATRIZ',
'939 MATRIZ',
'937 MATRIZ',
'935 MATRIZ',
'933 MATRIZ',
'903 MATRIZ',
'929 MATRIZ',
'927 MATRIZ',
'925 MATRIZ',
'923 MATRIZ',
'921 MATRIZ',
'919 MATRIZ',
'917 MATRIZ',
'915 MATRIZ',
'913 MATRIZ',
'911 MATRIZ',
'909 MATRIZ',
'907 MATRIZ',
'905 MATRIZ',
'931 MATRIZ',
'901 MATRIZ',
'875 MATRIZ',
'895 MATRIZ',
'893 MATRIZ',
'873 MATRIZ',
'877 MATRIZ',
'887 MATRIZ',
'879 MATRIZ',
'889 MATRIZ',
'891 MATRIZ',
'883 MATRIZ',
'881 MATRIZ',
'885 MATRIZ',
'857 MATRIZ',
'859 MATRIZ',
'861 MATRIZ',
'863 MATRIZ',
'865 MATRIZ',
'867 MATRIZ',
'869 MATRIZ',
'871 MATRIZ',
'899 MATRIZ',
'829 MATRIZ',
'827 MATRIZ',
'821 MATRIZ',
'819 MATRIZ',
'839 MATRIZ',
'749 MATRIZ',
'745 MATRIZ',
'747 MATRIZ',
'741 MATRIZ',
'739 MATRIZ',
'743 MATRIZ',
'737 MATRIZ',
'761 MATRIZ',
'733 MATRIZ',
'731 MATRIZ',
'729 MATRIZ',
'727 MATRIZ',
'723 MATRIZ',
'725 MATRIZ',
'721 MATRIZ',
'707 MATRIZ',
'703 MATRIZ',
'735 MATRIZ',
'669 MATRIZ',
'523 MATRIZ',
'525 MATRIZ',
'527 MATRIZ',
'521 MATRIZ',
'87 MATRIZ',
'85 MATRIZ',
'79 MATRIZ',
'83 MATRIZ',
'81 MATRIZ',
'331 MATRIZ',
'333 MATRIZ',
'375 MATRIZ',
'377 MATRIZ',
'632 MATRIZ',
'387 MATRIZ',
'389 MATRIZ',
'391 MATRIZ',
'395 MATRIZ',
'397 MATRIZ',
'399 MATRIZ',
'614 MATRIZ',
'616 MATRIZ',
'618 MATRIZ',
'620 MATRIZ',
'630 MATRIZ',
'622 MATRIZ',
'626 MATRIZ',
'624 MATRIZ',
'628 MATRIZ',
'598 MATRIZ',
'604 MATRIZ',
'602 MATRIZ',
'600 MATRIZ',
'606 MATRIZ',
'612 MATRIZ',
'610 MATRIZ',
'608 MATRIZ',
'596 MATRIZ',
'594 MATRIZ',
'592 MATRIZ',
'507 MATRIZ',
'570 MATRIZ',
'568 MATRIZ',
'566 MATRIZ',
'562 MATRIZ',
'554 MATRIZ',
'1245 MATRIZ',
'34 MATRIZ',
'538 MATRIZ',
'534 MATRIZ',
'532 MATRIZ',
'530 MATRIZ',
'528 MATRIZ',
'499 MATRIZ',
'497 MATRIZ',
'518 MATRIZ',
'524 MATRIZ',
'512 MATRIZ',
'510 MATRIZ',
'526 MATRIZ',
'500 MATRIZ',
'493 MATRIZ',
'491 MATRIZ',
'481 MATRIZ',
'485 MATRIZ',
'483 MATRIZ',
'477 MATRIZ',
'475 MATRIZ',
'473 MATRIZ',
'469 MATRIZ',
'467 MATRIZ',
'457 MATRIZ',
'455 MATRIZ',
'453 MATRIZ',
'451 MATRIZ',
'443 MATRIZ',
'353 MATRIZ',
'429 MATRIZ',
'125 MATRIZ',
'123 MATRIZ',
'425 MATRIZ',
'431 MATRIZ',
'415 MATRIZ',
'413 MATRIZ',
'105 MATRIZ',
'383 MATRIZ',
'381 MATRIZ',
'379 MATRIZ',
'329 MATRIZ',
'373 MATRIZ',
'371 MATRIZ',
'369 MATRIZ',
'367 MATRIZ',
'342 MATRIZ',
'327 MATRIZ',
'335 MATRIZ',
'337 MATRIZ',
'325 MATRIZ',
'323 MATRIZ',
'197 MATRIZ',
'195 MATRIZ',
'48 MATRIZ',
'115 MATRIZ',
'58 MATRIZ',
'60 MATRIZ',
'68 MATRIZ',
'77 MATRIZ',
'72 MATRIZ',
'101 MATRIZ',
]

# monitor 1360 x 768
clicar_caminho_da_pasta = 1000, 60
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

def tratrar_sku(sku):
    sku_tratado = [sku.split('-')]
    print(sku_tratado[0][0])



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

for item in lista_skus:
    # tratrar_sku(item)
    pass
# print(lista_skus)

# print(lista_sem_paridade)

lista_matriz = []
lista_nao_matriz = []

for item in lista_skus:
    if item in lista_sem_paridade:
        # print(f'NÃO MATRIZ {item}')
        lista_nao_matriz.append(item)
    else:
        # print(f'MATRIZ {item}')
        lista_matriz.append(item)

# print(lista_nao_matriz)
# print(lista_matriz)

def verifica_matriz(sku):
    if sku in lista_matriz:
        resposta = f'{sku} MATRIZ'
        print(resposta)
        escrever(resposta)
    else:
        resposta = f'{sku}'
        print(resposta)
        escrever(resposta)

# for item in lista_skus:
#     verifica_matriz(item)


def programa(sku):
    inicio = time.time()
    gui.PAUSE = 1
    clicar(buscar_sku)
    selecionar_tudo()
    verifica_matriz(sku)
    esperar(1)
    enter()
    esperar(2)
    clicar(produto)
    esperar(1)
    clicar(aba_imagens)
    esperar(1)
    clicar(adicionar_arquivos)
    esperar(1)
    escrever(f'SKU-{sku}.png')
    esperar(2)
    enter()
    esperar(2)
    clicar(clicar_em_anexar)
    esperar(1)
    esc()
    esperar(1)
    clicar(salvar_produto)
    esperar(2)
    print(f'{sku} feito')
    fim = time.time()
    tempo_total = fim - inicio
    print(f"Tempo de execução: {tempo_total} segundos")


contador = 0
gui.PAUSE = 1
gui.alert('O progama foi inciado, solte o mouse e o teclado')
time.sleep(5)

for item in lista_skus:
    programa(item)
    contador += 1
    # print(f'SKU-{item}')
    # print(item)

print(f'{contador} itens feitos')
