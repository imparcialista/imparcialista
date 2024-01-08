import pyautogui
import time

contador = 1
pyautogui.PAUSE = 1
pyautogui.alert('O progama foi inciado, solte o mouse e teclado')
time.sleep(1)

def janela_1():
    pyautogui.click(x=320, y=15)      # janela que contém todas as imagens

def janela_2():
    pyautogui.click(x=960, y=15)      # janela de controle

def janela_3():
    pyautogui.click(x=1600, y=15)

def min_jan_3():
    pyautogui.click(x=1800, y=15)   # minimizar a janela 3

def notepad_clica_linha_jan_3():
    pyautogui.click(x=1300, y=135)    #

def buscar_pasta():
    pyautogui.press('F3')

def buscar_url():
    pyautogui.press('F4')

def sel_img():      # seleciona a imagem
    pyautogui.click(x=280, y=190)

def voltar_pesquisa():
    pyautogui.hotkey('alt', 'left')


def prgm():
    time.sleep(0.5)
    numeracao = 1
    controle = 1
    pyautogui.PAUSE = 0.5


    while controle != 200:
        janela_1()
        janela_3()
        janela_2()

        buscar_url()
        pyautogui.write(f'/{controle}')
        pyautogui.press('enter')
        time.sleep(1)

        buscar_url()
        pyautogui.write(f'/m{controle}.txt')
        time.sleep(1)
        pyautogui.press('enter')
        time.sleep(1)

        while numeracao != 17:
            # janela_3()
            # time.sleep(0.5)
            notepad_clica_linha_jan_3()
            time.sleep(1)
            pyautogui.hotkey('ctrl', 'x')
            # time.sleep(0.5)

            janela_1()
            buscar_pasta()
            pyautogui.hotkey('ctrl', 'v')
            pyautogui.press('enter')
            time.sleep(2.5)

            sel_img()
            pyautogui.hotkey('ctrl', 'x')
            pyautogui.click(x=960, y=1000)
            pyautogui.hotkey('ctrl', 'v')
            time.sleep(1.5)
            pyautogui.press('F2')
            time.sleep(1)
            pyautogui.press('left')
            pyautogui.write(f'{numeracao}')
            time.sleep(1.5)
            pyautogui.press('space')
            time.sleep(1.5)
            pyautogui.press('enter')
            time.sleep(1.5)

            numeracao += 1
        numeracao = 1

        janela_2()
        pyautogui.hotkey('alt', 'up')
        controle +=1

    '''
    pyautogui.click(x=1030, y=15)       #meio
    pyautogui.click(x=882, y=150)
    pyautogui.hotkey('ctrl', 'x')


    time.sleep(0.25)

    pyautogui.click(x=1555, y=15)       #pasta
    pyautogui.hotkey('ctrl', 'shift', 'n')
    pyautogui.hotkey('ctrl', 'v')
    pyautogui.press('backspace')
    pyautogui.press('enter')

    time.sleep(0.5)
    print(contador, 'feito')
    '''

pyautogui.hotkey('alt', 'tab')

for lista in range(2):
    prgm()
    contador = contador + 1
    #pyautogui.alert('{} Preços atualizados'.format(contador))


pyautogui.hotkey('alt', 'tab')
