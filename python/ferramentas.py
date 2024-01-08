from tkinter.filedialog import askdirectory
import pyautogui as gui
import pyperclip
import time
import sys


def selecionar_pasta(titulo):
    return askdirectory(title=f'{titulo}')


def esc():
    gui.press('esc')


def enter():
    gui.press('enter')


def ir_para_pasta(barra_busca, caminho):
    clicar(barra_busca)
    time.sleep(0.5)
    gui.write(caminho)
    enter()
    time.sleep(0.75)


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
        alerta('Fim do programa',
               'O programa foi parado com sucesso')
        sys.exit()

    time.sleep(tempo)

