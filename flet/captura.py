import flet as ft
import pyautogui
import time


def main(page: ft.Page):
    # t = ft.Text(value=f"Iniciando", color="green")
    x = ft.Text(value=f"Iniciando", color="green")
    y = ft.Text(value=f"Iniciando", color="green")

    def capturador(e):
        for i in range(0, 60000):
            # t = ft.Text(value=f"Posição \nX {pyautogui.position()[0]} Y {pyautogui.position()[1]}", color="green")
            x = ft.TextField(label='X', value=f'{pyautogui.position()[0]}', width=100)
            y = ft.TextField(label='Y', value=f'{pyautogui.position()[1]}', width=100)
            # page.controls.append(t)
            page.controls.append(x)
            page.controls.append(y)
            page.update()
            # page.controls.remove(t)
            page.controls.remove(x)
            page.controls.remove(y)

            time.sleep(0.01)

    submit_btn = ft.ElevatedButton(text="Começar", on_click=capturador)
    # page.controls.append(t)
    # page.controls.append(x)
    # page.controls.append(y)
    # page.controls.append(submit_btn)
    output_text = ft.Text()
    submit_btn = ft.ElevatedButton(text="Definir", on_click=capturador)
    color_dropdown = ft.Dropdown(
        width=100,
        options=[
            ft.dropdown.Option('5'),
            ft.dropdown.Option('10'),
            ft.dropdown.Option('15',),
        ],
    )

    # page.add(color_dropdown, submit_btn, output_text)
    page.add(
        ft.Row(controls=[
            color_dropdown,
            submit_btn,

        ])
    )




        # page.controls.clear()
        # page.controls.append(t)


    #page.update()

ft.app(target=main)