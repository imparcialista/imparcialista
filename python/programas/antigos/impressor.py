import time
import win32print
import win32api
import os

# vou atualizar esse para uma versão melhor 29/12/23

print('Olá mundo')

lista_impressoras = win32print.EnumPrinters(2)

# print(lista_impressoras)
for impressoras in lista_impressoras:
    print(impressoras)

impressora = lista_impressoras[5]
win32print.SetDefaultPrinter(impressora[2])
caminho = r'D:\Organizar\autoprint\pdf'
lista_arquivos = os.listdir(caminho)
print(lista_arquivos)

acabar = False
contador = 0.0
minutos = 0

while not acabar:
    for arquivo in lista_arquivos:
        win32api.ShellExecute(0, 'print', arquivo, None, caminho, 0)

    time.sleep(15)
    contador += 0.25
    if contador == 1.0:
        minutos += 1
        contador = 0
        print(minutos, 'Minutos se passaram')


