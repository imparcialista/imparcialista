import flet as ft
import pyautogui
import time


def main(page: ft.Page):
    page.title = "Captura XY"
    # page.window_bgcolor = ft.colors.TRANSPARENT
    # page.bgcolor = ft.colors.TRANSPARENT
    page.window_title_bar_hidden = False
    page.window_frameless = False
    page.window_left = 900
    page.window_top = 500
    page.window_width = 300
    page.window_height = 240
    page.window_always_on_top = True
    # page.window_movable = True
    page.window_opacity = 0.90

    def fechar(e):
        page.window_destroy()

    x = ft.Text(value=f"Iniciando", color="green")
    y = ft.Text(value=f"Iniciando", color="green")
    sair_btn = ft.ElevatedButton(text="Sair", on_click=fechar)

    def capturador_1(e):
        page.controls.remove(txt_informativo)
        page.controls.remove(escolha_btn_1)
        page.controls.remove(escolha_btn_2)
        page.controls.append(sair_btn)
        # page.window_frameless = True
        page.window_title_bar_hidden = True
        page.window_height = 200
        page.window_width = 110

        for i in range(0, 60000):
            x = ft.TextField(label='X', value=f'{pyautogui.position()[0]}', width=100)
            y = ft.TextField(label='Y', value=f'{pyautogui.position()[1]}', width=100)
            page.controls.append(x)
            page.controls.append(y)
            page.update()
            page.controls.remove(x)
            page.controls.remove(y)
            time.sleep(0.01)
        page.controls.append(sair_btn)

    def capturador_2(e):
        page.controls.remove(txt_informativo)
        page.controls.remove(escolha_btn_1)
        page.controls.remove(escolha_btn_2)
        page.controls.append(sair_btn)
        # page.window_frameless = True
        page.window_title_bar_hidden = True
        page.window_height = 120
        page.window_width = 110

        for i in range(0, 60000):
            t = ft.Text(value=f"Posição \nX {pyautogui.position()[0]} Y {pyautogui.position()[1]}", color="green")
            page.controls.append(t)
            page.update()
            page.controls.remove(t)
            time.sleep(0.01)
        page.controls.append(sair_btn)

    txt_informativo = ft.Text(value='Antes de escolher, deixe o programa em um lugar adequado, '
                                    'não poderá mexer depois, apenas se reinicar o programa')
    page.add(txt_informativo)
    escolha_btn_1 = ft.ElevatedButton(text="Escolha 1", on_click=capturador_1)
    escolha_btn_2 = ft.ElevatedButton(text="Escolha 2", on_click=capturador_2)

    page.add(escolha_btn_1)
    page.add(escolha_btn_2)


ft.app(target=main)
