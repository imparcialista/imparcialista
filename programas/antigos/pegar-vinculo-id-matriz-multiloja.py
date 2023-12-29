import pyautogui
import time

#   editar SEO tray

contador = 0
pyautogui.PAUSE = 1.00
pyautogui.confirm('O progama foi inciado, solte o mouse e teclado')
time.sleep(0.10)

def prgm():
    time.sleep(0.15)
    pyautogui.PAUSE = 0.15
    pyautogui.hotkey('ctrl', 'c')
    pyautogui.hotkey('alt', 'tab')
    pyautogui.hotkey('ctrl', 'f')
    pyautogui.hotkey('ctrl', 'v')
    time.sleep(0.5)
    pyautogui.press('esc')
    pyautogui.press('right')
    pyautogui.hotkey('alt', 'tab')
    pyautogui.press('right')
    pyautogui.hotkey('ctrl', 'c')               # copia o preço
    pyautogui.hotkey('alt', 'tab')              # volta para a planilha
    pyautogui.hotkey('ctrl', 'shift', 'v')      # cola o preço
    pyautogui.press('right')
    pyautogui.hotkey('alt', 'tab')              # volta para a planilha
    pyautogui.press('right')
    pyautogui.hotkey('ctrl', 'c')               # copia o preço por
    pyautogui.hotkey('alt', 'tab')
    pyautogui.hotkey('ctrl', 'shift', 'v')
    pyautogui.press('right')
    pyautogui.hotkey('alt', 'tab')
    pyautogui.press('home')
    pyautogui.hotkey('ctrl', 'c')
    pyautogui.hotkey('alt', 'tab')
    pyautogui.hotkey('ctrl', 'shift', 'v')
    pyautogui.press('right')
    pyautogui.hotkey('alt', 'tab')
    pyautogui.press('right')
    pyautogui.hotkey('ctrl', 'c')
    pyautogui.hotkey('alt', 'tab')
    pyautogui.hotkey('ctrl', 'shift', 'v')
    pyautogui.hotkey('alt', 'tab')
    pyautogui.press('right')
    pyautogui.press('right')
    pyautogui.press('down')
    print('{} SEO atualizados'.format(contador))

pyautogui.PAUSE = 1.50
pyautogui.hotkey('win', 'tab')
pyautogui.press('tab')
pyautogui.press('enter')
time.sleep(1)

for lista in range(100):
    contador = contador + 1
    prgm()


pyautogui.hotkey('alt', 'tab')
