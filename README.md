Este proyecto implementa un sistema básico de inicio de sesión utilizando Angular y Angular Material. El flujo principal permite al usuario iniciar sesión desde un formulario y redirigirse a una página de inicio (Home). También incluye un botón en la página de inicio que permite regresar al formulario de inicio de sesión.

![image](https://github.com/user-attachments/assets/a4f30e3e-485a-4133-a8c7-7e6fb7434b3a)

1.1 LoginComponent
El componente LoginComponent es responsable de mostrar el formulario de inicio de sesión y gestionar la lógica para validar los datos y redirigir al usuario.

![image](https://github.com/user-attachments/assets/c635336d-8e0c-445c-96d4-736e75268db2)

FormBuilder y FormGroup: Permiten construir y gestionar formularios reactivos. Email: genera el campo obligatorio y debe ser un correo válido.
Contraseña:Es un campo obligator.

![image](https://github.com/user-attachments/assets/303dcf90-6e63-4eb1-8ee9-5574e738cff1)

aqui se agregaron los componentes mat-form-field para crear campos de entrada estilizados, mat-label para etiquetas y mat-error para mostrar mensajes de error si las validaciones fallan.


este componente home nos dice que el usuario ya a ingresado correctamente
![image](https://github.com/user-attachments/assets/ddea7aa4-4502-4050-83c4-6c1ce66a612b)

ya eb el html
![image](https://github.com/user-attachments/assets/581acf63-a881-40e3-ba76-f18a544e908a)

el boton de regresar hace que el usuario pueda rgresar al inicio de sesion

En los enrutamientos se definieron las rutas disponibles en la aplicación y las vincula con los componentes correspondientes.

![image](https://github.com/user-attachments/assets/0217cc4a-00a3-4b55-8329-db5bd986a195)

/login: Muestra el componente de inicio de sesión y /home: Muestra la página de bienvenida.


para nuestro appmodule

![image](https://github.com/user-attachments/assets/b9c6dd0a-2090-4c83-b44a-05823120e78c)

Aqui se importan los módulos de Angular Material necesarios (MatInputModule, MatFormFieldModule, etc.), se Configuran las dependencias para formularios reactivos (ReactiveFormsModule) y se declaran y registran los componentes en la aplicación.
