import pyautogui
import time

# programa para pegar nomes de fotos e colar no notepad++
# esse programa é antigo, eu vou atualizar esse depois 29/12/23

contador = 0
pyautogui.PAUSE = 1
pyautogui.alert('O progama foi inciado, solte o mouse e teclado')
time.sleep(1)


def prgm():
    time.sleep(0.5)
    pyautogui.PAUSE = 0.15
    pyautogui.click(x=533, y=13)
    pyautogui.press('down')
    pyautogui.press('f2')
    pyautogui.hotkey('ctrl', 'c')

    pyautogui.click(x=1551, y=11)
    pyautogui.hotkey('ctrl', 'v')
    pyautogui.press('enter')


for lista in range(4):
    prgm()
    contador = contador + 1
    # pyautogui.alert('{} atualizados'.format(contador))
    print('{} atualizados'.format(contador))

pyautogui.hotkey('win', 'd')

# pyautogui.hotkey('alt', 'tab')
