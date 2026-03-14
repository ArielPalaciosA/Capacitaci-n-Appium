Feature: Login

  Scenario: El usuario inicia sesión con credenciales válidas
    Given la app está abierta
    When el usuario ingresa "Appium" en el campo usuario
    And el usuario ingresa "12345678" en el campo contraseña
    And el usuario presiona el botón de iniciar sesión
    Then se muestra la pantalla principal