import pyautogui
import time

contador = 0
pyautogui.PAUSE = 0.10

pyautogui.alert('O progama foi inciado, solte o mouse e teclado')
time.sleep(2)


def prgm():
    pyautogui.hotkey('ctrl', 'c')
    pyautogui.hotkey('ctrl', 'tab')
    pyautogui.click(x=330, y=187)
    pyautogui.hotkey('ctrl', 'a')
    pyautogui.hotkey('ctrl', 'v')
    pyautogui.press('enter')
    pyautogui.hotkey('ctrl', 'tab')
    pyautogui.press('right')
    pyautogui.hotkey('ctrl', 'c')
    pyautogui.hotkey('ctrl', 'tab')
    pyautogui.click(x=205, y=302)  # selecionar produto
    pyautogui.click(x=1022, y=303)  # abrir carrinho
    time.sleep(2.2)
    pyautogui.click(x=1310, y=256)  # selecionar magalu (substituível)
    time.sleep(1.4)
    pyautogui.click(x=939, y=354)  # clicar no preço
    pyautogui.hotkey('ctrl', 'a')
    pyautogui.hotkey('ctrl', 'v')
    pyautogui.press('tab')
    pyautogui.hotkey('ctrl', 'v')
    pyautogui.click(x=1290, y=726)  # clicar em salvar
    time.sleep(1.5)
    pyautogui.click(x=1243, y=271)  # clicar em sincronizar preços
    time.sleep(0.5)
    pyautogui.click(x=1146, y=294)  # abrir menu de marketplaces
    time.sleep(0.8)
    pyautogui.click(x=996, y=363)  # selecionar magalu (substituível)
    pyautogui.click(x=1274, y=726)  # sincronizar
    time.sleep(2)
    pyautogui.click(x=1272, y=727)  # clicar em salvar
    pyautogui.click(x=206, y=303)  # desselecionar produto
    pyautogui.hotkey('ctrl', 'tab')  # voltar para a tabela
    pyautogui.press('down')
    pyautogui.press('left')
    print(contador, 'feito')


pyautogui.hotkey('alt', 'tab')

for lista in range(1):
    contador = contador + 1
    prgm()

pyautogui.hotkey('alt', 'tab')
