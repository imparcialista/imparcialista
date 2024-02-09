from tkinter.filedialog import askdirectory
import pyautogui as gui
import pyperclip
import time
import sys


def escrever(texto):
    gui.write(f'{texto}')


def apenas_encontrar_imagem(imagem, confianca):
    for i in range(5):
        gui.locateOnScreen(imagem, confidence=confianca)  # reconhecimento de imagem
        print(f'nao encontrou {imagem}')
        encontrou = gui.locateOnScreen(imagem, confidence=confianca)
        if encontrou:
            print(f'encontrou {imagem}')
            return encontrou



def encontrar_imagem(imagem, confianca):
    time.sleep(0.25)
    while not gui.locateOnScreen(imagem, confidence=confianca):  # reconhecimento de imagem
        print(f'nao encontrou {imagem}')
        time.sleep(1)
    encontrou = gui.locateOnScreen(imagem, confidence=confianca)
    print(f'encontrou {imagem}')
    return encontrou


def encontrar_e_clicar(imagem, confianca):
    encontrou = encontrar_imagem(imagem, confianca)
    clicar(encontrou)


def esperar(tempo):
    time.sleep(tempo)


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


def entrada_usuario(texto, titulo, valor_padrao):
    entrada = gui.prompt(text=f'{texto}',
               title=f'{titulo}',
               default=f'{valor_padrao}')
    return entrada

def confirmar(texto, titulo, botao_1, botao_2):
    escolha = gui.confirm(texto,
                titulo,
                buttons = [botao_1, botao_2])
    return escolha

def confirmar_verdadeiro_ou_falso(texto, titulo, botao_1, botao_2):
    escolha = gui.confirm(texto,
                titulo,
                buttons = [botao_1, botao_2])
    if escolha == botao_1:
        escolha = True
    else:
        escolha = False

    return escolha