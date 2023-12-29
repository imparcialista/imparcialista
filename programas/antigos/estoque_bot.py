import pyautogui
import time

#   colocar estoque

contador = 0
pyautogui.PAUSE = 0.15
pyautogui.confirm('O progama foi inciado, solte o mouse e teclado')
time.sleep(0.10)


busca = 330, 187
abrir_estoque = 1004, 301
selecionar_estoque = 1198, 364
incluir_lancamento = 1209, 157
salvar_estoque = 785, 546


def prgm():
    pyautogui.PAUSE = 1.15
    time.sleep(0.10)
    pyautogui.hotkey('ctrl', 'c')               # copia a matriz
    pyautogui.hotkey('ctrl', '1')               # alterna para a primeira página, o Bling
    pyautogui.click(busca)                      # seleciona o campo de busca
    pyautogui.hotkey('ctrl', 'a')               # seleciona tudo
    pyautogui.hotkey('ctrl', 'v')               # cola a matriz
    pyautogui.press('enter')                    # pesquisa a matriz
    time.sleep(2.5)                             # espera dois segundos e meio
    pyautogui.click(abrir_estoque)              # abrir estoque, aqui abre a página 2
    time.sleep(2.5)                             # espera dois segundos e meio
    pyautogui.doubleClick(selecionar_estoque)   # selecionar quantidade de estoque da matriz
    pyautogui.hotkey('ctrl', 'c')               # copia a quantidade
    pyautogui.hotkey('ctrl', '3')               # alterna para a tabela do Google
    pyautogui.press('right')                    # move a seleção para a direita
    pyautogui.hotkey('ctrl', 'shift', 'v')      # cola o estoque da matriz na planilha
    time.sleep(1)                               # espera 1 segundo para o programa não copiar um valor errado
    pyautogui.press('end')
    pyautogui.press('left')
    pyautogui.hotkey('ctrl', 'c')               # copia o valor a ser adicionado
    pyautogui.hotkey('ctrl', '2')               # alterna para a página 2
    n1 = pyautogui.prompt('+ para ADICIONAR estoque.\n- para RETIRAR estoque'
                          '\nP = para PULAR este\nS para SAIR do programa ')
    if n1 == 's' or n1 == 'S':
        exit()
    if n1 == '+' or n1 == '-':
        pyautogui.click(incluir_lancamento)     # clicar em '+ Incluir lançamento'
        if n1 == '-':
            time.sleep(1)  # espera um segundo
            print('Falso, retirar estoque')
            pyautogui.press('down')             # seleciona o tipo como 'Saída'
        else:
            print('Verdadeiro, adicionar estoque')
        pyautogui.PAUSE = 0.25
        pyautogui.press('tab')
        pyautogui.hotkey('ctrl', 'v')
        pyautogui.press('tab')
        pyautogui.click(salvar_estoque)         # clicar em salvar na tela de adicionar ou retirar estoque
        time.sleep(0.5)

    else:
        print('Não alterar, pular esse')

    pyautogui.PAUSE = 0.15
    pyautogui.hotkey('ctrl', '2')               # alterna para a página do estoque da matriz
    pyautogui.hotkey('ctrl', 'w')               # fecha a página do estoque da matriz
    pyautogui.hotkey('ctrl', '2')               # alterna para a página da tabela do Google
    pyautogui.press('end')
    pyautogui.press('space')
    pyautogui.press('home')
    pyautogui.press('right')
    pyautogui.press('down')
    time.sleep(0.2)

    print('{} Preços atualizados'.format(contador))


pyautogui.hotkey('alt', 'tab')

for lista in range(1):
    contador = contador + 1
    prgm()


pyautogui.hotkey('alt', 'tab')
